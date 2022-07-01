import React, { useState, useEffect, useMemo } from 'react';
// import data from "../../../../Data/AllUsersData.json";

import axios from 'axios';
import { API_URL2 as api_url2 } from '../../../../actions/types';
import '../AdminStyles/admin_all_products.css';
import { numberWithCommas } from '../../../../static';
import UpdatePriceComponent from '../../../assets/UpdatePriceComponent';
import '../../../../css/new.css';
import {
  Container,
  Grid,
  Modal,
  Box,
  Typography,
} from '@mui/material';

import CustomerCard from '../../../assets/CustomerCard';
import BasicAccordion from '../../../assets/BasicAccordion';
const way = window.location.pathname;

const AdminDetailedOrder = () => {
  const [customerData, setCustomerData] = useState([]);
  const [rolesInfo, setRolesInfo] = useState({
    role20: '',
  });

  const [modal, showModal] = useState(false);
  const { role20 } = rolesInfo;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: window.innerWidth - 700,
    bgcolor: '#fff',
    // border: '0.5px solid #000',
    // boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    axios
      .get(api_url2 + '/v1/order/report', null, config)
      .then((data) => {
        console.log(data.data.payloads, 'chukwubuike');
        // setItemDisplay(data.data.data);
        setCustomerData(data.data.payloads);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + '/v1/admin/info', null, config)
      .then((data) => {
        //console.log(data.data.user, "line_ful");
        setRolesInfo({
          role20: data.data.user.role,
        });
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  return (
    <>
      {/* {(role20 === "HOD_MEDIA") && (way ===  "/super_admin/all_products" )? */}
      <section className="section-heading">
        <div className="container">
          <div className="cart_areas">
            <div className="cart_area1">
              <div className="cart_item_num">
                All Products({customerData.length})
              </div>
              <div className="locked_items2 locked_items2a">
                <div>
                  <h1>Customer Order Records</h1>
                </div>
                <div class="save_prod_deta">
                  {customerData
                    ? // ? customerData.map((data, index) => (
                      customerData.map((_current, index) => (
                        <>
                          <BasicAccordion
                            id={_current.customer_details.id}
                            title={_current.customer_details.fullname}
                            data={_current}
                          />
                        </>
                      ))
                    : 'no data'}
                </div>
                {/* <div style={{float:"right",backgroundColor:"#41ba71",color:"white",padding:"8px 10px",borderRadius:"6px",marginTop:"5px"}}>See More</div> */}
                {/* <div className="total_div">
        Total: <span className="sum_resu"> ₦{'bnbnbn'}</span>
      </div> */}
              </div>
              <div className="checkout_btns">
                {/* <button className="checkout_btn1" onClick={OpenModal}>
        Proceed to Checkout{" "}
      </button> */}
              </div>
            </div>
            {/* <div className="cart_area2"></div> */}
          </div>
        </div>
      </section>
      w{/* :null} */}
    </>
  );
};

export default AdminDetailedOrder;
