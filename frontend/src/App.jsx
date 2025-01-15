/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Nav from "./components/navigation/Nav";
// import "./App.css";
import axios from "axios";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage.jsx"
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx"

function App() {
  return (
    <>
      <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
