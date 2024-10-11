import React from 'react';
import { Button } from './ui/button';
import { GiShoppingBag } from "react-icons/gi";

function Hero() {
    return (
        <div>
            <div className="hero min-h-[80vh] lg:min-h-[70vh] custom-image bg-fixed ">
                <div className="hero-overlay bg-opacity-35"></div>
                <div className="hero-content text-white text-center">
                    <div className="max-w-md">
                        <h1 className="mb-4 scroll-m-20 text-4xl font-bold tracking-normal lg:text-5xl">Step Into <span className="text-myOrange">Style</span></h1>
                        <p  className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight">
                            Explore exclusive collections and unbeatable deals. Elevate your wardrobe with the season’s must-haves!
                        </p>
                        <Button className="outline rounded-2xl bg-myMaroon hover:bg-myBlackThree outline-2 outline-offset-1 cursor-pointer group">
                        <GiShoppingBag className="mr-2 h-4 w-4  group-hover:animate-bounce " /> Start Shopping
                      </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
