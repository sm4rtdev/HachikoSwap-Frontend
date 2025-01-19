import React from 'react';
import Image from "next/image";
const Footer: React.FC = () => {
    return (
        <div
            className='flex flex-col items-center' 
            style={{
            backgroundImage:  `url('./assets/image/footer.png')`,
            backgroundSize: 'cover', // Cover the entire area
            width:'100%',
            height:'441.39px',
            marginTop:'200px',
            paddingTop:'38px'
        }}>            
            <Image 
                src="/assets/icon/footer-logo.png"
                alt="Avatar 1" 
                width={128}
                height={118}
            /> 
            <p className="font-sans text-[36px] font-bold leading-[46px] underline decoration-transparent text-[#FFFFFF] mt-2 uppercase">
                Hachi Swap
            </p>
            <p className="font-sans text-[12px] font-normal leading-[26px] underline decoration-transparent text-[#FFFFFF] mt-3 text-center">
                Let’s build a future rooted in trust, innovation, and community together.
            </p>
            <div className='flex items-center text-center w-[278.46px] h-[69.09px] justify-between mt-7'>
                <div className='w-[74.62px] h-[69.09px] flex items-center justify-center border border-[#FF7D82]'>
                    <Image 
                        src="/assets/icon/footer-icon (1).png"
                        alt="Avatar 1" 
                        width={40}
                        height={40}
                    /> 
                </div>
                <div className='w-[74.62px] h-[69.09px] flex items-center justify-center border border-[#FF7D82]'>
                    <Image 
                        src="/assets/icon/footer-icon (2).png"
                        alt="Avatar 1" 
                        width={40}
                        height={40}
                    />                     
                </div>
                <div className='w-[74.62px] h-[69.09px] flex items-center justify-center border border-[#FF7D82]'>
                    <Image 
                        src="/assets/icon/footer-icon (3).png"
                        alt="Avatar 1" 
                        width={40}
                        height={40}
                    />                     
                </div>     

            </div>
            <p className="font-sans text-[14px] font-normal leading-[26px] underline decoration-transparent text-[#FFFFFF] mt-3">
                Copyrighted @ HACHI SWAP.com 2024
            </p>            
        </div>
    );
};
export default Footer;