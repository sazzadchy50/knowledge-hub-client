import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FirebaseConfig/Firebase.config";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

 const updateUserProfile = (name, image)=>{
  setLoading(true);
  return updateUserProfile(auth.currentUser,{
    displayName: name, photoURL: image
  })
 }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log("current user", currentUser);
      if (currentUser) {
        axios
          .post(
            "https://knowledge-hub-server-hazel.vercel.app/api/v1/user/access-token",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("token response", res.data);
          });

        setLoading(false);
      } else {
        axios
          .post(
            "https://knowledge-hub-server-hazel.vercel.app/api/v1/user/logOut",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log('logout',res.data);
          });
      }
    });
    return () => {
      return unSubscribe;
    };
  }, [user?.email]);

  const values = {
    createUser,
    logIn,
    googleLogin,
    logOut,
    user,
    loading,
    updateUserProfile
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
