import React, { useState, useEffect, useCallback } from "react";
import PaymentsIcon from "@mui/icons-material/Payments";
import Carousel from "react-multi-carousel";
import "../../../../css/itemsDetailsPage.css";
import axios from "axios";
import { ProductImageCarousel } from "../../Home2/item_details_page/ProductImageCarousel";
import "../../Home2/Dashboard/DashboardStyles/dashboardCart.css";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CallIcon from "@mui/icons-material/Call";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { ProductDescription } from "./productDest";
import Dashboard_Checkout_Page from "../../Home2/Dashboard/DashboardPages/Dashboard_Checkout_Page";

// import CheckoutModalComponent from "./CheckoutModalComponent";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Accordion from "./accord";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";

import { numberWithCommas } from "../../../../static";

const InstallmentComponent = ({
  product_duration,
  amount,
  percentage,
  initial_deposit,
  roundedAmount,
  paymentperweek,
  numberWithCommas,
}) => {
  return (
    <div>
      <div className="amount_item_div">
        ₦{numberWithCommas(parseInt(paymentperweek).toFixed())}{" "}
        <span className="per_day"> / per-day</span>
      </div>

      <div className="amount_item_div total_amount">
        <span className="sub_total_txt">Price: </span> ₦
        {numberWithCommas(amount)}
        <span className="per_day"></span>
      </div>

      {/* <hr className="horizontal_rule" /> */}
      {/* ------- */}

      <div className="max_dura">
        <p className="no_margg">Savings Max Duration:</p>

        <div className="days_left_numb">
          <p className="no_margg">{product_duration}day(s)</p>
        </div>
      </div>
    </div>
  );
};

const OutrightComponent = ({
  product_duration,
  rounded,
  percentage,
  initial_deposit,
  roundedAmount,
  numberWithCommas,
}) => {
  return (
    <div>
      <div className="amount_item_div total_amount">
        <span className="sub_total_txt">Price: </span> ₦
        {numberWithCommas(parseInt(roundedAmount).toFixed())}
      </div>
      <div className="max_dura">
        <div className="days_left_numb">
          <p className="no_margg">Outright Buy</p>
        </div>
      </div>

      {/* <hr className="horizontal_rule" /> */}
      {/* ------- */}
    </div>
  );
};

