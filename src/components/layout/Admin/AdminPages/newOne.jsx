import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../AdminStyles/allCustomer.css";
import axios from "axios";

import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";

const NewOne = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allCustomers, setAllCustomers] = useState([]);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // const saveCustomerId = (event) => {
  //   //console.log(event.target.id);
  //   localStorage.setItem("adminCusId", event.target.id);
  // };
  useEffect(() => {
    axios
      .get(api_url2 + "/v1/user/transactions/customer/all", config, null)
      .then((data) => {
        setAllCustomers(data.data.payload);
        // setSearchResults(data.data.payload);
        console.log(data.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    //console.log(event.target.value);
  };
  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults(allCustomers);
      //console.log("tttt");
    } else {
      console.log(allCustomers);
      const results = allCustomers.filter((userInfo) =>
        userInfo.customer_name
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      console.log(results);
      setSearchResults(results);
    }
  }, [searchTerm, allCustomers]);

  return (
    <>
      {/* {((role201 === "CASHIER") || (role201 === "CUSTOMER_SERVICE" ) && (way === "/super_admin/all_user"))? */}
      <div className="other2">
        <section className="no-bg">
          <div className="container">
            <div className="all_user_data_area">
              <div className="all_users_search">
                Search Users
                <div className="search_container">
                  <SearchIcon className="user_search_icon" />
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search name"
                    className="user_search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
              <div className="all_users_body">
                <table className="assets-table s_table">
                  <thead className="assets-category-titles">
                    <tr className="assets">
                      <th className="assets-category-titles-heading1">
                        Amount
                      </th>
                      <th className="assets-category-titles-heading1">
                        Branch
                      </th>
                      <th className="assets-category-titles-heading1">
                        Channel
                      </th>
                      <th className="assets-category-titles-heading1 right_align email_align">
                        Customer Name
                      </th>
                      <th className="assets-category-titles-heading1 right_align">
                        Officer Id
                      </th>
                      <th className="assets-category-titles-heading1 right_align">
                        Date
                      </th>
                      <th className="assets-category-titles-heading1 right_align">
                        Transac hash
                      </th>
                      <th className="assets-category-titles-heading1 right_align">
                        Transac Type
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
                            <div className="assets-data-name">
                              {Math.round(user.amount)}
                            </div>
                          </div>
                        </td>
                        <td className="assets-category-data1">
                          <div className="assets-data-name">{user.branch}</div>
                        </td>
                        <td className="assets-category-data1b">
                          <div className="assets-data-name">{user.channel}</div>
                        </td>
                        <td className="assets-category-data1b">
                          <div className="assets-data-name">
                            {user.customer_name}
                          </div>
                        </td>
                        <td className="assets-category-data1b">
                          <div className="assets-data-name">
                            {user.officer_id}
                          </div>
                        </td>
                        <td className="assets-category-data1b">
                          <div className="assets-data-name">
                            {user.timestamp.split("T")[0]}
                          </div>
                        </td>
                        <td className="assets-category-data1b">
                          <div className="assets-data-name">
                            {user.transaction_hash.substring(0, 10) +
                              "..." +
                              user.transaction_hash.substr(
                                user.transaction_hash.length - 7
                              )}
                          </div>
                        </td>
                        <td className="assets-category-data1b">
                          <div className="assets-data-name">
                            {user.transaction_type}
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

export default NewOne;
// export default function Newone(){
//   const url = '/v1/user/transactions/customer/byBranch';

//   const paper = () => {
//     axios.get(`${url}notes`)
//   }
// }
