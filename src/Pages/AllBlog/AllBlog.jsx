import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hook/useAxios";
import AllBlogCard from "./AllBlogCard";
import { Collapse } from "flowbite";
import { useState } from "react";
import { Select } from "flowbite-react";
import RecentBlogs from "../Home/RecentBlog/RecentBlogs";

const AllBlog = () => {
  // const [selected, setSelectedType] = useState("");
  const [category, setCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const axios = useAxios();
  //get data with axios
  const getAllBlog = async () => {
    const res = await axios.get(
      `/allBlog?category=${category}&title=${search}`
    );
    return res;
  };
  console.log(category);
  const {
    data: blogs,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["allBlog", category, search],
    queryFn: getAllBlog,
  });
  console.log(blogs?.data);
  const handleSearch = () => {
    setSearch(searchInput);
  };

  return isLoading ? (
    <p>loading </p>
  ) : (
    <div className="p-5">
      <form>
        <div className="flex container mx-auto mb-12 md:mt-5 ">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <select
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            onChange={(e) => setCategory(e.target.value)}
          >
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>

            <option disabled value="" selected>
              Category
            </option>
            <option>Food</option>
            <option>Sports</option>
            <option>Travel</option>
            <option>Lifestyle</option>
            <option>Technology</option>
          </select>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search  ....."
              onChange={(e) => setSearchInput(e.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSearch}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-5 ">
        {isLoading ? (
          <p>loading....</p>
        ) : (
          blogs?.data?.map((blog) => (
            <AllBlogCard
              key={blog?._id}
              blog={blog}
              setCategory={setCategory}
            ></AllBlogCard>
          ))
        )}
      </div>
    </div>
  );
};

export default AllBlog;
