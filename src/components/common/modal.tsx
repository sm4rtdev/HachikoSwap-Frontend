
import React, { useState, useEffect }  from "react";
import Image from "next/image";

interface ModalProps {
    isOpen: boolean;
    title: string;    
    message: string;
    success: string;
    success_body: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message, success, success_body }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 5000); // Change after 5 seconds

      return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  return (
      <div className={`fixed inset-0 bg-[#965557] ${isOpen ? 'flex' : 'hidden'} justify-center items-center dark:bg-[#512E32]`}>
          <div className="rounded-lg border border-white border-[3px] w-[386px] h-[335px] flex flex-col dark:bg-[#736767]">
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
            <div className="h-1/2 bg-white rounded-lg flex flex-col items-center p-5 px-10 justify-center dark:bg-[#4A1F27] dark:border-t-[3px] border-white">
              {isLoading ? (<>
                <p className="font-[600] text-[#21252D] text-[20px] dark:text-white">{title}</p>
                <p className="font-[400] text-[#21252D] text-[14px]  dark:text-opacity-75 mt-3 dark:text-white dark:text-opacity-75">{message}</p>   
              </> ):(<>
                <p className="font-[600] text-[#21252D] text-[20px]  dark:text-white">{success}</p>
                <p className="font-[400] text-[#21252D] text-[14px] dark:text-opacity-75 mt-3 text-center  dark:text-white dark:text-opacity-75">{success_body}</p>    
              </> )
              }                  
              <button onClick={onClose} className="px-4 py-2 bg-[#543009] rounded-lg w-full mt-3  dark:bg-[#C37623] dark:border border-[#FEE8E9]">Close</button>
            </div>
          </div>
      </div>
  );
};

export default Modal;