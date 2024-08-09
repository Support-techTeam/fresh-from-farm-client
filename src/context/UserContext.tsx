import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import BaseDirectories from '../base_directory/BaseDirectory';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Define the User interface
interface User {
  userId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  addresses: any[];
  isEmailVerified: boolean;
  email: string;
  token: string;
}

export interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  verify: () => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem(
      `f3_user_data_${BaseDirectories.APP_ENV}`,
    );
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        `f3_user_data_${BaseDirectories.APP_ENV}`,
        JSON.stringify(user),
      );
    } else {
      localStorage.removeItem(`f3_user_data_${BaseDirectories.APP_ENV}`);
    }
  }, [user]);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const verify = () => {
    return !!user;
  };

  return (
    <UserContext.Provider value={{ user, login, logout, verify }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
