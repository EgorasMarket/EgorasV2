import axios from "axios";
import { setAlert } from "./alert";

// import { LOGIN_FAIL, LOGIN_SUCCESS } from "./types";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  API_URL2 as api_url2,
} from "./types";
// import setAuthToken from "../utils/setAuthToken";
import setAuthToken from "../utils/setAuthToken";

// Get Social Media Handles
export const getAuthentication =
  (fullname, email, password, BVN, phoneNumber, InfoReason) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      fullname,
      email,
      password,
      BVN,
      phoneNumber,
      InfoReason,
    });

    //console.log(body);

    try {
      const res = await axios.post(
        api_url2 + "/v1/admin/register/user",
        body,
        config
      );
      //console.log(res);

      return {
        success: true,
        data: res.data,
      };
    } catch (err) {
      //console.log(err.response);

      return {
        success: false,
        data: err.response,
      };
    }
  };

export const getLogin = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const body = JSON.stringify({
    email,
    password,
  });

  //console.log(body);

  try {
    const res = await axios.post(
      api_url2 + "/v1/admin/login/admin",
      body,
      config
    );
    //console.log(res);

    if (res.data.success === false) {
      ////console.log(res.data);
      const errors = res.data.errors;
      ////console.log(errors);
      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      // }
      dispatch({
        type: LOGIN_FAIL,
        payload: errors[0].msg,
      });

      return {
        status: false,
        data: errors[0].msg,
      };
    } else {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      return {
        status: true,
        data: res.data,
      };
    }
  } catch (err) {
    //console.log(err.response);

    return {
      success: false,
      data: err.response,
    };
  }
};

export const getProductByCat = (categoryName) => async (dispatch) => {
  // //console.log(payload1, otp, customer_id, product_id);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //console.log(categoryName);

  try {
    const res = await axios.get(
      api_url2 + "/v1/product/retrieve/products/byId/" + categoryName,
      null,
      config
    );
    //console.log(res.data);
    //console.log("nnnnnnn");
    return {
      success: true,
      data: res.data,
    };
    // //console.log("Yes I call You because i can", res.data.data);
    // dispatch({
    //   type: FETCH_CART,
    //   payload: res.data.data,
    // });
  } catch (error) {
    //console.log(error.response);
    //console.log("ffgfgfgc");
    // dispatch({
    //   type: AUTH_ERROR,
    // });
  }
};
