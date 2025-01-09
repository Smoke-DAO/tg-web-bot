import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import { router } from "./router";
import "./index.css";

WebApp.ready();
WebApp.expand();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
