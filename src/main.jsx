import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LogIn from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/Home",
                element: <HomePage />,
            },
            {
                path:"/logIn",
                element:<LogIn/>
            },
            {
                path:"/signUp",
                element:<SignUp/>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
