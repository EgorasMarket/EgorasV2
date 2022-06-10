import React, { useState, useEffect, useCallback } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import Carousel from "react-multi-carousel";
import "../../../../css/itemsDetailsPage.css";
import axios from "axios";
import "../Dashboard/DashboardStyles/dashboardCart.css";
import { Calendar, DateRangePicker, DateRange } from "react-date-range";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { addDays, differenceInCalendarDays } from "date-fns";
import Dashboard_Checkout_Page from "../Dashboard/DashboardPages/Dashboard_Checkout_Page";
import Checkout from "./CheckoutModalComponent";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import { connect, useDispatch } from "react-redux";
import ItemDetailComponent from "./ItemDetailCompnent";
import LoginComp from "../Login/LoginComp";

function ItemDetailsPage({ auth, match }) {
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
  const [modal, setModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [showCheckout, setCheckoutStatus] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userPayload, setUserPayload] = useState({});
  const [card, setSpec] = useState([]);
  const [deScript, setDeScript] = useState([]);

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
  const OpenModal = () => {
    setModal(true);
  };

  const CloseModal = () => {
    setModal(false);
  };

  const openCheckout = () => {
    setCheckoutStatus(true);
  };

  const closeCheckout = () => {
    setCheckoutStatus(false);
  };

  const OpenLoginModal = () => {
    if (auth.user !== null) {
      openDetailsModal();
      // setLoginModal(true);
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

        //console.log(getSlid);
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
  return (
    <>
      {loginModal === false ? null : (
        <div className="checkout_main">
          <div className="checkout_modal_out" onClick={CloseModal}></div>
          {/* <div>Login</div> */}
          {/* <Dashboard_Checkout_Page
            cAmount={parseInt(productDetails.amount)}
            click={CloseModal}
          /> */}
          <LoginComp parentCallback={callback} />
        </div>
      )}
      <div className="other2">
        <section className="no-bg">
          <div className="container">
            {detailsModal === true ? (
              <Checkout
                payload={payload}
                closeCheckoutOptions={closeDetailModal}
              />
            ) : (
              <ItemDetailComponent
                payload={payload}
                specification={deScript}
                stringUrl="/dashboard/products/details"
                // numberWithCommas={numberWithCommas}
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
}

const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.shop.cart,
});

export default connect(mapStateToProps1)(ItemDetailsPage);
