import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faClose, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

const Confirm: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {  
  return (

      <div className={`fixed inset-0 bg-[#965557] ${isOpen ? 'flex' : 'hidden'} justify-center items-center dark:bg-[#512E32]`}>
          <div className="flex flex-col w-[570px] h-[726px] rounded-lg border border-white border-[3px] items-center bg-white bg-opacity-25 relative dark:bg-[#4A1F27]">
            <div className="flex border-b-[3px] w-full justify-center items-center h-[20%] pb-10">
                <p className="font-[700] text-black text-[20px] pb-2 dark:text-white">Confirm Swap</p>
            </div>
            <div className="flex w-full h-[80%] space-y-2 relative flex-col px-10 pt-20">
                <button className="flex flex-col rounded-lg items-center space-x-2 justify-center text-[14px] bg-white py-5 w-[90%] absolute -top-12 left-1/2 transofrom -translate-x-1/2  dark:bg-[#71373C] dark:border-[3px] border-white">
                    <p className="font-[700] text-[#FF7D82] text-[25px]">Buy 0.18913356 ETH</p>
                    <p className="font-[700] text-[#21252D] text-[15px] text-opacity-50 dark:text-white dark:text-opacity-50">Sell 234.34  HACHI</p>
                </button>
                <div className="w-full border-b border-b-white flex justify-between items-center pb-2">
                    <div className="flex w-1/2 flex-col">
                        <p className="font-[600] text-[#21252D] text-[15px] dark:text-white ">Price Impact</p>
                        <p className="font-[600] text-[#21252D] text-[13px] text-opacity-50 dark:text-white dark:text-opacity-50">The impact your trade has on the
                        market price of this pool.</p>
                    </div>
                    <p className="font-[700] text-[#21252D] text-[20px] dark:text-white">-0.00%</p>
                </div>                
                <div className="w-full border-b border-b-white flex justify-between items-center pb-2">
                    <div className="flex w-1/2 flex-col">
                        <p className="font-[600] text-[#21252D] text-[15px] dark:text-white ">Min. Received after Slippage</p>
                        <p className="font-[600] text-[#21252D] text-[13px] text-opacity-50 dark:text-white dark:text-opacity-50">The minimum amount your are
                        guaranteed to receive.</p>
                    </div>
                    <p className="font-[700] text-[#21252D] text-[20px] dark:text-white">0.18913356 ETH</p>
                </div>
                <div className="w-full border-b border-b-white flex justify-between items-center pb-2">
                    <div className="flex w-1/2 flex-col">
                        <p className="font-[600] text-[#21252D] text-[15px] dark:text-white">Network Fee</p>
                        <p className="font-[600] text-[#21252D] text-[13px] text-opacity-50 dark:text-white dark:text-opacity-50">The fees needed to make 
                        this transaction happen.</p>
                    </div>
                    <p className="font-[700] text-[#21252D] text-[20px] dark:text-white">~$0.173332</p>
                </div>
                <div className="w-full flex justify-between items-center py-3">
                    <p className="font-[600] text-[#21252D] text-[15px] dark:text-white">Route</p>                        
                    <button className="flex rounded-lg items-center  justify-center text-[14px] bg-white text-opacity-50 px-4 py-1 text-[#21252D]">
                        View
                    </button>
                </div>
                <div className="flex flex-col space-y-5 pt-6">
                    <button className="flex w-full rounded-lg items-center  justify-between text-[15px] font-[600] bg-white px-4 py-4 text-[#21252D] dark:bg-[#71373C] dark:text-white">
                        <p>Recipient</p>
                        <div className="flex items-center space-x-1">
                            <p className="text-[#FF4465]">0x77...3b5c</p>
                            <FontAwesomeIcon icon={faNotesMedical} style={{ color: '#FF4465', fontSize: '15px' }}/>
                        </div>

                    </button>
                    <button className="flex w-full rounded-lg items-center  justify-center font-[700] text-[16px] bg-[#543009] py-3 text-white  dark:bg-[#C37623] dark:border border-[#FEE8E9]" onClick={() => {onClose()}}>
                        Trade Now
                        <FontAwesomeIcon icon={faArrowRight} style={{ color: 'white', fontSize: '20px', marginLeft:'20px' }}/>
                    </button>
                </div>                

            </div>

            <button className="absolute top-2 right-2 bg-white rounded-full flex justify-center items-center w-4 h-4 " onClick={onClose}>
                <FontAwesomeIcon icon={faClose} style={{ color: '#FF7D82', fontSize: '12px' }}/>
            </button>
            
          </div>
          
      </div>
  );
};
export default Confirm;