import React, { useState, useEffect } from "react";
// import { CustomAlert } from "../../../../CustomAlert.js";
import InputLabel from "@mui/material/InputLabel";
import { WithContext as ReactTags } from "react-tag-input";
import axios from "axios";
import { EditorState, convertToRaw } from "draft-js";
import { CustomAlert } from "../../../../CustomAlert";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { API_URL2 as api_url2 } from "../../../../actions/types.js";
import "../AdminStyles/ReactTags.module.css";

// const way = window.location.pathname;

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const AdminUploadProducts = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const config = {
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const [product_image, setproduct_image] = useState(
    "../../img/profile_img.jpeg"
  );
  const [getrandom, setRandom] = useState("");
  const [LSExist, setLSExist] = useState(null);
  const [alert, setAlert] = useState("type me on the merinder stayulyr");
  const [alertType, setAlertType] = useState("");
  const [productId, setProductId] = useState("");
  const [product_category_code1, setProduct_category_code1] = useState("");
  const [product_type, setProduct_type] = useState("");
  const [product_condition, setProduct_condition] = useState("");
  const [customAlert, setCustomAlert] = useState(false);
  const [payment_type, setPayment_type] = useState(1);
  const [roles1, setRoles1] = useState({
    role15: "",
    role2: "",
    role3: "",
  });
  const [disable, setDisable] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  // var obj = {};
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
    console.log("The tag at index " + index + " was clicked");
    console.log(tags, "The tag at index");
  };

  const onClearAll = () => {
    setTags([]);
  };

  const onTagUpdate = (i, newTag) => {
    const updatedTags = tags.slice();
    updatedTags.splice(i, 1, newTag);
    setTags(updatedTags);
    console.log(tags, "The tag at indexs");
  };

  // +++++++************+++++++************+++++++************
  // +++++++************+++++++************+++++++************
  // Strictly for tags
  // +++++++************+++++++************+++++++************
  // +++++++************+++++++************+++++++************

  // const [product_duration, setProduct_duration] = useState(null);
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const [allCategories, setCategories] = useState([]);
  const [categoryInsert, setCategoryInsert] = React.useState({
    product_category_code: "",
    product_category_desc: "",
  });

  const [formData, setFormData] = useState({
    product_details: "",
  });

  const [productUpdateInfo, setProductUpdateInfo] = React.useState({
    // product_category_code1: '',
    product_name: "",
    unitCount: null,
    percentage: null,
    product_brand: "",
    product_specifications: "",
    amount: null,
    // product_details: "",
    product_duration: null,
  });
  const { product_details } = formData;

  const { role15, role2, role3 } = roles1;
  const { product_category_code, product_category_desc } = categoryInsert;
  const {
    product_name,
    unitCount,
    product_brand,
    percentage,
    product_specifications,
    amount,
    // product_details,
    product_duration,
  } = productUpdateInfo;

  const generateString = (length) => {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  useEffect(() => {
    setRandom(generateString(10));
  }, []);

  useEffect(() => {
    // setIsLoading(true);

    axios
      .get(api_url2 + "/v1/product/retrieve/category", null, config)
      .then((data) => {
        setCategories(data.data.data);
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    let getproductId = localStorage.getItem("productId");

    if (localStorage.productId) {
      // //console.log('localStorage');
      setProductId(getproductId);
      setLSExist(true);
    } else {
      setLSExist(false);
      // //console.log('localStorage localStorage');
    }
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/admin/info", null, config)
      .then((data) => {
        //console.log(data.data.user, "line_ful");
        setRoles1({
          role15: data.data.user.role,
        });
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    // const element2 = document.getElementById("product_image2");
    // const element3 = document.getElementById("product_image3");
    if (product_image === "../../img/profile_img.jpeg") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  });

  const onEditorStateChange = (editorState) => {
    let text = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    setFormData({ ...formData, product_details: text });
    setEditorState(editorState);
  };

  const onChange = (e) => {
    setCategoryInsert({
      ...categoryInsert,
      [e.target.name]: e.target.value,
    });

    switch (e.target.name) {
      case "product_category_desc":
        // //console.log('fff');
        // setRandom(generateString(10))
        setCategoryInsert({
          product_category_code: getrandom,
          product_category_desc: e.target.value,
        });
        break;
      default:
      // code block
    }
  };

  const onChange1 = (e) => {
    setProductUpdateInfo({
      ...productUpdateInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onBlur1 = (e) => {
    console.log("focus out");

    const { value } = e.target;
    // // product_name
    console.log(value);

    const brandArray = {
      id: value,
      text: value,
    };

    setTags([...tags, brandArray]);
    tags11.push(brandArray);
    // console.log(tags);
  };

  const addCategory = async () => {
    //console.log(product_category_code, product_category_desc);

    if (product_category_desc === "") {
      // //console.log("Please supply product description.");
      setAlert("Please supply product description");
      setAlertType("danger");
    } else {
      const body = JSON.stringify({
        product_category_code,
        product_category_desc,
      });
      //console.log(body);
      try {
        const res = await axios.post(
          api_url2 + "/v1/product/add/category",
          body,
          config
        );
        //console.log(res, "undefined");

        if (res.data.statusCode === 200) {
          setAlert("Category added succefully");
          setAlertType("success");
          // setExDateUpload(true)
          // window.location.reload();
        } else {
          setAlert(res.data.data.errors[0].msg, "danger");
          setAlertType("danger");
        }
      } catch (err) {
        //console.log(err.response);
        // setAlert('Check your internet connection', 'danger');
      }
    }
  };
  const timer = setTimeout(() => {
    setAlert("");
  }, 5000);
  // //console.log(generateString(10));
  // //console.log('oookkkk');

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const types = ["jpg", "png", "jpeg"];

      if (event.currentTarget.id === "product_image") {
        if (event.currentTarget.files.length === 0) {
          // setUserInfo({ ...userInfo, applicantImg: "" });
          // document.getElementById("output1").src = "";
        } else {
          let productFile = document.getElementById("product_image").files[0];

          let fileExtension = productFile.name.split(".").pop();
          //console.log(productFile);

          if (!types.includes(fileExtension)) {
          } else {
            //console.log(productFile.size);
            if (productFile.size > 1000000) {
              setAlert("file too large");
              setAlertType("danger");
              //console.log("file too large.");
            } else {
              setproduct_image(URL.createObjectURL(event.target.files[0]));
            }
          }
        }
      }
    }
  };
  const successUploadMsg = "Product image uploaded successfully";
  const AddProductPhoto = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setDisable(true);
    const formData = new FormData();

    if (product_image === "../../img/profile_img.jpeg") {
      //console.log("empty passport");
      setCustomAlert(true);
      setAlert("Please provide product image");
      setAlertType("danger");
    } else {
      const element = document.getElementById("product_image");
      const element2 = document.getElementById("product_image2");
      const element3 = document.getElementById("product_image3");
      const file = element.files[0];
      const file2 = element2.files[0];
      const file3 = element3.files[0];
      formData.append("product_image", file);
      formData.append("product_image2", file2);
      formData.append("product_image3", file3);

      //console.log(formData, "hhhh");

      try {
        const res = await axios.post(
          api_url2 + "/v1/product/add/product/image",
          formData
        );
        console.log(res.data, "undefined");

        if (res.data.statusCode === 200) {
          setCustomAlert(true);
          setAlert(successUploadMsg);
          setAlertType("success");
          setproduct_image("../../img/profile_img.jpeg");
          setLSExist(true);
          setIsLoading(false);
          setDisable(false);
          //console.log(res.data.data[0].productId, "undefined");
          setProductId(res.data.data[0].productId);
          localStorage.setItem("productId", res.data.data[0].productId);
        } else {
          setCustomAlert(true);
          setAlert(res.data.data.errors[0].msg);
          setAlertType("danger");
          setIsLoading(false);
          setDisable(false);
        }
      } catch (err) {
        console.log(err.response);
      }
    }
  };

  const handleCenter = (event) => {
    setProduct_category_code1(event.target.value || "");
  };

  const getCatName = (catValue) => {
    const catArray = {
      id: catValue,
      text: catValue,
    };
    setTags([...tags, catArray]);
    console.log(catValue);

    tags11.push(catArray);
  };

  // };

  // const handleDuration = (event) => {
  //   setProduct_duration(event.target.value || "");
  //   // // //console.log('handleMOI');
  // };

  const handleproductType = (event) => {
    setProduct_type(event.target.value || "");
    // // //console.log('handleMOI');
  };

  const handleCondition = (event) => {
    setProduct_condition(event.target.value || "");
    // // //console.log('handleMOI');
  };

  const handlepaymentType = (event) => {
    setPayment_type(event.target.value || null);
    // // //console.log('handleMOI');
  };

  const UpdateProductInfo = async (e) => {
    if (payment_type === 1) {
      if (
        product_name === "" ||
        product_category_code1 === "" ||
        unitCount === null ||
        product_condition === "" ||
        // percentage === null ||
        product_brand === "" ||
        product_type === "" ||
        product_specifications === "" ||
        amount === null ||
        product_details === ""
      ) {
        // //console.log("Please supply all information.");
        setAlert("Please supply all information");
        setAlertType("danger");
      } else {
        if (!localStorage.productId) {
          setAlert("Please provide a product id by adding a new product image");
          setAlertType("danger");
        } else {
          let product_category_code = product_category_code1;
          const body = JSON.stringify({
            product_type,
            payment_type,
            productId,
            product_name,
            product_category_code,
            unitCount,
            product_condition,
            product_duration,
            product_brand,
            percentage,
            product_specifications,
            amount,
            product_details,
            tags11,
          });
          //console.log(body, "yyyyyy");
          try {
            const res = await axios.put(
              api_url2 + "/v1/product/add/product",
              body,
              config
            );
            //console.log(res, "undefined");

            if (res.data.statusCode === 200) {
              // setMOIUpload(true)
              localStorage.removeItem("productId");
              setLSExist(false);
              setProduct_category_code1("");
              // setProduct_duration('')
              setAlert("Product was uploaded successfully");
              setAlertType("success");
              setProductId("");
              setProduct_type("");
              setProductUpdateInfo({
                product_name: "",
                unitCount: null,
                percentage: null,
                product_brand: "",
                product_specifications: "",
                amount: null,
                product_details: "",
              });
              return window.location.replace("/super_admin/upload_products");
            } else {
              setAlert(res.data.data.errors[0].msg);
              setAlertType("danger");
            }
          } catch (err) {
            //console.log(err.response);
            // setAlert('Check your internet connection', 'danger');
          }
        }
      }
    } else {
      if (
        product_name === "" ||
        product_category_code1 === "" ||
        unitCount === null ||
        product_duration === null ||
        product_condition === "" ||
        percentage === null ||
        product_brand === "" ||
        product_type === "" ||
        product_specifications === "" ||
        amount === null ||
        product_details === ""
      ) {
        // //console.log("Please supply all information.");
        setAlert("Please supply all information");
        setAlertType("danger");
      } else {
        if (!localStorage.productId) {
          setAlert("Please provide a product id by adding a new product image");
          setAlertType("danger");
        } else {
          let product_category_code = product_category_code1;
          const body = JSON.stringify({
            product_type,
            payment_type,
            productId,
            product_name,
            product_category_code,
            unitCount,
            product_condition,
            product_duration,
            product_brand,
            percentage,
            product_specifications,
            amount,
            product_details,
            tags11,
          });
          //console.log(body, "yyyyyy");
          try {
            const res = await axios.put(
              api_url2 + "/v1/product/add/product",
              body,
              config
            );
            //console.log(res, "undefined");

            if (res.data.statusCode === 200) {
              // setMOIUpload(true)
              localStorage.removeItem("productId");
              setLSExist(false);
              setProduct_category_code1("");
              // setProduct_duration('')
              setAlert("Product was uploaded successfully");
              setAlertType("success");
              setProductId("");
              setProduct_type("");
              setProductUpdateInfo({
                product_name: "",
                unitCount: null,
                percentage: null,
                product_brand: "",
                product_specifications: "",
                amount: null,
                product_details: "",
              });
              return window.location.replace("/super_admin/upload_products");
            } else {
              setAlert(res.data.data.errors[0].msg);
              setAlertType("danger");
            }
          } catch (err) {
            //console.log(err.response);
            // setAlert('Check your internet connection', 'danger');
          }
        }
      }
    }
  };

  return (
    <>
      {/* {  (role15 === "MEDIA") &&  (way === "/super_admin"  )? */}
      <div className="other2">
        <section className="no-bg">
          <div className="container">
            <div className=" upload_products_details_area">
              <div className="upload_products_details_area1">
                <div className="toggle_body_area1_cont1_input products_cat_upload">
                  <div className="add_cat_input_title">
                    <span className="input_brand">Category code</span>
                    <TextField
                      className="width_incr"
                      id="outlined-basic"
                      label="Code"
                      variant="outlined"
                      name="product_category_code"
                      value={getrandom}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="add_cat_input_title">
                    <span className="input_brand">Category Name</span>

                    <TextField
                      className=" width_incr"
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      name="product_category_desc"
                      value={product_category_desc}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <span className="submit_cat_btn_div">
                    <button className="submit_cat_btn" onClick={addCategory}>
                      Submit
                    </button>
                  </span>
                </div>
                {/* ==[]]]]]]]]]]]] */}
                <div className="prod_upload_img width_incra">
                  <div className="profile_modal_area1_img">
                    <img
                      // src={value}
                      src={product_image}
                      // src="/img/profile_img.jpeg"
                      alt=""
                      className="user_upload_img_box"
                      style={{ width: "500px", height: "250px" }}
                    />
                    <label
                      for="product_image"
                      className="custom-file-upload33b"
                      onChange={onImageChange}
                    >
                      <AddCircleIcon
                        className="add_icon33"
                        onChange={onImageChange}
                      />{" "}
                    </label>
                    <input
                      type="file"
                      id="product_image"
                      name="product_image"
                      onChange={onImageChange}
                      // className="filetype"
                    />
                  </div>{" "}
                  <input
                    style={{ display: "inline-block" }}
                    type="file"
                    id="product_image2"
                    name="product_image2"
                    onChange={onImageChange}
                    // className="filetype"
                  />
                  <input
                    style={{ display: "inline-block" }}
                    type="file"
                    id="product_image3"
                    name="product_image3"
                    onChange={onImageChange}
                    // className="filetype"
                  />
                  <div className="profile_modal_area2">
                    <button
                      className="add_photo"
                      onClick={AddProductPhoto}
                      disabled={disable}
                    >
                      {isLoading ? (
                        <span>
                          <AddAPhotoIcon className="photo_icon" /> Uploading
                          Image
                          <FontAwesomeIcon
                            className="ml-2"
                            icon={faSpinner}
                            spin
                          />
                        </span>
                      ) : (
                        <span>
                          {" "}
                          <AddAPhotoIcon className="photo_icon" /> Upload Image
                        </span>
                      )}
                    </button>
                    <button className="cancel_photo">
                      <DoDisturbIcon className="cancel_icon" /> Cancel
                    </button>
                  </div>
                </div>

                {/* ============== */}
                {/* ============== */}
                {/* ============== */}
                {/* =========== */}
              </div>
              <div className="upload_products_details_area2">
                {/* === */}

                {LSExist ? (
                  <span className="text-success">
                    Upload Status: Product upload in progress
                  </span>
                ) : (
                  <span className="text-danger">
                    Upload Status: Upload new product image
                  </span>
                )}
                <div className="toggle_body_area1_cont1_input products_des_upload">
                  {" "}
                  <div className="add_cat_input_title">
                    <span className="input_brand">Product Type</span>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="product_type"
                        className="w-100"
                        value={product_type}
                        label="Product Type"
                        onChange={handleproductType}
                      >
                        <MenuItem key="MICRO" value="MICRO">
                          MICRO
                        </MenuItem>
                        <MenuItem key="GROCERIES" value="GROCERIES">
                          GROCERIES
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="add_cat_input_title">
                    <span className="input_brand">Product Name</span>

                    <TextField
                      className=" width_incr"
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      name="product_name"
                      value={product_name}
                      onChange={(e) => onChange1(e)}
                      onBlur={(e) => onBlur1(e)}
                    />
                  </div>
                  <div className="add_cat_input_title">
                    <span className="input_brand">Brand Name</span>

                    <TextField
                      className=" width_incr"
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      name="product_brand"
                      value={product_brand}
                      onChange={(e) => onChange1(e)}
                      onBlur={(e) => onBlur1(e)}
                    />
                  </div>
                  <div className="add_cat_input_title">
                    <span className="input_brand">Condition</span>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="product_type"
                        className="w-100"
                        value={product_condition}
                        label="Product Type"
                        onChange={handleCondition}
                      >
                        <MenuItem value="Brand New">Brand New</MenuItem>
                        <MenuItem value="Used">Used</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="add_cat_input_title">
                    <span className="input_brand">Product category</span>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="product_category_code1"
                        className="w-100"
                        value={product_category_code1}
                        label="Product category"
                        onChange={handleCenter}
                      >
                        {allCategories.map((option) => (
                          <MenuItem
                            key={option.product_category_code}
                            value={option.product_category_code}
                            onClick={(e) =>
                              getCatName(option.product_category_desc)
                            }
                          >
                            {option.product_category_desc}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className="toggle_body_area1_cont1_input products_des_upload">
                  <div className="add_cat_input_title">
                    <span className="input_brand">Product Tags</span>
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
                </div>

                <div className="toggle_body_area1_cont1_input products_des_upload">
                  {" "}
                  <div className="add_cat_input_title">
                    <span className="input_brand">Product Count</span>

                    <TextField
                      className=" width_incr"
                      id="outlined-basic"
                      label="Product count"
                      type="number"
                      variant="outlined"
                      name="unitCount"
                      value={unitCount}
                      onChange={(e) => onChange1(e)}
                    />
                  </div>
                  {/* <div className="add_cat_input_title">
                  <span className="input_brand">Product Duration</span>
       
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Duration
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="product_duration"
                      className="w-100"
                      value={product_duration}
                      label="Product category"
                      onChange={handleDuration}
                    >
                      <MenuItem>Select Duration</MenuItem>
                      <MenuItem value={1}>Outright Sell</MenuItem>
                      <MenuItem value={2}>2 Months</MenuItem>
                      <MenuItem value={3}>4 Months</MenuItem>
                      <MenuItem value={4}>6 Months</MenuItem>
                      <MenuItem value={5}>12 Months</MenuItem>
                    </Select>
                  </FormControl>
                </div> */}
                  <div className="add_cat_input_title">
                    <span className="input_brand">Payment Type</span>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="payment_type"
                        className="w-100"
                        value={payment_type}
                        label="Payment Type"
                        onChange={handlepaymentType}
                      >
                        <MenuItem value={1}>OUTRIGHT</MenuItem>
                        <MenuItem value={2}>INSTALLMENTAL</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  {payment_type !== 1 ? (
                    <div className="add_cat_input_title">
                      <span className="input_brand">Initial Percent</span>

                      <TextField
                        className=" width_incr"
                        id="outlined-basic"
                        label="Initial Percent"
                        type="number"
                        variant="outlined"
                        name="percentage"
                        value={percentage}
                        onChange={(e) => onChange1(e)}
                      />
                    </div>
                  ) : null}
                  {payment_type !== 1 ? (
                    <div className="add_cat_input_title">
                      <span className="input_brand">Product Duration</span>

                      <TextField
                        className=" width_incr"
                        id="outlined-basic"
                        label="Product Duration"
                        type="number"
                        variant="outlined"
                        name="product_duration"
                        value={product_duration}
                        onChange={(e) => onChange1(e)}
                      />
                    </div>
                  ) : null}
                  <div className="add_cat_input_title">
                    <span className="input_brand">Product Amount</span>

                    <TextField
                      className=" width_incr"
                      id="outlined-basic"
                      label="Amount"
                      variant="outlined"
                      name="amount"
                      value={amount}
                      type="number"
                      onChange={(e) => onChange1(e)}
                    />
                  </div>
                </div>
                <div className="add_cat_input_title">
                  <span className="input_brand">Product Specifications</span>

                  <textarea
                    name="product_specifications"
                    value={product_specifications}
                    id=""
                    cols="30"
                    rows="10"
                    className="prod_desc_text_area"
                    onChange={(e) => onChange1(e)}
                  ></textarea>
                </div>
                <div className="add_cat_input_title">
                  <span className="input_brand">Product Details</span>

                  {/* <textarea
                  name="product_details"
                  value={product_details}
                  id=""
                  cols="5"
                  rows="5"
                  className="prod_desc_text_area"
                  onChange={(e) => onChange1(e)}
                ></textarea> */}

                  <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={onEditorStateChange}
                  />
                </div>
                <div className="add_cat_input_title">
                  <span className="submit_cat_btn_div">
                    <button
                      className="submit_cat_btn"
                      onClick={UpdateProductInfo}
                    >
                      Submit
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {customAlert === true ? (
          <CustomAlert
            alert={alert}
            alertType={alertType}
            closeAlert={() => setCustomAlert(false)}
          />
        ) : null}
      </div>
      {/* :null} */}
    </>
  );
};

export default AdminUploadProducts;
