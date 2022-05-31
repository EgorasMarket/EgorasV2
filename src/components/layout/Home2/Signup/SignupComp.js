import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
// import { setAlert } from "../../../../actions/alert";
import DatePicker from "react-date-picker";
import "../../../../css/signup.css";
import { CustomAlert } from "../../../../CustomAlert";
import { adminAddCustomer } from "../../../../actions/adminAuth";

const SignupComp = ({ adminAddCustomer }) => {
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [userAuth, setUserAuth] = useState({
    // fullname: "",
    firstname: "",
    lastname: "",
    email: "",
    // password: "",
    BVN: "",
    phoneNumber: "",
    // confirmpassword: "",
    InfoReason: "",
  });

  const [dateOfBirth, setDateOfBirth] = useState("");

  const { firstname, lastname, email, phoneNumber, BVN, InfoReason } = userAuth;

  let birthDate = dateOfBirth ? dateOfBirth.toLocaleDateString() : "";

  const onChange = (e) => {
    setUserAuth({ ...userAuth, [e.target.name]: e.target.value });

    // if (e.target.value === "") {
    //   //console.log("input something here");
    // } else {
    //   //console.log("something is here");
    // }
  };

  const submitData = async (e) => {
    // //console.log('ggg');
    if (
      firstname === "" ||
      lastname === "" ||
      phoneNumber === "" ||
      //  || BVN === ''
      InfoReason === ""
    ) {
      //console.log(fullname, email, password, confirmpassword, BVN, phoneNumber, InfoReason);
      setAlert("All supply all fields.");
      setAlertType("danger");
      //console.log('All supply all fields.');
    } else {
      // if (password !== confirmpassword) {
      //   setAlert('Password do not match.');
      //   setAlertType('danger')
      // }

      let res = await adminAddCustomer(
        // fullname,
        firstname.trim(),
        lastname.trim(),
        email,
        birthDate,
        // password,
        BVN,
        phoneNumber,
        InfoReason
        //   localStorage.referrer
      );
      //console.log(res);
      if (res.data.success === true) {
        setIsSuccessful(true);
        //console.log("okay Good Server");
      } else {
        console.log(res.data.data);
        setAlert(res.data.data.errors[0].msg);
        setAlertType("danger");
      }
    }
  };

  const timer = setTimeout(() => {
    setAlert("");
  }, 5000);
  return (
    <div>
      {isSuccessful == false ? (
        <div className="signup_area">
          <div className="signup_cont">
            <div className="signup_title">Create User Account</div>
            <span className="signup_para">
              Welcome to the future of savings & investments.
            </span>
            <div className="signup_inputs_cont">
              <div
                className="signup_input_field1_cont"
                style={{ flexDirection: "row" }}
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
                {/* <div className="weak_pass_div text-muted">* Optional</div> */}
              </div>
              <div
                className="signup_input_field1_cont"
                style={{ flexDirection: "row" }}
              >
                <div className="text-left">
                  <span className="input_title d-block">Phone Number</span>
                  <input
                    type="number"
                    className="signup_input_field"
                    value={phoneNumber}
                    name="phoneNumber"
                    onChange={onChange}
                  />
                </div>
                <div className="text-left">
                  <span className="input_title d-block">Date Of Birth</span>
                  <DatePicker
                    onChange={setDateOfBirth}
                    value={dateOfBirth}
                    format="yyyy-MM-dd"
                  />
                </div>
                <div className="weak_pass_div text-muted">* Optional</div>
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
                <div className="weak_pass_div text-muted">* Optional</div>
              </div>
              {/* <div className="signup_input_field1_cont">
              <span className="input_title">Password</span>
              <input
                type="password"
                className="signup_input_field"
                value={password}
                name="password"
                onChange={onChange}
                  placeHolder="****"
              />
            </div>
            <div className="signup_input_field1_cont">
              <span className="input_title">
                Repeat Password
              </span>
              <input 
                type="password" 
                value={confirmpassword}
                name="confirmpassword"
                onChange={onChange}
                className="signup_input_field"
                  placeHolder="****"
              />
            </div> */}
              <div className="signup_input_field1_cont">
                <span className="input_title">How did you hear about us?</span>

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
                  <option value="Google search">Google search</option>
                  <option value="Others">Others</option>
                </select>
                {/* ==[[[[[]]]]] */}

                {/* <input type="" className="signup_input_field" /> */}
              </div>
              <button
                type="submit"
                className="sign_up_btn"
                onClick={submitData}
              >
                Create account
              </button>
            </div>
          </div>
          {/* <span className="login_txt">
            <a href="/super_admin/user/login" className="login_link">
              Already have an account? Login
            </a>
          </span> */}
        </div>
      ) : (
        <section className="signup_section success_section">
          <div className="container">
            <div className="sign_up_area">
              <div className="sign_up_cont  success_div">
                <div className="sign_up_area2 ">
                  <div className="sign_up_area1_cont1">
                    <div className="forgot_password_div center_me">
                      <img
                        src="/img/success-mail-icon.svg"
                        alt=""
                        className="success_img"
                      />
                      <h4 className="check_mail">
                        Account creation was successful
                      </h4>

                      <p>A confirmation email have been sent to the customer</p>
                      {/* <p className="note">
                        {" "}
                        * If the email doesn’t show up soon, check your spam
                        folder or make sure you enter the email you used for
                        registration.
                      </p> */}
                    </div>
                  </div>
                  {/* 
                  <div className="sign_up_btns">
                    <a href="/login" className="login2">
                      {" "}
                      <button
                        className="sign_up_btn"
                        // type="submit"
                      >
                        {" "}
                        Return to login
                      </button>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {alert == "" ? null : <CustomAlert alert={alert} onChange={timer} />}
    </div>
  );
};

export default connect(null, { adminAddCustomer })(SignupComp);
