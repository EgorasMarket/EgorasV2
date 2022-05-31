import React, { useState, useEffect, useCallback } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Carousel from 'react-multi-carousel';
import '../../../../css/itemsDetailsPage.css';
import axios from 'axios';
import '../Dashboard/DashboardStyles/dashboardCart.css';
import {
  Calendar,
  DateRangePicker,
  DateRange,
} from 'react-date-range';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { addDays, differenceInCalendarDays } from 'date-fns';
import Dashboard_Checkout_Page from '../Dashboard/DashboardPages/Dashboard_Checkout_Page';
import CheckoutModalComponent from './CheckoutModalComponent';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from '../../../../actions/types';
import { connect, useDispatch } from 'react-redux';
import LoginComp from '../Login/LoginComp';
const Item_details_main = ({ match, auth }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  //console.log(match.params.id);
  //console.log(auth);

  const [loginSuccess, setLoginSuccess] = useState(false);

  // const handleSelect = (ranges) => {
  //   //console.log(ranges);
  // };
  const handleSelect = (ranges) => {
    //console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };

  const [loginModal, setLoginModal] = useState(false);
  const [spec, setSpec] = useState([]);
  const [displayDays, setDisplayDays] = useState([]);
  const [modal, setModal] = useState(false);
  const [daysAddedDiv, setDaysAddedDiv] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [product_id, setProductId] = useState(match.params.id);
  const [user_id, set_user_id] = useState('');
  const [asset, setAsset] = useState('');
  const [lowOutCome, setLowOutCome] = useState('');

  const [base, setBase] = useState('');
  const [disable, setDisable] = useState(false);

  const [disable2, setDisable2] = useState(false);

  const [count, setCount] = useState(0);
  const [imeeg, setImeeg] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [activeBg, setActiveBg] = useState('descript');

  const [dataFlow, setDataFlow] = useState([]);
  const [term, setTerm] = useState([]);
  const [dailyAmount, setDailyAmount] = useState();
  const [initialDeposit, setInitialDeposit] = useState();

  const [productDetails, setProductDetails] = useState({
    product_image: '',
    product_name: '',
    product_brand: '',
    Product_type: '',
    unitCount: '',
    amount: '',
    product_duration: '',
    product_category_code: '',
    product_details: '',
    productSpecification: '',
    percentage: '',
    payment_type: '',
    amount_per_day: '',
  });

  var addedDays = 0;
  const numberWithCommas = (x) => {
    // return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };
  const openDetailsModal = () => {
    setDetailsModal(true);
  };

  const closeDetailModal = () => {
    setDetailsModal(false);
  };
  const [calvalue, setCalValue] = useState();

  const isDisabled = useCallback((date) => {
    if (date.getDate()) {
      return true;
    }
    //console.log(date.getDate() + 2, "memememe");
  }, []);

  const {
    product_image,
    product_name,

    product_brand,
    product_type,
    unitCount,
    amount,
    product_duration,
    product_category_code,
    productSpecification,
    product_details,
    percentage,
    amount_per_day,
    payment_type,
  } = productDetails;

  useEffect(() => {
    const body = JSON.stringify({
      product_id,
    });
    // if (auth) {
    //   set_user_id(auth.user.user.id);
    // }

    //console.log(body);

    axios
      .post(api_url2 + '/v1/product/retrieve/specific', body, config)
      .then((data) => {
        //console.log(data.data.data, "king");

        const getSlid = data.data.data.product_specifications;
        //  const slipVar = getSlid.split(',');
        //console.log("====================================");
        //console.log(getSlid);
        //console.log("====================================");
        setSpec(getSlid);
        // const slipVar = spec.split(',');

        setProductDetails({
          product_image: data.data.data.product_image,
          product_name: data.data.data.product_name,
          product_brand: data.data.data.product_brand,
          product_type: data.data.data.product_type,
          unitCount: data.data.data.unitCount,
          amount: data.data.data.amount,
          product_duration: data.data.data.product_duration,
          product_category_code: data.data.data.product_category_code,
          product_details: data.data.data.product_detail,
          percentage: data.data.data.percentage,
          payment_type: data.data.data.payment_type,
          amount_per_day: data.data.data.amount_per_day,
          // productSpecification:slipVar[0]
        });
        // setLowNumS({prod_dur:"8"});

        //console.log("====================================");
        // const NumbsAr =
        // setLowNumS(NumbLow);
        // //console.log(NumbLow);
        //console.log(lowOutCome);
      })
      .catch((err) => {
        //console.log(err.response); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    // setCartNum(cart.length)
    // fetchDepositLinks();
    //console.log(auth);
    if (auth.user !== null) {
      // let dataa = 'stackabuse.com';
      // //console.log( new Buffer(dataa));
      var todecoded = auth.user;
      var todecodedn = todecoded.user.userImage;
<<<<<<< HEAD

      // //console.log('====================================');
      //console.log(todecodedn);
      // //console.log('====================================');

      const getName = todecoded.user.fullname;
      const splitName = getName.split(' ');

      set_user_id(todecoded.user.id);
=======
      
      // //console.log('====================================');
      //console.log(todecodedn);
      // //console.log('====================================');
      
      
      const getName = todecoded.user.fullname
      const splitName = getName.split(' ');
      
      
  
      set_user_id(todecoded.user.id)
      
>>>>>>> 945329f495b14abcb83ebc5b62677951015a2b04
    }
  }, [auth]);

  const LowCalc = Array(product_duration)
    .fill(0)
    .map((e, i) => i + 1);

  //console.log("====================================");
  //console.log(LowCalc);
  const addToCart = async (customer_id, product_id, quantity) => {
    const payload = {
      customer_id,
      product_id,
      quantity,
    };
    let call = await axios
      .post(api_url2 + '/v1/cart/add', payload, config)
      .then((response) => {
        // alert("Item successfully added to cart ");
<<<<<<< HEAD
=======

>>>>>>> 945329f495b14abcb83ebc5b62677951015a2b04
        //console.log("kingsley Chukwubuike");
      })
      .catch((err) => {
        alert(err.response.data.message);
        //console.log("error reported", err.response);
      });

    //console.log(call, "chukwubuike kingsley");
  };

  const checkout = async (
    customer_id,
    product_id,
    installment_days,
    startDate,
    endDate
  ) => {
    const payload = {
      customer_id,
      product_id,
      installment_days,
      startDate,
      endDate,
      // spread_balance,
    };

    let call = await axios
      .post(api_url2 + '/v1/checkout/add', payload, config)
      .then((response) => {
        // alert("Item successfully added to cart ");
        // setDailyAmount(response.data.details.rounded)

        //console.log(response.data.details);
        setDailyAmount(response.data.details.rounded);
        setInitialDeposit(response.data.details.initial_deposit);
      })
      .catch((err) => {
        // alert(err.response.data.message);
        //console.log("error reported", err.response);
      });
  };
  // const food = spec[0].split('');
  // //console.log(food[0])

  const [itemsLeft, setItemsLeft] = useState(2);
  const [daysAdded, setDaysAdded] = useState(0);
  const [moneyAdded, setMoneyAdded] = useState(0);
  const [date, setDate] = useState(null);
  // const iteming = unitCount;

  //console.log("====================================");
  //console.log(spec);
  //console.log(productDetails);
  //console.log("====================================");
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };

  const increaseCount = () => {
    setCount(count + 1);

    setItemsLeft(itemsLeft - 1);
    if (count >= 4) {
      setDisable(true);
      setDisable2(false);
      //console.log("stop count");
    } else {
      setDisable(false);
      setDisable2(false);
    }

    if (unitCount < 1 || count === unitCount || count === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };
  // -=========--
  // -=========--
  // -=========--
  const decreaseCount = () => {
    setCount(count - 1);
    setItemsLeft(itemsLeft + 1);

    if (count <= 1) {
      setDisable2(true);
      setDisable(false);
      //console.log("stop count2");
    }

    if (unitCount <= 1 || count < 1) {
      setDisable2(true);
    } else {
      setDisable2(false);
    }
  };

  const itemsId = {
    firstItem: {
      // the naming can be any, depends on you.
      id: 1,
      img: '/img/samsung_tv_555.jpeg',
    },
    second: {
      // the naming can be any, depends on you.
      id: 2,
      img: '/img/BAG.jpeg',
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

  useEffect(() => {
    let assetVal = match.params.img;
    let baseVal = match.params.name;

    setAsset(assetVal);
    setBase(baseVal);

    let ticker = assetVal + '-' + baseVal;
    window.scrollTo(0, 0);
    // setImeeg(itemsId.map((log) => log.img));
    setImeeg(itemsId.firstItem.img);
    //console.log(itemsId.firstItem.img);
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + '/v1/product/retrieve/products', null, config)
      .then((data) => {
        //console.log(data.data.data, "phlip");

        setTerm(data.data.data);

        // setTerm(data.data.data)
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  const ID = match.params.id;

  const CalcDaysConvert = (x) => {
    x = parseInt(x);
    let result = 0;
    if (x === 5) {
      result = 12 * 31;
    } else if (x === 4) {
      result = 6 * 31;
    } else if (x === 3) {
      result = 4 * 31;
    } else if (x === 2) {
      result = 2 * 31;
    }
    return result;
  };

  const days = CalcDaysConvert(product_duration);
  // setDaysAdded(days)
  const percentDays = (percentage / 100) * days;
  // const endDate = addDays(new Date(), percentDays - 1);
  //console.log(percentDays);
  const percentMoney = (percentage / 100) * amount;
  //console.log(percentDays);
  // const [cStartDate, setStartDate] = useState(new Date());
  // const [cEndDate, setEndDate] = useState(new Date(), days);
  // //console.log(cStartDate);

  // =================
  // =================
  //console.log(days);
<<<<<<< HEAD
  const CalcAmtperweek = amount / CalcDaysConvert(product_duration);
=======
  const CalcAmtPerDay = amount / CalcDaysConvert(product_duration);
>>>>>>> 945329f495b14abcb83ebc5b62677951015a2b04
  // //console.log(CalcDaysConvert);
  if (ID === '1248f7f7-c2f7-49bd-9e8d-ccdb4db7b82b') {
    //console.log("Hello Mr King");
  }
  const OpenModal = () => {
    setModal(true);
  };
  const CloseModal = () => {
    setModal(false);
  };

  const OpenLoginModal = () => {
    if (auth.user !== null) {
      openDetailsModal();
      checkout(user_id, product_id, daysAdded, startDate, endDate);
    } else {
      setLoginModal(true);
    }
  };

  const CloseLoginModal = () => {
    setLoginModal(false);
  };

  const callback = useCallback((loginSuccess) => {
    setLoginSuccess(loginSuccess);

    if (loginSuccess === true) {
      CloseLoginModal();
      window.location.reload();
      // openDetailsModal();
      // checkout(
      //   user_id,
      //   product_id,
      //   daysAdded,
      //   startDate,
      //   endDate
      // );
    } else {
    }
  }, []);
  //console.log(loginSuccess);
  return (
    <div className="other2">
      {loginModal == false ? null : (
        <div className="checkout_main">
          <div
            className="checkout_modal_out"
            onClick={CloseModal}
          ></div>
          {/* <div>Login</div> */}
          {/* <Dashboard_Checkout_Page
            cAmount={parseInt(productDetails.amount)}
            click={CloseModal}
          /> */}
          <LoginComp parentCallback={callback} />
        </div>
      )}

      {modal ? (
        <div className="checkout_main">
          <div
            className="checkout_modal_out"
            onClick={CloseModal}
          ></div>
          <Dashboard_Checkout_Page
            cAmount={parseInt(productDetails.amount)}
            click={CloseModal}
          />
        </div>
      ) : null}

      {/* {modal == false ? null : (
        <div className="checkout_main">
          <div className="checkout_modal_out" onClick={CloseModal}></div>
          <Dashboard_Checkout_Page
            cAmount={parseInt(productDetails.amount)}
            click={CloseModal}
          />
        </div>
      )} */}
      {/* {dataFlow.map((item)=>{return( */}
      <section className="no-bg">
        <div className="container">
          <div className="products_area">
            <div className="product_details_area1">
              <div className="details_area1_cont1">
                {' '}
                <img
                  src={product_image}
                  alt=""
                  className="product_details_img"
                />
              </div>
              {/* ================ */}
              {/* ================ */}
              {/* ================ */}
              {/* ================ */}
              <div className="details_area1_cont2">
                {' '}
                <div className="product_details_Title">
                  {product_name}
                </div>
                <div className="product_details_code">
                  <span className="product_code_title">
                    Product Code:{' '}
                  </span>
                  {product_category_code}
                </div>
                <div
                  className="product_details_code"
                  style={{ color: '#000000' }}
                >
                  <span className="product_code_title">Brand: </span>
                  {product_brand}
                  {/* {props.Brand} */}
                </div>
                {/* ----------------- */}
                {payment_type == 'OUTRIGHT' ? null : (
                  <div className="amount_item_div">
                    ₦{numberWithCommas(amount_per_day)}{' '}
                    <span className="per_day"> / per-day</span>
                  </div>
                )}
                {/* // =========================== */}
                <div className="amount_item_div total_amount">
                  <span className="sub_total_txt">Total: </span> ₦
                  {numberWithCommas(numberWithCommas(amount))}{' '}
                  <span className="per_day"></span>
                </div>
                {/* <hr className="horizontal_rule" /> */}
                {/* -------------- */}
                <div className="lll">
                  <div className="max_dura">
                    {payment_type == 'OUTRIGHT' ? null : (
                      <p className="no_margg">
                        Savings Max Duration:
                      </p>
                    )}
                    <div className="days_left_numb">
                      {payment_type == 'OUTRIGHT' ? (
                        <p className="no_margg">Outright Buy</p>
                      ) : (
                        <p className="no_margg">
                          {product_duration}day(s)
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* <hr className="horizontal_rule" /> */}
                {/* ------- */}
                {payment_type !== 'OUTRIGHT' ? (
                  <div className="quantity_div">
                    <div className="items_left_div">
                      This item has an upfront payment of :{' '}
                      {percentage}%
                    </div>
                    <span className="upfront_para">
                      That means you are to pay #
                      {numberWithCommas(percentMoney)} before this
                      item can be locked by you.
                    </span>
                  </div>
                ) : null}
                {/* ======= */}
                {/* ======= */}
                {/* {product_duration !== 1 ? (
                  <div className="date_picky">
                    <div className="date_picky_note">
                      Note: the below calendar shows the total amount of days to
                      complete payment for this item
                      <br />
                      the grey color shows the total days that has been
                      initially locked for this item
                      <br />
                      while the green color shows the total amount of days that
                      is left for payment .
                    </div>
                  </div>
                ) : null} */}
                {/* ======= */}
                {/* ======= */}
                {/* <hr className="horizontal_rule" /> */}
                {/* ------- */}
                <div className="buy_now_btn_div">
                  <button
                    className="buy_now_button"
                    onClick={() => {
                      // openDetailsModal();
                      OpenLoginModal();
                      //call  the checkout api here
                      // checkout(
                      //   user_id,
                      //   product_id,
                      //   daysAdded,
                      //   startDate,
                      //   endDate
                      // );
                    }}
                  >
                    {product_duration !== 1
                      ? 'Proceed'
                      : 'Proceed to checkouts'}
                  </button>

                  {/* <div className="save_later">
                    <button className="save_later_btn">
                      <FavoriteIcon className="favorite_icon" />
                    </button>
                    <div className="save_later_txt">Add to favorites.</div>
                  </div> */}
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
                  id="descript"
                  onClick={changeBg}
                  className={
                    activeBg == 'descript'
                      ? 'description_click1 description_click1_active'
                      : 'description_click1'
                  }
                >
                  Description
                </div>
              </div>
              {/* {spec.map((tree)=>( */}

              {/* <div className='my-4'>
                  {spec.map((tree)=>(
                    <span style={{display:'flex',flexDirection:'column'}}>{tree}</span>
                  ))}
                </div> */}

              <div className="description_body">
                <div className="description_table">
                  <table class="_3a09a_1e-gU">
                    <tbody>
                      <tr>
                        {/* <td>Colour</td> */}
                        <td>{spec[0]}</td>
                      </tr>
                      <tr>
                        {/* <td>Warranty Period</td> */}
                        <td>{spec[1]}</td>
                      </tr>
                      {/* <tr>
                       <td>
                       {tree[0]}
                       </td>
                      </tr> */}
                      <tr>
                        {/* <td>Brand</td> */}
                        <td>{spec[2]}</td>
                      </tr>
                      <tr>
                        {/* <td>Display Features</td> */}
                        <td>{spec[3]}</td>
                      </tr>
                      <tr>
                        {/* <td>Display Technology</td> */}
                        <td>{spec[4]}</td>
                      </tr>
                      <tr>
                        {/* <td>TV Screen Size</td> */}
                        <td>{spec[5]}</td>
                      </tr>
                      {/* <tr> */}
                      {/* <td>Television 3D Technology</td> */}
                      {/* <td>{spec[6]}</td> */}
                      {/* </tr> */}

                      {/* <tr> */}
                      {/* <td>Resolution</td> */}
                      {/* <td>{spec[7]}</td> */}
                      {/* </tr> */}
                      {/* <tr> */}
                      {/* <td>Intended Display Use</td> */}
                      {/* <td>{spec[8]}</td> */}
                      {/* </tr> */}
                      {/* <tr> */}
                      {/* <td>Television Screen Type</td> */}
                      {/* <td>{spec[9]}</td> */}
                      {/* </tr> */}
                      {/* <tr> */}
                      {/* <td>Television Refresh Rate</td> */}
                      {/* <td>{spec[10]}</td> */}
                      {/* </tr> */}
                    </tbody>
                  </table>
                </div>
                {/* ====== */}
                {/* ====== */}
              </div>

              {/* <div className='my-4'>
                  {spec.map((tree)=>(
                    <span style={{display:'flex',flexDirection:'column'}}>{tree}</span>
                  ))}
                </div> */}
              {/* <div className="description_body">
                <div className="description_table">
                  <table class="_3a09a_1e-gU">
                    <tbody>
                      <tr>
                        <td>Colour</td>
                        <td>{spec[0]}</td>
                      </tr>
                      <tr>
                        <td>Warranty Period</td>
                        <td>6 Months</td>
                      </tr> */}
              {/* <tr>
                       <td>
                       {tree[0]}
                       </td>
                      </tr> */}
              {/* <tr>
                        <td>Brand</td>
                        <td>
                          <a href="/brand/samsung">Samsung</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Display Features</td>
                        <td>UHD</td>
                      </tr>
                      <tr>
                        <td>Display Technology</td>
                        <td>Not Specified</td>
                      </tr>
                      <tr>
                        <td>TV Screen Size</td>
                        <td>50"</td>
                      </tr>
                      <tr>
                        <td>Television 3D Technology</td>
                        <td>No Glasses</td>
                      </tr>
                      <tr>
                        <td>Resolution</td>
                        <td>4K</td>
                      </tr>
                      <tr>
                        <td>Intended Display Use</td>
                        <td>Home Entertainment</td>
                      </tr>
                      <tr>
                        <td>Television Screen Type</td>
                        <td>Flat</td>
                      </tr>
                      <tr>
                        <td>Television Refresh Rate</td>
                        <td>240 Hz</td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
              {/* ====== */}
              {/* ====== */}
              {/* </div> */}

              {/* ))} */}
            </div>
            {/* ================ */}
            {/* ================ */}
            {/* =================================================================================================================================================================================================================================================================== */}
            {/* =================================================================================================================================================================================================================================================================== */}
            {/*  Projects Section start*/}
            <section className="projectsSection" id="projects">
              <div className="container">
                <div className="projectsArea">
                  <div className="projectsLinea"></div>
                  <div className="projectsTitleContentsa">
                    <div className="projectTitle">
                      <h1 className="gttitle TITE">
                        Recent Products
                      </h1>
                    </div>
                    {/* 
              <a href="/explore_collaterals" className="projectsLink">
                Explore collaterals
                <div className="projectsLinkHover"></div>
              </a> */}
                  </div>

                  {/* Carousel start==============================
==============================================
============================= */}

                  <Carousel
                    responsive={responsive6}
                    className="partnerCards LEFTARROW"
                    showDots={false}
                    //   infinite={false}
                    autoPlay={true}
                    autoPlaySpeed={6000}
                    transitionDelay={'2s'}
                    infinite={true}
                    draggable={true}
                    // transitionDuration={500}
                    swipeable={true}
                    style={{ height: '25em' }}
                  >
                    {term.map((asset) => (
                      // <div className="cardA">
                      //   <div className="img">
                      //     <div
                      //       className="img-sub"
                      //       style={{
                      //         backgroundImage: `url(${asset.img})`,
                      //         height: "200px",
                      //         width: "100%",
                      //         backgroundRepeat: "no-repeat",
                      //         backgroundSize: "cover",
                      //         borderRadius: "8px",
                      //         borderBottomLeftRadius: "0px",
                      //         borderBottomRightRadius: "0px",
                      //         backgroundPositionY: "center",
                      //       }}
                      //     >
                      //       {/* <div className="img-amount">
                      //       <NumberFormat
                      //         value={1000}
                      //         displayitems_remainings={"text"}
                      //         thousandSeparator={true}
                      //         prefix={"$"}
                      //       />
                      //     </div> */}
                      //     </div>
                      //   </div>

                      //   <div className="cardDetails" style={{ textAlign: "left" }}>
                      //     <h1 className="cardHeader">{asset.name}</h1>
                      //     <h1 className="collat-category">{asset.items_remainings}</h1>
                      //     <div className="heroSlider2">
                      //       <div className="slider-txts1">
                      //         <div className="h-texts">
                      //           <h3 className="htxt1a">{asset.days_left}</h3>
                      //           <h3 className="htxt2a">{asset.percentage}</h3>
                      //         </div>
                      //       </div>
                      //       {/* <div className="slider-a"></div> */}
                      //       <div className="slider" style={{ height: "7px" }}>
                      //         <div
                      //           className="sliderafter"
                      //           style={{
                      //             width: `5%`,
                      //             height: "7px",
                      //           }}
                      //         ></div>
                      //       </div>
                      //       <div className="slider-txts2">
                      //         <div className="p-texts2a">
                      //           <p className="ptxt2a">Remaining Items: 100</p>
                      //         </div>
                      //       </div>
                      //     </div>
                      //   </div>
                      //   </div>
                      <a
                        href={`/dashboard/products/details/${asset.id}/${asset.product_name}`}
                      >
                        <li className="carous_list">
                          <div
                            className="storeTiles_storeTileContainer__HoGEa"
                            style={{
<<<<<<< HEAD
                              backgroundImage: `url(${asset.product_image})`,
=======
                              backgroundImage: `url(${
                                asset.product_image
                              })`,
>>>>>>> 945329f495b14abcb83ebc5b62677951015a2b04
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
                            <div className="storeTiles_storeTileOffersContainer__3v8lC">
                              <button className="items_remaining_btn">
                                save now
                              </button>
                              <button className="items_remaining_btn2">
                                20% off
                              </button>
                            </div>
                            <div className="storeTiles_storeTileBottomContainer__2sWHh">
                              <div className="asset_name">
                                {asset.product_name}
                              </div>
                              <div className="asset_title">
                                {asset.unitCount}
                                {asset.unitCount === 1
                                  ? 'item left'
                                  : asset.unitCount <= 1
                                  ? 'no item left'
                                  : asset.unitCount > 1
                                  ? 'items left'
                                  : null}
                              </div>
                            </div>
                            {/* </a> */}
                          </div>
                        </li>
                      </a>
                    ))}
                  </Carousel>
                  {/* Carousel end==============================
==============================================
============================= */}
                </div>
              </div>
            </section>
            {/*  Projects Section end*/}
            {/* =================================================================================================================================================================================================================================================================== */}
            {detailsModal == true ? (
              <div className="detailsModal">
                <div className="detailsModalSection1">
                  <div
                    className="bacKbutton"
                    onClick={closeDetailModal}
                  >
                    Previous
                    <ArrowForwardIosIcon className="arrow_back" />
                  </div>
                  <div className="detailsModalSection1_area1">
                    <div className="delivery_title1">
                      Delivery / Pickup Options
                    </div>
                    <div className="delivery_cards_section">
                      <div className="delivery_card1">
                        <div className="delivery_card_title">
                          Deliver to me{' '}
                          <button className="button_change_delivery_address">
                            Change Address
                          </button>
                        </div>
                        <div className="delivery_card_body">
                          <div className="delivery_card_body_cont1">
                            Samuel Ifeanyi
                          </div>
                          <div className="delivery_card_body_cont1">
                            62 Harold Wilson Drive, Borokiri, RV, Port
                            Harcourt, Rivers
                          </div>
                          <div className="delivery_card_body_cont1">
                            08164020234
                          </div>
                        </div>
                      </div>
                      {/* ============= */}
                      {/* ============= */}
                      {/* ============= */}
                      {/* ============= */}
                      <div className="delivery_card2">
                        <div className="delivery_card_title">
                          Pickup from our agents
                          <button className="button_change_delivery_address pickup_btn">
                            Select Pickup Location
                          </button>
                        </div>
                        <div className="delivery_card_body">
                          <div className="delivery_card_body_cont1">
                            Select a pickup location in your area from
                            our 32 locations nationwide.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="detailsModalSection1_area2">
                    <div className="detailsModalSection1-area2_title">
                      Review Order
                    </div>
                    <div className="review_order_div">
                      Delivery 1 of 1
                    </div>
                    <div>
                      <div class="save_prod_deta">
                        <table className="save_item_table">
                          <thead className="assets-category-titles">
                            <tr className="assets">
                              <th className="assets-category-titles-heading1">
                                Item
                              </th>
                              <th className="assets-category-titles-heading1">
                                Item Details
                              </th>
                              <th className="assets-category-titles-heading1 quant">
                                Amount daily
                              </th>
                              {/* <th className="assets-category-titles-heading1 quant">
                              Unit Price
                            </th> */}
                              <th className="assets-category-titles-heading1_last">
                                Sub Total
                              </th>
                            </tr>
                          </thead>

                          <tbody
                            className="save_items_cat popular-categories"
                            id="popular-categories"
                          >
                            {' '}
                            <tr className="assets-category-row">
                              <td className="save_item_data">
                                <div className="assets-data height_data">
                                  <img
                                    src={product_image}
                                    alt=""
                                    className="save_item_img_img"
                                  />
                                </div>
                              </td>
                              {/* ======== */}
                              {/* ======== */}
                              {/* ======== */}
                              {/* ======== */}
                              <td className="save_item_data1">
                                <div className="save_items_details">
                                  <div className="save_items_details1">
                                    {product_name}
                                  </div>
                                  <div className="save_item_days_left">
                                    {unitCount} days left
                                    <div className="days_left_percentage_cont">
                                      <span
                                        className="days_left_percentage"
                                        style={{
                                          width:
                                            100 %
                                            -(
                                              (amount * 100) /
                                              unitCount
                                            ),
                                        }}
                                      ></span>
                                    </div>
                                  </div>
                                  <div className="save_total_locked_amount">
                                    <span className="items_left_amount">
                                      Total Amount Locked on Item
                                    </span>
                                    #{initialDeposit}
                                  </div>
                                </div>
                              </td>
                              <td className="save_item_data1b">
                                <div className="assets-data-name_last">
                                  #{dailyAmount}
                                </div>
                              </td>
                              {/* <td className="save_item_data1b">
                                <div className="assets-data-name center_name">
                                  #{amount}
                                </div>
                              </td> */}
                              <td className="save_item_data1b">
                                <div className="assets-data-name_last">
                                  #{amount}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detailsModalSection2">
                  <div className="details_modal_divv">
                    <div className="cart_area2_heading">
                      Payment Options
                    </div>
                    <div className="cart_area2_select">
                      <div className="wit_card">
                        Pay via card{' '}
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          classNam="checkBox"
                        />
                      </div>
                    </div>
                    <div className="cart_area2_select border_down">
                      <div className="wit_card">
                        Pay via wallet{' '}
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          classNam="checkBox"
                        />
                      </div>
                    </div>
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    <div className="cart_area2_notes">
                      . No minimum or maximum order.
                      <br />
                      . Make sure your card is still valid.
                      <br />. Ensure sufficient balance to cover this
                      transaction.
                    </div>
                    {/* ========== */}
                    {/* ========== */}
                    {/* ========== */}
                    {/* ========== */}
                    <div className="sub_total_div">
                      Sub Total:{' '}
                      <span className="sub_total_div_span">
                        {amount * unitCount}
                      </span>
                    </div>
                    {/* ========== */}
                    {/* ========== */}
                    {/* ========== */}
                    {/* ========== */}
                    <div className="sub_total_div">
                      Delivery Fee:{' '}
                      <span className="sub_total_div_span">₦0</span>
                    </div>
                    {/* ========== */}
                    {/* ========== */}
                    <div className="secure_transac_text">
                      {' '}
                      Transactions are 100% Safe and Secure
                    </div>
                    {/* ========== */}
                    {/* ========== */}
                    <div className="transac_secure_div">
                      Total{' '}
                      <span className="sub_total_div_span">
                        {amount * unitCount}
                      </span>
                    </div>
                    {/* ========== */}
                    {/* ========== */}

                    <button
                      className="checkout_btn1a"
                      onClick={OpenModal}
                    >
                      Proceed to Checkout{' '}
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      {/* )})} */}
    </div>
  );
};
const mapStateToProps1 = (state) => ({
  auth: state.auth,
  //   isAuthenticated: state.auth.isAuthenticated,
  cart: state.shop.cart,
});

export default connect(mapStateToProps1)(Item_details_main);
// export default Item_details_main;
