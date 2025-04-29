import { useState } from "react";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import NoPage from "./pages/NoPage";
import UserPage from "./pages/UserPage";
import ApiPage from "./pages/ApiPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./components/ProtectedRoute";
import DemoPage from "./pages/DemoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/demo" element={<DemoPage />} />

          <Route
            path="/api"
            element={
              <ProtectedRoute role={"admin"}>
                <ApiPage />
              </ProtectedRoute>
            }
          />

          <Route path="/user" element={<UserPage />}>
            <Route path="about" element={<AboutPage />} />
            <Route path="profile/:id/" element={<ProfilePage />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile/:id/" element={<ProfilePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
