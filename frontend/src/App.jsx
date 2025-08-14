import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import YourBlogs from "./pages/YourBlogs";
import Comments from "./pages/Comments";
import CreateBlog from "./pages/CreateBlog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <Home /> <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar /> <About /> <Footer />
        </>
      ),
    },
    {
      path: "/blogs",
      element: (
        <>
          <Navbar /> <Blogs /> <Footer />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar /> <Signup />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar /> <Login />
        </>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <>
          <Navbar /> <Dashboard />
        </>
      ),
      children: [
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "your-blog",
          element: <YourBlogs />,
        },
        {
          path: "comments",
          element: <Comments />,
        },
        {
          path: "write-blog",
          element: <CreateBlog />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
