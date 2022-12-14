import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default Router;
