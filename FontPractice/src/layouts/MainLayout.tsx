import Footer from "@/components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router";
import "@/index.css";
function MainLayout() {
  return (
    <div className=" h-screen flex flex-col justify-between items-center ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
