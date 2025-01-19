"use client";

import React, { useState }  from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClose, faSort } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from "@/components/layout/DefaultLayout";
import Selection from "@/components/vote/selection";

export default function Home() {
    const [isSelectToken, setIsSelectToken] = useState(false)
    const selectToken = () => setIsSelectToken(true);
    const closeToken = () => setIsSelectToken(false);
  
  return (
    <DefaultLayout>
      <div className="container mx-auto flex justify-center items-center p-[20px]">
        <div className="flex w-full justify-center items-start w-full flex-col">         
          <div className="flex border border-2 border-white rounded-xl w-full items-start py-20 bg-white bg-opacity-30 dark:bg-[#71373C]">
            <div className="flex flex-col space-y-3 w-7/12 justify-start  px-10">
              <div className="flex space-x-2">
                <Image 
                  src="/assets/icon/lock.png" 
                  alt="Logo Icon" 
                  width={48} // Set the desired width
                  height={48} // Set the desired height
                />
                <p className="font-sans text-[35px] font-[700] leading-[47.66px] text-[#21252D] dark:text-white">
                  Vote
                </p>
              </div>
              <p className="font-sans text-[15px] font-normal leading-[27.66px] text-[#21252D] text-opacity-50 text-left max-w-[500px] dark:text-[#FEE8E9] dark:text-opacity-50">
                Select your veHACHI and use 100% of your votes for one or 
                more pools to earn bribes and trading fees.
              </p>
              <button className="text-white bg-custom-gradient p-2 px-8 rounded-lg text-[14px] w-fit">
                Learn More                  
              </button>               
              <p className="font-sans text-[14px] font-[600] leading-[19.06px] text-[#684222] dark:text-[#C37623]">
                Need some help? Join our discord
              </p>
            </div>
            <div className="flex flex-col space-y-5 w-5/12 items-start px-10 border-l-4 border-white">
              <div className="flex rounded-lg bg-white p-5 justify-start items-end w-full space-x-4 dark:bg-[#4A1F27] dark:bg-opacity-50">
                <Image 
                  src="/assets/icon/logo.png" 
                  alt="Logo Icon" 
                  width={52} // Set the desired width
                  height={52} // Set the desired height
                />
                  <button className="flex flex-col"  onClick={selectToken}>
                    <p className="font-sans text-[16px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                    Select a veHACHI 
                    </p>
                    <p className="font-sans text-[12px] font-normal leading-[27.06px] text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                    Balance: 34 Positions                    
                    </p>  
                  </button>
              </div>
              <div className="flex space-x-3  rounded-lg bg-white p-5 py-2 w-full items-center dark:bg-[#4A1F27]">
                <div className="flex flex-col  space-y-1 border-r border-r-4 border-[#B7CEE3] dark:border-[#B7CEE3] p-2 w-[35%] h-full">
                  <p className="font-sans text-[16px] font-normal leading-[19.06px] text-[#21252D] text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50">
                  veHACHI Balance
                  </p>
                  <p className="font-sans text-[20px] font-[300] leading-[27.06px] text-black text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50">
                  732,873.21               
                  </p> 
                </div>
                <div className="flex flex-col space-y-1  border-r border-r-4 border-[#B7CEE3] dark:border-[#B7CEE3] p-2  w-[40%] h-full">
                  <p className="font-sans text-[16px] font-normal leading-[19.06px] text-[#21252D] text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50">
                  Emissions / % of Vote
                  </p>
                  <p className="font-sans text-[20px] font-[300] leading-[27.06px] text-black text-opacity-50 dark:text-[#8596B2]">
                  $1,012.23          
                  </p> 
                </div>
                <div className="flex flex-col items-start  space-y-1  w-[25%] p-2  h-full">
                  <p className="font-sans text-[12px] font-normal leading-[19.06px] text-[#21252D] text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50 ">
                  Voting APR
                  </p>
                  <p className="font-sans text-[12px] font-normal leading-[19.06px] text-[#21252D] text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50 ">
                  418%
                  </p>
                  <p className="font-sans text-[12px] font-normal leading-[19.06px] text-[#21252D] text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50 ">
                  Epoch 08
                  </p>
                  <p className="font-sans text-[12px] font-normal leading-[27.06px] text-black text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50">
                  6d 12h 43m              
                  </p> 
                </div>
              </div>     
            </div>
          </div>
          <div className="flex border border-2 border-white rounded-xl w-full mt-3 p-5 px-10 flex-col bg-white bg-opacity-30 dark:bg-[#71373C]">
            <div className="flex justify-between">
              <p className="font-sans text-[32px] font-[700] leading-[43.58px] text-[#21252D] dark:text-white">
                Select Liquidity Pools for Voting
              </p>
              <div className="flex">
                <div className="flex justify-flex rounded-lg bg-white p-1 px-5 items-center dark:bg-[#4A1F27]">
                  <p className="font-sans text-[14px] font-normal leading-[18.08px] text-[#21252D] mr-10 dark:text-white dark:text-opacity-50">
                    Select Lock Filters
                  </p>
                  <FontAwesomeIcon icon={faAngleDown} className="text-[#FF7D82] text-[12px]"/>
                </div>
                <div className="flex justify-flex rounded-lg bg-white p-1 px-5 items-center ml-2 dark:bg-[#4A1F27]">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#FF7D82] text-[15px] mr-2"/>
                  <p className="font-sans text-[14px] font-normal leading-[18.08px] text-[#21252D] mr-14 dark:text-white dark:text-opacity-50">
                    Search by  veHACHI ID..
                  </p>                  
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between mt-10  px-3">
                <div className="flex w-1/6 justify-start">
                  <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                    Assets
                  </p>
                </div>
                <div className="flex space-x-1 items-center justify-end w-1/12">
                  <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white ">
                    APR
                  </p>
                  <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[8px] dark:text-white"/>
                </div>             
                <div className="flex space-x-1 items-center justify-end w-[10%]">
                  <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                    Total Votes
                  </p>
                  <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[8px] dark:text-white"/>
                </div> 
                <div className="flex space-x-1 items-center justify-end w-1/12">
                  <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                    Your Votes
                  </p>
                  <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[8px] dark:text-white"/>
                </div> 
                <div className="flex space-x-1 items-center justify-end w-1/12">
                  <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                    Project Returns
                  </p>
                  <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[8px] dark:text-white"/>
                </div> 
                <div className="flex space-x-1 items-center justify-end w-1/12">
                  <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                    Rewards
                  </p>
                  <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[8px] dark:text-white"/>
                </div> 
                <div className="flex space-x-1 items-center justify-end w-[12%]">
                  <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                    Vote
                  </p>                  
                </div>                                
              </div>
              <div className="flex space-x-5 mt-20 mb-5">
                <div className="flex flex-col space-y-2 bg-white rounded-lg p-3 py-1 relative min-w-[180px] dark:bg-[#4A1F27]">
                  <div className="absolute top-1 right-2">
                    <FontAwesomeIcon icon={faClose} className="text-[#FF7D82] text-[12px]"/>
                  </div>
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
                    <div className="flex space-x-1 items-center">
                      <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal dark:text-[#684222]">+0.38%</div>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 bg-white rounded-lg p-3 py-1 relative min-w-[180px] dark:bg-[#4A1F27]">
                  <div className="absolute top-1 right-2">
                    <FontAwesomeIcon icon={faClose} className="text-[#FF7D82] text-[12px]"/>
                  </div>
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
                    <div className="flex space-x-1 items-center">
                      <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal dark:text-[#684222]">+0.38%</div>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 bg-white rounded-lg p-3 py-1 relative min-w-[180px] dark:bg-[#4A1F27]">
                  <div className="absolute top-1 right-2">
                    <FontAwesomeIcon icon={faClose} className="text-[#FF7D82] text-[12px]"/>
                  </div>
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
                    <div className="flex space-x-1 items-center">
                      <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal dark:text-[#684222]">+0.38%</div>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 bg-white rounded-lg p-3 py-1 relative min-w-[180px] dark:bg-[#4A1F27]">
                  <div className="absolute top-1 right-2">
                    <FontAwesomeIcon icon={faClose} className="text-[#FF7D82] text-[12px]"/>
                  </div>
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
                    <div className="flex space-x-1 items-center">
                      <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal dark:text-[#684222]">+0.38%</div>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 bg-white rounded-lg p-3 py-1 relative min-w-[180px] dark:bg-[#4A1F27]">
                  <div className="absolute top-1 right-2">
                    <FontAwesomeIcon icon={faClose} className="text-[#FF7D82] text-[12px]"/>
                  </div>
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
                    <div className="flex space-x-1 items-center">
                      <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal dark:text-[#684222]">+0.38%</div>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
                <div className="flex space-x-2 w-1/6">
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
                      <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                    </div>
                  </div>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0.00%
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                    0.00% - 0.00%
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[10%]">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white ">
                  201643.23 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>   
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  $123.134
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    $1.78k
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[12%]">
                  <div className="flex flex-col items-center">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={50}
                      className="slider w-full h-1 bg-[#19376D] dark:bg-[#FEE8E9] dark:bg-opacity-25 bg-opacity-25 rounded-lg cursor-pointer" // Customize track color
                      readOnly
                    />                    
                  </div>
                </div>                                
              </div>
              <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
                <div className="flex space-x-2 w-1/6">
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
                      <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                    </div>
                  </div>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0.00%
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                    0.00% - 0.00%
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[10%]">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white ">
                  201643.23 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>   
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  $123.134
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    $1.78k
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[12%]">
                  <div className="flex flex-col items-center">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={50}
                      className="slider w-full h-1 bg-[#19376D] dark:bg-[#FEE8E9] dark:bg-opacity-25 bg-opacity-25 rounded-lg cursor-pointer" // Customize track color
                      readOnly
                    />                    
                  </div>
                </div>                                 
              </div>
              <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
                <div className="flex space-x-2 w-1/6">
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
                      <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                    </div>
                  </div>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0.00%
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                    0.00% - 0.00%
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[10%]">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white ">
                  201643.23 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>   
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  $123.134
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    $1.78k
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[12%]">
                  <div className="flex flex-col items-center">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={50}
                      className="slider w-full h-1 bg-[#19376D] dark:bg-[#FEE8E9] dark:bg-opacity-25 bg-opacity-25 rounded-lg cursor-pointer" // Customize track color
                      readOnly
                    />                    
                  </div>
                </div>                                
              </div>
              <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
                <div className="flex space-x-2 w-1/6">
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
                      <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                    </div>
                  </div>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0.00%
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                    0.00% - 0.00%
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[10%]">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white ">
                  201643.23 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>   
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  $123.134
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    $1.78k
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[12%]">
                  <div className="flex flex-col items-center">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={50}
                      className="slider w-full h-1 bg-[#19376D] dark:bg-[#FEE8E9] dark:bg-opacity-25 bg-opacity-25 rounded-lg cursor-pointer" // Customize track color
                      readOnly
                    />                    
                  </div>
                </div>                                 
              </div><div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
                <div className="flex space-x-2 w-1/6">
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
                      <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                    </div>
                  </div>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0.00%
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                    0.00% - 0.00%
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[10%]">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white ">
                  201643.23 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>   
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  $123.134
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    $1.78k
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[12%]">
                  <div className="flex flex-col items-center">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={50}
                      className="slider w-full h-1 bg-[#19376D] dark:bg-[#FEE8E9] dark:bg-opacity-25 bg-opacity-25 rounded-lg cursor-pointer" // Customize track color
                      readOnly
                    />                    
                  </div>
                </div>                                
              </div>
              <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
                <div className="flex space-x-2 w-1/6">
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
                      <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                    </div>
                  </div>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0.00%
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                    0.00% - 0.00%
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[10%]">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white ">
                  201643.23 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>   
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  $123.134
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    $1.78k
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[12%]">
                  <div className="flex flex-col items-center">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={50}
                      className="slider w-full h-1 bg-[#19376D] dark:bg-[#FEE8E9] dark:bg-opacity-25 bg-opacity-25 rounded-lg cursor-pointer" // Customize track color
                      readOnly
                    />                    
                  </div>
                </div>                                 
              </div><div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
                <div className="flex space-x-2 w-1/6">
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
                      <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                    </div>
                  </div>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0.00%
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                    0.00% - 0.00%
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[10%]">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white ">
                  201643.23 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>   
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  $123.134
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    $1.78k
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[12%]">
                  <div className="flex flex-col items-center">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={50}
                      className="slider w-full h-1 bg-[#19376D] dark:bg-[#FEE8E9] dark:bg-opacity-25 bg-opacity-25 rounded-lg cursor-pointer" // Customize track color
                      readOnly
                    />                    
                  </div>
                </div>                                
              </div>
              <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
                <div className="flex space-x-2 w-1/6">
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
                      <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                    </div>
                  </div>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0.00%
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                    0.00% - 0.00%
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[10%]">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white ">
                  201643.23 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>   
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  $123.134
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    $1.78k
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[12%]">
                  <div className="flex flex-col items-center">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={50}
                      className="slider w-full h-1 bg-[#19376D] dark:bg-[#FEE8E9] dark:bg-opacity-25 bg-opacity-25 rounded-lg cursor-pointer" // Customize track color
                      readOnly
                    />                    
                  </div>
                </div>                                 
              </div><div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
                <div className="flex space-x-2 w-1/6">
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
                      <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                    </div>
                  </div>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0.00%
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                    0.00% - 0.00%
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[10%]">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white ">
                  201643.23 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>   
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  $123.134
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    $1.78k
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[12%]">
                  <div className="flex flex-col items-center">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={50}
                      className="slider w-full h-1 bg-[#19376D] dark:bg-[#FEE8E9] dark:bg-opacity-25 bg-opacity-25 rounded-lg cursor-pointer" // Customize track color
                      readOnly
                    />                    
                  </div>
                </div>                                
              </div>
              <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
                <div className="flex space-x-2 w-1/6">
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
                      <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                        HACHI / ETH
                      </p>
                      <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                      <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>                      
                      <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                    </div>
                  </div>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0.00%
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                    0.00% - 0.00%
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[10%]">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white ">
                  201643.23 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>   
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    0 veCHR
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-25">
                  0.00%
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  $123.134
                  </p>
                </div>  
                <div className="flex flex-col items-end w-1/12">
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                    $1.78k
                  </p>                  
                </div>  
                <div className="flex flex-col items-end w-[12%]">
                  <div className="flex flex-col items-center">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={50}
                      className="slider w-full h-1 bg-[#19376D] dark:bg-[#FEE8E9] dark:bg-opacity-25 bg-opacity-25 rounded-lg cursor-pointer" // Customize track color
                      readOnly
                    />                    
                  </div>
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
      <Selection isOpen={isSelectToken} onClose={closeToken} />
    </DefaultLayout>
  );
}
