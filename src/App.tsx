import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import List from "./pages/category/List";
import Edit from "./pages/category/Edit";
import Add from "./pages/category/Add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
