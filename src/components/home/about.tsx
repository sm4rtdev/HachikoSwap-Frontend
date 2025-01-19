import React from 'react';
import Image from "next/image";
const About: React.FC = () => {
    return (
        <div className="flex flex-col justify-center w-[80%] items-center mt-[150px]"  id="about">
            <div className=' border border-[2px] border-[#FF7D82] bg-white p-1 px-2 text-center'>
                <p className='text-[#FF7D82] font-normal text-[18px] tracking-[0.26em] leading-[23.44px]'>
                    私たちの取引プラットフォームについて
                </p>
            </div>     
            <p className='text-center text-[42px] font-[700] leading-[57.2px] text-[#684222] uppercase mt-[30px]'>
                Decentralized <span className='text-[#FF7D82] uppercase'>crypto</span> Trading Platform
            </p>
            <Image 
                src="/assets/image/computer.png" 
                alt="Avatar 1" 
                width={768.42}
                height={482}
            />
            <div className='max-w-[895px]'>
                <p className='font-dm-sans text-[19px] font-normal leading-[23.44px] text-center text-[#343434]'>
                    In the ever-evolving landscape of DeFi, HACHI emerges as a groundbreaking player, transcending the conventional boundaries of decentralized exchanges.<br />
                    HACHI is not just another decentralized trading platform; it represents a paradigm shift in the way users engage with digital assets. By combining the efficiency of a central limit orderbook with the security of blockchain technology, HACHI introduces a novel architecture that redefines the possibilities of decentralized trading.
                </p>
            </div>             
            <Image 
                src="/assets/image/read_more.png"
                alt="Avatar 1" 
                width={179.6}
                height={52.23}
                className='mt-[50px]'
            />  
        </div>
    );
};

export default About;
