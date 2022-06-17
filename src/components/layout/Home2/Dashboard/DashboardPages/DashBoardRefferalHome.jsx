import React, { useState, useEffect } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import GroupIcon from "@mui/icons-material/Group";
import LoadingIcons from "react-loading-icons";
import "../DashboardStyles/refferal_home.css";
import { NoDataFoundComponent } from "../NodataFound/NoDataFoundComponent";
import "../DashboardStyles/dashboard_home.css";
import { API_URL2 as api_url2 } from "../../../../../actions/types";
import { connect } from "react-redux";
import axios from "axios";
const DashBoardRefferalHome = ({ auth }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const [referrals, setReferrals] = useState([]);
  const [refCount, setRefCount] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [copyValue, setCopyValue] = useState("");

  const copyText = () => {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied Code ";
    tooltip.style.display = "block";
  };
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
    tooltip.style.display = "none";
  }

  const assets = [
    {
      userName: "Sammy224",
      email: "samuelify225@gmail.com",
    },
    {
      userName: "Cyntax4444",
      email: "jamuelhhh225@gmail.com",
    },
    {
      userName: "Sammy224",
      email: "samuelify225@gmail.com",
    },
    {
      userName: "Sammy224",
      email: "samuelify225@gmail.com",
    },
    {
      userName: "Cyntax4444",
      email: "jamuelhhh225@gmail.com",
    },
    {
      userName: "Sammy224",
      email: "samuelify225@gmail.com",
    },
    {
      userName: "Cyntax4444",
      email: "jamuelhhh225@gmail.com",
    },
    {
      userName: "Sammy224",
      email: "samuelify225@gmail.com",
    },
    {
      userName: "Sammy224",
      email: "samuelify225@gmail.com",
    },
    {
      userName: "Sammy224",
      email: "samuelify225@gmail.com",
    },
  ];

  useEffect(() => {
    if (auth.user !== null) {
      console.log(auth.user.user);
      setCopyValue(auth.user.user.ref_auth);
      return;
    }
  }, [auth]);

  useEffect(() => {
    setIsLoading2(true);

    axios
      .get(api_url2 + "/v1/user/referal/count", null, config)
      .then((data) => {
        console.log(data.data.data.length);
        setRefCount(data.data.data.length);
        setIsLoading2(false);
      })
      .catch((error) => {
        setIsLoading2(false);
      });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(api_url2 + "/v1/user/get/my/referals", null, config)
      .then((data) => {
        console.log(data.data.data);
        setReferrals(data.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="other2">
      {/* get started section start */}
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* Tokens Section Start */}
      <section className=" no-bg no_paddd">
        <div className="container ">
          <div className="dashboard_refferal_area">
            <div className="refer_banner">
              <img
                src="/img/ref_banner_large.svg"
                alt=""
                className="ref_banner_lg"
              />
              <img
                src="/img/invite_refer_banner.svg"
                alt=""
                className="ref_banner"
              />
            </div>
            <div className="dashboard_user_refferals_cont">
              <div className="user_refferals_table">
                <div className="user_refferals_table_head">
                  <GroupIcon /> My top 5 referrals
                </div>
                <div className="user_refferals_table_body">
                  <div className="user_refferals_table_body_titles">
                    <span>EmailAddress</span>
                    <span>Activity</span>
                  </div>

                  {isLoading === true ? (
                    <>
                      <div className="ref_loading_icon">
                        <LoadingIcons.ThreeDots fill="#41ba71" />
                        <p className="loading_txt">Fetching referrals</p>
                      </div>
                    </>
                  ) : (
                    <>
                      {referrals.length <= 0 ? (
                        <NoDataFoundComponent />
                      ) : (
                        <>
                          {referrals.slice(0, 5).map((data) => (
                            <div
                              className="user_refferals_table_body_cont1"
                              style={
                                data.subscription_status === "INACTIVE"
                                  ? {
                                      border: "solid 1px #ffd5aa",
                                      background: "#fffcf8",
                                    }
                                  : {
                                      border: "solid 1px #95dab0",
                                      background: "#f4fff8",
                                    }
                              }
                            >
                              <span className="reffer_email">{data.email}</span>
                              <span className="reffer_activity">
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                  }}
                                >
                                  {data.subscription_status}{" "}
                                  <CircleIcon
                                    className="circle_active"
                                    style={
                                      data.subscription_status === "INACTIVE"
                                        ? { color: " #ff8000" }
                                        : { color: " #41ba71" }
                                    }
                                  />
                                </span>
                              </span>
                            </div>
                          ))}
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="dashboard_user_refferals_count_mini_conts">
              <div className="dashboard_user_refferals_count_mini_cont1">
                <div className="total_refferals_tittle">My Total Referrals</div>

                <div className="total_ref_figure_cont">
                  {" "}
                  {isLoading2 === true ? (
                    <div className="ref_loading_icon">
                      <LoadingIcons.ThreeDots fill="#41ba71" />
                    </div>
                  ) : (
                    refCount
                  )}{" "}
                </div>
              </div>
              <div className="dashboard_user_refferals_count_mini_cont1">
                <h6 className="referral_txt">
                  Invite more friends with your unique referral code to shop on
                  egoras, and you can stand a chance to earn rewards on the
                  platform.
                </h6>
                <input
                  type="text"
                  value={copyValue}
                  className="referral_default_value"
                  id="myInput"
                />
                <button
                  className="ref_btn"
                  onClick={copyText}
                  onMouseOut={outFunc}
                >
                  Copy referral code
                  <span className="tooltiptext" id="myTooltip"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(DashBoardRefferalHome);
