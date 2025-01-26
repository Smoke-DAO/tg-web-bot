import * as React from "react";
import { createHashRouter } from "react-router-dom";
import App from "./App";
import { ProfileScreen } from "./screens/ProfileScreen/ProfileScreen";
import { GamesScreen } from "./screens/GamesScreen/GamesScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen/WelcomeScreen";
import { JointScreen } from "./screens/JointScreen/JointScreen";
import { PuffScreen } from "./screens/PuffScreen/PuffScreen";

export const router = createHashRouter([
  {
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
    ],
  },
]);
