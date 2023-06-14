import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import List from "./pages/category/List";
import Edit from "./pages/category/Edit";
import Add from "./pages/category/Add";
import { Provider } from "./Provider";
import PublicLayout from "./layouts/PublicLayout";


function App() {
  return (
    <Provider>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
