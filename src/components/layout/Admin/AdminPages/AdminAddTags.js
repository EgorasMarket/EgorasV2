import React, { useState, useEffect, useMemo } from 'react';
// import data from "../../../../Data/AllUsersData.json";
import { WithContext as ReactTags } from 'react-tag-input';
import '../AdminStyles/ReactTags.module.css';

import axios from 'axios';
import { API_URL2 as api_url2 } from '../../../../actions/types';
import '../AdminStyles/admin_all_products.css';

// const way = window.location.pathname;

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const AdminAddTags = () => {
  const [pdwork, setpdwork] = useState([]);
  const [roleRemove, setRoleRemove] = useState('');
  const [productId, setRowId] = useState('');
  const [showTagBlock, setShowTagBlock] = useState(false);
  const [rolesInfo, setRolesInfo] = useState({
    role20: '',
  });

  const { role20 } = rolesInfo;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // +++++++************+++++++************+++++++************
  // +++++++************+++++++************+++++++************
  // Strictly for tags
  // +++++++************+++++++************+++++++************
  // +++++++************+++++++************+++++++************

  const [tags, setTags] = useState([]);
  const [tags11, setTags11] = useState([]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  var obj = {};
  const handleAddition = (tag) => {
    setTags([...tags, tag]);
    // console.log(tag);
    tags11.push(tag);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags].slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log('The tag at index ' + index + ' was clicked');
    console.log(tags, 'The tag at index');
  };

  const onClearAll = () => {
    setTags([]);
  };

  const onTagUpdate = (i, newTag) => {
    const updatedTags = tags.slice();
    updatedTags.splice(i, 1, newTag);
    setTags(updatedTags);
    console.log(tags, 'The tag at indexs');
  };

  // +++++++************+++++++************+++++++************
  // +++++++************+++++++************+++++++************
  // Strictly for tags
  // +++++++************+++++++************+++++++************
  // +++++++************+++++++************+++++++************

  useEffect(() => {
    axios
      .get(
        api_url2 + '/v1/product/retrieve/null-tags/products',
        null,
        config
      )
      .then((data) => {
        console.log(data.data.data, 'chukwubuike');

        setpdwork(data.data.data);
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

  useEffect(() => {
    console.log(roleRemove, pdwork);
    if (roleRemove === '') {
      setpdwork(pdwork);
      //console.log("tttt");
    } else {
      console.log(roleRemove);
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

    var printWindow = window.open('', '', 'height=1200,width=1200');
    printWindow.document.write(
      '<html><head><style>.small-text{font-size: 12px;}table.GeneratedTable {width: 100%;background-color: #ffffff; border-collapse: collapse; border-width: 1px; border-color: #000000; border-style: solid; color: #000000;}table.GeneratedTable td, table.GeneratedTable th { border-width: 1px; border-color: #000000; border-style: solid;}.center-text{text-align: center;} .center-text h4{margin: 4px;}.set-flex {display: flex; justify-content: space-between;}.w-50{width: 45%;margin:5px;}.bbt{border-bottom: 1px solid black;}</style><title>PRINT PRODUCT ID</title></head>'
    );
    printWindow.document.write(
      '<body style="height: min-content;font-family: roboto;margin: 0; border-bottom: 1px solid black;font-weight:400;">'
    );
    // printWindow.document.write('<h2 style="margin-bottom: 5px">Companys Copy:</h2>');
    printWindow.document.write('<div>');
    printWindow.document.write(
      '<h6 style="margin: 0;">Product ID</h6>'
    );
    printWindow.document.write(
      '<h3 style="margin: 0;">' + product_code + '</h3>'
    );
    printWindow.document.write('</div>');
    printWindow.document.write('</body>');
    printWindow.document.write('</html>');
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

    var printWindow = window.open('', '', 'height=1200,width=1200');
    printWindow.document.write(
      '<html><head><style>.small-text{font-size: 12px;}table.GeneratedTable {width: 100%;background-color: #ffffff; border-collapse: collapse; border-width: 1px; border-color: #000000; border-style: solid; color: #000000;}table.GeneratedTable td, table.GeneratedTable th { border-width: 1px; border-color: #000000; border-style: solid;}.center-text{text-align: center;} .center-text h4{margin: 4px;}.set-flex {display: flex; justify-content: space-between;}.w-50{width: 45%;margin:5px;}.bbt{border-bottom: 1px solid black;}</style><title>PRINT PRODUCT ID</title></head>'
    );
    printWindow.document.write(
      '<body style="height: min-content;font-family: roboto;margin: 0; border-bottom: 1px solid black;font-weight:400;">'
    );
    // printWindow.document.write('<h2 style="margin-bottom: 5px">Companys Copy:</h2>');
    printWindow.document.write('<div>');
    printWindow.document.write(
      '<h2 style="margin: 0;">Product Price</h2>'
    );
    printWindow.document.write(
      '<h1 style="margin: 0;">₦' + amount + '</h1>'
    );
    printWindow.document.write(
      '<h5 style="margin: 0;">' + product_name + '</h5>'
    );
    printWindow.document.write('</div>');
    printWindow.document.write('</body>');
    printWindow.document.write('</html>');
    printWindow.document.close();
    printWindow.print();
  };

  const openTagBlock = (id) => {
    // console.log(id);
    setShowTagBlock(!showTagBlock);
    setRowId(id);
    setTags([]);
    setTags11([]);
  };

  const submitTags = async () => {
    // console.log(tags11);

    const body = JSON.stringify({ tags11, productId });
    console.log(body);

    try {
      const res = await axios.put(
        api_url2 + '/v1/product/update/product/tags',
        body,
        config
      );
      console.log(res, 'undefined');

      if (res.data.statusCode === 200) {
        setRoleRemove(productId);
      } else {
        //   setAlert(res.data.data.errors[0].msg);
        //   setAlertType("danger");
      }
    } catch (err) {
      console.log(err.response);
      // setAlert('Check your internet connection', 'danger');
    }
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
                          Category
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
                          Action
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
                          {asset.tags == null ? (
                            <>
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
                                      id={'yes_' + asset.id}
                                      onClick={() =>
                                        openTagBlock(asset.id)
                                      }
                                      className="checkout_btn1 py-1 px-2 m-0"
                                    >
                                      Add Tags{' '}
                                    </button>
                                  </a>
                                </td>
                              </tr>
                              {showTagBlock &&
                              productId === asset.id ? (
                                <div className="p-4">
                                  <div className="add_cat_input_title">
                                    <span className="input_brand">
                                      Product Tags
                                    </span>
                                    <ReactTags
                                      handleDelete={handleDelete}
                                      handleAddition={handleAddition}
                                      handleDrag={handleDrag}
                                      delimiters={delimiters}
                                      handleTagClick={handleTagClick}
                                      onClearAll={onClearAll}
                                      onTagUpdate={onTagUpdate}
                                      suggestions={[]}
                                      placeholder="Enter tags"
                                      minQueryLength={2}
                                      maxLength={40}
                                      autofocus={false}
                                      allowDeleteFromEmptyInput={true}
                                      autocomplete={true}
                                      readOnly={false}
                                      allowUnique={true}
                                      allowDragDrop={true}
                                      inline={true}
                                      allowAdditionFromPaste={true}
                                      editable={true}
                                      clearAll={true}
                                      tags={tags}
                                    />
                                  </div>
                                  <button
                                    //   id={"yes_" + asset.id}
                                    onClick={submitTags}
                                    className="checkout_btn1 py-2 px-4 ml-0 mt-3"
                                  >
                                    {/* <button id={'yes_' + asset.id} onClick={e => submitCallCheck(asset.id)} className="checkout_btn1 py-1 px-2 m-0"> */}
                                    Submit{' '}
                                  </button>
                                </div>
                              ) : null}
                            </>
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

export default AdminAddTags;
