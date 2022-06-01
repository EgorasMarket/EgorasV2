import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CloseIcon from "@material-ui/icons/Close";
// import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Drawer from "@material-ui/core/Drawer";
import SellIcon from "@mui/icons-material/Sell";
import PaidIcon from "@mui/icons-material/Paid";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderApps from "./HeaderMenu/HeaderApps";
import AppsIcon from "@mui/icons-material/Apps";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Toolbar from "@material-ui/core/Toolbar";
import ArticleIcon from "@mui/icons-material/Article";
import SavingsIcon from "@mui/icons-material/Savings";
import PersonIcon from "@mui/icons-material/Person";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import Accordion from "@material-ui/core/Accordion";
import GroupsIcon from "@mui/icons-material/Groups";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { API_URL2 as api_url2 } from "../../../../actions/types";

// =======================
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import Login from "../Login/Login";
import axios from "axios";

// styles
import "../../../../css/header.css";
import "../../../../css/headerMobile.css";
import { Authenticate } from "../../../auth/Authenticate";
import zIndex from "@material-ui/core/styles/zIndex";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  // dropdown: {
  //   position: "absolute",
  //   top: 28,
  //   right: 0,
  //   left: 0,
  //   zIndex: 1,
  //   border: "1px solid",
  //   padding: theme.spacing(1),
  //   backgroundColor: theme.palette.background.paper,
  // },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const Header = ({ isAuthenticated, auth }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [showHeader, setshowHeader] = useState("/");
  const [isAuth, setIsAuth] = useState(false);
  // const [showHeader, setshowHeader] = useState("/");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDiv, setSearchDiv] = useState(false);
  const [productNames, setProductNames] = useState([]);
  const [hederMenu, setHeaderMenu] = useState(false);
  const [hederApps, setHeaderApps] = useState(false);
  const [loginDrop, setLoginDrop] = useState(false);
  const [logoutBtn, setLogoutBtn] = useState(false);
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));

  const currentPage = window.location.pathname;
  const myArr = currentPage.split("/");
  useEffect(() => {
    //   if(Hides === '/login'){
    //       document.getElementById('racing').style.display = 'none'
    //     }
    if (currentPage === "/dashboard/") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/accounts/accounts") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/accounts/kin") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/authenticate/" + myArr[2]) {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/accounts/security") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/accounts/kin") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/accounts/security") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/wallet") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/wallet/withdrawal") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/super_admin/signup") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/super_admin/user_overview") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/signup/super_admin") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/login/super_admin") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/super_admin/all_user") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/super_admin/login") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/login") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/signup") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/savings") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/products/categories/id-phone") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/products") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/orders") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/egr-") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/orders") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/egr-") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/whitepaper") {
      setshowHeader(() => {
        document.getElementById("headerSection").style.position = "relative";
      });
    }
    // if (currentPage === "/market") {
    //   setshowHeader(() => {
    //     document.getElementById("hide_menu").style.display = "none";
    //   });
    // }
    // if (currentPage === "/market") {
    //   setshowHeader(() => {
    //     document.getElementById("company1").style.display = "none";
    //   });
    // }
    // if (currentPage === "/market") {
    //   setshowHeader(() => {
    //     document.getElementById("product1").style.display = "none";
    //   });
    // }
    // if (currentPage === "/market") {
    //   setshowHeader(() => {
    //     document.getElementById("valid").style.display = "none";
    //   });
    // }
    // if (currentPage === "/market") {
    //   setshowHeader(() => {
    //     document.getElementById("app_icon").style.display = "block";
    //   });
    // }
    // if (currentPage === "/market") {
    //   document.getElementById("borrow").style.display = "none";
    // }
    // document.getElementById("hide_menu").style.display = "none";
    // document.getElementById("show-header-links2").style.display = "none";
    // document.getElementById("app_icon").style.display = "none";
  });

  // //console.log(auth);

  // page hide element

  // class change on click functions
  const [page1, setPage1] = useState("/");

  useEffect(() => {
    if (currentPage === "/loan") {
      setPage1("/loan");
    } else if (currentPage === "/validator") {
      setPage1("/validator");
    } else if (currentPage === "/savings") {
      setPage1("/savings");
    } else if (currentPage === "/market") {
      setPage1("/market");
    }
  });
  useEffect(() => {
    if (authToken === null) {
      setLogoutBtn(false);
    } else if (authToken !== null) {
      setLogoutBtn(true);
    }

    console.log(authToken);
    console.log(localStorage.getItem("token"));
  }, []);
  const triggerLogout = () => {
    localStorage.removeItem("token");
    return (window.location.href = "/register");
  };

  useEffect(() => {
    if (isAuthenticated === true) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  });

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // =============
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);

  const [open12, setOpen12] = React.useState(false);
  const anchorRef12 = React.useRef(null);

  // return focus to the button when we transitioned from !open12 -> open12
  const prevOpen12 = React.useRef(open12);
  React.useEffect(() => {
    if (prevOpen12.current === true && open12 === false) {
      anchorRef12.current.focus();
    }

    prevOpen12.current = open12;
  }, [open12]);

  const [open13, setOpen13] = React.useState(false);
  const anchorRef13 = React.useRef(null);

  // return focus to the button when we transitioned from !open13 -> open13
  const prevOpen13 = React.useRef(open13);
  React.useEffect(() => {
    if (prevOpen13.current === true && open13 === false) {
      anchorRef13.current.focus();
    }

    prevOpen13.current = open13;
  }, [open13]);

  // open dropdown menu
  const dropDownOpen1 = () => {
    setDropDown1(true);
    setDropDown2(false);
  };
  const dropDownOpen2 = () => {
    setDropDown2(true);
    setDropDown1(false);
  };
  const toggleDrop = () => {
    if (dropDown1 == true) {
      setDropDown1(false);
    } else if (dropDown1 == false) {
      setDropDown1(true);
    }
  };
  const dropDownClose1 = () => {
    setDropDown1(false);
    setDropDown2(false);
  };
  const dropDownClose2 = () => {
    setDropDown2(false);
    setDropDown1(false);
  };

  useEffect(() => {
    axios
      .get(
        api_url2 + "/v1/product/retrieve/products/tag/search/" + searchTerm,
        null,
        config
      )
      .then((data) => {
        console.log(data.data.data);
        setProductNames(data.data.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [searchTerm]);
  const handler = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    axios
      .get(
        api_url2 + "/v1/product/retrieve/products/tag/search/" + searchTerm,
        null,
        config
      )
      .then((data) => {
        console.log(data.data.data);
        setProductNames(data.data.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [searchTerm]);
  const results = productNames.filter((car) =>
    car.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const ToggleHeaderMenu = () => {
    if (hederMenu === false) {
      setHeaderMenu(true);
    } else if (hederMenu === true) {
      setHeaderMenu(false);
    }
  };
  const ToggleHeaderApps = () => {
    if (hederApps === false) {
      setHeaderApps(true);
    } else if (hederApps === true) {
      setHeaderApps(false);
    }
  };
  const ToggleLoginDrop = () => {
    if (loginDrop === false) {
      setLoginDrop(true);
    } else if (loginDrop === true) {
      setLoginDrop(false);
    }
  };

  const links = [
    {
      id: "market",
      href: "/market",
      name: "Shop Now",
      paragraph:
        "Shop your favorite products on the egoras market at affordable prices.",
      icon: <ShoppingCartIcon className="header_drop_icons" />,
    },
    {
      id: "sell",
      href: "https://sell.egoras.com/",
      name: "Sell Now",
      paragraph: "Sell your used items in minutes.",
      icon: <SellIcon className="header_drop_icons" />,
    },
    {
      id: "borrow",
      href: "/loan",
      name: "loan",
      paragraph:
        "Pledge your personal properties up as collateral and get an interest free loan.",
      icon: <PaidIcon className="header_drop_icons" />,
    },
    {
      id: "savings",
      href: "/savings",
      name: "Savings",
      paragraph:
        "Get to acquire your desired items with ease through our smart savings plan.",

      icon: <SavingsIcon className="header_drop_icons" />,
    },
    {
      id: "valid",
      href: "/validator",
      name: "Validator",
      paragraph: "Earn over 20% APR for approving/declining collaterals.",
      icon: <HowToRegIcon className="header_drop_icons" />,
    },
    {
      id: "swap",
      href: "/swap",
      name: "Swap to Engn",
      paragraph: "Easily swap your EGC to ENGN to access our services.",
      icon: <SwapHorizontalCircleIcon className="header_drop_icons" />,
    },
  ];
  return (
    <div id="Header">
      <section className="headerSection" id="headerSection">
        <div className="container-fluid header">
          <div className="header-area">
            <a href="/">
              {" "}
              <img src="/img/egoras-logo.svg" alt="..." className="egr-logo" />
            </a>
            <a href="#" className="egrLogo2Cont">
              <img src="/img/egoras-logo.svg" alt="..." className="egr-logo2" />
            </a>
            <div className="header_search">
              <input
                type="search"
                value={searchTerm}
                name="search"
                id="search"
                className="header_search_bar"
                placeholder="Search products, brands and categories"
                onChange={handler}
                autocomplete="off"

                // onMouseOut={() => {
                //   setSearchDiv(false);
                // }}
              />
              <SearchIcon className="header_search_icon" />
              {searchTerm.length === 0 ? null : (
                <div
                  id="fodo"
                  style={{
                    position: "absolute",
                    zIndex: "500",
                    width: "100%",
                    top: "46px",
                    maxHeight: "500px",
                    height: "auto",
                    backgroundColor: "#fff",
                    overflowY: "scroll",
                    borderRadius: "10px",
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                    cursor: "pointer",
                    boxShadow: "#0000000f 0px 20px 20px 0px",
                  }}
                  className="scr"
                >
                  {productNames.length === 0 ? (
                    <span className="search_result_not_found">
                      {" "}
                      Search result not found.
                    </span>
                  ) : (
                    <div
                      className="header_search_results_cont"
                      // style={{ margin: "0" }}
                    >
                      {results.map((item, index) => (
                        <a
                          href={`/products/tag/${item.tag.replace(
                            /\s+/g,
                            " "
                          )}`}
                          className="header_search_display_div"
                          style={{
                            padding: "1em 2em",
                          }}
                        >
                          <div
                            key={index.toString()}
                            style={{
                              color: "#000",
                              fontSize: "12px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            {item.tag.toLowerCase()}
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <ul className="headerButtons">
              {/* ========== */}
              {/* ========== */}

              <div div className="company">
                <div
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    zIndex: "2",
                    margin: "0px",
                  }}
                  className="company"
                  id="company1"
                  onMouseOver={dropDownOpen1}
                  // onMouseOut={dropDownClose1}
                >
                  Products
                  <img
                    src="/img/arrow-down-icon.svg"
                    alt="..."
                    id="ArrowDownIcon2"
                    className="ArrowDownIcon2"
                  />
                </div>
                {dropDown1 === true ? (
                  <>
                    <div
                      className="close_drop_div"
                      onMouseOver={dropDownClose1}
                    ></div>
                    <div
                      className="products-menu menu2"
                      // onMouseOver={dropDownOpen1}
                      // onMouseOut={dropDownClose1}
                    >
                      {links.map((data) => (
                        <a
                          href={data.href}
                          id={data.id}
                          className={
                            page1 === data.href ? "docs activeLink" : "about"
                          }
                          // onClick={clickMe1}
                        >
                          <div className="header_drop_txt_div">
                            {data.icon}
                            <div className="header_links_tab_paragraph_cont">
                              {data.name}
                              <p className="header_links_tab_paragraph">
                                {data.paragraph}
                              </p>
                            </div>
                          </div>
                          <ArrowForwardIosIcon className="header_drop_arrow_icon" />
                          {page1 === data.href ? (
                            <span className="Line"></span>
                          ) : null}
                        </a>
                      ))}

                      {/* <hr /> */}
                    </div>
                  </>
                ) : null}
              </div>

              {/* ========== */}
              {/* ========== */}
              {/* ========== */}
              {/* ========== */}

              {/* ===================================================
              ===========================
              ========================================== */}

              <vl></vl>
              <div div className="company">
                <div
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    zIndex: "2",
                    margin: "0px",
                  }}
                  className="company"
                  id="company1"
                  onMouseOver={dropDownOpen2}
                  // onMouseOut={dropDownClose1}
                >
                  Company
                  <img
                    src="/img/arrow-down-icon.svg"
                    alt="..."
                    id="ArrowDownIcon2"
                    className="ArrowDownIcon2"
                  />
                </div>
                {dropDown2 === true ? (
                  <>
                    <div
                      className="close_drop_div"
                      onMouseOver={dropDownClose2}
                    ></div>
                    <div
                      className="products-menu menu2"
                      // onMouseOver={dropDownOpen1}
                      // onMouseOut={dropDownClose1}
                    >
                      <a
                        href="/about"
                        className={
                          page1 === "/about" ? "docs activeLink" : "about"
                        }
                        // onClick={clickMe2}
                        id="aboutUs"
                      >
                        <div className="header_drop_txt_div">
                          <GroupsIcon className="header_drop_icons" />
                          About Us
                        </div>
                        <ArrowForwardIosIcon className="header_drop_arrow_icon" />

                        {page1 === "/about" ? (
                          <span className="Line"></span>
                        ) : null}
                      </a>
                      {/* <hr /> */}
                      <a href="https://egoras.medium.com/" className="about">
                        <div className="header_drop_txt_div">
                          <RssFeedIcon className="header_drop_icons" />
                          Blog
                        </div>
                        <ArrowForwardIosIcon className="header_drop_arrow_icon" />
                      </a>
                      {/* <hr /> */}
                      <a
                        href="/whitepaper"
                        id="whitepaper"
                        className={
                          page1 === "/whitepaper" ? "docs activeLink" : "about"
                        }
                        // onClick={clickMe1}
                      >
                        <div className="header_drop_txt_div">
                          <ArticleIcon className="header_drop_icons" />
                          WhitePaper
                        </div>
                        <ArrowForwardIosIcon className="header_drop_arrow_icon" />

                        {page1 === "/whitepaper" ? (
                          <span className="Line"></span>
                        ) : null}
                      </a>
                      {/* <hr /> */}
                    </div>
                  </>
                ) : null}
              </div>
              {/* <a href="/appointment" className="connect">
                {" "}
                Apply for loan
              </a> */}

              <div style={{ display: "flex", position: "relative" }}>
                <PersonRoundedIcon
                  className="login_icon"
                  onClick={ToggleLoginDrop}
                />

                {loginDrop === true ? (
                  <>
                    <div
                      className="remove_login_drop"
                      onClick={ToggleLoginDrop}
                      // onMouseOver={ToggleLoginDrop}
                    ></div>
                    <div className="login_drop_cont">
                      <div className="login_drop_cont_body">
                        {logoutBtn === false ? (
                          <a href="/register" className="login_drop_cont_link">
                            Login / Signup
                          </a>
                        ) : (
                          <>
                            <a
                              href="/dashboard"
                              className="login_drop_cont_link"
                            >
                              Dashboard
                            </a>
                            <div
                              onClick={triggerLogout}
                              className="login_drop_cont_link"
                              style={{ cursor: "pointer" }}
                            >
                              Logout
                            </div>
                          </>
                        )}

                        <a href="#" className="login_drop_cont_link">
                          <Authenticate />
                        </a>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>

              {/* {currentPage == "/loan" ? (
                <div style={{ display: "flex" }}>
                  <a href="https://egoras.ng/appointment" className="connectb">
                    {" "}
                    Get the loan
                  </a>
                </div>
              ) : null}
              {currentPage == '/validator' ||
              currentPage == '/create-uploader' ||
              currentPage == '/eusd-token' ||
              currentPage == '/engn-token' ? (
                <div style={{ display: 'flex' }}>
                  <a href="#" className="connect">
                    <Authenticate />
                  </a>
                </div>
              ) : null}
              {currentPage == '/savings' && isAuth === true ? (
                <div style={{ display: 'flex' }}>
                  <a href="/dashboard" className="connectb">
                    Dashboard
                  </a>
                </div>
              ) : currentPage == '/savings' && isAuth === false ? (
                <div style={{ display: 'flex' }}>
                  <PersonRoundedIcon />
                </div>
              ) : null} */}
            </ul>
            {/* <img
              src="/img/hamburger-open.svg"
              alt=""
              className="hamburgerOpen"
            /> */}
          </div>
          <div className="header_mobile_view">
            <div className="header_mobile_view_area1">
              <MenuIcon
                className="header_mobile_view_area1_menu_icon"
                onClick={ToggleHeaderMenu}
              />{" "}
              <a href="/">
                {" "}
                <img
                  src="/img/egoras-logo.svg"
                  alt="..."
                  className="egr-logo"
                />
              </a>
              <div className="header_mobile_icons_cont">
                <div style={{ display: "flex", position: "relative" }}>
                  <PersonRoundedIcon
                    className="login_icon"
                    onClick={ToggleLoginDrop}
                  />

                  {loginDrop === true ? (
                    <>
                      <div
                        className="remove_login_drop"
                        onClick={ToggleLoginDrop}
                        // onMouseOver={ToggleLoginDrop}
                      ></div>
                      <div className="login_drop_cont">
                        <div className="login_drop_cont_body">
                          {logoutBtn === false ? (
                            <a
                              href="/register"
                              className="login_drop_cont_link"
                            >
                              Login / Signup
                            </a>
                          ) : (
                            <>
                              <a
                                href="/dashboard"
                                className="login_drop_cont_link"
                              >
                                Dashboard
                              </a>
                              <div
                                onClick={triggerLogout}
                                className="login_drop_cont_link"
                                style={{ cursor: "pointer" }}
                              >
                                Logout
                              </div>
                            </>
                          )}
                          <a href="#" className="login_drop_cont_link">
                            <Authenticate />
                          </a>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
                <AppsIcon
                  className="header_mobile_view_area1_menu_icon2"
                  onClick={ToggleHeaderApps}
                />
              </div>
            </div>
            <div className="header_mobile_view_area2">
              <div className="header_search">
                <input
                  type="search"
                  value={searchTerm}
                  name="search"
                  id="search"
                  className="header_search_bar"
                  placeholder="Search products, brands and categories"
                  onChange={handler}
                  autocomplete="off"

                  // onMouseOut={() => {
                  //   setSearchDiv(false);
                  // }}
                />
                <SearchIcon className="header_search_icon" />
                {searchTerm.length === 0 ? null : (
                  <div
                    id="fodo"
                    style={{
                      position: "absolute",
                      zIndex: "500",
                      width: "100%",
                      top: "46px",
                      maxHeight: "500px",
                      height: "auto",
                      backgroundColor: "#fff",
                      overflowY: "scroll",
                      borderRadius: "10px",
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      cursor: "pointer",
                      boxShadow: "#0000000f 0px 20px 20px 0px",
                    }}
                    className="scr"
                  >
                    {productNames.length === 0 ? (
                      <span className="search_result_not_found">
                        {" "}
                        Search result not found.
                      </span>
                    ) : (
                      <div
                        className="header_search_results_cont"
                        // style={{ margin: "0" }}
                      >
                        {results.map((item, index) => (
                          <a
                            href={`/products/tag/${item.tag.replace(
                              /\s+/g,
                              " "
                            )}`}
                            className="header_search_display_div"
                            style={{
                              padding: "1em 2em",
                            }}
                          >
                            <div
                              key={index.toString()}
                              style={{
                                color: "#000",
                                fontSize: "12px",
                                fontWeight: "400",
                              }}
                            >
                              {" "}
                              {item.tag.toLowerCase()}
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="header_hr" /> */}
        <div className="header_category_area">
          <div className="container-fluid header">
            <div className="header_categories">
              <a
                href={`/products/categories/Computer & Accessories`}
                className="header_cat_link"
              >
                Computers and Accessories
              </a>
              <a
                href={`/products/categories/Phones & Tablet`}
                className="header_cat_link"
              >
                Phones and Tablets
              </a>
              <a
                href={`/products/categories/Electronics`}
                className="header_cat_link"
              >
                Electronics
              </a>
              <a
                href={`/products/categories/Fashion`}
                className="header_cat_link"
              >
                Fashion
              </a>
              <a
                href={`/products/categories/Home Appliances`}
                className="header_cat_link"
              >
                Home and Kitchen
              </a>
              <a
                href={`/products/categories/Musical Equipment`}
                className="header_cat_link"
              >
                Musical Equipment
              </a>
              <a
                href={`/products/categories/Gaming`}
                className="header_cat_link"
              >
                Gaming & console
              </a>
              <a
                href={`/products/categories/Industral Equipments`}
                className="header_cat_link"
              >
                Industral Equipments
              </a>
            </div>
          </div>
        </div>
        {hederMenu === true ? <HeaderMenu onClick={ToggleHeaderMenu} /> : null}
        {hederApps === true ? <HeaderApps onClick={ToggleHeaderApps} /> : null}
      </section>
    </div>
  );
};

// export default Header;

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Header);
