import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useUser();
  const location = useLocation();

  if (user && user.isEmailVerified === false) {
    // Redirect to verification Page if not verified
    return <Navigate to="/email-verification" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
