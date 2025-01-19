import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faClose, faDatabase, faWarning } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const Claim: React.FC<{ isOpen: boolean; onClose: () => void; onClaim: (result: string) => void }> = ({ isOpen, onClose, onClaim }) => {
  
  return (

      <div className={`fixed inset-0 backdrop-blur-md bg-[#0000008F]  ${isOpen ? 'flex' : 'hidden'} justify-center items-center`}>
          <div className="flex flex-col w-[483px] h-[496px] rounded-lg border border-white border-[3px] items-center bg-white bg-opacity-25 relative">
            <div className="flex border-b-[3px] w-full justify-center items-center h-[30%] space-x-2 pb-10 items-center">
                <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#FF7D82', fontSize: '20px' }}/>
                <p className="font-[600] text-[#21252D] text-[20px]">Claim Earnings</p>                   
            </div>
            <div className="flex flex-col border-b-[3px] w-full h-[70%] justify-center items-center relative px-10">
                <button className="flex flex-col rounded-lg items-center space-y-1 justify-center text-[14px] bg-white py-3 w-2/3 absolute -top-14 left-1/2 transofrom -translate-x-1/2">
                    <p className="font-[600] text-[#21252D] text-[18px]">Liquidity Earnings</p> 
                    <p className="font-[400] text-[#21252D] text-[14px] text-opacity-75">Pools and Emissions Fees</p>  
                    <div className="flex text-[12px] text-[#21252D] px-1 text-opacity-75 items-center ">
                        <FontAwesomeIcon icon={faWarning} style={{ color: '#9099AA', fontSize: '12px', marginRight:'5px'}}/>
                        <p className="font-[400] text-[#9099AA] text-[12px] text-opacity-75">About Earnings</p>  
                    </div>
                </button>
                <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col items-start space-y-2">
                        <div className="flex space-x-1 items-center">
                            <FontAwesomeIcon icon={faDatabase} style={{ color: '#FF7D82', fontSize: '15px', marginRight:'5px'}}/>
                            <p className="font-[400] text-[#FFFFFF] text-[15px]">Pool Fees</p>  
                        </div>
                        <p className="font-[400] text-[#FFFFFF] text-[13px] text-left">Your earned fees from Liquidity Pools</p>
                        <div className="flex space-x-1 items-center">                            
                            <div className="flex items-center">
                                <Image 
                                    src="/assets/icon/logo.png" 
                                    alt="Logo Icon" 
                                    width={23} // Set the desired width
                                    height={23} // Set the desired height                                    
                                />
                                <Image 
                                    src="/assets/icon/ethereum_blue.png" 
                                    alt="Logo Icon" 
                                    width={23} // Set the desired width
                                    height={23} // Set the desired height
                                    className="-ml-3"
                                />
                                <Image 
                                    src="/assets/icon/logo.png" 
                                    alt="Logo Icon" 
                                    width={23} // Set the desired width
                                    height={23} // Set the desired height
                                    className="-ml-3"
                                />
                            </div>
                            <p className="font-[600] text-[#FFFFFF] text-[20px]">Pool Fees</p>  
                        </div>
                    </div>
                    <div className="px-10 h-full">
                        <Image 
                            src="/assets/icon/border.png" 
                            alt="Logo Icon" 
                            width={3} // Set the desired width
                            height={118} // Set the desired height
                        />
                    </div>                    
                    <div className="flex flex-col items-start  space-y-2">
                        <div className="flex space-x-1 items-center">
                            <FontAwesomeIcon icon={faDatabase} style={{ color: '#FF7D82', fontSize: '15px', marginRight:'5px'}}/>
                            <p className="font-[400] text-[#FFFFFF] text-[15px]">Pool Fees</p>  
                        </div>
                        <p className="font-[400] text-[#FFFFFF] text-[13px] text-left">Your earned fees from Liquidity Pools</p>
                        <div className="flex space-x-1 items-center justify-center"> 
                            <Image 
                                src="/assets/icon/logo.png" 
                                alt="Logo Icon" 
                                width={23} // Set the desired width
                                height={23} // Set the desired height
                            /> 
                            <p className="font-[600] text-[#FFFFFF] text-[20px]">Pool Fees</p>  
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pt-3 w-full">
                    <button className="flex rounded-lg items-center justify-center text-[16px] font-[700] text-[#FDDEDF] bg-[#543009] py-2 w-full mt-5 border border-white" onClick={() => onClaim("emission")} >
                        Claim Emissions
                    </button>
                    <button className="flex rounded-lg items-center justify-center text-[16px] font-[700] text-[#FDDEDF] bg-[#543009] py-2 w-full mt-3 border border-white" onClick={() => onClaim("fee")}>
                        Claim Fees
                    </button> 
                </div>
                         
            </div>
            <button className="absolute top-2 right-2 bg-white rounded-full flex justify-center items-center w-4 h-4" onClick={onClose}>
                <FontAwesomeIcon icon={faClose} style={{ color: '#FF7D82', fontSize: '12px' }}/>
            </button>
            
          </div>
      </div>
  );
};
export default Claim;