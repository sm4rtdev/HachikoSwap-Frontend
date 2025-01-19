import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAward, faClose } from '@fortawesome/free-solid-svg-icons';

const Selection: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {  
  return (
      <div className={`fixed inset-0 bg-[#965557] ${isOpen ? 'flex' : 'hidden'} justify-center items-center dark:bg-[#512E32]`}>
          <div className="flex flex-col w-[465px] h-[556px] rounded-lg border border-white border-[3px] items-center bg-white bg-opacity-25 p-10  pt-[50px] space-y-4 relative dark:bg-[#4A1F27]">
            <button className="absolute top-2 right-2 bg-white rounded-full flex justify-center items-center w-4 h-4" onClick={onClose}>
                <FontAwesomeIcon icon={faClose} style={{ color: '#FF7D82', fontSize: '12px' }}/>
            </button>
            <p className="font-[400] text-[#21252D] text-[20px] pb-2 dark:text-white">Select a veHACHI</p>            
            <div className="flex flex-col space-y-2 w-full overflow-y-auto scrollbar h-[500px] px-1">
                <div className="flex rounded-lg border-2 border-[#71373C] w-full">
                   <button className="flex  w-full flex-col bg-white rounded-md p-2 bg-opacity-70 items-center bg-opacity-50 space-y-2 dark:bg-[#4A1F27] dark:bg-opacity-50">
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
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                            Lock ID
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <p className="font-sans text-[15px] font-[400] leading-[20.48px] text-[#21252D] mr-2  dark:text-white">
                                            10982
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="flex">
                                <div className="flex flex-col border-opacity-50 px-3 justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82]">
                                        Current Position
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] dark:text-white">
                                        3878 HACHI
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col  px-2  justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82] ">
                                        Voting Power
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D]  dark:text-white">
                                            3878 veHACHI
                                        </p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className='flex bg-white rounded-lg w-full space-x-2 items-center px-3 dark:bg-[#71373C] dark:bg-opacity-75 '>
                            <FontAwesomeIcon icon={faAward} className="text-[#FF7D82] text-[16px] rotate-180"/>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#FF7D82]">
                                Rewards
                            </p>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#21252D] dark:text-white">
                                0.00$                        
                            </p>
                        </div>
                    </button>
                </div>
                <div className="flex rounded-lg border-2 border-[#71373C] w-full">
                   <button className="flex  w-full flex-col bg-white rounded-md p-2 bg-opacity-70 items-center bg-opacity-50 space-y-2 dark:bg-[#4A1F27] dark:bg-opacity-50">
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
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                            Lock ID
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <p className="font-sans text-[15px] font-[400] leading-[20.48px] text-[#21252D] mr-2  dark:text-white">
                                            10982
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="flex">
                                <div className="flex flex-col border-opacity-50 px-3 justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82]">
                                        Current Position
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] dark:text-white">
                                        3878 HACHI
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col  px-2  justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82] ">
                                        Voting Power
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D]  dark:text-white">
                                            3878 veHACHI
                                        </p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className='flex bg-white rounded-lg w-full space-x-2 items-center px-3 dark:bg-[#71373C] dark:bg-opacity-75 '>
                            <FontAwesomeIcon icon={faAward} className="text-[#FF7D82] text-[16px] rotate-180"/>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#FF7D82]">
                                Rewards
                            </p>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#21252D] dark:text-white">
                                0.00$                        
                            </p>
                        </div>
                    </button>
                </div>
                <div className="flex rounded-lg border-2 border-[#71373C] w-full">
                   <button className="flex  w-full flex-col bg-white rounded-md p-2 bg-opacity-70 items-center bg-opacity-50 space-y-2 dark:bg-[#4A1F27] dark:bg-opacity-50">
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
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                            Lock ID
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <p className="font-sans text-[15px] font-[400] leading-[20.48px] text-[#21252D] mr-2  dark:text-white">
                                            10982
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="flex">
                                <div className="flex flex-col border-opacity-50 px-3 justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82]">
                                        Current Position
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] dark:text-white">
                                        3878 HACHI
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col  px-2  justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82] ">
                                        Voting Power
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D]  dark:text-white">
                                            3878 veHACHI
                                        </p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className='flex bg-white rounded-lg w-full space-x-2 items-center px-3 dark:bg-[#71373C] dark:bg-opacity-75 '>
                            <FontAwesomeIcon icon={faAward} className="text-[#FF7D82] text-[16px] rotate-180"/>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#FF7D82]">
                                Rewards
                            </p>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#21252D] dark:text-white">
                                0.00$                        
                            </p>
                        </div>
                    </button>
                </div>
                <div className="flex rounded-lg border-2 border-[#71373C] w-full">
                   <button className="flex  w-full flex-col bg-white rounded-md p-2 bg-opacity-70 items-center bg-opacity-50 space-y-2 dark:bg-[#4A1F27] dark:bg-opacity-50">
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
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                            Lock ID
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <p className="font-sans text-[15px] font-[400] leading-[20.48px] text-[#21252D] mr-2  dark:text-white">
                                            10982
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="flex">
                                <div className="flex flex-col border-opacity-50 px-3 justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82]">
                                        Current Position
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] dark:text-white">
                                        3878 HACHI
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col  px-2  justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82] ">
                                        Voting Power
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D]  dark:text-white">
                                            3878 veHACHI
                                        </p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className='flex bg-white rounded-lg w-full space-x-2 items-center px-3 dark:bg-[#71373C] dark:bg-opacity-75 '>
                            <FontAwesomeIcon icon={faAward} className="text-[#FF7D82] text-[16px] rotate-180"/>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#FF7D82]">
                                Rewards
                            </p>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#21252D] dark:text-white">
                                0.00$                        
                            </p>
                        </div>
                    </button>
                </div>
                <div className="flex rounded-lg border-2 border-[#71373C] w-full">
                   <button className="flex  w-full flex-col bg-white rounded-md p-2 bg-opacity-70 items-center bg-opacity-50 space-y-2 dark:bg-[#4A1F27] dark:bg-opacity-50">
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
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                            Lock ID
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <p className="font-sans text-[15px] font-[400] leading-[20.48px] text-[#21252D] mr-2  dark:text-white">
                                            10982
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="flex">
                                <div className="flex flex-col border-opacity-50 px-3 justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82]">
                                        Current Position
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] dark:text-white">
                                        3878 HACHI
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col  px-2  justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82] ">
                                        Voting Power
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D]  dark:text-white">
                                            3878 veHACHI
                                        </p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className='flex bg-white rounded-lg w-full space-x-2 items-center px-3 dark:bg-[#71373C] dark:bg-opacity-75 '>
                            <FontAwesomeIcon icon={faAward} className="text-[#FF7D82] text-[16px] rotate-180"/>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#FF7D82]">
                                Rewards
                            </p>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#21252D] dark:text-white">
                                0.00$                        
                            </p>
                        </div>
                    </button>
                </div>
                <div className="flex rounded-lg border-2 border-[#71373C] w-full">
                   <button className="flex  w-full flex-col bg-white rounded-md p-2 bg-opacity-70 items-center bg-opacity-50 space-y-2 dark:bg-[#4A1F27] dark:bg-opacity-50">
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
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                            Lock ID
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <p className="font-sans text-[15px] font-[400] leading-[20.48px] text-[#21252D] mr-2  dark:text-white">
                                            10982
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="flex">
                                <div className="flex flex-col border-opacity-50 px-3 justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82]">
                                        Current Position
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] dark:text-white">
                                        3878 HACHI
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col  px-2  justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82] ">
                                        Voting Power
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D]  dark:text-white">
                                            3878 veHACHI
                                        </p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className='flex bg-white rounded-lg w-full space-x-2 items-center px-3 dark:bg-[#71373C] dark:bg-opacity-75 '>
                            <FontAwesomeIcon icon={faAward} className="text-[#FF7D82] text-[16px] rotate-180"/>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#FF7D82]">
                                Rewards
                            </p>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#21252D] dark:text-white">
                                0.00$                        
                            </p>
                        </div>
                    </button>
                </div>
                <div className="flex rounded-lg border-2 border-[#71373C] w-full">
                   <button className="flex  w-full flex-col bg-white rounded-md p-2 bg-opacity-70 items-center bg-opacity-50 space-y-2 dark:bg-[#4A1F27] dark:bg-opacity-50">
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
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                            Lock ID
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <p className="font-sans text-[15px] font-[400] leading-[20.48px] text-[#21252D] mr-2  dark:text-white">
                                            10982
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="flex">
                                <div className="flex flex-col border-opacity-50 px-3 justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82]">
                                        Current Position
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] dark:text-white">
                                        3878 HACHI
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col  px-2  justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82] ">
                                        Voting Power
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D]  dark:text-white">
                                            3878 veHACHI
                                        </p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className='flex bg-white rounded-lg w-full space-x-2 items-center px-3 dark:bg-[#71373C] dark:bg-opacity-75 '>
                            <FontAwesomeIcon icon={faAward} className="text-[#FF7D82] text-[16px] rotate-180"/>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#FF7D82]">
                                Rewards
                            </p>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#21252D] dark:text-white">
                                0.00$                        
                            </p>
                        </div>
                    </button>
                </div>
                <div className="flex rounded-lg border-2 border-[#71373C] w-full">
                   <button className="flex  w-full flex-col bg-white rounded-md p-2 bg-opacity-70 items-center bg-opacity-50 space-y-2 dark:bg-[#4A1F27] dark:bg-opacity-50">
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
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                            Lock ID
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <p className="font-sans text-[15px] font-[400] leading-[20.48px] text-[#21252D] mr-2  dark:text-white">
                                            10982
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="flex">
                                <div className="flex flex-col border-opacity-50 px-3 justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82]">
                                        Current Position
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] dark:text-white">
                                        3878 HACHI
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col  px-2  justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82] ">
                                        Voting Power
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D]  dark:text-white">
                                            3878 veHACHI
                                        </p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className='flex bg-white rounded-lg w-full space-x-2 items-center px-3 dark:bg-[#71373C] dark:bg-opacity-75 '>
                            <FontAwesomeIcon icon={faAward} className="text-[#FF7D82] text-[16px] rotate-180"/>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#FF7D82]">
                                Rewards
                            </p>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#21252D] dark:text-white">
                                0.00$                        
                            </p>
                        </div>
                    </button>
                </div>
                <div className="flex rounded-lg border-2 border-[#71373C] w-full">
                   <button className="flex  w-full flex-col bg-white rounded-md p-2 bg-opacity-70 items-center bg-opacity-50 space-y-2 dark:bg-[#4A1F27] dark:bg-opacity-50">
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
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                                            Lock ID
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <p className="font-sans text-[15px] font-[400] leading-[20.48px] text-[#21252D] mr-2  dark:text-white">
                                            10982
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="flex">
                                <div className="flex flex-col border-opacity-50 px-3 justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82]">
                                        Current Position
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D] dark:text-white">
                                        3878 HACHI
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col  px-2  justify-end">
                                    <div className="flex space-x-2 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#FF7D82] ">
                                        Voting Power
                                        </p>                    
                                    </div>
                                    <div className="flex space-x-1 items-center  justify-end">
                                        <p className="font-sans text-[12px] font-[400] leading-[20.48px] text-[#21252D]  dark:text-white">
                                            3878 veHACHI
                                        </p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className='flex bg-white rounded-lg w-full space-x-2 items-center px-3 dark:bg-[#71373C] dark:bg-opacity-75 '>
                            <FontAwesomeIcon icon={faAward} className="text-[#FF7D82] text-[16px] rotate-180"/>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#FF7D82]">
                                Rewards
                            </p>
                            <p className="font-sans text-[12px] font-normal leading-[27.06px] text-[#21252D] dark:text-white">
                                0.00$                        
                            </p>
                        </div>
                    </button>
                </div>

            </div>
          </div>
      </div>
  );
};
export default Selection;