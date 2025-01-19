import React from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";
const Header: React.FC = () => {
    const router = useRouter();
    return (
        <div className="flex justify-between items-center pt-[23px] pl-[105px] px-[80px]">
            <Image 
                src="/assets/icon/logo.png" 
                alt="logo Icon" 
                width={53.66}
                height={53.66} 
                className="text-black"
            />
            <div className="flex items-center justify-between" >
                <div className="hidden lg:block md:ml-6">
                    <div className="flex lg:space-x-14 md:space-x-5">
                        <a href="#home" className=" font-[600] text-[15px] font-sans text-[#684222]">Home</a>
                        <a href="#about" className=" font-[600] text-[15px] font-sans text-[#684222]">About</a>
                        <a href="#works" className=" font-[600] text-[15px] font-sans text-[#684222]">How it Work</a>
                        <a href="#whitepapper" className=" font-[600] text-[15px] font-sans text-[#684222]">Whitepeper</a>
                        <a href="#team" className=" font-[600] text-[15px] font-sans text-[#684222]">Tokenomics</a>
                    </div>
                </div>
            </div>
            <button
                onClick={() => router.push("/swap")}
                onTouchStart={() => router.push("/swap")}
            >
                <Image 
                    src="/assets/image/trade_button.png" 
                    alt="logo Icon" 
                    width={167} // Set the desired width
                    height={40.14} // Set the desired height
                    className="text-black border border-[#FFCED0]"
                />           
            </button>
        </div>
    );
};
export default Header;