import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import HomePage from "./Homepage";
import Layout from "./Layout";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This indicates that HomePage is the index route
        element: <HomePage />,
      },
      {
        path: "component1",
        element: <Component1 />,
      },
      {
        path: "component2",
        element: <Component2 />,
      },
      {
        path: "component3",
        element: <Component3 />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
