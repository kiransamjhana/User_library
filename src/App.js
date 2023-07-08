import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/signup-signin/Login";
import { PrivateRoute } from "./components/private-route/PrivateRoute.js/PrivateRoute";

import SignUp from "./pages/signup-signin/SignUp";
import Dashboard from "./pages/dasboard/Dashboard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchBookAction } from "./pages/books/bookAction";

import Profile from "./pages/profile/Profile";
import Books from "./pages/books/Books";
import { NewBookForm } from "./components/book-compo/NewBookform";
import Students from "./pages/students/Student";
import Home from "./pages/home/Home";
function App() {
  //fetch Book
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookAction());
  }, [dispatch]);
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
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />
        <Route
          path="/book/new"
          element={
            <PrivateRoute>
              <NewBookForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/students"
          element={
            <PrivateRoute>
              <Students />
            </PrivateRoute>
          }
        />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
