import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Button from "@/pages/Button";
import ContactList from "@/components/ContactList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        /* special for first page will use index another will use path*/
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/button",
        element: <Button />,
      },
      {
        path: "/contact",
        element: <ContactList />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
