import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Work from "./pages/work/Work.jsx";
import "./i18n.js";
import {HelmetProvider} from "react-helmet-async";
import Chas from "./pages/chas/Chas.jsx";

const router = createBrowserRouter([
	{
		element: <Layout/>,
		children: [
			{
				index: true,
				element: <Navigate to="/home" replace />
			},
			{
				path: "/home",
				element: <Home/>,
			},
			{
				path: "/about",
				element: <About/>,
			},
			{
				path: "/contact",
				element: <Contact/>,
			},
			{
				path: "/work",
				element: <Work/>,
			},
			{
				path: "/chas",
				element: <Chas/>,
			},
		]
	}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
	  <HelmetProvider>
		  <RouterProvider router={router} />
	  </HelmetProvider>
  </StrictMode>,
)
