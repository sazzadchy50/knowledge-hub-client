import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
// import Comments from "./Comments";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Comments from "./Comments";

const BlogDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const { user } = useAuth();
  const [comment, setComment] = useState();

  //blog data
  const { data: blogDetail, isLoading } = useQuery({
    queryKey: ["blogDetail"],
    queryFn: () => {
      return axios.get(`/allBlog/${id}`, { withCredentials: true });
    },
  });

  const blog = blogDetail?.data;
  // const id = blog._id;
  // const hookAxios = useAxios();
  //comment handle

  const handleComment = (e) => {
    e.preventDefault();

    if (user) {
      const commentField = {
        blogId: blog?._id,
        comment,
        userEmail: user?.email,
        UserImage: user?.photoURL,
        userName: user?.displayName,
      };

      axios
        .post(
          "/user/comment",
          commentField,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "Comment successfully",
              icon: "success",
              confirmButtonText: "ok",
            });
          }
        });
    } else {
      Swal.fire({
        title: "error",
        text: "Please Login first",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };

  const handleNote = (e) => {
    e.preventDefault();
    const date = new Date();
    const form = e.target;

    const title = form.noteTitle.value;
    const note = form.note.value;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const NoteData = {
      noteTitle : title,
      note: note,
      submissionDate : formattedDate,
      blogTitle: blog?.title, 
      userEmail: user?.email

    };
    
    // if(user){
    //   axios.post("https://knowledge-hub-server-hazel.vercel.app/api/v1/user/add-note", NoteData,{
    //     withCredentials:true
    //   })
    if(user){
      axios.post("http://localhost:5000/api/v1/user/add-note", NoteData,{
        withCredentials:true
      })
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Note save successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
    }else {
      Swal.fire({
        title: "error",
        text: "Please Login first",
        icon: "error",
        confirmButtonText: "ok",
      });
    }

    
    // console.log({title,  note, date, day , month , year, formattedDate});
  };

  // axios.get("http://localhost:5000/api/v1/user/note")
  // .then
  // const { data: recentBlog, isLoading } = useQuery({
  //   queryKey: ["recentBlog"],
  //   queryFn: () => {
  //     return axios.get("/recentBlog");
  //   },
  // });

  
  const { data: comments } = useQuery({
    queryKey: ["comment", id],
    queryFn: () => {
      const res = axios.get(
        `https://knowledge-hub-server-hazel.vercel.app/api/v1/user/comment/${id}`,
        {
          withCredentials: true,
        }
      );
      return res.data;
    },
  });
  
  // console.log(comments);
  // hookAxios.get(`https://knowledge-hub-server-hazel.vercel.app/api/v1/user/comment/${id}`, )

  return isLoading ? (
    <div className="container mx-auto grid justify-center items-center ">
      <Skeleton width={700} height={200} />
      <Skeleton width={700} count={5} />
    </div>
  ) : (
    <div className="container mx-auto p-5 ">
      <div className=" bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700   h-full ">
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
      {/* Notes  */}
      <div className="my-20 border p-10">
        <h2 className="text-3xl text-center font-semibold mb-5">Note</h2>
        <form onSubmit={handleNote}>
          <input
            name="noteTitle"
            type="text"
            placeholder="Your Note title...."
            className="block  border-inherit  focus:ring-0  rounded-lg w-full mb-5"
          />
          <textarea
            name="note"
            id=""
            cols="30"
            rows="10"
            className="block  border-inherit  focus:ring-0  rounded-lg w-full"
            placeholder="Your Note......"
          ></textarea>
          <button
            type="submit"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center w-full mt-5"
          >
            Save
          </button>
        </form>
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
                placeholder={
                  blog?.bloggerEmail === user?.email
                    ? "Can not comment on own blog"
                    : "Your comment"
                }
                onBlur={(e) => setComment(e.target.value)}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>

            {blog?.bloggerEmail !== user?.email ? (
              <button
                type="submit"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center w-full"
              >
                post Comment
              </button>
            ) : null}
          </div>
        </form>
      </div>
      {/* comment show in details page */}
      <div className=" mt-32 p-5 ">
        <h2 className="text-2xl font-bold mb-5">Comments: </h2>
        <div className="border">
          {comments?.data.map((comments, idx) => (
            <Comments key={idx} comments={comments}></Comments>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
