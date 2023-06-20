"use client"
import Image from 'next/image';
import Link from 'next/link'


interface Product {
    id: string;
    name: string;
    image: string;
    price: string;
    active: boolean;
    seller: string;
  }



export const ListRow = ({id, image, name, price, active, seller}:Product) => {
    return (
        <div>
            <div className="grid grid-cols-7 gap-2 justify-center items-center h-full w-full text-center py-2">
                        <div className="w-[50px] h-[50px] rounded-full relative"><Image alt="product image" src={image} fill={true} style={{objectFit: "cover"}} className="rounded-full mx-auto  h-88 w-88"  ></Image></div>
                        <h3 className="text-black font-normal text-left col-span-2">{name}</h3>

                    <p className="font-normal text-black ">{seller}</p>
                    <h3 className=" bg-cardGreenBg text-cardGreen rounded-full text-xs font-semibold px-2 py-1 mx-auto ">{active ? 'Active' : 'Inactive'}</h3>
                    <p className="font-normal text-black">${price}</p>
                    <button className=" text-sm font-bold rounded-bl-lg text-cardButtonRed">Remove</button>
            </div>
            <div className="border-t border-1 border-itemGreyLine h-px"></div>
        </div>
    )
}

export default ListRow;