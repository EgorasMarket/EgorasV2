import React, { useState, useEffect } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import DisplayMoney from "../../../../DisplayMoney";
import GroupIcon from "@mui/icons-material/Group";
import LoadingIcons from "react-loading-icons";
import "../DashboardStyles/refferal_home.css";
import "../DashboardStyles/dashboard_home.css";

const DashBoardRefferalHome = () => {
  const [myReferral, setMyReferral] = useState([]);
  const [topReferral, setTopReferral] = useState([]);
  const [referralCount, setReferralCount] = useState("");
  const [noData, setNoData] = useState("no_data");
  const [noData2, setNoData2] = useState("no_data");
  const [isLoading, setIsLoading] = useState(true);
  const [copyValue, setCopyValue] = useState(
    "https://egoras.com/referral/cb318e16-266b-402b-b92e-bcefe64be94b"
  );

  const copyText = () => {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied Link ";
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
                  <GroupIcon /> My refferals
                </div>
                <div className="user_refferals_table_body">
                  <div className="user_refferals_table_body_titles">
                    <span>UserName</span>
                    <span>EmailAddress</span>
                  </div>
                  {assets.slice(0, 5).map((data) => (
                    <div className="user_refferals_table_body_cont1">
                      <span>{data.userName}</span>
                      <span>{data.email}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="dashboard_user_refferals_count_mini_conts">
              <div className="dashboard_user_refferals_count_mini_cont1">
                <div className="total_refferals_tittle">My Total Refferals</div>

                <div className="total_ref_figure_cont">5</div>
              </div>
              <div className="dashboard_user_refferals_count_mini_cont1">
                <h6 className="referral_txt">
                  Invite more friends with your unique referral link and stand a
                  chance to win.
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
                  Copy referral link
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

export default DashBoardRefferalHome;
