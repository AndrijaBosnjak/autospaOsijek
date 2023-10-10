import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CarouselFullPage from "../components/layout/CarouselFullPage";

import "./Root.css"

function RootLayout() {
  return (
    <>
      <Header />
      <CarouselFullPage />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
