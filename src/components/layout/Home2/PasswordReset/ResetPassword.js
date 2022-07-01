import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CustomAlert } from "../../../../CustomAlert";
// import { reset } from "../../../actions/Auth";
import { reset } from "../../../../actions/auth";

const ResetPassword = ({ match, reset }) => {
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [passImg, setPassImg] = useState("show_pass");
  const [passImg2, setPassImg2] = useState("show_pass2");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [strongPass, setStrongPass] = useState(false);

  ////console.log(match.params.id);

  const [formData, setFormData] = useState({
    email_auth: match.params.id,
    password: "",
    confirmpassword: "",
  });

  const { password, confirmpassword, email_auth } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const submitData = async (e) => {
    
    // setIsLoading(true);
    // if (res)
    //console.log(email_auth, password, confirmpassword);
    
    // setAlert('res3.data', "danger");

    if (password === '' || confirmpassword === '') {
      setAlert('All fields are required');
      setAlertType('danger')
    } else {
      if (password !== confirmpassword) {
        setAlert('Passwords do not match');
        setAlertType('danger')
      } else {
        let res = await reset({ password, email_auth });
        ////console.log(res);
        if (res.data.success === true) {
          setIsSuccessful(true);
          ////console.log("okay Good Server");
        } else {
          setAlert(res.data[0].msg);
          setAlertType('danger')
        }
      }
    }
  };

  const setPasswordVisibilty = () => {
    setVisibility(true);
    setPassImg("hide_pass");
  };
  const closetPasswordVisibilty = () => {
    setVisibility(false);
    setPassImg("show_pass");
  };
  // =====
  // =====
  // =====
  // =====
  const setPasswordVisibilty2 = () => {
    setVisibility2(true);
    setPassImg2("hide_pass2");
  };
  const closetPasswordVisibilty2 = () => {
    setVisibility2(false);

    setPassImg2("show_pass2");
  };
  const timer = setTimeout(() => {
    setAlert("");
  }, 9000);

  return (
    <div>
      <section className="activation_section">
        <div className="container">
          <div className="activation_area">
            <div  style={{marginTop: '110px'}}  className="sign_up_cont  success_div">
              {!isSuccessful ? (
                <div className="sign_up_area2">
                <div className="forgot_password_div center_me">
                  <h1 className="check_mail"> Update your password </h1>
                  <div className="">
                    To ensure that account is well protected, please use 8 or
                    more characters with a mix of letters, numbers & symbols.
                  </div>
                  <form class="sign_up_form" action="/action_page.php">
                    <label for="psw"></label>
                    <div className="signup_input_field1_cont">
                      <span className="input_title">Password</span>
                      <div className="passwrd_input_div">
                        <input
                          type={visibility ? "text" : "password"}
                          className="signup_input_field"
                          value={password}
                          name="password"
                          onChange={onChange}
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
                      {/* {strongPass == false ? null : (
                        <div className="weak_pass_div">Password is weak</div>
                      )} */}
                    </div>
                    <label for="psw"></label>
                    <div className="signup_input_field1_cont">
                      <span className="input_title">Confirm Password</span>
                      <div className="passwrd_input_div">
                        <input
                          type={visibility2 ? "text" : "password"}
                          className="signup_input_field"
                          value={confirmpassword}
                          name="confirmpassword"
                          onChange={onChange}
                          // onInput={onChangeMisMatch}
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
                      {/* {strongPass == false ? null : (
                        <div className="weak_pass_div">Password is weak</div>
                      )} */}
                    </div>
                  
                  </form>
                </div>

                <div className="sign_up_btns">
                  <button
                    // type="submit"
                    className="sign_up_btn"
                    onClick={submitData}
                  >
                    {!isLoading ? "Update Password" : "Updating Password"}
                  </button>
                </div>
              </div>
              ) : (
                <div className="forgot_password_div center_me">
                  <img
                    src="/img/success-mail-icon.svg"
                    alt=""
                    className="success_img"
                  />
                  <h4 className="check_mail">Congratulations</h4>

                  <p>
                    You have successfully reset your password
                  </p>
                  {/* <p className="note">
                    {" "}
                    * If the email doesn’t show up soon, check your spam
                    folder or make sure you enter the email you used for
                    registration.
                  </p> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* {alert == null ? "" : <CustomAlert alert={alert} alertType={alertType}  />} */}
      {alert == "" ? null : <CustomAlert alert={alert} alertType={alertType} onChange={timer} />}
    </div>
  );
};

ResetPassword.propTypes = {
  // getLogin: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  // isAuthenticated: PropTypes.bool,
};
export default connect(null, { reset })(ResetPassword);
