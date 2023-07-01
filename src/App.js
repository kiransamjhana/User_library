import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./components/pages/home/Home";

import SignUp from "./components/pages/signup-signin/SignUp";
import Dashboard from "./components/pages/dasboard/Dashboard";
import { PrivateRoute } from "./components/pages/private-route/PrivateRoute.js/PrivateRoute";
import Login from "./components/pages/signup-signin/Login";

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
