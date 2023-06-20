/* -------------------------------Instructions ---------------------------------------
/dashboard/card
Following the Card page design, create a page that uses a side navigation bar layout with the main content showing a grid of cards of the user's favorite items.
Use swr to load the data client side from the mock API you made in step 1. Before the data is loaded, show a loading icon in place of the grid.
The card items do not need to have any functionality other than when clicking the View button it will take you to the /item/[id] page of its id.
The appearace/UI of the top navigation is not important and does not need to match the design if it is time consuming.
[x] SWR use client from mock API
[x] View -> item/[id]
-------------------------------------------------------------------------------------*/ 

"use client"
import { Inter } from 'next/font/google';
import Image from 'next/image';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import Card from '..//../components/Card';
import logo from '../../../../public/logo.png'
import Head from 'next/head'
import useSWR from 'swr'
import SideNav from '../../components/SideNav'

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
      <div className="px-20 pt-16">
      <div className="grid grid-cols-4 grid-rows-2 gap-5 justify-center items-center">
        {items.map((product) => (
          <div key={product.id} className="justify-self-center w-full h-full">
            <Card  id={product.id} image={product.image} name={product.name} price={product.price} active={product.active} description={product.description}/>
          </div>
        ))}
      </div>
    </div>
    )
  }


  return (
    <div className="grid grid-cols-5">
      <Head>
        <title>Card Page</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </Head>
      <SideNav/>

      <div className="bg-backgroundGrey min-h-screen col-span-4">
        <h1 className="text-4xl font-bold text-blueishBlack px-10 pt-5">Dashboard</h1>
        {DashboardSWR()}
      </div>
    </div>
  );
}
