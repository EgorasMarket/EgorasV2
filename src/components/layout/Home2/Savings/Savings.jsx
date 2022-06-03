import React, { useState, useEffect } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Carousel from "react-multi-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import ReactCardCarousel from "react-card-carousel";
import TwitterIcon from "@mui/icons-material/Twitter";
import { getProductByCat } from "../../../../actions/Products";
// import TypeIt from "typeit-react";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import NumberFormat from "react-number-format";
import "../../../../css/savings.css";
import "../../../../css/market_home.css";
import { numberWithCommas } from "../../../../static";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
const responsive6 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
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

const Savings = () => {
  // const Savings = ({ getProductByCat }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //   var elementoo = document.getElementById("element");
  // //   const paused = elementoo.style.animationPlayState === "paused";

  //   const running = elementoo.style.animationPlayState === "running";

  const [activeBg, setActiveBg] = useState("Target");

  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };
  const LoopMe = () => {
    var myStringArray = ["Target", "Instant", "Payment", "Global"];
    var arrayLength = myStringArray.length;
    for (var i = 0; i < arrayLength; i++) {
      console.log(myStringArray[i]);
      // setActiveBg(myStringArray[i]);
      //Do something
    }
  };
  useEffect(() => {
    var myArr = ["Target", "Instant", "Payment", "Global"];
    var arr = ["Target", "Instant", "Payment", "Global"];
    var index = 0;
    setInterval(function () {
      var looped = arr[index++ % arr.length];
      // console.log(looped);
      setActiveBg(looped);
    }, 5000);
  }, []);

  const CARD_STYLE = [
    {
      height: "300px",
      width: "300px",
      padding: "2em",
      paddingTop: "7em",
      textAlign: "left",
      background: "#fff",
      color: "#000",
      fontSize: "12px",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      position: "relative",
      border: "solid",
      borderWidth: "3px",
      borderColor: "#6e957b",
    },
  ];

  const reviews = [
    {
      word: " It always feels good and less stressful when you are using a site with less pop up ads, good graphics and made with simplicity, I gotta give it to the developers of Egoras platform #egorasV2 ",
      image: "/img/profilepic.jpg",
      name: "@iamkingmonye",
    },
    {
      word: "So, I took a quick tour through the @EgorasmarketV2 platform and In all honesty there is very particular attention to detail. Fonts are legible, sections are carefully separated and I had no troubles during navigation. this is a proper platform and I must say hats off #egorasV2",
      image: "/img/profilepic.jpg",
      name: "@mister_ade5",
    },
    {
      word: " The App's interface seems to be user-friendly coupled with the offer they give. Tho I'm still getting familiarized with the functionalities of the platform, I did have a good experience navigating my way through and yes I was impressed  they maintained the same color. #Egorasv2",
      image: "/img/profilepic.jpg",
      name: "@vibes__N",
    },
    {
      word: "Wow! I’ve been extremely impressed by how fluid this website is, other platforms should learn how to build a proper website like @egorasmarket. Kudos, Go Egoras! #egorasV2",
      image: "/img/profilepic.jpg",
      name: "@theamandachinda",
    },
    {
      word: "Upon entering the platform, I had my reservations, but in less than no time, I was already having a hitch free tour. @EgorasmarketI like how the partitions are made, independent of each other and each button sure has a function, made navigation easy and lovable. #egorasV2 ",
      image: "/img/profilepic.jpg",
      name: "@datchuguy",
    },
    {
      word: "Browsing through the new Egoras website was a really refreshing experience. The adoption of modern design language has made the entire experience soothing. relevant information has been smartly laid out,so that clients don’t miss out on valuable details. Top notch 💯💯#egorasV2",
      image: "/img/profilepic.jpg",
      name: "@black_bhoy_",
    },
  ];
  return (
    <div style={{ overflow: "hidden" }}>
      <section className="savings_section">
        <div className="container">
          <div className="savings_area">
            <div className="savings_area1">
              <div className="savings_area1_title">Smart Savings.</div>
              <div className="savings_area1_para">
                Get to acquire your desired items with ease through our smart
                savings plan.
              </div>
              <a href="/login">
                <button className="savings_area_btn">Start saving</button>
              </a>
            </div>
            <div className="savings_area2">
              <img
                src="/img/save_app_phones.png"
                alt=""
                className="save_app_phone"
              />
            </div>
          </div>
        </div>
        <img
          src="/img/left_savings_lines.svg"
          alt=""
          className="left_savings_icon"
        />
      </section>
      {/* ============ */}
      {/* ============ */}
      {/* ============ */}
      {/* ============ */}
      <section className="section_writeup_gallery">
        <div className="container">
          <div
            className="gttitleLine"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="gthowItWorksTitle"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="gttitle" data-aos="fade-up" data-aos-duration="3000">
              Smart Savings Features.
            </h1>
            <p className="smart_savings_txt">
              Egoras smart savings provides every tool you need to optimize your
              savings potential.
            </p>
          </div>
          <div className="section_writeup_divs">
            <div className="section_writeup_div_controls">
              <li
                id="Target"
                className={
                  activeBg == "Target"
                    ? "change_section change_section_active"
                    : "change_section"
                }
                onClick={changeBg}
              >
                Target savings
              </li>
              <li
                id="Instant"
                className={
                  activeBg == "Instant"
                    ? "change_section change_section_active"
                    : "change_section"
                }
                onClick={changeBg}
              >
                Outright Buy
              </li>
              <li
                id="Payment"
                className={
                  activeBg == "Payment"
                    ? "change_section change_section_active"
                    : "change_section"
                }
                onClick={changeBg}
              >
                Payment Plan
              </li>
              <li
                id="Global"
                className={
                  activeBg == "Global"
                    ? "change_section change_section_active"
                    : "change_section"
                }
                onClick={changeBg}
              >
                Global access
              </li>
            </div>
            <div className="section_writeup_div_body">
              {" "}
              {activeBg == "Target" ? (
                <div
                  className="new_home_attributes_area reverse"
                  id="loop_me"
                  data-aos="fade-down"
                >
                  <div className="new_home_attributes_area1 anima1">
                    <div className="new_home_attributes_area1_txt">
                      {" "}
                      <h4 className="new_home_attributes_area1_txt_head bigger_head">
                        Targeted savings
                      </h4>
                      <p className="new_home_attributes_area1_txt_para">
                        Save over a given period of time to acquire desired
                        items.
                      </p>
                    </div>
                  </div>{" "}
                  <div className="new_home_attributes_area2 anima">
                    <img
                      src="/img/targeted_savings_img.svg"
                      alt=""
                      className="take_loan_img5 bigger_img"
                    />
                  </div>
                </div>
              ) : activeBg == "Instant" ? (
                <div
                  className="new_home_attributes_area reverse"
                  id="loop_me"
                  data-aos="fade-down"
                >
                  <div className="new_home_attributes_area1 anima1">
                    <div className="new_home_attributes_area1_txt">
                      {" "}
                      <h4 className="new_home_attributes_area1_txt_head bigger_head">
                        Outright Buy
                      </h4>
                      <p className="new_home_attributes_area1_txt_para">
                        Make a one-time payment and get your desired item.
                      </p>
                    </div>
                  </div>{" "}
                  <div className="new_home_attributes_area2 anima">
                    <img
                      src="/img/instant_buy_off.svg"
                      alt=""
                      className="take_loan_img5 bigger_img"
                    />
                  </div>
                </div>
              ) : activeBg == "Payment" ? (
                <div
                  className="new_home_attributes_area reverse"
                  id="loop_me"
                  data-aos="fade-down"
                >
                  <div className="new_home_attributes_area1 anima1">
                    <div className="new_home_attributes_area1_txt">
                      {" "}
                      <h4 className="new_home_attributes_area1_txt_head bigger_head">
                        Payment Plan
                      </h4>
                      <p className="new_home_attributes_area1_txt_para">
                        Make payments online or visit any Egoras branch close to
                        you.
                      </p>
                    </div>
                  </div>{" "}
                  <div className="new_home_attributes_area2 anima">
                    <img
                      src="/img/onlinePayment_icon.svg"
                      alt=""
                      className="take_loan_img5 bigger_img"
                    />
                  </div>
                </div>
              ) : activeBg == "Global" ? (
                <div
                  className="new_home_attributes_area reverse"
                  id="loop_me"
                  data-aos="fade-down"
                >
                  <div className="new_home_attributes_area1 anima1">
                    <div className="new_home_attributes_area1_txt">
                      {" "}
                      <h4 className="new_home_attributes_area1_txt_head bigger_head">
                        Global access
                      </h4>
                      <p className="new_home_attributes_area1_txt_para">
                        Save to acquire items and get it delivered it to you
                        regardless of your location.
                      </p>
                    </div>
                  </div>{" "}
                  <div className="new_home_attributes_area2 anima">
                    <img
                      src="/img/deliver_across_globe.svg"
                      alt=""
                      className="take_loan_img5 bigger_img"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}

      {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}

      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* =================================================================================================================================================================================================================================================================== */}

      {/*  Projects Section start*/}

      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}
      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* ===== */}
      {/* ===== */}
      {/* ===== */}
      {/* ===== */}
      {/* ===== */}
      <section className="users_compliment_section">
        <div className="container">
          <div
            className="gttitleLine"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="gthowItWorksTitle"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="gttitle" data-aos="fade-up" data-aos-duration="3000">
              User Reviews.
            </h1>
          </div>
          <div className="users_compliment_area">
            <div className="container_style">
              <ReactCardCarousel
                position={"relative"}
                autoplay={true}
                autoplay_speed={10000}
                spread={"wide"}
                className="relate_div"
              >
                {/* <div className="wrap_them"> */}
                {reviews.map((rev) => (
                  <div className="card_compliment_style">
                    <div className="reviewer_img">
                      <TwitterIcon className="twitter_social_icon" />
                    </div>
                    <div className="review_name">{rev.name}</div>

                    <div className="review_txt">{rev.word}</div>
                  </div>
                ))}
                {/* <div style={CARD_STYLE[0]}>First Card</div>
                <div style={CARD_STYLE[0]}>Second Card</div>
                <div style={CARD_STYLE[0]}>Third Card</div>
                <div style={CARD_STYLE[0]}>Fourth Card</div>
                <div style={CARD_STYLE[0]}>Fifth Card</div> */}
                {/* </div> */}
              </ReactCardCarousel>
            </div>

            {/* <div className="users_compliment_number">
              <div className="compliment_number_title">
                Over 2billion naira in loans.
              </div>
              <div className="compliment_number_para">
                Since launching in 2020, over 3,000,000 people have used Egoras
                to manage their money better, avoid over-spending and be more
                accountable.
              </div>
              <a href="/signup">
                <button className="compliment_btn">
                  Create a free account
                </button>
              </a>
            </div> */}
          </div>
        </div>
        <img
          src="/img/right_savings_line_icon.svg"
          alt=""
          className="right_savings_icon"
        />
      </section>
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      <section className="featured_section">
        <div className="container">
          <div
            className="gttitleLine"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="gthowItWorksTitle"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="gttitle" data-aos="fade-up" data-aos-duration="3000">
              Featured In.
            </h1>
          </div>
          <div className="gtstoriesArea">
            {/* Carousel start==============================
==============================================
============================= */}
            <Carousel
              responsive={responsive}
              className="partnerCards featured_logos"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={3000}
              infinite={true}
              draggable={true}
              swipeable={true}
            >
              <div className="partnerLogo1">
                <span className="partnerLink">
                  {" "}
                  <img
                    src="/img/coin-telegraph.svg"
                    alt=""
                    className="partnerlog"
                  />
                </span>
              </div>
              <div className="partnerLogo1">
                <span className="partnerLink">
                  {" "}
                  <img
                    src="/img/YAHOOFINANCE.svg"
                    alt=""
                    className="partnerlog"
                  />
                </span>
              </div>
              <div className="partnerLogo1">
                <span className="partnerLink">
                  {" "}
                  <img src="/img/NEWSBTC.svg" alt="" className="partnerlog" />
                </span>
              </div>
              <div className="partnerLogo1">
                <span className="partnerLink">
                  {" "}
                  <img src="/img/APNEWS.svg" alt="" className="partnerlog" />
                </span>
              </div>
              <div className="partnerLogo1">
                <span className="partnerLink">
                  {" "}
                  <img
                    src="/img/INDEPENDENT.svg"
                    alt=""
                    className="partnerlog"
                  />
                </span>
              </div>
              <div className="partnerLogo1">
                <span className="partnerLink">
                  {" "}
                  <img
                    src="/img/THEGUARDIAN.svg"
                    alt=""
                    className="partnerlog"
                  />
                </span>
              </div>
              <div className="partnerLogo1">
                <span className="partnerLink">
                  {" "}
                  <img
                    src="/img/NAIRAMETRICS.svg"
                    alt=""
                    className="partnerlog"
                  />
                </span>
              </div>
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="gtexploreSection">
        <div className="container">
          <div
            className="gtexploreArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="gtexploretxts">
              <h1
                className="gtgood"
                data-aos="fade-down"
                data-aos-duration="3000"
              >
                Sounds good?
              </h1>
              <div className="gtexploreLink">
                <a href="/dashboard" className="gtexploreLoansbtn">
                  Start Saving
                </a>
              </div>
            </div>

            <img src="/img/explore-dots.svg" alt="" className="gtexploreDots" />
            <img
              src="/img/explore-shape.svg"
              alt=""
              className="gtexploreShape"
            />
          </div>
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
    </div>
  );
};

export default Savings;

// export default connect(null, { getProductByCat })(Savings);
