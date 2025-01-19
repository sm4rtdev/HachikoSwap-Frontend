import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose, faFolder, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
const Netwrok: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  
  return (
      <div className={`fixed inset-0 bg-[#965557] ${isOpen ? 'flex' : 'hidden'} justify-center items-center dark:bg-[#512E32]`}>
          <div className="flex flex-col w-[465px] h-[611px] rounded-lg border border-white border-[3px] items-center bg-white bg-opacity-25 p-10  pt-[50px] space-y-4 relative dark:bg-[#4A1F27]">
            <button className="absolute top-2 right-2 bg-white rounded-full flex justify-center items-center w-4 h-4" onClick={onClose}>
                <FontAwesomeIcon icon={faClose} style={{ color: '#FF7D82', fontSize: '12px' }}/>
            </button>
            <p className="font-[400] text-[#21252D] text-[20px] pb-2 dark:text-white">Select Network</p>            
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
            <div className="flex flex-col space-y-2 w-full">
                <div className="flex w-full space-x-1">
                    <div className="flex p-2 space-x-1 items-center bg-white bg-opacity-50 rounded-lg w-full dark:bg-[#71373C]">
                        <Image 
                            src="/assets/icon/ethereum_blue.png" 
                            alt="Logo Icon" 
                            width={25} // Set the desired width
                            height={25} // Set the desired height
                        />
                        <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                    </div>
                    <div className="flex p-2 space-x-1 items-center bg-white bg-opacity-50 rounded-lg w-full dark:bg-[#71373C]">
                        <Image 
                            src="/assets/icon/ethereum_blue.png" 
                            alt="Logo Icon" 
                            width={25} // Set the desired width
                            height={25} // Set the desired height
                        />
                        <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                    </div>
                    <div className="flex p-2 space-x-1 items-center bg-white bg-opacity-50 rounded-lg w-full dark:bg-[#71373C]">
                        <Image 
                            src="/assets/icon/ethereum_blue.png" 
                            alt="Logo Icon" 
                            width={25} // Set the desired width
                            height={25} // Set the desired height
                        />
                        <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                    </div>
                    <div className="flex p-2 space-x-1 items-center bg-white bg-opacity-50 rounded-lg w-full dark:bg-[#71373C]">
                        <Image 
                            src="/assets/icon/ethereum_blue.png" 
                            alt="Logo Icon" 
                            width={25} // Set the desired width
                            height={25} // Set the desired height
                        />
                        <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                    </div>
                </div>
                <div className="flex w-full space-x-1">
                    <div className="flex p-2 space-x-1 items-center bg-white bg-opacity-50 rounded-lg w-full dark:bg-[#71373C]">
                        <Image 
                            src="/assets/icon/ethereum_blue.png" 
                            alt="Logo Icon" 
                            width={25} // Set the desired width
                            height={25} // Set the desired height
                        />
                        <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                    </div>
                    <div className="flex p-2 space-x-1 items-center bg-white bg-opacity-50 rounded-lg w-full dark:bg-[#71373C]">
                        <Image 
                            src="/assets/icon/ethereum_blue.png" 
                            alt="Logo Icon" 
                            width={25} // Set the desired width
                            height={25} // Set the desired height
                        />
                        <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                    </div>
                    <div className="flex p-2 space-x-1 items-center bg-white bg-opacity-50 rounded-lg w-full dark:bg-[#71373C]">
                        <Image 
                            src="/assets/icon/ethereum_blue.png" 
                            alt="Logo Icon" 
                            width={25} // Set the desired width
                            height={25} // Set the desired height
                        />
                        <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                    </div>
                    <div className="flex p-2 space-x-1 items-center bg-white bg-opacity-50 rounded-lg w-full dark:bg-[#71373C]">
                        <Image 
                            src="/assets/icon/ethereum_blue.png" 
                            alt="Logo Icon" 
                            width={25} // Set the desired width
                            height={25} // Set the desired height
                        />
                        <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-2 w-full overflow-y-auto scrollbar h-[300px] px-1">
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <Image 
                                src="/assets/icon/ethereum_blue.png" 
                                alt="Logo Icon" 
                                width={35} // Set the desired width
                                height={35} // Set the desired height
                            />
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                                    <FontAwesomeIcon icon={faPlusCircle} style={{ color: '#FF7D82', fontSize: '12px' }}/>
                                </div>
                                <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                    <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">HACHI Finace</p>    
                                </div>
                                                        
                            </div> 
                        </div>
                        <div className="flex flex-col space-y-1 items-end">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faFolder} style={{ color: '#FF7D82', fontSize: '14px' }}/>
                                <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                            </div>
                            <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">$35.15</p>    
                            </div>
                                                    
                        </div> 
                                               
                    </div>
                </div>
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <Image 
                                src="/assets/icon/ethereum_blue.png" 
                                alt="Logo Icon" 
                                width={35} // Set the desired width
                                height={35} // Set the desired height
                            />
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                                    <FontAwesomeIcon icon={faPlusCircle} style={{ color: '#FF7D82', fontSize: '12px' }}/>
                                </div>
                                <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                    <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">HACHI Finace</p>    
                                </div>
                                                        
                            </div> 
                        </div>
                        <div className="flex flex-col space-y-1 items-end">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faFolder} style={{ color: '#FF7D82', fontSize: '14px' }}/>
                                <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                            </div>
                            <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">$35.15</p>    
                            </div>
                                                    
                        </div> 
                                               
                    </div>
                </div>
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <Image 
                                src="/assets/icon/ethereum_blue.png" 
                                alt="Logo Icon" 
                                width={35} // Set the desired width
                                height={35} // Set the desired height
                            />
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                                    <FontAwesomeIcon icon={faPlusCircle} style={{ color: '#FF7D82', fontSize: '12px' }}/>
                                </div>
                                <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                    <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">HACHI Finace</p>    
                                </div>
                                                        
                            </div> 
                        </div>
                        <div className="flex flex-col space-y-1 items-end">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faFolder} style={{ color: '#FF7D82', fontSize: '14px' }}/>
                                <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                            </div>
                            <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">$35.15</p>    
                            </div>
                                                    
                        </div> 
                                               
                    </div>
                </div>
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <Image 
                                src="/assets/icon/ethereum_blue.png" 
                                alt="Logo Icon" 
                                width={35} // Set the desired width
                                height={35} // Set the desired height
                            />
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                                    <FontAwesomeIcon icon={faPlusCircle} style={{ color: '#FF7D82', fontSize: '12px' }}/>
                                </div>
                                <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                    <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">HACHI Finace</p>    
                                </div>
                                                        
                            </div> 
                        </div>
                        <div className="flex flex-col space-y-1 items-end">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faFolder} style={{ color: '#FF7D82', fontSize: '14px' }}/>
                                <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                            </div>
                            <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">$35.15</p>    
                            </div>
                                                    
                        </div> 
                                               
                    </div>
                </div>
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <Image 
                                src="/assets/icon/ethereum_blue.png" 
                                alt="Logo Icon" 
                                width={35} // Set the desired width
                                height={35} // Set the desired height
                            />
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                                    <FontAwesomeIcon icon={faPlusCircle} style={{ color: '#FF7D82', fontSize: '12px' }}/>
                                </div>
                                <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                    <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">HACHI Finace</p>    
                                </div>
                                                        
                            </div> 
                        </div>
                        <div className="flex flex-col space-y-1 items-end">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faFolder} style={{ color: '#FF7D82', fontSize: '14px' }}/>
                                <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                            </div>
                            <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">$35.15</p>    
                            </div>
                                                    
                        </div> 
                                               
                    </div>
                </div>
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <Image 
                                src="/assets/icon/ethereum_blue.png" 
                                alt="Logo Icon" 
                                width={35} // Set the desired width
                                height={35} // Set the desired height
                            />
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                                    <FontAwesomeIcon icon={faPlusCircle} style={{ color: '#FF7D82', fontSize: '12px' }}/>
                                </div>
                                <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                    <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">HACHI Finace</p>    
                                </div>
                                                        
                            </div> 
                        </div>
                        <div className="flex flex-col space-y-1 items-end">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faFolder} style={{ color: '#FF7D82', fontSize: '14px' }}/>
                                <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                            </div>
                            <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">$35.15</p>    
                            </div>
                                                    
                        </div> 
                                               
                    </div>
                </div>
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <Image 
                                src="/assets/icon/ethereum_blue.png" 
                                alt="Logo Icon" 
                                width={35} // Set the desired width
                                height={35} // Set the desired height
                            />
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                                    <FontAwesomeIcon icon={faPlusCircle} style={{ color: '#FF7D82', fontSize: '12px' }}/>
                                </div>
                                <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                    <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">HACHI Finace</p>    
                                </div>
                                                        
                            </div> 
                        </div>
                        <div className="flex flex-col space-y-1 items-end">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faFolder} style={{ color: '#FF7D82', fontSize: '14px' }}/>
                                <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                            </div>
                            <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">$35.15</p>    
                            </div>
                                                    
                        </div> 
                                               
                    </div>
                </div>
                <div className="flex rouneded-lg">
                    <div className="flex p-1 space-x-1 items-center bg-opacity-50 rounded-lg w-full  border-2 border-white p-3 justify-between">
                        <div className="flex itmes-center space-x-2">
                            <Image 
                                src="/assets/icon/ethereum_blue.png" 
                                alt="Logo Icon" 
                                width={35} // Set the desired width
                                height={35} // Set the desired height
                            />
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-1">
                                    <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                                    <FontAwesomeIcon icon={faPlusCircle} style={{ color: '#FF7D82', fontSize: '12px' }}/>
                                </div>
                                <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                    <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">HACHI Finace</p>    
                                </div>
                                                        
                            </div> 
                        </div>
                        <div className="flex flex-col space-y-1 items-end">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faFolder} style={{ color: '#FF7D82', fontSize: '14px' }}/>
                                <p className="font-normal text-[12px] text-[#21252D] dark:text-white">Etherem</p>
                            </div>
                            <div className="bg-white px-2 w-fit dark:bg-[#878282] rounded-lg ">
                                <p className="font-normal text-[12px] text-[#21252D] text-opacity-50 leading-[15px] dark:text-white">$35.15</p>    
                            </div>
                                                    
                        </div> 
                                               
                    </div>
                </div>

                
            </div>
          </div>
      </div>
  );
};
export default Netwrok;