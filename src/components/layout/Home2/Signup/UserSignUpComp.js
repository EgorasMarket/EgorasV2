import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
// import "../../../../css/signup.css";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import '../../../../css/login.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import {CustomAlert} from "./alert";
// import { CustomAlert } from '../Login/alert';
import DatePicker from 'react-date-picker';
import Countdown, { CountdownApi } from 'react-countdown-now';
// import { CustomAlert } from '../Login/alert';
import { CustomAlert } from '../../../../CustomAlert';

import {
  getLogin,
  getAuthentication,
} from '../../../../actions/auth';
import axios from 'axios';
import { API_URL2 as api } from '../../../../actions/types';
// import { getAuthentication } from "../../../../actions/auth";
// import { setAlert } from "../../../../actions/alert";

const UserSignUpComp = ({
  getLogin,
  getAuthentication,
  isAuthenticated,
  parentCallback,
  close,
}) => {
  // New Changes
  const [userAuth, setUserAuth] = useState({
    // fullname: "",
    firstname: '',
    lastname: '',
    email: 'hitechsuite@gmail.com',
    password: '',
    BVN: '',
    phoneNumber: '',
    confirmPassword: '',
    InfoReason: '',
  });

  const [dateOfBirth, setDateOfBirth] = useState('');

  const [disable, setDisable] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [customAlert, setCustomAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [strongPass, setStrongPass] = useState(false);
  const [mismatchPass, setMismatchPass] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const {
    // fullname,
    firstname,
    lastname,
    email,
    password,
    BVN,
    phoneNumber,
    confirmPassword,
    InfoReason,
  } = userAuth;

  let birthDate = dateOfBirth ? dateOfBirth.toLocaleDateString() : '';
  let countCompo = useRef();

  useEffect(() => {
    // if (fullname === "") {
    //   setDisable(true);
    // }
    if (firstname === '') {
      setDisable(true);
    }
    if (lastname === '') {
      setDisable(true);
    }
    if (email === '') {
      setDisable(true);
    } else if (password === '') {
      setDisable(true);
    } else if (phoneNumber === '') {
      setDisable(true);
    } else if (confirmPassword === '') {
      setDisable(true);
    } else if (InfoReason === '') {
      setDisable(true);
    } else if (isLoading == true) {
      setDisable(true);
    } else if (isLoading == false) {
      setDisable(false);
    } else {
      setDisable(false);
    }
  });

  const onChange = (e) => {
    setUserAuth({ ...userAuth, [e.target.name]: e.target.value });

    const { name, value } = e.target;

    switch (name) {
      case 'password':
        if (e.target.value.length <= 7) {
          setStrongPass(true);
          //console.log("password is not 8");
        } else if (password.length >= 7) {
          setStrongPass(false);
          //console.log("password is 8");
        }
        break;
      default:
        break;
    }
  };
  const onChange2 = (e) => {
    setUserAuth({ ...userAuth, [e.target.name]: e.target.value });

    const { name, value } = e.target;

    switch (name) {
      case 'confirmPassword':
        if (e.target.value !== password) {
          setMismatchPass(true);
          //console.log("password not match");
        } else if (e.target.value === password) {
          setMismatchPass(false);
          //console.log("password match");
        }
        break;
      default:
        break;
    }
  };
  const setPasswordVisibilty = () => {
    setVisibility(true);
    // setPassImg("hide_pass");
  };
  const closetPasswordVisibilty = () => {
    setVisibility(false);
    // setPassImg("show_pass");
  };
  const setPasswordVisibilty2 = () => {
    setVisibility2(true);
    // setPassImg2("hide_pass2");
  };
  const closetPasswordVisibilty2 = () => {
    setVisibility2(false);

    // setPassImg2("show_pass2");
  };

  const submitData = async (e) => {
    // if (isLoading == true) {
    //   //
    //   setDisable(true);
    // } else if (isLoading == false) {
    //   setDisable(false);
    // }
    setIsLoading(true);
    setDisable(true);
    try {
      let res = await getAuthentication(
        // fullname,
        firstname.trim(),
        lastname.trim(),
        email,
        birthDate,
        password,
        BVN,
        phoneNumber,
        InfoReason
      );
      console.log(res);

      if (res && res.success) {
        setIsLoading(false);
        setIsSuccessful(true);

        return;
      } else {
        setIsLoading(false);
        setMessage(res.message.data.errors[0].msg);
        // alert(res.message.data.errors[0].msg);
        setCustomAlert(true);

        console.log(res.message.data.errors[0].msg);
      }

      // if (res && res.data.data.success === true) {
      //   alert('registration is successful');
      //   setIsSuccessful(true);
      //   console.log(res.data.data.success);

      //   setIsLoading(false);
      //   return;
      // }.msg
      // if (res.data.errors) {
      //   alert('error');
      // }
    } catch (err) {
      // alert(err.message);
      console.log(err.message, 'Error occured');
      setMessage(err.message);
      setCustomAlert(true);
      setIsLoading(false);
      return;
    }

    //console.log(res.data.data.errors[0].msg);
  };
  // Random component
  const Completionist = () => <span>You are good to go!</span>;
  const verifyActivation = async (email) => {
    const config = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    try {
      const resend_email = await axios.get(
        `${api}/v1/user/verify/${email}`,
        null,
        config
      );
      console.log(resend_email.data.message);

      switch (resend_email.data.statusCode) {
        case 200:
          alert('Email have been verified successfully');
          close();
          break;
        case 400:
          alert('Account not yet activated');
          break;
      }
    } catch (err) {
      // console.log(err.response.data.data.nessage);
      setCustomAlert(true);
      console.log(err.response, 'error response done ');
    }
  };

  const resendActivation = async (email) => {
    const config = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    try {
      const call = await axios.get(
        `${api}/v1/user/activate/resend/${email}`,
        null,
        config
      );
      console.log(call.data.message);

      // switch (call.data.statusCode) {
      //   case 200:
      //     alert('successful');
      //     break;
      //   case 400:
      //     alert('failure');
      //     break;
      // }
    } catch (err) {
      // console.log(err.response.data.data.nessage);
      setCustomAlert(true);
      console.log(err.response, 'error response done ');
    }
  };
  return (
    <div>
      {isSuccessful ? (
        <div style={{ zIndex: '10000' }} className="signup_area">
          <div
            style={{
              width: '100vw',
              height: '100vh',
              borderRadius: 'unset',
            }}
            className="signup_cont"
          >
            <button
              onClick={() => {
                close();
              }}
            >
              {' '}
              close
            </button>
            <p>
              {' '}
              An email have been sent to {email}. Follow the
              instructions to activate your account. Click on the
              button to proceed to the market
            </p>

            <div>
              <p> Didn't recieve a message ?</p>
              <button
                onClick={() => {
                  resendActivation(email);
                }}
              >
                {' '}
                resend otp
              </button>
            </div>
            {/* <Countdown
              date={Date.now() + 10000}
              onComplete={completedTime}
              ref={countCompo}
              onMount={() => {
                startCall(email);
              }}
              // onPause={() => {
              //   alert('paused');
              // }}
              // controlled
            >
              {<Completionist />}
            </Countdown> */}

            <button
              onClick={() => {
                verifyActivation(email);
                // close();
              }}
            >
              {' '}
              Check Activation
            </button>
          </div>
        </div>
      ) : (
        <div style={{ zIndex: '10000' }} className="signup_area">
          {customAlert === true && (
            <CustomAlert
              alertType="danger"
              alert={message}
              closeAlert={() => {
                setCustomAlert(false);
              }}
            />
          )}
          <div
            style={{
              width: '100vw',
              height: '100vh',
              borderRadius: 'unset',
            }}
            className="signup_cont"
          >
            <div className="mt-5">
              <div className="signup_title">Create an Account</div>
              <span className="signup_para">
                Welcome to Egoras Savings.
              </span>
              <div className="signup_inputs_cont">
                <div
                  className="signup_input_field1_cont"
                  style={{ flexDirection: 'row' }}
                >
                  <div className="text-left">
                    <span className="input_title">First Name</span>
                    <input
                      type="text"
                      name="firstname"
                      className="signup_input_field"
                      value={firstname}
                      onChange={onChange}
                    />
                  </div>
                  <div className="text-left">
                    <span className="input_title">Last Name</span>
                    <input
                      type="text"
                      name="lastname"
                      className="signup_input_field"
                      value={lastname}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="signup_input_field1_cont">
                  <span className="input_title">Email address</span>
                  <input
                    type="email"
                    className="signup_input_field"
                    value={email}
                    name="email"
                    onChange={onChange}
                    placeHolder="@gmail.com"
                  />
                  <div className="weak_pass_div text-muted">
                    * Optional
                  </div>
                </div>

                <div
                  className="signup_input_field1_cont"
                  style={{ flexDirection: 'row' }}
                >
                  <div className="text-left">
                    <span className="input_title">Phone Number</span>
                    <input
                      type="number"
                      className="signup_input_field"
                      value={phoneNumber}
                      name="phoneNumber"
                      onChange={onChange}
                    />
                  </div>
                  <div
                    className="text-left"
                    style={{ width: '-webkit-fill-available' }}
                  >
                    <span className="input_title">Date Of Birth</span>
                    <DatePicker
                      onChange={setDateOfBirth}
                      value={dateOfBirth}
                      format="yyyy-MM-dd"
                    />
                    <div className="weak_pass_div text-muted">
                      * Optional
                    </div>
                  </div>
                </div>
                <div className="signup_input_field1_cont">
                  <span className="input_title">
                    Bank Verification Number (BVN)
                  </span>
                  <input
                    type="number"
                    className="signup_input_field"
                    value={BVN}
                    name="BVN"
                    onChange={onChange}
                    placeHolder="***********"
                  />
                  <div className="weak_pass_div text-muted">
                    * Optional
                  </div>
                </div>

                {/* <div className="signup_input_field1_cont">
                    <span className="input_title">
                      Bank Verification Number (BVN)
                    </span>
                    <input
                      type="number"
                      className="signup_input_field"
                      value={BVN}
                      name="BVN"
                      onChange={onChange}
                    />
                  </div> */}
                <div className="signup_input_field1_cont">
                  <span className="input_title">Password</span>
                  <div className="passwrd_input_div">
                    <input
                      type={visibility ? 'text' : 'password'}
                      className="signup_input_field"
                      value={password}
                      name="password"
                      onChange={onChange}
                      placeHolder="****"
                      // onInput={onChangeMisMatch}
                    />
                    {visibility == false ? (
                      <img
                        src="/img/close-pass.svg"
                        alt=""
                        className="close_pass_img"
                        onClick={setPasswordVisibilty}
                      />
                    ) : (
                      <img
                        src="/img/show-icon.svg"
                        alt=""
                        className="open_pass_img"
                        onClick={closetPasswordVisibilty}
                      />
                    )}
                  </div>
                  {strongPass == false ? null : (
                    <div className="weak_pass_div">
                      Password is weak
                    </div>
                  )}
                </div>
                <div className="signup_input_field1_cont">
                  <span className="input_title">Repeat Password</span>
                  <div className="passwrd_input_div">
                    <input
                      type={visibility2 ? 'text' : 'password'}
                      className="signup_input_field"
                      value={confirmPassword}
                      name="confirmPassword"
                      onChange={onChange2}
                      placeHolder="****"
                    />
                    {visibility2 == false ? (
                      <img
                        src="/img/close-pass.svg"
                        alt=""
                        className="close_pass_img"
                        onClick={setPasswordVisibilty2}
                      />
                    ) : (
                      <img
                        src="/img/show-icon.svg"
                        alt=""
                        className="open_pass_img"
                        onClick={closetPasswordVisibilty2}
                      />
                    )}
                  </div>
                  {mismatchPass == false ? null : (
                    <div className="weak_pass_div">
                      Password did not match
                    </div>
                  )}
                </div>
                <div className="signup_input_field1_cont">
                  <span className="input_title">
                    How did you hear about us?
                  </span>

                  <select
                    className="cust_select"
                    name="InfoReason"
                    onChange={onChange}
                    value={InfoReason}
                  >
                    <option value="0" className="opt">
                      Click to select:
                    </option>
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Referred">Referred</option>
                    <option value="Online Blog">Online Blog</option>
                    <option value="Google search">
                      Google search
                    </option>
                    <option value="Others">Others</option>
                  </select>
                  {/* ==[[[[[]]]]] */}

                  {/* <input type="" className="signup_input_field" /> */}
                </div>
                <button
                  type="submit"
                  className="sign_up_btn"
                  onClick={submitData}
                  disabled={disable}
                >
                  {isLoading ? (
                    <span>
                      Creating account
                      <FontAwesomeIcon
                        className="ml-2"
                        icon={faSpinner}
                        spin
                      />
                    </span>
                  ) : (
                    <span>Create account</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {alert2 == "" ? null : <CustomAlert alert={alert2} alertType={alertType} onChange={timer} />} */}
    </div>
  );
};

UserSignUpComp.propTypes = {
  // getLoginAuthentication: PropTypes.func.isRequired,
  // setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getAuthentication })(
  UserSignUpComp
);
