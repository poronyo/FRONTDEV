import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Company from "@/pages/Company";
import Project from "@/pages/Project";
import Terms from "@/pages/Terms";
import Policy from "@/pages/Policy";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Forgotpassword from "@/pages/Forgotpassword";
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
        path: "/pricing",
        element: <Pricing />,
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
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/policy",
        element: <Policy />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgetpassword",
    element: <Forgotpassword />,
  },
]);
export const AppRouter = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
