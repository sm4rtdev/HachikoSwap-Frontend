import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose, faGasPump, faGear } from '@fortawesome/free-solid-svg-icons';
const Setting: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {

  return (

      <div className={`fixed inset-0 bg-[#965557] ${isOpen ? 'flex' : 'hidden'} justify-center items-center dark:bg-[#512E32]`}>
          <div className="flex flex-col w-[523px] h-[474px] rounded-lg border border-white border-[3px] items-center bg-white bg-opacity-25 relative dark:bg-[#4A1F27]">
           
            <div className="flex border-b-[3px] w-full justify-center items-center h-[20%] relative">
                <p className="font-[400] text-[#21252D] text-[20px] pb-2 dark:text-white">Advanced Settings</p>
            </div>
            <div className="flex border-b-[3px] w-full h-[30%] justify-center space-x-2 items-center relative">
                <button className="flex rounded-lg items-center space-x-2 justify-center text-[14px] bg-white py-2 w-1/2 absolute -top-5 left-1/2 transofrom -translate-x-1/2 dark:bg-[#71373C] dark:border-[3px] border-white">
                    <FontAwesomeIcon icon={faGasPump} style={{ color: '#FF4465', fontSize: '15px', marginLeft:'5px'}}/>
                    <p className="font-[400] text-[#21252D] text-[14px] dark:text-white">Gas Price</p>  
                    <div className="flex bg-[#DCE5EE] rounded-lg text-[12px] text-[#21252D] px-1 ">
                        Gwei
                    </div>
                </button>
                <div className="flex flex-col space-y-3 items-center">
                    <p className="font-normal text-[18px] text-[#21252D] dark:text-white">Rapid</p>
                    <div className="flex bg-white rounded-lg text-[12px] text-[#21252D] px-1">
                        ~$0.193
                    </div>
                </div>
                <div className="flex flex-col space-y-3 items-center">
                    <p className="font-normal text-[18px] text-[#21252D] text-[#FF4465] border-b border-[#FF4465]">Fast</p>
                    <div className="flex rounded-lg text-[12px] text-[#21252D] px-1 bg-[#FF7D82] text-white">
                        ~$0.234
                    </div>
                </div>
                <div className="flex flex-col space-y-3 items-center">
                    <p className="font-normal text-[18px] text-[#21252D] dark:text-white">Standard</p>
                    <div className="flex bg-white rounded-lg text-[12px] text-[#21252D] px-1">
                        ~$0.193
                    </div>
                </div>
                <div className="flex flex-col space-y-3 items-center">
                    <p className="font-normal text-[18px] text-[#21252D] dark:text-white">Custom</p>
                    <div className="flex bg-white rounded-lg text-[12px] text-[#21252D] px-1">
                        Gwei
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full h-[50%] px-10 items-center justify-center relative">
                <button className="flex rounded-lg items-center space-x-2 justify-center text-[14px] bg-white py-2 w-1/2 absolute -top-5 left-1/2 transofrom -translate-x-1/2 dark:bg-[#71373C] dark:border-[3px] border-white">
                    <FontAwesomeIcon icon={faGear} style={{ color: '#FF4465', fontSize: '15px', marginLeft:'5px'}}/>
                    <p className="font-[400] text-[#21252D] text-[14px] dark:text-white">Slippage Tolerance</p>  
                    <div className="flex bg-[#DCE5EE] rounded-lg text-[12px] text-[#21252D] px-1">
                        %
                    </div>
                </button>
                <div className="flex justify-center space-x-2 items-center mt-5">
                    <div className="flex flex-col space-y-3 items-center">
                        <p className="font-normal text-[18px] text-[#21252D] dark:text-white">Rapid</p>
                        <div className="flex bg-white rounded-lg text-[12px] text-[#21252D] px-1">
                            ~$0.193
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center">
                        <p className="font-normal text-[18px] text-[#21252D] text-[#FF4465] border-b border-[#FF4465]">Fast</p>
                        <div className="flex rounded-lg text-[12px] text-[#21252D] px-1 bg-[#FF7D82] text-white">
                            ~$0.234
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center">
                        <p className="font-normal text-[18px] text-[#21252D] dark:text-white">Standard</p>
                        <div className="flex bg-white rounded-lg text-[12px] text-[#21252D] px-1">
                            ~$0.193
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center">
                        <p className="font-normal text-[18px] text-[#21252D] dark:text-white">Custom</p>
                        <div className="flex bg-white rounded-lg text-[12px] text-[#21252D] px-1">
                            Gwei
                        </div>
                    </div>
                </div>
                <button className="flex rounded-lg items-center justify-center text-[14px] text-[#FDDEDF] bg-[#543009] mt-2 py-2 w-full mt-3 dark:bg-[#C37623] dark:border border-[#FEE8E9]">
                    Reset to Default
                </button>
            </div>
            <button className="absolute top-2 right-2 bg-white rounded-full flex justify-center items-center w-4 h-4" onClick={onClose}>
                <FontAwesomeIcon icon={faClose} style={{ color: '#FF7D82', fontSize: '12px' }}/>
            </button>
          </div>
      </div>
  );
};
export default Setting;