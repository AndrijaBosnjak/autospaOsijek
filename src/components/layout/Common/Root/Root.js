import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import CarouselFullPage from "../../CarouselFullPage/CarouselFullPage";
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
