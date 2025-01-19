import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAward, faCircle, faWarning } from '@fortawesome/free-solid-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
const Transfer: React.FC = () => {
    return (
        <div className="flex flex-col w-full space-y-3 relative">     
            <div className="flex bg-[#FF7D82] justify-start w-full items-center rounded-xl py-2 dark:border-2 border-[#FF7D82] dark:bg-custom-gradient-strong">
                <FontAwesomeIcon icon={faWarning} className="text-white  stroke-effect text-[20px] p-[15px] px-[20px]"/>
                <p className="font-sans text-white font-[400] text-[12px] w-5/6">Be aware of the address direction before you complete your transfer, it is not reversible.</p>
            </div>              
            <div className="flex flex-col bg-white rounded-md p-5 bg-opacity-70 items-center bg-opacity-50 space-y-2 dark:bg-[#4A1F27] dark:bg-opacity-50">
                <div className='flex  space-x-3 justify-between w-full'>
                    <div className="flex space-x-2 items-center">
                        <Image 
                            src="/assets/icon/logo.png" 
                            alt="Logo Icon" 
                            width={36} 
                            height={36}                  
                        />  
                        <div className="flex flex-col">
                            <div className="flex space-x-2 items-center">
                                <p className="font-sans text-[14px] font-[400] leading-[20.48px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                    Lock ID
                                </p>     
                            </div>
                            <div className="flex space-x-1 items-center">
                                <p className="font-sans text-[15px] font-[400] leading-[20.48px] text-[#21252D] mr-2  dark:text-white">
                                    10982
                                </p>
                                <FontAwesomeIcon icon={faCircle} className="text-[#FF7D82] text-[6px] pl-1"/>
                                <p className="font-sans text-[13px] font-normal leading-[27.06px] text-black text-opacity-50 dark:text-[#FF7D82]">
                                Active                  
                                </p>  
                            </div>
                        </div>
                    </div> 
                    <div className="flex">
                        <div className="flex flex-col border-r-2 border-[#19376D] border-opacity-50 px-3 justify-end">
                            <div className="flex space-x-2 items-center  justify-end">
                                <p className="font-sans text-[14px] font-[400] leading-[20.48px] text-[#FF7D82]">
                                Current Position
                                </p>                    
                            </div>
                            <div className="flex space-x-1 items-center  justify-end">
                                <p className="font-sans text-[15px] font-[400] leading-[20.48px] text-[#21252D] dark:text-white">
                                3878 HACHI
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col  px-2  justify-end">
                            <div className="flex space-x-2 items-center  justify-end">
                                <p className="font-sans text-[14px] font-[400] leading-[20.48px] text-[#FF7D82] ">
                                Voting Power
                                </p>                    
                            </div>
                            <div className="flex space-x-1 items-center  justify-end">
                                <p className="font-sans text-[14px] font-[400] leading-[20.48px] text-[#21252D]  dark:text-white">
                                    3878 veHACHI
                                </p>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className='flex bg-white rounded-lg w-full space-x-2 items-center px-3 dark:bg-[#4A1F27] dark:bg-opacity-75'>
                    <FontAwesomeIcon icon={faAward} className="text-[#FF7D82] text-[16px] rotate-180"/>
                    <p className="font-sans text-[14px] font-normal leading-[27.06px] text-[#FF7D82]">
                        Rewards
                    </p>
                    <p className="font-sans text-[14px] font-normal leading-[27.06px] text-[#21252D] dark:text-white">
                        0.00$                        
                    </p>
                </div>
                          
            </div>
            <button className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 -translate-y-6 ">
                <div className='flex rounded-full p-2 items-center justify-center bg-custom-gradient'>
                <FontAwesomeIcon icon={faCodeFork} className="text-white text-[26px] rotate-180"/>
                </div>                
            </button>
            <div className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#4A1F27] dark:bg-opacity-50">
                <div className="flex space-x-4 items-center justify-between w-full space-x-3">
                    <div className="flex flex-col">
                        <div className="flex space-x-2 items-center">
                            <p className="font-sans text-[16px] font-[500] leading-[20.48px] text-[#FF7D82]">
                                Transfer to 
                            </p>        
                            <FontAwesomeIcon icon={faAngleRight} className="text-[#FF7D82] text-[12px]"/>            
                        </div>
                        <div className="flex space-x-1 items-center">
                            <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] mr-2 text-opacity-25 dark:text-white dark:text-opacity-25">
                                Type address
                            </p>
                        </div>
                    </div>
                    <div className="flex  border border-[#FF4465] w-2/3 px-2">                        
                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] dark:text-white dark:text-opacity-25">
                            0x...
                        </p>
                    </div>
                </div>     
            </div>
        </div>
    );
};
export default Transfer;