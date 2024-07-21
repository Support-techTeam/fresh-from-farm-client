import React, { createContext, useContext, ReactNode } from 'react';
import rootStore, { RootStoreType } from '../mobx_stores/RootStore';

const StoreContext = createContext<RootStoreType>(rootStore);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};

export const useStore = (): RootStoreType => useContext(StoreContext);
