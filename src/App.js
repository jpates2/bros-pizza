import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import OrderPage from "./pages/Order";

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/order", element: <OrderPage />},
])

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return <RouterProvider router={router} />;
}

export default App;
