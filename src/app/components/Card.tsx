"use client"
import {useState} from "react";
import Image from 'next/image';
import Link from 'next/link'


interface Product {
    id: string;
    name: string;
    image: string;
    price: string;
    active: boolean;
    description: string;
  }



export const Card = ({id, image, name, price, active, description}:Product) => {
    const [products, setProducts] = useState([ ]);
    return (
        <div className="rounded-md h-full w-full bg-white text-center flex flex-col justify-between">
            <div className="p-4">
                <div className="rounded-full overflow-hidden w-[88px] h-[88px] relative mx-auto"><Image alt="product image" src={image} fill={true} className="rounded-full mx-auto" ></Image></div>
                <h3 className="font-bold text-black text-base">{name}</h3>
                <div>
                    <p className="font-normal text-cardGreyText text-base">${price}</p>
                    <h3 className=" bg-cardGreenBg text-cardGreen rounded-full text-xs font-semibold w-20 mx-auto ">{active ? 'Active' : 'Inactive'}</h3>
                </div>
            </div>

            <div className="grid grid-cols-2  bottom-0">
                <button className=" text-sm font-bold border border-cardButtonGrey p-2 rounded-bl-lg text-cardButtonRed">Remove</button>
                <button className=" text-sm font-bold border border-cardButtonGrey p-2 rounded-br-lg text-black"><Link href={"item/" + id}>View</Link></button>
            </div>
        </div>
    )
}

export default Card;