const ItemDetailComponent = ({
  payload,
  card,
  user_id,
  CloseModal,
  specification,
  OpenModal,
  openCheckoutModal,
}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [modal, setModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [UID, setUserId] = useState(user_id);
  const [term, setTerm] = useState([]);
  const [activeBg, setActiveBg] = useState("features");
  const [moreImg, setMoreImg] = useState([]);
  const [outrightProducts, setOutrightProducts] = useState([]);
  const [categ, setcate] = useState([]);
  const [food, setFood] = useState([]);
  //destructure the payload and return values
  const {
    amount,
    percentage,
    product_brand,
    product_category_code,
    product_details,
    product_duration,
    product_id,
    product_image,
    more_image,
    product_name,
    product_specifications,
    product_type,
    initial_deposit,
    paymentperweek,
    payment_type,
    days_left,
    no_of_days,
    no_of_days_paid,
    startDate,
    endDate,
  } = payload;

  useEffect(() => {
    if (more_image != null) {
      let splited = JSON.parse(more_image);
      setMoreImg(splited);
      // console.log(more_image.split(","));
      // console.log(JSON.parse(more_image));
    }
  }, [more_image]);

  const openDetailsModal = () => {
    setDetailsModal(true);
  };

  const closeDetailModal = () => {
    setDetailsModal(false);
  };
  // let spec = [product_specifications];
  // spec.push(product_specifications)
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
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
  const checkProductType = (payment_type) => {
    const outrightScenario = () => {};
    const installmentScenario = () => {};
    switch (payment_type) {
      case "OUTRIGHT":
        outrightScenario();
        break;
      case "INSTALLMENT":
        installmentScenario();
        break;
    }
  };

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/outright/products", null, config)
      .then((data) => {
        //console.log(data.data.data, "phlip22278");

        setOutrightProducts(data.data.data);
        // setCaping({
        //   code3:data.data.data.product_category_desc
        // })
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/category", null, config)
      .then((data) => {
        //console.log(data.data.data, "Anthonia");

        // const pad = data.data.data[0].product_category_code;

        setcate(data.data.data);

        setFood(data.data.data.product_category_code);

        console.log(food, " water is good for cooking");

        // setOutrightProducts(data.data.data);
        // setCaping({
        //   code3:data.data.data.product_category_desc
        // })
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    checkProductType(product_type);

    axios
      .get(api_url2 + "/v1/product/retrieve/products", null, config)
      .then((data) => {
        //console.log(data.data.data, "item detail component ");

        setTerm(data.data.data);

        // setTerm(data.data.data)
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);
  const data1 = api_url2 + "/" + product_image;
  const data = [
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
  ];

  // {
  //   //console.log(spec, " welcome  Daniel");
  // }
  // const numberWithCommas = (x) => {
  //   return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  // };
  // console.log(product_id);

  return (
    <>
      {modal == false ? null : (
        <div className="checkout_main">
          <div className="checkout_modal_out" onClick={CloseModal}></div>
          <Dashboard_Checkout_Page
            cAmount={100}
            // cAmount={parseInt(roundedAmount)}
            getProductId={product_id}
            click={CloseModal}
          />
        </div>
      )}
      {/* {dataFlow.map((item)=>{return( */}
      {/* <section className="no-bg">
        <div className="container"> */}
      <div className="products_area">
        {/* <div className="wrapper"> */}
        {/* <ImageGallery items={images} /> */}
        {/* </div> */}

        <div className="product_details_area1">
          <div className="details_area1_cont1">
            {" "}
            {/* <img
              src={api_url2 + "/" + product_image}
              alt=""
              className="product_details_img"
            /> */}
            {moreImg.length == 0 ? (
              <img src={product_image} className="image_carooooo" />
            ) : (
              <ProductImageCarousel
                img={moreImg[0]}
                img2={moreImg[1]}
                img3={moreImg[2]}
              />
            )}
          </div>
          {/* ================ */}
          {/* ================ */}
          {/* ================ */}
          {/* ================ */}
          <div className="details_area1_cont2">
            {" "}
            <div className="product_details_Title">{product_name}</div>
            <div className="product_details_code">
              <span className="product_code_title">Product Code: </span>
              {product_category_code}
            </div>
            <div className="product_details_code" style={{ color: "#239e54" }}>
              <span className="product_code_title">Brand: </span>
              {product_brand}
              {/* {props.Brand} */}
            </div>
            {/* ----------------- */}
            {/* <hr className="horizontal_rule" /> */}
            {/* -------------- */}
            {payment_type === "INSTALLMENT" ? (
              <>
                <InstallmentComponent
                  initial_deposit={initial_deposit}
                  product_duration={product_duration}
                  amount={amount}
                  percentage={percentage}
                  amount={amount}
                  paymentperweek={paymentperweek}
                  numberWithCommas={numberWithCommas}
                />
              </>
            ) : (
              <>
                <OutrightComponent
                  roundedAmount={amount}
                  numberWithCommas={numberWithCommas}
                />
              </>
            )}
            {/* ======= */}
            {/* ======= */}
            {/* ======= */}
            {/* ======= */}
            {/* <hr className="horizontal_rule" /> */}
            {/* ------- */}
            <div className="buy_now_btn_div">
              <button className="buy_now_button" onClick={openCheckoutModal}>
                <ShoppingCartCheckoutIcon className="payment_btn_icon" />
                Proceed to Checkout
              </button>
            </div>
            <div className="offline_payment_div">
              <div className="offline_payment_tittle">
                For offline bookings contact:
              </div>
              <div className="offline_payment_para">
                <CallIcon className="call_us_icon" /> 08164020234, 090234567893
              </div>
            </div>
            <div className="quantity_div">
              <div className="Notice_Title">Notice:</div>
              <div className="items_left_div">
                <CreditScoreIcon className="creditCardIcon_icon" />
                This item has an upfront payment of : {percentage}%
              </div>
              <span className="upfront_para">
                <PaymentsIcon className="creditCardIcon_icon" />
                That means you are to pay{" "}
                <span className="percent_days_amnt">
                  ₦{numberWithCommas(parseInt(initial_deposit).toFixed())}
                </span>
                before this item can be locked by you.
              </span>
            </div>
          </div>
        </div>
        {/* <div className="product_details_area">{asset}</div> */}
        {/* =======================================879087070y707680769067 */}
        {/* =======================================879087070y707680769067 */}
        {/* =======================================879087070y707680769067 */}
        {/* =======================================879087070y707680769067 */}
        {/* =======================================879087070y707680769067 */}

        <div className="description_area">
          <div className="description_header">
            <div
              id="features"
              className={
                activeBg == "features"
                  ? "description_click1 description_click1_active"
                  : "description_click1"
              }
              onClick={changeBg}
            >
              Features
            </div>
            <div
              id="descript"
              className={
                activeBg == "descript"
                  ? "description_click1 description_click1_active"
                  : "description_click1"
              }
              onClick={changeBg}
            >
              Description
            </div>
          </div>

          <div className="description_body">
            {activeBg == "features" ? (
              <div className="description_table">
                <table class="_3a09a_1e-gU">
                  <tbody>
                    {card.map((apple) => (
                      <tr>
                        <td>{apple}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="specification_div">
                {/* {specification.map((desc) => (
                      <tr>
                        <td>{desc}</td>
                      </tr>
                    ))} */}
                {/* {specification} */}
                <div
                  className="for-des"
                  dangerouslySetInnerHTML={{ __html: specification }}
                />
              </div>
            )}
          </div>
        </div>

        {/* {spec.map((pad) => (
              <div style={{ display: "inline-block" }}>{pad}</div>
            ))} */}
      </div>
      {/* </div>
      </section> */}
      {/* )})} */}
    </>
  );
};

const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.shop.cart,
});

export default ItemDetailComponent;
