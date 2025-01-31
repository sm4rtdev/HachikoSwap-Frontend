import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { shibarium, shibariumTestnet } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "HachiSwap",
  projectId: "2737edc75b248cf55a09a4bc05ab9525",
  chains: [shibarium, shibariumTestnet],
  transports: {
    [shibarium.id]: http(),
    [shibariumTestnet.id]: http(),
  },
  ssr: true,
});
