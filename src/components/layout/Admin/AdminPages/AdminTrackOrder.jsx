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
  TextField,
  Button,
} from '@mui/material';

import { useLocation } from 'react-router-dom';

const way = window.location.pathname;

const AdminTrackOrder = () => {
  const [customerData, setCustomerData] = useState([]);
  const [rolesInfo, setRolesInfo] = useState({
    role20: '',
  });

  const [modal, showModal] = useState(false);
  const [data, setData] = useState(null);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  let location = useLocation();

  useEffect(async () => {
    if (location.order_id) {
      axios
        .get(
          api_url2 + '/v1/order/track/' + location.order_id,
          null,
          config
        )
        .then((data) => {
          setData(data.data.data);
          console.log(data);
        })
        .catch((err) => {
          //console.log(err); // "oh, no!"
        });
    }
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
          <div className="heading">
            <h3>Track an Order</h3>

            <TextField
              id="outlined-basic"
              label="Enter order id"
              variant="outlined"
            />

            <Button
              onClick={() => {
                console.log(data);
              }}
              variant="contained"
            >
              {' '}
              Track
            </Button>
          </div>

          <div className="order_details">
            <Typography> Product Name: {data.product} </Typography>
            {data && data.total_sum}
          </div>
        </div>
      </section>
      w{/* :null} */}
    </>
  );
};

export default AdminTrackOrder;
