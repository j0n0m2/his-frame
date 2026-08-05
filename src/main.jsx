import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { createRoot } from "react-dom/client";
import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
