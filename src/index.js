import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import merge from "lodash.merge";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  arbitrum,
  base,
  goerli,
  polygonMumbai,
  sepolia,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const myTheme = merge(lightTheme(), {
  colors: {
    accentColor: "#26124a",
    closeButtonBackground: "#FFFFFF",
    closeButton: "#FFFFFF",
    connectButtonBackground: "#ffffff",
    connectButtonInnerBackground: "#ffffff",
    connectButtonText: "#26124a",
  },
  fonts: {
    body: '"Segoe UI", Roboto',
  },
  radii: {
    connectButton: "6px",
  },
});

const { chains, publicClient } = configureChains(
  [mainnet, polygon, arbitrum, base, goerli, polygonMumbai, sepolia],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider theme={myTheme} chains={chains} modalSize="compact">
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </>
);
