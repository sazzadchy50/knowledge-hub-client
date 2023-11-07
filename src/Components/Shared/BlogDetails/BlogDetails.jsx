import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";
import { Link, useParams } from "react-router-dom";


const BlogDetails = () => {
    const {id} = useParams()
    const axios = useAxios();

    const { data: blogDetail, isLoading } = useQuery({
      queryKey: ["blogDetail"],
      queryFn: () => {
        return axios.get(`/allBlog/${id}`);
      },
    });
    const blog = blogDetail?.data;
    // const { image, category, shortDescription, longDescription, title} = blog;
  console.log(blogDetail);
  console.log(blog);
  
    return (
        isLoading? <p>loadingggggg...</p>:
        <div className="container mx-auto ">
           <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700   h-full bg-">
        <img className="rounded-t-lg w-full lg:h-[70vh]" src={blog?.image} alt={blog?.title} />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {blog?.title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Category</span> :{" "}
            <span className="font-semibold">{blog?.category}</span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">short description</span>: {blog?.shortDescription}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Long Description</span>: {blog?.longDescription}
          </p>
          <div className=" flex justify-center gap-5 ">
            {/* <Link
              to={`/details/${_id}`}        
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center "
            >
              Details
            </Link> */}
            <Link
              href="#"
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

export default BlogDetails;