import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import "./validateLogin.css";
import { Link, Redirect } from "react-router-dom";
// import { useCookies } from "react-cookie";
import { loginValidate } from "../../../../actions/auth";
import LoadingIcons from "react-loading-icons";
import { WindowSharp } from "@mui/icons-material";
export const ValidateLogin = ({ match, loginValidate }) => {
  const [formData2, setFormData2] = useState(match.params.id);
  // const [isValidated, setIsValidated] = useState(false);
  const [errorMessageDiv, setErrorMessageDiv] = useState(false);
  const [successMessageDiv, setSuccessMessageDiv] = useState(false);

  useEffect(async () => {
    console.log(match.params.id);

    setFormData2(match.params.id);

    let res3 = await loginValidate(match.params.id);

    console.log(res3.data);

    if (res3.data.success) {
      //   return <Redirect to="/" />;
      setSuccessMessageDiv(true);
      setErrorMessageDiv(false);
      console.log("gggggg");
      // setIsValidated(true);
    } else {
      setErrorMessageDiv(true);
      setSuccessMessageDiv(false);
    }

    // localStorage.setItem("referrer", match.params.id);
  }, []);

  if (successMessageDiv) {
    return (window.location.href = "/");

    // //console.log('okkkk');
  }

  return (
    <Fragment>
      <div
        style={{
          padding: "10em",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        {successMessageDiv == true ? (
          <p> i am successfull</p>
        ) : errorMessageDiv == true ? (
          <div className="error_link_div">
            {" "}
            <span className="error_link_div_title">[Error] </span>
            Your login link has expired. Please login again.
            <div className="error_link_btn_div">
              <a href="/register" className="error_lik__route">
                <button className="error_link_btn">Retry</button>
              </a>
            </div>
          </div>
        ) : (
          <>
            <LoadingIcons.TailSpin
              stroke="#000"
              width="145px"
              height="145px"
              strokeWidth="3"
            />
            <p>Authenticating please wait ...</p>
          </>
        )}
      </div>
    </Fragment>
  );
};

// export default ValidateLogin;

const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginValidate })(ValidateLogin);
