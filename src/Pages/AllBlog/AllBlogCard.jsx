import { Link } from "react-router-dom";
import useAxios from "../../Hook/useAxios";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import { FaHeart } from "react-icons/fa";
const AllBlogCard = ({ blog }) => {
  
  const { image, category, shortDescription, title, _id } = blog;
  const { user } = useAuth();
  const axios = useAxios();
  //handle for  wishlist
  const handleWishlist = () => {
    if (user) {
      const wishlistData = {
        image,
        category,
        shortDescription,
        title,
        blog_id: _id,
        userEmail: user?.email,
      };
  
      axios
        .post("/user/wishlist", wishlistData, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "added to wishlist successfully",
              icon: "success",
              confirmButtonText: "ok",
            });
          }
        })
        .catch((error) => {
          console.log("wishlist error: ", error);
        });
    } else{
      Swal.fire({
        title: "error",
        text: "Please Login first",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };

  return (
    <div>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700   h-full bg-">
        <img className="rounded-t-lg" src={image} alt={title} />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Category</span> :{" "}
            <span className="font-semibold">{category}</span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {shortDescription}
          </p>
          <div className=" flex justify-center gap-5 ">
            <Link
              to={`/details/${_id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center "
            >
              Details
            </Link>
            <Link
              onClick={handleWishlist}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center w-10 hover:bg-red-500"
            >
          
              <FaHeart/>
            </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogCard;
