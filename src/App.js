import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import CarOffer from "./pages/CarOffer";
import PurchaseCar from "./pages/PurchaseCar";
import Warranty from "./pages/Warranty";
import OrderCar from "./pages/OrderCar";
import CarCleaning from "./pages/CarCleaning";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import OtherPagesLayout from "./pages/RootOtherPages";


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
    { path: "offer", element: <CarOffer /> , children: [
        {path: "active"},
        {path: "on-sale"},
        {path: "in-arrival"},
        {path: ":carId"}
      ]
    },
      { path: "orderCar", element: <OrderCar /> },
      { path: "purchaseCar", element: <PurchaseCar /> },
      { path: "warranty", element: <Warranty /> },
      { path: "carCleaning", element: <CarCleaning /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  
  //   {
  //   path: "/",
  //   element: <RootLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     { index: true, element: <HomePage />,},
  //     { path: "offer", element: <CarOffer /> , children: [
  //       {path: "active"},
  //       {path: "on-sale"},
  //       {path: "in-arrival"},
  //       {path: ":carId"}
  //     ]
  //   },
  //     { path: "orderCar", element: <OrderCar /> },
  //     { path: "purchaseCar", element: <PurchaseCar /> },
  //     { path: "warranty", element: <Warranty /> },
  //     { path: "carCleaning", element: <CarCleaning /> },
  //     { path: "contact", element: <Contact /> },
  //   ],
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
