import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import AboutPage from "./pages/AboutPage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

import BrandingPage from "./pages/work-subpages/BrandingPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>error</h1>,
    children: [
      {
        index: true,
        element: <WorkPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
            {
        path: "/branding",
        element: <BrandingPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
