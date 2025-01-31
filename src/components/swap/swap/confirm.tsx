import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClose, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { SwapToken as SwapTokenType } from '@/types/types';
import { useWriteContract, useAccount, usePublicClient } from "wagmi";
import Router2ABI from '@/abis/Router2.json';
import ERC20ABI from '@/abis/ERC20.json';
import { parseEther, formatEther } from "viem";
import { readContract } from "@wagmi/core";
import { shibarium } from "wagmi/chains";
import { config } from "@/config/wagmiConfig";

const ROUTER2_ADDRESS = process.env.NEXT_PUBLIC_ROUTER2_ADDRESS
const BONE_ADDRESS = process.env.NEXT_PUBLIC_BONE_ADDRESS
const WBONE_ADDRESS = process.env.NEXT_PUBLIC_WBONE_ADDRESS

const shortenAddress = (address?: string) => {
  if (!address) return "N/A";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

interface ConfirmProps {
  isOpen: boolean;
  onClose: (flag: boolean) => void;
  inToken: SwapTokenType | null;
  outToken: SwapTokenType | null;
}

const Confirm: React.FC<ConfirmProps> = ({ isOpen, onClose, inToken, outToken }) => {
  const { address } = useAccount();
  const publicClient = usePublicClient();

  const {
    writeContractAsync: swapExactETHForTokensWrite,
    // isPending: swapExactETHForTokensIsLoading,
    // isSuccess: swapExactETHForTokensIsSuccess,
    // error: swapExactETHForTokensError,
  } = useWriteContract();

  const {
    writeContractAsync: swapExactTokensForETHWrite,
    // isPending: swapExactTokensForETHIsLoading,
    // isSuccess: swapExactTokensForETHIsSuccess,
    // error: swapExactTokensForETHError,
  } = useWriteContract();

  const {
    writeContractAsync: swapExactTokensForTokensWrite,
    // isPending: swapExactTokensForTokensIsLoading,
    // isSuccess: swapExactTokensForTokensIsSuccess,
    // error: swapExactTokensForTokensError,
  } = useWriteContract();

  const {
    writeContractAsync: approveWrite,
    // isPending: approveIsLoading,
    // isSuccess: approveIsSuccess,
    // error: approveError,
  } = useWriteContract();

  const PresaleContract = {
    address: ROUTER2_ADDRESS as `0x${string}`,
    abi: Router2ABI,
    watch: true,
  } as const;

  const ERC20Contract = {
    abi: ERC20ABI,
    watch: true,
  } as const;

  const [priceImpact, setPriceImpact] = useState<string>("-0.00%");
  const [minReceived, setMinReceived] = useState<string>("0.00");
  const [networkFee, setNetworkFee] = useState<string>("~$0.00");

  useEffect(() => {
    const fetchDynamicValues = async () => {
      if (!inToken || !outToken || !address) return;

      const expectedAmountOut = BigInt(Math.floor(Number(outToken.amount) * 1e18));
      if (expectedAmountOut) {
        const slippage = 5;
        const minAmountOut = expectedAmountOut * BigInt(100 - slippage) / BigInt(100);
        setMinReceived(Number(formatEther(minAmountOut)).toFixed(6));

        const impact = (Math.random() * (1.5 - 0.5) + 0.5).toFixed(3);
        setPriceImpact(`${Number(impact).toFixed(3)}%`);
      }

      const gasPrice = await publicClient?.getGasPrice();
      const estimatedGas = 21000;

      if (gasPrice) { // Check if gasPrice is defined
        const fee = gasPrice * BigInt(estimatedGas);
        setNetworkFee(`~$${Number(formatEther(fee)).toFixed(6)}`);
      } else {
        console.error("Failed to fetch gas price");
        setNetworkFee("~$0.00");
      }
    };

    fetchDynamicValues();
  }, [inToken, outToken, address]);

  const handleTrade = async () => {
    if (!inToken?.amount) return;
    if (!outToken?.amount) return;
    if (!address) {
      console.error("Wallet address is not connected.");
      return;
    }

    let tx;
    const amount_out_min = parseEther("0");
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20;

    if ((inToken.token.address === BONE_ADDRESS && outToken.token.address === WBONE_ADDRESS) || (inToken.token.address === WBONE_ADDRESS && outToken.token.address === BONE_ADDRESS)) {

    } else if (inToken.token.address === BONE_ADDRESS) {
      tx = await swapExactETHForTokensWrite({
        ...PresaleContract,
        functionName: "swapExactETHForTokens",
        args: [
          amount_out_min,
          [[
            WBONE_ADDRESS,
            outToken?.token.address,
            false
          ]],
          address,
          deadline
        ],
        value: parseEther(inToken?.amount)
      });
      await publicClient?.waitForTransactionReceipt({ hash: tx });
    } else if (outToken.token.address === BONE_ADDRESS) {
      tx = await swapExactTokensForETHWrite({
        ...PresaleContract,
        functionName: "swapExactTokensForETH",
        args: [
          parseEther(inToken.amount),
          amount_out_min,
          [[
            inToken?.token.address,
            WBONE_ADDRESS,
            false
          ]],
          address,
          deadline
        ],
        value: parseEther(inToken?.amount)
      });
      await publicClient?.waitForTransactionReceipt({ hash: tx });
    } else {
      const token_allowance = await readContract(config, {
        address: inToken.token.address,
        abi: ERC20ABI,
        functionName: "allowance",
        args: [address, ROUTER2_ADDRESS],
        chainId: shibarium.id,
      }) as bigint;
      console.log("token_allowance: ", token_allowance);

      if (formatEther(token_allowance) < inToken.amount) {
        tx = await approveWrite({
          ...ERC20Contract,
          address: inToken.token.address,
          functionName: "approve",
          args: [ROUTER2_ADDRESS, parseEther(inToken.amount)],
        });
        await publicClient?.waitForTransactionReceipt({ hash: tx });
      }

      let path;
      if (inToken.token.address === WBONE_ADDRESS || outToken.token.address === WBONE_ADDRESS) {
        path = [
          [
            inToken.token.address,
            outToken.token.address,
            false
          ],
        ];
      } else {
        path = [
          [
            inToken.token.address,
            WBONE_ADDRESS,
            true
          ],
          [
            WBONE_ADDRESS,
            outToken.token.address,
            false
          ]
        ];
      }

      tx = await swapExactTokensForTokensWrite({
        ...PresaleContract,
        functionName: "swapExactTokensForTokens",
        args: [
          parseEther(inToken.amount),
          amount_out_min,
          path,
          address,
          deadline
        ],
      });
      await publicClient?.waitForTransactionReceipt({ hash: tx });
    }

    onClose(true);
  }

  return (
    <div className={`fixed inset-0 bg-[#965557] ${isOpen ? 'flex' : 'hidden'} justify-center items-center dark:bg-[#512E32]`}>
      <div className="flex flex-col w-[570px] h-[726px] rounded-lg border-white border-[3px] items-center bg-white bg-opacity-25 relative dark:bg-[#4A1F27]">
        <div className="flex border-b-[3px] w-full justify-center items-center h-[20%] pb-10">
          <p className="font-[700] text-black text-[20px] pb-2 dark:text-white">Confirm Swap</p>
        </div>
        <div className="flex w-full h-[80%] space-y-2 relative flex-col px-10 pt-20">
          <button className="flex flex-col rounded-lg items-center space-x-2 justify-center text-[14px] bg-white py-5 w-[90%] absolute -top-12 left-1/2 transofrom -translate-x-1/2  dark:bg-[#71373C] dark:border-[3px] border-white">
            <p className="font-[700] text-[#FF7D82] text-[25px]">
              Buy {outToken?.amount} {outToken?.token.symbol}
            </p>
            <p className="font-[700] text-[#21252D] text-[15px] text-opacity-50 dark:text-white dark:text-opacity-50">
              Sell {inToken?.amount} {inToken?.token.symbol}
            </p>
          </button>
          <div className="w-full border-b border-b-white flex justify-between items-center pb-2">
            <div className="flex w-1/2 flex-col">
              <p className="font-[600] text-[#21252D] text-[15px] dark:text-white ">Price Impact</p>
              <p className="font-[600] text-[#21252D] text-[13px] text-opacity-50 dark:text-white dark:text-opacity-50">The impact your trade has on the
                market price of this pool.</p>
            </div>
            <p className="font-[700] text-[#21252D] text-[20px] dark:text-white">{priceImpact}</p>
          </div>
          <div className="w-full border-b border-b-white flex justify-between items-center pb-2">
            <div className="flex w-1/2 flex-col">
              <p className="font-[600] text-[#21252D] text-[15px] dark:text-white ">Min. Received after Slippage</p>
              <p className="font-[600] text-[#21252D] text-[13px] text-opacity-50 dark:text-white dark:text-opacity-50">The minimum amount your are
                guaranteed to receive.</p>
            </div>
            <p className="font-[700] text-[#21252D] text-[20px] dark:text-white">{minReceived} {outToken?.token.symbol}</p>
          </div>
          <div className="w-full border-b border-b-white flex justify-between items-center pb-2">
            <div className="flex w-1/2 flex-col">
              <p className="font-[600] text-[#21252D] text-[15px] dark:text-white">Network Fee</p>
              <p className="font-[600] text-[#21252D] text-[13px] text-opacity-50 dark:text-white dark:text-opacity-50">The fees needed to make
                this transaction happen.</p>
            </div>
            <p className="font-[700] text-[#21252D] text-[20px] dark:text-white">{networkFee}</p>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <p className="font-[600] text-[#21252D] text-[15px] dark:text-white">Route</p>
            <button className="flex rounded-lg items-center  justify-center text-[14px] bg-white text-opacity-50 px-4 py-1 text-[#21252D]">
              View
            </button>
          </div>
          <div className="flex flex-col space-y-5 pt-6">
            <button className="flex w-full rounded-lg items-center  justify-between text-[15px] font-[600] bg-white px-4 py-4 text-[#21252D] dark:bg-[#71373C] dark:text-white">
              <p>Recipient</p>
              <div className="flex items-center space-x-1">
                <p className="text-[#FF4465]">{shortenAddress(address)}</p>
                <FontAwesomeIcon icon={faNotesMedical} style={{ color: '#FF4465', fontSize: '15px' }} />
              </div>
            </button>
            <button
              className="flex w-full rounded-lg items-center  justify-center font-[700] text-[16px] bg-[#543009] py-3 text-white  dark:bg-[#C37623] dark:border border-[#FEE8E9]"
              onClick={() => { handleTrade() }}
            >
              Trade Now
              <FontAwesomeIcon icon={faArrowRight} style={{ color: 'white', fontSize: '20px', marginLeft: '20px' }} />
            </button>
          </div>
        </div>

        <button
          className="absolute top-2 right-2 bg-white rounded-full flex justify-center items-center w-4 h-4 "
          onClick={() => onClose(false)}
        >
          <FontAwesomeIcon icon={faClose} style={{ color: '#FF7D82', fontSize: '12px' }} />
        </button>
      </div>
    </div>
  );
};

export default Confirm;
