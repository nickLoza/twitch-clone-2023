"use client"
import { ReactNode, createContext, useState } from 'react';

type SidebarContextType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

type SidebarProviderType = {
  children: ReactNode
}

export const SidebarContext = createContext<SidebarContextType|null>(null);

export const SidebarProvider = ({children}: SidebarProviderType) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
