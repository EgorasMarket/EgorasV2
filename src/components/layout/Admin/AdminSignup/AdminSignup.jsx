import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { CustomAlert } from "../../../../CustomAlert";
import { setAlert } from "../../../../actions/alert";
import { getAuthentication } from "../../../../actions/adminAuth";
const AdminSignup = ({ getAuthentication }) => {
  const [visibility, setVisibility] = useState(false);
  const [disable, setDisable] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [adminAuth, setAdminAuth] = useState({
    fullname: "",
    mobile: "",
    email: "",
    staffId: "",
    password: "",
    confirmPassword: "",
    role: "",
    gender: "",
    branch: "",
  });
  const {
    fullname,
    mobile,
    email,
    staffId,
    password,
    confirmPassword,
    role,
    gender,
    branch,
  } = adminAuth;
  const onChange = (e) => {
    setAdminAuth({ ...adminAuth, [e.target.name]: e.target.value });
  };
  const setPasswordVisibilty = () => {
    setVisibility(true);
  };
  const closetPasswordVisibilty = () => {
    setVisibility(false);
  };
  const setPasswordVisibilty2 = () => {
    setVisibility2(true);
  };
  const closetPasswordVisibilty2 = () => {
    setVisibility2(false);
  };
  const submitData = async (e) => {
    let res = await getAuthentication(
      fullname,
      mobile,
      email,
      staffId,
      password,
      role,
      gender,
      branch
      //   localStorage.referrer
    );
    //console.log(res);
    if (res.data.success === true) {
      setIsSuccessful(true);
      //console.log("okay Good Server");
    } else {
      setAlert(res.data.data.errors[0].msg, "danger");
    }
  };
  const timer = setTimeout(() => {
    setAlert("");
  }, 5000);
  return (
    <div className="other2">
      {isSuccessful == false ? (
        <section className="no-bg">
          <div className="container">
            <div className="signup_area">
              <div className="signup_cont">
                <div className="signup_title">Create an Account</div>
                <div className="signup_inputs_cont">
                  <div className="signup_input_field1_cont">
                    <span className="input_title">Full Name</span>
                    <input
                      type="text"
                      name="fullname"
                      className="signup_input_field"
                      value={fullname}
                      onChange={onChange}
                    />
                  </div>
                  <div className="signup_input_field1_cont">
                    <span className="input_title">Email address</span>
                    <input
                      type="email"
                      className="signup_input_field"
                      value={email}
                      name="email"
                      onChange={onChange}
                    />
                  </div>
                  <div className="signup_input_field1_cont">
                    <span className="input_title">Phone Number</span>
                    <input
                      type="number"
                      className="signup_input_field"
                      value={mobile}
                      name="mobile"
                      onChange={onChange}
                    />
                  </div>
                  <div className="signup_input_field1_cont">
                    <span className="input_title">Staff Id</span>
                    <input
                      type="text"
                      className="signup_input_field"
                      value={staffId}
                      name="staffId"
                      onChange={onChange}
                    />
                  </div>
                  <div className="signup_input_field1_cont">
                    <span className="input_title">Password</span>
                    <div className="passwrd_input_div">
                      <input
                        type={visibility ? "text" : "password"}
                        className="signup_input_field"
                        value={password}
                        name="password"
                        onChange={onChange}
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
                  </div>
                  <div className="signup_input_field1_cont">
                    <span className="input_title">Repeat Password</span>
                    <div className="passwrd_input_div">
                      <input
                        type={visibility2 ? "text" : "password"}
                        className="signup_input_field"
                        value={confirmPassword}
                        name="confirmPassword"
                        onChange={onChange}
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
                  </div>
                  <div className="signup_input_field1_cont">
                    <span className="input_title">Role</span>
                    <div className="toggle_body_area1_cont1_input">
                      <div className="name_input1a lar_widthh">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Select Role
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="role"
                            value={role}
                            label="role"
                            onChange={onChange}
                            // onSelect={onChange}
                          >
                            <MenuItem value={1}>MANAGER</MenuItem>
                            <MenuItem value={2}>BUSINESS_ADMIN</MenuItem>
                            <MenuItem value={3}>MEDIA</MenuItem>
                            <MenuItem value={4}>CASHIER</MenuItem>
                            <MenuItem value={5}>CUSTOMER_SERVICE</MenuItem>
                            <MenuItem value={6}>LOGISTICS</MenuItem>
                            <MenuItem value={7}>HOD_MEDIA</MenuItem>
                            <MenuItem value={8}>TECH</MenuItem>
                            <MenuItem value={9}>WAREHOUSE</MenuItem>
                            <MenuItem value={10}>ACCOUNTANT</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                  <div className="signup_input_field1_cont">
                    <span className="input_title">Branch</span>
                    <div className="toggle_body_area1_cont1_input">
                      <div className="name_input1a lar_widthh">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Select Branch
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="branch"
                            value={branch}
                            label="branch"
                            onChange={onChange}
                          >
                            <MenuItem value="RUMUKWRUSHI">
                              Rumukwrushi branch
                            </MenuItem>
                            <MenuItem value="AGIP">Agip branch</MenuItem>
                            <MenuItem value="OYIGBO">Oyigbo branch</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                  <div className="signup_input_field1_cont">
                    <span className="input_title">Gender</span>
                    <div className="toggle_body_area1_cont1_input">
                      <div className="radio_group">
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          // value={Male}
                          value="Male"
                          onChange={onChange}
                        />
                        <label for="male" class="radio" value={gender}>
                          Male
                        </label>
                      </div>
                      <div className="radio_group">
                        <input
                          type="radio"
                          name="gender"
                          id="female"
                          // value="female"
                          value="Female"
                          onChange={onChange}
                        />
                        <label for="female" class="radio" value={gender}>
                          Female
                        </label>
                      </div>
                    </div>
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
                <a href="/login/super_admin" className="login_link">
                  Already have an account? Login
                </a>
              </span> */}
            </div>
          </div>
        </section>
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
                      <h4 className="check_mail">Check your email</h4>

                      <p>
                        An activation email has been sent to{" "}
                        <span className="email_name">{/* {email} */}</span> with
                        instructions to activate your account.
                      </p>
                      <p className="note">
                        {" "}
                        * If the email doesn’t show up soon, check your spam
                        folder or make sure you enter the email you used for
                        registration.
                      </p>
                    </div>
                  </div>

                  {/* <div className="sign_up_btns">
                    <a href="/login/super_admin" className="login2">
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
      {/* ========== */}
      {/* ========== */}
      {/* ========== */}
    </div>
  );
};
export default connect(null, { getAuthentication })(AdminSignup);
