import React, { useEffect, useCallback, useState } from 'react';

import axios from 'axios';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import verify from '../../../../flutterwave/API/Verify';
import CloseIcon from '@mui/icons-material/Close';
// import Wallet1 from "../../Wallet/Wallet1";
import { useHistory } from 'react-router-dom';
import Success_Error_Component from '../../../assets/Success_Error_Component';
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
  API_URL2,
} from '../../../../actions/types';
import { numberWithCommas } from '../../../../static';
import {
  useFlutterwave,
  closePaymentModal,
} from 'flutterwave-react-v3';
import FlutterButton from '../../../../flutterwave/FlutterButton';
import Dashboard_Checkout_Page from '../Dashboard/DashboardPages/Dashboard_Checkout_Page';
import LoadingIcons from 'react-loading-icons';
import PaymentPlan from '../../../../flutterwave/API/PaymentPlan';
import verifyTransaction from '../../../../flutterwave/API/Verify';
import { createOrder } from '../../../../actions/shop';
import { connect } from 'react-redux';
import initPayment from '../../../../flutterwave/initPayment';
import initializePayment from '../../../../flutterwave/API/initializePayment';

const CheckoutModalComponent = ({
  payload,
  closeCheckoutOptions,
  auth,
  props,
}) => {
  //destructure the payload and return values
  const {
    amount,
    percentage,
    product_brand,
    product_category_code,
    product_details,
    product_duration,
    product_id,
    product_image,
    product_name,
    product_specifications,
    product_type,
    initial_deposit,
    paymentPerday,
    payment_type,
    days_left,
    no_of_days,
    no_of_days_paid,
    startDate,
    endDate,
    status,
  } = payload;

  console.log(payload, 'this is the complete payload');

  const [user_id, setUserId] = useState('');
  const [isloading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [phone_no, setPhoneNo] = useState('');
  const [walletBalance, setWalletBalance] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [ProcessingDiv, setProcessingDiv] = useState(false);
  const [fullname, setName] = useState('');
  const [option, setOption] = useState(-1);
  const [customer_data, setCustomerData] = useState({});
  const [tokenBal, setTokenBal] = useState('');
  const [assetVal, setAssetVal] = useState('');
  const [error_msg, setErrorMsg] = useState('');
  const [success_msg, setSuccessMsg] = useState('');
  const [order_id, setOrder_id] = useState('');

  const [tokenSign, setTokenSign] = useState();
  const [hardNumb, setHardNum] = useState(300);
  const [errorDiv, setErrorDiv] = useState(false);
  const [successDiv, setSuccessDiv] = useState(false);
  const [total, setTotal] = useState('');
  // //console.log(phone_no, name, option);
  // //console.log(phone_no, name, option)
  let deliveryFee = 0;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const [addressName, setAddressName] = useState('');
  const history = useHistory();

  useEffect(async () => {
    if (payment_type === 'OUTRIGHT') {
      // alert(initial_deposit);
      setTotal(amount);
    } else if (payment_type === 'INSTALLMENT') {
      setTotal(initial_deposit + deliveryFee);
    }
    await axios
      .get(api_url2 + '/v1/user/address/info', null, config)
      .then((response) => {
        //console.log(response , "wewter kings")
        //console.log(response.data.cusAddress. address,"market")

        setAddressName(response.data.cusAddress.address);
        //  //console.log(addressName,"Bk is good for development")
      });
  }, []);

  const redirect = (direction) => {
    history.push(direction);
  };
  useEffect(async () => {
    var Authorized = auth.user;
    var userId = Authorized.user.id;

    await axios
      .get(
        api_url2 + '/v1/wallet/get/wallet/info/' + userId,
        null,
        config
      )
      .then((data) => {
        console.log(data.data.data.balance);
        setTokenBal(data.data.data.balance);
        setAssetVal(data.data.data.balance * 1);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [auth]);
  useEffect(async () => {
    // setIsLoading2(true);
    await axios
      .get(api_url2 + '/v1/wallet/get/all/tokens', null, config)
      .then((data) => {
        console.log(data.data.data, 'powerful');
        setTokenSign(data.data.data[0].tokenSymbol);
      })
      .catch((err) => {
        console.log(err.response); // "oh, no!"
      });
  }, []);
  useEffect(() => {
    if (auth.user !== null) {
      //console.log(auth.user, "user  exist ");
      setEmail(auth.user.user.email);
      setPhoneNo(auth.user.user.phoneNumber);
      setName(auth.user.user.fullname);
      const { fullname, email, phoneNumber, id } = auth.user.user;
      setCustomerData({
        name: fullname,
        email,
        phonenumber: phoneNumber,
        customer_id: id,
      });
    }
  }, []);

  var vat = amount * 0.075;
  var totals = parseInt(vat) + parseInt(amount);

  const flutterConfig = {
    public_key: process.env.REACT_APP_FLUTTER_KEY,
    tx_ref: 'EGC-' + Date.now(),
    amount: 1,
    currency: 'NGN',
    // redirect_url: 'https://saul.egoras.com/v1/webhooks/all',

    payment_options: 'card',
    // payment_plan:63558,
    customer: {
      phone_number: phone_no,
      email: email,
      name: fullname,
    },
    meta: {
      customer_id: customer_data.customer_id,
      eventType: '1',
    },
    customizations: {
      title: 'Payment for Egoras savings',
      description: `Payment for ${product_name}`,
      logo: 'https://egoras.com/img/egoras-logo.svg',
    },
  };

  const closeErrorDiv = () => {
    setErrorDiv(false);
  };
  const handleFlutterPayment = useFlutterwave(flutterConfig);
  const openProcessingDiv = () => {
    setProcessingDiv(true);
  };
  const selectOption = async (value) => {
    console.log(auth.user.user);
    if (
      auth.user.user.fullname === null ||
      auth.user.user.phoneNumber === null
    ) {
      // console.log('From me to you');
      setProcessingDiv(false);
      setSuccessDiv(false);
      setErrorMsg('You have not completed your profile.. ');
      setErrorDiv(true);
      return;
    }

    switch (value) {
      case 0:
        if (!product_id) {
          console.log('This item is out of the market');
          setErrorMsg('This product is off the market');
          setErrorDiv(true);
          return;
        }

        const verifyProduct = await axios
          .get(
            `${api_url2}/v1/product/verify/product/${product_id}`,
            null,
            config
          )
          .then((response) => {
            const { message, success } = response.data;
            console.log(success);
            if (success != true) {
              // setErrorMsg(message);
              // setErrorDiv(true);
              alert('an error occured');
            }

            handleFlutterPayment({
              callback: async (response) => {
                //console.log(response);
                try {
                  if (!response.transaction_id) {
                    // alert(
                    //   "We couldn't return any information from this payment please try again."
                    // );
                  }
                  const verification = await verify(
                    response.transaction_id,
                    product_id,
                    startDate,
                    endDate,
                    days_left
                  );
                  closePaymentModal();
                } catch (error) {
                  console.log(error.response);
                }
              },
              onClose: (response) => {
                // window.location.replace('google.com');
              },
            });
            // setProcessingDiv(false);
          })
          .catch((err) => {
            setProcessingDiv(false);
            setErrorMsg(err.response);
            setErrorDiv(true);
            console.log(err.response);
          });

        break;

      case 1:
        setProcessingDiv(true);

        // const verif = await axios.get(
        //   `${api_url2}/v1/product/verify/product/${product_id}`,
        //   null,
        //   config
        // );

        if (tokenBal >= Number(total)) {
          //
          const orderBody = JSON.stringify({
            product_id,
            initial_pay: initial_deposit,
            startDate,
            endDate,
            days_left,
          });

          console.log(orderBody);
          const res = await axios
            .post(
              API_URL2 + '/v1/order/add/order/crypto',
              orderBody,
              config
            )
            .then((response) => {
              console.log(
                response,
                ' response after order endpoint is called'
              );

              setProcessingDiv(false);
              setSuccessMsg(response.data.message);
              setOrder_id(response.data.order_id);
              setErrorDiv(false);
              setSuccessDiv(true);
              console.log(window.location.hostname);
              // window.location.replace(
              //   `${window.location.hostname}/dashboard`
              // );
              // return <Redirect to="/dashboard" />;
            })
            .catch((err) => {
              console.log(err.response);
              // setProcessingDiv(false);
              // setSuccessDiv(false);
              setErrorMsg(err.response);
              setErrorDiv(true);
              // alert(err);
            });
          //
        } else {
          console.log('something happened');
          setProcessingDiv(false);
          setSuccessDiv(false);
          setErrorMsg(
            'Insufficient wallet balance, fund your wallet to continue.'
          );
          setErrorDiv(true);
          // alert('hiy');
        }
        break;
    }
  };

  return (
    <>
      <div className="detailsModal" style={{ position: 'relative' }}>
        <div className="detailsModalSection1">
          <div className="bacKbutton" onClick={closeCheckoutOptions}>
            Previous
            <ArrowForwardIosIcon className="arrow_back" />
          </div>
          <div className="detailsModalSection1_area1">
            <div className="delivery_title1">
              Delivery / Pickup Options
            </div>

            <div className="delivery_cards_section">
              {addressName === '' ? null : (
                // added
                <div className="delivery_card1">
                  <div className="delivery_card_title">
                    Deliver to me{' '}
                    <button className="button_change_delivery_address">
                      Change Address
                    </button>
                  </div>
                  <div className="delivery_card_body">
                    <div className="delivery_card_body_cont1">
                      {customer_data.name}
                    </div>
                    <div className="delivery_card_body_cont1">
                      {addressName}
                    </div>
                    <div className="delivery_card_body_cont1">
                      {customer_data.phonenumber}
                    </div>
                  </div>
                </div>
              )}

              {/* ============= */}
              {/* ============= */}
              {/* ============= */}
              {/* ============= */}
              <div className="delivery_card2">
                <div className="delivery_card_title">
                  Pickup from our agents
                  <button className="button_change_delivery_address pickup_btn">
                    Select Pickup Location
                  </button>
                </div>
                <div className="delivery_card_body">
                  <div className="delivery_card_body_cont1">
                    Select a pickup location in your area from our 32
                    locations nationwide.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="detailsModalSection1_area2">
            <div className="detailsModalSection1-area2_title">
              Review Order
            </div>
            <div className="review_order_div">Delivery 1 of 1</div>
            <div>
              <div class="save_prod_deta">
                <table className="save_item_table">
                  <thead className="assets-category-titles">
                    <tr className="assets checked_item">
                      <th className="assets-category-titles-heading1">
                        Item
                      </th>
                      <th className="assets-category-titles-heading1">
                        Item Details
                      </th>
                      {payment_type == 'OUTRIGHT' ? (
                        <th className="assets-category-titles-heading1 quant">
                          Total Amount
                        </th>
                      ) : (
                        <th className="assets-category-titles-heading1 quant">
                          Amount daily
                        </th>
                      )}

                      {/* <th className="assets-categordata1y-titles-heading1 quant">
                        Unit Price
                      </th> */}
                      <th className="assets-category-titles-heading1_last">
                        Sub Total
                      </th>
                    </tr>
                  </thead>

                  <tbody
                    className="save_items_cat popular-categories"
                    id="popular-categories"
                  >
                    <tr className=" checked_item_row">
                      <td className="save_item_data checked_item">
                        <div className="assets-data height_data">
                          <img
                            src={product_image}
                            alt=""
                            className="save_item_img_img"
                          />
                        </div>
                      </td>
                      {/* ======== */}
                      {/* ======== */}
                      {/* ======== */}
                      {/* ======== */}
                      <td className="save_item_data1 checked_item_1">
                        <div className="save_items_details">
                          <div className="save_items_details1">
                            {product_name}
                          </div>
                          {payment_type == 'OUTRIGHT' ? null : (
                            <div className="save_item_days_left">
                              {days_left} days left
                            </div>
                          )}

                          <div className="save_total_locked_amount">
                            {payment_type == 'OUTRIGHT' ? (
                              <span className="items_left_amount">
                                Total Amount
                              </span>
                            ) : (
                              <span className="items_left_amount">
                                Total Amount Locked on Item
                              </span>
                            )}
                            <span className="init_amount">
                              ₦
                              {payment_type == 'OUTRIGHT'
                                ? numberWithCommas(
                                    parseInt(amount).toFixed(2)
                                  )
                                : numberWithCommas(
                                    parseInt(initial_deposit).toFixed(
                                      2
                                    )
                                  )}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="save_item_data1b checked_item_data_1b">
                        {payment_type == 'OUTRIGHT' ? (
                          <div className="assets-data-name_last">
                            ₦{' '}
                            {numberWithCommas(
                              parseInt(amount).toFixed(2)
                            )}
                          </div>
                        ) : (
                          <div className="assets-data-name_last">
                            ₦{' '}
                            {numberWithCommas(
                              parseInt(paymentPerday).toFixed(2)
                            )}
                          </div>
                        )}
                      </td>
                      {/* <td className="save_item_data1b">
                          <div className="assets-data-name center_name">
                            ₦{amount}
                          </div>
                        </td> */}
                      <td className="save_item_data1b checked_item_data_1b">
                        <div className="assets-data-name_last">
                          ₦{' '}
                          {payment_type == 'OUTRIGHT'
                            ? numberWithCommas(
                                parseInt(amount).toFixed(2)
                              )
                            : numberWithCommas(
                                parseInt(initial_deposit).toFixed(2)
                              )}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* second block here */}

        <div className="detailsModalSection2">
          <div className="details_modal_divv">
            {/* ======================= */}

            <div className="cart_area2_heading">Payment Options</div>
            {/* ===================== */}
            <div className="cart_area2_select">
              <div className="wit_card">
                Pay via card{' '}
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
              </div>
            </div>
            {/* ===================== */}
            <div className="cart_area2_select">
              <div className="wit_card">
                Pay via wallet{' '}
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
              </div>
              {walletBalance == true ? (
                <div className="wallet_bal_acct">
                  Wallet Bal: {parseInt(tokenBal).toFixed(3)}{' '}
                  {tokenSign}
                  {/* Wallet Bal: {hardNumb} {tokenSign} */}
                </div>
              ) : null}
            </div>

            {/* <FlutterButton 
       payment_plan={showPayment}
       user_id ={user_id}
       amount={1}
       payload = {userPayload}
       payment_title={"Payment From Egoras savings "}
      //  payment_options={"ussd"}
       customer={
           {
         email:"gibbywise@gmail.com", 
         phonenumber:"07026782437", 
         name:"Chidoro  Ndubueze"}
       } /> */}

            {/* <div className="cart_area2_select border_down">
        <div className="wit_card">
          Pay via wallet{" "}
          <input type="checkbox" name="" id="" classNam="checkBox" />
        </div>
      </div> */}
            {/* ========= */}
            {/* ========= */}
            {/* ========= */}

            <div className="cart_area2_notes">
              . No minimum or maximum order.
              <br />
              . Make sure your card is still valid.
              <br />. Ensure sufficient balance to cover this
              transaction.
            </div>
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            <div className="sub_total_div">
              Sub Total:{' '}
              <span className="sub_total_div_span">
                ₦{' '}
                {payment_type == 'OUTRIGHT'
                  ? numberWithCommas(parseInt(amount).toFixed(2))
                  : numberWithCommas(
                      parseInt(initial_deposit).toFixed(2)
                    )}
              </span>
            </div>
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            <div className="sub_total_div">
              VAT: <span className="sub_total_div_span">₦{vat}</span>
            </div>
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            <div className="sub_total_div">
              Delivery Fee:{' '}
              <span className="sub_total_div_span">₦0</span>
            </div>
            {/* ========== */}
            {/* ========== */}
            <div className="secure_transac_text">
              {' '}
              Transactions are 100% Safe and Secure
            </div>
            {/* ========== */}
            {/* ========== */}
            <div className="transac_secure_div">
              Total{' '}
              <span className="sub_total_div_span">
                ₦
                {payment_type == 'OUTRIGHT'
                  ? numberWithCommas(
                      (parseInt(totals) + deliveryFee).toFixed(2)
                    )
                  : numberWithCommas(
                      (
                        parseInt(initial_deposit) + deliveryFee
                      ).toFixed(2)
                    )}
              </span>
            </div>
            {/* ========== */}
            {/* ========== */}
            <button
              className="checkout_btn1a"
              // onClick={() => {

              //   <Loader/>

              //   // openPayment();
              //   selectOption(option);

              // }}
              onClick={() => {
                // return( <Loader/>)
                selectOption(option);
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {ProcessingDiv == false ? null : (
        <div className="processing_transac_div">
          <LoadingIcons.Bars fill="#229e54" />
          Processing Transaction...
        </div>
      )}
      {successDiv == true ? (
        // <div>
        <Success_Error_Component
          remove_success_div={closeCheckoutOptions}
          btn_txt="Continue"
          // msg={success_msg}
          msg={`${success_msg}, Order-Id: ${order_id}`}
          errorMsgDiv={errorDiv}
          link_btn={true}
          src={
            payment_type === 'OUTRIGHT'
              ? '/dashboard/savings'
              : '/dashboard/products'
          }
        />
      ) : // </div>
      null}
      {errorDiv == false ? null : (
        // <div className="processing_transac_div insufficient">
        <Success_Error_Component
          // remove_success_div={() => setErrorDiv(true)}
          btn_txt="Fund Wallet"
          // msg={<div>Stupid boy</div>}
          msg={error_msg}
          errorMsgDiv={errorDiv}
          removeTransDiv={() => {
            redirect('/dashboard/products');
            closeErrorDiv();
          }}
          link_btn={true}
          src="/dashboard/wallet"
          onclick={closeErrorDiv}
        />
        // </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  createOrder,
})(CheckoutModalComponent);
