import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../AdminStyles/allCustomer.css';
import axios from 'axios';
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from '../../../../actions/types';

const way = window.location.pathname;

const AdminShowOrder = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  // const [allCustomers, setAllCustomers] = useState([]);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  useEffect(async () => {
    await axios
      .get(api_url2 + '/v1/order/admin/allOrders', null, config)
      .then((data) => {
        console.log(data, 'line_ful');
        setData(data.data.payloads);
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  }, []);

  const fulfilOrder = async (order_id) => {
    alert(order_id);
    await axios
      // .post(api_url2 + '/v1/order/fulfil/' + order_id, null, config)
      .post(`${api_url2}/v1/order/fulfil/${order_id}`, null, config)
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
          // alert('successfully updated');
        } else {
          // alert('failure');
        }
      })
      .catch((err) => {
        console.log(err.message); // "oh, no!"
      });
  };

  return (
    <>
      {/* {((role201 === "CASHIER") || (role201 === "CUSTOMER_SERVICE" ) && (way === "/super_admin/all_user"))? */}
      <div className="other2">
        <section className="no-bg">
          <div className="container">
            <div className="all_user_data_area">
              {/* <div className="all_users_search">
                Search Orders
                <div className="search_container">
                  <SearchIcon className="user_search_icon" />
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search"
                    className="user_search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </div> */}
              <div className="all_users_body">
                <table className="assets-table s_table">
                  <thead className="assets-category-titles">
                    <tr className="assets">
                      <th className="assets-category-titles-heading1">
                        Customer Name
                      </th>
                      <th className="assets-category-titles-heading1">
                        order_id
                      </th>
                      <th className="assets-category-titles-heading1">
                        Status
                      </th>
                      <th className="assets-category-titles-heading1 right_align email_align">
                        Payment Channel
                      </th>
                      <th className="assets-category-titles-heading1 right_align">
                        Total Sum
                      </th>
                      <th className="assets-category-titles-heading1 right_align">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  {data.map((payload, index) => (
                    <tbody
                      key={index}
                      className="assets-table-body popular-categories"
                      id="popular-categories"
                    >
                      <tr className="assets-category-row">
                        <td className="assets-category-data">
                          <div className="assets-data">
                            {/* <PhoneAndroidIcon className="assets-list-icon" /> */}
                            <div className="assets-data-name">
                              {payload.customer_name}
                            </div>
                          </div>
                        </td>
                        <td className="assets-category-data1">
                          <div className="assets-data-name">
                            {payload.order_id}
                          </div>
                        </td>
                        <td className="assets-category-data1b">
                          <div className="assets-data-name">
                            {payload.order_status_code}
                          </div>
                        </td>
                        <td className="assets-category-data1b">
                          <div className="assets-data-name">
                            {payload.payment_channel}
                          </div>
                        </td>
                        <td className="assets-category-data1b">
                          <div className="assets-data-name">
                            {payload.total_sum}
                          </div>
                        </td>
                        <td className="assets-category-data-last">
                          <div className="assets-data-name-last">
                            <a
                              // href={`/super_admin/user_overview/${payload.id}`}
                              className="mr-2"
                            >
                              <button
                                // id={payload.id}
                                className="btn btn-primary"
                              >
                                DETAILS
                              </button>
                            </a>

                            {payload.order_status_code ===
                            'DELIVERED' ? null : (
                              <a>
                                <button
                                  // id={payload.id}
                                  className="btn btn-success"
                                  onClick={() => {
                                    fulfilOrder(payload.order_id);
                                  }}
                                >
                                  FULFIL
                                </button>
                              </a>
                            )}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* :null} */}
    </>
  );
};

export default AdminShowOrder;
