"use client";

import React, { useState, useEffect }  from "react";
import Image from "next/image";
import Header from "@/components/trade/header";
import Footer from "@/components/trade/footer";

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      setIsLoading(true);
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 3000); // Change after 5 seconds

      return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  return (
      <div className={`bg-[#965557] fixed inset-0 bg-black bg-opacity-100 z-50 ${isOpen ? 'flex' : 'hidden'} justify-center items-center`}>
          <div className="rounded-lg border border-white border-[3px] w-[386px] h-[335px] flex flex-col">
            <div className="h-1/2  bg-opacity-20 bg-white flex justify-center items-center">
              {isLoading ? (<Image 
                  src="/assets/icon/loading.png" 
                  alt="Logo Icon" 
                  width={101} // Set the desired width
                  height={101} // Set the desired height
                  className="animate-spin" // You can still apply classes
                />      
              ):(<Image 
                src="/assets/icon/loading_success.png" 
                alt="Logo Icon" 
                width={101} // Set the desired width
                height={101} // Set the desired height
              />)
              }          
            </div>
            <div className="h-1/2 bg-white rounded-lg flex flex-col items-center p-5 px-10 justify-center">
              {isLoading ? (<>
                <p className="font-[600] text-[#21252D] text-[20px] ">Claiming HACHI</p>
                <p className="font-[400] text-[#21252D] text-[14px] mt-3">Blockchain is thinking...</p>   
              </> ):(<>
                <p className="font-[600] text-[#21252D] text-[20px] ">Claiming Successful</p>
                <p className="font-[400] text-[#21252D] text-[14px] mt-3 text-center">HACHI and veHACHI Airdrop has been send 
                to your wallet address.</p>    
              </> )
              }                  
              <button onClick={onClose} className="px-4 py-2 bg-[#543009] rounded-lg w-full mt-3">Close</button>
            </div>
          </div>
      </div>
  );
};
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tradeValue, setTradeValue] = useState(false);
  const [tradeValue2, setTradeValue2] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => 
  {
    setIsModalOpen(false);
    setTradeValue(true)
  }
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => 
    {
      setIsModalOpen2(false);
      setTradeValue2(true)
    }
  return (
    <div style={{backgroundImage: `url('./assets/image/trade_background.png')`, backgroundSize: 'cover', height: '100vh'}}>
      <Header />
      <div className="container mx-auto flex justify-center items-center py-[110px]">
        <div className="flex w-full justify-center items-start space-x-10">
          <div className="flex flex-col justify-start items-center">
            <Image 
              src="/assets/image/airdrop-bg.png" 
              alt="Logo Icon" 
              width={477} // Set the desired width
              height={241} // Set the desired height
              className="text-black" // You can still apply classes
            />   
            <div className="flex mt-12">
              <Image 
                src="/assets/icon/airdrop-group.png" 
                alt="Logo Icon" 
                width={48} // Set the desired width
                height={48} // Set the desired height
                className="text-black" // You can still apply classes
              />  
              <p className="font-sans font-[600] text-[35px] font-normal leading-[47.66px] text-underline-position text-left text-[#21252D]">
                Airdrop
              </p>                
            </div>
            <p className="w-[300px] font-sans font-[600] text-[14px] font-normal leading-[19.07px] text-underline-position text-center text-[#21252D] mt-3">
              If you’re invited to this party, you can claim here your rewards!
            </p>
            
          </div>
          <div className="flex max-w-[707px]  rounded-[10px] border border-white border-[3px] flex-col">
            <div className="border-b-[3px] border-white w-full flex p-10 pb-8 space-x-6 flex-col space-y-3 justify-start">
              <div className="flex pl-6">
                <Image 
                  src="/assets/icon/rocket.png" 
                  alt="Logo Icon" 
                  width={18} // Set the desired width
                  height={18} // Set the desired height
                  className="text-black" // You can still apply classes
                />   
                <p className="font-sans font-[600] text-[16px] leading-[21.79px] text-underline-position text-left text-[#21252D] px-2">
                  Launchpad Airdrop
                </p>
              </div>
              <div className="flex space-x-6">
                <div className="flex w-1/2">                  
                  <p className="font-sans font-[600] text-[15px] leading-[20.43px] text-underline-position text-left text-[#21252D]">
                    Claimable Earnings
                  </p>                    
                </div>           
                <div className="flex w-1/2">                  
                  <p className="font-sans font-[600] text-[15px] leading-[20.43px] text-underline-position text-left text-[#21252D]">
                    Claimed
                  </p>                    
                </div> 
              </div>
              <div className="flex space-x-6">
                <div className="flex w-1/2">                  
                  <div className="flex">
                    <Image 
                      src="/assets/icon/logo.png" 
                      alt="Logo Icon" 
                      width={24} // Set the desired width
                      height={24} // Set the desired height
                      className="text-black" // You can still apply classes
                    />   
                    <p className="font-sans font-normal text-[18px] leading-[24.51px] text-underline-position text-left text-[#21252D] px-2">
                      {!tradeValue ? ("0.00 HACHI | 0.00 veHACHI") : ("665 HACHI | 15698 veHACHI")}
                    </p>
                  </div>                    
                </div>           
                <div className="flex w-1/2">                  
                  <div className="flex">
                    <Image 
                      src="/assets/icon/logo.png" 
                      alt="Logo Icon" 
                      width={24} // Set the desired width
                      height={24} // Set the desired height
                      className="text-black" // You can still apply classes
                    />   
                    <p className="font-sans font-normal text-[18px] leading-[24.51px] text-underline-position text-left text-[#21252D] px-2">
                      {!tradeValue ? ("0.00 HACHI | 0.00 veHACHI") : ("665 HACHI | 15698 veHACHI")}
                    </p>
                  </div>                    
                </div> 
              </div>
              <div className="flex space-x-6">
                <div className="flex w-1/2">
                  <div className="flex flex-col rounded-lg bg-white w-full items-start justify-start p-1 px-3">
                    <p className="font-sans font-[600] text-[12px] leading-[16.34px] text-underline-position text-left text-[#FF4465]">
                      Left to claim
                    </p>
                    <p className="font-sans font-[600] text-[14px] leading-[19.07px] text-underline-position text-left text-[#21252D80]">
                      {!tradeValue ? ("0.00 HACHI | 0.00 veHACHI") : ("665 HACHI | 15698 veHACHI")}
                    </p>
                  </div>
                </div>           
                <div className="flex w-1/2">
                  <button onClick={openModal}  className="flex rounded-lg bg-[#543009] w-full items-center justify-center p-[9px] space-x-4">                    
                    <p className="font-sans font-[600] text-[14px] leading-[19.07px] text-underline-position text-left text-white">
                      Claim Earnings
                    </p>
                    <Image 
                      src="/assets/icon/right-white.png" 
                      alt="Logo Icon" 
                      width={13} // Set the desired width
                      height={14} // Set the desired height
                      className="text-white" // You   can still apply classes
                    /> 
                  </button>
                </div> 
              </div>
                        
            </div>
            <div className="w-full flex p-10 pt-10 pb-6 space-x-6 flex-col space-y-3 justify-start">
              <div className="flex pl-6">
                <Image 
                  src="/assets/icon/team.png" 
                  alt="Logo Icon" 
                  width={18} // Set the desired width
                  height={18} // Set the desired height
                  className="text-black" // You can still apply classes
                />   
                <p className="font-sans font-[600] text-[16px] leading-[21.79px] text-underline-position text-left text-[#21252D] px-2">
                  Community Airdrop
                </p>
              </div>
              <div className="flex space-x-6">
                <div className="flex w-1/2">                  
                  <p className="font-sans font-[600] text-[15px] leading-[20.43px] text-underline-position text-left text-[#21252D]">
                    Claimable Earnings
                  </p>                    
                </div>           
                <div className="flex w-1/2">                  
                  <p className="font-sans font-[600] text-[15px] leading-[20.43px] text-underline-position text-left text-[#21252D]">
                    Claimed
                  </p>                    
                </div> 
              </div>
              <div className="flex space-x-6">
                <div className="flex w-1/2">                  
                  <div className="flex">
                    <Image 
                      src="/assets/icon/logo.png" 
                      alt="Logo Icon" 
                      width={24} // Set the desired width
                      height={24} // Set the desired height
                      className="text-black" // You can still apply classes
                    />   
                    <p className="font-sans font-normal text-[18px] leading-[24.51px] text-underline-position text-left text-[#21252D] px-2">
                      {!tradeValue2 ? ("0.00  veHACHI") : ("635682  veHACHI")}
                    </p>
                  </div>                    
                </div>           
                <div className="flex w-1/2">                  
                  <div className="flex">
                    <Image 
                      src="/assets/icon/logo.png" 
                      alt="Logo Icon" 
                      width={24} // Set the desired width
                      height={24} // Set the desired height
                      className="text-black" // You can still apply classes
                    />   
                    <p className="font-sans font-normal text-[18px] leading-[24.51px] text-underline-position text-left text-[#21252D] px-2">
                      {!tradeValue2 ? ("0.00  veHACHI") : ("635682  veHACHI")}
                    </p>
                  </div>                    
                </div> 
              </div>
              <div className="flex space-x-6">
                <div className="flex w-1/2">
                  <div className="flex flex-col rounded-lg bg-white w-full items-start justify-start p-1 px-3">
                    <p className="font-sans font-[600] text-[12px] leading-[16.34px] text-underline-position text-left text-[#FF4465]">
                      Left to claim
                    </p>
                    <p className="font-sans font-[600] text-[14px] leading-[19.07px] text-underline-position text-left text-[#21252D80]">
                      {!tradeValue2 ? ("0.00  veHACHI") : ("635682  veHACHI")}
                    </p>
                  </div>
                </div>           
                <div className="flex w-1/2">
                  <button onClick={openModal2}  className="flex rounded-lg bg-[#543009] w-full items-center justify-center p-[9px] space-x-4">                    
                    <p className="font-sans font-[600] text-[14px] leading-[19.07px] text-underline-position text-left text-white">
                      Claim Earnings
                    </p>
                    <Image 
                      src="/assets/icon/right-white.png" 
                      alt="Logo Icon" 
                      width={13} // Set the desired width
                      height={14} // Set the desired height
                      className="text-white" // You   can still apply classes
                    /> 
                  </button>
                </div> 
              </div>                         
            </div>
          </div>
        </div>  
      </div>     
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <Modal isOpen={isModalOpen2} onClose={closeModal2} />
      <Footer />  
    </div>
  );
}
