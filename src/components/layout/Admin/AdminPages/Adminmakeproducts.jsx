import React, { useState, useEffect, useMemo } from "react";
// import data from "../../../../Data/AllUsersData.json";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { API_URL2 as api_url2 } from "../../../../actions/types";
import "../AdminStyles/admin_all_products.css";

const way = window.location.pathname;

const Adminmakeproducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [itemDisplay, setItemDisplay] = useState([]);
  const [rolesInfo, setRolesInfo] = useState({
    role20: "",
  });

  const { role20 } = rolesInfo;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/approved/products", null, config)
      .then((data) => {
        //console.log(data.data.data, "chukwubuike");

        setItemDisplay(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/admin/info", null, config)
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
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    //console.log(event.target.value);
  };
  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults(itemDisplay);
      //console.log("tttt");
    } else {
      console.log(itemDisplay);
      const results = itemDisplay.filter((userInfo) =>
        userInfo.product_name
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchTerm, itemDisplay]);
  return (
    <>
      {/* {(role20 === "HOD_MEDIA") && (way ===  "/super_admin/all_products" )? */}
      <div className="other2">
        <section className="no-bg">
          <div className="container">
            <div className="cart_areas">
              <div className="cart_area1">
                <div
                  className="cart_item_num flex_search_head"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Make Products{" "}
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
                <div className="locked_items2 locked_items2a">
                  <div class="save_prod_deta">
                    <thead className="assets-category-titles save_list_titles">
                      <tr className="assets save_list_assets_head ">
                        <th className="assets-category-titles-heading1">
                          Image
                        </th>
                        <th className="assets-category-titles-heading1">
                          Name
                        </th>
                        <th className="assets-category-titles-heading1">
                          Brand
                        </th>
                        <th className="assets-category-titles-heading1 quant">
                          Category
                        </th>
                        {/* <th className="assets-category-titles-heading1 quant">
                          Unit Price
                        </th> */}
                        <th className="assets-category-titles-heading1_last">
                          Price
                        </th>
                        <th className="assets-category-titles-heading1_last">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <table className="save_item_table overFlow">
                      {searchResults.map((asset, index) => (
                        <tbody
                          className="save_items_cat popular-categories"
                          id="popular-categories"
                          key={index.toString()}
                        >
                          {" "}
                          <tr
                            id={asset.id}
                            className="assets-category-row saving_assets_row"
                          >
                            <td className="save_item_data width_thin">
                              <div className="assets-data height_data">
                                <img
                                  src={`${asset.product_image}`}
                                  alt=""
                                  className="save_item_img_img"
                                />
                              </div>
                            </td>

                            <td className="save_item_data1">
                              <div className="save_items_details">
                                <div className="save_items_details1">
                                  {asset.product_name}
                                </div>
                              </div>
                            </td>
                            <td className="save_item_data1b">
                              <div className="assets-data-name center_name">
                                {asset.product_brand}
                              </div>
                            </td>
                            <td className="save_item_data1b">
                              <div className="assets-data-name center_name">
                                {asset.product_category_desc}
                              </div>
                            </td>

                            <td className="save_item_data1b">
                              <div className="assets-data-name center_name">
                                ₦{asset.amount}
                              </div>
                            </td>

                            <td className="save_item_data1b">
                              {/* <div className="assets-data-name center_name">
                              ₦{asset.amount}
                            </div> */}
                              {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                              <a
                                href={`/super_admin/products_view/${
                                  asset.id
                                }/${asset.product_name.replace(/\s+/g, "-")}`}
                                className="assets-data-name_last"
                              >
                                <button
                                  id={"yes_" + asset.id}
                                  className="checkout_btn1 py-1 px-2 m-0"
                                >
                                  {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                                  View detail{" "}
                                </button>
                              </a>

                              {/* <button className="checkout_btn1 py-1 px-2 ml-1">
                              Refuse{" "}
                            </button> */}
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
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
      </div>
      {/* :null} */}
    </>
  );
};

export default Adminmakeproducts;
