import React from 'react';
import Image from "next/image";

const Sticky_Header: React.FC = () => {
    return (
        <div className='w-full h-[73px] flex flex-col  items-center justify-start container mx-auto'>
            <div className='w-full h-full bg-[#FF7D82] px-[27px] flex items-center justify-center justify-between'>
                <div className='flex justify-center items-center'>
                    <Image 
                        src="/assets/icon/logo.png" 
                        alt="Logo Icon" 
                        width={50} // Set the desired width
                        height={50} // Set the desired height
                        className="text-black" // You can still apply classes
                    />
                    <p className="font-sans text-[17px] font-[600] leading-[23.15px] text-underline-position text-decoration-skip-ink text-[#332038] ml-[15px]">
                        HachiSwap
                    </p>
                </div>  
                <div className="flex items-center justify-between pl-5 xl:pl-[150px]" >
                    <div className="hidden lg:block sm:ml-6">
                        <div className="flex space-x-2">
                            <a href="#" className="header-nav-item active">Swap</a>
                            <a href="#" className="header-nav-item">Liquidity</a>
                            <a href="#" className="header-nav-item">Lock</a>
                            <a href="#" className="header-nav-item">Vote</a>
                            <a href="#" className="header-nav-item">Rewards</a>
                            <a href="#" className="header-nav-item">Bribes</a>
                        </div>
                    </div>
                </div>              
                <div className='flex justify-center items-center'>
                    <div className='w-[204px] rounded-[24.5px] bg-[#684222] font-tt-firs-neue text-[13px] font-normal leading-[16.77px] text-[#ffffff] flex items-center justify-center text-center p-1'>
                        Lock for 2 Years (+30% CORA)
                    </div>
                    <p className="font-tt-firs-neue text-[18px] font-normal leading-[16.77px] text-left text-underline-position text-decoration-skip-ink text-[#21252D] ml-3">
                       |
                    </p>
                    <Image 
                        src="/assets/icon/logo.png" 
                        alt="logo Icon" 
                        width={22} // Set the desired width
                        height={23} // Set the desired height
                        className="text-black ml-3" // You can still apply classes
                    />
                    <p className="font-tt-firs-neue text-[13px] font-normal leading-[16.77px] text-left text-underline-position text-decoration-skip-ink text-[#21252D] ml-1">
                        22.75
                    </p>
                    <Image 
                        src="/assets/icon/ethereum.svg" 
                        alt="etjereum Icon" 
                        width={12} // Set the desired width
                        height={19.54} // Set the desired height
                        className="text-black ml-3" // You can still apply classes
                    />
                    <p className="font-tt-firs-neue text-[13px] font-normal leading-[16.77px] text-left text-underline-position text-decoration-skip-ink text-[#21252D] ml-1">
                        $1,853
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Sticky_Header;