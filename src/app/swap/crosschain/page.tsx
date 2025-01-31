"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Network from "@/components/swap/crosschain/network";
// import Token from "@/components/swap/crosschain/token";
import Setting from "@/components/swap/crosschain/setting";
import Modal from "@/components/common/modal";
import DefaultLayout from "@/components/layout/DefaultLayout";


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
  const [isLoading, setIsLoading] = useState(false);
  const [isSwap, setIsSwap] = useState(false);
  useEffect(() => {
    if (isLoading === true) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsSwap(true);
        console.log()
      }, 2000); // Change after 5 seconds  
      return () => clearTimeout(timer); // Cleanup on unmount
    }

  }, [isLoading]);
  const handleSwap = () => {
    setIsLoading(true);
  };
  const closeSwap = () => setIsSwap(false);

  const [isSelectNetwork, setIsSelectNetwork] = useState(false);
  const selectNetwork = () => setIsSelectNetwork(true);
  const closeNetwork = () => {
    setIsSelectNetwork(false);
  }
  const [isSetting, setIsSetting] = useState(false);
  const handleSetting = () => setIsSetting(true);
  const closeSetting = () => setIsSetting(false);

  const [, setIsSelectToken] = useState(false)
  const selectToken = () => setIsSelectToken(true);
  // const closeToken = () => setIsSelectToken(false);

  return (
    <DefaultLayout>
      <div className="container mx-auto flex justify-center items-center p-[20px] xl:p-[70px]">
        <div className="flex justify-center items-start space-x-10 w-full xl:w-[90%]">
          <div className="flex w-7/12 flex-col items-center justify-center space-y-10">
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
            {
              isDarkMode ?
                <Image
                  src="/assets/icon/order_intro_dark.png"
                  alt="Logo Icon"
                  width={740}
                  height={136}
                  priority // Optional: to load the image sooner
                />
                :
                <Image
                  src="/assets/icon/order_intro.png"
                  alt="Logo Icon"
                  width={740}
                  height={136}
                  priority // Optional: to load the image sooner
                />
            }
          </div>
          <div className="flex w-5/12 rounded-lg flex-col items-center justify-center space-y-5 ">
            <div className="flex flex-col rounded-lg border-white border-2 p-7 w-full space-y-5 dark:bg-[#F9838F33]">
              <div className="flex justify-between w-full">
                <p className="font-sans text-[25px] font-normal leading-[34.06px] text-[#21252D] dark:text-white">
                  Trade
                </p>
                <div className="bg-white rounded-lg flex items-center p-3 px-5">
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
                  <div className="flex space-x-1">
                    <button className="rounded-xl px-5 py-2 text-[14px] font-normal font-sans bg-white dark:bg-[#FF8693] text-[#21252D] text-opacity-50" onClick={() => router.push("/swap")}>Swap</button>
                    <button className="rounded-xl px-5 py-2 text-[14px] font-normal font-sans bg-white dark:bg-[#FF8693] text-[#21252D] text-opacity-50" onClick={() => router.push("/swap/limit")}>Limit</button>
                    <button className="rounded-xl px-5 py-2 text-[14px] font-normal font-sans bg-[#684222] dark:bg-[#C37623]" onClick={() => router.push("/swap/crosschain")}>CrossChain</button>
                  </div>
                </div>
                <div className="flex space-x-3 items-center justify-center">
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
              <div className="flex flex-col w-full space-y-2 relative">
                <button className="flex bg-white rounded-md p-3 px-5 bg-opacity-70 items-center justify-between space-x-3  dark:bg-[#2F0607] dark:text-white dark:bg-opacity-50" onClick={selectNetwork} >
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                    From
                  </p>
                  <div className="flex space-x-2 items-center">
                    <Image
                      src="/assets/icon/from-search.png"
                      alt="Logo Icon"
                      width={25} // Set the desired width
                      height={25} // Set the desired height
                    />
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D]  dark:text-white">
                      Base Network
                    </p>
                    <div className="flex items-center justify-center p-1 bg-[#FF91A4] rounded-full">
                      <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff', fontSize: '12px' }} />
                    </div>
                  </div>
                </button>
                <button className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#2F0607] dark:text-white dark:bg-opacity-50" onClick={selectToken}>
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
                </button>
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-5  ">
                  <Image
                    src="/assets/icon/swap.png"
                    alt="Logo Icon"
                    width={45} // Set the desired width
                    height={45} // Set the desired height
                  />
                </button>
                <button className="flex bg-white rounded-md p-3 px-5 bg-opacity-70 items-center justify-between space-x-3 dark:bg-[#2F0607] dark:text-white dark:bg-opacity-50" onClick={selectNetwork}>
                  <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                    To
                  </p>
                  <div className="flex space-x-2 items-center">
                    <Image
                      src="/assets/icon/to_perlin.png"
                      alt="Logo Icon"
                      width={25} // Set the desired width
                      height={25} // Set the desired height
                    />
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                      Polygon Network
                    </p>
                    <div className="flex items-center justify-center p-1 bg-[#FF91A4] rounded-full">
                      <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff', fontSize: '12px' }} />
                    </div>
                  </div>
                </button>
                <button className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#2F0607] dark:text-white dark:bg-opacity-50" onClick={selectToken}>
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
                </button>
              </div>
              <div className="flex  w-full items-center justify-center">
                <p className="font-sans text-[14px] font-normal leading-[18.06px] text-[#21252D] dark:text-white">
                  Transaction Details
                </p>
                <FontAwesomeIcon icon={faChevronDown} className="text-black dark:text-white text-[12px]" />
              </div>
            </div>
            <div className="flex flex-col rounded-lg border-white border-2 p-8 w-full space-y-5 dark:bg-[#F9838F33]">
              <p className="font-sans text-[25px] font-normal leading-[24.06px] text-[#21252D] -ml-2 dark:text-white">
                About
              </p>
              <div className="relative">
                <div className="border-l-2 border-white">
                  <div className="mb-12 ml-4">
                    <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full"><FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff', fontSize: '12px' }} /></div>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                      Getting the perfect exchange rate for you...
                    </p>
                  </div>
                  <div className="mb-12 ml-4">
                    <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full"><FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff', fontSize: '12px' }} /></div>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                      Connecting your wallet...
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full"><FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff', fontSize: '12px' }} /></div>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-white">
                      Getting things done!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="rounded-lg px-5 py-2 text-[16px] font-[700] font-sans  bg-[#684222] w-full  dark:bg-[#C37623] dark:border border-white" onClick={() => handleSwap()}>
              {isLoading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin style={{ color: '#ffffff', fontSize: '16px' }} />
                </>
              ) : (
                <>
                  Swap Now <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff', fontSize: '16px', marginLeft: "10px" }} />
                </>
              )}
            </button>
          </div>
        </div>
        <Network isOpen={isSelectNetwork} onClose={closeNetwork} />
        {/* <Token isOpen={isSelectToken} onClose={closeToken} /> */}
        <Setting isOpen={isSetting} onClose={closeSetting} />
        <Modal isOpen={isSwap} onClose={closeSwap} title="Approve Tokens" message="Blockchain is thinking..." success="Trade Successful" success_body="Your Crosschain trade has been made successfully" />
      </div>
    </DefaultLayout>
  );
}
