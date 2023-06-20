"use client"
import {useState} from "react";
import Image from 'next/image';
import Link from 'next/link'
import logo from '../../../public/logo.png'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';


export const TopNav = () => {

    return (
        <div className="min-h-50px w-full bg-sidebarBlue px-10 py-3 text-white">
            <div className="flex justify-between">
                <div className="grid grid-cols-4 gap-3 flex items-center justify-center text-center font-light">
                    <Image alt='logo' width='50' src={logo}></Image>
                    <button className="bg-navButtonBlue p-3 rounded-md">Dashboard</button>
                    <button className="">Browse</button>
                    <button className="">Cart</button>
                </div>
                <div className="grid grid-cols-2 flex items-center justify-center">
                    <NotificationsOutlinedIcon style={{ color: 'grey' }} fontSize="large"/>
                    <div className="rounded-full overflow-hidden w-[45px] h-[45px] relative"><Image alt="Picture of user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXuOLv0yZlZyzym1ZRZAAAh2B8bZLhqwDAUxrCpe1abjdYf-bt"  fill={true} className="rounded-full mx-auto" /></div>
                </div>
            </div>
            <div className="border-t border-1 border-sidebarGrey h-px mt-4"></div>
          </div>
    )
}

export default TopNav;