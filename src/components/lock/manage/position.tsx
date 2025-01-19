import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
const Position: React.FC = () => {
    return (
        <div className="flex flex-col w-full space-y-2 relative">              
            <div className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#4A1F27] dark:bg-opacity-50">
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
                    <div className="rounded-xl bg-white p-1 px-3 dark:bg-[#4A1F27]">
                    <p className="font-sans text-[12px] font-normal leading-[16.36px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                        <span className="text-[#FF4465]">$ </span> 0.00
                    </p>
                    </div>    
                </div>
                <div className="flex flex-col items-end space-y-1">
                    <p className="font-sans text-[12px] font-normal leading-[16.06px] text-[#21252D] text-opacity-50 dark:text-white dark:text-opacity-50">
                    Balance: 234.34 HACHI
                    </p>
                    <div className="rounded-xl bg-[#684222] p-1 px-3 dark:bg-[#504C4C]">
                        <p className="font-sans text-[12px] font-normal leading-[16.36px] text-white">
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
                src="/assets/icon/lock-white.png" 
                alt="Logo Icon" 
                width={45} // Set the desired width
                height={45} // Set the desired height
                />
            </button>
            <div className="flex bg-white rounded-md p-5 bg-opacity-70 items-center justify-start space-x-3 dark:bg-[#4A1F27] dark:bg-opacity-50">
                <div className='flex rounded-full bg-white p-5 items-center justify-center dark:bg-[#4A1F27]'>
                    <FontAwesomeIcon icon={faCalendarDay} className="text-[#FF7D82] text-[26px]"/>
                </div>          
                <div className='flex flex-col w-full'>
                    <div className="flex w-full justify-between  pb-2">
                    <p className="font-sans text-[14px] font-normal leading-[19.06px] text-[#21252D] dark:text-white">
                        Extend
                    </p>
                    <p className="font-sans text-[14px] font-[600] leading-[27.06px] text-[#FF7D82]">
                        1 Day
                    </p>
                    </div>
                    <div className="flex flex-col items-center py-3">
                        <input
                        type="range"
                        min="0"
                        max="100"
                        value={50}
                        className="slider w-full h-1 bg-[#19376D] dark:bg-[#FEE8E9] dark:bg-opacity-25 bg-opacity-25 rounded-lg cursor-pointer" 
                        readOnly
                        />                    
                    </div>
                    <div className="flex w-full justify-between pt-2">
                    <div className="flex items-center justify-end rounded-full p-2 py-1 text-white bg-custom-gradient text-[12px] font-[400] font-sans">1 Day</div>
                    <div className="flex items-center justify-end rounded-full p-2 py-1 text-[#21252D] bg-[#DCE5EE] text-[12px] font-[400] font-sans">1 Week</div> 
                    <div className="flex items-center justify-end rounded-full p-2 py-1 text-[#21252D] bg-[#DCE5EE] text-[12px] font-[400] font-sans">1 Month</div> 
                    <div className="flex items-center justify-end rounded-full p-2 py-1 text-[#21252D] bg-[#DCE5EE] text-[12px] font-[400] font-sans">1 Year</div> 
                    <div className="flex items-center justify-end rounded-full p-2 py-1 text-[#21252D] bg-[#DCE5EE] text-[12px] font-[400] font-sans">2 Years</div> 
                    </div>
                </div>       
            </div>
        </div>
    );
};
export default Position;