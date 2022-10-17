import type { RouteObject } from "react-router-dom";
import Home from "./pages/home";
import PrototypePage from "./pages/prototype";
import TestPage from "./pages/test";
import TestDetailPage from "./pages/test/[id]";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/prototype",
        element: <PrototypePage />,
      },
      {
        path: "/tests",
        element: <TestPage />,
      },
      {
        path: "/tests/:id",
        element: <TestDetailPage />,
      },
    ],
  },
];
