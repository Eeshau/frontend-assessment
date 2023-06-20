/* -------------------------------Instructions ---------------------------------------
/item/[id]
Following the Detail page design, create a page with the Catch-all Segment to show details of a certain item.
This page can use either layout configuration (Route groups may be helpful) and does not need to contain all text content from the design.
This page should be Server-Side Rendered with NextJS - load the items details from the API and pass it to the page.
[x] Catch all segmenet
[x] SSR
-------------------------------------------------------------------------------------*/ 

import { Inter } from 'next/font/google';
import Image from 'next/image';
import SideNav from '../../components/SideNav'

interface Product {
    params: {id: string}; //item/[id] id in url
    id: string;
    name: string;
    image: string;
    price: string;
    active: boolean;
    description: string;
  }

const inter = Inter({ 
  weight: ['300','400','500', '600'],
  subsets: ['latin'],
});


async function fetchItem () {
  const itemResponse = await fetch ('http://localhost:3000/api/products', {cache: "no-store"});
  return itemResponse.json();
}


export default async function Item({params}:Product) {
const items = await fetchItem(); //we do params.id[0] because catch all segment routes will be a list of routes, we want the first one i.e the id
const item = items.products.find((p: { id: string; }) => p.id === params.id[0]);
console.log("ITEM DATA RESPONSE:" + " " + item + "-----------------------------------------");

  return (
    <div className='grid grid-cols-5'>
      <SideNav/>
        {item ? (
          <div className="bg-backgroundGrey min-h-screen p-8 col-span-4">

            <div className="flex items-start py-5 text-align-left">
              <div className="w-[88px] h-[88px] relative"><Image alt="item image" fill={true} src={item.image} style={{objectFit: "cover"}}></Image></div>
              <div className="col-span-4 ml-7">
                <h1 className="text-black font-bold text-lg">{item.name}</h1>
                <h3 className="text-itemGreyText text-sm ">{item.seller}</h3>
              </div>
            </div>

            <div className="bg-white rounded-md p-6 drop-shadow">
              <div>
                <h1  className="text-black text-xl font-bold">Product Information</h1>
                <h3 className="text-itemGreyText text-sm pb-5 pt-2">Item and seller details</h3>
              </div>
              <div className="border-t border-1 border-itemGreyLine h-px"></div>


              <div className="grid grid-cols-2 gap-5 pt-6">
                <div>
                  <h3 className='text-itemGreyText'>Brand</h3>
                  <p  className='text-itemBlueBlackText'>{item.brand}</p>
                </div>
                <div>
                  <h3 className='text-itemGreyText'>Model Name</h3>
                  <p className='text-itemBlueBlackText'>{item.model}</p>
                </div>
                <div>
                  <h3 className='text-itemGreyText'>Color</h3>
                  <p className='text-itemBlueBlackText'>{item.color}</p>
                </div>
                <div>
                  <h3 className='text-itemGreyText'>Catagory</h3>
                  <p className='text-itemBlueBlackText'>{item.category}</p>
                </div>
                <div className='col-span-2'>
                  <h3 className='text-itemGreyText'>About</h3>
                  <p className='text-itemGreyBlackText font-normal'>{item.description}</p>
                </div>
              </div>
          </div>

        </div>
        ): (
          <div className="bg-backgroundGrey min-h-screen p-8 col-span-4">
          <h1>Loading...</h1>
          <p>🕚</p>
          </div>
        )}
    </div>
  );
  
}
