import React, { useState } from 'react';
import axios from 'axios';
import { API_URL as api } from '../../actions/types';

const VerifyActivationComponent = ({ email, close }) => {
  const [message, setMessage] = useState('');
  const [customAlert, setCustomAlert] = useState(false);
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
    <>
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
            instructions to activate your account. Click on the button
            to proceed to the market
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
            Check Activation
          </button>
        </div>
      </div>
    </>
  );
};

export default VerifyActivationComponent;
