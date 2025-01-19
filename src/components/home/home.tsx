import React from 'react';
import Image from "next/image";
const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col justify-center w-[80%] items-center mt-[150px]" id="home">
            <div className=' border border-[2px] border-[#FF7D82] bg-white p-1'>
                <p className='text-[#FF7D82] font-normal text-[18px] tracking-[0.26em] leading-[23.44px]'>
                    取引簡単＆無手数料
                </p>
            </div>
            <p className='text-center text-[54px] font-[800] leading-[67px] text-[#684222] uppercase mt-[30px]'>
                Buy & sell <span className='text-[#FF7D82] uppercase'>crypto</span>, trade with margin, place orders, and enjoy zero trading fees*
            </p>
            <p 
            className='text-[17px] font-normal leading-[22.13px] text-black mt-[40px] text-center'>
                *All spot trades incur no trading fees. Only takers pay gas fees.
            </p>
            <div className='flex items-center mt-[30px]'>
                <div style={{ position: 'relative', width: '140px', height: '56px' }}>
                    <Image 
                        src="/assets/image/avatar1.png"
                        alt="Avatar 1" 
                        width={56} // Set the desired width
                        height={56} // Set the desired height
                        className="rounded-full border-3 border-white absolute left-0"
                    />
                    <Image 
                        src="/assets/image/avatar2.png" 
                        alt="Avatar 2" 
                        width={56} // Set the desired width
                        height={56} // Set the desired height
                        className="rounded-full border-3 border-white absolute left-[30px]"
                    />
                    <Image 
                        src="/assets/image/avatar3.png" 
                        alt="Avatar 3" 
                        width={56} // Set the desired width
                        height={56} // Set the desired height
                        className="rounded-full border-3 border-white absolute left-[60px]"
                    />
                    <Image 
                        src="/assets/image/avatar4.png" 
                        alt="Avatar 4" 
                        width={56} // Set the desired width
                        height={56} // Set the desired height
                        className="rounded-full border-3 border-white absolute left-[90px]"
                    />
                </div>
                <div className='flex flex-col ml-5'> {/* Added 'flex-col' and 'ml-4' for spacing */}
                    <p className='text-[18px] font-normal leading-[23.44px] text-left text-black font-sans'>
                        <span className='font-bold'>2K+</span> ACTIVE USERS
                    </p>
                    <p className='text-left text-[14px] font-[700] leading-[18.23px] text-[#FF7D82] font-sans'>
                        20+ WALLET TYPES
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
