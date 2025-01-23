/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Nav from "./components/navigation/Nav";
// import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import ResetPasswordConfirmPage from "./pages/ResetPasswordConfirmPage";
import ActivatePage from "./pages/ActivatePage";
import NotFoundPage from "./pages/NotFoundPage";
// BB focus
import LandingPageBB from "./pages/LandingPageBB.jsx";
import CreateAccountBB from "./pages/CreateAccountPageBB.jsx";
import WelcomeAboardPage from "./pages/WelcomeAboardPageBB.jsx";
import CompleteProfile01 from "./pages/CompleteProfile01BB.jsx";
import SignUpPageBB from "./pages/SignUpPageBB.jsx";
import HeaderBB from "./components/HeaderBB.jsx";
import FooterBB from "./components/FooterBB.jsx";

function App() {
  return (
    <>
      <main className="bg-neutral-50 min-h-screen">
        <Router>
          {/* <HeaderBB /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/activate/:uid/:token" element={<ActivatePage />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirmPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
            {/* BizBloom focus */}
            <Route
              path="/bb/landingpage"
              element={
                <>
                  <HeaderBB />
                  <LandingPageBB />
                  <FooterBB />
                </>
              }
            />

            <Route
              path="/bb/createaccountpage"
              element={
                <>
                  <CreateAccountBB />
                </>
              }
            />

            <Route
              path="/bb/signuppage"
              element={
                <>
                  <SignUpPageBB />
                </>
              }
            />

            <Route
              path="/bb/welcomeaboardpage"
              element={
                <>
                  <WelcomeAboardPage />
                </>
              }
            />

            <Route
              path="/bb/completeprofile-01"
              element={
                <>
                  <CompleteProfile01 />
                </>
              }
            />
          </Routes>
        </Router>
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
