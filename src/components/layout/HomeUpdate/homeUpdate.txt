import React, { useState, useEffect } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Slider from "react-slick";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CloseIcon from "@mui/icons-material/Close";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
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
const responsive3 = {
  desktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};
const HomeUpdate = () => {
  const [aboutVideoModal, setAboutVideoModal] = useState(false);

  const toggleAboutVideoModal = () => {
    if (aboutVideoModal === true) {
      setAboutVideoModal(false);
    } else if (aboutVideoModal === false) {
      setAboutVideoModal(true);
    }
  };
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
          <Carousel
            responsive={responsive3}
            className="home_page_carousel"
            showDots={true}
            //   infinite={false}
            autoPlay={true}
            autoPlaySpeed={12000}
            infinite={true}
            draggable={true}
            swipeable={true}
          >
            <div className="h_update_hero_area">
              <div className="h_update_hero_area1">
                <div className="h_update_hero_area1_title">
                  BETTER WAYS TO BORROW & SAVE MONEY.
                </div>
                <div className="h_update_hero_area1_para">
                  Pledge your assets to access interest-free loans while saving
                  up to get any desired item.
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
            <div className="h_update_hero_area">
              <div className="h_update_hero_area1">
                <div className="h_update_hero_area1_title">
                  BETTER WAYS TO BORROW & SAVE MONEY.
                </div>
                <div className="h_update_hero_area1_para">
                  Pledge your assets to access interest-free loans while saving
                  up to get any desired item.
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
            <div className="h_update_hero_area">
              <div className="h_update_hero_area1">
                <div className="h_update_hero_area1_title">
                  BETTER WAYS TO BORROW & SAVE MONEY.
                </div>
                <div className="h_update_hero_area1_para">
                  Pledge your assets to access interest-free loans while saving
                  up to get any desired item.
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
            <div className="h_update_hero_area">
              <div className="h_update_hero_area1">
                <div className="h_update_hero_area1_title">
                  BETTER WAYS TO BORROW & SAVE MONEY.
                </div>
                <div className="h_update_hero_area1_para">
                  Pledge your assets to access interest-free loans while saving
                  up to get any desired item.
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
            <div className="h_update_hero_area">
              <div className="h_update_hero_area1">
                <div className="h_update_hero_area1_title">
                  BETTER WAYS TO BORROW & SAVE MONEY.
                </div>
                <div className="h_update_hero_area1_para">
                  Pledge your assets to access interest-free loans while saving
                  up to get any desired item.
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
          </Carousel>
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

      <section className="about_video_section">
        <div className="container">
          {aboutVideoModal === true ? (
            <div className="about_video_div">
              <div className="container">
                <CloseIcon
                  className="close_About_video_modal"
                  onClick={toggleAboutVideoModal}
                />
                <div className="about_video_player">
                  <iframe
                    src="https://player.vimeo.com/video/703222250?h=f19a710398&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                    }}
                    // title="EGORAS TRILLER .MP4"
                  />
                </div>
              </div>
            </div>
          ) : null}

          <div className="aboutVideo_header_cont">
            <div className="about_video_header_title">Egoras Triller</div>
            <div className="about_video_header_txt">
              Watch the Terra documentary about the decentralized money at the
              heart of an open financial ecosystem
            </div>
          </div>
          <div className="about_video_thumbnail_cont">
            <div className="about_video_thumbnail_cont_bg">
              <img
                src="/img/logoVideoThumbnail.svg"
                alt=""
                className="thumbnail_img"
              />
              <img
                src="/img/play_thumbnail_btn.svg"
                alt=""
                className="thumbnail_btn"
                onClick={toggleAboutVideoModal}
              />
            </div>
          </div>
          {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
        </div>
      </section>

      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      <section className="quality_standards_section">
        <div className="container">
          <div className="quality_standards_cont">
            <div className="quality_standards_cont1">
              <div className="quality_standards_cont1Txt">
                Welcome to Back Market, the refurbished (super) market.
              </div>
              <button className="qualityStandard_btn">
                Our quality standards
              </button>
            </div>
            <div className="quality_standards_cont2">
              <div className="quality_standards_cont2_card1">
                <LocalOfferIcon className="quality_standards_cont2_card1_icon" />

                <div className="quality_standards_cont2_card1_text_cont">
                  <div className="quality_standards_cont2_card1_text_title">
                    Best offer available
                  </div>
                  <div className="quality_standards_cont2_card1_text_para">
                    Selected by our price-quality algorithm.
                  </div>
                </div>
              </div>
              <div className="quality_standards_cont2_card1">
                <WorkspacePremiumIcon className="quality_standards_cont2_card1_icon" />

                <div className="quality_standards_cont2_card1_text_cont">
                  <div className="quality_standards_cont2_card1_text_title">
                    Guaranteed quality
                  </div>
                  <div className="quality_standards_cont2_card1_text_para">
                    Our partner refurbishers are continuously monitored.
                  </div>
                </div>
              </div>
              <div className="quality_standards_cont2_card1">
                <MiscellaneousServicesIcon className="quality_standards_cont2_card1_icon" />

                <div className="quality_standards_cont2_card1_text_cont">
                  <div className="quality_standards_cont2_card1_text_title">
                    Amazing service
                  </div>
                  <div className="quality_standards_cont2_card1_text_para">
                    Secure shopping experience.
                  </div>
                </div>
              </div>
              <div className="quality_standards_cont2_card1">
                <ThumbUpAltIcon className="quality_standards_cont2_card1_icon" />

                <div className="quality_standards_cont2_card1_text_cont">
                  <div className="quality_standards_cont2_card1_text_title">
                    Positive impact
                  </div>
                  <div className="quality_standards_cont2_card1_text_para">
                    Buying renewed keeps e-waste out of landfills.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/img/video-dots.svg"
          alt=""
          className="quality_standards_dots"
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
      {/* <section className="new_hero_section2">
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
      </section> */}
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
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}

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

export default HomeUpdate;
