import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import About from "./pages/About";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "photos",
        element: <Photos />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
