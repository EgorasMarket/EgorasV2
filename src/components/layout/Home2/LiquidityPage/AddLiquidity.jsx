import React, { useState, useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { TokenModal } from "./TokenModal/TokenModal";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import axios from "axios";
import Success_Error_Component from "../../../assets/Success_Error_Component";
import CloseIcon from "@mui/icons-material/Close";
import data from "../../MockData";
// ================
// ================
// ================
import { API_URL3 as api_url3 } from "../../../../actions/types";

import { ConnectWallet } from "../../../auth/ConnectWallet";
import "./AddLiquidity.css";
const AddLiquidity = ({ match, closeModal }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [tokenBtn, setTokenBtn] = useState(false);
  const [tokenBtn2, setTokenBtn2] = useState(false);
  const [defaultPrice, setDefaultPrice] = useState(0);
  const [tokenName, setTokenName] = useState(0);
  const [base, setBase] = useState("");
  const [tokenName2, setTokenName2] = useState(0);
  const [inputToggle, setInputToggle] = useState(false);

  const [inputVal, setInputVal] = useState();
  // const [inputVal, setInputVal] = useState();
  // const context = useWeb3React();
  // const {
  //   connector,
  //   library,
  //   chainId,
  //   account,
  //   activate,
  //   deactivate,
  //   active,
  //   error,
  // } = context;
  // useEffect(() => {
  //   var ticker = "EGR-BNB";
  //   getPrice(ticker, library.getSigner()).then((price) => {
  //     // setDefaultPrice(formatEther(price.message));
  //   });
  // }, []);
  const [connected, setConnected] = useState(false);
  const onChange = (e) => {
    setInputVal(e.target.value);
  };
  const toggleInput = () => {
    if (inputToggle == true) {
      setInputToggle(false);
    } else if (inputToggle == false) {
      setInputToggle(true);
    }
  };
  const TokenData = (e) => {
    let currentTarget = e.currentTarget.id;
    console.log(currentTarget);
    setTokenName(currentTarget);

    if (modal === true) {
      setModal(false);
    } else if (modal === false) {
      setModal(true);
    }
    setTokenBtn(true);
  };
  const TokenData2 = (e) => {
    let currentTarget = e.currentTarget.id;
    console.log(currentTarget);
    setTokenName2(currentTarget);

    if (modal2 === true) {
      setModal2(false);
    } else if (modal2 === false) {
      setModal2(true);
    }
    setTokenBtn2(true);
  };

  const toggleModal = (id) => {
    // let target = e.currentTarget.id;
    console.log(id);
    if (modal === true) {
      setModal(false);
    } else if (modal === false) {
      setModal(true);
    }
  };
  const toggleModal2 = () => {
    if (modal2 === true) {
      setModal2(false);
    } else if (modal2 === false) {
      setModal2(true);
    }
  };
  const background = [
    {
      background: "#000",
    },
  ];
  return (
    <div className=" modal_bg">
      {/* Tokens Section Start */}
      <section className=" no-bg">
        <div className="container">
          <div className="liquidity_area">
            <div className="liquidity_cont">
              <div className="liquidity_cont_head">
                <CloseIcon className="settings_icon" onClick={closeModal} />
                <div className="liquidity_cont_head_text"></div>
                {/* <SettingsIcon className="settings_icon" /> */}
              </div>
              <div className="liquidity_cont_body">
                <div className="liquidity_cont_body_conts">
                  {/* <div className="tips_layer">
                    <div className="tips_writeUp">
                      <span className="tip_sub_head">Tip: </span> When you add
                      liquidity, you will receive pool tokens representing your
                      position. These tokens automatically earn fees
                      proportional to your share of the pool, and can be
                      redeemed at any time.
                    </div>
                  </div> */}
                  {inputToggle == false ? (
                    <div className="input_amnt_layer">
                      <span className="input_txt">From</span>
                      <div className="amnt_input">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          onChange={onChange}
                          placeholder="000"
                          className="amnt_input_field"
                          autocomplete="off"
                          value={tokenBtn == true ? inputVal : inputVal}
                        />

                        <button className="display_tokens_drop">
                          <img
                            src={data.base[0].img}
                            alt=""
                            className="asset_icon"
                          />
                          {data.base[0].symbol}
                          <ArrowDropDownIcon className="drop_down_icon" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="input_amnt_layer">
                      <span className="input_txt">From</span>
                      <div className="amnt_input">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          placeholder="000"
                          className="amnt_input_field"
                          autocomplete="off"
                          // value={inputVal * 200}
                          value={
                            tokenBtn2 == true ? inputVal * 213535 : inputVal
                          }
                        />
                        {tokenBtn2 == false ? (
                          <button
                            className="display_tokens_drop display_tokens_drop_not_select "
                            onClick={toggleModal2}
                          >
                            Select a token{" "}
                            <ArrowDropDownIcon className="drop_down_icon" />
                          </button>
                        ) : (
                          <>
                            {data.assets.map((token) =>
                              tokenName2 == token.id ? (
                                <button
                                  className="display_tokens_drop"
                                  onClick={toggleModal2}
                                >
                                  <img
                                    src={token.img}
                                    alt=""
                                    className="asset_icon"
                                  />
                                  {token.symbol}
                                  <ArrowDropDownIcon className="drop_down_icon" />
                                </button>
                              ) : null
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* <div className="plus_icon_layer"> */}
                  <SwapVerticalCircleIcon
                    className="plus_icon_layer"
                    onClick={toggleInput}
                  />
                  {inputToggle == false ? (
                    <div className="input_amnt_layer">
                      <span className="input_txt">To</span>
                      <div className="amnt_input">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          placeholder="000"
                          className="amnt_input_field"
                          autocomplete="off"
                          // value={inputVal * 200}
                          value={
                            tokenBtn2 == true ? inputVal * 213535 : inputVal
                          }
                        />
                        {tokenBtn2 == false ? (
                          <button
                            className="display_tokens_drop display_tokens_drop_not_select "
                            onClick={toggleModal2}
                          >
                            Select a token{" "}
                            <ArrowDropDownIcon className="drop_down_icon" />
                          </button>
                        ) : (
                          <>
                            {data.assets.map((token) =>
                              tokenName2 == token.id ? (
                                <button
                                  className="display_tokens_drop"
                                  onClick={toggleModal2}
                                >
                                  <img
                                    src={token.img}
                                    alt=""
                                    className="asset_icon"
                                  />
                                  {token.symbol}
                                  <ArrowDropDownIcon className="drop_down_icon" />
                                </button>
                              ) : null
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="input_amnt_layer">
                      <span className="input_txt">To</span>
                      <div className="amnt_input">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          onChange={onChange}
                          placeholder="000"
                          className="amnt_input_field"
                          autocomplete="off"
                          value={tokenBtn == true ? inputVal : inputVal}
                        />

                        <button className="display_tokens_drop">
                          <img
                            src={data.base[0].img}
                            alt=""
                            className="asset_icon"
                          />
                          {data.base[0].symbol}
                          <ArrowDropDownIcon className="drop_down_icon" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* </div> */}

                  <div className="connect_btn_div">
                    <ConnectWallet
                      isHome="false"
                      connect_btn="connect_btn"
                      connect_btn_class="connect_btn_div"
                      onClick={() => setConnected(true)}
                      className="connect_btn"
                      btn_txt={
                        inputVal > 0 && tokenBtn2 == true
                          ? "Convert"
                          : inputVal > 0 && tokenBtn2 == false
                          ? "Invalid Pair"
                          : "Enter an amount"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {modal == true ? (
        <TokenModal
          toggleTokenModal={toggleModal}
          execute={TokenData}
          tokenData1={data.base}
          tokenData={data.assets}
          disabled="disabled"
          // tokenId={data.tokenData}
        />
      ) : null}
      {modal2 == true ? (
        <TokenModal
          toggleTokenModal={toggleModal2}
          execute={TokenData2}
          tokenData={data.assets}
          tokenData1={data.base}
          // disabled={true}
          // tokenId={data.tokenData}
        />
      ) : null}
    </div>
  );
};

export default AddLiquidity;
