"use client"
import React, { useContext } from 'react'
import Channels from './Channels'
import { SidebarContext } from '@/app/context/SidebarContext';
import { CgPushLeft, CgPushRight } from 'react-icons/cg';

function Sidebar() {
	const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext)!;

	return (
		
		<aside className={`bg-[#1F1F23] fixed h-screen ${isSidebarOpen? "w-[250px]" :"w-14"} z-[200]`}>
			<div className="flex justify-between items-center p-[.5rem]">
				<p className={`uppercase font-bold text-[.8rem] ${isSidebarOpen? "" : "hidden"}`}>Recommended channels</p>
				<button onClick={toggleSidebar} title='close / open'>
					{isSidebarOpen? 
					<CgPushLeft size={20} className="w-[1.5rem] h-[1.5rem] hover:bg-[#cccccc40] transition ease-in-out delay-50 cursor-pointer ml-[.5rem]"/>
					:
					<CgPushRight size={20} className="w-[1.5rem] h-[1.5rem] hover:bg-[#cccccc40] transition ease-in-out delay-50 cursor-pointer ml-[.5rem]"/>}
				</button>
			</div>
			<Channels/>
		</aside>
	)
}

export default Sidebar