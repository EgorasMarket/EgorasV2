import React, { useState, useEffect } from "react";

import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SavingsIcon from "@mui/icons-material/Savings";
import Accordion from "../../item_details_page/Accordion";
import SellIcon from "@mui/icons-material/Sell";
import GroupsIcon from "@mui/icons-material/Groups";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ArticleIcon from "@mui/icons-material/Article";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaidIcon from "@mui/icons-material/Paid";
import ApartmentIcon from "@mui/icons-material/Apartment";
// import { FunctionButton } from "../Buttons/Button";
import "./HeaderMenu.css";
const HeaderApps = ({ onClick }) => {
  return (
    <>
      <div className="headerMenuDiv_close_div" onClick={onClick}></div>
      <div className="headerAppDiv">
        <div className="headerMenu_area">
          <div className="headerMenu_area_heading_apps">
            <img src="/img/egoras-logo.svg" alt="..." className="egr-logo" />

            <CloseIcon
              className="header_area_menu_icon_close_apps"
              onClick={onClick}
            />
          </div>
          <div className="headerMenu_area_cont1_apps">
            <div className="header_area_menu_link_apps ">
              <Accordion title="Products" customClass=" accordionClass ">
                <div className="accordion_body accordionClass accordionClass_body">
                  <div className="headerMenu_area_cont1">
                    <a href="/loan" className="header_area_menu_link">
                      <div className="header_area_link_button">
                        <span className="header_area_menu_icon">
                          <PaidIcon className="header_area_menu_icon_svg" />
                        </span>
                        Loan
                      </div>

                      <span className="header_area_menu_icon">
                        <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
                      </span>
                    </a>
                    <a href="/market" className="header_area_menu_link">
                      <div className="header_area_link_button">
                        <span className="header_area_menu_icon">
                          <ShoppingCartIcon className="header_area_menu_icon_svg" />
                        </span>
                        Buy Now
                      </div>

                      <span className="header_area_menu_icon">
                        <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
                      </span>
                    </a>
                    <a href="/validator" className="header_area_menu_link">
                      <div className="header_area_link_button">
                        <span className="header_area_menu_icon">
                          <HowToRegIcon className="header_area_menu_icon_svg" />
                        </span>
                        Validator
                      </div>

                      <span className="header_area_menu_icon">
                        <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
                      </span>
                    </a>
                    <a href="/savings" className="header_area_menu_link">
                      <div className="header_area_link_button">
                        <span className="header_area_menu_icon">
                          <SavingsIcon className="header_area_menu_icon_svg" />
                        </span>
                        Savings
                      </div>
                      <span className="header_area_menu_icon">
                        <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
                      </span>
                    </a>
                    <a
                      href="https://ella.ng"
                      className="header_area_menu_link  header_area_menu_link_last"
                    >
                      <div className="header_area_link_button">
                        <span className="header_area_menu_icon">
                          <SellIcon className="header_area_menu_icon_svg" />
                        </span>
                        Sell Now
                      </div>
                      <span className="header_area_menu_icon">
                        <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
                      </span>
                    </a>
                    <a
                      href="/engn-token"
                      className="header_area_menu_link  header_area_menu_link_last"
                    >
                      <div className="header_area_link_button">
                        <span className="header_area_menu_icon">
                          <SwapHorizontalCircleIcon className="header_area_menu_icon_svg" />
                        </span>
                        Swap to engn
                      </div>
                      <span className="header_area_menu_icon">
                        <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
                      </span>
                    </a>
                  </div>
                </div>
              </Accordion>
            </div>
            <div className="header_area_menu_link_apps ">
              <Accordion title="Company" customClass=" accordionClass ">
                <div className="accordion_body accordionClass accordionClass_body">
                  <div className="headerMenu_area_cont1">
                    <a href="/about" className="header_area_menu_link">
                      <div className="header_area_link_button">
                        <span className="header_area_menu_icon">
                          <GroupsIcon className="header_area_menu_icon_svg" />
                        </span>
                        About us
                      </div>

                      <span className="header_area_menu_icon">
                        <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
                      </span>
                    </a>
                    <a
                      href="https://egoras.medium.com/"
                      className="header_area_menu_link"
                    >
                      <div className="header_area_link_button">
                        <span className="header_area_menu_icon">
                          <RssFeedIcon className="header_area_menu_icon_svg" />
                        </span>
                        Blog
                      </div>

                      <span className="header_area_menu_icon">
                        <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
                      </span>
                    </a>
                    <a
                      href="/whitepaper"
                      className="header_area_menu_link header_area_menu_link_last"
                    >
                      <div className="header_area_link_button">
                        <span className="header_area_menu_icon">
                          <ArticleIcon className="header_area_menu_icon_svg" />
                        </span>
                        White paper
                      </div>

                      <span className="header_area_menu_icon">
                        <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
                      </span>
                    </a>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderApps;
