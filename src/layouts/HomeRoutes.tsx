import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/landingPage/Home';
import HomeLayout from './HomeLayout';
import EmailVerification from '../pages/authentication/Verification';

const HomeRoutes = () => {
  return (
    <Routes>
      <Route
        path="/email-verification"
        element={
          // <HomeLayout>
          <EmailVerification />
          // </HomeLayout>
        }
      />
      <Route
        path="/"
        element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        }
      />
    </Routes>
  );
};

export default HomeRoutes;
