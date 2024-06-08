import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/landingPage/Home';
import HomeLayout from './HomeLayout';

const HomeRoutes = () => {
  return (
    <Routes>
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
