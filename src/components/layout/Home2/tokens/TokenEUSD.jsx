import React, { useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AddLiquidity from "../LiquidityPage/AddLiquidity.js";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";
import "../../../../css/token.css";
// import { useEagerConnect, useInactiveListener } from "../../hooks";
import { useEagerConnect, useInactiveListener } from "../../../../hooks";

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

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState();
  React.useEffect(() => {
    // console.log('running')
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // set up block listener
  const [blockNumber, setBlockNumber] = React.useState();
  React.useEffect(() => {
    // console.log('running')
    if (library) {
      let stale = false;

      console.log("fetching block number!!");
      library
        .getBlockNumber()
        .then((blockNumber) => {
          if (!stale) {
            setBlockNumber(blockNumber);
            console.log(blockNumber);
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(null);
          }
        });

      const updateBlockNumber = (blockNumber) => {
        setBlockNumber(blockNumber);
      };
      library.on("block", updateBlockNumber);

      return () => {
        library.removeListener("block", updateBlockNumber);
        stale = true;
        setBlockNumber(undefined);
      };
    }
  }, [library, chainId]);

  // success
  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();
  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const toggleModal = (e) => {
    let target = e.currentTarget;
    // console.log(library);
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
        <div class="eusd-token-page container">
          <AddLiquidity closeModal={toggleModal} />
        </div>
        <img src="/img/token-dots.svg" alt="" className="tokenDots" />
      </section>
      {/* Tokens Section End */}

      {/* fourth section end */}
      {/* {generateModal == true ? <AddLiquidity closeModal={toggleModal} /> : null} */}
    </div>
  );
};

export default TokenEUSD;
