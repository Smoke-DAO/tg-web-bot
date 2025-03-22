import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import WebApp from "@twa-dev/sdk";

import { RootStoreProvider } from "./stores/RootStoreProvider";
import { router } from "./router";

import "./index.css";

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
      };
    };
  }
}

WebApp.ready();
WebApp.expand();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootStoreProvider>
      <RouterProvider router={router} />
    </RootStoreProvider>
  </React.StrictMode>
);
