import { useParams } from "react-router-dom";
import useAxios from "../../Hook/useAxios";
import { useQuery } from "@tanstack/react-query";

import auth from "../../FirebaseConfig/Firebase.config";

const Wishlist = () => {
  // const {user} = useAuth()
  // const userEmail = user?.email

  const axios = useAxios();

  const { data: wishlists } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const userEmail = auth?.currentUser?.email;

      console.log(userEmail);
      const res = await axios.get(
        `https://knowledge-hub-server-hazel.vercel.app/api/v1/user/wishlist/?userEmail=${userEmail}`,
        { withCredentials: true }
      );
      return res;
    },
  });

  console.log(wishlists);
  return <div>wishlist</div>;
};

export default Wishlist;
