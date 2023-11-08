import { useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxios from "../../Hook/useAxios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";


const Update = () => {
    const [selectedType, setSelectedType] = useState("");
  const { user } = useAuth();
  const axios = useAxios();
    const {id} = useParams()
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
  
    
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const bloggerEmail = user?.email;
    const category = selectedType;
   
    const submissionTime = new Date();
   
    const newBlog = {
      image,
      title,
      shortDescription,
      category,
      longDescription,
      bloggerEmail,
      submissionTime,
    };
   
    axios.patch(`http://localhost:5000/api/v1/allBlog/${id}`, newBlog, {
        withCredentials: true

    })
    .then(res =>{
      if (res.data.modifiedCount  > 0) {
        Swal.fire({
          title: "Success",
          text: "blog update successfully",
          icon: "success",
          confirmButtonText: "ok",
        });

        form.reset();
      }else{
       
          Swal.fire({
            title: "error",
            text: "blog update failed",
            icon: "error",
            confirmButtonText: "ok",
          });          
        
      }
    }).catch((error)=>{
      console.error("Update failed:", error);
      Swal.fire({
        title: "Error",
        text: "Blog update failed",
        icon: "error",
        confirmButtonText: "OK",
      });
    })
  
        
}
    return (
 
         <div onSubmit={handleAdd} className="container mx-auto mt-12 p-5">
         <form>
           <h2 className="text-3xl font-bold text-center mb-5">Update blog</h2>
           {/* title input */}
           <div className="relative z-0 w-full mb-6 group">
             <input
               type="text"
               name="title"
               id="title"            
               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
               placeholder=" "
               required
             />
             <label
               htmlFor="title"
               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
             >
               Blog title
             </label>
           </div>
           {/* blog image */}
           <div className="relative z-0 w-full mb-6 group">
             <input
               type="text"
               name="image"
               id="image"
               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
               placeholder=" "
               required
             />
        
             <label
               htmlFor="image"
               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 "
             >
               Blog image url
             </label>
           </div>
           <div className="mb-5">
             <label
               htmlFor="category"
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
             >
               Select your Category
             </label>
             <select
               id="category"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               onChange={handleTypeChange}
               required
             >
               <option disabled value="" selected>
                 Category
               </option>
               <option>Food</option>
               <option>Sports</option>
               <option>Travel</option>
               <option>Lifestyle</option>
               <option>Technology</option>
             </select>
           </div>
           {/* short description */}
           <div className="relative z-0 w-full  group">
             <div id="short_description" className="py-2.5   ">
               <label
                 htmlFor="category"
                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               >
                 Short description
               </label>
               <textarea
                 name="shortDescription"
                 id=" short_description"
                 rows="4"
                 className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
           
           
           "
                 placeholder="short description here..."
                 required
               ></textarea>
             </div>
           </div>
           {/* long description */}
           <div className="relative z-0 w-full mb-6 group">
             <div id="long_description" className="py-2.5   ">
               <label
                 htmlFor="category"
                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               >
                 Long description
               </label>
               <textarea
                 name="longDescription"
                 id=" long_description"
                 rows="4"
                 className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
           
         
           "
                 placeholder="short description here..."
                 required
               ></textarea>
             </div>
           </div>
           {/* submit button */}
           <div className="flex justify-center  ">
             <button
               type="submit"
               className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             >
               Submit
             </button>
           </div>
         </form>
        </div>
        
      
    );
};

export default Update;