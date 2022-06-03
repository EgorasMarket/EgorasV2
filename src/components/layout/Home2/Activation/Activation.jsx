import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "../../../../css/signup.css";

import { activate } from "../../../../actions/auth";

const Activation = ({match, activate}) => {
  const [email_auth, setEmail_auth] = useState(match.params.id);
  const [activated, setActivated] = useState(false);

  //console.log(email_auth);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await activate(email_auth);
      //console.log(response);
      //console.log(response.data.statusCode);
      if (response.data.statusCode === 200) {
        ////console.log("okay Good Server");
        setActivated(true)

      } else {
        setActivated(false)
      }
    }

    fetchMyAPI();
  }, []);
  return (
    <div>
     
      <section style={{marginTop: '60px'}} className="signup_section success_section">
          <div className="container">
            <div className="sign_up_area">
              <div className="sign_up_cont  success_div">
                
                {
                  activated ? (
                    <div className="sign_up_area2 ">
                      <div className="sign_up_area1_cont1">
                        <div className="forgot_password_div center_me">
                          <img
                            src="/img/success-mail-icon.svg"
                            alt=""
                            className="success_img"
                          />
                          <h4 className="check_mail">Success</h4>

                          <p>
                          Email activation was successful. Proceed to login page.
                          </p>
                          
                        </div>
                      </div>

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
                      </div>
                    </div>
                  ) : (
                    <div className="sign_up_area2 ">
                    <div className="sign_up_area1_cont1">
                      <div className="forgot_password_div center_me">
                        <img
                          src="/img/success-mail-icon.svg"
                          alt=""
                          className="success_img"
                        />
                        <h4 className="check_mail">Error</h4>

                        <p>
                        Email activation was declined. Email activation code is invalid.
                        </p>
                        
                      </div>
                    </div>

                    
                  </div>
                  )
                }
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default connect(null, { activate })(Activation);
