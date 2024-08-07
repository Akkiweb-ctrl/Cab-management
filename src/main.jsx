import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BookingsContextProvider from "./store/BookingsContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home.jsx";
import FAQs from "./pages/FAQs.jsx";
import LandingPage from "./pages/LandingPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {path : "/", element:<LandingPage/>},
      {path : "/home", element:<Home/>},
      {path : "/FAQs", element:<FAQs/>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BookingsContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </BookingsContextProvider>
    </RecoilRoot>
  </React.StrictMode>
);
