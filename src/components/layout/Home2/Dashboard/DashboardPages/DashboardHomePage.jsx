import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import LogoutIcon from '@mui/icons-material/Logout';
import '../DashboardStyles/dashboard_home.css';
import { API_URL2 as api } from '../../../../../actions/types';
import { connect, useDispatch } from 'react-redux';
import axios from 'axios';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CloseIcon from '@mui/icons-material/Close';
import CircleIcon from '@mui/icons-material/Circle';
import LoadingIcons from 'react-loading-icons';
import TawkTo from 'tawkto-react';

// import { numberWithCommas } from "../../../../../static";
// import { allCart } from "../../../../../actions/shop";
import DashBoardCard from '../DashBoardCard';
import data from '../../../MockData';
import { retrieveCart } from '../../../../../actions/shop';
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from '../../../../../actions/types';
// import Nodata from "../NodataFound/NoDataFoundComponent"
import { NoDataFoundComponent } from '../NodataFound/NoDataFoundComponent';

import { numberWithCommas } from '../../../../../static';
// const transaction = [
//   {
//     id: 1,
//     date: "05-16-2022",
//     amount: "2000",
//     type: "Card",
//     status: "Completed",
//   },
//   {
//     id: 2,
//     date: "05-16-2022",
//     amount: "2000",
//     type: "Card",
//     status: "Completed",
//   },
//   {
//     id: 3,
//     date: "05-25-2022",
//     amount: "3500",
//     type: "Wallet",
//     status: "Completed",
//   },
//   {
//     id: 4,
//     date: "05-16-2022",
//     amount: "2000",
//     type: "Card",
//     status: "Completed",
//   },
//   {
//     id: 5,
//     date: "06-16-2022",
//     amount: "1500",
//     type: "Wallet",
//     status: "Completed",
//   },
// ];
const responsive6 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  }, // comment
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // main
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

const responsive7 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1620 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1620, min: 1420 },
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

