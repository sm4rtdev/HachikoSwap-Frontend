"use client";

import Image from "next/image";
import React, { useState, useEffect }  from "react";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDollar, faRightLeft, faSpinner  } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from "@/components/layout/DefaultLayout";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import Pair from "@/components/swap/limit/pair";
import Setting from "@/components/swap/limit/setting";
import Confirm from "@/components/swap/limit/confirm";
import Modal from "@/components/common/modal";

export default function Home() {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  
    useEffect(() => {
      const updateTheme = () => {
        const darkModeActive = document.documentElement.classList.contains('dark');
        setIsDarkMode(darkModeActive);
      };
  
      // Initial theme check
      updateTheme();
  
      // Listen for changes to the classList
      const observer = new MutationObserver(updateTheme);
      observer.observe(document.documentElement, { attributes: true });
  
      return () => {
        observer.disconnect(); // Cleanup observer on unmount
      };
    }, []);
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const handleToggle = () => {
      setIsChecked(!isChecked);
  };

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if(isLoading === true)
    {
      const timer = setTimeout(() => {
          setIsLoading(false);
          setIsConfirm(true);
      }, 2000); // Change after 5 seconds  
      return () => clearTimeout(timer); // Cleanup on unmount
    }
      
  }, [isLoading]);
  const confirmTrade = () => {
    setIsLoading(true);
  };
  const closeConfirm = () => {
    setIsConfirm(false);
    handleTrade();
  }


  const [isSetting, setIsSetting] = useState(false);
  const handleSetting = () => setIsSetting(true);
  const closeSetting = () => setIsSetting(false);
  
  const [isSelectPair, setIsSelectPair] = useState(false)
  const selectPair = () => setIsSelectPair(true);
  const closePair = () => setIsSelectPair(false);

  const [isTrade, setIsTrade] = useState(false);
  const closeTrade = () => setIsTrade(false);
  const handleTrade = () => {        
      setIsTrade(true);
  }

  return (
    <DefaultLayout>
    <div className="container mx-auto flex justify-center items-center p-[20px] xl:p-[70px]">
      <div className="flex w-full justify-center items-start space-x-10 w-full xl:w-[90%]">
        <div className="flex w-7/12 flex-col items-center justify-center space-y-6">
          {
            isDarkMode ?
            <Image 
              src="/assets/icon/chart-dark.png" 
              alt="Logo Icon" 
              width={816} 
              height={594} 
              priority // Optional: to load the image sooner
            />
            :
            <Image 
              src="/assets/icon/signal_chart.png" 
              alt="Logo Icon" 
              width={816} 
              height={594} 
              priority // Optional: to load the image sooner
            />
          }
          <div className="flex rounded-lg border border-white border-2  w-full justify-between items-center p-3 py-5 pr-8 space-x-2 relative dark:bg-[#F9838F33]">
            <Image 
              src="/assets/icon/chart_search.png" 
              alt="Logo Icon" 
              width={34} // Set the desired width
              height={34} // Set the desired height
            />
            <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
              Please note even though the current market price shown on the chart matches your limit price, there’s a possibility that your limit order will not get filled instantly.
            </p>
            <div className="rounded-lg bg-white py-2 w-[200px] flex items-center justify-center dark:bg-[#4F1D21]">
              <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#FF4465] dark:text-[#FF4465]">
                Learn More
              </p>
            </div>
            <button className="rounded-full bg-white p-1 flex items-center justify-center absolute right-1 top-1">
              <FontAwesomeIcon icon={faXmark} style={{ color: '#FF4465', fontSize: '12px'}}/>
            </button>              
          </div>
          <div className="flex justify-between w-full">
            <div className="flex space-x-2">
              <div className="flex border-b border-[#FF7D82] items-end">
                <p className="text-[18px] font-[600] leading-[20.5px] text-[#FF7D82]">
                  Active
                </p>
              </div>
              <div className="flex  items-end">
                <p className="text-[18px] font-[600] leading-[24.5px] text-[#21252D] dark:text-white">
                  History
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-white p-2 w-[45%] flex items-center justify-start space-x-2 dark:bg-[#45171B] dark:border border-white border-opacity-50">
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#FF4465', fontSize: '15px'}}/>
              <p className="font-sans text-[14px] font-normal leading-[16.36px] text-[#21252D] dark:text-white dark:text-opacity-50">
                Search tokens
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg w-full h-[500px] border-t-2 border-white custom-border relative p-5 bg-gradient-to-b from-custom-white-20 to-custom-white-0">
            <div className="flex rounded-lg bg-white w-full items-center p-3 justify-between  dark:bg-[#4A1F27]">
              <div className="flex">
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
                  className="-ml-4 -mt-1"               
                /> 
              </div>
              <div className="flex flex-col justify-start pl-2">
                <div className="flex py-1 space-x-2 items-center">
                  <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#19376D] text-opacity-50 dark:text-white dark:text-opacity-50">
                    Limit Trade
                  </p>                   
                </div>                    
                <div className="flex py-1 space-x-2 items-center">
                  <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#000000] dark:text-white dark:text-opacity-75">
                    234.34 CORAL 
                  </p>
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} className="text-[#2D54D2] text-[10px] dark:text-white"/>
                  <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#000000] dark:text-white dark:text-opacity-75">
                    0.18967 ETH
                  </p>
                </div>                  
              </div>
              <div className="flex flex-col items-end">
                <div className="flex py-1 space-x-2 items-center">
                  <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#19376D] text-opacity-50 dark:text-white dark:text-opacity-50">
                    Est. Execution Price
                  </p>
                  <FontAwesomeIcon icon={faLightbulb} className="text-[#2D54D2] text-[10px] dark:text-white dark:text-opacity-50"/>                    
                </div>         
                <div className="flex py-1 space-x-2 items-center">
                  <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#000000] dark:text-white dark:text-opacity-50">
                    ~ 1CORA = 0.005689 ETH
                  </p>                    
                </div>                  
              </div>
              <div className="flex flex-col items-end">
                <div className="flex py-1 space-x-2 items-center">
                  <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#19376D] text-opacity-50 dark:text-white dark:text-opacity-50">
                    Status
                  </p>                                  
                </div>         
                <div className="flex py-1 px-3 space-x-2 items-center bg-[#FF7D82]">
                  <p className="font-sans text-[12px] font-normal leading-[16.36px] text-white dark:text-black">
                    Pending
                  </p>                    
                </div>                  
              </div>
              <div className="flex flex-col items-end right-0">
                <div className="flex py-1 space-x-2 items-center">
                  <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#19376D] text-opacity-50 dark:text-white dark:text-opacity-50">
                    Action
                  </p>                                  
                </div>         
                <div className="flex py-1 px-3 space-x-2 items-center bg-[#FF010C]">
                  <p className="font-sans text-[12px] font-normal leading-[16.36px] text-white dark:text-black">
                    Cancel
                  </p>                    
                </div>                  
              </div>
              
            </div>
            <Image 
              src="/assets/icon/deploying.png" 
              alt="Logo Icon" 
              width={75} 
              height={75} 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />                            
          </div>
        </div>
        <div className="flex w-5/12 rounded-lg flex-col items-center justify-center space-y-5">             
          <div className="flex flex-col rounded-lg border border-white border-2 p-7 w-full space-y-5 dark:bg-[#F9838F33]">
            <div className="flex justify-between w-full">
              <p className="font-sans text-[25px] font-normal leading-[34.06px] text-[#21252D] dark:text-white">
                Trade
              </p>
              <div className="bg-white rounded-lg flex items-center p-3 px-5 dark:bg-[#FF8693]">
                <Image 
                  src="/assets/icon/grafico.png" 
                  alt="Logo Icon" 
                  width={20} // Set the desired width
                  height={20} // Set the desired height
                />
                <p className="font-sans text-[12px] font-normal leading-[16.34px] text-[#21252D80] ml-2">
                  1 HACHI (0.00$) = 0.1 ETH (0.00$)
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full ">
              <div className="flex space-x-1">
                <button className="rounded-xl px-5 py-2 text-[14px] font-normal bg-white dark:bg-[#FF8693] text-[#21252D] text-opacity-50" onClick={() => router.push("/swap")}>Swap</button>
                <button className="rounded-xl px-5 py-2 text-[14px] font-normal font-sans bg-[#684222] dark:bg-[#C37623]" onClick={() => router.push("/swap/limit")}>Limit</button>
                <button className="rounded-xl px-5 py-2 text-[14px] font-normal bg-white dark:bg-[#FF8693] text-[#21252D] text-opacity-50" onClick={() => router.push("/swap/crosschain")}>CrossChain</button>
              </div>
              
              <div className="flex space-x-2 items-center justify-center">
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                      <input
                          type="checkbox"
                          className="sr-only"
                          checked={isChecked}
                          onChange={handleToggle}
                      />
                      <div className="w-7 h-3.5 bg-gray-200 border border-red-500 rounded-full shadow-inner"></div><p className="text-black font-normal text-14 pl-1 leading-[19.07px]">PRO</p>
                      <div
                          className={`absolute w-2.5 h-2.5 rounded-full shadow transform transition-transform duration-300 ease-in-out ${
                              isChecked ? 'translate-x-3.5 bg-red-500' : 'translate-x-1 bg-red-500'
                          }`}
                      ></div>
                  </label>
                </div>
                <button onClick={handleSetting}>
                  <Image 
                    src="/assets/icon/settings.png" 
                    alt="Logo Icon" 
                    width={26} // Set the desired width
                    height={26} // Set the desired height
                  />
                </button>
                
                <Image 
                  src="/assets/icon/reset.png" 
                  alt="Logo Icon" 
                  width={26} // Set the desired width
                  height={26} // Set the desired height
                />                  
              </div>
            </div>
            {!isChecked ?
            <>
              <div className="flex flex-col w-full space-y-2 relative">                
                <div className="flex bg-white rounded-md p-4 w-full dark:bg-[#2F0607] dark:text-white dark:bg-opacity-50">                  
                  <div className="flex flex-col w-full ">
                    <div className="rounded-xl bg-[#FF7D82] p-1 px-3 w-fit">
                      <p className="font-sans text-[12px] font-normal leading-[16.36px] text-white dark:text-black dark:text-opacity-50">
                        Sell
                      </p>
                    </div>
                    <div className="flex bg-opacity-70 items-center justify-start space-x-3 ">
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
                          <div className="rounded-xl bg-white p-1 px-3 dark:bg-[#2F0607]">
                            <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                              <span className="text-[#FF4465]">$ </span> 0.00
                            </p>
                          </div>    
                        </div>
                        <div className="flex flex-col items-end space-y-1">
                          <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                            Balance: 234.34 HACHI
                          </p>
                          <div className="rounded-xl bg-[#684222] p-1 px-3 dark:bg-[#C37623]">
                            <p className="font-sans text-[12px] font-normal leading-[16.36px] text-white dark:text-white">
                              Max
                            </p>
                          </div>   
                          <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] dark:text-white">
                            25% 50% 75%
                          </p>   
                        </div>
                      </div> 
                    </div>
                  </div>                             
                </div>
                <button className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-5">
                  <Image 
                    src="/assets/icon/swap.png" 
                    alt="Logo Icon" 
                    width={45} // Set the desired width
                    height={45} // Set the desired height
                  />
                </button>
                <div className="flex bg-white rounded-md p-4 bg-opacity-70 items-center justify-start space-x-3  w-full dark:bg-[#2F0607] dark:text-white dark:bg-opacity-50">
                    <div className="flex flex-col w-full space-y-3">
                      <div className="flex justify-between w-full">
                        <div className="rounded-xl bg-[#FF7D82] p-1 px-3">
                          <p className="font-sans text-[12px] font-normal leading-[16.36px] text-white dark:text-black dark:text-opacity-50">
                            Limit Price
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <div className="flex items-center justify-center rounded-full bg-white w-6 h-6">
                            <FontAwesomeIcon icon={faDollar} className="text-black text-[16px] dark:text-[#FF4465]"/>
                          </div>
                          <div className="flex items-center justify-center rounded-full bg-white w-6 h-6">
                            <FontAwesomeIcon icon={faRightLeft} className="text-black text-[16px] dark:text-[#FF4465]"/>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between w-full">
                        <div className="flex items-end">
                          <Image 
                            src="/assets/icon/logo.png" 
                            alt="Logo Icon" 
                            width={23} // Set the desired width
                            height={23} // Set the desired height
                          />
                          <p className="font-sans text-[12px] font-normal leading-[16.06px] text-black pl-1 dark:text-white">
                            1 HACHI =
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="font-sans text-[12px] font-normal leading-[16.06px] text-black pr-1 dark:text-white">
                            0.005689 ETH
                          </p>
                          <Image 
                            src="/assets/icon/ethereum_blue.png" 
                            alt="Logo Icon" 
                            width={23} // Set the desired width
                            height={23} // Set the desired height
                          />
                        </div>
                      </div>
                      <div className="flex justify-between w-full">
                          <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#FF4465] dark:text-white dark:text-opacity-50">
                            Est. Execution Price
                          </p>
                          <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#FF4465] dark:text-white dark:text-opacity-50">
                            ~ 1HACHI = 0.005689 ETH
                          </p>
                      </div>
                    </div>                              
                </div>
                <div className="flex bg-white rounded-md p-4 w-full dark:bg-[#2F0607] dark:text-white dark:bg-opacity-50">                  
                  <div className="flex flex-col w-full ">
                    <div className="rounded-xl bg-[#FF7D82] p-1 px-3 w-fit">
                      <p className="font-sans text-[12px] font-normal leading-[16.36px] text-white dark:text-black dark:text-opacity-50">
                        Buy
                      </p>
                    </div>
                    <div className="flex bg-opacity-70 items-center justify-start space-x-3">
                      <Image 
                      src="/assets/icon/ethereum_blue.png" 
                      alt="Logo Icon" 
                      width={53} // Set the desired width
                      height={53} // Set the desired height
                    />
                      <div className="flex w-full justify-between">
                        <div className="flex flex-col">
                          <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                            ETH
                          </p>
                          <p className="font-sans text-[20px] font-normal leading-[27.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                            0.00
                          </p>
                          <div className="rounded-xl bg-white p-1 px-3 dark:bg-[#2F0607]">
                            <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                              <span className="text-[#FF4465]">$ </span> 0.00
                            </p>
                          </div>    
                        </div>
                        <div className="flex flex-col items-end space-y-1">
                          <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                            Balance: 0.1891 ETH
                          </p>
                          <div className="rounded-xl bg-[#684222] p-1 px-3 dark:bg-[#C37623]">
                            <p className="font-sans text-[12px] font-normal leading-[16.36px] text-white dark:text-white">
                              Max
                            </p>
                          </div>   
                          <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] dark:text-white">
                            25% 50% 75%
                          </p>   
                        </div>
                      </div>
                    </div>
                  </div>                             
                </div>
              </div>
              <div className="flex  justify-between w-full items-center justify-center">
                <p className="font-sans text-[14px] font-normal leading-[18.06px] text-[#21252D] dark:text-white">
                  Transaction Details
                </p>
                <FontAwesomeIcon icon={faChevronDown} className="text-black text-[12px] dark:text-white"/>
              </div>
            </> :
            <div className="flex flex-col space-y-2 w-full">
              <div className="flex space-x-2 w-full">
                <button className="w-full rounded-lg text-white bg-[#6CDB73] text-[14px] py-1 dark:text-black">Buy</button>
                <button className="w-full rounded-lg text-black bg-white text-[14px] py-1 dark:bg-[#45171B] dark:text-white">Sell</button>
              </div>
              <div className="flex w-full justify-start px-1 pt-2 ">
                <p className="text-[12px] text-[#21252D] dark:text-white">Pair</p>
              </div>
              <button className="flex items-center justify-between space-x-3 rounded-lg bg-white p-2 dark:bg-[#45171B]" onClick={selectPair}>
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    <Image 
                    src="/assets/icon/logo.png" 
                    alt="Logo Icon" 
                    width={35} // Set the desired width
                    height={35} // Set the desired height
                    />
                    <Image 
                    src="/assets/icon/ethereum_blue.png" 
                    alt="Logo Icon" 
                    width={35} // Set the desired width
                    height={35} // Set the desired height
                    className="-ml-4"
                    />
                  </div>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                    HACHI / USDC
                  </p>
                </div>
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#FF4465] text-[20px] text-gradient-to-b from-custom-purlin-100 to-custom-purlin-0" />  
              </button>
              <div className="flex items-center justify-between px-1  pt-2">
                <p className="text-[12px] text-[#21252D] dark:text-white">Limit Price</p>
                <button className="rounded-lg text-white bg-custom-gradient text-[12px] py-1 px-2 dark:text-black">Market Price</button>
              </div>
              <div className="flex items-center justify-between space-x-3 rounded-lg bg-white p-2 p2-4 dark:bg-[#45171B]">
                <div className="flex items-center">                  
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                  18.9732
                  </p>
                </div>
                <div className="flex items-center border-l-2 border-[#19376D] border-opacity-25 p-2 space-x-1 w-[80px] justify-center"> 
                  <FontAwesomeIcon icon={faDollar} className="text-[#FF4465] text-[15px] dark:text-blue"/>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                    USDC
                  </p>
                </div>                
              </div>
              <div className="flex w-full space-x-2   pt-2">
                <div className="flex flex-col space-y-2 w-full">
                  <p className="text-[12px] text-[#21252D] pl-1 dark:text-white">Amount</p>
                  <div className="flex items-center justify-between space-x-3 rounded-lg bg-white p-2 p2-4 dark:bg-[#45171B]">
                    <div className="flex items-center">                  
                      <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] text-opacity-50  dark:text-white">
                      0.00
                      </p>
                    </div>
                    <div className="flex items-center border-l-2 border-[#19376D] border-opacity-25 p-2 space-x-1 w-[80px] justify-end">      
                      <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D]  dark:text-white">
                        USDC
                      </p>
                    </div>                
                  </div>
                </div>
                <div className="flex flex-col space-y-2 w-full">
                  <p className="text-[12px] text-[#21252D] pl-1 dark:text-white">Value</p>
                  <div className="flex items-center justify-between space-x-3 rounded-lg bg-white p-2 p2-4  dark:bg-[#45171B]">
                    <div className="flex items-center">                  
                      <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] text-opacity-50 dark:text-white">
                      0.00
                      </p>
                    </div>
                    <div className="flex items-center border-l-2 border-[#19376D] border-opacity-25 p-2 space-x-1 w-[80px] justify-center">                                 
                      <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#FF4465', fontSize: '20px'}} />   
                      <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D]  dark:text-white">
                        USDC
                      </p>
                    </div>                
                  </div>
                </div>
              </div>
              <div className="flex  justify-between w-full items-center justify-center">
                <p className="font-sans text-[14px] font-normal leading-[18.06px] text-[#21252D]  dark:text-white">
                  Transaction Details
                </p>
                <FontAwesomeIcon icon={faChevronDown} className="text-black text-[12px]  dark:text-white"/>
              </div>
            </div>
            }
          </div>
          <div className="flex flex-col rounded-lg border border-white border-2 p-8 w-full space-y-5 dark:bg-[#F9838F33]">
            <p className="font-sans text-[25px] font-normal leading-[24.06px] text-[#21252D] -ml-2 dark:text-white">
              About
            </p>
            <div className="relative">
              <div className="border-l-2 border-white">
                <div className="mb-12 ml-4">
                  <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full"><FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff', fontSize: '12px' }}/></div>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                    Getting the perfect exchange rate for you...
                  </p>
                </div>
                <div className="mb-12 ml-4">
                  <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full"><FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff', fontSize: '12px' }}/></div>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                    Connecting your wallet...
                  </p>
                </div>
                <div className="ml-4">
                  <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full"><FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff', fontSize: '12px' }}/></div>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                    Getting things done!
                  </p>
                </div>                 
              </div>
            </div>            
          </div>
          <button className="rounded-lg px-5 py-2 text-[16px] font-[700] font-sans  bg-[#684222] w-full  dark:bg-[#C37623] dark:border border-white" onClick={() => confirmTrade()}>
           {isLoading ? (
                <>
                    <FontAwesomeIcon icon={faSpinner} spin style={{ color: '#ffffff', fontSize: '16px'}} />                   
                </>
            ) : (
                <>
                    Trade Now <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff', fontSize: '16px', marginLeft: "10px" }} />
                </>
            )} 
          </button>              
        </div>
      </div>  
    </div>
    <Pair isOpen={isSelectPair} onClose={closePair} />
    <Setting isOpen={isSetting} onClose={closeSetting} />
    <Confirm isOpen={isConfirm} onClose={closeConfirm} />
    <Modal isOpen={isTrade} title="Waiting for your transaction" message="to be confirmed on the blockchain" success="Swap Successful" success_body="You sold 234.34 HACHI for 0.16470270 ETH succesfully" onClose={closeTrade} />
      
    </DefaultLayout>
  );
}
