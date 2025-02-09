import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Company from "@/pages/Company";
import Blog from "@/pages/Blog";
import Terms from "@/pages/Terms";
import Policy from "@/pages/Policy";
import Legal from "@/pages/Legal";
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
        path: "/blog",
        element: <Blog />,
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
        path: "/legal",
        element: <Legal />,
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
