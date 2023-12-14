import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hook/useAxios";
import DataTable from "react-data-table-component";
import useAuth from "../../Hook/useAuth";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const FeaturedBlogs = () => {
  const axios = useAxios();
  const user = useAuth()
  const { data: featuredBlogs, isLoading } = useQuery({
    queryKey: ["featuredBlogs"],
    queryFn: () => {
      return axios.get("/allBlog", { withCredentials: true });
    },
  });
  // console.log(data);

  const columns = [
    {
      name: "Serial Number",
      selector: (row) => row.serial,
    },
    {
      name: "Image",
      selector: (row) => row.image,
    },
    {
      name: "Blog Owner",
      selector: (row) => row.email,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
  ];

  // const trandformedData = featuredBlogs?.data.slice(0,10).filter((blog ) => blog.bloggerEmail === user?.user?.email).map((blog, index) => ({  


  //   serial:  index + 1 ,
  //   image: <img src={blog?.bloggerImage} alt="blogger image" />,
  //   // image: <img src={user?.photoURL} alt="blogger image" />,
  //   email: blog.bloggerEmail? blog.bloggerEmail : "Not Found",
  //   title: blog.title
    
  // }));
  const trandformedData = featuredBlogs?.data.slice(0,10).filter((blog ) => blog.bloggerEmail? blog.bloggerEmail : null).map((blog, index) => ({
    serial:  index + 1 ,
    image: <img src={blog?.bloggerImage} alt="blogger image" />,
    // image: <img src={user?.photoURL} alt="blogger image" />,
    email: blog.bloggerEmail? blog.bloggerEmail : "Not Found",
    title: blog.title
    
  }));
  
    
  



  return (
    isLoading ?    
      <div className="container mx-auto grid justify-center items-center mt-36">

    <Skeleton width={700} count={10}/>
   
   
   
  </div>
    : 
    <div className="p-5">
      <h2 className="text-4xl text-center font-bold mb-12 border-b-2 pb-4">Top 10 blog </h2>
      <DataTable columns={columns} data={trandformedData}/>
    </div>
  );
};
export default FeaturedBlogs;
