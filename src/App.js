import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/Home";

import SignUp from "./pages/signup-signin/SignUp";
import Dashboard from "./pages/dasboard/Dashboard";
import { PrivateRoute } from "./components/private-route/PrivateRoute.js/PrivateRoute";
import Login from "./pages/signup-signin/Login";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* // private routes */}
        <Route
          path="/new-admin"
          element={
            <PrivateRoute>
              <SignUp />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
