"use client"
import {useState} from "react";
import Image from 'next/image';
import Link from 'next/link'
import logo from '../../../public/logo.png'
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';

export const SideNav = () => {
  
    return (
        <div className="container min-h-50px bg-sidebarBlue flex flex-col justify-between">
        <div>
          <div className="pl-7 pt-4">
            <Image alt='logo' width='50' src={logo}></Image>
          </div>
          <div className="grid grid-row-3 text-sidebarGrey px-3">
            <button className="bg-navButtonBlue p-3 rounded-md flex ">
              <HomeOutlinedIcon />
              <h3 className="ml-3">Dashboard</h3>
            </button>
            <button className="p-3 rounded-md flex ">
            <FolderOpenOutlinedIcon/>
            <h3 className="ml-3">Browse</h3>
            </button>
            <button className="p-3 rounded-md flex ">
              <InboxOutlinedIcon/>
              <h3 className="ml-3">Cart</h3>
            </button>
          </div>
        </div>

        <div className="flex items-center bg-sidebarProfileBgGrey px-3 py-2"> 
          <div className="w-[45px] h-[45px] rounded-full relative flex-shrink-0">
            <Image alt="Picture of user" src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80" fill={true} className="rounded-full" />
          </div>
          <div className="ml-2">
            <h3 className="text-sidebarWhite">Tom Cook</h3>
            <p className="text-sidebarProfileGrey">View Profile</p>
          </div>
        </div>
      </div>
    )
}

export default SideNav;