import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../AdminStyles/allCustomer.css";
import axios from "axios";

import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";

const Transact = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [branch, setBranch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allCustomersByBranch, setAllCustomersByBranch] = useState([]);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // const saveCustomerId = (event) => {
  //   //console.log(event.target.id);
  //   localStorage.setItem("adminCusId", event.target.id);
  // };
  const onChange = (event) => {
    setBranch(event.target.value);
    //console.log(event.target.value);
  };

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/user/transactions/customer/all", null, config)
      .then((data) => {
        setAllCustomersByBranch(data.data.payload);
        console.log(data.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (branch === "") {
      setSearchResults(allCustomersByBranch);
      //console.log("tttt");
    } else {
      console.log(allCustomersByBranch);
      console.log(branch);
      let results = allCustomersByBranch.filter(
        (member) => member.branch == branch
      );
      setSearchResults(results);
      console.log("====================================");
      console.log(results);
      console.log("====================================");
    }
  }, [branch, allCustomersByBranch]);
  return (
    <>
      {/* {((role201 === "CASHIER") || (role201 === "CUSTOMER_SERVICE" ) && (way === "/super_admin/all_user"))? */}
      <div className="other2">
        <section className="no-bg">
          <div className="container">
            <div className="all_user_data_area">
              <div className="all_users_search">
                Select Users Branch
                <div className="search_container">
                  {/* <SearchIcon className="user_search_icon" /> */}
                  <select
                    className="cust_select"
                    onChange={onChange}
                    value={branch}
                  >
                    <option value="" className="opt">
                      Click to select:
                    </option>
                    <option value="RUMUKWRUSHI">Rumuokwurushi</option>
                    <option value="Oyigbo">Oyigbo</option>
                    <option value="Agip">Agip</option>
                  </select>

                  {/* <input
                    type="search"
                    name=""
                    id=""
                    placeholder="SearchName"
                    className="user_search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  /> */}
                </div>
              </div>
              <div className="all_users_body">
                <table className="assets-table s_table">
                  <thead className="assets-category-titles">
                    <tr className="assets">
                      <th className="assets-category-titles-heading1 right_align">
                        {/* Channel */}
                      </th>
                      <th className="assets-category-titles-heading1 right_align email_align">
                        {/* Customer Id */}
                        Channel
                      </th>

                      <th className="assets-category-titles-heading1 right_align email_align">
                        Customer Id
                      </th>



                      <th className="assets-category-titles-heading1">Date</th>


                       <th className="assets-category-titles-heading1 right_align email_align">
                        Type
                      </th>

                        <th className="assets-category-titles-heading1 right_align email_align">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  {searchResults.map((user) => (
                    <tbody
                      className="assets-table-body popular-categories"
                      id="popular-categories"
                    >
                      {" "}
                      <tr className="assets-category-row">
                        <td className="assets-category-data">
                          <div className="assets-data">
                            {/* <PhoneAndroidIcon className="assets-list-icon" /> */}
                          </div>
                        </td>
                        {/* <td className="assets-category-data1">
                          <div className="assets-data-name">{user.branch}</div>
                        </td> */}
                        {/* <td className="assets-category-data1b">
                          <div className="assets-data-name">{user.channel}</div>
                        </td> */}
                        <td className="assets-category-data1b">
                          <div className="assets-data-name">{user.channel}</div>
                        </td>
                        <td className="assets-category-data1b">
                          <div className="assets-data-name">
                            {user.customer_id}
                          </div>
                        </td>
                        <td className="assets-category-data1b">
                          <div className="assets-data-name">
                            {user.timestamp}
                          </div>
                        </td>
                        {/* <td className="assets-category-data1b">
                          <div className="assets-data-name">
                            {user.transaction_hash.substring(0, 10) +
                              "..." +
                              user.transaction_hash.substr(
                                user.transaction_hash.length - 7
                              )}
                          </div>
                        </td> */}
                         <td className="assets-category-data1b">
                          <div className="assets-data-name">
                            {user.transaction_type}
                            {/* {user.transaction_type} */}
                          </div>
                        </td>
                        
                          <td className="assets-category-data1b">
                          <div className="assets-data-name">
                            {user.amount}
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

//console.log(searchResults);

// =========
// =========

// =========
// =========

export default Transact;
// export default function Newone(){
//   const url = '/v1/user/transactions/customer/byBranch';

//   const paper = () => {
//     axios.get(`${url}notes`)
//   }
// }
