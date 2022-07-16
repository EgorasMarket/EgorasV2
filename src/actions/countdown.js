import axios from 'axios';
import { setAlert } from './alert';
// import { LOGIN_FAIL, LOGIN_SUCCESS } from "./types";

import { API_URL2 as api_url2 } from './types';
// import setAuthToken from "../utils/setAuthToken";
import setAuthToken from '../utils/setAuthToken';

export const countdown = () => async (dispatch) => {
  try {
    // console.log(payload);
    const res = await axios.get(
      api_url2 + '/v1/product/check/countdown'
    );

    console.log(res);

    return {
      success: true,
      data: res.data,
      // address: walletAddress
    };
  } catch (error) {
    console.log(error.response);
    return {
      success: false,
      data: error.response,
    };
  }
};
