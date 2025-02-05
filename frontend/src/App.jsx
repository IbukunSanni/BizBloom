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
import TestPage from "./pages/TestPage.jsx";
// BB focus
import LandingPageBB from "./pages/LandingPageBB.jsx";
import CreateAccountBB from "./pages/CreateAccountPageBB.jsx";
import WelcomeAboardPage from "./pages/WelcomeAboardPageBB.jsx";
import CompleteProfile01 from "./pages/CompleteProfile01BB.jsx";
import CompleteProfile02 from "./pages/CompleteProfile02BB.jsx";
import CompleteProfile03 from "./pages/CompleteProfile03BB.jsx";
import CompleteProfile04 from "./pages/CompleteProfile04BB.jsx";
import CompleteProfile05 from "./pages/CompleteProfile05BB.jsx";
import ChooseLoginBB from "./pages/ChooseLoginPageBB.jsx";
import DashboardPageBB from "./pages/DashboardPageBB.jsx";
import LoginPageBB from "./pages/LoginPageBB.jsx";
import SignUpPageBB from "./pages/SignUpPageBB.jsx";
import MentorSearchPageBB from "./pages/MentorSearchPageBB.jsx";
import TempPage from "./pages/TempPage.jsx";
// BB components
import HeaderBB from "./components/HeaderBB.jsx";
import FooterBB from "./components/FooterBB.jsx";
import MentorProfile from "./pages/MentorProfile.jsx";

function App() {
  return (
    <>
      <main className="">
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
              path="/bb/"
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

            <Route
              path="/bb/completeprofile-02"
              element={
                <>
                  <CompleteProfile02 />
                </>
              }
            />

            <Route
              path="/bb/completeprofile-03"
              element={
                <>
                  <CompleteProfile03 />
                </>
              }
            />

            <Route
              path="/bb/completeprofile-04"
              element={
                <>
                  <CompleteProfile04 />
                </>
              }
            />

            <Route
              path="/bb/completeprofile-05"
              element={
                <>
                  <CompleteProfile05 />
                </>
              }
            />
            {/* Choose Login Page */}
            <Route
              path="/bb/chooseloginpage"
              element={
                <>
                  <ChooseLoginBB />
                </>
              }
            />
            {/* Login Page */}
            <Route
              path="/bb/loginpage"
              element={
                <>
                  <LoginPageBB />
                </>
              }
            />

            {/* TODO: Clear Test Page */}
            <Route
              path="/testpage"
              element={
                <>
                  <TestPage />
                </>
              }
            />

            <Route
              path="/bb/dashboardpage"
              element={
                <>
                  <DashboardPageBB />
                </>
              }
            />

            <Route
              path="/bb/mentorshipsearchpage"
              element={
                <>
                  <MentorSearchPageBB />
                </>
              }
            />

            <Route
              path="/bb/mentors/:mentorId"
              element={
                <>
                  <MentorProfile />
                </>
              }
            />

            <Route
              path="/temppage/:mentorId"
              element={
                <>
                  <TempPage />
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
