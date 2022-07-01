import React, { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "../DashboardStyles/dashboardOrderPage.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import data from '../../../MockData';
import axios from "axios";
import { NoDataFoundComponent } from "../NodataFound/NoDataFoundComponent";

import { API_URL2 as api_url2 } from "../../../../../actions/types";
import data from "../../../MockData";
const DashboardOrderPage = () => {
  //states
  const [item, setItem] = useState([]);

  //DESTRUCTURE THE DATA OBJECT

  const [success, setSuccess] = useState();
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(async () => {
    try {
      const call = await axios.get(
        api_url2 + "/v1/order/allOrders",
        null,
        config
      );
      console.log(call);
      setSuccess(call.data.success);
      setItem(call.data.payloads);
    } catch (err) {
      console.log(err.message);
      // alert(err.message);
    }
  }, []);

  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="order_area">
            <div className="order_heading">Order History ({item.length})</div>
            <div className="order_body">
              <div className="order_cont1">
                <div className="order_cont1_headings">
                  <div className="order_cont1_heading_txt order_cont1_heading_txt_first ">
                    Asset {success}
                  </div>
                  <div className="order_cont1_heading_txt">Title</div>
                  <div className="order_cont1_heading_txt">Type</div>
                  <div className="order_cont1_heading_txt">Amount</div>
                  <div className="order_cont1_heading_txt">Order Id</div>
                  <div className="order_cont1_heading_txt order_cont1_heading_txt_last">
                    Status
                  </div>
                </div>
                <div className="order_body_table">
                  <div className="order_cont1_body_container">
                    {item.length <= 0 ? (
                      <NoDataFoundComponent text="No orders yet" />
                    ) : (
                      item.map((order) => (
                        <div className="order_cont1_body">
                          <div className="order_cont_body_data order_cont_body_data_first">
                            <img
                              src={order.product_img}
                              alt=""
                              className="order_cont_body_img"
                            />
                          </div>

                          <div className="order_cont_body_data">
                            {order.product_name}
                          </div>
                          <div className="order_cont_body_data">
                            {order.payment_type == "OUTRIGHT" ? (
                              <span
                                className="order_type"
                                style={{
                                  color: "#ffffff",
                                  fontWeight: "700",
                                  background: "#41ba71",
                                  padding: " 0.3em 1em",
                                  borderRadius: "50px",
                                  fontSize: "11px",
                                }}
                              >
                                {order.payment_type}
                              </span>
                            ) : order.payment_type === "INSTALLMENT" ? (
                              <span
                                className="order_type"
                                style={{
                                  color: "#ffffff",
                                  fontWeight: "700",
                                  background: "#e4a788",
                                  padding: " 0.3em 1em",
                                  borderRadius: "50px",
                                  fontSize: "11px",
                                }}
                              >
                                {order.payment_type}
                              </span>
                            ) : null}
                          </div>
                          <div className="order_cont_body_data">
                            ₦{order.total_sum}
                          </div>
                          <div className="order_cont_body_data">
                            {order.order_id}
                          </div>

                          <div className="order_cont_body_data">
                            {order.order_status_code == "PENDING" ? (
                              <span
                                className="order_status"
                                style={{
                                  background: "#fff3cf",
                                  color: "#c19000",
                                }}
                              >
                                {order.order_status_code}{" "}
                                <FontAwesomeIcon
                                  className="ml-2"
                                  icon={faSpinner}
                                  spin
                                />
                              </span>
                            ) : order.order_status_code == "DELIVERED" ? (
                              <span className="order_status">
                                {order.order_status_code}{" "}
                                <CheckCircleOutlineIcon className="cancel_icon" />
                              </span>
                            ) : order.order_status_code == "CANCELED" ? (
                              <span
                                className="order_status"
                                style={{
                                  background: "#ffd6d6",
                                  color: "#ed5c5c",
                                }}
                              >
                                {order.order_status_code}{" "}
                                <HighlightOffIcon className="cancel_icon" />
                              </span>
                            ) : null}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardOrderPage;
