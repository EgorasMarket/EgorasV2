import React, { useState, useEffect, Fragment } from 'react';
// import "../../../../css/signup.css";
import { connect } from 'react-redux';
import '../../../../css/login.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CustomAlert } from '../../../../CustomAlert';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Kcl.css';

import { getLogin } from '../../../../actions/auth';
// import { getAuthentication } from "../../../../actions/auth";
// import { setAlert } from "../../../../actions/alert";

const Login = ({ getLogin, isAuthenticated }) => {
  // const [token,setToken]=useState();
  const [disable, setDisable] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [toke, setToke] = useState({ email: '', password: '' });
  const [strongPass, setStrongPass] = useState(false);
  const [alert, setAlert] = useState('');
  const [customAlert, setCustomAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const { email, password } = toke;
  const [isSuccessful, setIsSuccessful] = useState(false);

  // ===============
  // ===============
  // ===============
  // ===============
  // useEffect(() => {
  //   setAlert("");
  //   const closeAlert = () => setAlert("");
  //   setTimeout(function () {
  //     closeAlert();
  //     console.log("66");
  //   }, 10000);
  // }, [alert]);
  // ===============
  // ===============
  // ===============
  // ===============

  const onChange2 = (e) => {
    setToke({ ...toke, [e.target.name]: e.target.value });
    const { name, value } = e.target;

    switch (name) {
      case 'password':
        if (e.target.value.length <= 7) {
          setStrongPass(true);
          console.log('password is not 8');
        } else if (password.length >= 7) {
          setStrongPass(false);
          console.log('password is 8');
        }
        break;
      default:
        break;
    }
    // if (isLoading == true) {
    //   setDisable(true);
    // } else if (isLoading == false) {
    //   setDisable(true);
    // }
  };

  useEffect(() => {
    if (email === '') {
      setDisable(true);
    } else if (password === '') {
      setDisable(true);
    } else if (isLoading == true) {
      setDisable(true);
    } else if (isLoading == false) {
      setDisable(false);
    } else if (email != '') {
      setDisable(false);
    } else if (password != '') {
      setDisable(false);
    } else {
      setDisable(false);
    }
  });
  const submitLogin = async (e) => {
    if (isLoading == true) {
      setDisable(true);
    } else if (isLoading == false) {
      setDisable(false);
    }
    setIsLoading(true);
    setDisable(true);
    let res3 = await getLogin(email, password);
    // console.log(res3.data.data.errors[0].msg);
    //  setToken(res)

    console.log(res3.data);

    // if (res.data.email !== e.target.value)

    if (res3.data.success === true) {
      setIsSuccessful(true);
      setIsLoading(false);
      // setDisable(false);
      console.log('okay Good Server');
    } else {
      console.log('ffff');
      setCustomAlert(true);
      setAlert(res3.data);
      setAlertType('danger');
      setIsLoading(false);
      setDisable(false);
    }

    // if (email === "") {
    //   setDisable(true);
    // } else if (password === "") {
    //   setDisable(true);
    // } else {
    //   setDisable(false);
    // }
  };
  const setPasswordVisibilty = () => {
    setVisibility(true);
    // setPassImg("hide_pass");
  };
  const closetPasswordVisibilty = () => {
    setVisibility(false);
    // setPassImg("show_pass");
  };

  // Redirect if logged in
  if (isAuthenticated) {
    // return <Redirect to="/dashboard" />;
    return window.location.replace('/dashboard');
  }
  // const timer = setTimeout(() => {
  //   setAlert("");
  // }, 5000);

  // const timer = () => {
  //   setTimeout(closeAlert, 10000);
  // };

  return (
    <div>
      <section className="signup_section">
        <div className="container">
          <div className="signup_area">
            <div className="signup_cont_head">
              <a href="/">
                <img
                  src="/img/egoras-logo.svg"
                  alt=""
                  className="signup_title_img"
                />
              </a>
            </div>
            <div className="signup_cont">
              <div className="signup_title">
                Login to your account
              </div>
              <span className="signup_para">
                Securely login to your Egoras Savings account.
              </span>
              <div className="signup_inputs_cont">
                <div className="signup_input_field1_cont">
                  <span className="input_title">
                    Email address or Phone number
                  </span>
                  <input
                    type="email"
                    className="signup_input_field"
                    name="email"
                    onChange={onChange2}
                    value={email}
                    placeHolder="Email or phone number"
                    // autocomplete="off"

                    // autocomplete="off"
                  />
                </div>
                {/* <div className="signup_input_field1_cont">
                  <span className="input_title">Phone Number</span>
                  <input type="number" className="signup_input_field" />
                </div> */}
                <div className="signup_input_field1_cont">
                  <span className="input_title">Password</span>
                  <div className="passwrd_input_div">
                    <input
                      type={visibility ? 'text' : 'password'}
                      className="signup_input_field"
                      value={password}
                      name="password"
                      onChange={onChange2}
                      placeHolder="******"
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

                {/* <div className="signup_input_field1_cont">
                  <span className="input_title">Repeat Password</span>
                  <input type="password" className="signup_input_field" />
                </div> */}
                <button
                  type="submit"
                  className="sign_up_btn"
                  onClick={submitLogin}
                  disabled={disable}
                >
                  {isLoading ? (
                    <span>
                      Logging in{' '}
                      <FontAwesomeIcon
                        className="ml-2"
                        icon={faSpinner}
                        spin
                      />
                    </span>
                  ) : (
                    <span>Login</span>
                  )}
                </button>
              </div>
            </div>
            <span className="login_txt">
              <a href="/signup" className="login_link">
                Don't have an account? Register
              </a>
            </span>
          </div>
        </div>
        <img src="/img/piggy_bg.svg" alt="" className="piggy_bg" />
      </section>

      {/* {alert === "" ? null : (
        <CustomAlert
          closeAlert={() => setCustomAlert(false)}
          alert={alert}
          alertType={alertType}
        />
      )} */}

      {customAlert === true ? (
        <CustomAlert
          alert={alert}
          alertType={alertType}
          closeAlert={() => setCustomAlert(false)}
        />
      ) : null}
    </div>

    // :null}
  );
};

Login.propTypes = {
  getLogin: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getLogin })(Login);
