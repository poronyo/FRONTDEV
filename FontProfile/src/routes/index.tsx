import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Company from "@/pages/Company";
import Project from "@/pages/Project";

import { ThemeProvider } from "@/component/Contexts/ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    // Main layout
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/project",
        element: <Project />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export const AppRouter = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
