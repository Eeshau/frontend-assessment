/* -------------------------------Instructions ---------------------------------------
/dashboard/list
Following the List page design, create a page that uses a top navigation bar layout with the main content showing a list of the user's favorite items.
Use swr to load the data client side from the mock API you made in step 1. Before the data is loaded, show a loading icon in place of the list.
The list items do not need to have any functionality other than when clicking on an item it will take you to the /item/[id] page of its id.
The appearace/UI of the top navigation is not important and does not need to match the design if it is time consuming.
-------------------------------------------------------------------------------------*/ 

"use client"
import { Inter } from 'next/font/google';
import Image from 'next/image';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import ListRow from '..//../components/ListRow';
import logo from '../../../../public/logo.png'
import Head from 'next/head'
import useSWR from 'swr'
import TopNav from '../../components/TopNav'

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  active: boolean;
  seller: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  description: string;
}

interface ApiResponse {
  products: Product[];
}

const inter = Inter({ 
  weight: ['500', '600'],
  subsets: ['latin'],
});


export default function Home() {
  const [items, setItems] = useState<Product[]>([]);

  const fetcher = async () => {
    const response = await fetch('/api/products');
    const data:ApiResponse = await response.json();
    setItems(data.products);
    return data
  }
  
  function DashboardSWR(){
    const {data, error} = useSWR('dashboard', fetcher)
    if (error) return 'Error has occured | dashboard swr'
    if (!data) return (
      <div className="px-20 pt-50 ">
      <div className="font-bold text-center text-xl">
        <h1>Loading...</h1>
        <p>🕚</p>
      </div>
    </div>
    )

    return (
      <div className="relative -top-60 bg-white mx-10 mt-5 rounded-md px-5">
      <div className="grid grid-cols-1 gap-0.5 justify-center items-center bg-white p-6 rounded-md ">
        <div className="flex py-4">
          <div className="mr-auto">
            <h1 className="font-semibold">Favorites</h1>
            <p className="font-normal text-listBoxGreyText">A list of your favorites items to keep track of.</p>
          </div>
          <button className="px-4 py-2 bg-buttonNeonBlue text-white rounded-md ml-auto">+ Add</button>
        </div>

        <div className="grid grid-cols-7 gap-2 justify-center items-center h-full w-full text-center text-black font-semibold py-5">
          <h3 className="col-span-3 text-left bg-">Name</h3>
          <h3>Seller</h3>
          <h3>Status</h3>
          <h3>Price</h3>
        </div>
        <div className="border-t border-1 border-itemGreyLine h-px"></div>
        {items.map((product) => (
          <div key={product.id} className="justify-self-center w-full h-full">
            <ListRow  id={product.id} image={product.image} name={product.name} price={product.price} active={product.active} seller={product.seller}/>
          </div>
        ))}
      </div>
    </div>
    )
  }


  return (
    <div>
      <Head>
        <title>Card Page</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </Head>
      <TopNav/>
      <div className="bg-backgroundGrey min-h-screen">
        <div className=" w-full h-1/3 relative">
          <div className="h-80 bg-sidebarBlue">
            <h1 className="text-4xl font-bold text-white px-10 pt-5">Dashboard</h1>
          </div>
          {DashboardSWR()}
        </div>


      </div>
    </div>
  );
}
