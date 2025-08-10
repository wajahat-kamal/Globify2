import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /> <Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /> <About /></>
    },
    {
      path: "/blogs",
      element: <><Navbar /> <Blogs /></>  
    },
    {
      path: "/signup",
      element: <><Navbar /> <Signup /></>
    },
    {
      path: "/login",
      element: <><Navbar /> <Login /></>
    },
  ])


  return (
    <>
    <RouterProvider router={router} />
    </>
  )

}

export default App
