import React, { useState, useEffect } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "../../../css/market_home.css";
import "../../../css/about.css";
import "../../../css/aboutMobile.css";

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
const responsive1 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1320 },
    items: 4,
  },
  desktop2: {
    breakpoint: { max: 1320, min: 990 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 990, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
const HomeUpdate2 = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <section className="h_update_hero_section">
        <div className="container">
          <div className="h_update_hero_area">
            <div className="h_update_hero_area1">
              <div className="h_update_hero_area1_title">
                BETTER WAYS TO BORROW & SAVE MONEY.
              </div>
              <div className="h_update_hero_area1_para">
                Pledge your assets to access interest-free loans while saving up
                to get any desired item.
              </div>{" "}
              <div className="h_update_hero_area1_para_btns">
                <a href="/loan">
                  <button className="h_update_hero_area1_para_btn1">
                    Borrow Now <ArrowRightIcon />
                  </button>
                </a>
                <a href="/savings">
                  <button className="h_update_hero_area1_para_btn2">
                    <ArrowRightIcon /> Save Now
                  </button>
                </a>
              </div>
            </div>
            <div className="h_update_hero_area2">
              <Slider {...settings}>
                <div className="imggss">
                  <div>
                    <img
                      src="/img/sv1.svg"
                      alt=""
                      className="h_update_hero_area_img"
                    />
                  </div>
                </div>
                <div className="imggss">
                  <div>
                    <img
                      src="/img/sv2.svg"
                      alt=""
                      className="h_update_hero_area_img"
                    />
                  </div>
                </div>
                <div className="imggss">
                  <div>
                    <img
                      src="/img/sv3.svg"
                      alt=""
                      className="h_update_hero_area_img"
                    />
                  </div>
                </div>
                <div className="imggss">
                  <div>
                    <img
                      src="/img/sv4.svg"
                      alt=""
                      className="h_update_hero_area_img"
                    />
                  </div>
                </div>
              </Slider>
              <img
                src="/img/img_circles_slide.svg"
                alt=""
                className="circle_slides"
              />
            </div>
          </div>
        </div>
        <img
          src="/img/new_hero_bg_blur.png"
          alt=""
          className="new_hero_bg_blur"
        />
        <img
          src="/img/new_hero_citcle_1.svg"
          alt=""
          className="new_hero_circle1"
        />
        <img
          src="/img/new_hero_circle_2.svg"
          alt=""
          className="new_hero_circle2"
        />
      </section>
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}

      <section className="new_hero_section2">
        <div className="container">
          <div className="new_hero_section2_area">
            <div className="operations_cards_cont" data-aos="fade-up">
              <div className="operations_card1">
                <div className="operations_card1_title">
                  Pledge your personal items to access
                  <span className="hover_color">
                    {" "}
                    interest-free loans{" "}
                  </span>{" "}
                  after evaluation.
                </div>
                <div className="operations_card1_img">
                  <img
                    src="/img/percentage_icon_1.svg"
                    alt=""
                    className="operations_card1_icon1"
                  />
                  <img
                    src="/img/percentage_icon_2.svg"
                    alt=""
                    className="operations_card1_icon2"
                  />
                </div>
              </div>
              <div className="operations_card1">
                <div className="operations_card1_title">
                  Save up to get desired
                  <span className="hover_color"> items </span> over a period of
                  time.
                </div>
                <div className="operations_card1_img">
                  <img
                    src="/img/delivery_icon1.svg"
                    alt=""
                    className="operations_card1_icon1a"
                  />
                  <img
                    src="/img/delivery_icon2.svg"
                    alt=""
                    className="operations_card1_icon2a"
                  />
                </div>
              </div>
              <div className="operations_card1">
                <div className="operations_card1_title">
                  Instant buy off of items after
                  <span className="hover_color"> evaluation.</span>
                </div>
                <div className="operations_card1_img">
                  <img
                    src="/img/assets_icon1.svg"
                    alt=""
                    className="operations_card1_icon1b"
                  />
                  <img
                    src="/img/assets_icon2.svg"
                    alt=""
                    className="operations_card1_icon2b"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/new_left_dots.svg"
          alt=""
          className="new_hero_left_dots"
        />
      </section>
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      <section className="new_home_attributes_section1">
        <div className="container">
          <div className="new_home_attributes_area">
            <div className="new_home_attributes_area1" data-aos="fade-up">
              <div className="new_home_attributes_area1_txt">
                {" "}
                <h4 className="new_home_attributes_area1_txt_head">
                  INSTANT INTEREST FREE LOANS.
                </h4>
                <p className="new_home_attributes_area1_txt_para">
                  Seal the deal in just 3 steps! Fix an appointment with any
                  Egoras branch nearest to you, get a value of your collateral,
                  and finally get your loan sent to you.
                </p>
              </div>
              <a href="/loan" className="new_home_attributes_area1_link">
                Get A loan In Minutes{" "}
                <ArrowForwardIosIcon className="link_arrow" />
              </a>
            </div>{" "}
            <div className="new_home_attributes_area2" data-aos="zoom-in-up">
              <img src="/img/take_loan.svg" alt="" className="take_loan_img" />
            </div>
          </div>
        </div>
      </section>
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      <section className="new_home_attributes_section4">
        <div className="container">
          <div className="build_savings_area">
            <div className="build_savings_area1">
              <div className="compliment_number_title">
                SAVE BETTER. CHOOSE EGORAS.
              </div>
              <div className="compliment_number_para">
                Save to get any desired item with ease.
              </div>
              <a href="/savings">
                <button className="compliment_btn">Start Saving</button>
              </a>
            </div>
            <div className="build_savings_area2">
              <div className="build_savings_area2_conts1">
                <div
                  className="build_savings_area2_conts1_box1"
                  data-aos="fade-up"
                >
                  <ExitToAppIcon className="conts1_box1_contents_icon" />
                  <div className="build_savings_area2_conts1_box1_contents">
                    {" "}
                    <div className="build_savings_area2_conts1_box1_title">
                      Signing up.
                    </div>
                    <div className="build_savings_area2_conts1_box1_para">
                      Easy application process with just your name, phone
                      number, email address.
                    </div>
                  </div>
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div
                  className="build_savings_area2_conts1_box1"
                  data-aos="fade-up"
                >
                  <AccountBalanceWalletIcon className="conts1_box1_contents_icon" />
                  <div className="build_savings_area2_conts1_box1_contents">
                    {" "}
                    <div className="build_savings_area2_conts1_box1_title">
                      Get your desired item(s).
                    </div>
                    <div className="build_savings_area2_conts1_box1_para">
                      Get your desired item at an affordable price.
                    </div>
                  </div>
                </div>
              </div>
              {/* ===== */}
              {/* ===== */}
              <div className="build_savings_area2_conts1">
                <div
                  className="build_savings_area2_conts1_box1"
                  data-aos="fade-up"
                >
                  <ManageAccountsIcon className="conts1_box1_contents_icon" />
                  <div className="build_savings_area2_conts1_box1_contents">
                    {" "}
                    <div className="build_savings_area2_conts1_box1_title">
                      Budget Friendly.
                    </div>
                    <div className="build_savings_area2_conts1_box1_para">
                      Our items are at an affordable price.
                    </div>
                  </div>
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div
                  className="build_savings_area2_conts1_box1"
                  data-aos="fade-up"
                >
                  <GroupsIcon className="conts1_box1_contents_icon" />
                  <div className="build_savings_area2_conts1_box1_contents">
                    {" "}
                    <div className="build_savings_area2_conts1_box1_title">
                      Timely reminder.
                    </div>
                    <div className="build_savings_area2_conts1_box1_para">
                      Get notifications via SMS/Emails about your saving
                      progress.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src="/img/left_line.svg" alt="" class="shape_eggg"></img>
      </section>
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      <section className="new_home_attributes_section1">
        <div className="container">
          <div className="new_home_attributes_area">
            <div className="new_home_attributes_area2" data-aos="zoom-in-up">
              <img
                src="/img/new_save_money_img.svg"
                alt=""
                className="take_loan_img2"
              />
            </div>
            <div className="new_home_attributes_area1" data-aos="fade-up">
              <div className="new_home_attributes_area1_txt">
                {" "}
                <h4 className="new_home_attributes_area1_txt_head">
                  GOAL ORIENTED SAVINGS.
                </h4>
                <p className="new_home_attributes_area1_txt_para">
                  Acquire items with ease through our target savings and get
                  rewarded.
                </p>
              </div>
              <a href="#" className="new_home_attributes_area1_link">
                Start Saving In Minutes{" "}
                <ArrowForwardIosIcon className="link_arrow" />
              </a>
            </div>{" "}
          </div>
        </div>

        <img src="/img/new_abstract_img.svg" alt="" class="shape_eggg2"></img>
      </section>
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      <section className="new_home_attributes_section4">
        <div className="container">
          <div className="new_home_attributes_area rev_me">
            <div className="new_home_attributes_area1" data-aos="fade-up">
              <div className="new_home_attributes_area1_txt">
                {" "}
                <h4 className="new_home_attributes_area1_txt_head">
                  Become A Validator
                </h4>
                <p className="new_home_attributes_area1_txt_para">
                  With Egoras Protocol, you help disburse funds by voting for
                  proposed collaterals.
                </p>
              </div>
              <a href="/validator" className="new_home_attributes_area1_link">
                Back A loan Now <ArrowForwardIosIcon className="link_arrow" />
              </a>
            </div>{" "}
            <div className="new_home_attributes_area2" data-aos="zoom-in-up">
              <img
                src="/img/validated_img.svg"
                alt=""
                className="take_loan_img5"
              />
            </div>
          </div>
        </div>
        {/* <img src="/img/left_line.svg" alt="" class="shape_eggg3"></img> */}
      </section>
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}

      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}

      <section className="gtstoriesSection">
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
              Popular Stories
            </h1>
          </div>
          <div
            className="gtstoriesArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {/* Carousel start==============================
