import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from "./Components/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/play",
        element:<App/>
    },
    {
        path:"/",
        element: <Home/>
    }
]);

createRoot(document.getElementById('root')).render(
      <StrictMode>
          <RouterProvider router={router} />
      </StrictMode>,
)
