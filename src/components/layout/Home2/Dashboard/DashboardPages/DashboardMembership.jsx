import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../DashboardStyles/DashboardMembership.css';
import {
  useFlutterwave,
  closePaymentModal,
} from 'flutterwave-react-v3';

import axios from 'axios';
import { connect } from 'react-redux';
import LoadingIcons from 'react-loading-icons';
import { API_URL2 as api_url2 } from '../../../../../actions/types';
const DashboardMembership = ({ auth }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const [paymentModal, setPaymentModal] = useState(false);
  const [subscribePaymentModal, setSubscribePaymentModal] =
    useState(false);
  const [tokenBal, setTokenBal] = useState(0);
  const [walletBalance, setWalletBalance] = useState(false);
  const [option, setOption] = useState(null);
  const [option2, setOption2] = useState(null);
  const [ProcessingDiv, setProcessingDiv] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const { fullname, phoneNumber, email } = userInfo;

  useEffect(async () => {
    var Authorized = auth.user;

    var userId = Authorized.user.id;
    const { fullname, phoneNumber, email } = Authorized.user;
    setUserInfo({
      fullname,
      phoneNumber,
      email,
    });
    await axios
      .get(
        api_url2 + '/v1/wallet/get/wallet/info/' + userId,
        null,
        config
      )
      .then((data) => {
        console.log(data.data.data.balance);
        setTokenBal(data.data.data.balance);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [auth]);

  const flutterConfig = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: 'EGC-' + Date.now(),
    amount: 1, // this amount is for testing
    currency: 'NGN',
    // redirect_url: 'https://saul.egoras.com/v1/webhooks/all',

    payment_options: 'card',
    // payment_plan:63558,
    customer: {
      phone_number: phoneNumber,
      email: email,
      name: fullname,
    },
    meta: {
      eventType: '1',
    },
    customizations: {
      title: 'Payment for Egoras Membership',
      description: `This is a one time payment, you'll be notified via email as soon`,
      logo: 'https://egoras.com/img/egoras-logo.svg',
    },
  };

  const handleFlutterPayment = useFlutterwave(flutterConfig);
  const togglePaymentModal = () => {
    if (paymentModal === true) {
      setPaymentModal(false);
    } else if (paymentModal === false) {
      setPaymentModal(true);
    }
  };
  const toggleSubscribePaymentModal = () => {
    if (subscribePaymentModal === true) {
      setSubscribePaymentModal(false);
    } else if (subscribePaymentModal === false) {
      setSubscribePaymentModal(true);
    }
  };
  const selectOption = async (value) => {
    console.log(auth.user.user);

    switch (value) {
      case 0:
        // setProcessingDiv(true);

        handleFlutterPayment({
          callback: async (response) => {
            //console.log(response);
            try {
              if (!response.transaction_id) {
                console.log(
                  'an uncaught error just occured. contact support '
                );
              }
              //
              await axios
                .post(
                  `${api_url2}/v1/user/membership/subscribe`,
                  null,
                  config
                )
                .then((response) => {});
              closePaymentModal();
            } catch (error) {
              console.log(error.response);
            }
          },
          onClose: (response) => {
            // window.location.replace('google.com');
          },
        });

        break;

      case 1:
        setProcessingDiv(true);

        break;
    }
  };
  const selectOption2 = async (value) => {
    console.log(auth.user.user);

    switch (value) {
      case 0:
        setProcessingDiv(true);

        break;

      case 1:
        setProcessingDiv(true);

        break;
    }
  };

  return (
    <div className="other2">
      <section className=" no-bg no_paddd">
        <div className="membership_cont">
          <div className="membership_slide"></div>
          <div className="membership_subscription_plans_payment_div">
            <div className="membership_subscription_plans_payment_div_cont1">
              <div className="membership_subscription_plans_payment_div_cont1_div1">
                <div className="payment_plans_heading_area">
                  <img src="/img/icon_for_sub.svg" alt="" />
                  <p className="payment_plans_header_txt">
                    Become A Member
                  </p>
                </div>
                <div className="payment_plans_paragraph_area">
                  <p className="payment_plans_paragraph_txt">
                    Activate your membership to become a part of the
                    Egoras cooperative with a one time payment of
                    ₦2,500 only.
                  </p>
                </div>
                <div className="payment_plans_price_area">
                  <p className="payment_plans_paragraph_txt_price">
                    ₦2,500
                  </p>
                </div>
                <div className="payment_plans_btn_area">
                  <button
                    className="membership_btn"
                    onClick={togglePaymentModal}
                  >
                    Activate
                  </button>
                </div>
              </div>
              {/* ================================================================== */}
              {/* ================================================================== */}
              {/* ================================================================== */}
              {/* ================================================================== */}
              {/* ================================================================== */}
              {/* ================================================================== */}
              {/* ================================================================== */}
              <div className="membership_subscription_plans_payment_div_cont1_div1b">
                <div className="payment_plans_heading_area">
                  <img src="/img/icon_for_sub2.svg" alt="" />
                  <p className="payment_plans_header_txt">
                    Subscription
                  </p>
                </div>
                <div className="payment_plans_paragraph_area">
                  <p className="payment_plans_paragraph_txt">
                    Subscribe to enjoy and access all features and
                    bonuses on Egoras.
                  </p>
                </div>
                <div className="payment_plans_price_area">
                  <p className="payment_plans_paragraph_txt_price">
                    ₦1,000 <span className="only"> /monthly</span>
                  </p>
                </div>
                <div className="payment_plans_btn_area">
                  <button
                    className="membership_btn"
                    onClick={toggleSubscribePaymentModal}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="note_div">
              <span className="note_heading">Note:</span> Membership
              and subscription fee are to be paid with Engn from your
              egoras wallet .
            </div>
          </div>
          <div className="membership_subscription_plans_transcation"></div>
        </div>
      </section>

      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}

      {/* Membership Payment start */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {paymentModal == true ? (
        <div className="membership_payment_modal_div">
          <div className="membership_payment_modal_div_cont_area">
            <div className="membership_payment_modal_div_heading">
              Membership Payment{' '}
              <div className="membership_payment_modal_div_heading_para">
                Select payment method {'>'}
              </div>
            </div>
            <div className="membership_payment_modal_div_body">
              <div className="membership_payment_modal_div_body_cont1">
                <div className="input_radio_sub_pay">
                  <input
                    type="radio"
                    name="payment"
                    id=""
                    className="checkBox"
                    style={{ display: 'block', cursor: 'pointer' }}
                    onClick={() => {
                      setOption(0);
                      setWalletBalance(false);
                    }}
                  />
                  Pay via Debit/Credit Card
                </div>

                <div className="membership_payment_modal_div_body_cont1_para">
                  Cards accepted Master card, Visa card, Verve card.
                </div>
              </div>
              <div className="membership_payment_modal_div_body_cont1">
                <div className="input_radio_sub_pay">
                  <input
                    type="radio"
                    name="payment"
                    id=""
                    className="checkBox"
                    style={{ display: 'block', cursor: 'pointer' }}
                    onClick={() => {
                      setOption(1);
                      setWalletBalance(true);
                    }}
                  />
                  Pay via Wallet
                </div>

                {/* <div className="membership_payment_modal_div_body_cont1_para">
                  Cards accepted Master card, Visa card, Verve card.
                </div> */}
              </div>
              {walletBalance === true ? (
                <div className="wallet_bal_pay_member">
                  Wallet Balance: {tokenBal.toFixed(2)}
                </div>
              ) : null}

              <div className=" payment_price_cont">
                <div className="input_radio_sub_pay">
                  <span className="member_pay_total_amnt">
                    {' '}
                    <span className="total_amnt">Amount:</span>{' '}
                    ₦2,500.00
                  </span>
                </div>

                {/* <div className="membership_payment_modal_div_body_cont1_para">
                  Cards accepted Master card, Visa card, Verve card.
                </div> */}
              </div>
              <div className="subsribe_button">
                <button
                  className="subsribe_button_btn"
                  onClick={() => {
                    selectOption(option);
                  }}
                >
                  Activate
                </button>
              </div>
            </div>
          </div>

          <div className="close-button_for_member_pay_div">
            <CloseIcon
              className="member_pay_div_btn"
              onClick={() => {
                togglePaymentModal();
                setWalletBalance(false);
              }}
            />
            Close
          </div>
        </div>
      ) : null}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}

      {/* Subscription Payment start */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {subscribePaymentModal == true ? (
        <div className="membership_payment_modal_div">
          <div className="membership_payment_modal_div_cont_area">
            <div className="membership_payment_modal_div_heading">
              Subscription Payment{' '}
              <div className="membership_payment_modal_div_heading_para">
                Select payment method {'>'}
              </div>
            </div>
            <div className="membership_payment_modal_div_body">
              <div className="membership_payment_modal_div_body_cont1">
                <div className="input_radio_sub_pay">
                  <input
                    type="radio"
                    name="payment"
                    id=""
                    className="checkBox"
                    style={{ display: 'block', cursor: 'pointer' }}
                    onClick={() => {
                      setOption2(0);
                      setWalletBalance(false);
                    }}
                  />
                  Pay via Debit/Credit Card
                </div>

                <div className="membership_payment_modal_div_body_cont1_para">
                  Cards accepted Master card, Visa card, Verve card.
                </div>
              </div>
              <div className="membership_payment_modal_div_body_cont1">
                <div className="input_radio_sub_pay">
                  <input
                    type="radio"
                    name="payment"
                    id=""
                    className="checkBox"
                    style={{ display: 'block', cursor: 'pointer' }}
                    onClick={() => {
                      setOption2(1);
                      setWalletBalance(true);
                    }}
                  />
                  Pay via Wallet
                </div>

                {/* <div className="membership_payment_modal_div_body_cont1_para">
                  Cards accepted Master card, Visa card, Verve card.
                </div> */}
              </div>
              {walletBalance === true ? (
                <div className="wallet_bal_pay_member">
                  Wallet Balance: {tokenBal.toFixed(2)}
                </div>
              ) : null}

              <div className=" payment_price_cont">
                <div className="input_radio_sub_pay">
                  <span className="member_pay_total_amnt">
                    {' '}
                    <span className="total_amnt">Amount:</span>{' '}
                    ₦1,000.00
                  </span>
                </div>

                {/* <div className="membership_payment_modal_div_body_cont1_para">
                  Cards accepted Master card, Visa card, Verve card.
                </div> */}
              </div>
              <div className="subsribe_button">
                <button
                  className="subsribe_button_btn"
                  onClick={() => {
                    selectOption2(option2);
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="close-button_for_member_pay_div">
            <CloseIcon
              className="member_pay_div_btn"
              onClick={() => {
                toggleSubscribePaymentModal();
                setWalletBalance(false);
              }}
            />
            Close
          </div>
        </div>
      ) : null}
      {ProcessingDiv == false ? null : (
        <div
          className="processing_transac_div"
          style={{ background: '#fff', zIndex: '10000000' }}
        >
          <LoadingIcons.Bars fill="#229e54" />
          Processing Transaction...
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(DashboardMembership);
