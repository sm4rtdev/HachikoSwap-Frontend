"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarDay, faSort } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import Position from '@/components/lock/manage/position';
import Merge from '@/components/lock/manage/merge';
import Split from '@/components/lock/manage/split';
import Transfer from '@/components/lock/manage/transfer';
import DefaultLayout from '@/components/layout/DefaultLayout';
import Lock from '@/components/lock/manage/lock';

export default function Home() {
  const [manageState, setManageState] = useState<number>(0); 

  const handleManageState = (state: number) => {
    setManageState(state);
  };

  const [isSelectToken, setIsSelectToken] = useState(false)
  const selectToken = () => setIsSelectToken(true);
  const closeToken = () => setIsSelectToken(false);

  return (
    <DefaultLayout>
      <div className="container mx-auto flex justify-center items-center p-[20px] xl:px-[100px] py-8">
        <div className="flex w-full justify-center items-start space-x-8 w-full">
          <div className="flex w-7/12 flex-col items-center justify-center space-y-6">            
            <div className="flex flex-col rounded-lg border border-white border-2 p-10 py-7 w-full dark:bg-[#4A1F27]">
              <div className="flex w-full items-center pb-5">                
                <p className="font-sans text-[22px] font-[400] leading-[29.06px] text-[#21252D] dark:text-white">
                  Selected Lock
                </p>        
              </div>
              <div className="flex space-x-2">
                <div className="flex items-center">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={35} 
                    height={35}                  
                  />                   
                </div>
                <div className="flex flex-col">
                  <div className="flex space-x-2 items-center">
                    <p className="font-sans text-[14px] font-[400] leading-[20.48px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                      Lock ID
                    </p>                    
                  </div>
                  <div className="flex space-x-1 items-center">
                    <p className="font-sans text-[15px] font-[400] leading-[20.48px] text-[#21252D] mr-2 dark:text-white">
                      10982
                    </p>
                    <FontAwesomeIcon icon={faCircle} className="text-[#2D54D2] text-[6px]"/>
                    <p className="font-sans text-[13px] font-[400] leading-[20.48px] text-[#FF7D82]">
                      Active
                    </p>
                  </div>
                </div>
              </div> 
              <div className="flex space-x-5 mt-3">
                <div className="flex flex-col items-start">
                  <div className="flex space-x-2 items-center justify-end pb-3">
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#FF4465]">
                    Current Position
                    </p>
                    <FontAwesomeIcon icon={faSort} className="text-[#FF4465] text-[8px]"/>
                  </div>  
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] dark:text-white">
                    3878 HACHI
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30">
                    0.00% - 0.00%
                  </p>
                </div> 
                <div className="flex flex-col items-start">
                  <div className="flex space-x-2 items-center justify-end pb-3">
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#FF4465]">
                    Voting Power
                    </p>
                    <FontAwesomeIcon icon={faSort} className="text-[#FF4465] text-[8px]"/>
                  </div>  
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D]dark:text-white">
                    3878 HACHI
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30">
                    0.00% - 0.00%
                  </p>
                </div>  
                <div className="flex flex-col items-start">
                  <div className="flex space-x-2 items-center justify-end pb-3">
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#FF4465]">
                    Lock Expires
                    </p>
                    <FontAwesomeIcon icon={faSort} className="text-[#FF4465] text-[8px]"/>
                  </div>  
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] dark:text-white">
                  27/06/2025
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30">
                  27 Days, 6 Months, 2 Years
                  </p>
                </div>  
                <div className="flex flex-col items-start">
                  <div className="flex space-x-2 items-center justify-end pb-3">
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#FF4465]">
                    Rewards
                    </p>
                    <FontAwesomeIcon icon={faSort} className="text-[#FF4465] text-[8px]"/>
                  </div>  
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] dark:text-white">
                  $389.83
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30">
                  Not Claimed Rewards
                  </p>
                </div>                
              </div>
            </div>
            <div className="flex flex-col rounded-lg  border-t-2 border-white custom-border border-white p-8 w-full space-y-5 bg-gradient-to-b from-custom-white-20 to-custom-white-0">
              <p className="font-sans text-[22px] font-[700] leading-[24.06px] text-[#21252D] -ml-2 dark:text-white">
                How it works
              </p>
              <div className="relative">
                <div className="border-l-2 border-white">
                  <div className="mb-12 ml-4 flex items-center">
                    <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">1</div>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                      Start by selecting the First Pool Token and the amount you want to deposit.
                    </p>
                  </div>
                  <div className="mb-12 ml-4 flex items-center ">
                  <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">2</div>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                      Next select the Second Pool Token. If the liquidity pool exists, you will see the estimated amount required to match the conversion rate for the liquidity pool.
                    </p>
                  </div>
                  <div className="mb-12 ml-4 flex items-center">
                  <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">3</div>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                      If the liquidity pool needs to be created, you can choose the initial pool amount for each of the tokens. You will have to create the pool first before completing the deposit.
                    </p>
                  </div> 
                  <div className="ml-4 flex items-center">
                  <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">4</div>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                      Confirm and stake the deposited liquidity!
                    </p>
                  </div>                 
                </div>
              </div>            
            </div>
          </div>
          <div className="flex w-5/12 rounded-lg flex-col items-center justify-center">            
            <div className="flex flex-col rounded-t-lg border border-white border-2 p-7 py-10 w-full dark:bg-[#5D2B32]">
              <div className='flex items-center justify-between'>
                <div className="flex w-full items-center pb-5">
                  <FontAwesomeIcon icon={faArrowLeft} className="text-[#FF7D82] text-[16px]"/>
                  <p className="font-sans text-[25px] font-[400] leading-[34.06px] text-[#21252D] ml-2  dark:text-white">
                    Manage Lock
                  </p>        
                </div>
                <Image 
                    src="/assets/icon/reset.png" 
                    alt="Logo Icon" 
                    width={26} // Set the desired width
                    height={26} // Set the desired height
                  />
              </div>
              <div className="flex w-full pb-5 space-x-2">
                  <button className={`rounded-xl px-5 w-full text-[14px] font-normal font-sans bg-white dark:bg-[#4A1F27] py-1 text-[#684222] dark:text-white text-opacity-50 dark:text-opacity-50 ${manageState === 0 ? 'liquidity_manage_active' : ''}`} onClick={() => handleManageState(0)}>Deposit</button>
                  <button className={`rounded-xl px-5 w-full text-[14px] font-normal font-sans bg-white dark:bg-[#4A1F27] py-1 text-[#684222] dark:text-white text-opacity-50 dark:text-opacity-50 ${manageState === 1 ? 'liquidity_manage_active' : ''}`} onClick={() => handleManageState(1)}>Withdraw</button>
                  <button className={`rounded-xl px-5 w-full text-[14px] font-normal font-sans bg-white dark:bg-[#4A1F27] py-1 text-[#684222] dark:text-white text-opacity-50 dark:text-opacity-50 ${manageState === 2 ? 'liquidity_manage_active' : ''}`} onClick={() => handleManageState(2)}>Stake</button>
                  <button className={`rounded-xl px-5 w-full text-[14px] font-normal font-sans bg-white dark:bg-[#4A1F27] py-1 text-[#684222] dark:text-white text-opacity-50 dark:text-opacity-50 ${manageState === 3 ? 'liquidity_manage_active' : ''}`} onClick={() => handleManageState(3)}>Unstake</button>
              </div>
              {manageState === 0 ? <Position /> : manageState === 1 ? <Merge  seletToken={selectToken}/> :  manageState === 2 ? <Split />: <Transfer />}
            </div>
            <div className="flex flex-col rounded-b-lg border-b-2 border-r-2 border-l-2 border-white p-7 w-full space-y-5 dark:bg-[#5D2B32]">
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
                  <div className='flex rounded-full bg-white p-2 items-center justify-center'>
                    <FontAwesomeIcon icon={faCalendarDay} className="text-[#FF7D82] text-[18px]"/>
                  </div>
                  <div className="flex flex-col">     
                    <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50text-opacity-50 dark:text-white dark:text-opacity-50">
                      Unlocks in
                    </p>                
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] text-opacity-50 dark:text-white">
                      0 Years, 0 Months, 0 Days, 0 Hours
                    </p>                                           
                  </div>
                </div> 
              </div>                        
            </div>
            <div className='flex space-x-2 w-full pt-5'>
              <button className="rounded-lg px-5 py-2 text-[16px] font-[700] font-sans  bg-[#684222] w-full dark:bg-[#C37623] dark:border border-white">
                Increment Position
                <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff', fontSize: '16px', marginLeft:"10px"}}/>
              </button>                
            </div>                        
          </div>
        </div>  
      </div>
      <Lock isOpen={isSelectToken} onClose={closeToken} />
    </DefaultLayout>
  );
}
