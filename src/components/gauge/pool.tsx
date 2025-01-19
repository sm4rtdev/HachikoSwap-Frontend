import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
const Pool: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  
  return (
      <div className={`fixed inset-0 bg-[#965557] ${isOpen ? 'flex' : 'hidden'} justify-center items-center dark:bg-[#512E32]`}>
          <div className="flex flex-col w-[465px] h-[544px] rounded-lg border border-white border-[3px] items-center bg-white bg-opacity-25 p-10  pt-[50px] space-y-4 relative dark:bg-[#4A1F27]">
            <button className="absolute top-2 right-2 bg-white rounded-full flex justify-center items-center w-4 h-4" onClick={onClose}>
                <FontAwesomeIcon icon={faClose} style={{ color: '#FF7D82', fontSize: '12px' }}/>
            </button>
            <p className="font-[400] text-[#21252D] text-[20px] pb-2 dark:text-white">Select a Pool</p>            
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-[#FF4465]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 rounded-lg bg-white focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white dark:bg-[#3A0A13]"
                    placeholder="Search by name, symbol..."
                    required
                />
            </div>
            <div className="flex flex-col space-y-2 w-full overflow-y-auto scrollbar h-[350px] px-1">
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <div className="flex items-center">
                                <Image 
                                    src="/assets/icon/logo.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                />
                                <Image 
                                    src="/assets/icon/ethereum_blue.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                    className="-ml-4"
                                />
                            </div>
                            
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">HACHI / ETH</p>                                    
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="bg-[#DEDEDE] px-2 w-fit">
                                        <p className="font-normal text-[10px] text-[#684222] text-[12px] text-opacity-50 leading-[15px]">Volatile</p>    
                                    </div>
                                    <div className="bg-[#FF7D82] px-2 w-fit ">
                                        <p className="font-normal text-[10px] text-white text-opacity-50 leading-[15px] ">+0.00%</p>    
                                    </div>
                                </div>              
                            </div> 
                        </div>               
                    </div>
                </div>
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <div className="flex items-center">
                                <Image 
                                    src="/assets/icon/logo.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                />
                                <Image 
                                    src="/assets/icon/ethereum_blue.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                    className="-ml-4"
                                />
                            </div>
                            
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">HACHI / ETH</p>                                    
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="bg-[#DEDEDE] px-2 w-fit">
                                        <p className="font-normal text-[10px] text-[#684222] text-[12px] text-opacity-50 leading-[15px]">Volatile</p>    
                                    </div>
                                    <div className="bg-[#FF7D82] px-2 w-fit ">
                                        <p className="font-normal text-[10px] text-white text-opacity-50 leading-[15px] ">+0.00%</p>    
                                    </div>
                                </div>              
                            </div> 
                        </div>               
                    </div>
                </div>
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <div className="flex items-center">
                                <Image 
                                    src="/assets/icon/logo.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                />
                                <Image 
                                    src="/assets/icon/ethereum_blue.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                    className="-ml-4"
                                />
                            </div>
                            
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">HACHI / ETH</p>                                    
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="bg-[#DEDEDE] px-2 w-fit">
                                        <p className="font-normal text-[10px] text-[#684222] text-[12px] text-opacity-50 leading-[15px]">Volatile</p>    
                                    </div>
                                    <div className="bg-[#FF7D82] px-2 w-fit ">
                                        <p className="font-normal text-[10px] text-white text-opacity-50 leading-[15px] ">+0.00%</p>    
                                    </div>
                                </div>              
                            </div> 
                        </div>               
                    </div>
                </div>
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <div className="flex items-center">
                                <Image 
                                    src="/assets/icon/logo.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                />
                                <Image 
                                    src="/assets/icon/ethereum_blue.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                    className="-ml-4"
                                />
                            </div>
                            
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">HACHI / ETH</p>                                    
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="bg-[#DEDEDE] px-2 w-fit">
                                        <p className="font-normal text-[10px] text-[#684222] text-[12px] text-opacity-50 leading-[15px]">Volatile</p>    
                                    </div>
                                    <div className="bg-[#FF7D82] px-2 w-fit ">
                                        <p className="font-normal text-[10px] text-white text-opacity-50 leading-[15px] ">+0.00%</p>    
                                    </div>
                                </div>              
                            </div> 
                        </div>               
                    </div>
                </div>
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <div className="flex items-center">
                                <Image 
                                    src="/assets/icon/logo.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                />
                                <Image 
                                    src="/assets/icon/ethereum_blue.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                    className="-ml-4"
                                />
                            </div>
                            
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">HACHI / ETH</p>                                    
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="bg-[#DEDEDE] px-2 w-fit">
                                        <p className="font-normal text-[10px] text-[#684222] text-[12px] text-opacity-50 leading-[15px]">Volatile</p>    
                                    </div>
                                    <div className="bg-[#FF7D82] px-2 w-fit ">
                                        <p className="font-normal text-[10px] text-white text-opacity-50 leading-[15px] ">+0.00%</p>    
                                    </div>
                                </div>              
                            </div> 
                        </div>               
                    </div>
                </div>
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <div className="flex items-center">
                                <Image 
                                    src="/assets/icon/logo.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                />
                                <Image 
                                    src="/assets/icon/ethereum_blue.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                    className="-ml-4"
                                />
                            </div>
                            
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">HACHI / ETH</p>                                    
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="bg-[#DEDEDE] px-2 w-fit">
                                        <p className="font-normal text-[10px] text-[#684222] text-[12px] text-opacity-50 leading-[15px]">Volatile</p>    
                                    </div>
                                    <div className="bg-[#FF7D82] px-2 w-fit ">
                                        <p className="font-normal text-[10px] text-white text-opacity-50 leading-[15px] ">+0.00%</p>    
                                    </div>
                                </div>              
                            </div> 
                        </div>               
                    </div>
                </div>
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <div className="flex items-center">
                                <Image 
                                    src="/assets/icon/logo.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                />
                                <Image 
                                    src="/assets/icon/ethereum_blue.png" 
                                    alt="Logo Icon" 
                                    width={35} // Set the desired width
                                    height={35} // Set the desired height
                                    className="-ml-4"
                                />
                            </div>
                            
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">HACHI / ETH</p>                                    
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="bg-[#DEDEDE] px-2 w-fit">
                                        <p className="font-normal text-[10px] text-[#684222] text-[12px] text-opacity-50 leading-[15px]">Volatile</p>    
                                    </div>
                                    <div className="bg-[#FF7D82] px-2 w-fit ">
                                        <p className="font-normal text-[10px] text-white text-opacity-50 leading-[15px] ">+0.00%</p>    
                                    </div>
                                </div>              
                            </div> 
                        </div>               
                    </div>
                </div>
            </div>
          </div>
      </div>
  );
};
export default Pool;