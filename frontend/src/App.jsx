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
          <Navbar /> <Dashboard/>
        </>
      ),
      children: [
        {
          path: "profile",
          element: <Profile/>
        },
        {
          path: "your-blog",
          element: <Profile/>
        },
        {
          path: "comments",
          element: <Profile/>
        },
        {
          path: "write-blog",
          element: <Profile/>
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
