import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import AccountLogin from "./pages/AccountLogin";
import Layout from "./components/Layout";
import CardAside from "./pages/CardAside";
import Error from "./components/Error";
import Locator from "./pages/Locator";
import ReviewSection from "./components/ReviewSection";
import Refer from "./pages/Refer";
import BundleCards from "./components/BundleCards";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/our-story",
          element: <OurStory />,
        },
        {
          path: "/reviews",
          element: <ReviewSection />,
        },
        {
          path: "/account-login",
          element: <AccountLogin />,
        },
        {
          path: "/refer",
          element: <Refer />,
        },
        {
          path: "/card-aside",
          element: <CardAside />,
        },
        {
          path: "/products/5-variety-pack",
          element: <Home />,
        },
        {
          path: "/bundle",
          element: <BundleCards />,
        },
        {
          path: "/locator",
          element: <Locator />,
        },
        {
          path: "*",
          element: <Error />,
        },

      ]
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;