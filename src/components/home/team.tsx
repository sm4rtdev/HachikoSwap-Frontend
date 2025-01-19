import React from 'react';
import Image from "next/image";
const Team: React.FC = () => {
    return (
        <div className="flex flex-col justify-center w-full md:w-[80%] items-center mt-[150px]"  id="team">
            <div className=' border border-[2px] border-[#FF7D82] bg-white p-1'>
                <p className='text-[#FF7D82] font-normal text-[18px] tracking-[0.26em] leading-[23.44px]'>
                    私たちのトークンについて
                </p>
            </div>
            <p className='text-center text-[50px] font-[700] leading-[72px] text-[#684222] mt-[25px]'>
                MEET THE TEAM
            </p>
            <p className='text-[14px] font-normal leading-[26px] text-black mt-1 text-center'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.
            </p>       
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 text-[#000000] mt-14">
                <div className=' border border-[#543009] flex flex-col items-center text-center p-6'>
                    <Image 
                        src="/assets/image/Ellipse (1).png" 
                        alt="Avatar 1" 
                        width={66}
                        height={66}
                    /> 
                    <p className="font-sans text-[20.8px] font-bold leading-[22.1px] underline decoration-transparent text-[#543009] mt-2">
                        Anthony Mclaire
                    </p>
                    <p className="font-sans text-[15.6px] font-normal leading-[22.1px] underline decoration-transparent text-[#FF7D82] mt-1">
                        Project Manager
                    </p>
                    <p className="w-[342px] md:w-[242px] h-[57px] font-sans text-[14px] font-light leading-[19.07px] text-center underline decoration-transparent text-[#000000] mt-4">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                    </p>
                    <div className='flex items-center text-center w-[137px] h-[41px] justify-between mt-4'>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (1).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (2).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (3).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />  
                        </div>                        
                    </div>
                </div>
                <div className=' border border-[#543009] flex flex-col items-center text-center p-6'>
                    <Image 
                        src="/assets/image/Ellipse (4).png" 
                        alt="Avatar 1" 
                        width={66}
                        height={66}
                    />
                    <p className="font-sans text-[20.8px] font-bold leading-[22.1px] underline decoration-transparent text-[#543009] mt-2">
                        Anthony Mclaire
                    </p>
                    <p className="font-sans text-[15.6px] font-normal leading-[22.1px] underline decoration-transparent text-[#FF7D82] mt-1">
                        Project Manager
                    </p>
                    <p className="w-[342px] md:w-[242px] h-[57px] font-sans text-[14px] font-light leading-[19.07px] text-center underline decoration-transparent text-[#000000] mt-4">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                    </p>
                    <div className='flex items-center text-center w-[137px] h-[41px] justify-between mt-4'>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (1).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (2).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (3).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />  
                        </div>                        
                    </div>
                </div>
                <div className=' border border-[#543009] flex flex-col items-center text-center p-6'>
                    <Image 
                        src="/assets/image/Ellipse (2).png" 
                        alt="Avatar 1" 
                        width={66}
                        height={66}
                    /> 
                    <p className="font-sans text-[20.8px] font-bold leading-[22.1px] underline decoration-transparent text-[#543009] mt-2">
                        Anthony Mclaire
                    </p>
                    <p className="font-sans text-[15.6px] font-normal leading-[22.1px] underline decoration-transparent text-[#FF7D82] mt-1">
                        Project Manager
                    </p>
                    <p className="w-[342px] md:w-[242px] h-[57px] font-sans text-[14px] font-light leading-[19.07px] text-center underline decoration-transparent text-[#000000] mt-4">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                    </p>
                    <div className='flex items-center text-center w-[137px] h-[41px] justify-between mt-4'>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (1).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (2).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (3).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />  
                        </div>                        
                    </div>
                </div>
                <div className=' border border-[#543009] flex flex-col items-center text-center p-6'>
                    <Image 
                        src="/assets/image/Ellipse (3).png" 
                        alt="Avatar 1" 
                        width={66}
                        height={66}
                    /> 
                    <p className="font-sans text-[20.8px] font-bold leading-[22.1px] underline decoration-transparent text-[#543009] mt-2">
                        Anthony Mclaire
                    </p>
                    <p className="font-sans text-[15.6px] font-normal leading-[22.1px] underline decoration-transparent text-[#FF7D82] mt-1">
                        Project Manager
                    </p>
                    <p className="w-[342px] md:w-[242px] h-[57px] font-sans text-[14px] font-light leading-[19.07px] text-center underline decoration-transparent text-[#000000] mt-4">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                    </p>
                    <div className='flex items-center text-center w-[137px] h-[41px] justify-between mt-4'>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (1).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (2).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (3).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />  
                        </div>                        
                    </div>
                </div>
                <div className=' border border-[#543009] flex flex-col items-center text-center p-6'>
                    <Image 
                        src="/assets/image/Ellipse (1).png" 
                        alt="Avatar 1" 
                        width={66}
                        height={66}
                    />
                    <p className="font-sans text-[20.8px] font-bold leading-[22.1px] underline decoration-transparent text-[#543009] mt-2">
                        Anthony Mclaire
                    </p>
                    <p className="font-sans text-[15.6px] font-normal leading-[22.1px] underline decoration-transparent text-[#FF7D82] mt-1">
                        Project Manager
                    </p>
                    <p className="w-[342px] md:w-[242px] h-[57px] font-sans text-[14px] font-light leading-[19.07px] text-center underline decoration-transparent text-[#000000] mt-4">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                    </p>
                    <div className='flex items-center text-center w-[137px] h-[41px] justify-between mt-4'>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (1).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (2).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (3).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />  
                        </div>                        
                    </div>
                </div>
                <div className=' border border-[#543009] flex flex-col items-center text-center p-6'>
                    <Image 
                        src="/assets/image/Ellipse (4).png" 
                        alt="Avatar 1" 
                        width={66}
                        height={66}
                    />
                    <p className="font-sans text-[20.8px] font-bold leading-[22.1px] underline decoration-transparent text-[#543009] mt-2">
                        Anthony Mclaire
                    </p>
                    <p className="font-sans text-[15.6px] font-normal leading-[22.1px] underline decoration-transparent text-[#FF7D82] mt-1">
                        Project Manager
                    </p>
                    <p className="w-[342px] md:w-[242px] h-[57px] font-sans text-[14px] font-light leading-[19.07px] text-center underline decoration-transparent text-[#000000] mt-4">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                    </p>
                    <div className='flex items-center text-center w-[137px] h-[41px] justify-between mt-4'>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (1).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (2).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (3).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />  
                        </div>                        
                    </div>
                </div>
                <div className=' border border-[#543009] flex flex-col items-center text-center p-6'>
                    <Image 
                        src="/assets/image/Ellipse (2).png" 
                        alt="Avatar 1" 
                        width={66}
                        height={66}
                    />
                    <p className="font-sans text-[20.8px] font-bold leading-[22.1px] underline decoration-transparent text-[#543009] mt-2">
                        Anthony Mclaire
                    </p>
                    <p className="font-sans text-[15.6px] font-normal leading-[22.1px] underline decoration-transparent text-[#FF7D82] mt-1">
                        Project Manager
                    </p>
                    <p className="w-[342px] md:w-[242px] h-[57px] font-sans text-[14px] font-light leading-[19.07px] text-center underline decoration-transparent text-[#000000] mt-4">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                    </p>
                    <div className='flex items-center text-center w-[137px] h-[41px] justify-between mt-4'>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (1).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (2).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (3).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />  
                        </div>                        
                    </div>
                </div>
                <div className=' border border-[#543009] flex flex-col items-center text-center p-6'>
                    <Image 
                        src="/assets/image/Ellipse (3).png" 
                        alt="Avatar 1" 
                        width={66}
                        height={66}
                    /> 
                    <p className="font-sans text-[20.8px] font-bold leading-[22.1px] underline decoration-transparent text-[#543009] mt-2">
                        Anthony Mclaire
                    </p>
                    <p className="font-sans text-[15.6px] font-normal leading-[22.1px] underline decoration-transparent text-[#FF7D82] mt-1">
                        Project Manager
                    </p>
                    <p className="w-[342px] md:w-[242px] h-[57px] font-sans text-[14px] font-light leading-[19.07px] text-center underline decoration-transparent text-[#000000] mt-4">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                    </p>
                    <div className='flex items-center text-center w-[137px] h-[41px] justify-between mt-4'>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (1).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (2).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />                              
                        </div>
                        <div className='w-[41px] h-[41px] rounded-full bg-[#FF7D82] flex items-center justify-center'>
                            <Image 
                                src="/assets/icon/icon (3).png" 
                                alt="Avatar 1" 
                                width={20}
                                height={17}
                            />  
                        </div>                        
                    </div>
                </div>
            </div>        
        </div>
    );
};

export default Team;
