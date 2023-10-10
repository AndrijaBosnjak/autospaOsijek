import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CarouselHalfPage from "../components/layout/CarouselHalfPage";

import "./Root.css"


function OtherPagesLayout() {
  return (
    <>
      <Header />
      <CarouselHalfPage />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default OtherPagesLayout;
