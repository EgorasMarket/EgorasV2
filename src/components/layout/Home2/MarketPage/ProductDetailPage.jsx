import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import DisplayMoney from "../../../DisplayMoney";
import { countdown } from "../../../../actions/countdown";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import LoginComp from "../Login/LoginComp";
import LoginSignup from "../Login/LoginSignup";
import ItemDetailComponent from "../item_details_page/ItemDetailCompnent";
import Checkout from "../item_details_page/CheckoutModalComponent";
import "./market.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

const ProductDetailPage = ({ auth, match, countdown }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // //console.log(window.location.pathname.split("/"));
  // //console.log(match.params.id);
  const [loginModal, setLoginModal] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [product_id, setProductId] = useState(match.params.id);
  const [user_id, set_user_id] = useState("");
  const [payload, setPayload] = useState({});
  const [sale_type, setSale_type] = useState("");
  const [modal, setModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [showCheckout, setCheckoutStatus] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userPayload, setUserPayload] = useState({});
  const [card, setSpec] = useState([]);
  const [deScript, setDeScript] = useState([]);
  const [counterReady, setCounterReady] = useState(false);
  const [placeHolder, setPlaceHolder] = useState("");
  const [counterArray, setCounterArray] = useState([]);
  const [countType, setCountType] = useState("");
  const [counterDuration, setCounterDuration] = useState(0);
  // const {contactAddress}=addressName

  useEffect(() => {
    //console.log(auth);

    if (window.location.pathname.split("/")[1] === "dashboard") {
      setProductId(match.params.id);
      setIsAuthenticated(true);
    } else {
      setProductId(window.location.pathname.split("/")[3]);
      setIsAuthenticated(false);
    }
  }, [auth]);

  const openDetailsModal = () => {
    setDetailsModal(true);
  };

  const closeDetailModal = () => {
    setDetailsModal(false);
  };

  const OpenLoginModal = () => {
    // //console.log(auth.user.user);
    if (auth.user !== null) {
      //console.log(auth.user.user);
      // set_user_id(customer_id);
      openDetailsModal();
      // checkout(
      //   user_id,
      //   product_id,
      //   daysAdded,
      //   startDate,
      //   endDate
      //   );
    } else {
      setLoginModal(true);
    }
  };

  const CloseLoginModal = () => {
    setLoginModal(false);
  };

  const callback = useCallback((loginSuccess) => {
    setLoginSuccess(loginSuccess);

    if (loginSuccess === true) {
      CloseLoginModal();
      window.location.reload();
      // openDetailsModal();
      // checkout(
      //   user_id,
      //   product_id,
      //   daysAdded,
      //   startDate,
      //   endDate
      // );
    } else {
    }
  }, []);

  useEffect(async () => {
    console.log(auth, auth.isAuthenticated, auth.user);
    const body = JSON.stringify({
      product_id,
    });
    if (auth.user !== null) {
      set_user_id(auth.user.user.id);
      //console.log(auth.user.user);
    } else {
      set_user_id("");
      //console.log('rrrrr');
    }

    await axios
      .post(api_url2 + "/v1/product/retrieve/specific", body, config)
      .then((data) => {
        const {
          amount,
          roundedAmount,
          percentage,
          product_brand,
          product_category_code,
          product_category_desc,
          product_details,
          product_duration,
          product_id,
          product_image,
          more_image,
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
          sales_type,
        } = data.data.data;
        setSale_type(data.data.data.sales_type);
        console.log(data.data.data, "king");
        setPayload({
          amount,
          roundedAmount,
          percentage,
          product_brand,
          product_category_code,
          product_category_desc,
          product_details,
          product_duration,
          product_id,
          product_image,
          more_image,
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
          sales_type,
        });
        const getSlid = data.data.data.product_specifications;
        const getSpecs = data.data.data.product_details;
        // const myArray = getSlid.split(",");

        console.log(getSlid);
        console.log(getSlid);
        //console.log(getSpecs);

        setSpec(getSlid);
        setDeScript(getSpecs);

        // //  const slipVar = getSlid.split(',');
        // //console.log("====================================");
        // //console.log(getSlid);
        // //console.log("====================================");

        // //console.log("====================================");
      })
      .catch((err) => {
        //console.log(err.response); // "oh, no!"
      });
  }, [product_id, auth]); // USE EFFECT TO  GET THE SPECIFIC PRODUCTS

  //console.log(product_id);
  const callCounter = async () => {
    let res3 = await countdown();
    setCounterArray(res3.data.data);
    let getData = res3.data.data[0];
    console.log(res3.data.data);
    // console.log(getData.countType);
    let convertToDate = Date(getData.dropDate);
    console.log(convertToDate);

    const today = new Date();
    const endDate = new Date(getData.dropDate);
    const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24));
    const hours = parseInt((Math.abs(endDate - today) / (1000 * 60 * 60)) % 24);
    const minutes = parseInt(
      (Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60)) % 60
    );
    const seconds = parseInt(
      (Math.abs(endDate.getTime() - today.getTime()) / 1000) % 60
    );
    console.log(days, hours, minutes, seconds);

    // 👇️        hour  min  sec  ms
    let dayscount = days * 24 * 60 * 60 * 1000;
    let hourscount = hours * 60 * 60 * 1000;
    let minutescount = minutes * 60 * 1000;
    let secondscount = seconds * 1000;

    let totalMiliseconds = dayscount + hourscount + minutescount + secondscount;
    // setDate(getData.dropDate);
    console.log(totalMiliseconds);
    if (getData.countType === "WEEKLY") {
      setCountType("WEEKLY");
      setLoginModal(false);
      setDetailsModal(false);
    } else {
      setCountType("DAILY");
    }
    setCounterDuration(totalMiliseconds);
    setCounterReady(true);
  };
  useEffect(() => {
    console.log(sale_type, "consoling sales_type_prod_detail");

    callCounter();
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      console.log(counterArray, "okkkkk");
      let getData = counterArray[0];
      // let convertToDate = Date(getData.dropDate);
      //
      const today = new Date();
      const endDate = new Date(getData.dropDate);
      const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24));
      const hours = parseInt(
        (Math.abs(endDate - today) / (1000 * 60 * 60)) % 24
      );
      const minutes = parseInt(
        (Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60)) % 60
      );
      const seconds = parseInt(
        (Math.abs(endDate.getTime() - today.getTime()) / 1000) % 60
      );
      console.log(days, hours, minutes, seconds);

      // 👇️        hour  min  sec  ms
      let dayscount = days * 24 * 60 * 60 * 1000;
      let hourscount = hours * 60 * 60 * 1000;
      let minutescount = minutes * 60 * 1000;
      // let newMinutes = 5 * 60 * 1000;
      let secondscount = seconds * 1000;

      let totalMiliseconds =
        dayscount + hourscount + minutescount + secondscount;

      var completeCount = Date.now() + totalMiliseconds;
      var newEndDate = endDate.getTime();
      console.log(completeCount, newEndDate);
      // 1654532579461 1654532594462
      if (completeCount >= newEndDate) {
        console.log("time up", new Date());
        callCounter();

        // completeCount = Date.now() + newMinutes;
        // var currentDate = new Date();
        // newEndDate = currentDate.setMinutes(currentDate.getMinutes() + 3);
        // console.log(completeCount, newEndDate);

        setCounterReady(false);
        setCounterReady(true);

        if (counterArray === undefined || counterArray.length == 0) {
          console.log("empty array");
        } else {
          if (getData.countType === "WEEKLY") {
            console.log("Market Opens In WEEKLY");
            // setCounterDuration(newMinutes);
          } else {
            console.log("Market Opens In DAILY");
          }
        }
      } else {
        console.log("still counting", Date.now());
      }
    }, 5000);
    return () => {
      clearInterval(timeInterval);
    };
  }, [counterArray]);
  return (
    <>
      {loginModal === false ? null : (
        <div className="checkout_main">
          <div
            className="checkout_modal_out_signup"
            onClick={() => {
              setLoginModal(false);
            }}
          ></div>
          {/* <div>Login</div> */}
          {/* <Dashboard_Checkout_Page
            cAmount={parseInt(productDetails.amount)}
            click={CloseModal}
          /> */}
          <LoginSignup parentCallback={callback} />
        </div>
      )}
      <div>
        <section className="market_page_section">
          <div className="custom_container">
            {detailsModal === true ? (
              <Checkout
                payload={payload}
                closeCheckoutOptions={closeDetailModal}
              />
            ) : (
              <ItemDetailComponent
                payload={payload}
                stringUrl="/products/details"
                specification={deScript}
                // numberWithCommas={numberWithCommas}
                loginModal={loginModal}
                card={card}
                openCheckoutModal={() => {
                  // openDetailsModal();
                  OpenLoginModal();
                  // //console.log('gggg');
                }}
              />
            )}
          </div>
        </section>
      </div>
    </>
  );
};
const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.shop.cart,
});
export default connect(mapStateToProps1, { countdown })(ProductDetailPage);
