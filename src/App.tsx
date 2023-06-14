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
import { Provider } from "./Provider";
import PublicLayout from "./layouts/PublicLayout";

const router = createBrowserRouter([

  {
    element: <PublicLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
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
    ],
  },
]);

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
