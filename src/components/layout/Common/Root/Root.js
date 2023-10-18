import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../../index";
import "./Root.css";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
