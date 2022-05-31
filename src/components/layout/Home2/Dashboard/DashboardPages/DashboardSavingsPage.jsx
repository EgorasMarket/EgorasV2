import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import DashBoardCard from "../DashBoardCard";
import axios from "axios";
import { connect } from "react-redux";
import { API_URL2 as api_url2 } from "../../../../../actions/types";
import "../DashboardStyles/dashboard_savings.css";
// import { NodataFound } from "../NodataFound/NoDataFoundComponent";
import LoadingIcons from "react-loading-icons";
import { NoDataFoundComponent } from "../NodataFound/NoDataFoundComponent";
import { numberWithCommas } from "../../../../../static";
import FlutterButton from "../../../../../flutterwave/FlutterButton";

const responsive6 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
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
const responsive7 = {
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
function DashboardSavingsPage({ match, auth }) {
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [fullname, setFullname] = useState("");

  const [savedNum, setSavedNum] = useState(5);
  const [Loading, setLoading] = useState(false);
  const [itemdisplay, setItemDisplay] = useState([]);
  const [product_id, setProductId] = useState(match.params.id);

  const [productDetail, setProductDetail] = useState({
    product_image: "",
    product_name: "",
    amount: "",
    product_duration: "",
  });

  const [userLockId, setUserLockId] = useState([]);
  const [lockedItem, setLockedItem] = useState({ itemsLock: "" });
  const { itemslock } = lockedItem;

  const { product_image, product_name, amount, product_duration } =
    productDetail;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [accountInfo, setAccountInfo] = useState({
    ledger: 0,
    balance: 0,
    pending_sum: 0,
    total_sum: 0,
  });
  const { ledger, pending_sum, balance, total_sum } = accountInfo;

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/products", null, config)
      .then((data) => {
        //console.log(data.data.data, "chukwubuike");

        setItemDisplay(data.data.data);

        //console.log("=============");
        //console.log(itemdisplay);
        //console.log("=============");
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, [auth]);

  useEffect(async () => {
    //console.log(match.params.prduct_id,"play every day")
    //console.log(auth.user.user.id)

    await axios
      .get(
        api_url2 + `/v1/product/retrieve/locked/${auth.user.user.id}`,
        null,
        config
      )
      .then((data) => {
        console.log(data.data, "Ewwooo oh");

        setUserLockId(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(async () => {
    //console.log(auth.user.user.id);
    setLoading(true);
    const customer_id = auth.user.user.id;
    setFullname(auth.user.user.fullname);
    setEmail(auth.user.user.email);
    setPhonenumber(auth.user.user.phoneNumber);
    const body = JSON.stringify({
      customer_id,
    });
    await axios
      .post(api_url2 + "/v1/user/accounts/fetch/dashboard", body, config)
      .then((data) => {
        //console.log(data.data.data, "bbbbbbb");
        setLoading(false);
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

  const text = "No item Locked yet";

  // useEffect(() => {
  //   const body = JSON.stringify({
  //     product_id,
  //   });

  //   //console.log(body);

  //   axios
  //     .post(api_url2 + "/v1/product/retrieve/specific", body, config)
  //     .then((data) => {
  //       //console.log(data.data.data, "king");

  //       setProductDetail({
  //         product_image: data.data.data.product_image,
  //         product_name: data.data.data.product_name,
  //         amount: data.data.data.amount,
  //         product_duration: data.data.data.product_duration,
  //       });
  //     })
  //     .catch((err) => {
  //       //console.log(err.response); // "oh, no!"
  //     });
  // }, []);

  // const numberWithCommas = (x) => {
  //   return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  // };

  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="dash_savings_area">
            <div className="dash_savings_area1">
              <div className="dash_savings_area1_title">Savings Overview</div>
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
                style={{ height: "25em" }}
              >
                {/* {data.dashBoardHomeCard.map((asset, index) => ( */}
                <DashBoardCard
                  background={"/img/save_card1.svg"}
                  title={"Total Savings"}
                  Loading={Loading}
                  LoadingIcon={<LoadingIcons.Oval fill="#fff" />}
                  balance={numberWithCommas(parseInt(total_sum).toFixed(2))}
                />
                <DashBoardCard
                  background={"/img/save_card2.svg"}
                  title={"Pending Payment"}
                  Loading={Loading}
                  LoadingIcon={<LoadingIcons.Oval fill="#fff" />}
                  balance={numberWithCommas(parseInt(pending_sum).toFixed(2))}
                />
                <DashBoardCard
                  background={"/img/save_card3.svg"}
                  title={"Wallet Balance"}
                  Loading={Loading}
                  LoadingIcon={<LoadingIcons.Oval fill="#fff" />}
                  balance={numberWithCommas(parseInt(balance).toFixed(2))}
                />
                <DashBoardCard
                  background={"/img/save_card3.svg"}
                  title={"Ledger Balance"}
                  Loading={Loading}
                  LoadingIcon={<LoadingIcons.Oval fill="#fff" />}
                  balance={numberWithCommas(parseInt(ledger).toFixed(2))}
                />

                {/* ))} */}
              </Carousel>

              {userLockId.length <= 0 ? null : (
                <div className="savings_overview_body_cont1">
                  Total Number of Locked{" "}
                  {userLockId.length >= 2 ? "items" : "item"}{" "}
                  <span className="saved_figure">{userLockId.length}</span>
                </div>
              )}
              {userLockId.length <= 0 ? (
                <NoDataFoundComponent text={text} />
              ) : (
                <div className="locked_items">
                  <div class="save_prod_deta">
                    <thead className="assets-category-titles save_list_titles">
                      <tr className="assets save_list_assets_head ">
                        <th className="assets-category-titles-heading1">
                          Item
                        </th>
                        <th className="assets-category-titles-heading1">
                          Item Details
                        </th>

                        <th className="assets-category-titles-heading1 quant">
                          Order_id
                        </th>
                        <th className="assets-category-titles-heading1 quant">
                          Saved Amount
                        </th>
                        <th className="assets-category-titles-heading1_last">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <table className="save_item_table">
                      {userLockId.map((asset) => (
                        <tbody
                          className="save_items_cat popular-categories"
                          id="popular-categories"
                        >
                          {" "}
                          <tr className="assets-category-row saving_assets_row">
                            <td className="save_item_data">
                              <div className="assets-data height_data">
                                <img
                                  src={asset.product_img}
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
                                  {asset.product_name}
                                </div>
                                <div className="save_item_days_left">
                                  {asset.order_id}
                                  {/* <div className="days_left_percentage_cont">
                                  <span
                                    className="days_left_percentage"
                                    style={{
                                      width:
                                        100 %
                                        -(
                                          (asset.amount * 100) /
                                          asset.unitCount
                                        ),
                                    }}
                                  ></span>
                                </div> */}

                                  <div>
                                    Savings duration : {asset.product_duration}{" "}
                                    {"days left"}
                                  </div>
                                  <FlutterButton
                                    orderId={asset.order_id}
                                    email={email}
                                    phonenumber={phonenumber}
                                    fullname={fullname}
                                  />
                                </div>
                                {/* <div className="save_total_locked_amount">
                                <span className="items_left_amount">
                                  Total Amount Locked on Item
                                </span>
                                ₦{asset.total_locked_amount}
                              </div> */}
                              </div>
                            </td>
                            <td className="save_item_data1b">
                              <div className="assets-data-name center_name">
                                {asset.order_id}
                              </div>
                            </td>
                            <td className="save_item_data1b">
                              <div className="assets-data-name center_name">
                                ₦{numberWithCommas(asset.paidSum.toFixed(2))}
                              </div>
                            </td>
                            <td className="save_item_data1b">
                              <div className="assets-data-name_last">
                                ₦{numberWithCommas(asset.sum.toFixed(2))}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
              )}
            </div>
            <div className="dash_savings_area2">
              <div className="savings_transactions_divs"></div>
            </div>
            {/* ====================================== */}
            {/* ====================================== */}
            {/* ====================================== */}
            {/* ====================================== */}
            {/* ====================================== */}
            {/* ====================================== */}
          </div>
        </div>
      </section>
    </div>
  );
}

// export default DashboardSavingsPage;

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  // cart: state.shop.cart
});

// export default DashboardSidebar;

export default connect(mapStateToProps, {})(DashboardSavingsPage);
