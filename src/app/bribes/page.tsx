"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRight, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from '@/components/layout/DefaultLayout';
import { faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons/faMagicWandSparkles';
import Link from 'next/link';
// import Token from '@/components/common/token';
import Pool from '@/components/bribes/pool';

export default function Home() {
  const [, setIsSelectToken] = useState(false)
  const selectToken = () => setIsSelectToken(true);
  // const closeToken = () => setIsSelectToken(false);

  const [isSelectPool, setIsSelectPool] = useState(false)
  const selectPool = () => setIsSelectPool(true);
  const closePool = () => setIsSelectPool(false);

  return (
    <DefaultLayout>
      <div className="container mx-auto flex justify-center items-center p-[20px] py-8">
        <div className="flex justify-center items-start space-x-8 w-full">
          <div className="flex w-7/12 flex-col items-center justify-center space-y-6">
            <div className="flex rounded-lg  border-white custom-border px-10 py-5 w-full items-center space-x-3 bg-gradient-to-b from-custom-white-20 to-custom-white-0">
              <FontAwesomeIcon icon={faMagicWandSparkles} className="text-[#FF7D82] text-[16px]" />
              <p className="font-sans text-[14px] font-[400] leading-[19.06px] text-black dark:text-[#FEE8E9]">
                Add a bribe reward for an existing gauge to incentive votes on it.
              </p>
            </div>
            <div className="flex flex-col rounded-lg  border-white custom-border p-8 w-full space-y-5 px-20 bg-gradient-to-b from-custom-white-20 to-custom-white-0">
              <p className="font-sans text-[22px] font-[700] leading-[24.06px] text-[#21252D] -ml-2 dark:text-[#FEE8E9]">
                How it works
              </p>
              <div className="relative">
                <div className="border-l-2 border-white">
                  <div className="mb-12 ml-4 flex items-center">
                    <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">1</div>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-[#FEE8E9]">
                      Quote for new lock received...
                    </p>
                  </div>
                  <div className="mb-12 ml-4 flex items-center ">
                    <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">2</div>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-[#FEE8E9]">
                      Quote for deposit received...
                    </p>
                  </div>
                  <div className="mb-12 ml-4 flex items-center">
                    <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">3</div>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-[#FEE8E9]">
                      Time of locking applied...
                    </p>
                  </div>
                  <div className="ml-4 flex items-center">
                    <div className="absolute -left-2 flex items-center justify-center p-1 bg-[#FF91A4] rounded-full w-[19px] h-[19px] text-[11px]">4</div>
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] pl-1 dark:text-[#FEE8E9]">
                      Creating veHACHI...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-5/12 rounded-lg flex-col items-center justify-center ">
            <div className="flex flex-col rounded-t-lg border-white border-2 p-7 py-10 w-full dark:bg-[#5D2B32]">
              <div className='flex items-center justify-between w-full'>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faDatabase} className="text-[#FF7D82] text-[20px]" />
                  <p className="font-sans text-[25px] font-[600] leading-[34.06px] text-[#21252D] ml-2 dark:text-[#FEE8E9]">
                    Bribes
                  </p>
                </div>
                <p className="flex font-sans text-black font-[400] text-[12px] dark:text-[#FEE8E9]">Can’t see your Pool? <Link className='text-[#FF7D82] ml-2' href="./gauge"> Create a Gauge</Link></p>
              </div>
              <div className="flex flex-col w-full space-y-4  mt-5">
                <div className="flex flex-col w-full space-y-2 relative">
                  <button className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-5 dark:bg-[#4A1F27]" onClick={selectPool}>
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
                        <FontAwesomeIcon icon={faAngleDown} className="text-[#FF7D82] text-[10px]" />
                      </div>
                      <p className="font-sans text-[12px] font-normal leading-[27.06px] text-black text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50">
                        Volatile
                      </p>
                    </div>
                  </button>
                  <button className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
                    <Image
                      src="/assets/icon/lock-white.png"
                      alt="Logo Icon"
                      width={45} // Set the desired width
                      height={45} // Set the desired height
                    />
                  </button>
                  <button className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-5 dark:bg-[#4A1F27]" onClick={selectToken}>
                    <div className='flex'>
                      <Image
                        src="/assets/icon/logo.png"
                        alt="Logo Icon"
                        width={53} // Set the desired width
                        height={53} // Set the desired height
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className='flex space-x-1 items-center'>
                        <p className="font-sans text-[16px] font-normal leading-[19.06px] text-[#21252D] dark:text-[#FEE8E9]">
                          Select Bribe Token
                        </p>
                        <FontAwesomeIcon icon={faAngleDown} className="text-[#FF7D82] text-[10px]" />
                      </div>
                      <p className="font-sans text-[12px] font-normal leading-[27.06px] text-black text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50">
                        Reward Token
                      </p>
                    </div>
                  </button>
                  <button className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 pb-5">
                    <Image
                      src="/assets/icon/lock-white.png"
                      alt="Logo Icon"
                      width={45} // Set the desired width
                      height={45} // Set the desired height
                    />
                  </button>
                  <button className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#4A1F27]" onClick={selectToken}>
                    <Image
                      src="/assets/icon/logo.png"
                      alt="Logo Icon"
                      width={53} // Set the desired width
                      height={53} // Set the desired height
                    />
                    <div className="flex w-full justify-between">
                      <div className="flex flex-col">
                        <div className='flex space-x-1 items-center'>
                          <p className="font-sans text-[16px] font-normal leading-[19.06px] text-[#21252D] dark:text-[#FEE8E9]">
                            Select Bribe Token
                          </p>
                          <FontAwesomeIcon icon={faAngleDown} className="text-[#FF7D82] text-[10px]" />
                        </div>
                        <p className="font-sans text-[20px] font-normal leading-[27.06px] text-[#21252D] text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50">
                          0.00
                        </p>
                        <div className="rounded-xl bg-white p-1 px-3">
                          <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] text-opacity-50">
                            <span className="text-[#FF4465]">$ </span> 0.00
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-[#FEE8E9] dark:text-opacity-50">
                          Balance: 234.34 HACHI
                        </p>
                        <div className="rounded-xl bg-[#684222] p-1 px-3">
                          <p className="font-sans text-[12px] font-normal leading-[16.36px] text-white">
                            Max
                          </p>
                        </div>
                        <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] dark:text-[#FEE8E9]">
                          25% 50% 75%
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-b-lg border-b-2 border-r-2 border-l-2 border-white p-7 w-full space-y-5 dark:bg-[#5D2B32]">
              <p className="font-sans text-[18px] font-normal leading-[24.06px] text-[#21252D] dark:text-[#FEE8E9]">
                Bribe Preview
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
                    <FontAwesomeIcon icon={faCalendarDay} className="text-[#FF7D82] text-[20px]" />
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
                Create Bribe
                <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff', fontSize: '16px', marginLeft: "10px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Token isOpen={isSelectToken} onClose={closeToken} /> */}
      <Pool isOpen={isSelectPool} onClose={closePool} />
    </DefaultLayout>
  );
}
