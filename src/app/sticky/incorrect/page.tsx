"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/trade/footer";
import Sticky_Header from "@/components/trade/sticky_header";
export default function Home() {
  return (
    <div style={{backgroundImage: `url('./assets/image/trade_background.png')`, backgroundSize: 'cover', height: '100vh', background:'#FF91A44D'}}>
        <Sticky_Header />
        <div className="h-[80vh]">
        <div className="flex max-w-[520px] h-[216px] rounded-[10px] border border-white border-[2px] bg-[#FFCED040] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="border-r-[2px] w-1/3 flex justify-center items-center">
            <Image 
              src="/assets/icon/bad.png" 
              alt="Logo Icon" 
              width={138} // Set the desired width
              height={138} // Set the desired height
              className="text-black" // You can still apply classes
            />   
          </div>
          <div className="flex flex-col px-8 justify-center items-start space-y-3 w-2/3">
            <p className="font-sans font-[600] text-[20px] font-normal leading-[27.24px] text-underline-position text-left text-[#21252D]">
              You’re in the wrong chain
            </p>
            <p className="font-sans font-[600] text-[15px] font-normal leading-[20.43px] text-underline-position text-left text-[#21252D]">                
              Please, move to Base network.
            </p>
            <button className="w-full bg-[#543009] rounded-[10px] font-bold text-[16px] text-[#FDDEDF] h-[45px]"> 
              Change Network
            </button>
          </div>
        </div>   
        </div>
             
        <Footer />
    </div>
  );
}
