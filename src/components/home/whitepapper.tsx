import React from 'react';
import Image from "next/image";
const WhitePapper: React.FC = () => {
    return (
        <div className="flex flex-col justify-center w-full md:w-[80%] items-center mt-[150px]"  id="whitepapper">
            <div className=' border border-[2px] border-[#FF7D82] bg-white p-1'>
                <p className='text-[#FF7D82] font-normal text-[18px] tracking-[0.26em] leading-[23.44px]'>
                    私たちのトークンについて
                </p>
            </div>
            <p className='text-center text-[50px] font-[700] leading-[72px] text-[#684222] mt-[30px]'>
                Token Info
            </p>
            <p 
            className='text-[14px] font-normal leading-[26px] text-black mt-[40px] text-center max-w-[580px]'>
                HACHI’s token is a governance, utility, and profit share token! You can read all about it on our whitepaper!
            </p>   
            <Image 
                src="/assets/image/piechart.png" 
                alt="Avatar 1" 
                width={513}
                height={472}
                className='mt-20 p-2'
            />         
            <div className='flex flex-wrap'>
                <Image 
                    src="/assets/image/Group1.png" 
                    alt="Avatar 1" 
                    width={513}
                    height={472}
                    className='w-1/2 px-2 xl:px-5 lg:w-1/4 mt-3'
                />
                <Image 
                    src="/assets/image/Group2.png" 
                    alt="Avatar 1" 
                    width={513}
                    height={472}
                    className='w-1/2 px-2 xl:px-5 lg:w-1/4 mt-3'
                />
                <Image 
                    src="/assets/image/Group3.png" 
                    alt="Avatar 1" 
                    width={513}
                    height={472}
                    className='w-1/2 px-2 xl:px-5 lg:w-1/4 mt-3'
                />
                <Image 
                    src="/assets/image/Group4.png" 
                    alt="Avatar 1" 
                    width={513}
                    height={472}
                    className='w-1/2 px-2 xl:px-5 lg:w-1/4 mt-3'
                />   
            </div>
        </div>
    );
};

export default WhitePapper;
