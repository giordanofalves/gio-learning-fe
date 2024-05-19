import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import "./index.css";

import ErrorPage from "./error-page";
import Root from "./routes/root";
import Library from "./routes/library";
import Course from "./routes/course";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "course/:courseId",
        element: <Course />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);