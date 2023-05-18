import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../FontPage/Home";
import AllToys from "../FontPage/AllToys";
import Login from "../AuthenticationPage/Login";
import Register from "../AuthenticationPage/Register";
import AddToys from "../FontPage/AddToys";

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
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: "allToys",
                element: <AllToys></AllToys>
            },
            {
                path:"addToys",
                element:<AddToys></AddToys>
            }
        ]
    }
])
export default router;