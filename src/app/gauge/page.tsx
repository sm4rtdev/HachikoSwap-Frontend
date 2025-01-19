"use client";

import React, {useState} from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRight, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from '@/components/layout/DefaultLayout';
import { faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons/faMagicWandSparkles';
import Link from 'next/link';
import Pool from '@/components/gauge/pool';

export default function Home() {

  const [isSelectPool, setIsSelectPool] = useState(false)
  const selectPool = () => setIsSelectPool(true);
  const closePool = () => setIsSelectPool(false);
  return (
    <DefaultLayout>
    <div className="container mx-auto flex justify-center items-center p-[20px] py-8">
      <div className="flex w-full justify-center items-start space-x-8 w-full">
        <div className="flex w-7/12 flex-col items-center justify-center space-y-6">            
          <div className="flex rounded-lg border-t-2 border-white custom-border px-10 py-5 w-full items-center space-x-3 bg-gradient-to-b from-custom-white-20 to-custom-white-0">
            <FontAwesomeIcon icon={faMagicWandSparkles} className="text-[#FF7D82] text-[16px]"/>
            <p className="font-sans text-[14px] font-[400] leading-[19.06px] text-black dark:text-[#FEE8E9]">
              Create a gauge where users can deposit their LP tokens to earn rewards.
            </p>
          </div>
          <div className="flex flex-col rounded-lg  border-t-2 border-white custom-border p-8 w-full space-y-5 px-20 bg-gradient-to-b from-custom-white-20 to-custom-white-0">
            <p className="font-sans text-[22px] font-[700] leading-[24.06px] text-[#21252D] -ml-2 dark:text-[#FEE8E9]">
              Creating Gauge
            </p>
            <div className="relative">
              <div className="border-l-2 border-white">
                <div className="mb-12 ml-4 flex items-center">
                  <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">1</div>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-[#FEE8E9]">
                  Quote for Gauge received...
                  </p>
                </div>
                <div className="mb-12 ml-4 flex items-center ">
                <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">2</div>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-[#FEE8E9]">
                  BTC / HACHI Pool selected...
                  </p>
                </div>
                <div className="mb-12 ml-4 flex items-center">
                <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">3</div>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-[#FEE8E9]">
                  Getting things done...
                  </p>
                </div> 
                <div className="ml-4 flex items-center">
                <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">4</div>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-[#FEE8E9]">
                  Creating Gauge...
                  </p>
                </div>                 
              </div>
            </div>            
          </div>
        </div>
        <div className="flex w-5/12 rounded-lg flex-col items-center justify-center ">            
          <div className="flex flex-col rounded-t-lg border border-white border-2 p-7 py-10 w-full dark:bg-[#5D2B32]">
            <div className='flex items-center justify-between w-full'>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faDatabase} className="text-[#FF7D82] text-[20px]"/>
                <p className="font-sans text-[25px] font-[600] leading-[34.06px] text-[#21252D] ml-2 dark:text-[#FEE8E9]">
                  Gauge 
                </p>        
              </div>                
              <p className="flex font-sans text-black font-[400] text-[12px] dark:text-[#FEE8E9]">Ready to incentivize? <Link className='text-[#FF7D82] ml-2' href="./bribes"> Create a Bribe</Link></p>
            </div>
            <div className="flex flex-col w-full space-y-4  mt-5">               
              <div className="flex flex-col w-full space-y-2 relative">              
                <button className="flex bg-white rounded-lg p-7 bg-opacity-70 items-center justify-start space-x-5 dark:bg-[#4A1F27] dark:border-4 border-white border-opacity-50" onClick={selectPool}>
                  <div className='flex'>
                    <Image 
                        src="/assets/icon/logo.png" 
                        alt="Logo Icon" 
                        width={53} // Set the desired width
                        height={53} // Set the desired height
                    />
                    <Image 
                        src="/assets/icon/ethereum_blue.png" 
                        alt="Logo Icon" 
                        width={53} // Set the desired width
                        height={53} // Set the desired height
                        className='-ml-4'
                    />
                  </div>               
                  <div className="flex flex-col">
                    <div className='flex space-x-1 items-center'>
                      <p className="font-sans text-[16px] font-normal leading-[19.06px] text-[#21252D] dark:text-[#FEE8E9]">
                        HACHI/ETH
                      </p>
                      <FontAwesomeIcon icon={faAngleDown} className="text-[#FF7D82] text-[10px]"/>
                    </div>                         
                    <p className="font-sans text-[12px] font-normal leading-[27.06px] text-black text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50">
                    Volatile
                    </p>                             
                  </div>   
                </button>                              
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-b-lg border-b-2 border-r-2 border-l-2 border-white p-7 w-full space-y-5 dark:bg-[#5D2B32]">
            <p className="font-sans text-[18px] font-normal leading-[24.06px] text-[#21252D] dark:text-[#FEE8E9]">
            Gauge Preview
            </p>
            <div className='flex justify-between w-full'>
              <div className="flex space-x-2 w-4/6">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}                  
                  /> 
                  <Image 
                    src="/assets/icon/ethereum_blue.png" 
                    alt="Logo Icon" 
                    width={32} 
                    height={32}
                    className="-ml-2"               
                  /> 
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2 items-center">
                    <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#19376D] dark:text-[#FEE8E9]">
                      HACHI / ETH
                    </p>                      
                  </div>
                  <div className="flex space-x-1">
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#684222] bg-[#D2CACA] text-[10px] font-normal">Volatile</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.00%</div>
                  </div>
                </div>
              </div> 
              <div className='flex items-center space-x-2'>
                <div className='flex rounded-full bg-white p-3 items-center justify-center'>
                  <FontAwesomeIcon icon={faCalendarDay} className="text-[#FF7D82] text-[20px]"/>
                </div>
                <div className="flex flex-col space-y-2">     
                  <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50">
                  Rewards
                  </p>                
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-[#FEE8E9]">
                  320.54$
                  </p>                                           
                </div>
              </div> 
            </div>                        
          </div>
          <div className='flex space-x-2 w-full pt-5'>
            <button className="rounded-lg px-5 py-3 text-[16px] font-[700] font-sans  bg-[#684222] w-full dark:bg-[#C37623] dark:border border-white">
              Create Gauge
              <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff', fontSize: '16px', marginLeft:"10px"}}/>
            </button>                
          </div>                   
        </div>
      </div>  
    </div>
    <Pool isOpen={isSelectPool} onClose={closePool} />
    </DefaultLayout>
  );
}
