import React, { useState, useEffect, useMemo } from "react";
// import data from "../../../../Data/AllUsersData.json";

import axios from "axios";
import {
  API_URL2 as api_url2,
} from "../../../../actions/types";
import "../AdminStyles/admin_all_products.css";

const way = window.location.pathname;

const UniqueProductRoutes = ({match}) => {
  const [itemdisplay,setItemDisplay] = useState([]);
  const [product_id, setProduct_id] = useState(match.params.id);
  const [rolesInfo,setRolesInfo]= useState({
    role20:""
  })

  // console.log(match.params.id);


  const {role20} = rolesInfo
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };



  useEffect(() => {

    axios.get(
        api_url2 + "/v1/product/retrieve/products/routes/"+product_id,
        null,
        config
    ).then((data) => {
       
        console.log(data.data.data, "chukwubuike");
     
       
        setItemDisplay(data.data.data);

      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });

    
  }, []);


      
  useEffect(() => {
  
    axios.get(
        api_url2 + "/v1/admin/info",
        null,
        config
    ).then((data) => {
       
        //console.log(data.data.user, "line_ful");
        setRolesInfo({
          role20:data.data.user.role,
        })
       
    
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      }); 
  }, []);



  return (
    <>
         {/* {(role20 === "HOD_MEDIA") && (way ===  "/super_admin/all_products" )? */}
    <div className="other2">
      <section className="no-bg">
      <div className="container">
          <div className="cart_areas">
            <div className="cart_area1">
              <div className="cart_item_num">
                All Products
              </div>
              <div className="locked_items2 locked_items2a">
                <div class="save_prod_deta">
                  <table className="save_item_table" style={{display: 'unset'}} style={{display: 'unset'}}>
                    <thead className="assets-category-titles">
                      <tr className="assets">
                        <th className="assets-category-titles-heading1">
                          Image
                        </th>
                        <th className="assets-category-titles-heading1">
                          Name
                        </th>
                        <th className="assets-category-titles-heading1">
                          Admin Officer
                        </th>
                        <th className="assets-category-titles-heading1 quant">
                          Carrier
                        </th>
                        {/* <th className="assets-category-titles-heading1 quant">
                          Unit Price
                        </th> */}
                        <th className="assets-category-titles-heading1_last">
                          Date
                        </th>
                        <th className="assets-category-titles-heading1_last">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody
                    className="save_items_cat  small_height popular-categories"
                    id="popular-categories" 
                    // key={index.toString()}
                    >
                    {" "}
                    {/* 
                    carrier: "HAPPY"
                    id: "291e4470-8b09-495b-a2bb-21dfab3a8882"
                    officer: "Mick Smith"
                    product_id: "157a9225-f9e9-455e-91c9-0d5u81870232"
                     */}
                    {/* {itemdisplay.slice(0,50).map((asset,index) => (
                        <tr id={asset.id} className="assets-category-row">
                          <td className="save_item_data_cart small_height">
                            <div className="assets-data height_data height_data1">
                              <img
                                src={`${asset.product_image}`}
                                alt=""
                                className="save_item_img_img"
                              />
                            </div>
                          </td>
                         
                          <td className="save_item_data1" style={{width: 'unset'}}>
                            <div className="save_items_detailssss">
                              <div className="save_items_details1 small_tetxt">
                                {asset.product_name}
                              </div>
                              
                            </div>
                          </td>
                          <td className="save_item_data1b">
                            <div className="assets-data-name center_name">
                              {asset.officer}
                            </div>
                          </td>
                          <td className="save_item_data1b">
                            <div className="assets-data-name center_name">
                              {asset.carrier}
                            </div>
                          </td>
                          
                          <td className="save_item_data1b">
                            <div className="assets-data-name center_name">
                              {asset.createdAt.split('T')[0]}
                            </div>
                          </td>

                          <td className="save_item_data1b">
                           
                             <a href={`/super_admin/unique-product/routes/${asset.id}`} >
                            <button id={'yes_' + asset.id}  className="checkout_btn1 py-1 px-2 m-0">
                              View detail{" "}
                            </button>
                            </a>
                  
                          </td>
                         
                        </tr>
                    ))} */}
                      </tbody>

                  
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

export default UniqueProductRoutes;
