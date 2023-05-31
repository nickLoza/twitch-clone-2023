"use client"
import HeroCarrousel from './components/HeroCarrousel'
import { useContext } from 'react';
import { SidebarContext } from './context/SidebarContext';
import LiveChannels from './components/LiveChannels';
import IconBar from './components/IconBar';

export default function Home() {
  const { isSidebarOpen } = useContext(SidebarContext)!;
  return (
    <main className={isSidebarOpen? "pl-[270px]" : "pl-[90px]"}>
      <HeroCarrousel/>
      <LiveChannels/>
      <IconBar/>
    </main>
  )
}
