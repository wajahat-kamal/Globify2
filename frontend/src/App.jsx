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
    {
      path: "/dashboard",
      element: <><Navbar /> <div className="mt-20 p-8 text-center"><h1 className="text-2xl font-bold">Dashboard Coming Soon!</h1></div></>
    },
  ])


  return (
    <>
    <RouterProvider router={router} />
    </>
  )

}

export default App
