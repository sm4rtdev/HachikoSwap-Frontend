"use client";

import React, { useState} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSort } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from "@/components/layout/DefaultLayout";
import Claim from "@/components/liquidity/claim";
import Modal from "@/components/common/modal";

export default function Home() {
  const router = useRouter();

  const [isClaim, setIsClaim] = useState(false);
  const openClaim = () => setIsClaim(true);
  const closeClaim = () => setIsClaim(false);

  const [claimEmission, setClaimEmission] = useState<boolean>(false);
  const [claimFee, setClaimFee] = useState<boolean>(false);
  const handleClaim = (result: string) => {
    if(result === "emission")
    {
      setClaimEmission(true);
    }
    else if(result === "fee")
    {
      setClaimFee(true);
    }
  };
  const closeFee = () => setClaimFee(false);
  const closeEmission = () => setClaimEmission(false);

  return (
    <DefaultLayout>
    <div className="container mx-auto flex justify-center items-center p-[20px]">
      <div className="flex w-full justify-center items-start w-full flex-col">         
        <div className="flex border border-2 border-white rounded-xl w-full items-start p-5 py-20 relative bg-white bg-opacity-30 dark:bg-[#5D2B32]">
          <button className="absolute top-0 right-[100px] bg-white flex p-2 rounded-lg" onClick={openClaim}>
            <Image 
              src="/assets/icon/liquidity.png" 
              alt="Logo Icon" 
              width={25} // Set the desired width
              height={25} // Set the desired height
            />
            <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#000000] ml-2">
              Claim Rewards
            </p>
          </button>
          <div className="flex flex-col space-y-3 w-5/12 border-r-2 border-white px-5">
            <div className="flex ">
              <Image 
                src="/assets/icon/liquidity.png" 
                alt="Logo Icon" 
                width={48} // Set the desired width
                height={48} // Set the desired height
              />
              <p className="font-sans text-[35px] font-[700] leading-[47.66px] text-[#21252D] dark:text-white">
                Liquidity
              </p>
            </div>
            <p className="font-sans text-[30px] font-normal leading-[47.66px] text-[#21252D] text-opacity-50  dark:text-white dark:text-opacity-50">
              a better way to earn rewards
            </p>
            <div className="flex">
              <button className="flex justify-center items-center text-white bg-[#FF7D82] p-2 px-3 rounded-lg" onClick={() => router.push("/liquidity/manage")}>
                Manage Liquidity
                <FontAwesomeIcon icon={faAngleDown} style={{ color: '#ffffff', fontSize: '16px', marginLeft:"10px"}}/>
              </button>
              <button className="flex justify-center items-center text-[#684222] bg-white p-2 px-3 rounded-lg ml-2"  onClick={() => router.push("/liquidity/create")}>
                Create a Pool                  
              </button>
            </div>
            <p className="font-sans text-[14px] font-[600] leading-[19.06px] text-[#684222] dark:text-[#C37623]">
              Need some help? Join our discord
            </p>
          </div>
          <div className="w-1/12"></div>
          <div className="flex flex-col space-y-5 w-6/12 items-start  pr-10">
            <div className="flex ">
              <div className="flex justify-center items-center text-[#684222] bg-white rounded-xl text-[13px] dark:bg-[#4A1F27]">
                <div className="flex justify-center items-center text-white bg-custom-gradient rounded-xl h-full text-[13px] p-2 px-4">
                  <FontAwesomeIcon icon={faLock} style={{ color: '#ffffff', fontSize: '13px', marginRight:"10px"}}/>
                  TVL                 
                </div>
                <div className="flex justify-center items-center text-[#21252D]  h-full text-[13px] p-2 px-4 dark:text-white dark:text-opacity-50">
                  67.66M            
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
                <FontAwesomeIcon icon={faLightbulb} className="text-[#5B8AE4] text-[15px]  text-opacity-50 dark:text-white dark:text-opacity-50"/>
                <p className="font-sans text-[13px] font-[400] leading-[17.06px] text-[#21252D] text-opacity-50 text-justify mt-3 dark:text-white dark:text-opacity-50">
                  Limitless liquidity, state of the art AMM design, and advanced smart-order routing provides the best rates and lowest slippage across all liquidity pairs. Trade with confidence knowing you’re getting the best rate every time.
                </p>
              </div>
            </div>     
          </div>
        </div>
        <div className="flex border border-2 border-white rounded-xl w-full mt-3 p-5 px-10 flex-col bg-white bg-opacity-30 dark:bg-[#5D2B32] pb-16">
          <div className="flex justify-between">
            <p className="font-sans text-[32px] font-[700] leading-[43.58px] text-[#21252D] dark:text-white">
              Pools
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
            <div className="flex justify-between mt-10">
              <div className="flex w-1/6 justify-start px-4">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D]  dark:text-white">
                  Pair
                </p>
              </div>
              <div className="flex space-x-1 items-center justify-end w-1/12">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                  APR
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#E97102] text-[8px] dark:text-white"/>
              </div>             
              <div className="flex space-x-1 items-center justify-end w-1/12">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                  TVL
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#E97102] text-[8px] dark:text-white"/>
              </div> 
              <div className="flex space-x-1 items-center justify-end w-1/12">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                  Volume
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#E97102] text-[8px] dark:text-white"/>
              </div> 
              <div className="flex space-x-1 items-center justify-end w-1/12">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                  Fees
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#E97102] text-[8px] dark:text-white"/>
              </div> 
              <div className="flex space-x-1 items-center justify-end w-[10%]">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                  My Pool Amount
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#E97102] text-[8px] dark:text-white"/>
              </div> 
              <div className="flex space-x-1 items-center justify-end w-[12%]">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                  My Staked Amount
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#E97102] text-[8px] dark:text-white"/>
              </div> 
              <div className="flex space-x-1 items-center justify-end w-1/12 px-4">
                <p className="font-sans text-[15px] font-normal leading-[20.48px] text-[#19376D] dark:text-white">
                  About
                </p>
                <FontAwesomeIcon icon={faSort} className="text-[#E97102] text-[8px] dark:text-white"/>
              </div>                   
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 dark:bg-[#4A1F27] dark:border border-white">
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
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#4A1F27]">Volatile</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#FF7D82] text-[10px] font-normal border border-[#FF7D82] dark:bg-white"><FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px] mr-2"/> CL</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  0.00% - 0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#5B8AE480]  text-opacity-50  dark:text-white dark:text-opacity-30 ">
                  Add incentives
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>   
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[10%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[12%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <div className="flex items-center justify-center rounded-lg p-5 py-1 text-white bg-custom-gradient text-[12px] font-[600]">Manage</div>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 mt-1">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 dark:bg-[#4A1F27] dark:border border-white">
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
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#4A1F27]">Volatile</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#FF7D82] text-[10px] font-normal border border-[#FF7D82] dark:bg-white"><FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px] mr-2"/> CL</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  0.00% - 0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#5B8AE480]  text-opacity-50  dark:text-white dark:text-opacity-30 ">
                  Add incentives
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>   
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[10%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[12%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <div className="flex items-center justify-center rounded-lg p-5 py-1 text-white bg-custom-gradient text-[12px] font-[600]">Manage</div>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 mt-1">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 dark:bg-[#4A1F27] dark:border border-white">
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
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#4A1F27]">Volatile</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#FF7D82] text-[10px] font-normal border border-[#FF7D82] dark:bg-white"><FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px] mr-2"/> CL</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  0.00% - 0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#5B8AE480]  text-opacity-50  dark:text-white dark:text-opacity-30 ">
                  Add incentives
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>   
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[10%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[12%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <div className="flex items-center justify-center rounded-lg p-5 py-1 text-white bg-custom-gradient text-[12px] font-[600]">Manage</div>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 mt-1">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 dark:bg-[#4A1F27] dark:border border-white">
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
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#4A1F27]">Volatile</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#FF7D82] text-[10px] font-normal border border-[#FF7D82] dark:bg-white"><FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px] mr-2"/> CL</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  0.00% - 0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#5B8AE480]  text-opacity-50  dark:text-white dark:text-opacity-30 ">
                  Add incentives
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>   
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[10%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[12%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <div className="flex items-center justify-center rounded-lg p-5 py-1 text-white bg-custom-gradient text-[12px] font-[600]">Manage</div>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 mt-1">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 dark:bg-[#4A1F27] dark:border border-white">
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
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#4A1F27]">Volatile</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#FF7D82] text-[10px] font-normal border border-[#FF7D82] dark:bg-white"><FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px] mr-2"/> CL</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  0.00% - 0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#5B8AE480]  text-opacity-50  dark:text-white dark:text-opacity-30 ">
                  Add incentives
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>   
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[10%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[12%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <div className="flex items-center justify-center rounded-lg p-5 py-1 text-white bg-custom-gradient text-[12px] font-[600]">Manage</div>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 mt-1">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 dark:bg-[#4A1F27] dark:border border-white">
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
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#4A1F27]">Volatile</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#FF7D82] text-[10px] font-normal border border-[#FF7D82] dark:bg-white"><FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px] mr-2"/> CL</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  0.00% - 0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#5B8AE480]  text-opacity-50  dark:text-white dark:text-opacity-30 ">
                  Add incentives
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>   
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[10%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[12%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <div className="flex items-center justify-center rounded-lg p-5 py-1 text-white bg-custom-gradient text-[12px] font-[600]">Manage</div>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 mt-1">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 dark:bg-[#4A1F27] dark:border border-white">
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
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#4A1F27]">Volatile</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#FF7D82] text-[10px] font-normal border border-[#FF7D82] dark:bg-white"><FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px] mr-2"/> CL</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  0.00% - 0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#5B8AE480]  text-opacity-50  dark:text-white dark:text-opacity-30 ">
                  Add incentives
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>   
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[10%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[12%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <div className="flex items-center justify-center rounded-lg p-5 py-1 text-white bg-custom-gradient text-[12px] font-[600]">Manage</div>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 mt-1">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 dark:bg-[#4A1F27] dark:border border-white">
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
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#4A1F27]">Volatile</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#FF7D82] text-[10px] font-normal border border-[#FF7D82] dark:bg-white"><FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px] mr-2"/> CL</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  0.00% - 0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#5B8AE480]  text-opacity-50  dark:text-white dark:text-opacity-30 ">
                  Add incentives
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>   
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[10%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[12%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <div className="flex items-center justify-center rounded-lg p-5 py-1 text-white bg-custom-gradient text-[12px] font-[600]">Manage</div>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 mt-1">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 dark:bg-[#4A1F27] dark:border border-white">
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
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#4A1F27]">Volatile</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#FF7D82] text-[10px] font-normal border border-[#FF7D82] dark:bg-white"><FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px] mr-2"/> CL</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  0.00% - 0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#5B8AE480]  text-opacity-50  dark:text-white dark:text-opacity-30 ">
                  Add incentives
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>   
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[10%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[12%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <div className="flex items-center justify-center rounded-lg p-5 py-1 text-white bg-custom-gradient text-[12px] font-[600]">Manage</div>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 mt-1">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 dark:bg-[#4A1F27] dark:border border-white">
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
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#4A1F27]">Volatile</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#FF7D82] text-[10px] font-normal border border-[#FF7D82] dark:bg-white"><FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px] mr-2"/> CL</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  0.00% - 0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#5B8AE480]  text-opacity-50  dark:text-white dark:text-opacity-30 ">
                  Add incentives
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>   
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[10%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[12%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <div className="flex items-center justify-center rounded-lg p-5 py-1 text-white bg-custom-gradient text-[12px] font-[600]">Manage</div>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 mt-1">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>                  
            </div>
            <div className="flex justify-between bg-white p-3 rounded-lg mt-5 dark:bg-[#4A1F27] dark:border border-white">
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
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#2D54D2] bg-[#E5E5E5] text-[10px] font-normal dark:text-[#4A1F27]">Volatile</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#FF7D82] text-[10px] font-normal border border-[#FF7D82] dark:bg-white"><FontAwesomeIcon icon={faFire} className="text-[#FF0F00] text-[12px] mr-2"/> CL</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                  </div>
                </div>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  0.00% - 0.00%
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#5B8AE480]  text-opacity-50  dark:text-white dark:text-opacity-30 ">
                  Add incentives
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30  dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>   
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[10%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-[12%]">
                <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] p-1 dark:text-white">
                  0.00$
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
              </div>  
              <div className="flex flex-col items-end w-1/12">
                <div className="flex items-center justify-center rounded-lg p-5 py-1 text-white bg-custom-gradient text-[12px] font-[600]">Manage</div>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-30 mt-1">
                  996,00 CORA
                </p>
                <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-30 ">
                  123,00 ETH
                </p>
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
    <Claim isOpen={isClaim} onClose={closeClaim} onClaim={handleClaim} />
    <Modal  isOpen={claimEmission} title="Waiting for your transaction" message="to be confirmed on the blockchain" success="Swap Successful" success_body="You sold 234.34 HACHI for 0.16470270 ETH succesfully" onClose={closeEmission} />
    <Modal  isOpen={claimFee} title="Waiting for your transaction" message="to be confirmed on the blockchain" success="Swap Successful" success_body="You sold 234.34 HACHI for 0.16470270 ETH succesfully" onClose={closeFee} />
    </DefaultLayout>
  );
}
