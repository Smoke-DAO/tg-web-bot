import * as React from "react";
import { createHashRouter, Navigate } from "react-router-dom";
import App from "./App";
import { ProfileScreen } from "./screens/ProfileScreen/ProfileScreen";
import { GamesScreen } from "./screens/GamesScreen/GamesScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen/WelcomeScreen";
import { JointScreen } from "./screens/JointScreen/JointScreen";
import { PuffScreen } from "./screens/PuffScreen/PuffScreen";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <WelcomeScreen />,
      },
      {
        path: "profile",
        element: <ProfileScreen />,
      },
      {
        path: "games",
        element: <GamesScreen />,
      },
      {
        path: "main",
        element: <WelcomeScreen />,
      },
      {
        path: "joint",
        element: <JointScreen />,
      },
      {
        path: "puff",
        element: <PuffScreen />,
      },
      {
        path: "tgWebAppData=:data",
        element: <Navigate to="/" replace />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
