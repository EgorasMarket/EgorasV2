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

// Load User
export const loadAdminUser = () => async (dispatch) => {
  //console.log("okkkkkkk");

  if (localStorage.token) {
    setAuthToken(localStorage.token);
    // //console.log('ffff');
  }

  // const res = await axios.get(api_url2 + "/v1/admin/info");
  // // //console.log(res);
  // // //console.log("Yes I call You because i can", res.data);
  // dispatch({
  //   type: USER_LOADED,
  //   payload: res.data,
  // });

  try {
    const res = await axios.get(api_url2 + "/v1/admin/info");
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
// export const retrieveCustData = (customer_id) => async (dispatch) => {
//   //console.log(customer_id);
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   try {
//     const res = await axios.get(
//       api_url2 + "/v1/cart/get/" + customer_id,
//       null,
//       config
//     );
//     //console.log(res.data.data);
//     // //console.log("Yes I call You because i can", res.data.data);
//     dispatch({
//       type: FETCH_CART,
//       payload: res.data.data,
//     });
//   } catch (error) {
//     //console.log("not registered");
//     // dispatch({
//     //   type: AUTH_ERROR,
//     // });
//   }
// };
// Get Social Media Handles
export const getAuthentication =
  (fullname, mobile, email, staffId, password, role, gender, branch) =>
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
      mobile,
      email,
      staffId,
      password,
      role,
      gender,
      branch,
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

export const nextOfKING =
  (firstname, lastname, email, phoneNumber, gender, relationship) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      firstname,
      lastname,
      email,
      phoneNumber,
      gender,
      relationship,
    });

    //console.log(body);

    try {
      const res = await axios.post(
        api_url2 + "/v1/admin/add/customer/next-of-kin/",
        body,
        config
      );
      //console.log(res);
      // /v1/admin/add/customer/next-of-kin/{customer_id}
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

export const sumitGenderAndDate = (gender, dateOfBirth) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const body = JSON.stringify({
    gender,
    dateOfBirth,
  });

  //console.log(body);

  try {
    const res = await axios.put(
      api_url2 + "/v1/user/update/customer/info",
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

export const reset =
  ({ password, email_auth }) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      password,
      email_auth,
    });

    ////console.log(body);

    try {
      const res = await axios.post(api_url2 + "/v1/admin/reset", body, config);
      ////console.log(res);

      return {
        status: true,
        data: res.data,
      };
    } catch (err) {
      ////console.log(err.response);

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

export const changePassword =
  ({ oldpassword, newpassword }) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      oldpassword,
      newpassword,
    });

    ////console.log(body);

    try {
      const res = await axios.post(
        api_url2 + "/v1/admin/change/password",
        body,
        config
      );
      ////console.log(res);
      // ////console.log("yyyyy");

      return res;
    } catch (err) {
      ////console.log(err.response);
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

export const ForgetPassword = (email) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const body = JSON.stringify({
    email,
  });

  // //console.log(body);

  try {
    const res = await axios.post(api_url2 + "/v1/admin/forgot", body, config);
    //console.log(res);

    return {
      success: true,
      data: res.data,
    };
  } catch (err) {
    //console.log(err.response.data);

    return {
      success: false,
      data: err.response,
    };
  }
};

// Admin Register Customer

export const adminAddCustomer =
  (firstname, lastname, email, birthDate, BVN, phoneNumber, InfoReason) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      firstname,
      lastname,
      email,
      birthDate,
      BVN,
      phoneNumber,
      InfoReason,
    });

    console.log(body);

    try {
      const res = await axios.post(
        api_url2 + "/v1/admin/register/customer",
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
// Admin update Customer address

// export const adminUpdateAddress = (customerAddress) => async (dispatch) => {
//   const config = {
//     headers: {
//       Accept: "*",
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   };

//   const body = JSON.stringify({
//     customerAddress,
//   });

//   //console.log(body);

//   try {
//     const res = await axios.post(
//       api_url2 + "/v1/admin/add/address/" + customerId,
//       body,
//       config
//     );
//     //console.log(res);

//     return {
//       success: true,
//       data: res.data,
//     };
//   } catch (err) {
//     //console.log(err.response);

//     return {
//       success: false,
//       data: err.response,
//     };
//   }
// };
