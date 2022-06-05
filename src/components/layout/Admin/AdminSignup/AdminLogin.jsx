import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import "../../../../css/login.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CustomAlert } from "../../../../CustomAlert";
import { getLogin } from "../../../../actions/adminAuth";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NoDataFoundComponent } from "../../Home2/Dashboard/NodataFound/NoDataFoundComponent";
import { render } from "react-dom";
// import { setAlert } from "../../../../actions/alert";

const AdminLogin = ({ getLogin, isAuthenticated }) => {
  const [toke, setToke] = useState({ email: "", password: "" });
  const [disable, setDisable] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const { email, password } = toke;
  const [strongPass, setStrongPass] = useState(false);
  const [alert, setAlert] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  const onChange2 = (e) => {
    setToke({ ...toke, [e.target.name]: e.target.value });

    const { name, value } = e.target;

    switch (name) {
      case "password":
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

  const text = "No item Locked yet";
  const transText = "No transactions found";
  useEffect(() => {
    if (email === "") {
      setDisable(true);
    } else if (password === "") {
      setDisable(true);
    } else if (isLoading == true) {
      setDisable(true);
    } else if (isLoading == false) {
      setDisable(false);
    } else {
      setDisable(false);
    }
  });
  const submitLogin = async (e) => {
    //console.log(email, password);
    if (isLoading == true) {
      setDisable(true);
    } else if (isLoading == false) {
      setDisable(false);
    }
    setIsLoading(true);
    setDisable(true);

    if (navigator.onLine) {
      let res3 = await getLogin(email, password);

      console.log(res3);

      if (res3.data.success === true) {
        setIsSuccessful(true);
        setIsLoading(false);
        //console.log("okay Good Server");
      } else {
        setAlert(res3.data, "danger");
        setIsLoading(false);
        setDisable(false);
        // setAlert(res3.data.errors[0].msg, "danger");
      }
    } else {
      render(<NoDataFoundComponent />);
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
  // Redirect if logged in
  if (isAuthenticated) {
    // return <Redirect to="/dashboard" />;
    return window.location.replace("/super_admin");
  }
  const timer = setTimeout(() => {
    setAlert("");
  }, 5000);
  return (
    <div>
      <section className="signup_section">
        <div className="container">
          <div className="signup_area">
            <div className="signup_cont">
              <div className="signup_title">Login to your admin account</div>
              <span className="signup_para">
                Securely login to your Egoras Savings account.
              </span>
              <div className="signup_inputs_cont">
                <div className="signup_input_field1_cont">
                  <span className="input_title">Email address</span>
                  <input
                    type="email"
                    className="signup_input_field"
                    name="email"
                    onChange={onChange2}
                    value={email}
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
                      type={visibility ? "text" : "password"}
                      className="signup_input_field"
                      value={password}
                      name="password"
                      onChange={onChange2}
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
                    <div className="weak_pass_div">Password is weak</div>
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
                      Logging in{" "}
                      <FontAwesomeIcon className="ml-2" icon={faSpinner} spin />
                    </span>
                  ) : (
                    <span>Login</span>
                  )}
                </button>
              </div>
            </div>
            <span className="login_txt">
              <a href="/signup/super_admin" className="login_link">
                Don't have an account? Register
              </a>
            </span>
          </div>
        </div>
        <img src="/img/piggy_bg.svg" alt="" className="piggy_bg" />
      </section>
      {alert == "" ? null : <CustomAlert alert={alert} onChange={timer} />}
    </div>
  );
};

// export default AdminLogin;

AdminLogin.propTypes = {
  // getLoginAuthentication: PropTypes.func.isRequired,
  // setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getLogin })(AdminLogin);
