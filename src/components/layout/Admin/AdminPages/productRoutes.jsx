import React, { useState, useEffect, useMemo } from "react";
// import data from "../../../../Data/AllUsersData.json";
import { numberWithCommas } from "../../../../static";

import axios from "axios";
import { API_URL2 as api_url2 } from "../../../../actions/types";
import "../AdminStyles/admin_all_products.css";

const way = window.location.pathname;

const Adminproduct = () => {
  const [pdwork, setpdwork] = useState([]);
  const [roleRemove, setRoleRemove] = useState("");
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
        console.log(data.data.data, "chukwubuike");
        console.log(data.data.data, "chukwubuike");

        setpdwork(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
        // console.log(err); // "oh, no!"
        // console.log(err); // "oh, no!"
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

  //   useEffect(() => {

  // }, [product_id]);
  const pie = (id) => {
    let today = new Date().toLocaleDateString();
  };

  const markPrinted = (product_id) => {
    axios
      .get(
        api_url2 + "/v1/product/retrieve/products/printed/" + product_id,
        null,
        config
      )
      .then((data) => {
        console.log(data.data, "line_ful");
        setRoleRemove(product_id);
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  };

  useEffect(() => {
    if (roleRemove === "") {
      setpdwork(pdwork);
      //console.log("tttt");
    } else {
      console.log(pdwork);
      const results = pdwork.filter(
        (userInfo) =>
          !userInfo.id
            .toString()
            .toLowerCase()
            .includes(roleRemove.toLowerCase())
      );
      console.log(results);
      setpdwork(results);
    }
  }, [roleRemove]);

  const printProductCode = (product_code) => {
    let today = new Date().toLocaleDateString();

    console.log(product_code);

    // const getName = tag.split(" ");
    // console.log(getName);
    // tag.replaceAll(' ', '')
    // var divContents = document.getElementById("mainContent").innerHTML;

    var printWindow = window.open("", "", "height=1200,width=1200");
    printWindow.document.write(
      "<html><head><style>.small-text{font-size: 12px;}table.GeneratedTable {width: 100%;background-color: #ffffff; border-collapse: collapse; border-width: 1px; border-color: #000000; border-style: solid; color: #000000;}table.GeneratedTable td, table.GeneratedTable th { border-width: 1px; border-color: #000000; border-style: solid;}.center-text{text-align: center;} .center-text h4{margin: 4px;}.set-flex {display: flex; justify-content: space-between;}.w-50{width: 45%;margin:5px;}.bbt{border-bottom: 1px solid black;}</style><title>PRINT PRODUCT ID</title></head>"
    );
    printWindow.document.write(
      '<body style="height: min-content;font-family: roboto;margin: 0; border-bottom: 1px solid black;font-weight:400;">'
    );
    // printWindow.document.write('<h2 style="margin-bottom: 5px">Companys Copy:</h2>');
    printWindow.document.write("<div>");
    printWindow.document.write('<h6 style="margin: 0;">Product ID</h6>');
    printWindow.document.write(
      '<h3 style="margin: 0;">' + product_code + "</h3>"
    );
    printWindow.document.write("</div>");
    printWindow.document.write("</body>");
    printWindow.document.write("</html>");
    printWindow.document.close();
    printWindow.print();
  };

  const printProductPrice = (product_name, amount) => {
    let today = new Date().toLocaleDateString();

    console.log(product_name, amount);

    // const getName = tag.split(" ");
    // console.log(getName);
    // tag.replaceAll(' ', '')
    // var divContents = document.getElementById("mainContent").innerHTML;

    var printWindow = window.open("", "", "height=1200,width=1200");
    printWindow.document.write(
      "<html><head><style>.small-text{font-size: 12px;}table.GeneratedTable {width: 100%;background-color: #ffffff; border-collapse: collapse; border-width: 1px; border-color: #000000; border-style: solid; color: #000000;}table.GeneratedTable td, table.GeneratedTable th { border-width: 1px; border-color: #000000; border-style: solid;}.center-text{text-align: center;} .center-text h4{margin: 4px;}.set-flex {display: flex; justify-content: space-between;}.w-50{width: 45%;margin:5px;}.bbt{border-bottom: 1px solid black;}</style><title>PRINT PRODUCT ID</title></head>"
    );
    printWindow.document.write(
      '<body style="height: min-content;font-family: roboto;margin: 0; border-bottom: 1px solid black;font-weight:400;">'
    );
    // printWindow.document.write('<h2 style="margin-bottom: 5px">Companys Copy:</h2>');
    printWindow.document.write("<div>");
    printWindow.document.write('<h2 style="margin: 0;">Product Price</h2>');
    printWindow.document.write('<h1 style="margin: 0;">₦' + amount + "</h1>");
    printWindow.document.write(
      '<h5 style="margin: 0;">' + product_name + "</h5>"
    );
    printWindow.document.write("</div>");
    printWindow.document.write("</body>");
    printWindow.document.write("</html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
      {/* {(role20 === "HOD_MEDIA") && (way ===  "/super_admin/all_products" )? */}
      <div className="other2">
        <section className="no-bg">
          <div className="container">
            <div className="cart_areas">
              <div className="cart_area1">
                <div className="cart_item_num">All Products</div>

                <div className="locked_items2 locked_items2a">
                  <div class="save_prod_deta">
                    {/* <table className="save_item_table" style={{display: 'unset'}}> */}
                    <thead className="assets-category-titles save_list_titles">
                      <tr className="assets save_list_assets_head ">
                        <th className="assets-category-titles-heading1">
                          Image
                        </th>
                        <th className="assets-category-titles-heading1">
                          Name
                        </th>

                        <th className="assets-category-titles-heading1">
                          Product id
                        </th>

                        <th className="assets-category-titles-heading1">
                          Description
                        </th>

                        {/* <th className="assets-category-titles-heading1 quant">
                          Category
                        </th> */}
                        {/* <th className="assets-category-titles-heading1 quant">
                          Unit Price
                        </th> */}
                        <th className="assets-category-titles-heading1_last">
                          Price
                        </th>
                        <th className="assets-category-titles-heading1_last">
                          Price
                        </th>
                        <th className="assets-category-titles-heading1_last">
                          Price
                        </th>
                        <th className="assets-category-titles-heading1_last">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <table className="save_item_table">
                      {pdwork.map((asset, index) => (
                        <tbody
                          className="save_items_cat popular-categories"
                          id="popular-categories"
                          // key={index.toString()}
                        >
                          {asset.printed === 0 ? (
                            <tr
                              id={asset.id}
                              className="assets-category-row saving_assets_row"
                            >
                              <td className="save_item_data width_thin">
                                <div className="assets-data height_data height_data1">
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
                                <div className="assets-data-name center_name center_name_elipsis">
                                  {asset.id}
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
                                <a className="assets-data-name center_name">
                                  <button
                                    id={"yes_" + asset.id}
                                    onClick={() =>
                                      printProductPrice(
                                        asset.product_name,
                                        asset.amount
                                      )
                                    }
                                    className="checkout_btn1 py-1 px-2 m-0"
                                  >
                                    {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                                    Print Price{" "}
                                  </button>
                                </a>
                                {/* <button className="checkout_btn1 py-1 px-2 ml-1">
                              Refuse{" "}
                            </button> */}
                              </td>

                              <td className="save_item_data1b">
                                {/* <div className="assets-data-name center_name">
                              ₦{asset.amount}
                            </div> */}
                                {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                                <a className="assets-data-name center_name">
                                  <button
                                    id={"yes_" + asset.id}
                                    onClick={() =>
                                      printProductCode(asset.product_code)
                                    }
                                    className="checkout_btn1 py-1 px-2 m-0"
                                  >
                                    {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                                    Print ID{" "}
                                  </button>
                                </a>
                              </td>

                              <td className="save_item_data1b">
                                {/* <div className="assets-data-name center_name">
                              ₦{asset.amount}
                            </div> */}
                                {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                                <a className="assets-data-name_last">
                                  <button
                                    id={"yes_" + asset.id}
                                    onClick={() => markPrinted(asset.id)}
                                    className="checkout_btn1 py-1 px-2 m-0"
                                  >
                                    {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                                    Completed{" "}
                                  </button>
                                </a>
                              </td>
                            </tr>
                          ) : null}
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

export default Adminproduct;
