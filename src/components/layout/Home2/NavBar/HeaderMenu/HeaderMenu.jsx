import React, { useState, useEffect } from "react";

import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SavingsIcon from "@mui/icons-material/Savings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaidIcon from "@mui/icons-material/Paid";
import ApartmentIcon from "@mui/icons-material/Apartment";
// import { FunctionButton } from "../Buttons/Button";
import "./HeaderMenu.css";
const HeaderMenu = ({ onClick }) => {
  return (
    <>
      <div className="headerMenuDiv_close_div" onClick={onClick}></div>
      <div className="headerMenuDiv">
        <div className="headerMenu_area">
          <div className="headerMenu_area_heading">
            All categories
            <CloseIcon
              className="header_area_menu_icon_close"
              onClick={onClick}
            />
          </div>
          <div className="headerMenu_area_cont1">
            <a
              href={`/products/categories/Computer & Accessories`}
              className="header_area_menu_link"
            >
              <div className="header_area_link_button">
                <span className="header_area_menu_icon">
                  {/* <PaidIcon className="header_area_menu_icon_svg" /> */}
                </span>
                Computers and Accessories
              </div>

              <span className="header_area_menu_icon">
                <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
              </span>
            </a>
            <a
              href={`/products/categories/Phones & Tablet`}
              className="header_area_menu_link"
            >
              <div className="header_area_link_button">
                <span className="header_area_menu_icon">
                  {/* <ShoppingCartIcon className="header_area_menu_icon_svg" /> */}
                </span>
                Phones and Tablets
              </div>

              <span className="header_area_menu_icon">
                <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
              </span>
            </a>
            <a
              href={`/products/categories/Electronics`}
              className="header_area_menu_link"
            >
              <div className="header_area_link_button">
                <span className="header_area_menu_icon">
                  {/* <SavingsIcon className="header_area_menu_icon_svg" /> */}
                </span>
                Electronics
              </div>
              <span className="header_area_menu_icon">
                <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
              </span>
            </a>
            <a
              href={`/products/categories/Fashion`}
              className="header_area_menu_link"
            >
              <div className="header_area_link_button">
                <span className="header_area_menu_icon">
                  {/* <ApartmentIcon className="header_area_menu_icon_svg" /> */}
                </span>
                Fashion
              </div>
              <span className="header_area_menu_icon">
                <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
              </span>
            </a>
            <a
              href={`/products/categories/Home Appliances`}
              className="header_area_menu_link"
            >
              <div className="header_area_link_button">
                <span className="header_area_menu_icon">
                  {/* <ApartmentIcon className="header_area_menu_icon_svg" /> */}
                </span>
                Home and Kitchen
              </div>
              <span className="header_area_menu_icon">
                <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
              </span>
            </a>
            <a
              href={`/products/categories/Musical Equipment`}
              className="header_area_menu_link"
            >
              <div className="header_area_link_button">
                <span className="header_area_menu_icon">
                  {/* <ApartmentIcon className="header_area_menu_icon_svg" /> */}
                </span>
                Musical Equipment
              </div>
              <span className="header_area_menu_icon">
                <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
              </span>
            </a>
            <a
              href={`/products/categories/Gaming`}
              className="header_area_menu_link"
            >
              <div className="header_area_link_button">
                <span className="header_area_menu_icon">
                  {/* <ApartmentIcon className="header_area_menu_icon_svg" /> */}
                </span>
                Gaming & console
              </div>
              <span className="header_area_menu_icon">
                <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
              </span>
            </a>
            <a
              href={`/products/categories/Industral Equipments`}
              className="header_area_menu_link"
            >
              <div className="header_area_link_button">
                <span className="header_area_menu_icon">
                  {/* <ApartmentIcon className="header_area_menu_icon_svg" /> */}
                </span>
                Industral Equipments
              </div>
              <span className="header_area_menu_icon">
                <ArrowForwardIosIcon className="header_area_menu_icon_arrow" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
