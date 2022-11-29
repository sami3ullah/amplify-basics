import React from "react";
import LandingPage from "../../components/LandingPage/LandingPage";
import Home from "../../components/Home/Home";
import Nav from "../../components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../../routes/ProtectedRoute";

const Homepage = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      <Nav />
      {token ? (
        <>
          <Routes>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </>
      ) : (
        <LandingPage />
      )}
    </div>
  );
};

export default Homepage;
