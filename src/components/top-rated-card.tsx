import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';

function TopRatedCard(
    {
        src,
        alt,
        title,
        description,
        price,
        oldPrice,
        category,
        soloProduct,
    }: {
        src: string;
        alt: string;
        title: string;
        description: string;
        price: number;
        oldPrice: number;
        category: string;
        soloProduct: string;

    }) {
    return (
        <div className="w-[328px] h-[30rem] p-4 mx-auto shadow-2xl rounded-xl relative group">
            <Link href={`/${category}/${soloProduct}`}>
                <div className='block relative h-[18.6rem] overflow-hidden rounded'>
                    <Image src={src} alt={alt} width={300} height={300} />
                </div>
                <div className="mt-4">
                    <h2 className="card-title scroll-m-20 border-b pb-1 text-xl font-semibold tracking-tight first:mt-0 text-myBlackOne line-clamp-1 mb-0 capitalize">{title}</h2>
                    <p className='scroll-m-20 border-b text-md font-normal tracking-tight first:mt-0 pb-0 line-clamp-1 text-myBlackThree'>{description}.</p>
                    <div className='flex gap-3'>
                        <h3 className="card-title scroll-m-20 border-b pb-0 text-2xl font-semibold tracking-tight first:mt-0 text-myMaroonRed line-clamp-1 mb-0">${price}</h3>
                        <p className='scroll-m-20 border-b pt-[0.43rem] text-md font-medium tracking-tight first:mt-0 pb-0 line-clamp-1 text-[#4c4c4c] line-through'> ${oldPrice} </p>

                    </div>
                </div>

            </Link>
            <div className="mt-3 absolute right-2 flex items-center space-x-2">
                <span className="flex ">
                    {/* Star Icons */}
                    {[...Array(4)].map((_, i) => (
                        <svg key={i} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-[18px] h-[18px] text-myGold" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                    ))}
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-[18px] h-[18px] text-myGold" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                </span>

                {/* Buttons */}
                <Button className="bg-myMaroon rounded-[10px] flex items-center px-3 text-xs font-semibold tracking-tight hover:bg-myBlackThree text-white hover:text-myGold">
                    <FaShoppingCart className="mr-2 h-[0.82rem] w-[0.82rem]" /> Add to Cart
                </Button>
                <Button className="bg-myMaroon rounded-[10px] flex items-center px-3 text-xs font-semibold tracking-tight hover:bg-myBlackThree text-white hover:text-myGold">
                    <FaHeart className="mr-2 h-[0.82rem] w-[0.82rem]" /> Buy Now
                </Button>
            </div>
            



        </div>
    )
}

export default TopRatedCard
