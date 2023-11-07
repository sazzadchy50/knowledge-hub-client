import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddBlog from "../Pages/Add Blog/AddBlog";
import Login from "../Pages/Login&Registration/Login";
import Registration from "../Pages/Login&Registration/Registration";
import AllBlog from "../Pages/AllBlog/AllBlog";
import BlogDetails from "../Components/Shared/BlogDetails/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addBlog",
        element: <AddBlog />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/registration",
        element: <Registration/>
      },
      {
        path: "/allBlog",
        element: <AllBlog/>
      },
      {
        path: "/details/:id",
        element: <BlogDetails/>
      }
    ],
  },
]);

export default router;
