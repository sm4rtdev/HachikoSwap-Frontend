import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import Image from "next/image";

const WalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted;
        const connected = ready && account && chain;
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button className='flex items-center w-[204px] h-[38px] rounded-full bg-white px-3 dark:bg-[#FF7D82] dark:text-white dark:border border-white'
                    onClick={openConnectModal}
                    type="button">
                    <Image
                      src="/assets/icon/wallet.svg"
                      alt="Logo Icon"
                      width={22} // Set the desired width
                      height={22} // Set the desired height
                      className="text-black dark:text-white" // You can still apply classes
                    />
                    <p className="font-tt-firs-neue text-[14px] font-normal leading-[18.06px] text-underline-position text-decoration-skip-ink text-[#332038] dark:text-white ml-[30px]">
                      Connect Wallet
                    </p>
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="bg-white text-red-600 p-2 rounded-full"
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  >
                    {chain.name}
                  </button>
                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="bg-white text-black button-background px-[20px] py-[10px] rounded-[10px]  transition-transform hover:scale-105 logofont text-sm"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default WalletButton;
