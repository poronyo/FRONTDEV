import Navbar from "@/component/Shared/Main/Navbar";
import Footer from "@/component/Shared/Main/Footer";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
