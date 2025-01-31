"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSort } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';


import Deposit from '@/components/liquidity/manage/deposit';
import Withdraw from '@/components/liquidity/manage/withdraw';
import Stake from '@/components/liquidity/manage/stake';
import UnStake from '@/components/liquidity/manage/unstake';
import DefaultLayout from '@/components/layout/DefaultLayout';
import Setting from '@/components/liquidity/manage/setting';
// import Token from '@/components/common/token';

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const [manageState, setManageState] = useState<number>(0);

  const handleManageState = (state: number) => {
    setManageState(state);
  };

  const [isSetting, setIsSetting] = useState(false);
  const handleSetting = () => setIsSetting(true);
  const closeSetting = () => setIsSetting(false);

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
              <div className="flex justify-between w-full pb-5">
                <div className="flex space-x-2">
                  <button className={`rounded-xl px-5 text-[14px] font-normal font-sans bg-white dark:bg-[#4A1F27] py-1 text-[#684222] dark:text-white text-opacity-50 dark:text-opacity-50 ${manageState === 0 ? 'liquidity_manage_active' : ''}`} onClick={() => handleManageState(0)}>Deposit</button>
                  <button className={`rounded-xl px-5 text-[14px] font-normal font-sans bg-white dark:bg-[#4A1F27] py-1 text-[#684222] dark:text-white text-opacity-50 dark:text-opacity-50 ${manageState === 1 ? 'liquidity_manage_active' : ''}`} onClick={() => handleManageState(1)}>Withdraw</button>
                  <button className={`rounded-xl px-5 text-[14px] font-normal font-sans bg-white dark:bg-[#4A1F27] py-1 text-[#684222] dark:text-white text-opacity-50 dark:text-opacity-50 ${manageState === 2 ? 'liquidity_manage_active' : ''}`} onClick={() => handleManageState(2)}>Stake</button>
                  <button className={`rounded-xl px-5 text-[14px] font-normal font-sans bg-white dark:bg-[#4A1F27] py-1 text-[#684222] dark:text-white text-opacity-50 dark:text-opacity-50 ${manageState === 3 ? 'liquidity_manage_active' : ''}`} onClick={() => handleManageState(3)}>Unstake</button>
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
              {manageState === 0 ? <Deposit seletToken={selectToken} /> : manageState === 1 ? <Withdraw /> : manageState === 2 ? <Stake /> : <UnStake />}
              {/* <Deposit /> */}
              {/* <Withdraw /> */}
              {/* <Stake /> */}
              {/* <UnStake /> */}
            </div>
            <div className="flex flex-col rounded-b-lg border-b-2 border-r-2 border-l-2 border-white p-7 w-full space-y-5 dark:bg-[#5D2B32]">
              <p className="font-sans text-[18px] font-normal leading-[24.06px] text-[#21252D] dark:text-white">
                Reserve Info
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
                    src="/assets/icon/ethereum_blue.png"
                    alt="Logo Icon"
                    width={35} // Set the desired width
                    height={35} // Set the desired height
                  />
                  <div className="flex flex-col">
                    <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-white">
                      ETH
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
            {manageState === 0 ?
              <div className='flex space-x-2 w-full pt-5'>
                <button className="rounded-lg px-5 py-2 text-[16px] font-[700] font-sans  bg-[#684222] w-full dark:bg-[#C37623] dark:border border-white">
                  Deposit LP
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff', fontSize: '16px', marginLeft: "10px" }} />
                </button>
                <button className="rounded-lg px-5 py-2 text-[16px] font-[700] font-sans  bg-[#684222] w-full dark:bg-[#C37623] dark:border border-white">
                  Deposit and Stake
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff', fontSize: '16px', marginLeft: "10px" }} />
                </button>
              </div> : manageState === 1 ?
                <div className='flex space-x-2 w-full pt-5'>
                  <button className="rounded-lg px-5 py-2 text-[16px] font-[700] font-sans  bg-[#684222] w-full dark:bg-[#C37623] dark:border border-white">
                    Withdraw LP
                    <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff', fontSize: '16px', marginLeft: "10px" }} />
                  </button>
                </div> : manageState === 2 ?
                  <div className='flex space-x-2 w-full pt-5'>
                    <button className="rounded-lg px-5 py-2 text-[16px] font-[700] font-sans  bg-[#684222] w-full dark:bg-[#C37623] dark:border border-white">
                      Stake LP
                      <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff', fontSize: '16px', marginLeft: "10px" }} />
                    </button>
                  </div> :
                  <div className='flex space-x-2 w-full pt-5'>
                    <button className="rounded-lg px-5 py-2 text-[16px] font-[700] font-sans  bg-[#684222] w-full dark:bg-[#C37623] dark:border border-white">
                      Unstake LP
                      <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff', fontSize: '16px', marginLeft: "10px" }} />
                    </button>
                  </div>
            }

          </div>
        </div>
      </div>
      <Setting isOpen={isSetting} onClose={closeSetting} />
      {/* <Token isOpen={isSelectToken} onClose={closeToken} /> */}
    </DefaultLayout>
  );
}
