"use client";

import React, { useState }  from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAward, faCircle, faSort, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from "@/components/layout/DefaultLayout";
import Link from "next/link";
import Selection from "@/components/rewards/selection";

export default function Home() {
  const [isSelectToken, setIsSelectToken] = useState(false)
  const selectToken = () => setIsSelectToken(true);
  const closeToken = () => setIsSelectToken(false);
  return (
    <DefaultLayout>
    <div className="container mx-auto flex justify-center items-center p-[20px]">
      <div className="flex w-full justify-center items-start w-full flex-col ">         
        <div className="flex border border-2 border-white rounded-xl w-full items-start py-20 bg-white bg-opacity-30 items-center dark:bg-[#5D2B32]">
          <div className="flex flex-col space-y-5 w-7/12 justify-start  px-10">
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faTrophy} className="text-[#FF7D82] text-[40px]"/>            
              <p className="font-sans text-[35px] font-[700] leading-[47.66px] text-[#21252D] dark:text-white">
                Rewards
              </p>
            </div>
            <p className="font-sans text-[15px] font-normal leading-[27.66px] text-[#21252D] text-opacity-50 text-left max-w-[500px] dark:text-[#FEE8E9] dark:text-opacity-50">
            Select your veHACHI and use 100% of your votes for one
            or more pools to earn bribes and trading fees.
            </p>
            <div className="felx space-x-2">
              <button className="text-white bg-[#543009] p-3 px-8 rounded-lg text-[14px] w-fit font-bold dark:bg-[#C37623] dark:border border-white">
              Claimable Rewards           
              </button>  
              <button className="text-[#FF7D82] bg-white p-3 px-8 rounded-lg text-[14px] w-fit dark:bg-[#FF7D82] dark:text-white">
              Next Epoch Rewards             
              </button>         
            </div>
            
            <p className="font-sans text-[14px] font-[600] leading-[19.06px] text-[#684222] dark:text-white">
              Need some help? <Link href="www.discord.com" className="dark:text-[#FF7D82]"> Join our discord </Link>
            </p>
          </div>
          <div className="flex flex-col space-y-5 w-5/12 items-start px-10 border-l-4 border-white">
            <button className="flex flex-col rounded-lg bg-white p-5 w-full bg-opacity-50 space-y-2 dark:bg-[#4A1F27] dark:bg-opacity-50" onClick={selectToken}>
              <div className="flex w-full justify-between">
                <div className="flex items-center space-x-2">
                  <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={52} // Set the desired width
                    height={52} // Set the desired height
                  />
                  <div className="flex flex-col">
                    <p className="font-sans text-[16px] font-normal leading-[19.06px] text-[#21252D] dark:text-[#FEE8E9] dark:text-opacity-50">
                    Selected Position
                    </p>
                    <div className="flex items-center space-x-1">
                      <p className="font-sans text-[15px] font-normal leading-[27.06px] text-black text-opacity-50 dark:text-[#FEE8E9]">
                        10982                 
                      </p>  
                      <FontAwesomeIcon icon={faCircle} className="text-[#FF7D82] text-[6px] pl-1"/>
                      <p className="font-sans text-[13px] font-normal leading-[27.06px] text-black text-opacity-50 dark:text-[#FF7D82]">
                        Active                  
                      </p> 
                    </div>                     
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col  space-y-1 border-r border-r-2 border-[#19376D] border-opacity-25 px-2 items-end">
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#FF7D82]">
                    Position
                    </p>
                    <p className="font-sans text-[14px] font-[300] leading-[27.06px] text-black dark:text-white">
                    3878 HACHI             
                    </p> 
                  </div>
                  <div className="flex flex-col space-y-1  px-2  items-end">
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#FF7D82]">
                    Voting Power
                    </p>
                    <p className="font-sans text-[14px] font-[300] leading-[27.06px] text-black dark:text-white ">
                      33878 veHACHI          
                    </p> 
                  </div>
                </div>
              </div>
              
              <div className="flex bg-white w-full p-2 px-5 space-x-2 items-center rounded-lg dark:bg-[#4A1F27] dark:bg-opacity-75">
                <FontAwesomeIcon icon={faAward} className="text-[#FF7D82] text-[20px]"/>
                <p className="font-sans text-[14px] font-normal leading-[27.06px] text-[#FF7D82]">
                Rewards         
                </p>
                <p className="font-sans text-[14px] font-normal leading-[27.06px] text-[#21252D] dark:text-white">
                $132.32    
                </p>
              </div>
              
            </button>
            <div className="flex space-x-3  rounded-lg bg-white p-5 py-4 w-full items-center dark:bg-[#4A1F27]">
              <div className="flex flex-col  space-y-1 border-r border-r-4 border-[#FF7D82] p-2 w-[30%]">
                <p className="font-sans text-[16px] font-normal leading-[19.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                veHACHI Balance
                </p>
                <p className="font-sans text-[20px] font-[300] leading-[27.06px] text-black text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50">
                3878             
                </p> 
              </div>
              <div className="flex flex-col space-y-1  border-r border-r-4 border-[#FF7D82] p-2 w-[30%]">
                <p className="font-sans text-[16px] font-normal leading-[19.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                Rewards
                </p>
                <p className="font-sans text-[20px] font-[300] leading-[27.06px] text-black text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50">
                $132.32       
                </p> 
              </div>
              <div className="flex items-start  space-y-1  w-[40%] p-2 justify-center ">
                <button className="text-white bg-[#543009] p-3 rounded-lg text-[16px] w-fit font-bold dark:bg-[#C37623]">
                  Claim Rewards  
                </button> 
              </div>
            </div>     
          </div>
        </div>
        <div className="flex border border-2 border-white rounded-xl w-full mt-3 p-5 px-10 flex-col bg-white bg-opacity-30 dark:bg-[#5D2B32]">
          <div className="flex justify-between">
            <p className="font-sans text-[32px] font-[700] leading-[43.58px] text-[#21252D] dark:text-white">
              Your Rewards
            </p>
            <div className="flex">
              <div className="flex justify-flex rounded-lg bg-white p-1 px-5 items-center dark:bg-[#4A1F27]">
                <p className="font-sans text-[14px] font-normal leading-[18.08px] text-[#21252D] mr-10 dark:text-white dark:text-opacity-50">
                  Select Rewards Filters
                </p>
                <FontAwesomeIcon icon={faAngleDown} className="text-[#FF7D82] text-[12px]"/>
              </div>
              <div className="flex justify-flex rounded-lg bg-white p-1 px-5 items-center ml-2 dark:bg-[#4A1F27]">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#FF7D82] text-[15px] mr-2"/>
                <p className="font-sans text-[14px] font-normal leading-[18.08px] text-[#21252D] mr-14 dark:text-white dark:text-opacity-50">
                  Search by  name, symbol..
                </p>                  
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between mt-10  px-3">
              <div className="flex w-4/6 justify-start">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-[#FEE8E9]">
                Gauge
                </p>
              </div>
              <div className="flex space-x-1 items-center justify-center w-1/6">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-[#FEE8E9]">
                Rewards
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[8px] dark:text-[#FEE8E9]"/>
              </div>             
              <div className="flex space-x-1 items-center justify-center w-1/12">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-[#FEE8E9]">
                Actions
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[8px] dark:text-[#FEE8E9]"/>
              </div> 
                              
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
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
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                      HACHI / ETH
                    </p>
                    <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                  </div>
                  <div className="flex space-x-1">
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-center w-1/6">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                $123.32
                </p>                                    
              </div>  
              <div className="flex flex-col items-center w-1/12">
                <div className="flex items-center justify-center rounded-lg p-3 py-2 text-[#05050580] bg-custom-gradient text-[12px] font-[600] text-opacity-50 dark:text-white">Claim Rewards</div>
              </div>                                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
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
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                      HACHI / ETH
                    </p>
                    <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                  </div>
                  <div className="flex space-x-1">
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-center w-1/6">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                $123.32
                </p>                                    
              </div>  
              <div className="flex flex-col items-center w-1/12">
                <div className="flex items-center justify-center rounded-lg p-3 py-2 text-[#05050580] bg-custom-gradient text-[12px] font-[600] text-opacity-50 dark:text-white">Claim Rewards</div>
              </div>                                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
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
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                      HACHI / ETH
                    </p>
                    <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                  </div>
                  <div className="flex space-x-1">
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-center w-1/6">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                $123.32
                </p>                                    
              </div>  
              <div className="flex flex-col items-center w-1/12">
                <div className="flex items-center justify-center rounded-lg p-3 py-2 text-[#05050580] bg-custom-gradient text-[12px] font-[600] text-opacity-50 dark:text-white">Claim Rewards</div>
              </div>                                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
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
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                      HACHI / ETH
                    </p>
                    <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                  </div>
                  <div className="flex space-x-1">
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-center w-1/6">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                $123.32
                </p>                                    
              </div>  
              <div className="flex flex-col items-center w-1/12">
                <div className="flex items-center justify-center rounded-lg p-3 py-2 text-[#05050580] bg-custom-gradient text-[12px] font-[600] text-opacity-50 dark:text-white">Claim Rewards</div>
              </div>                                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
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
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                      HACHI / ETH
                    </p>
                    <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                  </div>
                  <div className="flex space-x-1">
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-center w-1/6">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                $123.32
                </p>                                    
              </div>  
              <div className="flex flex-col items-center w-1/12">
                <div className="flex items-center justify-center rounded-lg p-3 py-2 text-[#05050580] bg-custom-gradient text-[12px] font-[600] text-opacity-50 dark:text-white">Claim Rewards</div>
              </div>                                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
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
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                      HACHI / ETH
                    </p>
                    <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                  </div>
                  <div className="flex space-x-1">
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-center w-1/6">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                $123.32
                </p>                                    
              </div>  
              <div className="flex flex-col items-center w-1/12">
                <div className="flex items-center justify-center rounded-lg p-3 py-2 text-[#05050580] bg-custom-gradient text-[12px] font-[600] text-opacity-50 dark:text-white">Claim Rewards</div>
              </div>                                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 items-center dark:bg-[#4A1F27] dark:border border-[#ECECEC80]">
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
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                      HACHI / ETH
                    </p>
                    <FontAwesomeIcon icon={faFire} className="text-[#E97102] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px]"/>
                    <FontAwesomeIcon icon={faFire} className="text-[#2D54D2] text-[12px]"/>
                  </div>
                  <div className="flex space-x-1">
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#684222]">Volatile</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-center w-1/6">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                $123.32
                </p>                                    
              </div>  
              <div className="flex flex-col items-center w-1/12">
                <div className="flex items-center justify-center rounded-lg p-3 py-2 text-[#05050580] bg-custom-gradient text-[12px] font-[600] text-opacity-50 dark:text-white">Claim Rewards</div>
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
