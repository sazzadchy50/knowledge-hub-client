import { useParams } from "react-router-dom";
import useAxios from "../../Hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";



const Wishlist = () => {
    const {id} = useParams()
    const {user} = useAuth()
    const userEmail = user?.email
    console.log(id);
   const axios = useAxios()

   const { data: wishlists } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => {
      return axios.get(`http://localhost:5000/api/v1/user/wishlist/${userEmail}`);
    },
  });
 
    console.log(wishlists?.data);
    return (
        <div>
            wishlist 
        </div>
    );
};

export default Wishlist;