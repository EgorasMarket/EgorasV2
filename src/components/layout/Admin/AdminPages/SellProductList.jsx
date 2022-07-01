import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../AdminStyles/allCustomer.css";
import axios from "axios";
import Moment from 'react-moment';
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";



const way = window.location.pathname;

const SellProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [rolesInfos,setRolesInfos]= useState({
    role201:""
  })

  const {role201}=rolesInfos;

  const [allProducts, setAllProducts] = useState([]);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
 
  useEffect(() => {
    // //console.log('ttttrr');
    axios
      .get(api_url2 + "/v1/outrightSell/get/outright/sell/customers", null, config)
      .then((data) => {
        console.log(data.data.data, "king");

        setAllProducts(data.data.data);
      })
      .catch((err) => {
        console.log(err.response, 'ooooo'); // "oh, no!"
      });

    //console.log("my naem");
    // ============
  }, []);
       
  useEffect(() => {
  
    axios.get(
        api_url2 + "/v1/admin/info",
        null,
        config
    ).then((data) => {
       
        //console.log(data.data.user, "line_ful");
        setRolesInfos({
          role201:data.data.user.role,
        })
       
    
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      }); 
  }, []);


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    //console.log(event.target.value);
  };
  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults(allProducts);
      //console.log("tttt");
    } else {
      console.log(allProducts);
      const results = allProducts.filter((userInfo) =>
        userInfo.fullname
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchTerm, allProducts]);

  //console.log(searchResults);

  // =========
  // =========

  // =========
  // =========

  const saveCustomerId = (event) => {
    //console.log(event.target.id);
    localStorage.setItem("adminCusId", event.target.id);
  }
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
                  placeholder="Search"
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
                    <th className="assets-category-titles-heading1">Name</th>
                    <th className="assets-category-titles-heading1">
                      Phone No
                    </th>
                    <th className="assets-category-titles-heading1 right_align email_align">
                      Email Address
                    </th>
                    <th className="assets-category-titles-heading1">Appointment Date</th>
                    <th className="assets-category-titles-heading1 right_align">
                      Action
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
                          <div className="assets-data-name">
                            {user.fullname}
                          </div>
                        </div>
                      </td>
                      <td className="assets-category-data1">
                        <div className="assets-data-name">
                          {user.phoneNumber}
                        </div>
                      </td>
                      <td className="assets-category-data1b">
                        <div className="assets-data-name">{user.emailAddress}</div>
                      </td>
                      <td className="assets-category-data1b">
                        <div className="assets-data-name"><Moment format="D MMM YYYY" withTitle>{user.appointmentDate}</Moment></div>
                      </td>
                      <td className="assets-category-data-last">
                        <div className="assets-data-name-last">
                          <a href={`/super_admin/user_overview/${user.id}`} className='mr-2'>
                            <button
                              // id={user.id}
                              className="btn btn-primary"
                            >
                              View
                            </button>
                          </a>
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

export default SellProductList;
