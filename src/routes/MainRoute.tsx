import React from "react";
import { Routes, Route } from "react-router-dom";
import { HOME, SIGNUP, LOGIN } from "../utils/routes";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Homepage from "../pages/Homepage/Homepage";

const MainRoute = () => {
  return (
    <Routes>
      <Route path={HOME}>
        <Route index element={<Homepage />} />
      </Route>
      <Route path={SIGNUP} element={<Signup />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoute;
