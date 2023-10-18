import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RootLayout } from "./components";
import { HomePage, CarOffer, PurchaseCar, Warranty, OrderCar, CarCleaning, ErrorPage, Contact } from "./pages";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
    { index: true, element: <HomePage /> },
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
