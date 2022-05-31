import axios from "axios";
import { setAlert } from "./alert";
// import { LOGIN_FAIL, LOGIN_SUCCESS } from "./types";

import {
  FETCH_CART,
  FETCH_LOCKED,
  UPDATE_CART,
  REMOVE_CART,
  API_URL2 as api_url2,
} from "./types";
// import setAuthToken from "../utils/setAuthToken";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const retrieveCart = (customer_id) => async (dispatch) => {
  //console.log(customer_id);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      api_url2 + "/v1/cart/get/" + customer_id,
      null,
      config
    );
    //console.log(res.data.data);
    // //console.log("Yes I call You because i can", res.data.data);
    dispatch({
      type: FETCH_CART,
      payload: res.data.data,
    });
  } catch (error) {
    //console.log("not registered");
    // dispatch({
    //   type: AUTH_ERROR,
    // });
  }
};
// Load Locked items
// export const retrieveSaved = (customer_id) => async (dispatch) => {
//   //console.log(customer_id);
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   try {
//     const res = await axios.get(
//       api_url2 + "/v1/product/retrieve/locked/" + customer_id,
//       null,
//       config
//     );
//     //console.log("from retrieve saved", res.data.data);
//     // //console.log("Yes I call You because i can", res.data.data);
//     dispatch({
//       type: FETCH_LOCKED,
//       payload: res.data.data,
//     });
//   } catch (error) {
//     //console.log("not registered");
//     // dispatch({
//     //   type: AUTH_ERROR,
//     // });
//   }
// };

export const allCart = (items) => {
  return {
    type: FETCH_CART,
    payload: items,
  };
};

export const removeCart = (item) => {
  return {
    type: REMOVE_CART,
    payload: item,
  };
};


export const createOrder = (product_id) => async (dispatch) => {
  //console.log(product_id);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    product_id,
  });

  try {
    const res = await axios.post(api_url2 + "/v1/order/add/order", body, config);
    //console.log(res.data.data);
    // //console.log("Yes I call You because i can", res.data.data);
    // dispatch({
    //   type: FETCH_CART,
    //   payload: res.data.data,
    // });
  } catch (error) {
    //console.log(error.response);
    //console.log("not registered");
    // dispatch({
    //   type: AUTH_ERROR,
    // });
  }
};
