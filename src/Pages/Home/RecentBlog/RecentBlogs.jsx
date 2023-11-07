import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";
import RecentBlogCard from "./RecentBlogCard";

const RecentBlogs = () => {
  const axios = useAxios();

  const { data: recentBlog, isLoading } = useQuery({
    queryKey: ["recentBlog"],
    queryFn: () => {
      return axios.get("/recentBlog");
    },
  });


  return (
   <div className="my-20 p-5">
     <h2 className="text-5xl text-center font-bold italic mb-12">Recent Blogs</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 "> 
     
       {isLoading ? (
         <p>loading...</p>
       ) : (
        recentBlog?.data.slice(0,6).map((blog) =>
         <RecentBlogCard key={blog?._id} blog={blog}></RecentBlogCard>
         )
       )}
     </div>
   </div>
  );
};

export default RecentBlogs;
