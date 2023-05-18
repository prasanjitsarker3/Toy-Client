import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../FontPage/Home";
import AllToys from "../FontPage/AllToys";
import Login from "../AuthenticationPage/Login";
import Register from "../AuthenticationPage/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "allToys",
                element: <AllToys></AllToys>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])
export default router;