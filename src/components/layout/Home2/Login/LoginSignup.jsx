import React, { useState, useEffect, Fragment } from "react";
// import "../../../../css/signup.css";
import { connect } from "react-redux";
import "../../../../css/login.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import { CustomAlert } from "../../../../CustomAlert";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Kcl.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { getLogin } from "../../../../actions/auth";
// import { getAuthentication } from "../../../../actions/auth";
// import { setAlert } from "../../../../actions/alert";

const LoginSignup = ({ getLogin, isAuthenticated }) => {
  // const [token,setToken]=useState();
  const [disable, setDisable] = React.useState(false);
  // const [ref_auth, setRef_auth] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [token, setToken] = useState({ email: "", ref_auth: "" });
  const [strongPass, setStrongPass] = useState(false);
  const [alert, setAlert] = useState("");
  const [customAlert, setCustomAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const { email, ref_auth } = token;
  const [emailLink, setEmailLink] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    if (authToken !== null) {
      return (window.location.href = "/");
    }
  }, []);

  useEffect(() => {
    if (typeof localStorage.referer !== undefined) {
      // localStorage.getItem("referer");
      // setRef_auth(localStorage.getItem("referer"));
      setToken({
        email: "",
        ref_auth: localStorage.getItem("referer"),
      });
    }
  }, []);
  // console.log(ref_auth);

  const NetWorkTimeoutMsg = "The connection to the server timed out.";
  const onlineMsg = "Your internet connection appears to be offline.";
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
    setToken({ ...token, [e.target.name]: e.target.value });
  };
  const toggleEmailLink = () => {
    if (emailLink === false) {
      setEmailLink(true);
    } else if (emailLink === true) {
      setEmailLink(false);
    }
  };
  useEffect(() => {
    if (email === "") {
      setDisable(true);
    } else if (isLoading == true) {
      setDisable(true);
    } else if (isLoading == false) {
      setDisable(false);
    } else if (email != "") {
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

    if (window.navigator.onLine === false) {
      console.log("i am offline ");
      setIsLoading(false);
      setDisable(false);
      setAlertType("danger");
      setAlert(onlineMsg);
      setCustomAlert(true);
      return;
    }
    setIsLoading(true);
    setDisable(true);

    try {
      let res3 = await getLogin(email, ref_auth);
      // console.log(res3.data.data.errors[0].msg);
      //  setToken(res)

      console.log(res3.data);

      // if (res.data.email !== e.target.value)

      if (res3.data.success === true) {
        setIsSuccessful(true);
        setIsLoading(false);
        localStorage.removeItem("referer");
        // setDisable(false);
        console.log("okay Good Server");
      } else {
        console.log(res3.data.data.errors[0].msg);
        setCustomAlert(true);
        setAlert(res3.data.data.errors[0].msg);
        setAlertType("danger");
        setIsLoading(false);
        setDisable(false);
        //   if (res3.data.data.request) {
        //     // The request was made but no response was received

        //   } else {
        //     // Something happened in setting up the request that triggered an Error
        //     console.log("Error", res3.data.data.errors[0].msg);
        //   }
      }
    } catch (err) {
      setIsLoading(false);
      setDisable(false);
      setAlertType("danger");
      setAlert(NetWorkTimeoutMsg);
      setCustomAlert(true);
    }
  };
  // Redirect if logged in
  if (isAuthenticated) {
    // return <Redirect to="/dashboard" />;
    return window.location.replace("/dashboard");
  }

  return (
    <div>
      <section className="signup_section">
        <div className="container">
          {isSuccessful === true ? (
            <div className="signup_area">
              <div className="signup_cont">
                <div
                  className="back_btn"
                  onClick={() => {
                    setIsSuccessful(false);
                    setToken({ email: "" });
                  }}
                >
                  <ArrowBackIosIcon className="back_register_icon" />
                  Back
                </div>
                <div className="register_success_msg">
                  <span className="check_emailTitle">Check your email.</span>
                  Click on the login button that We have emailed to{" "}
                  <span className="email_name">{email} </span>to login.
                </div>
                <p className="terms_privacy">
                  You agree to Egoras's{" "}
                  <a href="/terms-conditions" className="terms_link">
                    {" "}
                    Terms of Service
                  </a>{" "}
                  and
                  <a href="/privacy" className="privacy_link">
                    {" "}
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          ) : (
            <div className="signup_area">
              <div className="signup_cont">
                {emailLink === true ? (
                  <div className="back_btn" onClick={toggleEmailLink}>
                    <ArrowBackIosIcon className="back_register_icon" />
                    Back
                  </div>
                ) : null}

                <div className="signup_title">Login / Register</div>
                <span className="signup_para">
                  Securely Signup to get an Egoras account.
                </span>

                {emailLink === true ? (
                  <div className="signup_inputs_cont">
                    <div className="signup_input_field1_cont">
                      <span className="input_title">
                        Enter your Email address
                      </span>
                      <input
                        type="email"
                        className="signup_input_field"
                        name="email"
                        onChange={onChange2}
                        value={email}
                        placeHolder="Email"
                      />
                    </div>
                    <div className="signup_input_field1_cont">
                      <span className="input_title">Referal Code</span>
                      <input
                        type="text"
                        className="signup_input_field"
                        name="ref_auth"
                        onChange={onChange2}
                        value={ref_auth}
                        placeHolder="Referal Code"
                      />
                    </div>

                    <button
                      type="submit"
                      className="sign_up_btn"
                      onClick={submitLogin}
                      disabled={disable}
                    >
                      {isLoading ? (
                        <span>
                          Sending Link{" "}
                          <FontAwesomeIcon
                            className="ml-2"
                            icon={faSpinner}
                            spin
                          />
                        </span>
                      ) : (
                        <span>Send Link</span>
                      )}
                    </button>
                    <p className="terms_privacy">
                      You agree to Egoras's{" "}
                      <a href="/terms-conditions" className="terms_link">
                        {" "}
                        Terms of Service
                      </a>{" "}
                      and
                      <a href="/privacy" className="privacy_link">
                        {" "}
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                ) : emailLink === false ? (
                  <div className="signup_inputs_cont">
                    <button
                      type="submit"
                      className="sign_up_btn"
                      onClick={toggleEmailLink}
                    >
                      <AttachEmailOutlinedIcon className="back_register_icon" />{" "}
                      Sign in with Email
                    </button>

                    <p className="terms_privacy">
                      You agree to Egoras's{" "}
                      <a href="/terms-condition" className="terms_link">
                        {" "}
                        Terms of Service
                      </a>{" "}
                      and
                      <a href="/privacy" className="privacy_link">
                        {" "}
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                ) : null}
              </div>
              {/* <span className="login_txt">
              <a href="/signup" className="login_link">
                Don't have an account? Register
              </a>
            </span> */}
            </div>
          )}
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

LoginSignup.propTypes = {
  getLogin: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getLogin })(LoginSignup);
