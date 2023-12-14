// import { Link, NavLink } from "react-router-dom";
// import { Collapse } from "flowbite";
// import useAuth from "../../Hook/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../FirebaseAuth/AuthProvider";

// const Navbar = () => {
// const { user} = useAuth();
// const { logOut } = useContext(AuthContext);

// // const handleLogOut =()=>[
//   //   logOut()
//   // ]

// const navLink = (
//   <>
//     <li>
//       <NavLink
//         to="/"
//         className="block px-2 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//       >
//         Home
//       </NavLink>
//     </li>

//     <li>
//       <NavLink
//         to="/allBlog"
//         className="block px-2 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//       >
//         All Blog
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         to="/addBlog"
//         className="block px-2 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//       >
//         Add Blog
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         to="/featuredBlogs"
//         className="block px-2 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//       >
//         Featured Blogs
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         to="/wishlist"
//         className="block px-2 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//       >
//         Wishlist
//       </NavLink>
//     </li>
//   </>
// );

//   const handleDropdownToggle =()=>{
//     console.log('toggle clicked');
//   }
//   return (
//     <div>
//       <nav className="bg-white border-gray-200 dark:bg-gray-900">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <Link to="/" className="flex items-center">
//             <img
//               src="https://i.ibb.co/GPWgPVy/default.png"
//               className="w-32 mr-3"
//               alt="Knowledge hub Logo"
//             />
//           </Link>
//           <div className="flex items-center md:order-2">
//             <button
//               type="button"
//               className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//               id="user-menu-button"
//               aria-expanded="false"
//               data-dropdown-toggle="user-dropdown"
//               data-dropdown-placement="bottom"
//             >
//               <span className="sr-only">Open user menu</span>

// {


import {Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../FirebaseAuth/AuthProvider";

function NavbarComponent() {
  const { user } = useAuth();
  const { logOut } = useContext(AuthContext);

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className="block px-2 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allBlog"
          className="block px-2 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          All Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addBlog"
          className="block px-2 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Add Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/featuredBlogs"
          className="block px-2 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Featured Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/wishlist"
          className="block px-2 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          Wishlist
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/noteBook"
          className="block px-2 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          NoteBook
        </NavLink>
      </li>
    </>
  );
  return (
    <Navbar fluid rounded className="max-w-screen-xl mx-auto">
      <Navbar.Brand>
        <Link to="/" className="flex items-center">
          <img
            src="https://i.ibb.co/GPWgPVy/default.png"
            className="w-32 mr-3"
            alt="Knowledge hub Logo"
          />
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            user ? (
              <>
                {user?.photoURL && (
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user?.photoURL}
                    alt="user photo"
                  />
                )}
              </>
            ) : (
              <img
                className="w-8 h-8 rounded-full"
                src="https://i.ibb.co/84vz9Vb/demo.jpg"
                alt="user photo"
              />
            )
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">
              {user?.displayName && (
                <span className="block text-sm text-gray-900 dark:text-white">
                  {user?.displayName}
                </span>
              )}
            </span>
            <span className="block truncate text-sm font-medium">
              {user?.email && (
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  {user?.email}
                </span>
              )}
            </span>
            <Dropdown.Divider />
          </Dropdown.Header>

          <Dropdown.Item>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white text-center"
            >
              {user ? (
                <button onClick={() => logOut()}>Log Out</button>
              ) : (
                <button>
                  <Link to="/login">Log in</Link>
                </button>
              )}
            </Link>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {/* <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link> */}
        {navLink}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
