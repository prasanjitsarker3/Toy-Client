import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../FontPage/Home";
import AllToys from "../FontPage/AllToys";
import Login from "../AuthenticationPage/Login";
import Register from "../AuthenticationPage/Register";
import AddToys from "../FontPage/AddToys";
import MyToys from "../FontPage/MyToys";
import UpdateInvention from "../SharedPage/UpdateInvention";
import AllToyDetails from "../SharedPage/AllToyDetails";
import PrivateRoute from "./PrivateRoute";
import CategoryDetails from "../SharedPage/CategoryDetails";

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
                path: "addToys",
                element: <AddToys></AddToys>
            },
            {
                path: "myToys",
                element: <MyToys></MyToys>
            },
            {
                path: "updateInvention/:id",
                element: <UpdateInvention></UpdateInvention>,
                loader: ({ params }) => fetch(`http://localhost:5000/allInvention/${params.id}`)
            },
            {
                path: "allToyDetails/:id",
                element: <PrivateRoute><AllToyDetails></AllToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allInvention/${params.id}`)
            }
        ]
    }
])
export default router;