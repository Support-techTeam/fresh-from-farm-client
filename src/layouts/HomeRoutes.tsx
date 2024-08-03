import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/landingPage/Home';
import HomeLayout from './HomeLayout';
import EmailVerification from '../pages/authentication/Verification';
import ProtectedRoute from './ProtectedRoute';

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

      {/* <Route
        path="/email-verification"
        element={
          <ProtectedRoute>
            <EmailVerification />
          </ProtectedRoute>
        }
      /> */}
      <Route
        path="/change-password"
        element={
          <ProtectedRoute>
            <EmailVerification />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default HomeRoutes;
