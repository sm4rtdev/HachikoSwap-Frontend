    import React from 'react';
    import Image from "next/image";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
    const Stake: React.FC = () => {
        return (
            <div className="flex flex-col w-full space-y-4 pt-5">      
                <div className="flex bg-[#FF7D82] border border-2 border-[#FF4465] justify-start w-full items-center rounded-xl">
                    <FontAwesomeIcon icon={faArrowRight} className="text-white  stroke-effect text-[14px] p-[15px] px-[20px]"/>
                    <p className="font-sans text-white font-[400] text-[12px] w-5/6">Stake your LP’s to get better incomes!</p>
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
                </div>
            </div>
        );
    };
    export default Stake;