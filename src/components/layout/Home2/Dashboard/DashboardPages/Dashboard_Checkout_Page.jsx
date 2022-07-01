import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { connect } from "react-redux";
import axios from "axios";
import LoadingIcons from "react-loading-icons";

import { createOrder } from "../../../../../actions/shop";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import KeyIcon from "@mui/icons-material/Key";
import PasswordIcon from "@mui/icons-material/Password";
import DateRangeIcon from "@mui/icons-material/DateRange";
import {
  proceedToCheckout,
  sendPin,
  sendOtp,
} from "../../../../../actions/transactions";
import NumberFormat from "react-number-format";
import "../DashboardStyles/dashboardCheckout.css";
const Dashboard_Checkout_Page = ({
  proceedToCheckout,
  sendPin,
  sendOtp,
  auth,
  cAmount,
  getProductId,
  createOrder,
  closePaymentModal,
}) => {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isOtp, setIsOtp] = useState(false);
  const [pin, setPin] = useState("");
  const [otp, setOtp] = useState("");
  const [successPop, setSuccessPop] = useState(false);

  const [payload1, setPayload1] = useState([]);
  const [trnMode, setTrnMode] = useState("");
  const [Loading, setLoading] = useState(false);
  const [payload2, setPayload2] = useState([]);
  const [payload3, setPayload3] = useState([]);
  const [cardInfoOne, setCardInfoOne] = useState({
    card_numberVar: "",
    cardExDate: "",
    cvv: "",
  });
  const [amount, setAmount] = useState(cAmount);

  //console.log(cAmount);
  //console.log(getProductId);

  const { card_numberVar, cardExDate, cvv } = cardInfoOne;
  const [modal, setModal] = useState(false);
  function limit(val, max) {
    if (val.length === 1 && val[0] > max[0]) {
      val = "0" + val;
    }

    if (val.length === 2) {
      if (Number(val) === 0) {
        val = "01";

        //this can happen when user paste number
      } else if (val > max) {
        val = max;
      }
    }

    return val;
  }
  const SuccessIndicator = require("react-success-indicator");
  function cardExpiry(val) {
    let month = limit(val.substring(0, 2), "12");
    let date = limit(val.substring(2, 4), "50");

    return month + (date.length ? "/" + date : "");
  }

  const OpenModal = () => {
    setModal(true);
  };

  const CloseModal = () => {
    setModal(false);
  };

  const [userInfo, setUserInfo] = useState({
    UserId: "",
    Userfullname: "",
    Useremail: "",
    UserphoneNumber: "",
    UseruserImage: "",
    Userrelationship: "",
    Usergender: "",
    Userbvn: "",
    UserdateOfBirth: "",
  });

  const {
    UserId,
    Userfullname,
    Useremail,
    Usergender,
    Userrelationship,
    UseruserImage,
    UserphoneNumber,
    Userbvn,
    UserdateOfBirth,
  } = userInfo;

  useEffect(() => {
    //console.log(cAmount);
    // setCartNum(cart.length)
    // fetchDepositLinks();
    //console.log(auth);
    if (auth.user !== null) {
      // let dataa = 'stackabuse.com';
      // //console.log( new Buffer(dataa));
      var todecoded = auth.user;
      var todecodedn = todecoded.user.userImage;

      // //console.log('====================================');
      //console.log(todecodedn);
      // //console.log('====================================');

      const getName = todecoded.user.fullname;
      const splitName = getName.split(" ");

      setUserInfo({
        UserId: todecoded.user.id,
        Userfullname: todecoded.user.fullname,
        Userfirstname: splitName[0],
        Userlastname: splitName[1],
        Useremail: todecoded.user.email,
        UseruserImage: todecoded.user.userImage,
        UserphoneNumber: todecoded.user.phoneNumber,
        Userrelationship: todecoded.user.relationship,
        Usergender: todecoded.user.gender,
        Userbvn: todecoded.user.BVN,
        UserdateOfBirth: todecoded.user.dateOfBirth,
      });

      // if (todecoded.user.userImage !== null) {
      //   setImage(api_url2+'/'+todecoded.user.userImage)
      // } else {
      //   setImage('../../img/profile_img.jpeg')
      // }
    }
  }, [auth]);

  const show_pin_modal = async () => {
    const getExDate = cardExDate.split("/");
    let expiry_month = getExDate[0];
    let expiry_year = getExDate[1];
    // //console.log(card_numberVar.replace(/ /g, ''), expiry_month, expiry_year, cvv, Userfullname, Useremail, UserphoneNumber, cAmount);
    let card_number = card_numberVar.replace(/ /g, "");
    setLoading(true);
    let res3 = await proceedToCheckout(
      card_number,
      expiry_month,
      expiry_year,
      cvv,
      Userfullname,
      Useremail,
      UserphoneNumber,
      amount
      
    );
    //console.log(res3.data.data, "response from dashboard checkout ");

    if (res3.success === true) {
      setTrnMode(res3.data.data.mode);
      if (res3.data.data.mode === "pin") {
        setIsSuccessful(true);
        //console.log(res3.data.data.stringify);
        setPayload1(res3.data.data.stringify);
        setLoading(false);
      } else {
        setIsOtp(true);
        setLoading(false);
      }
    }
  };

  const show_otp_modal = async () => {
    setLoading(true);
    // //console.log(payload1, pin);
    let sendP1 = await sendPin(payload1, pin);
    // //console.log(sendP1);

    if (sendP1.success === true) {
      setIsOtp(true);
      setIsSuccessful(!isSuccessful);
      setLoading(false);
      // //console.log(sendP1.data.res_stringified);
      setPayload2(sendP1.data.res_stringified);
    }
  };

  const submitOtp = async () => {
    setLoading(true);
    // //console.log(payload2, otp, UserId);
    if (trnMode === "pin") {
      let sendO1 = await sendOtp(payload2, otp, UserId, getProductId);
      // //console.log(sendO1);

      if (sendO1.success === true) {
        setSuccessPop(true);

        setIsSuccessful(!isSuccessful);
        setLoading(false);

        createOrder(getProductId);

        setTimeout(() => {
          return window.location.replace("/dashboard/savings");
        }, 5000);
      } else {
        setSuccessPop(false);
      }
    } else {
    }
  };

  // const timer = setTimeout(() => {
  //   return window.location.replace("/dashboard/savings");
  // }, 5000);

  const onChange1 = (e) => {
    setCardInfoOne({ ...cardInfoOne, [e.target.name]: e.target.value });
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  const onChangeOtp = (e) => {
    setOtp(e.target.value);
  };
  return (
    // <div className="checkout_main">
    <>
      <section className="checkout_page_section">
        <div className="checkout_out_div" onClick={closePaymentModal}></div>
        <div className="container">
          {isOtp == false ? (
            isSuccessful == false ? (
              <div className="checkout_cont">
                <div className="checkout_cont_header">
                  <div className="checkout_header_img">
                    <img
                      src="/img/egoras-logo.svg"
                      alt=""
                      className="egorasconfig_logo_checkout"
                    />
                  </div>
                  <div className="checkout_header_btn">
                    {/* <CloseIcon
                    onClick={props.click}
                    className="close_checkout_icon"
                  /> */}
                  </div>
                </div>

                {Loading == true ? (
                  // <div className="loading_div">
                  <div className="loading_cont">
                    <LoadingIcons.SpinningCircles
                      fill="#41ba71"
                      stroke="#41ba7161"
                      speed={0.6}
                    />
                    <div className="loading_titile">Processing...</div>
                  </div>
                ) : (
                  // </div>
                  <>
                    <div className="checkout_total_balance">
                      Total Balance:{" "}
                      <span className="balance_checkout">₦{cAmount}</span>
                    </div>
                    <div className="card_details_title">ENTER CARD DETAILS</div>
                    <div className="card_details_inputs">
                      {/* -------------==== */}
                      <div className="card_input_cont">
                        <div className="card_input_heading">Card Number</div>
                        <div className="number_form_div">
                          <CreditCardIcon className="credit_icon" />
                          <NumberFormat
                            format="#### #### #### ####"
                            className="card_details_input1"
                            placeholder="0000 0000 0000 0000"
                            name="card_numberVar"
                            value={card_numberVar}
                            onChange={(e) => onChange1(e)}
                          />
                        </div>
                      </div>
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      <div className="card_input_contss">
                        <div className="card_input_cont">
                          <div className="card_input_heading">Date</div>
                          <div className="number_form_div">
                            <DateRangeIcon className="credit_icon" />
                            <NumberFormat
                              format={cardExpiry}
                              className="card_details_input1"
                              placeholder="MM/YY"
                              name="cardExDate"
                              value={cardExDate}
                              onChange={(e) => onChange1(e)}
                            />
                          </div>
                        </div>
                        <div className="card_input_cont">
                          <div className="card_input_heading">CVV</div>
                          <div className="number_form_div">
                            <CreditCardIcon className="credit_icon" />
                            <NumberFormat
                              format="###"
                              className="card_details_input1"
                              placeholder="123"
                              name="cvv"
                              value={cvv}
                              onChange={(e) => onChange1(e)}
                            />
                          </div>
                        </div>
                      </div>
                      {/* ========= */}
                      {/* ========= */}
                      {/* ========= */}
                      {/* ========= */}
                      <div className="card_details_titleww">
                        {" "}
                        100% Safe and Secure
                      </div>
                      {/* ====== */}
                      {/* ====== */}
                      {/* ====== */}
                      {/* ====== */}
                      <button className="pay_now_btn" onClick={show_pin_modal}>
                        Pay Now
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="checkout_cont">
                <div className="checkout_cont_header">
                  <div className="checkout_header_img">
                    <img
                      src="/img/egoras-logo.svg"
                      alt=""
                      className="egoras_logo_checkout"
                    />
                  </div>
                  <div className="checkout_header_btn">
                    {/* <CloseIcon
                    onClick={props.click}
                    className="close_checkout_icon"
                  /> */}
                  </div>
                </div>
                {Loading == true ? (
                  // <div className="loading_div">
                  <div className="loading_cont">
                    <LoadingIcons.SpinningCircles
                      fill="#41ba71"
                      stroke="#41ba7161"
                      speed={0.6}
                    />
                    <div className="loading_titile">Processing...</div>
                  </div>
                ) : (
                  // </div>
                  <>
                    <div className="card_details_title">
                      ENTER YOUR CARD PIN TO CONTINUE
                    </div>
                    <div className="card_details_inputs">
                      {/* -------------==== */}
                      <div className="card_input_cont">
                        <div className="card_input_heading">Card Pin</div>
                        <div className="number_form_div">
                          <KeyIcon className="credit_icon" />
                          <NumberFormat
                            type="password"
                            maxLength={4}
                            minLength={1}
                            //   format="####"
                            className="card_details_input1"
                            placeholder="0000"
                            name="pin"
                            value={pin}
                            onChange={onChangePin}
                          />
                        </div>

                        {/* <input
                  type="password"
                //   format="####"
                  className="card_details_input1"
                  placeholder="0000"
                /> */}
                      </div>
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ========= */}
                      {/* ========= */}
                      {/* ========= */}
                      {/* ========= */}
                      {/* ====== */}
                      {/* ====== */}
                      {/* ====== */}
                      {/* ====== */}
                      <button className="pay_now_btn" onClick={show_otp_modal}>
                        Continue
                      </button>
                    </div>
                  </>
                )}
              </div>
            )
          ) : (
            <div className="checkout_cont">
              <div className="checkout_cont_header">
                <div className="checkout_header_img">
                  <img
                    src="/img/egoras-logo.svg"
                    alt=""
                    className="egoras_logo_checkout"
                  />
                </div>
                <div className="checkout_header_btn">
                  {/* <CloseIcon
                  onClick={props.click}
                  className="close_checkout_icon"
                /> */}
                </div>
              </div>
              {Loading == true ? (
                <div className="loading_cont">
                  <LoadingIcons.SpinningCircles
                    fill="#41ba71"
                    stroke="#41ba7161"
                    speed={0.6}
                  />
                  <div className="loading_titile">Processing...</div>
                </div>
              ) : // <div className="loading_div">

              successPop == true ? (
                <div className="success_icon_div">
                  <p>
                    <SuccessIndicator
                      size="96px"
                      color="black"
                      className="success_indic"
                      fill="#000"
                      stroke="#fff"
                    />
                  </p>

                  <p className="acct_created_txt">
                    You have successfully made your initial payment and have
                    locked your item.{" "}
                  </p>
                </div>
              ) : (
                // </div>
                <>
                  <div className="card_details_title">
                    ENTER OTP SENT TO YOU
                  </div>
                  <div className="card_details_inputs">
                    {/* -------------==== */}
                    <div className="card_input_cont">
                      <div className="card_input_heading">OTP Code</div>

                      <div className="number_form_div">
                        <PasswordIcon className="credit_icon" />
                        <input
                          type="number"
                          maxLength={5}
                          minLength={1}
                          //   format="####"
                          className="card_details_input1"
                          placeholder="00000"
                          name="otp"
                          value={otp}
                          onChange={onChangeOtp}
                        />
                      </div>
                    </div>
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    {/* ====== */}
                    {/* ====== */}
                    {/* ====== */}
                    {/* ====== */}
                    <button className="pay_now_btn" onClick={submitOtp}>
                      Submit
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
        </div>
      </section>
    </>
    // </div>
  );
};

// export default Dashboard_Checkout_Page;

const mapStateToProps = (state) => ({
  auth: state.auth,
  // isAuthenticated: state.auth.isAuthenticated,
  // cart: state.shop.cart
});

export default connect(mapStateToProps, {
  proceedToCheckout,
  sendPin,
  sendOtp,
  createOrder,
})(Dashboard_Checkout_Page);
