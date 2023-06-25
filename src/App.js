import "./App.css";

import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import { SignUp } from "./components/pages/signup-signin/SignUp";
import Login from "./components/pages/signup-signin/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
