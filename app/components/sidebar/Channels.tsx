"use client"
import { livestreamChannels } from "@/app/data/mochData"
import Image from "next/image"
import { useContext, useState } from "react"
import { CgPushLeft, CgPushRight } from "react-icons/cg"
import { BsDot } from "react-icons/bs"
import { RiMovieLine } from "react-icons/ri"
import { SidebarContext } from "@/app/context/SidebarContext"


function Channels() {
	const [ hoveredItem, setHoveredItem ] = useState<null|number|string>(null)
	const { isSidebarOpen } = useContext(SidebarContext)!;

	function handleOnMouseOver(id: number|string){
		setHoveredItem(id)
	}

	function handleOnMouseLeave(){
		setHoveredItem(null)
	}
	return (
		<>
			{livestreamChannels.map((item, i)=>(
				<div 
					key={i}
					className="relative inline-flex items-center w-full py-[2px] cursor-pointer hover:bg-[#cccccc40] transition ease-in-out delay-50"
					onMouseEnter={()=>handleOnMouseOver(item.id)}
					onMouseLeave={()=>handleOnMouseLeave()}>
					<Image 
						src={item.avatar} 
						alt={item.username}
						width="50" 
						height="50"/>
					<div className={`justify-between w-full items-center ${isSidebarOpen? "flex" : "hidden"}`}>
						<div>
							<p className="text-sm">{item.username}</p>
							<p className="text-gray-400 text-sm">{item.game__name}</p>
						</div>
						<p className="flex items-center text-sm pr-[1rem]">
							<BsDot size={40} color="red"/>
						    {item.rank}K
						</p>
					</div>
					{hoveredItem === item.id && 
					<div className={`absolute top-0 w-[175px] bg-[#1F1F23] p-[1rem] rounded-[17px] ${isSidebarOpen? "left-[16rem]" : "left-[75px]"}`}>
						<p className="text-sm">🐈 {item.username} plays {item.game__name}!!!🐈</p>
					</div>
					}
				</div>
			))}
			<div className={`items-center justify-between w-full p-[.5rem] ${isSidebarOpen? "flex" : "hidden"}`}>
				<p className="hidden xl:flex uppercase font-bold text-[.8rem]">Top channels</p>
			</div>
			<RiMovieLine size={25} className={`w-full justify-center my-[.5rem] ${isSidebarOpen ? "hidden" : "flex"}`}/>
			{(livestreamChannels.slice(0,3)).map((item, i)=>(
				<div 
					key={i}
					className="relative inline-flex items-center w-full py-[2px] cursor-pointer hover:bg-[#cccccc40] transition ease-in-out delay-50"
					onMouseEnter={()=>handleOnMouseOver(`top-${item.id}`)}
					onMouseLeave={()=>handleOnMouseLeave()}>
					<Image 
						src={item.avatar} 
						alt={item.username}
						width="50" 
						height="50"/>
					<div className={`justify-between w-full items-center ${isSidebarOpen? "flex" : "hidden"}`}>
						<div>
							<p className="text-sm">{item.username}</p>
							<p className="text-gray-400 text-sm">{item.game__name}</p>
						</div>
						<p className="flex items-center text-sm pr-[1rem]">
							<BsDot size={40} color="red"/>
						    {item.rank}K
						</p>
					</div>
					{hoveredItem === `top-${item.id}` && 
					<div className="absolute top-0 left-[75px] w-[175px] bg-[#1F1F23] p-[1rem] rounded-[17px] xl:left-[16rem]">
						<p className="text-sm">🐈 {item.username} plays {item.game__name}!!!🐈</p>
					</div>
					}
				</div>
			))}
		</>
	)
}

export default Channels