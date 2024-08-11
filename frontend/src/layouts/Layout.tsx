// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="h-[calc(100vh-3.5rem-3.5rem)]">{<Outlet />}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
