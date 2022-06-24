import React, { useState, useEffect } from "react";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import CategoryIcon from "@mui/icons-material/Category";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ListIcon from "@mui/icons-material/List";
import Slider from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "react-multi-carousel";
import DvrIcon from "@mui/icons-material/Dvr";
import "../../Home2/Dashboard/DashboardStyles/dashboard_side.css";
import "../../Home2/Dashboard/DashboardStyles/dashboard_products.css";
import { connect } from "react-redux";
// import {Link} from 'react-router-dom';
import "../../Home2/Dashboard/DashboardStyles/dashboard_side.css";
// import "../../../DashboardStyles/dashboard_side.css";
import "../../Home2/Dashboard/DashboardStyles/dashboard_header.css";
// import { Link, animateScroll as scroll } from "react-scroll";

import axios from "axios";
import setAuthToken from "../../../../utils/setAuthToken";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";

import { numberWithCommas } from "../../../../static";
// import { NoDataFoundComponent } from "../NodataFound/NoDataFoundComponent";
import { NoDataFoundComponent } from "../../Home2/Dashboard/NodataFound/NoDataFoundComponent";

const responsive7 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1480 },
    items: 6,
  },
  desktopMedium: {
    breakpoint: { max: 1480, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};
const responsive8 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1680 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1680, min: 1420 },
    items: 5,
  },
  tabletMedium: {
    breakpoint: { max: 1420, min: 1024 },
    items: 4,
  },
  tabletSmall: {
    breakpoint: { max: 1024, min: 810 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 810, min: 590 },
    items: 3,
  },
  mobileSmall: {
    breakpoint: { max: 590, min: 400 },
    items: 2,
  },
  mobileSmaller: {
    breakpoint: { max: 400, min: 0 },
    items: 2,
  },
};

