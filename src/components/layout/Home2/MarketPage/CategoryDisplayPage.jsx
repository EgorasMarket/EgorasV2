import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SearchIcon from "@mui/icons-material/Search";
import DisplayMoney from "../../../DisplayMoney";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../Dashboard/DashboardStyles/category.css";
import "./market.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import axios from "axios";
import { connect } from "react-redux";
import "../Dashboard/DashboardPages/CategoryPages/the.css";
import { PaginatedItems } from "../AllProductsDisplayPage/AllProductsDisplayPage";
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

const CategoryDisplayPage = ({ match }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  // const [brandCheck, setBrandCheck] = useState(null);
  const [brandCheck, setBrandCheck] = useState("");
  const [made, setMade] = useState([]);
  const [check, setCheck] = useState("");
  // const [brandCheckArray, setBrandCheckArray] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchResults2, setSearchResults2] = useState([]);
  const [brands, setBrands] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

  const text = "No products found yet.";

  const [seeAll, setSeeAll] = useState([]);

  const LinkCategory = match.params.category;
  // })

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // useEffect(() => {
  //   CurrencyConverter.rates().then((response) => {
  //     console.log(response); //or do something else
  //   });
  // });
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleFilterClick = (event) => {
    setBrandCheck(event.target.value);

    if (brandCheck === "") {
      setBrandCheck(event.target.value);
      // setCheck(event.target.value);

      console.log(`checked ${event.target.value} box`);
      console.log(event.target.checked);
    } else if (brandCheck === event.target.value) {
      setBrandCheck("");
      // setCheck("");
      console.log("no brand checked here");
      console.log(event.target.checked);
    }
  };

  useEffect(() => {
    axios
      .get(
        api_url2 +
          "/v1/product/retrieve/products/byId/" +
          match.params.category,
        null,
        config
      )
      .then((data) => {
        //console.log("hello mr kingsley");
        console.log(data.data.data, "samuel_Chuks");
        console.log(data, "samuel_Chuksyyyyy");

        setSeeAll(data.data.data);
        const feed = data.data.data.product_image;

        // /setGoods(data.data.data)
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    const results = made.filter(
      (name) => name.sales_type
      // .toString()
      // .toLowerCase()
      // .includes(brandCheck.toLowerCase())
      // .includes(brandCheck != null && brandCheck.toLowerCase())
    );
    setSeeAll(results);
  }, []);

  useEffect(() => {
    const results = seeAll.filter(
      (name) => name.sales_type.toString().toLowerCase()
      // .includes(searchTerm.toLowerCase())
    );
    setSearchResults2(results);
  }, [searchTerm2, seeAll]);
  useEffect(() => {
    const results = seeAll.filter(
      (name) =>
        name.product_brand
          .toString()
          .toLowerCase()
          .includes(brandCheck.toLowerCase())
      // .includes(brandCheck != null && brandCheck.toLowerCase())
    );
    setFilteredArray(results);
  }, [seeAll, brandCheck]);
  useEffect(() => {
    axios
      .get(
        api_url2 + "/v1/product/retrieve/brands/by/" + match.params.category,
        null,
        config
      )
      .then((data) => {
        //console.log("hello mr kingsley");
        console.log(data.data.data, "samuel_Chuks");

        setBrands(data.data.data);
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  }, []);
  useEffect(() => {
    const results = brands.filter((name) =>
      name.brand.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, brands]);
  return (
    <div>
      <section className="market_page_section">
        <div className="custom_container">
          <div className="categories_page_area categories_page_area_non_dash ">
            {LinkCategory === "Phones & Tablet" ? (
              <div className="cat_banner_heading">
                Connect Your World
                <img
                  src="/img/categorypageBanners/3m.jpg"
                  alt="..."
                  className="refurb_img_bann"
                />
              </div>
            ) : null}
            {LinkCategory === "Fashion" ? (
              <div className="cat_banner_heading">
                Connect Your World
                <img
                  src="/img/categorypageBanners/Web Banners 1 (1).jpg"
                  alt="..."
                  className="refurb_img_bann"
                />
              </div>
            ) : null}
            {LinkCategory === "Home Appliances" ? (
              <div className="cat_banner_heading">
                Connect Your World
                <img
                  src="/img/categorypageBanners/Web Banners 1 (1).jpg"
                  alt="..."
                  className="refurb_img_bann"
                />
              </div>
            ) : null}
            {LinkCategory === "Electronics" ? (
              <div className="cat_banner_heading">
                Electronics
                <img
                  src="/img/categorypageBanners/2m.jpg"
                  alt="..."
                  className="refurb_img_bann"
                />
              </div>
            ) : null}
            {LinkCategory === "Computer & Accessories" ? (
              <div className="cat_banner_heading">
                Computer & accessories
                <img
                  src="/img/categorypageBanners/1m.jpg"
                  alt="..."
                  className="refurb_img_bann"
                />
              </div>
            ) : null}

            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}

            <div className="products_display_body pad_bot">
              <div className="products_display_body_heading">
                {match.params.category}
                <dispatchEvent></dispatchEvent>
              </div>
              <div className=".products_display_body_conts_pad">
                {seeAll.length <= 0 ? (
                  <NoDataFoundComponent text={text} />
                ) : (
                  <>
                    <div className="show_prods_on_mobile">
                      {seeAll.slice(0, 10).map((asset, index5) => {
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
                                ) : asset.sales_type == "AWOOF" ? (
                                  <div className="out_right_install_tag">
                                    <button
                                      className="out_right_install_tag_btn"
                                      style={{
                                        background: "#000",
                                        borderColor: "#000",
                                      }}
                                    >
                                      Awoof
                                    </button>
                                  </div>
                                ) : asset.payment_type == "INSTALLMENT" ? (
                                  <div className="out_right_install_tag">
                                    <button className="out_right_install_tag_btn">
                                      Savings
                                    </button>
                                  </div>
                                ) : null}
                                <div className="storeTiles_storeTileBottomContainer__2sWHh">
                                  <div className="asset_name">
                                    {asset.product_name}
                                  </div>
                                  <div class="asset_prices_div">
                                    <div className="asset_title">
                                      {asset.payment_type == "OUTRIGHT" ? (
                                        <span className="init_amount">
                                          <DisplayMoney amount={asset.amount} />
                                          {/* ₦{numberWithCommas(asset.amount)}{" "} */}
                                        </span>
                                      ) : (
                                        <span className="init_amount">
                                          <DisplayMoney
                                            amount={asset.roundedAmount}
                                          />
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
                                          / perday
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

                    {LinkCategory == "Awoof" ? (
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
                        {seeAll
                          .filter((person) => person.sales_type == "AWOOF")
                          .map((asset, index5) => {
                            return (
                              <a
                                href={`/products/details/${
                                  asset.id
                                }/${asset.product_name.replace(/\s+/g, "-")}`}
                                key={index5.toString()}
                              >
                                <li className="carous_list no_marg ">
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
                                    {asset.payment_type == "OUTRIGHT" &&
                                    asset.sales_type == "SHOWROOM" ? (
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
                                    ) : asset.payment_type == "OUTRIGHT" &&
                                      asset.sales_type == "AWOOF" ? (
                                      <div className="out_right_install_tag">
                                        <button
                                          className="out_right_install_tag_btn"
                                          style={{
                                            background: "#000",
                                            borderColor: "#000",
                                          }}
                                        >
                                          Awoof
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
                                              />
                                            </span>
                                          ) : (
                                            <span className="init_amount">
                                              <DisplayMoney
                                                amount={asset.roundedAmount}
                                              />
                                              {/* ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "} */}
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
                                            {/* ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )} */}
                                            <DisplayMoney
                                              amount={
                                                asset.amount /
                                                asset.product_duration
                                              }
                                            />
                                            <span className="per_day_symbol">
                                              {" "}
                                              / perday
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
                    ) : (
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
                        {seeAll
                          .filter((person) => person.sales_type == "SHOWROOM")
                          .map((asset, index5) => {
                            return (
                              <a
                                href={`/products/details/${
                                  asset.id
                                }/${asset.product_name.replace(/\s+/g, "-")}`}
                                key={index5.toString()}
                              >
                                <li className="carous_list no_marg ">
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
                                    {asset.payment_type == "OUTRIGHT" &&
                                    asset.sales_type == "SHOWROOM" ? (
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
                                    ) : asset.payment_type == "OUTRIGHT" &&
                                      asset.sales_type == "AWOOF" ? (
                                      <div className="out_right_install_tag">
                                        <button
                                          className="out_right_install_tag_btn"
                                          style={{
                                            background: "#000",
                                            borderColor: "#000",
                                          }}
                                        >
                                          Awoof
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
                                              />
                                            </span>
                                          ) : (
                                            <span className="init_amount">
                                              <DisplayMoney
                                                amount={asset.roundedAmount}
                                              />
                                              {/* ₦
                                          {numberWithCommas(
                                            asset.roundedAmount
                                          )}{" "} */}
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
                                            {/* ₦
                                        {numberWithCommas(
                                          (
                                            asset.amount /
                                            asset.product_duration
                                          ).toFixed()
                                        )} */}
                                            <DisplayMoney
                                              amount={
                                                asset.amount /
                                                asset.product_duration
                                              }
                                            />
                                            <span className="per_day_symbol">
                                              {" "}
                                              / perday
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
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Carousel end==============================
==============================================
============================= */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}

            {LinkCategory === "Phones & Tablet" ? (
              <div className="cat_banner_group">
                <div className="cat_banner_group1">
                  <img
                    src="/img/categorypageBanners/Web Banners c.jpg"
                    // src={api_url2 + '/'+ seeAll[0].product_image}
                    alt=""
                    className="img_gr1"
                  />
                </div>
                <div className="cat_banner_group1">
                  <img
                    src="/img/categorypageBanners/Web Banners d.jpg"
                    alt=""
                    className="img_gr1"
                  />
                </div>
              </div>
            ) : null}
            {LinkCategory === "Electronics" ? (
              <div className="cat_banner_group">
                <div className="cat_banner_group1">
                  <img
                    src="/img/categorypageBanners/Web Banners e.jpg"
                    // src={api_url2 + '/'+ seeAll[0].product_image}
                    alt=""
                    className="img_gr1"
                  />
                </div>
                <div className="cat_banner_group1">
                  <img
                    src="/img/categorypageBanners/Web Banners f.jpg"
                    alt=""
                    className="img_gr1"
                  />
                </div>
              </div>
            ) : null}
            {LinkCategory === "Computer & Accessories" ? (
              <div className="cat_banner_group">
                <div className="cat_banner_group1">
                  <img
                    src="/img/categorypageBanners/Web Banners a (1).jpg"
                    // src={api_url2 + '/'+ seeAll[0].product_image}
                    alt=""
                    className="img_gr1"
                  />
                </div>
                <div className="cat_banner_group1">
                  <img
                    src="/img/categorypageBanners/Web Banners b (1).jpg"
                    alt=""
                    className="img_gr1"
                  />
                </div>
              </div>
            ) : null}
            {LinkCategory === "Fashion" ? (
              <div className="cat_banner_group">
                <div className="cat_banner_group1">
                  <img
                    src="/img/categorypageBanners/Web Banners g.jpg"
                    // src={api_url2 + '/'+ seeAll[0].product_image}
                    alt=""
                    className="img_gr1"
                  />
                </div>
                <div className="cat_banner_group1">
                  <img
                    src="/img/categorypageBanners/Web Banners h.jpg"
                    alt=""
                    className="img_gr1"
                  />
                </div>
              </div>
            ) : null}

            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}

            <div className="pagination_product_card_body">
              <div className="filter_products_body">
                <div className="filter_products_body_div">
                  <div className="cat_select_div2_head">
                    Brand{" "}
                    <div className="brand_search_area">
                      <input
                        type="search"
                        name="search"
                        id="searchBrand"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search_brand"
                      />
                      <SearchIcon className="search_icon" />
                    </div>
                  </div>
                  <div className="cat_select_div2_body">
                    {searchResults.map((brand) => (
                      <div className="select_brand_check_box" key={brand.id}>
                        <label class="label_cont">
                          {brand.brand}
                          <input
                            type="radio"
                            name="Apple"
                            //   id="apple"
                            className="brand_check_input"
                            key={brand.id}
                            value={brand.brand}
                            onClick={handleFilterClick}
                            checked={brandCheck === brand.brand ? true : false}
                            // checked={check}
                            // checked="true"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pagination_body">
                <PaginatedItems
                  // brandCheck={brandCheck}
                  itemsPerPage={40}
                  LinkedCategory={LinkCategory}
                  DisplayMoney={DisplayMoney}
                  items={filteredArray}
                  searchVal={match.params.category}
                  totalItems={filteredArray.length}
                />
              </div>
            </div>
          </div>
          {/* <p>
            {" "}
            <DisplayMoney amount="20000" />
          </p> */}
        </div>
      </section>
    </div>
  );
};

CategoryDisplayPage.propsTypes = {};

const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps1)(CategoryDisplayPage);
