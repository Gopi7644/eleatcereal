import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import ReviewCard from "./components/ReviewCard";
import AccountLogin from "./pages/AccountLogin";
import Layout from "./components/Layout";
import CardAside from "./pages/CardAside";
import Refer from "./pages/Refer";
import BundleCards from "./components/BundleCards";
import ReviewSection from "./components/ReviewSection";
import Locator from "./pages/Locator";


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
          path: "/card-aside",
          element: <CardAside />,
        },
        {
          path: "/locator",
          element: <Locator />,
        },
        {
          path: "/refer",
          element: <Refer />,
        },
        {
          path: "/bundle",
          element: <BundleCards />,
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