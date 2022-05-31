import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createWallet } from "../../../actions/wallet";
import { depositToken } from "../../../actions/wallet";
import LoadingIcons from "react-loading-icons";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarRateIcon from "@mui/icons-material/StarRate";
import { CustomAlert } from "../../../CustomAlert";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import NumberFormat from "react-number-format";
// import { NoDataFoundComponent } from "../Home2/Dashboard/NodataFound/NoDataFoundComponent";
import { NoDataFoundComponent } from "../Home2/Dashboard/NodataFound/NoDataFoundComponent";
import { Link } from "react-router-dom";
import data from "../MockData";
import { API_URL2 as api_url2 } from "../../../actions/types";
import Success_Error_Component from '../../assets/Success_Error_Component'

import axios from "axios";

import "./wallet.css";
const options = [
  "Deposit History",
  "Withdrawal History",
  "Transaction History",
];

const ITEM_HEIGHT = 48;

const Wallet1 = ({ auth, createWallet, depositToken }) => {
  const [age, setAge] = React.useState("");
  const [assetVal, setAssetVal] = useState("0.000");
  const [userId, setUserId] = useState(localStorage.getItem("adminCusId"));
  const [visible, settVisible] = useState(false);
  const [secureNumb, setSecureNumb] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [allTokens, setAllTokens] = useState([]);
  const [copiedTxt, setCopiedTxt] = useState(false);
  const [copiedTxt1, setCopiedTxt1] = useState(false);
  const [deposits, setDeposits] = useState([]);
  const [tokenBal, setTokenBal] = useState("0.000");
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState("");
  // const [currentToken, setCurrentToken] = useState();
  // const [tokenName, setTokenName] = useState();
  const [tokenSymbol, setTokenSymbol] = useState();
  const [accountExists, setAccountExists] = useState();
  const [createWalletModal, setCreateWalletModal] = useState(false);
  const [walletAddr, setWalletAddr] = useState("");
  const [assetName, setAssetName] = useState();
  const [custId, setCustId] = useState("");
  const [showDeposit, setShowDeposit] = useState(false);
  const [tokenSign, setTokenSign] = useState();
  const [activeBg, setActiveBg] = useState("Home");
  const [network, setNetwork] = useState("BSC");
  const [fAmount, setAmount] = useState(null);
  // const [txId, setTxId] = useState(
  //   "0589f3200005888b2de942a03c58323c3e267b21c96bad96ea7e333098905746"
  // );
  // const [txId2, setTxId2] = useState(
  //   "0x360ba97e2a8f0deb200e34846092a3b8110283b1"
  // );

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const openCreateWalletModal = () => {
    setCreateWalletModal(true);
  };
  const closeCreateWalletModal = () => {
    setCreateWalletModal(false);
  };

  const onChange45 = (e) => {
    setAmount(e.target.value || null);
    // // //console.log('handleMOI');
  };
  // useEffect(() => {
  //   axios
  //     .get(api_url2 + "/v1/wallet/get/all/tokens", null, config)
  //     .then((data) => {
  //       console.log(data.data.data, "powerful");

  //       setAllTokens(data.data.data);
  //       setAssetName(data.data.data[0].tokenName);
  //       setTokenSign(data.data.data[0].tokenSymbol);
  //       setTokenSymbol(data.data.data[0].tokenSymbol);
  //       console.log(data.data.data[0].tokenName);

  //       // setWrap({
  //       //   code: data.data.data.product_category_code,
  //       // });
  //     })
  //     .catch((err) => {
  //       console.log(err.response); // "oh, no!"
  //     });
  // }, []);
  useEffect(() => {
    axios
      .get(api_url2 + "/v1/wallet/get/wallet/info/" + userId, null, config)
      .then((data) => {
        // console.log(data.data.data.balance);
        setTokenBal(data.data.data.balance);
        setAssetVal(data.data.data.balance * 1);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [auth]);
  useEffect(() => {
    axios
      .get(
        api_url2 + "/v1/wallet/get/wallet/fetch/deposits/" + userId,
        null,
        config
      )
      .then((data) => {
        // console.log(data.data.data);
        setDeposits(data.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [auth]);
  useEffect(() => {
    setIsLoading2(true);
    axios
      .get(api_url2 + "/v1/wallet/get/all/tokens", null, config)
      .then((data) => {
        // console.log(data.data.data, "powerful");
        setIsLoading2(false);
        setAssetName(data.data.data[0].tokenName);
        setTokenSign(data.data.data[0].tokenSymbol);
        setAllTokens(data.data.data);
        // setWrap({
        //   code: data.data.data.product_category_code,
        // });
      })
      .catch((err) => {
        console.log(err.response); // "oh, no!"
      });
  }, []);
  useEffect(async () => {
    // console.log(auth);
    if (auth.user !== null) {
      await axios
        .get(api_url2 + "/v1/wallet/check/wallet/" + userId, null, config)
        .then((data) => {
          setAccountExists(data.data.accountExists);
        })
        .catch((err) => {
          console.log(err.response); // "oh, no!"
        });
    }
  }, [auth]);

  const openVisibility = () => {
    settVisible(true);
    setSecureNumb(true);
  };
  const closeVisibility = () => {
    settVisible(false);
    setSecureNumb(false);
  };
  // const timer = () => {
  //   if (timeOut == false) {
  //     setTimeout(() => {
  //       setTimeOuut(false);
  //     }, 1000);
  //   } else {
  //     setTimeOuut(true);
  //   }
  // };

  const copyWalletAddress = (e) => {
    navigator.clipboard.writeText(e);
    // let currentId = e.currentTarget.id;
    // setActiveBg(currentId);
    setCopiedTxt(true);
  };
  const copyTextText = (e) => {
    navigator.clipboard.writeText(e);
    // let currentId = e.currentTarget.id;
    // setActiveBg(currentId);
    setCopiedTxt(true);
  };
  const copyTextText2 = (e) => {
    navigator.clipboard.writeText(e);
    setCopiedTxt1(true);
  };
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const timer = setTimeout(() => {
    setCopiedTxt(false);
    setCopiedTxt1(false);
    setAlert("");
  }, 5000);
  // const hide_error = setTimeout(setAlert(""), 5000);
  const openDepositDiv = async (tokenName, tokenSymbol) => {

    let transType = 1
    setActiveBg("deposit_btn");
console.log(accountExists);
    if (accountExists) {
      // console.log("accountExists");
      setShowDeposit(true);
      setIsLoading(false);
    } else {
      console.log("not accountExists");
      setShowDeposit(true);
      // console.log(userId);
      let res3 = await createWallet(userId, tokenSymbol, transType);
      // console.log(res3);
      setIsLoading(true);

      if (res3.success === true) {
        setWalletAddr(res3.data.address);
        setIsLoading(false);
      }
    }
  };

  const fundCustomer = async () => {
    console.log(fAmount);
    setIsLoading3(true)
    
    if (fAmount === null) {
      setAlert('Please enter amount.');
      setIsLoading3(false)
    } else {
      console.log(parseInt(fAmount.replace(/,/g, "")));
      const amount = parseInt(fAmount.replace(/,/g, ""));

      const body = JSON.stringify({
        amount,
      });
  
      // setAssetVal(assetVal + amount)
  
      try {
        const res = await axios.post(
          api_url2 + "/v1/wallet/fund/customer/" + userId,
          body,
          config
        );
        console.log(res.data.message);

        if (res.data.success === true) {
          return window.location.replace("/super_admin/overview");
          // setIsLoading3(false)
        } else {
          setAlert(res.data.message)
          setIsLoading3(false)
        }
        setAlert(res.data.message);
      } catch (err) {
        console.log(err.response.data.message);
        setAlert(err.response.data.message);
        setAlertType("danger");
        setIsLoading3(false)
      }
    }
  };
  const closeDepositDiv = () => {
    setShowDeposit(false);
    setActiveBg("withdraw_btn");
  };

  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="walletClass3">
            <div className="walletSubClass3ng">
              <div className="wallet_heading">Wallet Overview</div>
              <div className="spanEstimated">
                Estimated balance
                {visible == false ? (
                  <VisibilityIcon
                    className="eye-visibility"
                    onClick={openVisibility}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="eye-visibility"
                    onClick={closeVisibility}
                  />
                )}
              </div>
              {isLoading2 == true ? (
                <div className="loading_icon_div_amnt">
                  <LoadingIcons.ThreeDots
                    fill="#fff"
                    className="loading_iconnn"
                  />
                </div>
              ) : (
                <>
                  {secureNumb == true ? (
                    <div className="arrowSpan">
                      *********** <div className="usd_val">*********</div>
                    </div>
                  ) : (
                    <div className="arrowSpan">
                      ₦{assetVal}{" "}
                      <div className="usd_val">≈ ${assetVal / 560}</div>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="DivCap">
              <div className="formConcept">
                <div className="formConcept1">
                  <span className="formConceptWallet">My Assets</span>
                  <div
                  // className="formConceptSup"
                  // onClick={sending}
                  ></div>
                </div>
                {/* <div className="divConcept2">
                  <div>
                    <StarRateIcon className="starRateIcon" />
                  </div>
                  <div>
                    <div className="nigeriaCurrency">Nigerian Naira</div>
                    {secureNumb == true ? (
                      <div style={{ marginBottom: "5px" }}>*******</div>
                    ) : (
                      <div style={{ marginBottom: "5px" }}>0.00</div>
                    )}

                    <div style={{ display: "flex" }}>
                      <button
                        id="deposit"
                        className={
                          activeBg == "deposit"
                            ? "depositButton_active"
                            : "depositButton"
                        }
                        onClick={changeBg}
                      >
                        Deposit
                      </button>

                      <button
                        id="withdraw"
                        className={
                          activeBg == "withdraw"
                            ? "depositButton_active"
                            : "depositButton"
                        }
                        onClick={changeBg}
                      >
                        Withdraw
                      </button>

                      <button className="buttonMenu_drop">
                        <MoreVertIcon
                          className="divVan"
                          // onClick={works6}
                          id="tab3"
                        />
                        <MoreVertIcon
                          className="divVan"
                          // onClick={works4}
                          id="tab4"
                        />
                        <div className="downContent" id="downContent2">
                          <div
                            className="depo"
                            // onClick={changePage5}
                          >
                            Deposit History
                          </div>
                          <div
                            className="depo"
                            // onClick={changePage6}
                          >
                            Transaction History
                          </div>
                          <div
                            className="depo"
                            // onClick={changePage4}
                          >
                            Withdrawal History
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div> */}

                <hr />
                {isLoading2 == true ? (
                  <div className="loading_icon_d">
                    <LoadingIcons.ThreeDots
                      fill="#229e54"
                      className="loading_iconnn"
                    />
                    <p className="loading_txt">Loading...</p>
                  </div>
                ) : (
                  <>
                    {allTokens.map((data) => (
                      <div className="divConcept2 ">
                        <div>
                          <StarRateIcon className="starRateIcon" />
                        </div>
                        <div>
                          <div className="nigeriaCurrency">
                            {data.tokenName}
                          </div>
                          {secureNumb == true ? (
                            <div style={{ marginBottom: "5px" }}>*******</div>
                          ) : (
                            <div style={{ marginBottom: "5px" }}>
                              {tokenBal}
                              <span className="token_symbolism">
                                {tokenSign}
                              </span>
                            </div>
                          )}

                          <div style={{ display: "flex" }}>
                            <button
                              id="withdraw"
                              className={
                                activeBg == "deposit_btn"
                                  ? "depositButton_active"
                                  : "depositButton"
                              }
                              // id={data.tokenSymbol}
                              onClick={() =>
                                openDepositDiv(data.tokenName, data.tokenSymbol)
                              }
                            >
                              Fund Wallet
                            </button>
                            {/* <button
                              id="withdraw_btn"
                              className={
                                activeBg == "withdraw_btn"
                                  ? "depositButton_active"
                                  : "depositButton"
                              }
                              onClick={closeDepositDiv}
                            >
                              {" "}
                              Withdraw
                            </button> */}

                            <button className="buttonMenu_drop">
                              <MoreVertIcon
                                className="divVan"
                                // onClick={works2}
                                id="tab1"
                              />
                              <MoreVertIcon
                                className="divVan"
                                // onClick={works}
                                id="tab2"
                              />
                              <div className="downContent" id="downContent1">
                                <div
                                  className="depo"
                                  // onClick={changePage5}
                                >
                                  Deposit History
                                </div>
                                <div
                                  className="depo"
                                  // onClick={changePage6}
                                >
                                  Transaction History
                                </div>
                                <div
                                  className="depo"
                                  // onClick={changePage4}
                                >
                                  Withdrawal History
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              {showDeposit == true ? (
                <div className="deposit_div">
                  <div className="input_amnt_heading">Input Amount</div>
                  <div className="input_amnt_div">
                    {isLoading ? (
                      <div className="loading_icon_d">
                        <LoadingIcons.ThreeDots
                          fill="#229e54"
                          className="loading_iconnn"
                        />
                        <p className="loading_txt">Loading...</p>
                      </div>
                    ) : (
                      <div>
                        <NumberFormat
                          // format="#### #### #### ####"
                          className="input_amnt_div_input"
                          name="card_numberVar"
                          thousandSeparator={true}
                          inputmode="numeric"
                          value={fAmount}
                          onChange={(e) => onChange45(e)}
                        />
                        <button
                          className="proceed_cust_funding_wallet_div mt-3"
                          onClick={fundCustomer}
                          disabled={isLoading3}
                        >
                          Proceed
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      {/* {successDiv == true ? (
        <div className="processing_transac_div insufficient">
          <Success_Error_Component
            remove_success_div={closeCheckoutOptions}
            btn_txt="Continue"
            // msg={success_msg}
            msg={`${success_msg} Order-Id: ${order_id}`}
            errorMsgDiv={errorDiv}
            link_btn={true}
            src="/dashboard/savings"
          />
        </div>
      ) : null} */}
      {alert == "" ? null : (
        <CustomAlert
          alert={alert}
          alertType={alertType}
          onChange={timer}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.shop.cart,
});

// export default Wallet;
export default connect(mapStateToProps, { createWallet, depositToken })(
  Wallet1
);
