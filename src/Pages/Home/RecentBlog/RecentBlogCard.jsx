import { Link, useParams } from "react-router-dom";

// import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import axios from "axios";

const RecentBlogCard = ({ blog }) => {
  const { image, category, shortDescription, title, _id } = blog;
  // const [wishlist, setWishlist] = useState();
  const {id} = useParams()
  const { user } = useAuth();

  //handle for  wishlist  
  const handleWishlist = () => {
    const wishlistData = {
      image,
      category,
      shortDescription,
      title,
      blog_id: _id,
      userEmail: user?.email,
    };
console.log(wishlistData);
    // setWishlist(wishlistData);
    // wishlist post
    axios
      .post(`http://localhost:5000/api/v1/user/wishlist/${_id}`, wishlistData, {
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
      });
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
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center "
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogCard;
