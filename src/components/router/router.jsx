import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../FontPage/Home";
import AllToys from "../FontPage/AllToys";
import Login from "../AuthenticationPage/Login";
import Register from "../AuthenticationPage/Register";
import AddToys from "../FontPage/AddToys";
import MyToys from "../FontPage/MyToys";
import UpdateInvention from "../SharedPage/UpdateInvention";

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
                loader:({params}) => fetch(`http://localhost:5000/allInvention/${params.id}`)
            }
        ]
    }
])
export default router;