import React, { useState, useEffect } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import GroupIcon from "@mui/icons-material/Group";
import LoadingIcons from "react-loading-icons";
import "../DashboardStyles/refferal_home.css";
import { NoDataFoundComponent } from "../NodataFound/NoDataFoundComponent";
import { numberWithCommas } from "../../../../../static";
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
  const [copyrefferalLink, setCopyRefferalLink] = useState("");
  const [seeMore, setSeeMore] = useState(false);
  const toggleSeeMore = () => {
    if (seeMore === false) {
      setSeeMore(true);
    } else if (seeMore === true) {
      setSeeMore(false);
    }
  };
  const copyText = () => {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied Code ";
    tooltip.style.display = "block";
  };
  const copyText2 = () => {
    var copyText = document.getElementById("myInput2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copied Link ";
    tooltip.style.display = "block";
  };
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
    tooltip.style.display = "none";
  }
  function outFunc2() {
    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copy to clipboard";
    tooltip.style.display = "none";
  }

  useEffect(() => {
    if (auth.user !== null) {
      console.log(auth.user.user);
      setCopyValue(auth.user.user.ref_auth);
      setCopyRefferalLink(
        "http://localhost:3000/referal/" + auth.user.user.ref_auth
      );
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
    console.log("ok");
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
                    <span
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      User
                    </span>

                    <span
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      Profit
                    </span>
                    <span
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      Transactions
                    </span>
                    <span
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      Status
                    </span>
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
<<<<<<< HEAD
                      ) : seeMore === true ? (
                        <div className="expanded_refferals_div">
                          {referrals.map((data) => (
=======
                      ) : (
                        <>
                          {referrals.slice(0, 5).map((data) => (
>>>>>>> 320b26eb9b72d4c19f02226f6c745a98ca0c019a
                            <div
                              className="user_refferals_table_body_cont1"
                              style={
                                data.subscription_status === "INACTIVE"
                                  ? {
                                      border: "solid 1px #ffd5aa",
                                      background: "#fff",
                                    }
                                  : {
                                      border: "solid 1px #95dab0",
                                      background: "#fff",
                                    }
                              }
                            >
                              <span className="reffer_email">{data.email}</span>
                              <span className="reffer_profit">
                                ₦
                                {numberWithCommas(
                                  parseInt(data.percentageCut).toFixed(2)
                                )}
                              </span>
                              <span className="reffer_transact">
                                {data.transCount + " transactions"}
                              </span>
                              <span className="reffer_activity">
                                <span
                                  style={
                                    data.subscription_status === "INACTIVE"
                                      ? {
                                          display: "flex",
                                          alignItems: "flex-start",
                                          background: "#fab02d3d",
                                          padding: " 0.5em 1em",
                                          borderRadius: "8px",
                                          fontSize: "11px",
                                          color: "#db872f",
                                        }
                                      : {
                                          display: "flex",
                                          alignItems: "flex-start",
                                          background: "#41ba7130",
                                          padding: " 0.5em 1em",
                                          borderRadius: "8px",
                                          fontSize: "11px",
                                          color: "#32a861",
                                        }
                                  }
                                >
                                  {data.subscription_status}{" "}
                                  {/* <CircleIcon
                                    className="circle_active"
                                    style={
                                      data.subscription_status === "INACTIVE"
                                        ? { color: " #ff8000" }
                                        : { color: " #41ba71" }
                                    }
                                  /> */}
                                </span>
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : seeMore === false ? (
                        <>
                          {referrals.slice(0, 5).map((data) => (
                            <div
                              className="user_refferals_table_body_cont1"
                              style={
                                data.subscription_status === "INACTIVE"
                                  ? {
                                      border: "solid 1px #ffd5aa",
                                      background: "#fff",
                                    }
                                  : {
                                      border: "solid 1px #95dab0",
                                      background: "#fff",
                                    }
                              }
                            >
                              <span className="reffer_email">{data.email}</span>
                              <span className="reffer_profit">
                                ₦
                                {numberWithCommas(
                                  parseInt(data.percentageCut).toFixed(2)
                                )}
                              </span>
                              <span className="reffer_transact">
                                {data.transCount + " transactions"}
                              </span>
                              <span className="reffer_activity">
                                <span
                                  style={
                                    data.subscription_status === "INACTIVE"
                                      ? {
                                          display: "flex",
                                          alignItems: "flex-start",
                                          background: "#fab02d3d",
                                          padding: " 0.5em 1em",
                                          borderRadius: "8px",
                                          fontSize: "11px",
                                          color: "#db872f",
                                        }
                                      : {
                                          display: "flex",
                                          alignItems: "flex-start",
                                          background: "#41ba7130",
                                          padding: " 0.5em 1em",
                                          borderRadius: "8px",
                                          fontSize: "11px",
                                          color: "#32a861",
                                        }
                                  }
                                >
                                  {data.subscription_status}{" "}
                                  {/* <CircleIcon
                                    className="circle_active"
                                    style={
                                      data.subscription_status === "INACTIVE"
                                        ? { color: " #ff8000" }
                                        : { color: " #41ba71" }
                                    }
                                  /> */}
                                </span>
                              </span>
                            </div>
                          ))}
                        </>
                      ) : null}
                    </>
                  )}
                  <div className="see_more_btn_div">
                    <button className="toggle_seemore" onClick={toggleSeeMore}>
                      {seeMore === true ? "Collapse" : "Expand"}
                    </button>
                  </div>
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
                <input
                  type="text"
                  value={copyrefferalLink}
                  className="referral_default_value"
                  id="myInput2"
                />
                <div className="refferal_copy_btns">
                  <button
                    className="ref_btn"
                    onClick={copyText}
                    onMouseOut={outFunc}
                  >
                    Copy referral code
                    <span className="tooltiptext" id="myTooltip"></span>
                  </button>
                  <button
                    className="ref_btn"
                    onClick={copyText2}
                    onMouseOut={outFunc2}
                  >
                    Copy referral link
                    <span className="tooltiptext2" id="myTooltip2"></span>
                  </button>
                </div>
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
