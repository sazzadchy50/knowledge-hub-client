import { useState } from "react";
// import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const AddBlog = () => {
  const [selectedType, setSelectedType] = useState("");

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
  
    const type = selectedType;
    const newBlog = {
      image,
      title,
      shortDescription,
      type,      
      longDescription,
    };
    console.log( image,
      title,
      shortDescription,
      type,      
      longDescription,);

  //   //send data to the server
  //   fetch(
  //     "https://estore-server-ll89cnlgf-sazzads-projects-05d40223.vercel.app",
  //     {
  //       method: "POST",

  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(newBrands),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.insertedId) {
  //         Swal.fire({
  //           title: "Success",
  //           text: "Product added successfully",
  //           icon: "success",
  //           confirmButtonText: "ok",
  //         });
  //       }
  //     });
  };



  return (
    // <div classNameName="hero min-h-screen bg-base-200">
    //   <div classNameName="hero-content flex-col">
    //     <div classNameName="text-center">
    //       <h1 classNameName="text-5xl font-bold">Add Products</h1>
    //     </div>
    //     <div classNameName="card flex-shrink-0   shadow-2xl bg-base-100 w-[70vh]">
    //       <form onSubmit={handleAdd} classNameName="card-body ">
    //         {/* image and name */}
    //         <div classNameName="flex gap-5">
    //           <div classNameName="form-control w-1/2">
    //             <label classNameName="label">
    //               <span classNameName="label-text">Image</span>
    //             </label>
    //             <input
    //               name="image"
    //               type="text"
    //               placeholder="Image"
    //               classNameName="input input-bordered"
    //               required
    //             />
    //           </div>
    //           <div classNameName="form-control w-1/2">
    //             <label classNameName="label">
    //               <span classNameName="label-text">Name</span>
    //             </label>
    //             <input
    //               name="name"
    //               type="text"
    //               placeholder="Name"
    //               classNameName="input input-bordered"
    //               required
    //             />
    //           </div>
    //         </div>
    //         {/* brand and price */}
    //         <div classNameName="flex gap-5">
    //           <div classNameName="form-control w-1/2">
    //             <label classNameName="label">
    //               <span classNameName="label-text">Brand Name</span>
    //             </label>
    //             <input
    //               name="brandName"
    //               type="text"
    //               placeholder="Brand name"
    //               classNameName="input input-bordered"
    //               required
    //             />
    //           </div>
    //           <div classNameName="form-control w-1/2">
    //             <label classNameName="label">
    //               <span classNameName="label-text">Price</span>
    //             </label>
    //             <input
    //               name="price"
    //               type="number"
    //               placeholder="Price"
    //               classNameName="input input-bordered"
    //               required
    //             />
    //           </div>
    //         </div>
    //         {/*type and  rating */}
    //         <div classNameName="flex gap-5 w-full">
    //           <div classNameName="form-control w-1/2 max-w-xs">
    //             <label classNameName="label">
    //               <span classNameName="label-text">Type</span>
    //             </label>
    //             <select
    //               classNameName="select select-bordered
    //           "
                  //   value ={selectedType}
                  // onChange={handleTypeChange}
    //             >
    //               <option disabled selected>
    //                 category
    //               </option>
    //               <option>Phone</option>
    //               <option>Laptop</option>
    //               <option>Watch</option>
    //             </select>
    //           </div>

    //           <div classNameName="form-control w-1/2">
    //             <label classNameName="label">
    //               <span classNameName="label-text">Rating</span>
    //             </label>
    //             <input
    //               name="rating"
    //               type="number"
    //               placeholder="Rating"
    //               classNameName="input input-bordered"
    //               required
    //             />
    //           </div>
    //         </div>
    //         {/* short description */}
    //         <div classNameName="form-control w-full ">
    //           <div classNameName="form-control">
    //             <label classNameName="label">
    //               <span classNameName="label-text">Short description</span>
    //             </label>
    //             <input
    //               name="shortDescription"
    //               type="text"
    //               placeholder="Short Description"
    //               classNameName="input input-bordered"
    //               required
    //             />
    //           </div>
    //           <div classNameName="form-control">
    //             <label classNameName="label">
    //               <span classNameName="label-text"> details</span>
    //             </label>
    //             <input
    //               name="details"
    //               type="text"
    //               placeholder="details"
    //               classNameName="input input-bordered"
    //               required
    //             />
    //           </div>
    //         </div>

    //         <div classNameName="form-control mt-6">
    //           <button classNameName="btn bg-purple-500 text-white ">
    //             Add Product
    //           </button>
    //         </div>
    //       </form>
    //       {/* <Toaster /> */}
    //     </div>
    //   </div>
    // </div>
    <div  onSubmit={handleAdd}  className="container mx-auto mt-12 p-5">
      <form>
        <h2 className="text-3xl font-bold text-center mb-5">Add blog</h2>
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
            className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select your Category
          </label>
          <select
            id="category"
            className ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleTypeChange}
          >
            <option disabled selected>Category</option>
            <option>Food</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        {/* short description */}
        <div className="relative z-0 w-full  group">
          <div id="short_description" className="py-2.5   ">
          <label
            htmlFor="category"
            className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
            ></textarea>
          </div>

         
           
        </div>
        {/* long description */}
        <div className="relative z-0 w-full mb-6 group">
          <div id="long_description" className="py-2.5   ">
          <label
            htmlFor="category"
            className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
            ></textarea>
          </div>

         
        </div>
        {/* submit button */}
        <div className="w-full block">
          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
