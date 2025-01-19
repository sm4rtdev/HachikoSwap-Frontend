import React from 'react';
import Image from "next/image";

const Deposit: React.FC<{  seletToken: () => void }> = ({seletToken}) => {
    return (
        <div className="flex flex-col w-full space-y-2 relative">              
            <button className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#2F0607] dark:text-white dark:bg-opacity-50" onClick={seletToken}>
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
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-5">
                <Image 
                src="/assets/icon/plus.png" 
                alt="Logo Icon" 
                width={45} // Set the desired width
                height={45} // Set the desired height
                />
            </button>
            <button className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#2F0607] dark:text-white dark:bg-opacity-50" onClick={seletToken}>
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
    );
};
export default Deposit;