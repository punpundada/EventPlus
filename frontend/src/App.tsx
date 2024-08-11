import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import EventList from "./pages/events/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "events",
        element: <EventList />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
