import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
const Withdraw: React.FC = () => {
    return (
        <div className="flex flex-col w-full space-y-2">      
            <div className="flex bg-[#FF7D82] justify-start w-full items-center rounded-xl py-3 dark:border-2 border-[#FF7D82] dark:bg-custom-gradient-strong">
                <FontAwesomeIcon icon={faWarning} className="text-white  stroke-effect text-[20px] p-[15px] px-[20px]"/>
                <p className="font-sans text-white font-[400] text-[12px] w-5/6">To receive the underlying token from your staked LP position, please unstake and then withdraw. Make sure to claim any rewards before withdrawing.</p>
            </div>
            <div className='flex flex-col w-full space-y-2 relative'>
                <div className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#4A1F27]">
                    <div className='flex pr-5'>
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
                            className='-ml-5'
                        />
                    </div>                
                    <div className="flex w-full justify-between">
                    <div className="flex flex-col">
                        <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                        vAMM CORA / ETH
                        </p>
                        <p className="font-sans text-[20px] font-normal leading-[27.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                        0.00
                        </p>
                        <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                        Balance: 1,863.32
                        </p>                      
                    </div>
                    <div className="flex flex-col items-end space-y-1 justify-center ">                    
                        <div className="rounded-xl bg-[#684222] p-1 px-3  dark:bg-[#FF7D82]">
                            <p className="font-sans text-[12px] font-normal leading-[16.36px] text-white]">
                                Max
                            </p>
                        </div>   
                        <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] dark:text-white">
                        25% 50% 75%
                        </p>   
                    </div>
                    </div>            
                </div>
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-5">
                    <Image 
                    src="/assets/icon/plus.png" 
                    alt="Logo Icon" 
                    width={45} // Set the desired width
                    height={45} // Set the desired height
                    />
                </button>
                <div className='flex space-x-2 w-full'>
                    <div className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 w-full dark:bg-[#4A1F27] dark:bg-opacity-50">
                        <Image 
                        src="/assets/icon/logo.png" 
                        alt="Logo Icon" 
                        width={53} // Set the desired width
                        height={53} // Set the desired height
                        />
                        <div className="flex w-full justify-between">
                            <div className="flex flex-col">
                                <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                                CORA
                                </p>
                                <p className="font-sans text-[20px] font-normal leading-[27.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                0.00
                                </p>
                                <div className="rounded-xl bg-white p-1 px-3 dark:bg-[#4A1F27]">
                                <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                    <span className="text-[#2D54D2]">$ </span> 0.00
                                </p>
                                </div>    
                            </div>                    
                        </div>            
                    </div>
                    <div className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3  w-full dark:bg-[#4A1F27]">
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
                                <div className="rounded-xl bg-white p-1 px-3 dark:bg-[#4A1F27]">
                                <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                    <span className="text-[#2D54D2]">$ </span> 0.00
                                </p>
                                </div>    
                            </div>
                        
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Withdraw;