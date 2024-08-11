import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import EventList from "./pages/events/List";
import ProtectedRoute from "./components/ProtectedRoutes";
import EventCreate from "./pages/events/Create";
import EventDetails from "./pages/events/Details";

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
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path:"events",
        children:[
          {
            index:true,
            element:<EventList />
          },
          {
            path:":id",
            element:<EventDetails />
          },
          {
            path:"create",
            element:<EventCreate/>
          }
        ]
      }
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
