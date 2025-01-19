import React from 'react';
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <div className='w-full h-[117px] flex flex-col  items-center justify-start'>
            <div className='container mx-auto h-full'>
                <div className='w-full h-full rounded-t-[20px] rounded-b-none bg-[#FF7D82] flex items-center justify-center justify-between p-5'>
                    <div className='flex items-center justify-center space-x-3'>
                        <Image 
                            src="/assets/image/logo.png" 
                            alt="Logo Icon" 
                            width={55} // Set the desired width
                            height={55} // Set the desired height
                            className="text-black" // You can still apply classes
                        />
                        <div className='flex flex-col items-start space-y-1'>
                            <p className="font-tt-firs-neue text-[14px] font-normal leading-[19.06px] text-underline-position text-left text-decoration-skip-ink text-[#332038]">
                                Hachiswap © All rights reserved
                            </p>
                            <p className="font-tt-firs-neue text-[11px] font-normal leading-[14.19px] text-underline-position text-left  text-decoration-skip-ink text-[#ffffff] px-[10px] py-[3px] border border-white rounded-[100px] dark:border-[#4B2027] text-[#4B2027]">
                                Version: 837abc271
                            </p> 
                        </div>
                    </div>
                    <div className="flex items-center justify-between space-x-2 px-5">
                        <a href="#">
                            <Image 
                                src="/assets/icon/eagle.png" 
                                alt="Logo Icon" 
                                width={32} // Set the desired width
                                height={32} // Set the desired height
                                className="text-black" // You can still apply classes
                            />
                        </a>        
                        <a href="#">
                            <Image 
                                src="/assets/icon/gecho.png" 
                                alt="Logo Icon" 
                                width={32} // Set the desired width
                                height={32} // Set the desired height
                                className="text-black" // You can still apply classes
                            />
                        </a>         
                        <a href="#">
                            <Image 
                                src="/assets/icon/twitter.png" 
                                alt="Logo Icon" 
                                width={32} // Set the desired width
                                height={32} // Set the desired height
                                className="text-black" // You can still apply classes
                            />
                        </a>         
                        <a href="#">
                            <Image 
                                src="/assets/icon/discord.png" 
                                alt="Logo Icon" 
                                width={32} // Set the desired width
                                height={32} // Set the desired height
                                className="text-black" // You can still apply classes
                            />
                        </a>         
                        <a href="#">
                            <Image 
                                src="/assets/icon/telegram.png" 
                                alt="Logo Icon" 
                                width={32} // Set the desired width
                                height={32} // Set the desired height
                                className="text-black" // You can still apply classes
                            />
                        </a>         
                        <a href="#">
                            <Image 
                                src="/assets/icon/medium.png" 
                                alt="Logo Icon" 
                                width={32} // Set the desired width
                                height={32} // Set the desired height
                                className="text-black" // You can still apply classes
                            />
                        </a>         
                        <a href="#">
                            <Image 
                                src="/assets/icon/book.png" 
                                alt="Logo Icon" 
                                width={32} // Set the desired width
                                height={32} // Set the desired height
                                className="text-black" // You can still apply classes
                            />
                        </a>                    
                    </div>
            </div>
            </div>
           
        </div>
    );
};
export default Footer;