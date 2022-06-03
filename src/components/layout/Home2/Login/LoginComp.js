import React, { useState, useCallback } from 'react';
// import "../../../../css/signup.css";
import { connect } from 'react-redux';
import '../../../../css/login.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CustomAlert } from './alert';

import { getLogin } from '../../../../actions/auth';
// import { getAuthentication } from "../../../../actions/auth";
import { setAlert } from '../../../../actions/alert';
import UserSignUpComp from '../Signup/UserSignUpComp';

const LoginComp = ({
  getLogin,
  setAlert,
  isAuthenticated,
  parentCallback,
}) => {
  const [toke, setToke] = useState({ email: '', password: '' });
  const [userName, setUserName] = useState('');
  const [alert2, setAlert2] = useState('');
  const [alertType, setAlertType] = useState('');
  const [authState, setAuthState] = useState('login');
  // const [autFree,setAutFree]=useState()

  // const [loginSuccess,setLoginSuccess]= useState('successfully');
  // const [password,setPassword]= useState();

  const { email, password } = toke;

  const [infoSet, setSet] = useState(
    localStorage.getItem('6218a7a7c55c3a00ed668b6d.appUserId')
  );

  const onChange2 = (e) => {
    setToke({ ...toke, [e.target.name]: e.target.value });
  };

  const showSignUp = () => {
    setAuthState('signup');
  };

  // const onChangeMe1 =(e)=>{
  // setEmail(e.target.value)

  // }
  // console.log(email," email up to you")

  //  const onChangeMe2 =(e)=>{
  // setPassword(e.target.value)

  //  }

  const sumit = async (e) => {
    // loginSuccess('true')

    let res3 = await getLogin(email, password);

    console.log(res3, 'send');

    // const email2 = document.querySelector('#Email');
    // if (email != email2.target.value){
    //   console.log(' email does not match')
    // }

    if (res3.data.success === true) {
      parentCallback(true);
    } else {
      console.log(res3.data);
      setAlert2(res3.data);
    }
  };
  // Redirect if logged in
  if (isAuthenticated) {
    // return <Redirect to="/dashboard" />;
    // return window.location.replace("/dashboard");
  }

  const timer = setTimeout(() => {
    setAlert2('');
  }, 5000);

  const closeUserSignUp = () => {
    // alert('close the component');
    setAuthState('login');
  };

  return (
    <div>
      {authState === 'login' ? (
        <div>
          <div style={{ zIndex: '10000' }} className="signup_area">
            <div
              style={{
                width: '100vw',
                height: '100vh',
                borderRadius: 'unset',
              }}
              className="signup_cont"
            >
              <div className="mt-5">
                <div className="signup_title">
                  Login to user account
                </div>
                <span className="signup_para">
                  Securely login to your Egoras Savings account.
                </span>
                <div className="signup_inputs_cont">
                  <div className="signup_input_field1_cont">
                    <span className="input_title">Email address</span>
                    <input
                      type="email"
                      id="Email"
                      className="signup_input_field"
                      name="email"
                      onChange={onChange2}
                      value={email}
                      placeHolder="email or password"
                    />
                  </div>
                  {/* <div className="signup_input_field1_cont">
                        <span className="input_title">Phone Number</span>
                        <input type="number" className="signup_input_field" />
                      </div> */}
                  <div className="signup_input_field1_cont">
                    <span className="input_title">Password</span>
                    <input
                      type="password"
                      className="signup_input_field"
                      name="password"
                      onChange={onChange2}
                      value={password}
                      placeHolder="****"
                    />
                  </div>
                  {/* <div className="signup_input_field1_cont">
                        <span className="input_title">Repeat Password</span>
                        <input type="password" className="signup_input_field" />
                      </div> */}
                  <button
                    type="submit"
                    className="sign_up_btn"
                    onClick={sumit}
                  >
                    login
                  </button>
                  <span className="login_txt mt-4">
                    <a
                      href="#"
                      onClick={showSignUp}
                      className="login_link"
                    >
                      Don't have an account? Register
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {alert2 == '' ? null : (
            <CustomAlert
              alert={alert2}
              alertType={alertType}
              onChange={timer}
            />
          )}
        </div>
      ) : (
        <UserSignUpComp close={closeUserSignUp} />
      )}
    </div>
  );
};

LoginComp.propTypes = {
  // getLoginAuthentication: PropTypes.func.isRequired,
  // setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getLogin, setAlert })(
  LoginComp
);
