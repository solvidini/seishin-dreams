'use client';

import React, { FC, ReactNode, createContext, useContext, useState } from 'react';

interface UIContextProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

export const UIContext = createContext<UIContextProps | undefined>(undefined);

export const useUI = (): UIContextProps => {
  const context = useContext(UIContext);

  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }

  return context;
};

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const contextValue: UIContextProps = {
    isDrawerOpen,
    toggleDrawer,
  };

  return <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>;
};