const DashboardHomePage = ({ auth, match }) => {
  const [cus_id, setCusId] = useState('');
  const dispatch = useDispatch();
  const [userLockId, setUserLockId] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [tranPopUp, setTranPopUp] = useState(0);
  const [paymentType, setPaymentType] = useState('');

  // const fetchFromCart = async (customer_id) => {
  //   //console.log('fetchfromCart', customer_id);
  //   let call = await axios.get(`${api}/v1/cart/get/${customer_id}`).catch((err) => {
  //     //console.log("error from dashboardcart", err.message);
  //   });
  //   // setCartData(call.data.data)

  //   //console.log(call.data.data, 'async call');
  //   dispatch(allCart(call.data.data))
  //   // dispatch(allCart(call)) // use this to send to the redux store
  // }

  // useEffect(() => {
  //   //console.log(cus_id);
  //   retrieveCart(cus_id)
  //   //console.log("inside use effect")

  // },[])
  const [allDatas, setAllDatas] = useState([]);
  const [savedNum, setSavedNum] = useState(5);
  const [productPage_id, setProductPageId] = useState(
    match.params.id
  );
  const [lock, setlock] = useState({
    productImage: '',
    productName: '',
    productAmount: '',
  });

  const { productImage, productName, productAmount } = lock;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const ChangeTranPopUp = (e) => {
    let currentTarget = e.currentTarget.id;
    console.log(currentTarget);
    setTranPopUp(currentTarget);
  };
  const closeTranPop = () => {
    // let currentTarget = e.currentTarget.id;
    setTranPopUp(0);
    console.log('i am not here');
  };
  const [itemGalleryShow, setItemGalleryShow] = useState([]);
  const [accountInfo, setAccountInfo] = useState({
    ledger: 0,
    balance: 0,
    pending_sum: 0,
    total_sum: 0,
  });
  const { ledger, pending_sum, balance, total_sum } = accountInfo;

  useEffect(async () => {
    await axios
      .get(api_url2 + '/v1/product/retrieve/products', null, config)
      .then((data) => {
        console.log(data.data.data, 'phlip');

        setItemGalleryShow(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        api_url2 + `/v1/product/retrieve/locked/${auth.user.user.id}`,
        null,
        config
      )
      .then((data) => {
        //console.log(data.data,"Ewwooo oh")

        setUserLockId(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(async () => {
    setLoading(true);
    //console.log(auth.user.user.id);
    const customer_id = auth.user.user.id;
    const body = JSON.stringify({
      customer_id,
    });
    await axios
      .post(
        api_url2 + '/v1/user/accounts/fetch/dashboard',
        body,
        config
      )
      .then((data) => {
        setLoading(false);
        // console.log(data.data.data, "bbbbbbb");
        // console.log(Number('78.77'));

        setAccountInfo({
          ledger: data.data.data.ledger,
          balance: Number(data.data.data.balance).toFixed(3),
          pending_sum: data.data.data.pending_sum,
          total_sum: data.data.data.total_sum,
        });

        // setItemGalleryShow(data.data.data);
      })
      .catch((err) => {
        setLoading(false);
        //console.log(err.response); // "oh, no!"
      });
  }, [auth]);

  const text = 'No item Locked yet';
  const transText = 'No transactions found';

  // useEffect(() => {

  // //console.log(body);

  //     axios.post(
  //         api_url2 + "/v1/product/retrieve/specific",
  //         // body,
  //         null,
  //         config
  //     ).then((cafe) => {

  //       //console.log("Goods only");
  //         //console.log(cafe.data.data, "Feeding");

  //         setlock ({
  //           productImage:cafe.data.data.product_image,
  //           productName:cafe.data.data.product_name,
  //           productAmount:cafe.data.data.amount
  //         })
  //     }).catch((err) => {
  //         //console.log(err.response); // "oh, no!"
  //     })
  // }, []);

  // const numberWithCommas = (x) => {
  //   return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  // };

  useEffect(() => {
    axios
      .get(
        api_url2 + '/v1/user/transactions/customer/recent',
        null,
        config
      )
      .then((data) => {
        // let a = data.data.payload;
        setPaymentType(data.data.payload.payment_type);
        console.log(data.data.payload);
        setAllDatas(data.data.payload.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="other2">
      <section className="no-bg no_paddd">
        <div className="container ">
          <div className="dash_home_area">
            <div className="dash_savings_cards_area">
              {/* Carousel start==============================
==============================================
============================= */}

              <Carousel
                responsive={responsive6}
                className="partnerCards LEFTARROW gtr"
                showDots={true}
                //   infinite={false}
                autoPlay={false}
                autoPlaySpeed={9000}
                infinite={false}
                draggable={true}
                swipeable={true}
                // transitionDuration={1000}
                style={{ height: '25em' }}
              >
                {/* {data.dashBoardHomeCard.map((asset, index) => ( */}
                <DashBoardCard
                  background={'/img/save_card1.svg'}
                  title={'Total Savings'}
                  Loading={Loading}
                  LoadingIcon={<LoadingIcons.Oval fill="#fff" />}
                  balance={numberWithCommas(
                    parseInt(total_sum).toFixed(2)
                  )}
                />
                <DashBoardCard
                  background={'/img/save_card2.svg'}
                  title={'Pending Payment'}
                  Loading={Loading}
                  LoadingIcon={<LoadingIcons.Oval fill="#fff" />}
                  balance={numberWithCommas(
                    parseInt(pending_sum).toFixed(2)
                  )}
                />
                <DashBoardCard
                  background={'/img/save_card3.svg'}
                  title={'Wallet Balance'}
                  Loading={Loading}
                  LoadingIcon={<LoadingIcons.Oval fill="#fff" />}
                  balance={numberWithCommas(
                    parseInt(balance).toFixed(2)
                  )}
                />
                <DashBoardCard
                  background={'/img/save_card3.svg'}
                  title={'Ledger Balance'}
                  Loading={Loading}
                  LoadingIcon={<LoadingIcons.Oval fill="#fff" />}
                  balance={numberWithCommas(
                    parseInt(ledger).toFixed(2)
                  )}
                />

                {/* ))} */}
              </Carousel>
              {/* Carousel end==============================
==============================================
============================= */}
            </div>
            {/* [===================] */}
            {/* [===================] */}
            {/* [===================] */}

            {userLockId.length <= 0 ? (
              <NoDataFoundComponent text={text} />
            ) : (
              <div className="savings_overview">
                <div className="savings_overview_title">
                  Savings Overview
                </div>
                <div className="savings_overview_body">
                  <div className="savings_overview_body_cont1">
                    Total Number of Locked{' '}
                    {userLockId.length > 1 ? 'items' : 'item'}{' '}
                    <span className="saved_figure">
                      {userLockId.length}
                    </span>
                  </div>
                  <div className="savings_overview_body_cont2">
                    {userLockId.slice(0, 3).map((item) => (
                      <a
                        href="/dashboard/savings"
                        className="savings_overview_body_cont2_1a"
                      >
                        <div className="save_overview_cont_img">
                          <img
                            src={item.product_img}
                            alt=""
                            className="save_overview_cont_img_imgg"
                          />
                        </div>
                        <div className="save_item_details">
                          <div className="save_item_details_titles">
                            <div className="save_overview_cont_title">
                              {item.product_name}
                            </div>
                            <div className="save_overview_cont_amount">
                              Total Amount ₦
                              {numberWithCommas(
                                parseInt(item.sum).toFixed(2)
                              )}
                            </div>
                          </div>
                          <div className="save_item_details_btn">
                            <div className="save_overview_cont_items_left">
                              Savings Amount ₦
                              {numberWithCommas(
                                parseInt(item.paidSum).toFixed(2)
                              )}
                            </div>
                            {/* <button className="save_overview_cont_items_top_up">
                              Top up
                            </button> */}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* useEffect(() => {
            axios
              .get(api_url2 + "/v1/user/transactions/customer/recent", null, config)
              .then((data) => {
                setAllCustomers(data.data.payload);
                console.log(data.data.payload)
              })
              .catch((err) => {
                console.log(err);
              })
          
          }, []); */}

          <div className="dashboard_transactions">
            <div className="dashboard_transactions_header">
              Recent Transactions{' '}
              <a
                href="/dashboard/wallet"
                className="see_all_transac_link"
              >
                See all
              </a>
            </div>
            <div className="transaction_headings">
              <div className="transaction_heading1">Type</div>
              <div className="transaction_heading1">Date</div>
              <div className="transaction_heading1 amnt_small">
                Amount
              </div>
              <div className="transaction_heading1 center_this">
                Channel
              </div>
              <div className="transaction_heading1 reduce_width">
                Status
              </div>
            </div>
            {allDatas.length <= 0 ? (
              <NoDataFoundComponent text={transText} />
            ) : (
              <div className="dashboard_transaction_body">
                {allDatas.slice(0, 5).map((data) => (
                  <>
                    <div
                      className="dashboard_transaction_body_cont1"
                      id={data.id}
                      // key={data.id}
                      onClick={ChangeTranPopUp}
                    >
                      <div className="dashboard_transac_body_cont1_layer1">
                        <div className="deposited_icon">
                          <ArrowDownwardIcon
                            style={
                              data.transaction_type == 'DEBIT'
                                ? {
                                    backgroundColor: ' #e4a788',
                                    transform: 'rotate(180deg)',
                                  }
                                : { backgroundColor: '#0ecb81' }
                            }
                            className="arrow_down_deposit_icon"
                          />
                        </div>
                        <div className="dashboard_transac_body_cont1_layer1_title">
                          {data.transaction_type}
                        </div>
                      </div>
                      <div className="dashboard_transac_body_cont1_layer1_amount_cont">
                        <div className="dashboard_transac_body_cont1_layer1_time">
                          {data.timestamp.slice(0, 10)}
                        </div>
                      </div>
                      <div className="dashboard_transac_body_cont1_layer1_amount_cont">
                        {data.transaction_type == 'DEBIT' ? (
                          <span>
                            -₦
                            {numberWithCommas(
                              parseInt(data.amount).toFixed(2)
                            )}
                          </span>
                        ) : (
                          <span>
                            +₦
                            {numberWithCommas(
                              parseInt(data.amount).toFixed(2)
                            )}
                          </span>
                        )}
                      </div>
                      <div className="dashboard_transac_body_cont1_layer1_type_cont">
                        <span className="dashboard_transac_body_cont1_layer1_type_status">
                          {data.channel}
                        </span>
                      </div>
                      <div className="dashboard_transac_body_cont1_layer1_status_cont">
                        <span className="dashboard_transac_body_cont1_layer1_completed_status">
                          Completed
                        </span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            )}
          </div>

          {/* =================================================================================================================================================================================================================================================================== */}

          {/* =================================================================================================================================================================================================================================================================== */}
        </div>
      </section>
      {allDatas.map((data) => (
        <>
          {tranPopUp == data.id ? (
            <div className="trans_div">
              <div className="tranPop_div">
                <div className="tranPopHeading">
                  Deposit Details{' '}
                  <span className="tranPopOutButton">
                    <CloseIcon
                      className="closeTranPopDiv"
                      onClick={closeTranPop}
                    />
                  </span>
                </div>
                <div className="tranPop_div_cont1">
                  {' '}
                  <div className="deposited_icon">
                    <ArrowDownwardIcon
                      style={
                        data.transaction_type == 'DEBIT'
                          ? {
                              backgroundColor: ' #e4a788',
                              transform: 'rotate(180deg)',
                            }
                          : { backgroundColor: '#0ecb81' }
                      }
                      className="arrow_down_deposit_icon"
                    />
                  </div>
                  <span className="transPopData">
                    {' '}
                    {data.transaction_type}
                  </span>
                </div>
                <div className="tranPop_div_cont1">
                  Date{' '}
                  <span className="transPopData">
                    {' '}
                    {data.timestamp.slice(0, 10)}
                  </span>{' '}
                </div>
                <div className="tranPop_div_cont1">
                  Amount{' '}
                  <span className="transPopData">
                    {data.transaction_type == 'DEBIT' ? (
                      <span>
                        -₦
                        {numberWithCommas(
                          parseInt(data.amount).toFixed(2)
                        )}
                      </span>
                    ) : (
                      <span>
                        +₦
                        {numberWithCommas(
                          parseInt(data.amount).toFixed(2)
                        )}
                      </span>
                    )}
                  </span>{' '}
                </div>
                <div className="tranPop_div_cont1">
                  Channel{' '}
                  <span className="transPopData">{data.channel}</span>
                </div>
                <div className="tranPop_div_cont1">
                  Status{' '}
                  <span className="transPopData">
                    <CircleIcon className="complete_circle" />
                    Completed
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  // cart: state.shop.cart,
});

export default connect(mapStateToProps, {})(DashboardHomePage);
