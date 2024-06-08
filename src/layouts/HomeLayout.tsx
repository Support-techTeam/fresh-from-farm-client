import React from 'react';
import { HomeHeader } from './HomeHeader';
import { FooterMain } from './Footer';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader />
      <main>{children}</main>
      <FooterMain />
    </>
  );
};

export default HomeLayout;
