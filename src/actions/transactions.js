import axios from "axios";
import { setAlert } from "./alert";
// import { LOGIN_FAIL, LOGIN_SUCCESS } from "./types";

import {
  FETCH_CART,
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_CART,
  API_URL2 as api_url2,
} from "./types";
// import setAuthToken from "../utils/setAuthToken";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const proceedToCheckout =
  (
    card_number,
    expiry_month,
    expiry_year,
    cvv,
    fullname,
    email,
    phone_number,
    amount
    // product_id
  ) =>
  async (dispatch) => {
    // console.log(
    //   card_number,
    //   expiry_month,
    //   expiry_year,
    //   cvv,
    //   fullname,
    //   email,
    //   phone_number,
    //   // amount,
    //   // product_id
    // );
    const amount = 100;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      card_number,
      expiry_month,
      expiry_year,
      cvv,
      fullname,
      email,
      phone_number,
      amount,
      // product_id
    });

    // console.log(body);
    try {
      const res = await axios.post(api_url2 + "/v1/payment/card", body, config);
      console.log(res.data.data);

      return {
        success: true,
        data: res,
      };
    } catch (error) {
      // console.log(error.response);
      // dispatch({
      //   type: AUTH_ERROR,
      // });
    }
  };

//   };
// Check pin
export const checkPin = (payload, pin) => async (dispatch) => {
  // console.log(payload, pin);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({});

  // console.log(body);
  try {
    const res = await axios.post(api_url2 + "/v1/payment/card", body, config);
    // console.log(res);

    return {
      success: true,
      data: res,
    };
    // console.log("Yes I call You because i can", res.data.data);
    // dispatch({
    //   type: FETCH_CART,
    //   payload: res.data.data,
    // });
  } catch (error) {
    // console.log(error);
  }
};

export const sendPin = (payload1, pin) => async (dispatch) => {
  // console.log(payload1, pin);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const payload = JSON.stringify(payload1);
  const body = { payload, pin };

  // console.log(body);
  try {
    const res = await axios.post(
      api_url2 + "/v1/payment/card/pin",
      body,
      config
    );
    // console.log(res.data);

    return {
      success: true,
      data: res.data,
    };
    // console.log("Yes I call You because i can", res.data.data);
    // dispatch({
    //   type: FETCH_CART,
    //   payload: res.data.data,
    // });
  } catch (error) {
    // console.log(error.response);
    return {
      success: false,
      data: error.response,
    };
  }
};

export const sendOtp =
  (payload1, otp, customer_id, product_id) => async (dispatch) => {
    // console.log(payload1, otp, customer_id, product_id);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const payload = JSON.stringify(payload1);
    const body = { payload, otp, customer_id, product_id };

    // console.log(body);
    try {
      const res = await axios.post(
        api_url2 + "/v1/payment/card/otp",
        body,
        config
      );
      // console.log(res.data);
      // console.log("nnnnnnn");
      return {
        success: true,
        data: res.data,
      };
      // console.log("Yes I call You because i can", res.data.data);
      // dispatch({
      //   type: FETCH_CART,
      //   payload: res.data.data,
      // });
    } catch (error) {
      // console.log(error.response);
      // console.log("ffgfgfgc");
      // dispatch({
      //   type: AUTH_ERROR,
      // });
    }
  };
