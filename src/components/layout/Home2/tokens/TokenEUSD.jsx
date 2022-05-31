import React, { useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AddLiquidity from "../LiquidityPage/AddLiquidity.js";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";
import "../../../../css/token.css";
const TokenEUSD = () => {
  const [generateModal, setGenerateModal] = useState(false);
  const [which, setWhich] = useState("");
  const context = useWeb3React();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;
  const toggleModal = (e) => {
    let target = e.currentTarget;

    if (account) {
      if (generateModal === false) {
        setGenerateModal(true);
      } else if (generateModal === true) {
        setGenerateModal(false);
      }
    } else {
      console.log("Connect to Metamask");
    }

    // else()
  };
  return (
    <div>
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Tokens Section Start */}
      <section className="swap_section" id="token">
        <div class="container">
          <AddLiquidity closeModal={toggleModal} />
        </div>

        <img src="/img/token-dots.svg" alt="" className="tokenDots" />
      </section>
      {/* Tokens Section End */}

      {/* fourth section end */}
    </div>
  );
};

export default TokenEUSD;
