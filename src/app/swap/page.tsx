"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight, faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/navigation";
import Token from "@/components/common/token";
import Setting from "@/components/swap/swap/setting";
import Confirm from "@/components/swap/swap/confirm";
import Modal from "@/components/common/modal";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { useAccount } from "wagmi";
// import PairFactoryABI from '../../abis/PairFactory.json';
// import PairABI from "../../abis/Pair.json";
import Router2ABI from '../../abis/Router2.json';
import ERC20ABI from '../../abis/ERC20.json';
import axios from 'axios';
import { Token as TokenType, SwapToken as SwapTokenType } from '../../types/types';
import { formatEther, parseEther } from "viem";
import { readContract } from "@wagmi/core";
import { shibarium } from "wagmi/chains";
import { config } from "@/config/wagmiConfig";

// const isDarkMode = typeof window !== "undefined" && document.documentElement.classList.contains('dark');

const BONE_ADDRESS = process.env.NEXT_PUBLIC_BONE_ADDRESS
const WBONE_ADDRESS = process.env.NEXT_PUBLIC_WBONE_ADDRESS
const blurredInputClass = "opacity-50 cursor-not-allowed filter blur-[1px]";

export default function Home() {
  const { address } = useAccount();

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [tokens, setTokens] = useState<TokenType[]>([]);
  const [isTokensLoading, setIsTokensLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [inOrOut, setInOrOut] = useState("in");
  const [inToken, setInToken] = useState<SwapTokenType | null>(null);
  const [outToken, setOutToken] = useState<SwapTokenType | null>(null);

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

  const handleSelectToken = useCallback(async (token: TokenType, initFlag: number = 0) => {
    const tmp: SwapTokenType = {
      token: token,
      balance: "0",
      amount: "0",
      amountLoading: false
    };

    if (address) {
      const balance = await readContract(config, {
        address: token.address,
        abi: ERC20ABI,
        functionName: "balanceOf",
        args: [address],
        chainId: shibarium.id,
      }) as bigint
      tmp.balance = formatEther(balance)
    }

    if (initFlag == 1) {
      setInToken(tmp);
    } else if (initFlag == 2) {
      setOutToken(tmp);
    } else {
      if (inOrOut === "in") {
        setInToken(tmp);
      } else if (inOrOut === "out") {
        setOutToken(tmp);
      }
    }
  }, [address, inOrOut]);

  useEffect(() => {
    const fetchTokens = async () => {
      setIsTokensLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tokens`);
        setTokens(response.data);
        handleSelectToken(response.data[0], 1);
        handleSelectToken(response.data[1], 2);
      } catch (error) {
        console.error("Error fetching tokens:", error);
      } finally {
        setIsTokensLoading(false);
      }
    };

    fetchTokens();
  }, []);

  const router = useRouter();
  const [isSwap, setIsSwap] = useState(false);
  useEffect(() => {
    if (isLoading === true) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsSwap(true)
      }, 2000); // Change after 5 seconds  
      return () => clearTimeout(timer); // Cleanup on unmount
    }

  }, [isLoading]);
  const handleSwap = () => {
    setIsLoading(true);

  };
  const closeSwap = (flag: boolean) => {
    setIsSwap(false);
    if (flag) {
      handleTrade();
    }
  }

  const [isSetting, setIsSetting] = useState(false);
  const handleSetting = () => setIsSetting(true);
  const closeSetting = () => setIsSetting(false);

  const [isSelectToken, setIsSelectToken] = useState(false)
  const selectToken = () => setIsSelectToken(true);
  const closeToken = () => setIsSelectToken(false);

  const [isTrade, setIsTrade] = useState(false);
  const closeTrade = () => setIsTrade(false);
  const handleTrade = () => {
    setIsTrade(true);
  }

  const handleInAmount = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!inToken?.token) return;
    if (!outToken?.token) return;

    setInToken({ ...inToken, amount: e.target.value });

    if (e.target.value) {
      const inTokenAddress = inToken.token.address === BONE_ADDRESS ? WBONE_ADDRESS : inToken.token.address;
      const outTokenAddress = outToken.token.address === BONE_ADDRESS ? WBONE_ADDRESS : outToken.token.address;

      setOutToken({ ...outToken, amountLoading: true });
      const pairFor = await readContract(config, {
        address: process.env.NEXT_PUBLIC_ROUTER2_ADDRESS as `0x${string}`,
        abi: Router2ABI,
        functionName: "pairFor",
        args: [inTokenAddress, outTokenAddress, false],
        chainId: shibarium.id,
      }) as string;
      if (pairFor === "0x0000000000000000000000000000000000000000") {
        const estimatedOutAmount1 = await readContract(config, {
          address: process.env.NEXT_PUBLIC_ROUTER2_ADDRESS as `0x${string}`,
          abi: Router2ABI,
          functionName: "getAmountOut",
          args: [parseEther(e.target.value), inTokenAddress, WBONE_ADDRESS],
          chainId: shibarium.id,
        }) as [bigint];

        const estimatedOutAmount2 = await readContract(config, {
          address: process.env.NEXT_PUBLIC_ROUTER2_ADDRESS as `0x${string}`,
          abi: Router2ABI,
          functionName: "getAmountOut",
          args: [estimatedOutAmount1[0], WBONE_ADDRESS, outTokenAddress],
          chainId: shibarium.id,
        }) as [string];

        setOutToken({
          ...outToken,
          amount: (Math.floor(parseFloat(formatEther(BigInt(estimatedOutAmount2[0]))) * 1e6) / 1e6).toFixed(6),
          amountLoading: false
        });
      } else {
        const estimatedOutAmount = await readContract(config, {
          address: process.env.NEXT_PUBLIC_ROUTER2_ADDRESS as `0x${string}`,
          abi: Router2ABI,
          functionName: "getAmountOut",
          args: [parseEther(e.target.value), inTokenAddress, outTokenAddress],
          chainId: shibarium.id,
        }) as [string];

        setOutToken({
          ...outToken,
          amount: (Math.floor(parseFloat(formatEther(BigInt(estimatedOutAmount[0]))) * 1e6) / 1e6).toFixed(6),
          amountLoading: false
        });
      }
    }
  }

  // const handleInAmountPercentageButtons = (percentage: number) => {
  //   const _amount = Number(inTokenBalance) * percentage / 100;
  // }

  const handleSwapInOutTokens = () => {
    const tmp = inToken;
    setInToken(outToken);
    setOutToken(tmp);
  }

  return (
    <>
      {
        isTokensLoading
          ? <></>
          : <DefaultLayout>
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
                  {isSwap &&
                    <div className="bg-[#FF000A] flex justify-start w-full items-center">
                      <FontAwesomeIcon icon={faArrowRight} className="text-white  stroke-effect text-[14px] p-[15px] pl-[20px] pr-[10px]" />
                      <p className="text-white font-weight text-[14px]">Insufficient Balance</p>
                    </div>
                  }

                  <div className="flex flex-col rounded-lg border-white border-2 p-7 w-full space-y-5  dark:bg-[#F9838F33]">
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
                        <button className="rounded-xl px-5 py-2 text-[14px] font-normal font-sans  bg-[#684222] dark:bg-[#C37623]" onClick={() => router.push("/swap")}>Swap</button>
                        <button className="rounded-xl px-5 py-2 text-[14px] font-normal font-sans  bg-white dark:bg-[#FF8693] text-[#21252D] text-opacity-50" onClick={() => router.push("/swap/limit")}>Limit</button>
                        <button className="rounded-xl px-5 py-2 text-[14px] font-normal font-sans  bg-white dark:bg-[#FF8693] text-[#21252D] text-opacity-50" onClick={() => router.push("/swap/crosschain")}>CrossChain</button>
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
                      <button
                        className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#2F0607] dark:text-white dark:bg-opacity-50"
                      >
                        <Image
                          src={
                            inToken?.token.logo
                              ? inToken?.token.logo
                              : `https://woofswap.finance/image/tokens/${inToken?.token.symbol}.png`
                          }
                          alt="Logo Icon"
                          width={53} // Set the desired width
                          height={53} // Set the desired height
                          onClick={() => {
                            setInOrOut("in");
                            selectToken();
                          }}
                        />
                        <div className="flex flex-col gap-1 w-[calc(100%-65px)] justify-between">
                          <div className="flex items-center justify-between">
                            <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                              {inToken?.token.symbol}
                            </p>
                            <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                              Balance: {inToken?.balance ? parseFloat(inToken.balance).toFixed(2) : "0.00"} {inToken?.token.symbol}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <input
                              className={`font-sans text-[20px] font-normal leading-[27.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50 w-[180px] rounded-xl px-2 outline-none ${inToken?.amountLoading ? blurredInputClass : ""}`}
                              type="number"
                              value={inToken?.amount || 0}
                              onChange={handleInAmount}
                              style={{ appearance: 'none', MozAppearance: 'textfield' }}
                            />
                            <div className="rounded-xl bg-[#684222] p-1 px-3 dark:bg-[#C37623]">
                              <p className="font-sans text-[12px] font-normal leading-[16.36px] text-white dark:text-white">
                                Max
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="rounded-xl bg-white p-1 px-3 dark:bg-[#2F0607]">
                              <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                <span className="text-[#FF4465]">$ </span> 0.00
                              </p>
                            </div>
                            <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] dark:text-white">
                              25% 50% 75%
                            </p>
                          </div>
                        </div>
                      </button>
                      <button
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:text-black p-2 rounded-full bg-[#FF91A4] items-center justify-center w-12 h-12"
                        onClick={handleSwapInOutTokens}
                      >
                        <FontAwesomeIcon
                          icon={faRightLeft}
                          className="text-white  rotate-90 stroke-effect text-[20px] dark:text-black"
                        />
                      </button>
                      <button
                        className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#2F0607] dark:text-white dark:bg-opacity-50"
                      >
                        <Image
                          src={
                            outToken?.token.logo
                              ? outToken?.token.logo
                              : `https://woofswap.finance/image/tokens/${outToken?.token.symbol}.png`
                          }
                          alt="Logo Icon"
                          width={53} // Set the desired width
                          height={53} // Set the desired height
                          onClick={() => {
                            setInOrOut("out");
                            selectToken();
                          }}
                        />
                        <div className="flex flex-col gap-1 w-[calc(100%-65px)] justify-between">
                          <div className="flex items-center justify-between">
                            <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                              {outToken?.token.symbol}
                            </p>
                            <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                              Balance: {outToken?.balance ? parseFloat(outToken.balance).toFixed(2) : "0.00"} {outToken?.token.symbol}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <input
                              className={`font-sans text-[20px] font-normal leading-[27.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50 w-[180px] rounded-xl px-2 ${outToken?.amountLoading ? blurredInputClass : ""}`}
                              value={outToken?.amount || 0}
                              type="number"
                              disabled
                            />
                            <div className="rounded-xl bg-[#684222] p-1 px-3 dark:bg-[#C37623]">
                              <p className="font-sans text-[12px] font-normal leading-[16.36px] text-white dark:text-white">
                                Max
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="rounded-xl bg-white p-1 px-3 dark:bg-[#2F0607]">
                              <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                <span className="text-[#FF4465]">$ </span> 0.00
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
                  <button className="rounded-lg px-5 py-2 text-[16px] font-[700] font-sans  bg-[#684222] w-full dark:bg-[#C37623] dark:border border-white" onClick={() => handleSwap()}>
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
              <Token isOpen={isSelectToken} onClose={closeToken} tokens={tokens} onSelectToken={handleSelectToken} />
              <Setting isOpen={isSetting} onClose={closeSetting} />
              <Confirm isOpen={isSwap} onClose={closeSwap} inToken={inToken} outToken={outToken} />
              <Modal
                isOpen={isTrade}
                title="Waiting for your transaction"
                message="to be confirmed on the blockchain"
                success="Swap Successful"
                success_body={`You sold ${inToken?.amount} ${inToken?.token.symbol} for ${outToken?.amount} ${outToken?.token.symbol} succesfully`}
                onClose={closeTrade}
              />
            </div >
          </DefaultLayout >
      }
    </>
  );
}
