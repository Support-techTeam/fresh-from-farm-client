import React from 'react';
import { GeneralHeader } from './GeneralHeader';
import { FooterMain } from './Footer';

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GeneralHeader />
      <main className="overflow-x-hidden">{children}</main>
      <FooterMain />
    </>
  );
};

export default GeneralLayout;
