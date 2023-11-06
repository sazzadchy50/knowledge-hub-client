import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { FaLock } from "react-icons/fa";

import Tilt from "react-parallax-tilt";
import useAuth from "../../Hook/useAuth";
import toast, { Toaster } from "react-hot-toast";
import useAxios from "../../Hook/useAxios";

// import { ListGroup } from "flowbite-react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, googleLogin } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios()
console.log(email, password);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const toastId = toast.loading("Logging in ...");

    try {
      await logIn(email, password);
       toast.success("Logged in Successfully", { id: toastId });
       axios.post("/add-blog")
      setTimeout(()=>  navigate("/"), 2000)
      // navigate("/");
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Logging in ...");

    try {
      await googleLogin(email, password);
      toast.success("Logged in successfully", { id: toastId });
      setTimeout(()=> navigate("/"), 2000)
      // navigate("/");
    } catch (error) {
      toast.error(error.message, { id: toastId });
      console.log(" errorrrrr", error);
    }
  };

  return (
    <div
      className="min-h-screen  flex justify-center items-center bg-cover "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/9N2LXSM/alex-shutin-k-Kv-QJ6r-K6-S4-unsplash.jpg)",
      }}
    >
      <Tilt
        className=" lg:parallax-effect-glare-scale rounded-2xl"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        {/* <div
          className="card flex-shrink-0 w-full max-w-md shadow-2xl shadow-slate-700 bg-cover p-5"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/9N2LXSM/alex-shutin-k-Kv-QJ6r-K6-S4-unsplash.jpg)",
          }}
        >
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control ">
              <div className="input-group ">
                <div className="input flex items-center border-none">
                  <FaUserAlt />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input  w-full focus:outline-none"
                  onBlur={(e) => setEmail(e.target.value)}
                  required
                  
                  />
              </div>
            </div>
            <div className="form-control mt-5 ">
              <div className="input-group">
                <div className="input flex items-center ">
                  <FaLock />
                </div>
                <input
                  type="password"
                  placeholder="password"
                  className="input w-full focus:outline-none "
                  required
                  onBlur={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            
            <div className="form-control mt-2">
              <button type="submit" className="btn btn-outline text-white btn-info ">
                Login
              </button>
            </div>
            <div className="divider text-white ">Or, Log In With</div>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-info  w-full flex justify-center items-center cursor-pointer "
            >
              <FcGoogle className="w-8 h-8" />
              Google
            </button>
            <p className="text-center text-sm text-white">
              Don&apos;t have an account ?{" "}
              <NavLink
                to="/registration"
                className="text-primary font-bold hover:underline cursor-pointer "
              >
                Sign Up
              </NavLink>
            </p>
          </form>
        </div> */}
        <div
          className="card flex-shrink-0  max-w-md shadow-2xl shadow-slate-700 bg-cover w-full md:w-[70vh] md:p-12 p-5"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/9N2LXSM/alex-shutin-k-Kv-QJ6r-K6-S4-unsplash.jpg)",
          }}
        >
          <form  onSubmit={handleSubmit} className="">
            <div className="">
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  name="email"
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email"
                  onBlur={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <FaLock />
                </span>
                <input
                  type="password"
                  id="website-admin"
                  className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                  onBlur={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Log in
            </button>
          </form>

          <div className="divide-y divide-gray-100 border-t-2 border-gray-500 mt-5 pt-5">
            <h4 className="text-center text-white">Sign in with google</h4>
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="mt-5 w-full flex justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FcGoogle />
              Google
            </button>
          </div>
          <div>
            <p className="mt-5 text-center text-white text-">
              {" "}
              Do not have an account{" "}
              <Link to="/registration" className="text-red-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </Tilt>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
