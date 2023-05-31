import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../../public/assets/logo.png";
import Dropdown from './Dropdown';
import { BsSearch } from 'react-icons/bs';

function Navbar() {
	return (
		<nav className='fixed z-500 top-0 left-0 h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px]'>
		{/*left*/}
			<div className='flex grow items-center justify-start'>
				<Link href='/'>
					<Image 
						className='cursor-pointer z-10'
						src={logo} 
						alt='/'
						width="36"
						height="36"/>
				</Link>
				<p className='p-4'>Browse</p>
				<div className='p-4'>
					<Dropdown/>
				</div>
			</div>
		{/*Middle*/}
			<div className='flex grow-[2] items-center justify-center'>
				<div className='text-white flex justify-center items-center max-w-[400px} m-auto p-2'>
					<input 
						type="text" 
						className='p-[.3rem] bg-transparent border-[1px] focus:border-none outline-none text-white focus:outline-[#9147ff]'
						placeholder='Search'/>
				<div className='ml-[1rem] bg-grey'>
					<BsSearch/>
				</div>
				</div>
			</div>
		{/*right*/}
			<div className='hidden md:flex grow items-center justify-end'>
				<img 
					src="https://robohash.org/1"
					className='rounded-[17px] border-[1px] border-white' 
					alt="profile image" 
					width="36" height="36"/>
			</div>
		</nav>
	)
}

export default Navbar