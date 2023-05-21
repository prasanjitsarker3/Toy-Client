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
import ErrorPage from "../FontPage/ErrorPage";
import Blog from "../FontPage/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path: "myToys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {   
                path:"blog",
                element:<Blog></Blog>
            },
            {
                path: "updateInvention/:id",
                element: <UpdateInvention></UpdateInvention>,
                loader: ({ params }) => fetch(`https://toy-tech-server.vercel.app/allInvention/${params.id}`)
            },
            {
                path: "allToyDetails/:id",
                element: <PrivateRoute><AllToyDetails></AllToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-tech-server.vercel.app/allInvention/${params.id}`)
            }, {
                path: "category/:id",
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-tech-server.vercel.app/allInvention/${params.id}`)
            }
        ]
    }
])
export default router;