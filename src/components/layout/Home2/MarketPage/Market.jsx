import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "react-multi-carousel";
import { connect } from "react-redux";
import SellIcon from "@mui/icons-material/Sell";
import Countdown from "react-countdown";
import { countdown } from "../../../../actions/countdown";
import DisplayMoney from "../../../DisplayMoney";
import "./market.css";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import axios from "axios";

import { numberWithCommas } from "../../../../static";
import { NoDataFoundComponent } from "../Dashboard/NodataFound/NoDataFoundComponent";
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
const Market = ({ auth, countdown }) => {
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
  const [awoof, setAwoof] = useState([]);
  const [phonesTablets, setPhoneTablets] = useState("Phones & Tablet");
  const [phonesTabletsData, setPhoneTabletsData] = useState([]);
  const [musicalEquipment, setMusicalEquipment] =
    useState("Musical Equipments");
  const [musicalEquipmentData, setMusicalEquipmentData] = useState([]);
  const [industrialEquipments, setIndustrialEquipments] = useState(
    "Industral Equipments"
  );
  const [industrialEquipmentsData, setIndustrialEquipmentsData] = useState([]);
  const [counterReady, setCounterReady] = useState(false);
  const [counterArray, setCounterArray] = useState([]);

  const [counterDuration, setCounterDuration] = useState(0);
  const [placeHolder, setPlaceHolder] = useState("");
  const [wrap, setWrap] = useState({ code: "" });
  const { code } = wrap;

  // const [cItem,setCItem] =useState([])

  const [img, setImg] = useState();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/outright/products", null, config)
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
        api_url2 + "/v1/product/retrieve/products/byId/" + "Awoof",
        null,
        config
      )
      .then((data) => {
        // console.log(data.data, "item detail component ");

        setAwoof(data.data.data);
        console.log(data.data, "awoof log");

        // setTerm(data.data.data)
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
        setMusicalEquipmentData(data.data.data);
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
        setIndustrialEquipmentsData(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);
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
  const height = {
    position: "absolute",
    top: "1000px",
  };
  const text = "No Products Yet.";
  // ==============
  // ==============
  // ==============
  // ==============
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

  const callCounter = async () => {
    let res3 = await countdown();
    setCounterArray(res3.data.data);
    let getData = res3.data.data[0];
    // console.log(res3.data.data);
    // console.log(getData.countType);
    let convertToDate = Date(getData.dropDate);
    // console.log(convertToDate);

    const today = new Date();
    const endDate = new Date(getData.dropDate);
    const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24));
    const hours = parseInt((Math.abs(endDate - today) / (1000 * 60 * 60)) % 24);
    const minutes = parseInt(
      (Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60)) % 60
    );
    const seconds = parseInt(
      (Math.abs(endDate.getTime() - today.getTime()) / 1000) % 60
    );
    console.log(days, hours, minutes, seconds);

    // 👇️        hour  min  sec  ms
    let dayscount = days * 24 * 60 * 60 * 1000;
    let hourscount = hours * 60 * 60 * 1000;
    let minutescount = minutes * 60 * 1000;
    let secondscount = seconds * 1000;

    let totalMiliseconds = dayscount + hourscount + minutescount + secondscount;

    console.log(totalMiliseconds);

    if (getData.countType === "WEEKLY") {
      setPlaceHolder("Opens In");
    } else {
      setPlaceHolder("Closes In");
    }
    setCounterDuration(totalMiliseconds);
    setCounterReady(true);
  };
  useEffect(() => {
    callCounter();
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      console.log(counterArray, "okkkkk");
      let getData = counterArray[0];
      // let convertToDate = Date(getData.dropDate);

      const today = new Date();
      const endDate = new Date(getData.dropDate);
      const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24));
      const hours = parseInt(
        (Math.abs(endDate - today) / (1000 * 60 * 60)) % 24
      );
      const minutes = parseInt(
        (Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60)) % 60
      );
      const seconds = parseInt(
        (Math.abs(endDate.getTime() - today.getTime()) / 1000) % 60
      );
      console.log(days, hours, minutes, seconds);

      // 👇️        hour  min  sec  ms
      let dayscount = days * 24 * 60 * 60 * 1000;
      let hourscount = hours * 60 * 60 * 1000;
      let minutescount = minutes * 60 * 1000;
      // let newMinutes = 5 * 60 * 1000;
      let secondscount = seconds * 1000;

      let totalMiliseconds =
        dayscount + hourscount + minutescount + secondscount;

      var completeCount = Date.now() + totalMiliseconds;
      var newEndDate = endDate.getTime();
      console.log(completeCount, newEndDate);
      // 1654532579461 1654532594462
      if (completeCount >= newEndDate) {
        console.log("time up", new Date());

        callCounter();

        // completeCount = Date.now() + newMinutes;
        // var currentDate = new Date();
        // newEndDate = currentDate.setMinutes(currentDate.getMinutes() + 3);
        // console.log(completeCount, newEndDate);

        setCounterReady(false);
        setCounterReady(true);

        if (counterArray === undefined || counterArray.length == 0) {
          console.log("empty array");
        } else {
          if (getData.countType === "WEEKLY") {
            console.log("Market Opens In WEEKLY");
            setPlaceHolder("Market Opens In");
            // setCounterDuration(newMinutes);
          } else {
            console.log("Market Opens In DAILY");
            setPlaceHolder("Market Closes In");
          }
        }
      } else {
        console.log("still counting", Date.now());
      }
    }, 3000);
    return () => {
      clearInterval(timeInterval);
    };
  }, [counterArray]);
  const CoundownRenderer = ({ days, hours, minutes, seconds }) => (
    <div>
      {days}
      <span className="count_down_tags_market">D</span>: {hours}
      <span className="count_down_tags_market">H</span>: {minutes}
      <span className="count_down_tags_market">M</span>: {seconds}
      <span className="count_down_tags_market">S</span>
    </div>
  );
  return (
    <div>
      <section className="market_page_section">
        <div className="custom_container">
          <div className="products_hero_area market_area">
            <div className="products_area1">
              <Slider {...settings}>
                <img
                  src="/img/fake_assets/March web banners A.jpg"
                  alt=""
                  className="products_hero_img"
                />
                <img
                  src="/img/fake_assets/March web banners B.jpg"
                  alt=""
                  className="products_hero_img"
                />
                <img
                  src="/img/fake_assets/March web banners C.jpg"
                  alt=""
                  className="products_hero_img"
                />
                <img
                  src="/img/fake_assets/March web banners D.jpg"
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
            <div className="products_display_body_heading heading_color_2a">
              <span className="awoof_sale_icon_market_cont">
                <SellIcon className="awoof_sale_icon" />
                Awoof Sales{" "}
              </span>

              <>
                {counterReady ? (
                  <div>
                    <span className="startsIn_market">
                      {placeHolder}:{" "}
                      <div className="count_down_shopping_market">
                        <Countdown
                          className="countdownDiv_market"
                          date={Date.now() + counterDuration}
                          renderer={CoundownRenderer}
                        />
                      </div>
                    </span>
                  </div>
                ) : null}
              </>
              <a
                href={`/products/categories/Awoof`}
                className="se_all_btnn se_all_color2"
              >
                SEE ALL
                <ChevronRightIcon />
              </a>
            </div>
            <div className=".products_display_body_conts_pad">
              {awoof.length <= 0 ? (
                <NoDataFoundComponent text={text} />
              ) : (
                <>
                  <div className="show_prods_on_mobile">
                    {awoof.slice(0, 10).map((asset, index5) => {
                      if (asset.payment_type == "OUTRIGHT")
                        return (
                          <a
                            href={`/products/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            // href={`/products/details/${asset.id}/${asset.product_name.replace( '','-')}`}
                            // key={index.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                }}
                              >
                                <div className="out_right_install_tag">
                                  <button
                                    className="out_right_install_tag_btn"
                                    style={{
                                      background: "#000",
                                      borderColor: "#000",
                                      color: "#fff",
                                    }}
                                  >
                                    Awoof
                                  </button>
                                </div>
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div className="asset_title">
                                    <span className="init_amount">
                                      <DisplayMoney amount={asset.amount} />{" "}
                                    </span>

                                    <span className="slashed_price">
                                      <DisplayMoney amount={asset.amount * 2} />
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
                    {awoof.slice(0, 10).map((asset, index5) => {
                      if (asset.payment_type == "OUTRIGHT")
                        return (
                          <a
                            href={`/products/details/${
                              asset.id
                            }/${asset.product_name.replace(/\s+/g, "-")}`}
                            // href={`/products/details/${asset.id}/${asset.product_name.replace( '','-')}`}
                            // key={index.toString()}
                          >
                            <li className="carous_list no_marg inventory_cards">
                              <div
                                className="storeTiles_storeTileContainer__HoGEa"
                                style={{
                                  backgroundImage: `url(${asset.product_image})`,
                                }}
                              >
                                <div className="out_right_install_tag">
                                  <button
                                    className="out_right_install_tag_btn"
                                    style={{
                                      background: "#000",
                                      borderColor: "#000",
                                      color: "#fff",
                                    }}
                                  >
                                    Awoof
                                  </button>
                                </div>

                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div className="asset_title">
                                    <span className="init_amount">
                                      <DisplayMoney amount={asset.amount} />{" "}
                                    </span>

                                    <span className="slashed_price">
                                      <DisplayMoney amount={asset.amount * 2} />
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
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}
          {/* =========[[[[[[[[[]]]]]]]]] */}

          <div className="products_display_body">
            <div className="products_display_body_heading">
              Outright Buy{" "}
              {/* <a
                href={`/products/categories/${code}`}
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
                    {item
                      .filter((person) => person.sales_type == "SHOWROOM")
                      .slice(0, 10)
                      .map((asset, index5) => {
                        if (asset.payment_type == "OUTRIGHT")
                          return (
                            <a
                              href={`/products/details/${
                                asset.id
                              }/${asset.product_name.replace(/\s+/g, "-")}`}
                              // href={`/products/details/${asset.id}/${asset.product_name.replace( '','-')}`}
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
                                        <DisplayMoney amount={asset.amount} />{" "}
                                      </span>

                                      <span className="slashed_price">
                                        <DisplayMoney
                                          amount={asset.amount * 2}
                                        />
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
                    {item
                      .filter((person) => person.sales_type == "SHOWROOM")
                      .slice(0, 10)
                      .map((asset, index5) => {
                        if (asset.payment_type == "OUTRIGHT")
                          return (
                            <a
                              href={`/products/details/${
                                asset.id
                              }/${asset.product_name.replace(/\s+/g, "-")}`}
                              // href={`/products/details/${asset.id}/${asset.product_name.replace( '','-')}`}
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
                                        <DisplayMoney amount={asset.amount} />{" "}
                                      </span>

                                      <span className="slashed_price">
                                        <DisplayMoney
                                          amount={asset.amount * 2}
                                        />
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
                href={`/products/categories/Phones & Tablet`}
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
                      {phonesTabletsData
                        .filter((person) => person.sales_type == "SHOWROOM")
                        .slice(0, 10)
                        .map((asset) => {
                          return (
                            <a
                              href={`/products/details/${
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
                                            <DisplayMoney
                                              amount={asset.amount}
                                            />{" "}
                                          </span>
                                        ) : (
                                          <span className="init_amount">
                                            <DisplayMoney
                                              amount={asset.roundedAmount}
                                            />{" "}
                                          </span>
                                        )}
                                        {asset.payment_type == "OUTRIGHT" ? (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.amount * 2}
                                            />
                                          </span>
                                        ) : (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.roundedAmount * 2}
                                            />
                                          </span>
                                        )}
                                      </div>
                                      {asset.payment_type ==
                                      "OUTRIGHT" ? null : (
                                        <div className="amount_per_day_div">
                                          <DisplayMoney
                                            amount={
                                              asset.amount /
                                              asset.product_duration
                                            }
                                          />
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
                      {phonesTabletsData
                        .filter((person) => person.sales_type == "SHOWROOM")
                        .slice(0, 10)
                        .map((asset) => {
                          return (
                            <a
                              href={`/products/details/${
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
                                            <DisplayMoney
                                              amount={asset.amount}
                                            />{" "}
                                          </span>
                                        ) : (
                                          <span className="init_amount">
                                            <DisplayMoney
                                              amount={asset.roundedAmount}
                                            />{" "}
                                          </span>
                                        )}
                                        {asset.payment_type == "OUTRIGHT" ? (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.amount * 2}
                                            />
                                          </span>
                                        ) : (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.roundedAmount * 2}
                                            />
                                          </span>
                                        )}
                                      </div>
                                      {asset.payment_type ==
                                      "OUTRIGHT" ? null : (
                                        <div className="amount_per_day_div">
                                          <DisplayMoney
                                            amount={
                                              asset.amount /
                                              asset.product_duration
                                            }
                                          />
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
                      {phonesTabletsData
                        .filter((person) => person.sales_type == "SHOWROOM")
                        .slice(0, 10)
                        .map((asset) => {
                          return (
                            <a
                              href={`/products/details/${
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
                                            <DisplayMoney
                                              amount={asset.amount}
                                            />{" "}
                                          </span>
                                        ) : (
                                          <span className="init_amount">
                                            <DisplayMoney
                                              amount={asset.roundedAmount}
                                            />{" "}
                                          </span>
                                        )}
                                        {asset.payment_type == "OUTRIGHT" ? (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.amount * 2}
                                            />
                                          </span>
                                        ) : (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.roundedAmount * 2}
                                            />
                                          </span>
                                        )}
                                      </div>
                                      {asset.payment_type ==
                                      "OUTRIGHT" ? null : (
                                        <div className="amount_per_day_div">
                                          <DisplayMoney
                                            amount={
                                              asset.amount /
                                              asset.product_duration
                                            }
                                          />
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
                href={`/products/categories/Home Appliances`}
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
                    {homeAppliancesData
                      .filter((person) => person.sales_type == "SHOWROOM")
                      .slice(0, 10)
                      .map((asset, index5) => {
                        return (
                          <a
                            href={`/products/details/${
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
                                          <DisplayMoney amount={asset.amount} />{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          <DisplayMoney
                                            amount={asset.roundedAmount}
                                          />{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.amount * 2}
                                          />
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.roundedAmount * 2}
                                          />
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        <DisplayMoney
                                          amount={
                                            asset.amount /
                                            asset.product_duration
                                          }
                                        />
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
                    {homeAppliancesData
                      .filter((person) => person.sales_type == "SHOWROOM")
                      .slice(0, 10)
                      .map((asset, index5) => {
                        return (
                          <a
                            href={`/products/details/${
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
                                          <DisplayMoney amount={asset.amount} />{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          <DisplayMoney
                                            amount={asset.roundedAmount}
                                          />{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.amount * 2}
                                          />
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.roundedAmount * 2}
                                          />
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        <DisplayMoney
                                          amount={
                                            asset.amount /
                                            asset.product_duration
                                          }
                                        />
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
                href={`/products/categories/Electronics`}
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
                      {electronicsData
                        .filter((person) => person.sales_type == "SHOWROOM")
                        .slice(0, 10)
                        .map((asset) => {
                          return (
                            <a
                              href={`/products/details/${
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
                                            <DisplayMoney
                                              amount={asset.amount}
                                            />{" "}
                                          </span>
                                        ) : (
                                          <span className="init_amount">
                                            <DisplayMoney
                                              amount={asset.roundedAmount}
                                            />{" "}
                                          </span>
                                        )}
                                        {asset.payment_type == "OUTRIGHT" ? (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.amount * 2}
                                            />
                                          </span>
                                        ) : (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.roundedAmount * 2}
                                            />
                                          </span>
                                        )}
                                      </div>
                                      {asset.payment_type ==
                                      "OUTRIGHT" ? null : (
                                        <div className="amount_per_day_div">
                                          <DisplayMoney
                                            amount={
                                              asset.amount /
                                              asset.product_duration
                                            }
                                          />
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
                      {electronicsData
                        .filter((person) => person.sales_type == "SHOWROOM")
                        .slice(0, 10)
                        .map((asset) => {
                          return (
                            <a
                              href={`/products/details/${
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
                                            <DisplayMoney
                                              amount={asset.amount}
                                            />{" "}
                                          </span>
                                        ) : (
                                          <span className="init_amount">
                                            <DisplayMoney
                                              amount={asset.roundedAmount}
                                            />{" "}
                                          </span>
                                        )}
                                        {asset.payment_type == "OUTRIGHT" ? (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.amount * 2}
                                            />
                                          </span>
                                        ) : (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.roundedAmount * 2}
                                            />
                                          </span>
                                        )}
                                      </div>
                                      {asset.payment_type ==
                                      "OUTRIGHT" ? null : (
                                        <div className="amount_per_day_div">
                                          <DisplayMoney
                                            amount={
                                              asset.amount /
                                              asset.product_duration
                                            }
                                          />
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
                      {electronicsData
                        .filter((person) => person.sales_type == "SHOWROOM")
                        .slice(0, 10)
                        .map((asset) => {
                          return (
                            <a
                              href={`/products/details/${
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
                                            <DisplayMoney
                                              amount={asset.amount}
                                            />{" "}
                                          </span>
                                        ) : (
                                          <span className="init_amount">
                                            <DisplayMoney
                                              amount={asset.roundedAmount}
                                            />{" "}
                                          </span>
                                        )}
                                        {asset.payment_type == "OUTRIGHT" ? (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.amount * 2}
                                            />
                                          </span>
                                        ) : (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.roundedAmount * 2}
                                            />
                                          </span>
                                        )}
                                      </div>
                                      {asset.payment_type ==
                                      "OUTRIGHT" ? null : (
                                        <div className="amount_per_day_div">
                                          <DisplayMoney
                                            amount={
                                              asset.amount /
                                              asset.product_duration
                                            }
                                          />
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
                href={`/products/categories/Computer & Accessories`}
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
                    {ComputerAccessoriesData.filter(
                      (person) => person.sales_type == "SHOWROOM"
                    )
                      .slice(0, 10)
                      .map((asset, index5) => {
                        return (
                          <a
                            href={`/products/details/${
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
                                          <DisplayMoney amount={asset.amount} />{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          <DisplayMoney
                                            amount={asset.roundedAmount}
                                          />{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.amount * 2}
                                          />
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.roundedAmount * 2}
                                          />
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        <DisplayMoney
                                          amount={
                                            asset.amount /
                                            asset.product_duration
                                          }
                                        />
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
                    {ComputerAccessoriesData.filter(
                      (person) => person.sales_type == "SHOWROOM"
                    )
                      .slice(0, 10)
                      .map((asset, index5) => {
                        return (
                          <a
                            href={`/products/details/${
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
                                          <DisplayMoney amount={asset.amount} />{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          <DisplayMoney
                                            amount={asset.roundedAmount}
                                          />{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.amount * 2}
                                          />
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.roundedAmount * 2}
                                          />
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        <DisplayMoney
                                          amount={
                                            asset.amount /
                                            asset.product_duration
                                          }
                                        />
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
                href={`/products/categories/Musical Equipments`}
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
                      {musicalEquipmentData
                        .filter((person) => person.sales_type == "SHOWROOM")
                        .slice(0, 10)
                        .map((asset) => {
                          return (
                            <a
                              href={`/products/details/${
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
                                            <DisplayMoney
                                              amount={asset.amount}
                                            />{" "}
                                          </span>
                                        ) : (
                                          <span className="init_amount">
                                            <DisplayMoney
                                              amount={asset.roundedAmount}
                                            />{" "}
                                          </span>
                                        )}
                                        {asset.payment_type == "OUTRIGHT" ? (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.amount * 2}
                                            />
                                          </span>
                                        ) : (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.roundedAmount * 2}
                                            />
                                          </span>
                                        )}
                                      </div>
                                      {asset.payment_type ==
                                      "OUTRIGHT" ? null : (
                                        <div className="amount_per_day_div">
                                          <DisplayMoney
                                            amount={
                                              asset.amount /
                                              asset.product_duration
                                            }
                                          />
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
                      {musicalEquipmentData
                        .filter((person) => person.sales_type == "SHOWROOM")
                        .slice(0, 10)
                        .map((asset) => {
                          return (
                            <a
                              href={`/products/details/${
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
                                            <DisplayMoney
                                              amount={asset.amount}
                                            />{" "}
                                          </span>
                                        ) : (
                                          <span className="init_amount">
                                            <DisplayMoney
                                              amount={asset.roundedAmount}
                                            />{" "}
                                          </span>
                                        )}
                                        {asset.payment_type == "OUTRIGHT" ? (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.amount * 2}
                                            />
                                          </span>
                                        ) : (
                                          <span className="slashed_price">
                                            <DisplayMoney
                                              amount={asset.roundedAmount * 2}
                                            />
                                          </span>
                                        )}
                                      </div>
                                      {asset.payment_type ==
                                      "OUTRIGHT" ? null : (
                                        <div className="amount_per_day_div">
                                          <DisplayMoney
                                            amount={
                                              asset.amount /
                                              asset.product_duration
                                            }
                                          />
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
                            href={`/products/details/${
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
                                          <DisplayMoney amount={asset.amount} />{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          <DisplayMoney
                                            amount={asset.roundedAmount}
                                          />{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.amount * 2}
                                          />
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.roundedAmount * 2}
                                          />
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        <DisplayMoney
                                          amount={
                                            asset.amount /
                                            asset.product_duration
                                          }
                                        />
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
                href={`/products/categories/Industral Equipments`}
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
                            href={`/products/details/${
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
                                          <DisplayMoney amount={asset.amount} />{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          <DisplayMoney
                                            amount={asset.roundedAmount}
                                          />{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.amount * 2}
                                          />
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.roundedAmount * 2}
                                          />
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        <DisplayMoney
                                          amount={
                                            asset.amount /
                                            asset.product_duration
                                          }
                                        />
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
                            href={`/products/details/${
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
                                          <DisplayMoney amount={asset.amount} />{" "}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          <DisplayMoney
                                            amount={asset.roundedAmount}
                                          />{" "}
                                        </span>
                                      )}
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.amount * 2}
                                          />
                                        </span>
                                      ) : (
                                        <span className="slashed_price">
                                          <DisplayMoney
                                            amount={asset.roundedAmount * 2}
                                          />
                                        </span>
                                      )}
                                    </div>
                                    {asset.payment_type == "OUTRIGHT" ? null : (
                                      <div className="amount_per_day_div">
                                        <DisplayMoney
                                          amount={
                                            asset.amount /
                                            asset.product_duration
                                          }
                                        />
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
      </section>
    </div>
  );
};
const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps1, { countdown })(Market);
