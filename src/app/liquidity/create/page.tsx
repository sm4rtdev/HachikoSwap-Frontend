"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSort } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from '@/components/layout/DefaultLayout';
// import Token from '@/components/common/token';

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const [, setIsSelectToken] = useState(false)
  const selectToken = () => setIsSelectToken(true);
  // const closeToken = () => setIsSelectToken(false);

  return (
    <DefaultLayout>
      <div className="container mx-auto flex justify-center items-center p-[20px] xl:px-[100px] py-8">
        <div className="flex justify-center items-start space-x-8 w-full">
          <div className="flex w-7/12 flex-col items-center justify-center space-y-6">
            <div className="flex flex-col rounded-lg border-white border-2 p-10 py-7 w-full dark:bg-[#5D2B32]">
              <div className="flex w-full items-center pb-5">
                <p className="font-sans text-[22px] font-[700] leading-[29.06px] text-[#21252D] dark:text-white">
                  About this Pool
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
                  <Image
                    src="/assets/icon/ethereum_blue.png"
                    alt="Logo Icon"
                    width={35}
                    height={35}
                    className="-ml-3"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex space-x-2 items-center">
                    <p className="font-sans text-[14px] font-[400] leading-[20.48px] text-[#21252D] dark:text-white">
                      vAMM HACHI / ETH
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-[#684222] bg-[#E5E5E5] text-[10px] font-normal">Volatile</div>
                    <div className="flex items-center justify-center rounded-full p-2 py-1 text-white bg-custom-gradient text-[10px] font-normal">+0.38%</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex flex-col items-start">
                  <div className="flex space-x-2 items-center justify-end pb-3">
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                      APR
                    </p>
                    <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[12px] dark:text-white" />
                  </div>
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D]  dark:text-white">
                    0.00%
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-50">
                    0.00% - 0.00%
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#5B8AE480] text-opacity-50 ">
                    Add incentives
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex space-x-2 items-center justify-end pb-3">
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                      TVL
                    </p>
                    <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[12px] dark:text-white" />
                  </div>
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] dark:text-white">
                    0.00$
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-50">
                    996,00 CORA
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-50 ">
                    123,00 ETH
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex space-x-2 items-center justify-end pb-3">
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                      Volume
                    </p>
                    <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[12px] dark:text-white" />
                  </div>
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] dark:text-white dark:text-opacity-50">
                    0.00$
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-50">
                    996,00 CORA
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-50">
                    123,00 ETH
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex space-x-2 items-center justify-end pb-3">
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                      Fees
                    </p>
                    <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[12px] dark:text-white" />
                  </div>
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] dark:text-white">
                    0.00$
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-50">
                    996,00 CORA
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-50">
                    123,00 ETH
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex space-x-2 items-center justify-end pb-3">
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                      Your Pool
                    </p>
                    <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[12px] dark:text-white" />
                  </div>
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] dark:text-white">
                    0.00$
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-50">
                    996,00 CORA
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-50">
                    123,00 ETH
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex space-x-2 items-center justify-end pb-3">
                    <p className="font-sans text-[15px] font-[600] leading-[20.48px] text-[#19376D] dark:text-white">
                      Your Staking
                    </p>
                    <FontAwesomeIcon icon={faSort} className="text-[#19376D] text-[12px] dark:text-white" />
                  </div>
                  <p className="font-sans text-[14px] font-normal leading-[20.48px] text-[#21252D] dark:text-white">
                    0.00$
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D] text-opacity-30 dark:text-white dark:text-opacity-50">
                    996,00 CORA
                  </p>
                  <p className="font-sans text-[10px] font-normal leading-[13.48px] text-[#21252D]  text-opacity-30 dark:text-white dark:text-opacity-50">
                    123,00 ETH
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg  border-t-2 custom-border border-white p-8 w-full space-y-5  bg-gradient-to-b from-custom-white-20 to-custom-white-0">
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
            <div className="flex flex-col rounded-t-lg border-white border-2 p-7 py-10 w-full relative dark:bg-[#5D2B32]">
              <div className="absolute top-0 right-14 bg-white flex p-3 rounded-b-lg  items-center dark:bg-[#FF8693]">
                <Image
                  src="/assets/icon/liquidity.png"
                  alt="Logo Icon"
                  width={22} // Set the desired width
                  height={22} // Set the desired height
                />
                <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#000000] ml-2 text-opacity-50 dark:text-white">
                  Claim Rewards
                </p>
              </div>
              <div className="flex w-full items-center pb-5">
                <FontAwesomeIcon icon={faArrowLeft} className="text-[#FF7D82] text-[16px]" />
                <p className="font-sans text-[25px] font-[700] leading-[34.06px] text-[#21252D] ml-2 dark:text-white">
                  Manage
                </p>
              </div>
              <div className="flex justify-between w-full pb-3">
                <div className="flex space-x-1">
                  <button className="rounded-xl px-8 text-[14px] font-normal font-sans bg-white text-[#21252D] text-opacity-50 dark:bg-[#4A1F27] dark:text-white py-1">Stable</button>
                  <button className="rounded-xl px-8 text-[14px] font-normal font-sans text-white bg-[#684222] dark:bg-[#C37623] py-1">Volatile</button>
                  <div className="flex items-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isChecked}
                        onChange={handleToggle}
                      />
                      <div className="w-7 h-3.5 bg-gray-200 border rounded-full shadow-inner dark:bg-[#5D2B32] dark:border border-[#C37623]"></div><p className="text-black font-normal text-14 pl-1 leading-[19.07px] dark:text-white">CL</p>
                      <div
                        className={`absolute w-2.5 h-2.5 rounded-full shadow transform transition-transform duration-300 ease-in-out ${isChecked ? 'translate-x-3.5 bg-[#684222] dark:bg-[#C37623]' : 'translate-x-1 bg-[#684222] dark:bg-[#C37623]'
                          }`}
                      ></div>
                    </label>
                  </div>
                </div>
                <div className="flex space-x-3 items-center justify-center">
                  <FontAwesomeIcon icon={faEllipsis} className="text-[#FF7D82] text-[24px]" />
                </div>
              </div>
              <div className="flex flex-col w-full space-y-4 pt-5">
                <div className="flex bg-[#FF7D82] border-2 border-[#FF4465] justify-start w-full items-center rounded-xl">
                  <FontAwesomeIcon icon={faArrowRight} className="text-white  stroke-effect text-[14px] p-[15px] px-[20px]" />
                  <p className="font-sans text-white font-[400] text-[12px] w-5/6">Stake your LP’s to get better incomes!</p>
                </div>
                <div className="flex flex-col w-full space-y-2 relative">
                  <button className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#4A1F27] dark:text-white dark:bg-opacity-50" onClick={selectToken}>
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
                        <div className="rounded-xl bg-[#684222] p-1 px-3 dark:bg-[#FF4465]">
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
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-5">
                    <Image
                      src="/assets/icon/plus.png"
                      alt="Logo Icon"
                      width={45} // Set the desired width
                      height={45} // Set the desired height
                    />
                  </button>
                  <button className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#4A1F27] dark:text-white dark:bg-opacity-50" onClick={selectToken}>
                    <Image
                      src="/assets/icon/doge.png"
                      alt="Logo Icon"
                      width={53} // Set the desired width
                      height={53} // Set the desired height
                    />
                    <div className="flex w-full justify-between">
                      <div className="flex flex-col">
                        <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                          DOGE
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
                        <div className="rounded-xl bg-[#684222] p-1 px-3 dark:bg-[#FF4465]">
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
              </div>
            </div>
            <div className="flex flex-col rounded-b-lg border-b-2 border-r-2 border-l-2 border-white p-7 w-full space-y-5 dark:bg-[#5D2B32]">
              <p className="font-sans text-[18px] font-normal leading-[24.06px] text-[#21252D] dark:text-white">
                Pool Preview
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
                    <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-white">
                      HACHI
                    </p>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white ">
                      298,378.987
                    </p>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Image
                    src="/assets/icon/doge.png"
                    alt="Logo Icon"
                    width={35} // Set the desired width
                    height={35} // Set the desired height
                  />
                  <div className="flex flex-col">
                    <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-white">
                      DOGE
                    </p>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                      987.34721
                    </p>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Image
                    src="/assets/icon/settings.png"
                    alt="Logo Icon"
                    width={35} // Set the desired width
                    height={35} // Set the desired height
                  />
                  <div className="flex flex-col">
                    <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-white">
                      Slippage
                    </p>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                      0.5%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex space-x-2 w-full pt-5'>
              <button className="rounded-lg px-5 py-2 text-[16px] font-[700] font-sans  bg-[#684222] w-full dark:bg-[#C37623] dark:border border-white">
                Create  a Pool
                <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff', fontSize: '16px', marginLeft: "10px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Token isOpen={isSelectToken} onClose={closeToken} /> */}
    </DefaultLayout>
  );
}
