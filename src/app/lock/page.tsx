"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function Home() {
  const router = useRouter();
  return (
    <DefaultLayout>
    <div className="container mx-auto flex justify-center items-center p-[20px]">
      <div className="flex w-full justify-center items-start w-full flex-col">         
        <div className="flex border border-2 border-white rounded-xl w-full items-start p-10 py-20 bg-white bg-opacity-30 dark:bg-[#5D2B32]">            
          <div className="flex flex-col space-y-3 w-5/12 border-r-2 border-white">
            <div className="flex space-x-2 items-center">
              <Image 
                src="/assets/icon/lock.png" 
                alt="Logo Icon" 
                width={41} // Set the desired width
                height={41} // Set the desired height
              />
              <p className="font-sans text-[35px] font-[700] leading-[47.66px] text-[#21252D] dark:text-white">
                Lock
              </p>
            </div>
            <p className="font-sans text-[20px] font-normal leading-[27.66px] text-[#21252D] text-opacity-50  dark:text-white dark:text-opacity-50">
              Create a lock and get full access to Coral’s ve 3,3
            </p>
            <div className="flex">
              <button className="flex justify-center items-center text-white p-2 px-10 rounded-lg bg-custom-gradient"  onClick={() => router.push("/lock/create")}>
                Create Lock                  
              </button>
              <button className="flex justify-center items-center text-[#684222] bg-white p-2 px-10 rounded-lg ml-2 dark:text-[#C37623]"  onClick={() => router.push("/lock/manage")}>
                Vote                  
              </button>
            </div>
            <p className="font-sans text-[14px] font-[600] leading-[19.06px] text-[#684222] dark:text-[#C37623]">
              Need some help? Join our discord
            </p>
          </div>
          <div className="w-1/12"></div>
          <div className="flex flex-col space-y-5 w-6/12 items-start">
            <div className="flex ">
              <div className="flex justify-center items-center text-[#684222] bg-white rounded-xl text-[13px]">
                <div className="flex justify-center items-center text-white bg-custom-gradient rounded-xl h-full text-[13px] p-2 px-4">
                  <FontAwesomeIcon icon={faWandSparkles} style={{ color: '#ffffff', fontSize: '13px', marginRight:"10px"}}/>
                  veHACHI APR                 
                </div>
                <div className="flex justify-center items-center text-[#21252D]  h-full text-[13px] p-2 ">
                  408%            
                </div>                 
              </div>                
            </div>
            <div className="flex space-x-3">
              <div className="flex w-1/2 flex-col items-start">
                <FontAwesomeIcon icon={faLightbulb} className="text-[#FF7D82] text-[15px]"/>
                <p className="font-sans text-[13px] font-[400] leading-[17.06px] text-[#21252D] text-justify mt-3 dark:text-white">
                  Limitless liquidity, state of the art AMM design, and advanced smart-order routing provides the best rates and lowest slippage across all liquidity pairs. Trade with confidence knowing you’re getting the best rate every time.
                </p>  
                <div className="flex mt-2">
                  <FontAwesomeIcon icon={faCircle} className="text-[#FF7D82] text-[9px] mr-1"/>
                  <FontAwesomeIcon icon={faCircle} className="text-[#5B8AE4] text-opacity-20 text-[9px]"/>
                </div>
              </div>
              <div className="flex w-1/2 flex-col items-start">
                <FontAwesomeIcon icon={faLightbulb} className="text-[#5B8AE4] text-[15px]  text-opacity-50  dark:text-white dark:text-opacity-50"/>
                <p className="font-sans text-[13px] font-[400] leading-[17.06px] text-[#21252D] text-opacity-50 text-justify mt-3 dark:text-white dark:text-opacity-50">
                  Limitless liquidity, state of the art AMM design, and advanced smart-order routing provides the best rates and lowest slippage across all liquidity pairs. Trade with confidence knowing you’re getting the best rate every time.
                </p>
              </div>
            </div>     
          </div>
        </div>
        <div className="flex border border-2 border-white rounded-xl w-full mt-3 p-5 px-10 flex-col bg-white bg-opacity-30 dark:bg-[#5D2B32]">
          <div className="flex justify-between">
            <p className="font-sans text-[32px] font-[700] leading-[43.58px] text-[#21252D] dark:text-white">
              Lock Token
            </p>
            <div className="flex">
              <div className="flex justify-flex rounded-lg bg-white p-1 px-5 items-center dark:bg-[#4A1F27]">
                <p className="font-sans text-[14px] font-normal leading-[18.08px] text-[#21252D] mr-10 dark:text-white dark:text-opacity-50">
                  Select Liquitidy Filters
                </p>
                <FontAwesomeIcon icon={faAngleDown} className="text-[#FF7D82] text-[12px]"/>
              </div>
              <div className="flex justify-flex rounded-lg bg-white p-1 px-5 items-center ml-2 dark:bg-[#4A1F27]">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#FF7D82] text-[15px] mr-2"/>
                <p className="font-sans text-[14px] font-normal leading-[18.08px] text-[#21252D] mr-14 dark:text-white dark:text-opacity-50">
                  Search by name, symbol..
                </p>                  
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between mt-10 px-5">
              <div className="flex w-1/6 justify-start">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                  veHACHI ID
                </p>
              </div>
              <div className="flex space-x-1 items-center justify-end w-1/12">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                  Lock Value
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[8px] dark:text-white"/>
              </div>             
              <div className="flex space-x-1 items-center justify-end w-1/12">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                  Locked Amount
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[8px] dark:text-white"/>
              </div> 
              <div className="flex space-x-1 items-center justify-end w-1/12">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                  Lock Expires
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[8px] dark:text-white"/>
              </div> 
              <div className="flex space-x-1 items-center justify-end w-1/12">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                  Vote Status
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[8px] dark:text-white"/>
              </div> 
              <div className="flex space-x-1 items-center justify-end w-1/12">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                  About
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[8px] dark:text-white"/>
              </div>                                
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF7D82] text-[10px] font-normal dark:bg-[#FF4465]">Active</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF4465]">
                  Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF7D82] text-[12px] font-[600] font-sans dark:bg-[#FF4465]">Manage</div>
              </div>            
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF0000] text-[10px] font-normal dark:bg-[#D63030]">Expired</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF010C]">
                  Not Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF0000] text-[12px] font-[600] font-sans dark:bg-[#D63030]">Unlock</div>
              </div>            
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF7D82] text-[10px] font-normal dark:bg-[#FF4465]">Active</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF4465]">
                  Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF7D82] text-[12px] font-[600] font-sans dark:bg-[#FF4465]">Manage</div>
              </div>            
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF0000] text-[10px] font-normal dark:bg-[#D63030]">Expired</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF010C]">
                  Not Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF0000] text-[12px] font-[600] font-sans dark:bg-[#D63030]">Unlock</div>
              </div>            
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF7D82] text-[10px] font-normal dark:bg-[#FF4465]">Active</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF4465]">
                  Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF7D82] text-[12px] font-[600] font-sans dark:bg-[#FF4465]">Manage</div>
              </div>            
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF0000] text-[10px] font-normal dark:bg-[#D63030]">Expired</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF010C]">
                  Not Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF0000] text-[12px] font-[600] font-sans dark:bg-[#D63030]">Unlock</div>
              </div>            
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF7D82] text-[10px] font-normal dark:bg-[#FF4465]">Active</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF4465]">
                  Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF7D82] text-[12px] font-[600] font-sans dark:bg-[#FF4465]">Manage</div>
              </div>            
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF0000] text-[10px] font-normal dark:bg-[#D63030]">Expired</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF010C]">
                  Not Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF0000] text-[12px] font-[600] font-sans dark:bg-[#D63030]">Unlock</div>
              </div>            
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF7D82] text-[10px] font-normal dark:bg-[#FF4465]">Active</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF4465]">
                  Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF7D82] text-[12px] font-[600] font-sans dark:bg-[#FF4465]">Manage</div>
              </div>            
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF0000] text-[10px] font-normal dark:bg-[#D63030]">Expired</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF010C]">
                  Not Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF0000] text-[12px] font-[600] font-sans dark:bg-[#D63030]">Unlock</div>
              </div>            
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF7D82] text-[10px] font-normal dark:bg-[#FF4465]">Active</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF4465]">
                  Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF7D82] text-[12px] font-[600] font-sans dark:bg-[#FF4465]">Manage</div>
              </div>            
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF0000] text-[10px] font-normal dark:bg-[#D63030]">Expired</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF010C]">
                  Not Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF0000] text-[12px] font-[600] font-sans dark:bg-[#D63030]">Unlock</div>
              </div>            
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF7D82] text-[10px] font-normal dark:bg-[#FF4465]">Active</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF4465]">
                  Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF7D82] text-[12px] font-[600] font-sans dark:bg-[#FF4465]">Manage</div>
              </div>            
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-3 dark:bg-[#4A1F27]">
              <div className="flex space-x-2 w-1/6 items-center">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  />                     
                </div>
                <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                  11234
                </p>
                <div className="flex items-center justify-center rounded-lg p-3 py-1 text-white bg-[#FF0000] text-[10px] font-normal dark:bg-[#D63030]">Expired</div>
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div>  
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  3878 veCORA
                </p>                  
              </div> 
              <div className="flex justify-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#FF7D82] p-1 dark:text-[#FF010C]">
                  Not Voted
                </p>                  
              </div>
              <div className="flex justify-end w-1/12">
                <div className="flex items-center justify-end rounded-lg p-5 py-1 text-white bg-[#FF0000] text-[12px] font-[600] font-sans dark:bg-[#D63030]">Unlock</div>
              </div>            
            </div>

          </div>
          <div className="flex justify-between mt-5">
            <div className="flex justify-center items-center space-x-2">
              <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#21252D] dark:text-white">
                10 Rows | 1-10 of 186
              </p>
              <div className="flex rounded-full p-2 justify-center items-center bg-white dark:bg-[#C37623]">
                <FontAwesomeIcon icon={faGear} className="text-[#FF7D82] text-[15px] dark:text-white"/>
              </div>                
            </div>            
            <div className="flex space-x-7 items-center">          
              <FontAwesomeIcon icon={faArrowLeft} className="text-[#FF7D82] text-[15px]"/>
              <p className="font-sans text-[10px] font-normal text-[#21252D] dark:text-white">1</p>
              <p className="font-sans text-[10px] font-normal text-[#21252D] dark:text-white">2</p>
              <p className="font-sans text-[10px] font-normal text-[#21252D] dark:text-white">3</p>
              <p className="font-sans text-[10px] font-normal text-[#21252D] dark:text-white">4</p>
              <p className="font-sans text-[10px] font-normal text-[#21252D] dark:text-white">5</p>
              <p className="font-sans text-[10px] font-normal text-[#21252D] dark:text-white">...</p>
              <p className="font-sans text-[10px] font-normal text-[#21252D] dark:text-white">20</p>
              <FontAwesomeIcon icon={faArrowRight} className="text-[#FF7D82] text-[15px]"/>                
            </div>
          </div>
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
}
