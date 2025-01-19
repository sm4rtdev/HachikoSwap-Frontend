import React from 'react';
import Image from "next/image";
const Works: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-[120px] p-3" id="works">
            <div className=' border border-[2px] border-[#FF7D82] bg-white p-1 px-2 text-center'>
                <p className='text-[#FF7D82] font-normal text-[18px] tracking-[0.26em] leading-[23.44px]'>
                    始め方
                </p>
            </div>     
            <p className='text-center text-[42px] font-[700] leading-[57.2px] text-[#684222] uppercase mt-[25px]'>
                HOW IT WORKS?
            </p>         
            <div className='flex flex-wrap w-full xl:w-[90%] mt-[50px]'>
                <div className='w-full px-5 lg:w-1/3 xl:px-10 mt-3'>
                    <div className='flex border border-[#543009]'>
                        <div className="w-1/4 bg-[#543009] flex justify-center items-center text-center">
                            <Image 
                                src='/assets/image/chart.png'
                                alt="Avatar 1" 
                                width={50}
                                height={50}
                                className="max-w-full max-h-full object-contain" 
                            />                          
                        </div>     
                        <div className="w-3/4 flex flex-col justify-center items-center text-left px-4 pt-4 space-y-3  h-[120px]">
                            <p className="w-full font-sans text-[16px] font-bold leading-[17px] underline decoration-transparent text-[#543009]">
                                <span style={{color:'#FF7D82'}}>01</span> Connect Wallet via zkEVM
                            </p>
                            <p className="w-full font-sans text-[12px] font-normal leading-[16.34px] underline decoration-transparent text-[#666666]">
                                Make sure you have the Polygon zkEVM network on your wallet. If you need help adding it, click here to learn how.
                            </p>
                        </div>
                    </div>
                </div>  
                <div className='w-full px-5 lg:w-1/3 xl:px-10 mt-3'>
                    <div className='flex border border-[#543009]'>
                        <div className="w-1/4 bg-[#543009] flex justify-center items-center text-center">
                            <Image 
                                src='/assets/image/chat.png'
                                alt="Avatar 1" 
                                width={50}
                                height={50}
                                className="max-w-full max-h-full object-contain" 
                            />                          
                        </div>     
                        <div className="w-3/4 flex flex-col justify-center items-center text-left px-4 pt-4 space-y-3 h-[120px]">
                            <p className="w-full font-sans text-[16px] font-bold leading-[17px] underline decoration-transparent text-[#543009]">
                                <span style={{color:'#FF7D82'}}>02</span> Deposit Funds
                            </p>
                            <p className="w-full font-sans text-[12px] font-normal leading-[16.34px] underline decoration-transparent text-[#666666]">
                                Deposit any token you would like to trade into our DEX smart contract. Once there you can trade them fee and hassle free!
                            </p>
                        </div>
                    </div>
                </div>  
                <div className='w-full px-5 lg:w-1/3 xl:px-10 mt-3'>
                    <div className='flex border border-[#543009]'>
                        <div className="w-1/4 bg-[#543009] flex justify-center items-center text-center">
                            <Image 
                                src='/assets/image/bag.png'
                                alt="Avatar 1" 
                                width={50}
                                height={50}
                                className="max-w-full max-h-full object-contain" 
                            />                          
                        </div>     
                        <div className="w-3/4 flex flex-col justify-center items-center text-left px-4 pt-4 space-y-3 h-[120px]">
                            <p className="w-full font-sans text-[16px] font-bold leading-[17px] underline decoration-transparent text-[#543009]">
                                <span style={{color:'#FF7D82'}}>03</span> Trade and Earn
                            </p>
                            <p className="w-full font-sans text-[12px] font-normal leading-[16.34px] underline decoration-transparent text-[#666666]">
                                Place limit, market, spot, margin, or short orders and trades easily. Just like on a CEX! You also earn a funding rate from any deposits held on the exchange!
                            </p>
                        </div>
                    </div>
                </div>      
            </div>
            <div className='flex flex-col md:flex-row w-full  xl:w-[70%] border border-[#684222] mt-[300px]'>
                <div className="w-full md:w-5/12 bg-[#684222] flex justify-center items-center text-center">
                    <Image 
                        src="/assets/image/money.png" 
                        alt="Avatar 1" 
                        width={349}
                        height={267}
                        className="w-full h-full object-contain" 
                    />                          
                </div>  
                <div className="flex flex-col items-center md:items-start p-5 px-14 w-full md:w-7/12 space-y-4">
                    <div className='w-fit border border-[2px] border-[#FF7D82] bg-white p-1 px-2 text-center'>
                        <p className='text-[#FF7D82] font-normal text-[18px] tracking-[0.26em] leading-[23.44px]'>
                            私たちのホワイトペーパー
                        </p>
                    </div>     
                    <p className='text-[30px] lg:text-[42px] font-[700] lg:font-[400] leading-[57.2px] text-[#684222] uppercase'>
                        Read Our Whitepaper
                    </p>
                    <p className="w-full font-sans text-[17px] font-normal leading-[22.13px] text-left underline decoration-transparent text-[#767676]">
                        Discover the functionality of HACHI, which employs an off-chain orderbook and matching engine, along with oracles and on-chain execution. This unique combination enables the platform to offer market and limit orders, margin trading, decentralized funding, spot asset shorting, and commission-free trades!
                    </p>
                    <Image 
                        src="/assets/image/read_more.png"
                        alt="Avatar 1" 
                        width={180}
                        height={52}
                    />  
                </div>
            </div>
        </div>
    );
};

export default Works;
