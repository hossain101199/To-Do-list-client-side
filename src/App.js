import "./App.css";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import RequireAuth from "./components/RequireAuth";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/CreateAccount"
          element={<CreateAccount></CreateAccount>}
        ></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
