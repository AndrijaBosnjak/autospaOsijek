import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./components/layout/Common/Root/Root";
import HomePage from "./pages/HomePage/HomePage";
import CarOffer from "./pages/CarOffer/CarOffer";
import PurchaseCar from "./pages/PurchaseCar/PurchaseCar";
import Warranty from "./pages/Warranty/Warranty";
import OrderCar from "./pages/OrderCar/OrderCar";
import CarCleaning from "./pages/CarCleaning/CarCleaning";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import OtherPagesLayout from "./components/layout/Common/Root/RootOtherPages";


const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
          { index: true, element: <HomePage />},
        ]
  },

  {
    element: <OtherPagesLayout />,
    errorElement: <ErrorPage />,
    children: [
    { path: "ponuda", element: <CarOffer /> , children: [
        {path: "aktivna-ponuda"},
        {path: "vozila-na-akciji"},
        {path: "vozila-u-dolasku"},
        {path: ":carId"}
      ]
    },
      { path: "narucivozilo", element: <OrderCar /> },
      { path: "otkupvozila", element: <PurchaseCar /> },
      { path: "jamstvo", element: <Warranty /> },
      { path: "njegavozila", element: <CarCleaning /> },
      { path: "kontakt", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