==============================================
============================= */}
            <Carousel
              responsive={responsive1}
              className="storiesCard"
              showDots={false}
              infinite={true}
            >
              <div className="storiesCard1  width_ap">
                <div className="storiesCardVideo">
                  <iframe
                    className="stroriesIframe"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/C42kN47tbQk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Faith, She used Egoras micro-credit to restore her
                    failing farm business.
                  </h5>
                  <h6 className="storiesCardDate">19 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1 width_ap">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/8W9qbS-dZ2c"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Onyiyechi, She used Egoras microcredit to expand
                    her small business
                  </h5>
                  <h6 className="storiesCardDate">19 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1 width_ap">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/uxv9_BfnLVg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Elizabeth, She used Egoras microcredit to expand
                    her grocery business.
                  </h5>
                  <h6 className="storiesCardDate">19 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1 width_ap">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/5g8XkN10ScU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Mrs Chidinma Happiness used Egoras Micro-credit to expand
                    her grocery business
                  </h5>
                  <h6 className="storiesCardDate">1 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1 width_ap">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/ZpLVfX8vfGk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Justina Kelechi, a small business owner that used
                    Egoras microcredit to grow her business
                  </h5>
                  <h6 className="storiesCardDate">1 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1 width_ap">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/xSR_wKvpVAA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mr Chinemerem, An Egoras borrower
                  </h5>
                  <h6 className="storiesCardDate">28 Mar 2021</h6>
                </div>
              </div>
              <div className="storiesCard1 width_ap">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/Wlxx40AImfI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Chidinma Ogu, an Egoras borrower
                  </h5>
                  <h6 className="storiesCardDate">28 Mar 2021</h6>
                </div>
              </div>
              <div className="storiesCard1 width_ap">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/QjmG5Xvq63I"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Faith Akpan, An Egoras borrower
                  </h5>
                  <h6 className="storiesCardDate">28 Mar 2021</h6>
                </div>
              </div>
              <div className="storiesCard1 width_ap">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/RXPPrnrWuss"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    What is Egoras Microfinance Protocol
                  </h5>
                  <h6 className="storiesCardDate">23 Mar 2021</h6>
                </div>
              </div>
              <div className="storiesCard1 width_ap">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/a_ehqUZGyoc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Mrs Gloria Omoreke just doubled her profits with Egoras
                    Micro-credit
                  </h5>
                  <h6 className="storiesCardDate">23 Mar 2021</h6>
                </div>
              </div>
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
            <div className="carouselLinkStories">
              <a
                href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ/videos"
                target="_blank"
                className="carouselLinkbtn"
              >
                View All
              </a>
            </div>
          </div>
        </div>

        <img src="/img/video-dots.svg" alt="" className="gtvidDots" />
      </section>
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      <section className="featured_section">
        <div className="container">
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
    </div>
  );
};

export default HomeUpdate2;
