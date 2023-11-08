import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddBlog from "../Pages/Add Blog/AddBlog";
import Login from "../Pages/Login&Registration/Login";
import Registration from "../Pages/Login&Registration/Registration";
import AllBlog from "../Pages/AllBlog/AllBlog";
import BlogDetails from "../Components/Shared/BlogDetails/BlogDetails";
import Update from "../Components/update/Update";
import Comments from "../Components/Shared/BlogDetails/Comments";
import ErrorPage from "../Components/Error/ErrorPage";
import PrivateRoute from "./PrivateRoute";


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
        element: <PrivateRoute><AddBlog/></PrivateRoute>,
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
      },
      {
        path: "/update/:id",
        element: <Update/>
      },
      {
        path: "/comment/:id",
        element: <Comments/>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ],
  },
]);

export default router;
