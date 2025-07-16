import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./App";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/authContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <AuthProvider>
     <Toaster position="top-center" reverseOrder={false} />
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>
);


