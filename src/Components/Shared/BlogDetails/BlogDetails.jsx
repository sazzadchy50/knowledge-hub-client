import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import Comments from "./Comments";

const BlogDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const { user } = useAuth();
  const [comment, setComment] = useState();
  
  const { data: blogDetail, isLoading } = useQuery({
    queryKey: ["blogDetail"],
    queryFn: () => {
      return axios.get(`/allBlog/${id}`);
    },
  });

  const blog = blogDetail?.data;
  const hookAxios = useAxios();
  
  //comment handle
  const handleComment = (e) => {
    e.preventDefault();

    const commentField = {
      blog_id: id,
      comment,
      userEmail: user?.email,
      UserImage: user?.photoURL,
      userName: user?.displayName,
    };

    // axios
    //   .post("https://knowledge-hub-server-hazel.vercel.app/api/v1/user/comment", commentField, {
    //     withCredentials: true,
    //   })
    axios
      .post("http://localhost:5000/api/v1/user/comment", commentField, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Comment successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  // const { data: recentBlog, isLoading } = useQuery({
  //   queryKey: ["recentBlog"],
  //   queryFn: () => {
  //     return axios.get("/recentBlog");
  //   },
  // });
  const { data: comments } = useQuery({
    queryKey: ["comment"],
    queryFn: () => {
      return axios.get(`http://localhost:5000/api/v1/user/comment/${id}`);
    },
  });
  console.log(comments?.data);
  // hookAxios.get(`http://localhost:5000/api/v1/user/comment/${id}`, )

  return isLoading ? (
    <p>loadingggggg...</p>
  ) : (
    <div className="container mx-auto p-5">
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700   h-full bg-">
        <img
          className="rounded-t-lg w-full lg:h-[70vh]"
          src={blog?.image}
          alt={blog?.title}
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {blog?.title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Category</span> :{" "}
            <span className="font-semibold">{blog?.category}</span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">short description</span>:{" "}
            {blog?.shortDescription}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Long Description</span>:{" "}
            {blog?.longDescription}
          </p>
          <div>
            {blog?.bloggerEmail === user?.email ? (
              <Link
                to={`/update/${id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center w-full"
              >
                Update
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {/* Comments section  */}
      <div className="mt-32 ">
        <h2 className="text-3xl font-bold mb-3">Comment</h2>
        <form onSubmit={handleComment}>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                name="comment"
                id="comment"
                rows="4"
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                onBlur={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Post comment
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* comment show in details page */}
      <div className=" mt-32 p-5 ">
        <h2 className="text-2xl font-bold mb-5">Comments: </h2>
        <div className="border">   
          {
            comments?.data.map((comments, idx) => <Comments key={idx} comments={comments}></Comments>)
          }
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
