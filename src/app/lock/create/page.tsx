"use client";

import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from '@/components/layout/DefaultLayout';

export default function Home() {

  return (
    <DefaultLayout>
    <div className="container mx-auto flex justify-center items-center p-[20px] xl:px-[100px] py-8">
      <div className="flex w-full justify-center items-start space-x-8 w-full">
        <div className="flex w-7/12 flex-col items-center justify-center space-y-6">            
          <div className="flex rounded-lg border-t-2 border-white custom-border px-10 pt-5 w-full items-center space-x-3 bg-gradient-to-b from-custom-white-20 to-custom-white-0">
            <Image 
                src="/assets/icon/lock-close.png" 
                alt="Logo Icon" 
                width={22} // Set the desired width
                height={27} // Set the desired height
              />
            <p className="font-sans text-[14px] font-[400] leading-[19.06px] text-black dark:text-white">
              Locking will give you an NFT, referred to as a veHACHI. You can increase the Lock amount or extend the Lock time at any point after.
            </p>
          </div>
          <div className="flex flex-col rounded-lg  border-t-2 border-white custom-border p-8 w-full space-y-5 bg-gradient-to-b from-custom-white-20 to-custom-white-0">
            <p className="font-sans text-[22px] font-[700] leading-[24.06px] text-[#21252D] -ml-2 dark:text-white">
              How it works
            </p>
            <div className="relative">
              <div className="border-l-2 border-white">
                <div className="mb-12 ml-4 flex items-center">
                  <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">1</div>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                    Quote for new lock received...
                  </p>
                </div>
                <div className="mb-12 ml-4 flex items-center ">
                <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">2</div>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                    Quote for deposit received...
                  </p>
                </div>
                <div className="mb-12 ml-4 flex items-center">
                <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">3</div>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                    Time of locking applied...
                  </p>
                </div> 
                <div className="ml-4 flex items-center">
                <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">4</div>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                    Creating veHACHI...
                  </p>
                </div>                 
              </div>
            </div>            
          </div>
        </div>
        <div className="flex w-5/12 rounded-lg flex-col items-center justify-center dark:bg-[#5D2B32]">            
          <div className="flex flex-col rounded-t-lg border border-white border-2 p-7 py-10 w-full">
            <div className='flex items-center justify-between pb-5'>
              <div className="flex w-full items-center">
                <FontAwesomeIcon icon={faArrowLeft} className="text-[#FF7D82] text-[20px]"/>
                <p className="font-sans text-[25px] font-[400] leading-[34.06px] text-[#21252D] ml-2 dark:text-white">
                  Create a Lock
                </p>        
              </div>
              <Image 
                  src="/assets/icon/reset.png" 
                  alt="Logo Icon" 
                  width={26} // Set the desired width
                  height={26} // Set the desired height
                />
            </div>
            <div className="flex flex-col w-full space-y-4]">
              <div className="flex bg-[#FF7D82] border border-2 border-[#FF4465] justify-start w-full items-center rounded-xl">
                  <FontAwesomeIcon icon={faWandSparkles} className="text-white  stroke-effect text-[14px] p-[15px] px-[20px]"/>
                  <p className="font-sans text-white font-[400] text-[12px] w-5/6">Stake your LP’s to get better incomes!</p>
              </div>
              <div className="flex flex-col w-full space-y-2 relative pt-3">              
                <div className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#4A1F27] dark:bg-opacity-50">
                    <Image 
                        src="/assets/icon/logo.png" 
                        alt="Logo Icon" 
                        width={53} // Set the desired width
                        height={53} // Set the desired height
                    />
                    <div className="flex w-full justify-between">
                    <div className="flex flex-col">
                        <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                        HACHI
                        </p>
                        <p className="font-sans text-[20px] font-normal leading-[27.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                        0.00
                        </p>
                        <div className="rounded-xl bg-white p-1 px-3 dark:bg-[#4A1F27]">
                        <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                            <span className="text-[#FF4465]">$ </span> 0.00
                        </p>
                        </div>    
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                        <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                        Balance: 234.34 HACHI
                        </p>
                        <div className="rounded-xl bg-[#684222] p-1 px-3 dark:bg-[#504C4C]">
                        <p className="font-sans text-[12px] font-normal leading-[16.36px] text-white">
                            Max
                        </p>
                        </div>   
                        <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] dark:text-white">
                        25% 50% 75%
                        </p>   
                    </div>
                    </div>            
                </div>
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-5">
                    <Image 
                    src="/assets/icon/lock-white.png" 
                    alt="Logo Icon" 
                    width={45} // Set the desired width
                    height={45} // Set the desired height
                    />
                </button>
                <div className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#4A1F27] dark:bg-opacity-50">
                    <div className='flex rounded-full bg-white p-5 items-center justify-center dark:bg-[#71373C]'>
                      <FontAwesomeIcon icon={faCalendarDay} className="text-[#FF7D82] text-[26px]"/>
                    </div>          
                    <div className='flex flex-col w-full'>
                      <div className="flex w-full justify-between  pb-2">
                        <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                          Lock Until
                        </p>
                        <p className="font-sans text-[14px] font-[600] leading-[27.06px] text-[#FF7D82]">
                          1 Day
                        </p>
                      </div>
                      <div className="flex flex-col items-center py-3">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={50}
                          className="slider w-full h-1 bg-[#19376D] dark:bg-[#FEE8E9] dark:bg-opacity-25 bg-opacity-25 rounded-lg cursor-pointer" // Customize track color
                          readOnly
                        />                    
                      </div>
                      <div className="flex w-full justify-between pt-2">
                        <div className="flex items-center justify-end rounded-full p-2 py-1 text-white bg-custom-gradient text-[12px] font-[400] font-sans">1 Day</div>
                        <div className="flex items-center justify-end rounded-full p-2 py-1 text-[#21252D] bg-[#DCE5EE] text-[12px] font-[400] font-sans">1 Week</div> 
                        <div className="flex items-center justify-end rounded-full p-2 py-1 text-[#21252D] bg-[#DCE5EE] text-[12px] font-[400] font-sans">1 Month</div> 
                        <div className="flex items-center justify-end rounded-full p-2 py-1 text-[#21252D] bg-[#DCE5EE] text-[12px] font-[400] font-sans">1 Year</div> 
                        <div className="flex items-center justify-end rounded-full p-2 py-1 text-[#21252D] bg-[#DCE5EE] text-[12px] font-[400] font-sans">2 Years</div> 
                      </div>
                    </div>       
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-b-lg border-b-2 border-r-2 border-l-2 border-white p-7 w-full space-y-5">
            <p className="font-sans text-[18px] font-normal leading-[24.06px] text-[#21252D] dark:text-white">
              Voting Power
            </p>
            <div className='flex space-x-10 w-full'>
              <div className='flex items-center space-x-2'>
                <Image 
                  src="/assets/icon/logo.png" 
                  alt="Logo Icon" 
                  width={35} // Set the desired width
                  height={35} // Set the desired height
                />
                <div className="flex flex-col">                    
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                    0.00
                  </p> 
                  <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                    veHACHI
                  </p>                        
                </div>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='flex rounded-full bg-white p-3 items-center justify-center'>
                  <FontAwesomeIcon icon={faCalendarDay} className="text-[#FF7D82] text-[20px]"/>
                </div>
                <div className="flex flex-col">     
                  <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50dark:text-white dark:text-opacity-50">
                    Unlocks in
                  </p>                
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                    0 Years, 0 Months, 0 Days, 0 Hours
                  </p>                                           
                </div>
              </div> 
            </div>                        
          </div>
          <div className='flex space-x-2 w-full pt-5'>
            <button className="rounded-lg px-5 py-3 text-[16px] font-[700] font-sans  bg-[#684222] w-full dark:bg-[#C37623] dark:border border-white">
              Create Lock
              <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff', fontSize: '16px', marginLeft:"10px"}}/>
            </button>                
          </div>                        
        </div>
      </div>  
    </div>
    </DefaultLayout>
  );
}
