import axios from 'axios';
import { setAlert } from './alert';
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
} from './types';
// import setAuthToken from "../utils/setAuthToken";
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async (dispatch) => {
  // //console.log("okkkkkkk");

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  // const res = await axios.get(api_url2 + "/v1/user/info");
  // // //console.log(res, 'lllll');
  // // //console.log("Yes I call You because i can", res.data);
  // dispatch({
  //   type: USER_LOADED,
  //   payload: res.data,
  // });

  try {
    const res = await axios.get(api_url2 + '/v1/user/info');
    //console.log(res);
    // //console.log("Yes I call You because i can", res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    //console.log("not registered");
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const submitPhone =
  (primaryPhoneNumber, secondaryPhoneNumber) => async (dispatch) => {
    const config = {
      headers: {
        Accept: '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const body = JSON.stringify({
      primaryPhoneNumber,
      secondaryPhoneNumber,
    });

    console.log(body);

    try {
      const res = await axios.put(
        api_url2 + '/v1/user/update/secondary/contact',
        body,
        config
      );
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

// // Load User

// Get Social Media Handles
export const getAuthentication =
  (
    firstname,
    lastname,
    email,
    birthDate,
    password,
    BVN,
    phoneNumber,
    InfoReason
  ) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const body = JSON.stringify({
      firstname,
      lastname,
      email,
      birthDate,
      password,
      BVN,
      phoneNumber,
      InfoReason,
    });

    console.log(body, '----kkkk');

    // try {
    //   const res = await axios.post(
    //     api_url2 + '/v1/user/register',
    //     body,
    //     config
    //   );
    //   //console.log(res);

    //   return {
    //     success: true,
    //     data: res.data,
    //   };
    // } catch (err) {
    //   console.log(err.response);
    //   //console.log(err.response);

    //   return {
    //     success: false,
    //     data: err.response,
    //   };
    // }
  };
export const activate = (email_auth) => async (dispatch) => {
  const config = {
    headers: {
      Accept: '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  const body = JSON.stringify({
    email_auth,
  });

  //console.log(body);

  try {
    const res = await axios.post(
      api_url2 + '/v1/user/activate',
      body,
      config
    );
    console.log(res);
    // console.log('yyyyy');

    return res;
  } catch (err) {
    // console.log(err.message);
    ////console.log("ok");
    // const errors = err.response.data.errors;
    // ////console.log(errors);
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
    //   return {
    //   status: false,
    //   id: null
    // }
  }
};

export const getLogin = (email, ref_auth) => async (dispatch) => {
  const config = {
    headers: {
      Accept: '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      timeout: 1000,
    },
  };

  const body = JSON.stringify({
    email,
    ref_auth,
  });

  console.log(body);

  try {
    const res = await axios.post(
      api_url2 + '/v1/user/register/alternative',
      body,
      config
    );
    //console.log(res);

    if (res.data.success === false) {
      const errors = res.data.errors;
      return {
        status: false,
        data: errors[0].msg,
      };
    } else {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      return {
        status: true,
        data: res.data,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: err.response,
    };
  }
};

export const loginValidate = (email_auth) => async (dispatch) => {
  const config = {
    headers: {
      Accept: '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      timeout: 1000,
    },
  };

  const body = JSON.stringify({
    email_auth,
  });

  console.log(body);

  try {
    const res = await axios.post(
      api_url2 + '/v1/user/validate/login',
      body,
      config
    );
    //console.log(res);

    // if (res.data.success === false) {
    //   const errors = res.data.errors;
    //   return {
    //     status: false,
    //     data: errors[0].msg,
    //   };
    // } else {
    //   dispatch({
    //     type: REGISTER_SUCCESS,
    //     payload: res.data,
    //   });
    //   return {
    //     status: true,
    //     data: res.data,
    //   };
    // }

    if (res.data.success === false) {
      ////console.log(res.data);
      const errors = res.data.errors;

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
    console.log(err);
    return {
      success: false,
      data: err.response,
    };
  }
};

export const reset =
  ({ password, email_auth }) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const body = JSON.stringify({
      password,
      email_auth,
    });

    //console.log(body);

    try {
      const res = await axios.put(
        api_url2 + '/v1/user/reset',
        body,
        config
      );
      ////console.log(res);

      return {
        status: true,
        data: res.data,
      };
    } catch (err) {
      //console.log(err.response);

      ////console.log("ok");

      const errors = err.response.data.errors;
      // ////console.log(errors);
      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      // }

      return {
        status: false,
        data: errors,
      };
    }
  };

export const nextOfKING =
  (firstname, lastname, email, phoneNumber, relationship, gender1) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const gender = gender1;

    const body = JSON.stringify({
      firstname,
      lastname,
      email,
      phoneNumber,
      relationship,
      gender,
    });

    console.log(body);

    try {
      const res = await axios.post(
        api_url2 + '/v1/user/add/customer/next-of-kin',
        body,
        config
      );
      console.log(res);
      return {
        success: true,
        data: res.data,
      };
    } catch (err) {
      console.log(err.response);

      return {
        success: false,
        data: err.response,
      };
    }
  };
export const addAddress = (customerAddress) => async (dispatch) => {
  const config = {
    headers: {
      Accept: '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  // const gender = gender1;

  const body = JSON.stringify({
    customerAddress,
  });

  console.log(body);

  try {
    const res = await axios.post(
      api_url2 + '/v1/user/add/address',
      body,
      config
    );
    console.log(res);
    return {
      success: true,
      data: res.data,
    };
  } catch (err) {
    console.log(err.response);

    return {
      success: false,
      data: err.response,
    };
  }
};

export const sumitGenderAndDate =
  (firstname, lastname, gender, dateOfBirth) => async (dispatch) => {
    const config = {
      headers: {
        Accept: '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const body = JSON.stringify({
      firstname,
      lastname,
      gender,
      dateOfBirth,
    });

    console.log(body);
    //console.log(body);

    try {
      const res = await axios.put(
        api_url2 + '/v1/user/update/customer/info/alternative',
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

export const changePassword =
  (oldpassword, newpassword) => async (dispatch) => {
    const config = {
      headers: {
        Accept: '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const body = JSON.stringify({
      oldpassword,
      newpassword,
    });

    console.log(body);

    try {
      const res = await axios.put(
        api_url2 + '/v1/user/change/password',
        body,
        config
      );
      console.log(res);
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
