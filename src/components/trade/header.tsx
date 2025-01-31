"use client"; // Add this line
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import WalletButton from '../common/WalletConnectButton';
import "@rainbow-me/rainbowkit/styles.css";

export interface RouterProps {
  route: string;
}
const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get current pathname
  const [routerState, setRouterState] = useState<string>("");

  const handleRouterState = (state: string) => {
    router.push(`/${state}`);
  };
  useEffect(() => {
    const pathSegments = pathname.split('/').filter(Boolean); // Remove empty segments
    const currentPath = pathSegments[0] || ''; // Get the first segment or '' if empty
    setRouterState(currentPath); // Set the router state
  }, [pathname]); // Depend on pathname

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  const handleLanding = () => {
    document.documentElement.classList.remove('dark');
    router.push("/");
  }
  return (
    <div className='w-full h-[170px] flex flex-col  items-center justify-start container mx-auto'>
      <div className='w-full h-[73px] rounded-b-[34px] rounded-t-none bg-[#FF7D82] px-10 flex items-center justify-between dark:bg-[#FF8693]'>
        <div className='flex justify-center items-center'>
          <Image
            src="/assets/icon/copy.svg"
            alt="Copy Icon"
            width={20} // Set the desired width
            height={20} // Set the desired height
            className="text-black" // You can still apply classes
          />
          <p className="font-tt-firs-neue text-[13px] font-normal leading-[16.77px] text-left text-underline-position text-decoration-skip-ink text-[#21252D] ml-3">
            Official Contract Addresses
          </p>
          <Image
            src="/assets/icon/right-direction.svg"
            alt="Right-direction Icon"
            width={20} // Set the desired width
            height={20} // Set the desired height
            className="text-black ml-3" // You can still apply classes
          />
          <p className="font-tt-firs-neue text-[18px] font-normal leading-[16.77px] text-left text-underline-position text-decoration-skip-ink text-[#21252D] ml-3">
            |
          </p>
          <p className="font-tt-firs-neue text-[13px] font-normal leading-[16.77px] text-left text-underline-position text-decoration-skip-ink text-[#21252D] ml-3">
            Ox77...3b5c
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <div className='h-[26px] w-[204px] rounded-[24.5px] bg-[#684222] font-tt-firs-neue text-[13px] font-normal leading-[16.77px] text-[#ffffff] flex items-center justify-center dark:bg-[#C37623]'>
            Lock for 2 Years (+30% CORA)
          </div>
          <p className="font-tt-firs-neue text-[18px] font-normal leading-[16.77px] text-left text-underline-position text-decoration-skip-ink text-[#21252D] ml-3">
            |
          </p>
          <Image
            src="/assets/icon/logo.png"
            alt="logo Icon"
            width={22} // Set the desired width
            height={23} // Set the desired height
            className="text-black ml-3" // You can still apply classes
          />
          <p className="font-tt-firs-neue text-[13px] font-normal leading-[16.77px] text-left text-underline-position text-decoration-skip-ink text-[#21252D] ml-1">
            22.75
          </p>
          <Image
            src="/assets/icon/ethereum.svg"
            alt="etjereum Icon"
            width={12} // Set the desired width
            height={19.54} // Set the desired height
            className="text-black ml-3" // You can still apply classes
          />
          <p className="font-tt-firs-neue text-[13px] font-normal leading-[16.77px] text-left text-underline-position text-decoration-skip-ink text-[#21252D] ml-1">
            $1,853
          </p>
        </div>
      </div>
      <div className='w-full h-[97px] flex items-center justify-between px-10'>
        <button className='flex justify-center items-center' onClick={handleLanding}>
          <Image
            src="/assets/icon/logo.png"
            alt="Logo Icon"
            width={62} // Set the desired width
            height={62} // Set the desired height
            className="text-black" // You can still apply classes
          />
          <p className="font-sans text-[17px] font-[600] leading-[23.15px] text-underline-position text-decoration-skip-ink text-[#332038] ml-[15px] hidden xl:block dark:text-white">
            HachiSwap
          </p>
        </button>
        <div className="flex items-center justify-between" >
          <div className="hidden sm:block ml-3">
            <div className="flex md:space-x-1">
              <a href="#" className={`header-nav-item header-nav-item-dark ${routerState === 'swap' ? 'active' : ''}`} onClick={() => handleRouterState("swap")} >Swap</a>
              <a href="#" className={`header-nav-item header-nav-item-dark ${routerState === 'liquidity' ? 'active' : ''}`} onClick={() => handleRouterState("liquidity")}>Liquidity</a>
              <a href="#" className={`header-nav-item header-nav-item-dark ${routerState === 'lock' ? 'active' : ''}`} onClick={() => handleRouterState("lock")}>Lock</a>
              <a href="#" className={`header-nav-item header-nav-item-dark ${routerState === 'vote' ? 'active' : ''}`} onClick={() => handleRouterState("vote")} >Vote</a>
              <a href="#" className={`header-nav-item header-nav-item-dark ${routerState === 'rewards' ? 'active' : ''}`} onClick={() => handleRouterState("rewards")}>Rewards</a>
              <a href="#" className={`header-nav-item header-nav-item-dark ${routerState === 'bribes' ? 'active' : ''}`} onClick={() => handleRouterState("bribes")}>Bribes</a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between" >
          <div className="flex items-end justify-between" >
            <div className="flex space-x-2">
              <WalletButton />
              <button className='flex justify-center items-center w-[38px] h-[38px] rounded-full bg-white dark:bg-[#FF7D82] dark:text-white dark:border border-white'>
                <Image
                  src="/assets/icon/airdrop.png"
                  alt="Logo Icon"
                  width={20.16} // Set the desired width
                  height={20.16} // Set the desired height
                  className="text-black dark:text-white" // You can still apply classes
                />
              </button>
              <button className='flex justify-center items-center w-[38px] h-[38px] rounded-full bg-white dark:bg-[#FF7D82] dark:text-white dark:border border-white'>
                <Image
                  src="/assets/icon/inform.png"
                  alt="Logo Icon"
                  width={17.06} // Set the desired width
                  height={17.06} // Set the desired height
                  className="text-black dark:text-white" // You can still apply classes
                />
              </button>
              <button className='flex justify-center items-center w-[38px] h-[38px] rounded-full bg-white dark:bg-[#FF7D82] dark:text-white dark:border border-white'>
                <Image
                  src="/assets/icon/market.png"
                  alt="Logo Icon"
                  width={17.06} // Set the desired width
                  height={17.06} // Set the desired height
                  className="text-black dark:text-white" // You can still apply classes
                />
              </button>
            </div>
            <div>
              <button className='flex rounded-full items-center  w-[38px] h-[38px]  bg-white ml-2  justify-center  dark:bg-[#FF7D82] dark:text-white dark:border border-white' onClick={toggleTheme}>
                <Image
                  src="/assets/icon/sun.png"
                  alt="Sun Icon"
                  width={17.5} // Set the desired width
                  height={17.82} // Set the desired height
                  className={`text-black dark:text-white ${isDarkMode ? 'hidden' : 'flex'}`}
                />
                <FontAwesomeIcon icon={faMoon} className={` ${isDarkMode ? 'flex' : 'hidden'} text-black  dark:text-white  stroke-effect text-[16px] text-opacity-50`} />
              </button>
            </div>
          </div>
        </div>


      </div>


    </div>
  );
};
export default Header;