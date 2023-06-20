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
                    <NotificationsOutlinedIcon/>
                    <div className="rounded-full overflow-hidden w-[50px] h-[50px] relative"><Image alt="Picture of user" src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"  fill={true} className="rounded-full mx-auto" /></div>
                </div>
            </div>
            <div className="border-t border-1 border-sidebarGrey h-px mt-4"></div>
          </div>
    )
}

export default TopNav;