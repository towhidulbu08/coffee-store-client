import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import SignUp from "./Components/SignUp.jsx";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";
import Users from "./Components/Users.jsx";
import SignIn from "./Components/SignIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>,
  },
  {
    path:'signIn',
    element:<SignIn></SignIn>
  },
  {
    path:"users",
    element:<Users></Users>,
    loader:()=>fetch('http://localhost:5000/user')
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
