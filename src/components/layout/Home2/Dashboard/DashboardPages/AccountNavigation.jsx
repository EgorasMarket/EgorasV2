import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SecurityIcon from "@mui/icons-material/Security";
import "../DashboardStyles/account_navigation_styles.css";
export const AccountNavigation = ({
  closeAcctNavDiv,
  LoGout,
  UserEmail,
  UserLastName,
}) => {
  return (
    <div className="account_nav_page">
      <section className="account_navigation_section">
        <div className="account_navigation_area">
          {/* ============ */}
          {/* ============ */}
          {/* ============ */}
          {/* ============ */}
          {/* ============ */}
          {/* ============ */}
          <div className="account_nav_header">
            <div className="back_btn">
              <ArrowBackIcon
                className="arrow_nav_link_btn"
                onClick={closeAcctNavDiv}
              />
            </div>
            <div className="dark_view_btn"></div>
          </div>
          {/* ============ */}
          {/* ============ */}
          {/* ============ */}
          {/* ============ */}
          {/* ============ */}
          {/* ============ */}
          <div className="acct_nav_body">
            <div className="account_nav_area1">
              <div className="accnt_nav_profile_Name">{UserLastName}</div>
              <div className="accnt_nav_profile_email">{UserEmail}</div>
              {/* <div className="accnt_profile_acct_num"></div> */}
            </div>
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            <a
              href={`/dashboard/accounts/accounts`}
              className="account_nav_other_areas"
              // onClick={closeAcctNavDiv}
            >
              <div className="other_area_title">
                <div className="other_area_title_icon">
                  <ManageAccountsIcon />
                </div>
                Account
              </div>
              <span
                // param={{ action: "account" }}
                className="other_area_btn"
              >
                <ArrowForwardIosIcon className="arrow_nav_link_btn" />
              </span>
            </a>
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            <a
              className="account_nav_other_areas"
              href={`/dashboard/accounts/kin`}
              // onClick={closeAcctNavDiv}
            >
              <div className="other_area_title">
                <div className="other_area_title_icon">
                  <AdminPanelSettingsIcon />
                </div>
                Next of kin
              </div>
              <span className="other_area_btn">
                <ArrowForwardIosIcon className="arrow_nav_link_btn" />
              </span>
            </a>
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            <a
              className="account_nav_other_areas"
              href={`/dashboard/accounts/security`}
              // onClick={closeAcctNavDiv}
            >
              <div className="other_area_title">
                <div className="other_area_title_icon">
                  <SecurityIcon />
                </div>
                Security
              </div>
              <span className="other_area_btn">
                <ArrowForwardIosIcon className="arrow_nav_link_btn" />
              </span>
            </a>
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* <a
              className="account_nav_other_areas"
              href="dash_account_param"
              // onClick={closeAcctNavDiv}
            >
              <div className="other_area_title">
                <div className="other_area_title_icon">
                  <NotificationsActiveIcon />
                </div>
                Notifications
              </div>
              <span className="other_area_btn">
                <ArrowForwardIosIcon className="arrow_nav_link_btn" />
              </span>
            </a>
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* <a
              className="account_nav_other_areas"
              href="dash_account_param"
              onClick={closeAcctNavDiv}
            >
              <div className="other_area_title">
                <div className="other_area_title_icon">
                  <SummarizeIcon />
                </div>
                Terms & conditions
              </div>
              <span className="other_area_btn">
                <ArrowForwardIosIcon className="arrow_nav_link_btn" />
              </span>
            </a> */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            <div className="acct_nav_log_out_btn_div">
              <button className="acct_nav_log_out_btn" onClick={LoGout}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
