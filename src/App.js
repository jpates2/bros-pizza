import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import OrderPage from "./pages/Order";

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/order", element: <OrderPage />},
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