function AdminMarket({ auth }) {
  // const [item,setItem]=useState({})

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //  const names =["phones $ Tablet","grocery","Home & Kitchen","electronics","computer & electronics"]

  const [item, setItem] = useState([]);

  const [furniture, setFurniture] = useState("Furnitures");
  const [ComputerAccessories, setComputerAccessories] = useState(
    "Computer & Accessories"
  );
  const [ComputerAccessoriesData, setComputerAccessoriesData] = useState([]);
  const [homeAppliances, setHomeAppliances] = useState("Home Appliances");
  const [homeAppliancesData, setHomeAppliancesData] = useState([]);
  const [electronics, setElectronics] = useState("Electronics");
  const [electronicsData, setElectronicsData] = useState([]);
  const [phonesTablets, setPhoneTablets] = useState("Phones & Tablet");
  const [phonesTabletsData, setPhoneTabletsData] = useState([]);
  const [musicalEquipment, setMusicalEquipment] =
    useState("Musical Equipments");
  const [musicalEquipmentData, setMusicalEquipmentData] = useState([]);
  const [industrialEquipments, setIndustrialEquipments] = useState(
    "Industral Equipments"
  );
  const [industrialEquipmentsData, setIndustrialEquipmentsData] = useState([]);

  const [wrap, setWrap] = useState({ code: "" });
  const { code } = wrap;

  // const [cItem,setCItem] =useState([])

  const [img, setImg] = useState();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/search/new/products", null, config)
      .then((data) => {
        // console.log(data.data.data, "powerful");

        setItem(data.data.data);
        setWrap({
          code: data.data.data.product_category_code,
        });
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        api_url2 + "/v1/product/retrieve/products/byId/" + phonesTablets,
        null,
        config
      )
      .then((data) => {
        // console.log(data.data.data, "powerful");

        setPhoneTabletsData(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
    axios
      .get(
        api_url2 + "/v1/product/retrieve/products/byId/" + homeAppliances,
        null,
        config
      )
      .then((data) => {
        // console.log(data.data.data, "powerful");

        setHomeAppliancesData(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
    axios
      .get(
        api_url2 + "/v1/product/retrieve/products/byId/" + electronics,
        null,
        config
      )
      .then((data) => {
        // console.log(data.data.data, "powerful");

        setElectronicsData(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
    axios
      .get(
        api_url2 + "/v1/product/retrieve/products/byId/" + ComputerAccessories,
        null,
        config
      )
      .then((data) => {
        // console.log(data.data.data, "powerful");

        setComputerAccessoriesData(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
    axios
      .get(
        api_url2 + "/v1/product/retrieve/products/byId/" + musicalEquipment,
        null,
        config
      )
      .then((data) => {
        console.log(data.data.data.length, "powerful");

        musicalEquipmentData(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
    axios
      .get(
        api_url2 + "/v1/product/retrieve/products/byId/" + industrialEquipments,
        null,
        config
      )
      .then((data) => {
        // console.log(data.data.data, "powerful");

        industrialEquipmentsData(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  // const industrialsEquipment,MusicalEquipment,phoneTablet,Electronics,Furniture,ComputerAccessories,HomeApplinces;

  useEffect(() => {
    phoneTab();
  }, []);

  function phoneTab() {
    axios
      .get(api_url2 + "/v1/product/retrieve/category", null, config)
      .then((data) => {
        //console.log(data.data.data, "king");
        setCategory(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }

  const [prodBody, setProdBody] = useState("not_product_body");
  const [dropBtn, setDropBtn] = useState("dropHead");
  const [height20, setHeight20] = useState("0px");
  const [rap, setRap] = useState("#electronics");

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 10000,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const dropDown = () => {
    setProdBody("product_body");
    setDropBtn("not_dropHead");
  };
  const closeDropDown = () => {
    setProdBody("not_product_body");
    setDropBtn("dropHead");
  };

  //  const moveto =()=>{

  //    scroll.scrollToTop(100);
  //  }

  const height = {
    position: "absolute",
    top: "1000px",
  };

  const wash = () => {
    setHeight20(height);
    setRap("#HomeKitchen");
  };

  const text = "No Products Found";

  // const numberWithCommas = (x) => {
  //   return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  // };
  const responsive6 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1780 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1780, min: 1350 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 1350, min: 1024 },
      items: 2,
    },
  };
  return (
    <div className="other2 ">
      {/* <div className="cat_div" id="cat_div">
        <div className="cat_body_toggle">
          <a
            href={`/dashboard/products/categories/Computer & Accessories`}
          >
            <div className="cat_body_toggle1">
              Computers and Accessories
            </div>
          </a>
          <a href={`/dashboard/products/categories/Phones & Tablet`}>
            <div className="cat_body_toggle1">Phones and Tablets</div>
          </a>
          <a href={`/dashboard/products/categories/Electronics`}>
            <div className="cat_body_toggle1">Electronics</div>
          </a>
          <div className="cat_body_toggle1">Fashion</div>
          <a
            href={`/dashboard/products/categories/  Home Appliances`}
          >
            <div className="cat_body_toggle1">Home and Kitchen</div>
          </a>
          <a
            href={`/dashboard/products/categories/Musical Equipments`}
          >
            <div className="cat_body_toggle1">Musical Equipment</div>
          </a>
        </div>
      </div> */}

      <section className="no-bg no_pad">
        <div className="container">
          <div className="products_hero_area">
            <div className="products_area1">
              <Slider {...settings}>
                <img
                  src="/img/fake_assets/fake_assets_img.jpeg"
                  alt=""
                  className="products_hero_img"
                />
                <img
                  src="/img/fake_assets/fake_assets_img2.jpeg"
                  alt=""
                  className="products_hero_img"
                />
                <img
                  src="/img/fake_assets/fake_assets_img3.jpeg"
                  alt=""
                  className="products_hero_img"
                />
                <img
                  src="/img/fake_assets/fake_assets_img4.jpeg"
                  alt=""
                  className="products_hero_img"
                />
              </Slider>
            </div>
            <div className="products_area2">
              <div className="products_area2_cont1">
                <img
                  src="/img/Egoras-Market-Banners/web-banner-1.gif"
                  alt=""
                  className="products_hero_img  w-1"
                />
              </div>
              <div className="products_area2_cont1">
                <img
                  src="/img/Egoras-Market-Banners/web-banner-2.gif"
                  alt=""
                  className="products_hero_img w-1"
                />
              </div>
              <div className="products_area2_cont1">
                <img
                  src="/img/Egoras-Market-Banners/web-banner-5.gif"
                  alt=""
                  className="products_hero_img w-1"
                />
              </div>
              <div className="products_area2_cont1">
                <img
                  src="/img/Egoras-Market-Banners/web-banner-4.gif"
                  alt=""
                  className="products_hero_img w-1"
                />
              </div>
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="brands_area">
            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img1.svg"
                alt=""
                className="brand_imgs"
              />
            </div>
            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img2.svg"
                alt=""
                className="brand_imgs"
              />
            </div>
            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img3.svg"
                alt=""
                className="brand_imgs"
              />
            </div>
            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img4.svg"
                alt=""
                className="brand_imgs"
              />
            </div>
            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img5.svg"
                alt=""
                className="brand_imgs"
              />
            </div>
            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img6.svg"
                alt=""
                className="brand_imgs"
              />
            </div>

            <div className="brand_cont1">
              <img
                src="/img/brand_images/brand_img7.svg"
                alt=""
                className="brand_imgs"
              />
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body">
            <div className="products_display_body_heading">
              Outright Buy{" "}
              {/* <a
                href={`/dashboard/products/categories/${code}`}
                className="se_all_btnn"
              >
                SEE ALL
                <ChevronRightIcon />
              </a> */}
            </div>
            <div className=".products_display_body_conts_pad">
              {item.length <= 0 ? (
                <NoDataFoundComponent text={text} />
              ) : (
                <>
                  <div className="show_prods_on_mobile">
                    {item.map((asset, index5) => {
                      if (asset.payment_type == "OUTRIGHT")
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            // href={`/super_admin/details/${asset.id}/${asset.product_name.replace( '','-')}`}
                            // key={index.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div className="asset_title">
                                    <span className="init_amount">
                                      ₦{numberWithCommas(asset.amount)}{" "}
                                    </span>

                                    <span className="slashed_price">
                                      ₦{numberWithCommas(asset.amount * 2)}
                                    </span>
                                  </div>
                                </div>
                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                    })}
                  </div>
                  <Carousel
                    responsive={responsive8}
                    className="partnerCards LEFTARROW market_carous "
                    showDots={false}
                    //   infinite={false}
                    autoPlay={false}
                    autoPlaySpeed={6000}
                    transitionDelay={"2s"}
                    infinite={true}
                    draggable={true}
                    // transitionDuration={500}
                    swipeable={true}
                    style={{ height: "25em" }}
                  >
                    {item.map((asset, index5) => {
                      if (asset.payment_type == "OUTRIGHT")
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            // href={`/super_admin/details/${asset.id}/${asset.product_name.replace( '','-')}`}
                            // key={index.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}

                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div className="asset_title">
                                    <span className="init_amount">
                                      ₦{numberWithCommas(asset.amount)}{" "}
                                    </span>

                                    <span className="slashed_price">
                                      ₦{numberWithCommas(asset.amount * 2)}
                                    </span>
                                  </div>
                                </div>
                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                    })}
                  </Carousel>
                </>
              )}
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="prod_banner_advert_div">
            <img
              src="/img/Egoras-Market-Banners/market_banner_long_3.jpg"
              alt=""
              className="prod_banner_ad nn"
            />
          </div>
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body no_pad" id="phonesTab">
            <div className="products_display_body_heading heading_color_2">
              {phonesTablets}
              <a
                href={`/dashboard/products/categories/Phones & Tablet`}
                className="se_all_btnn se_all_color2"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className="products_display_body_conts_banner">
              <div className="products_display_body_conts_banner_cont">
                <img
                  src="/img/Egoras-Market-Banners/web-banner-3.gif"
                  alt=""
                  className="asset_cat_image_display"
                />
              </div>
              <div className="products_display_body_conts2">
                {phonesTabletsData.length <= 0 ? (
                  <NoDataFoundComponent text={text} />
                ) : (
                  <>
                    <div className="show_prods_on_mobile">
                      {phonesTabletsData.map((asset) => {
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            // key={index.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div class="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          ₦{numberWithCommas(asset.amount)}{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          ₦{numberWithCommas(asset.amount * 2)}
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount * 2
                                          )}
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perweek
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                    </div>
                    <Carousel
                      responsive={responsive6}
                      className="partnerCards LEFTARROW market_carous"
                      showDots={false}
                      //   infinite={false}
                      autoPlay={false}
                      autoPlaySpeed={6000}
                      transitionDelay={"2s"}
                      infinite={false}
                      draggable={true}
                      // transitionDuration={500}
                      swipeable={true}
                      style={{ height: "25em" }}
                    >
                      {phonesTabletsData.map((asset) => {
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            // key={index.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div class="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          ₦{numberWithCommas(asset.amount)}{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          ₦{numberWithCommas(asset.amount * 2)}
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount * 2
                                          )}
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perweek
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                    </Carousel>
                    <Carousel
                      responsive={responsive6}
                      className="partnerCards LEFTARROW market_carous"
                      showDots={false}
                      //   infinite={false}
                      autoPlay={false}
                      autoPlaySpeed={6000}
                      transitionDelay={"2s"}
                      infinite={false}
                      draggable={true}
                      // transitionDuration={500}
                      swipeable={true}
                      style={{ height: "25em" }}
                    >
                      {phonesTabletsData.map((asset) => {
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            // key={index.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div class="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          ₦{numberWithCommas(asset.amount)}{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          ₦{numberWithCommas(asset.amount * 2)}
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount * 2
                                          )}
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perweek
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                    </Carousel>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body" id="HomeKitchen">
            <div className="products_display_body_heading">
              {homeAppliances}
              <a
                href={`/dashboard/products/categories/Home Appliances`}
                className="se_all_btnn"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className=".products_display_body_conts_pad">
              {homeAppliancesData.length <= 0 ? (
                <NoDataFoundComponent text={text} />
              ) : (
                <>
                  <div className="show_prods_on_mobile">
                    {homeAppliancesData.slice(0, 10).map((asset, index5) => {
                      return (
                        <a
                          href={`/super_admin/details/${
                            asset.id
                          }/${asset.product_name.replace(/\s+/g, "-")}`}
                          key={index5.toString()}
                        >
                          <li className="carous_list no_marg inventory_cards">
                            <div
                              className="storeTiles_storeTileContainer__HoGEa"
                              style={{
                                backgroundImage: `url(${asset.product_image})`,
                                //           height: "200px",
                                //           width: "100%",
                                //           backgroundRepeat: "no-repeat",
                                //           backgroundSize: "cover",
                                //           borderRadius: "8px",
                                //           borderBottomLeftRadius: "0px",
                                //           borderBottomRightRadius: "0px",
                                //   backgroundPositionY: "center",
                              }}
                            >
                              {asset.payment_type == "OUTRIGHT" ? (
                                <div className="out_right_install_tag">
                                  <button
                                    className="out_right_install_tag_btn"
                                    style={{
                                      background: "#3ebc6e",
                                      borderColor: "#3ebc6e",
                                    }}
                                  >
                                    Outright
                                  </button>
                                </div>
                              ) : (
                                <div className="out_right_install_tag">
                                  <button className="out_right_install_tag_btn">
                                    Savings
                                  </button>
                                </div>
                              )}
                              <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                <div className="asset_name">
                                  {asset.product_name}
                                </div>
                                <div className="asset_prices_div">
                                  <div className="asset_title">
                                    {asset.payment_type == "OUTRIGHT" ? (
                                      <span className="init_amount">
                                        ₦{numberWithCommas(asset.amount)}{" "}
                                      </span>
                                    ) : (
                                      <span className="init_amount">
                                        ₦{numberWithCommas(asset.roundedAmount)}{" "}
                                      </span>
                                    )}
                                    {asset.payment_type == "OUTRIGHT" ? (
                                      <span className="slashed_price">
                                        ₦{numberWithCommas(asset.amount * 2)}
                                      </span>
                                    ) : (
                                      <span className="slashed_price">
                                        ₦
                                        {numberWithCommas(
                                          asset.roundedAmount * 2
                                        )}
                                      </span>
                                    )}
                                  </div>
                                  {asset.payment_type == "OUTRIGHT" ? null : (
                                    <div className="amount_per_day_div">
                                      ₦
                                      {numberWithCommas(
                                        (
                                          asset.amount / asset.product_duration
                                        ).toFixed()
                                      )}
                                      <span className="per_day_symbol">
                                        {" "}
                                        / perweek
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              {/* </a> */}
                            </div>
                          </li>
                        </a>
                      );
                    })}
                  </div>
                  <Carousel
                    responsive={responsive8}
                    className="partnerCards LEFTARROW market_carous "
                    showDots={false}
                    //   infinite={false}
                    autoPlay={false}
                    autoPlaySpeed={6000}
                    transitionDelay={"2s"}
                    infinite={true}
                    draggable={true}
                    // transitionDuration={500}
                    swipeable={true}
                    style={{ height: "25em" }}
                  >
                    {homeAppliancesData.slice(0, 10).map((asset, index5) => {
                      return (
                        <a
                          href={`/super_admin/details/${
                            asset.id
                          }/${asset.product_name.replace(/\s+/g, "-")}`}
                          key={index5.toString()}
                        >
                          <li className="carous_list no_marg inventory_cards">
                            <div
                              className="storeTiles_storeTileContainer__HoGEa"
                              style={{
                                backgroundImage: `url(${asset.product_image})`,
                                //           height: "200px",
                                //           width: "100%",
                                //           backgroundRepeat: "no-repeat",
                                //           backgroundSize: "cover",
                                //           borderRadius: "8px",
                                //           borderBottomLeftRadius: "0px",
                                //           borderBottomRightRadius: "0px",
                                //   backgroundPositionY: "center",
                              }}
                            >
                              {asset.payment_type == "OUTRIGHT" ? (
                                <div className="out_right_install_tag">
                                  <button
                                    className="out_right_install_tag_btn"
                                    style={{
                                      background: "#3ebc6e",
                                      borderColor: "#3ebc6e",
                                    }}
                                  >
                                    Outright
                                  </button>
                                </div>
                              ) : (
                                <div className="out_right_install_tag">
                                  <button className="out_right_install_tag_btn">
                                    Savings
                                  </button>
                                </div>
                              )}
                              <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                <div className="asset_name">
                                  {asset.product_name}
                                </div>
                                <div className="asset_prices_div">
                                  <div className="asset_title">
                                    {asset.payment_type == "OUTRIGHT" ? (
                                      <span className="init_amount">
                                        ₦{numberWithCommas(asset.amount)}{" "}
                                      </span>
                                    ) : (
                                      <span className="init_amount">
                                        ₦{numberWithCommas(asset.roundedAmount)}{" "}
                                      </span>
                                    )}
                                    {asset.payment_type == "OUTRIGHT" ? (
                                      <span className="slashed_price">
                                        ₦{numberWithCommas(asset.amount * 2)}
                                      </span>
                                    ) : (
                                      <span className="slashed_price">
                                        ₦
                                        {numberWithCommas(
                                          asset.roundedAmount * 2
                                        )}
                                      </span>
                                    )}
                                  </div>
                                  {asset.payment_type == "OUTRIGHT" ? null : (
                                    <div className="amount_per_day_div">
                                      ₦
                                      {numberWithCommas(
                                        (
                                          asset.amount / asset.product_duration
                                        ).toFixed()
                                      )}
                                      <span className="per_day_symbol">
                                        {" "}
                                        / perweek
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              {/* </a> */}
                            </div>
                          </li>
                        </a>
                      );
                    })}
                  </Carousel>
                </>
              )}
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="prod_banner_advert_div">
            <img
              src="/img/Egoras-Market-Banners/market_banner_long_1.jpg"
              alt=""
              className="prod_banner_ad"
            />
          </div>
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body no_pad" id="Electronics">
            <div className="products_display_body_heading heading_color_2">
              {electronics}
              <a
                href={`/dashboard/products/categories/Electronics`}
                className="se_all_btnn se_all_color2"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className="products_display_body_conts_banner">
              <div className="products_display_body_conts_banner_cont">
                <img
                  src="/img/Egoras-Market-Banners/web-banner-7.gif"
                  alt=""
                  className="asset_cat_image_display"
                />
              </div>
              <div className="products_display_body_conts2">
                {electronicsData.length <= 0 ? (
                  <NoDataFoundComponent text={text} />
                ) : (
                  <>
                    <div className="show_prods_on_mobile">
                      {electronicsData.map((asset) => {
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            // key={index.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div class="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          ₦{numberWithCommas(asset.amount)}{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          ₦{numberWithCommas(asset.amount * 2)}
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount * 2
                                          )}
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perweek
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                    </div>
                    <Carousel
                      responsive={responsive6}
                      className="partnerCards LEFTARROW market_carous"
                      showDots={false}
                      //   infinite={false}
                      autoPlay={false}
                      autoPlaySpeed={6000}
                      transitionDelay={"2s"}
                      infinite={false}
                      draggable={true}
                      // transitionDuration={500}
                      swipeable={true}
                      style={{ height: "25em" }}
                    >
                      {electronicsData.map((asset) => {
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            // key={index.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div class="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          ₦{numberWithCommas(asset.amount)}{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          ₦{numberWithCommas(asset.amount * 2)}
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount * 2
                                          )}
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perweek
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                    </Carousel>
                    <Carousel
                      responsive={responsive6}
                      className="partnerCards LEFTARROW market_carous"
                      showDots={false}
                      //   infinite={false}
                      autoPlay={false}
                      autoPlaySpeed={6000}
                      transitionDelay={"2s"}
                      infinite={false}
                      draggable={true}
                      // transitionDuration={500}
                      swipeable={true}
                      style={{ height: "25em" }}
                    >
                      {electronicsData.map((asset) => {
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            // key={index.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div class="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          ₦{numberWithCommas(asset.amount)}{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          ₦{numberWithCommas(asset.amount * 2)}
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount * 2
                                          )}
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perweek
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                    </Carousel>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body" id="computerAcc">
            <div className="products_display_body_heading">
              {ComputerAccessories}
              <a
                href={`/dashboard/products/categories/Computer & Accessories`}
                className="se_all_btnn"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className=".products_display_body_conts_pad">
              {ComputerAccessoriesData.length <= 0 ? (
                <NoDataFoundComponent text={text} />
              ) : (
                <>
                  <div className="show_prods_on_mobile">
                    {ComputerAccessoriesData.slice(0, 10).map(
                      (asset, index5) => {
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            key={index5.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                  //           height: "200px",
                                  //           width: "100%",
                                  //           backgroundRepeat: "no-repeat",
                                  //           backgroundSize: "cover",
                                  //           borderRadius: "8px",
                                  //           borderBottomLeftRadius: "0px",
                                  //           borderBottomRightRadius: "0px",
                                  //   backgroundPositionY: "center",
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div className="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          ₦{numberWithCommas(asset.amount)}{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          ₦{numberWithCommas(asset.amount * 2)}
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount * 2
                                          )}
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perweek
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      }
                    )}
                  </div>
                  <Carousel
                    responsive={responsive8}
                    className="partnerCards LEFTARROW market_carous "
                    showDots={false}
                    //   infinite={false}
                    autoPlay={false}
                    autoPlaySpeed={6000}
                    transitionDelay={"2s"}
                    infinite={true}
                    draggable={true}
                    // transitionDuration={500}
                    swipeable={true}
                    style={{ height: "25em" }}
                  >
                    {ComputerAccessoriesData.slice(0, 10).map(
                      (asset, index5) => {
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            key={index5.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                  //           height: "200px",
                                  //           width: "100%",
                                  //           backgroundRepeat: "no-repeat",
                                  //           backgroundSize: "cover",
                                  //           borderRadius: "8px",
                                  //           borderBottomLeftRadius: "0px",
                                  //           borderBottomRightRadius: "0px",
                                  //   backgroundPositionY: "center",
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div className="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          ₦{numberWithCommas(asset.amount)}{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          ₦{numberWithCommas(asset.amount * 2)}
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount * 2
                                          )}
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perweek
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      }
                    )}
                  </Carousel>
                </>
              )}
            </div>
            {/* </div> */}
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="prod_banner_advert_div">
            <img
              src="/img/Egoras-Market-Banners/market_banner_long_2.jpg"
              alt=""
              className="prod_banner_ad"
            />
          </div>
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body no_pad" id="MusicEquip">
            <div className="products_display_body_heading heading_color_2">
              {musicalEquipment}
              <a
                href={`/dashboard/products/categories/Musical Equipments`}
                className="se_all_btnn se_all_color2"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className="products_display_body_conts_banner">
              <div className="products_display_body_conts_banner_cont">
                <img
                  src="/img/Egoras-Market-Banners/web-banner-6.gif"
                  alt=""
                  className="asset_cat_image_display"
                />
              </div>
              <div className="products_display_body_conts2">
                {musicalEquipmentData.length <= 0 ? (
                  <NoDataFoundComponent text={text} />
                ) : (
                  <>
                    <div className="show_prods_on_mobile">
                      {musicalEquipmentData.map((asset) => {
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            // key={index.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div class="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          ₦{numberWithCommas(asset.amount)}{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          ₦{numberWithCommas(asset.amount * 2)}
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount * 2
                                          )}
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perweek
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                    </div>
                    <Carousel
                      responsive={responsive6}
                      className="partnerCards LEFTARROW market_carous"
                      showDots={false}
                      //   infinite={false}
                      autoPlay={false}
                      autoPlaySpeed={6000}
                      transitionDelay={"2s"}
                      infinite={false}
                      draggable={true}
                      // transitionDuration={500}
                      swipeable={true}
                      style={{ height: "25em" }}
                    >
                      {musicalEquipmentData.map((asset) => {
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            // key={index.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div class="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          ₦{numberWithCommas(asset.amount)}{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          ₦{numberWithCommas(asset.amount * 2)}
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount * 2
                                          )}
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perweek
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                    </Carousel>
                    <Carousel
                      responsive={responsive6}
                      className="partnerCards LEFTARROW market_carous"
                      showDots={false}
                      //   infinite={false}
                      autoPlay={false}
                      autoPlaySpeed={6000}
                      transitionDelay={"2s"}
                      infinite={false}
                      draggable={true}
                      // transitionDuration={500}
                      swipeable={true}
                      style={{ height: "25em" }}
                    >
                      {musicalEquipmentData.map((asset) => {
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            // key={index.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div class="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          ₦{numberWithCommas(asset.amount)}{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          ₦{numberWithCommas(asset.amount * 2)}
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount * 2
                                          )}
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perweek
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                    </Carousel>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body" id="computersAccessories">
            <div className="products_display_body_heading">
              {industrialEquipments}
              <a
                href={`/dashboard/products/categories/Industral Equipments`}
                className="se_all_btnn"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className=".products_display_body_conts_pad">
              {industrialEquipmentsData.length <= 0 ? (
                <NoDataFoundComponent text={text} />
              ) : (
                <>
                  <div className="show_prods_on_mobile">
                    {industrialEquipmentsData
                      .slice(0, 10)
                      .map((asset, index5) => {
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            key={index5.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                  //           height: "200px",
                                  //           width: "100%",
                                  //           backgroundRepeat: "no-repeat",
                                  //           backgroundSize: "cover",
                                  //           borderRadius: "8px",
                                  //           borderBottomLeftRadius: "0px",
                                  //           borderBottomRightRadius: "0px",
                                  //   backgroundPositionY: "center",
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div className="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          ₦{numberWithCommas(asset.amount)}{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          ₦{numberWithCommas(asset.amount * 2)}
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount * 2
                                          )}
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perweek
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                  </div>
                  <Carousel
                    responsive={responsive8}
                    className="partnerCards LEFTARROW market_carous "
                    showDots={false}
                    //   infinite={false}
                    autoPlay={false}
                    autoPlaySpeed={6000}
                    transitionDelay={"2s"}
                    infinite={true}
                    draggable={true}
                    // transitionDuration={500}
                    swipeable={true}
                    style={{ height: "25em" }}
                  >
                    {industrialEquipmentsData
                      .slice(0, 10)
                      .map((asset, index5) => {
                        return (
                          <a
                            href={`/super_admin/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            key={index5.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                  //           height: "200px",
                                  //           width: "100%",
                                  //           backgroundRepeat: "no-repeat",
                                  //           backgroundSize: "cover",
                                  //           borderRadius: "8px",
                                  //           borderBottomLeftRadius: "0px",
                                  //           borderBottomRightRadius: "0px",
                                  //   backgroundPositionY: "center",
                                }}
                              >
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#3ebc6e",
                                        borderColor: "#3ebc6e",
                                      }}
                                    >
                                      Outright
                                    </button>
                                  </div>
                                ) : (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                )}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div className="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          ₦{numberWithCommas(asset.amount)}{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          ₦{numberWithCommas(asset.amount * 2)}
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          ₦
                                          {numberWithCommas(
                                            asset.roundedAmount * 2
                                          )}
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )}
                                        <span className="per_day_symbol">
                                          {" "}
                                          / perweek
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {/* </a> */}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                  </Carousel>
                </>
              )}
            </div>
          </div>

          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          {/* <div className="prod_banner_advert_div">
            <img
              src="/img/fake_assets/prod_banner_ad.jpeg"
              alt=""
              className="prod_banner_ad"
            />
          </div> */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
        </div>

        {/* 
        <div>
          {names.filter(name => name.includes('p')).map(filteredName => (
           <li>
            {filteredName}
          </li>
          ))}
         </div> */}

        <div className="fixed_pop">
          <img
            src="/img/fake_assets/pop_pic.gif"
            alt=""
            className="fixed_pop_img"
          />
        </div>
      </section>
    </div>
  );
}

const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps1)(AdminMarket);
