import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import LogoutIcon from "@mui/icons-material/Logout";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { connect } from "react-redux";
import "../AdminStyles/custArea.css";
import LoadingIcons from "react-loading-icons";
// import DashBoardCard from "../DashBoardCard";
import DashBoardCard from "../../Home2/Dashboard/DashBoardCard";

// import { numberWithCommas } from "../../../../../static";
import { numberWithCommas } from "../../../../static";

import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import data from "../../MockData";
// import { nextOfKING } from "../../../../actions/adminAuth.js";

// import

// const cards = [
//   {
//     id: 1,
//     img: "/img/save_card1.svg",
//     title: "Total Savings",
//     Balance: "50,000",
//     Save_button: "Save",
//   },
//   {
//     id: 1,
//     img: "/img/save_card2.svg",
//     title: "Item Savings",
//     Balance: "50,000",
//     Save_button: "Save",
//   },
//   {
//     id: 1,
//     img: "/img/save_card3.svg",
//     title: "Flex Savings",
//     Balance: "50,000",
//     Save_button: "Save",
//   },
//   {
//     id: 1,
//     img: "/img/save_card4.svg",
//     title: "Dollar Savings",
//     Balance: "50,000",
//     Save_button: "Save",
//   },
// ];
const responsive6 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
const AdminSavingsOverview = ({ user, match }) => {
  const [Loading, setLoading] = useState(false);
  const [customerId, setCustomerId] = useState(match.params.id);
  const [image, setImage] = useState("/img/BAG.jpeg");
  const [activeBg, setActiveBg] = useState("accounts");
  const [phone_no2, setPhone_no2] = useState("");
  const [customer_image, setcustomer_image] = useState("");
  const [genderDate, setGenderDate] = useState({
    gender1: "",
    dateOfBirth: "",
  });
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [customerAddress, setAddress] = useState("");
  const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState("");
  const [nextKin, setNextKin] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    relationship: "",
    gender: "",
  });
  const [userInfo, setUserInfo] = useState({
    CustFirstName: "",
    CustLastName: "",
    Custemail: "",
    CustphoneNumber: "",
    CustImage: "",
    // CustRelationship: "",
    Custgender: "",
    CustBvn: "",
    CustDateOfBirth: "",
  });
  const {
    CustFirstName,
    CustLastName,
    Custemail,
    Custgender,
    // CustRelationship,
    CustImage,
    CustphoneNumber,
    CustBvn,
    CustDateOfBirth,
  } = userInfo;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { firstname, lastname, email, gender, relationship, phoneNumber } =
    nextKin;
  const { gender1, dateOfBirth } = genderDate;
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };
  useEffect(() => {
    //console.log(match.params.id);

    axios
      .get(api_url2 + "/v1/admin/get/customer/byId/" + customerId, null, config)
      .then((data) => {
        console.log(data.data.data);
        const getName = data.data.data.fullname;
        const splitName = getName.split(" ");
        setUserInfo({
          CustFirstName: splitName[0],
          CustLastName: splitName[1],
          Custemail: data.data.data.email,
          CustImage: data.data.data.userImage,
          CustphoneNumber: data.data.data.phoneNumber,
          // CustRelationship: data.data.data,
          Custgender: data.data.data.gender,
          CustBvn: data.data.data.BVN,
          CustDateOfBirth: data.data.data.dateOfBirth,
        });
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);
  

  const onChangeaddress = (event) => {
    setAddress(event.target.value);
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));

      const types = ["jpg", "png", "jpeg"];

      if (event.currentTarget.id === "customer_image") {
        if (event.currentTarget.files.length === 0) {
          // setUserInfo({ ...userInfo, applicantImg: "" });
          // document.getElementById("output1").src = "";
        } else {
          let passportFile = document.getElementById("customer_image").files[0];

          let fileExtension = passportFile.name.split(".").pop();
          //console.log(passportFile);

          if (!types.includes(fileExtension)) {
          } else {
            if (passportFile.size > 1000000) {
              //console.log("file too large.");
            }
            // else {
            setcustomer_image(passportFile);
            // }
          }
        }
      }
    }
  };
  
  const [accountInfo, setAccountInfo] = useState({
    ledger: 0,
    balance: 0,
    pending_sum: 0,
    total_sum: 0,
  });
  const { ledger, pending_sum, balance, total_sum } = accountInfo;

  const AddUserPhoto = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (customer_image === "") {
      //console.log("empty passport");

      // setAlert('Please provide a passport photo', 'danger');
    } else {
      const element = document.getElementById("customer_image");
      const file = element.files[0];
      formData.append("customer_image", file, file.name);

      //console.log(formData, "hhhh");

      try {
        const res = await axios.put(
          api_url2 + "/v1/admin/add/customer/image/" + customerId,
          formData
        );
        //console.log(res.data, "undefined");

        if (res.data.statusCode === 200) {
          // setPassportUpload(true)
        } else {
          // setAlert('Something went wrong, please try again later', 'danger');
        }
      } catch (err) {
        //console.log(err.response);
        // setAlert('Check your internet connection', 'danger');
      }
    }
  };
  const submitAddress = async (e) => {
    e.preventDefault();

    if (customerAddress === "") {
      //console.log("empty address");
    } else {
      const body = JSON.stringify({ customerAddress });
      //console.log(body);

      try {
        const res = await axios.post(
          api_url2 + "/v1/admin/add/address/" + customerId,
          body,
          config
        );
        //console.log(res.data, "undefined");

        if (res.data.statusCode === 200) {
          // setPassportUpload(true)
        } else {
          // setAlert('Something went wrong, please try again later', 'danger');
        }
      } catch (err) {
        //console.log(err.response);
        // setAlert('Check your internet connection', 'danger');
      }
    }
  };
  const submitPhoneNumber2 = async (e) => {
    e.preventDefault();

    if (secondaryPhoneNumber === "") {
      //console.log("empty address");
    } else {
      const body = JSON.stringify({ secondaryPhoneNumber });
      //console.log(body);

      try {
        const res = await axios.put(
          api_url2 + "/v1/admin/update/secondary/contact/" + customerId,
          body,
          config
        );
        //console.log(res.data, "undefined");

        if (res.data.statusCode === 200) {
          // setPassportUpload(true)
        } else {
          // setAlert('Something went wrong, please try again later', 'danger');
        }
      } catch (err) {
        //console.log(err.response);
        // setAlert('Check your internet connection', 'danger');
      }
    }
  };
  const submitNextOfKin = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, gender, relationship, phoneNumber } =
      nextKin;
    const body = {
      firstname,
      lastname,
      email,
      gender,
      relationship,
      phoneNumber,
    };

    try {
      const res = await axios.post(
        api_url2 + "/v1/admin/add/customer/next-of-kin/" + customerId,
        body,
        config
      );
      //console.log(res.data, "undefined");

      if (res.data.statusCode === 200) {
        // setPassportUpload(true)
      } else {
        // setAlert('Something went wrong, please try again later', 'danger');
      }
    } catch (err) {
      //console.log(err.response);
      // setAlert('Check your internet connection', 'danger');
    }
  };

  useEffect(async () => {
    setLoading(true);
    //console.log(auth.user.user.id);
    const customer_id = customerId;
    const body = JSON.stringify({
      customer_id,
    });
    await axios
      .post(api_url2 + "/v1/user/accounts/fetch/dashboard", body, config)
      .then((data) => {
        setLoading(false);
        // console.log(data.data.data, "bbbbbbb");
        // console.log(Number('78.77'));

        setAccountInfo({
          ledger: data.data.data.ledger,
          balance: Number(data.data.data.balance).toFixed(3),
          pending_sum: data.data.data.pending_sum,
          total_sum: data.data.data.total_sum,
        });

        // setItemGalleryShow(data.data.data);
      })
      .catch((err) => {
        setLoading(false);
        //console.log(err.response); // "oh, no!"
      });
  }, []);




  const submitGender = async (e) => {
    e.preventDefault();
    const { gender1, dateOfBirth } = genderDate;
    const body = {
      gender: gender1,
      dateOfBirth,
    };

    try {
      const res = await axios.put(
        api_url2 + "/v1/admin/update/customer/info/" + customerId,
        body,
        config
      );
      //console.log(res.data, "undefined");

      if (res.data.statusCode === 200) {
        // setPassportUpload(true)
      } else {
        // setAlert('Something went wrong, please try again later', 'danger');
      }
    } catch (err) {
      //console.log(err.response);
      // setAlert('Check your internet connection', 'danger');
    }
  };
  const handleChange = (event) => {
    // setAge(event.target.value);
    setSecondaryPhoneNumber(event.target.value);
  };
  const onChangeFor = (e) => {
    setGenderDate({ ...genderDate, [e.target.name]: e.target.value });
  };

  const onChangeFor2 = (e) => {
    setNextKin({ ...nextKin, [e.target.name]: e.target.value });
    //console.log(nextKin);
  };

  // const firstName = allCustomers.fullName.slice(0);

  // const lastName = allCustomers.fullName.slice(1);
  // //console.log(firstName);
  // //console.log(allCustomers.fullName.slice(0));
  const openModal2 = () => {
    setModal2(true);
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const closeModal2 = () => {
    setModal2(false);
  };
  const openModal3 = () => {
    setModal3(true);
  };
  const closeModal3 = () => {
    setModal3(false);
  };



  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="cust_area">
            <div className="cust_area1">
              <div className="dash_savings_cards_area">
                {/* Carousel start==============================
                 ==============================================
                 ============================= */}
{/* 
                <Carousel
                  responsive={responsive6}
                  className="partnerCards LEFTARROW gtr"
                  showDots={false}
                  //   infinite={false}
                  autoPlay={false}
                  autoPlaySpeed={9000}
                  infinite={false}
                  draggable={true}
                  swipeable={true}
                  // transitionDuration={1000}
                  style={{ height: "25em" }}
                > */}
                  {/* {cards.map((asset) => (
                    <div className="card_cont1">
                      <div className="card_cont_txtxs"> */}
                        {/* <div className="save_card_cont_txt1">
                        <span className="savings_caption">Title</span>
                        <div className="card_cont_txt_tittle">
                          Total Savings
                        </div>
                      </div> */}
                        {/* <div className="save_card_cont_txt1">
                          <span className="savings_caption">{asset.title}</span>
                          <div className="card_cont_txt_tittle">
                            ₦{asset.Balance}
                          </div> */}
                        {/* </div>
                        <div className="to_save_btn">
                          <LogoutIcon className="to_save_area_icon" /> Start
                          saving
                        </div>
                      </div>
                      <img src={asset.img} alt="" className="savings_card" />
                    </div>
                  ))}
                </Carousel> */}
                {/* Carousel end==============================
==============================================
============================= */}
                

              <Carousel
                responsive={responsive6}
                className="partnerCards LEFTARROW gtr"
                showDots={true}
                //   infinite={false}
                autoPlay={false}
                autoPlaySpeed={9000}
                infinite={false}
                draggable={true}
                swipeable={true}
                // transitionDuration={1000}
                style={{ height: "25em" }}
              >
                {/* {data.dashBoardHomeCard.map((asset, index) => ( */}
                <DashBoardCard
                  background={"/img/save_card1.svg"}
                  title={"Total Savings"}
                  Loading={Loading}
                  LoadingIcon={<LoadingIcons.Oval fill="#fff" />}
                  balance={numberWithCommas(parseInt(total_sum).toFixed(2))}
                />
                <DashBoardCard
                  background={"/img/save_card2.svg"}
                  title={"Item savings"}
                  Loading={Loading}
                  LoadingIcon={<LoadingIcons.Oval fill="#fff" />}
                  balance={numberWithCommas(parseInt(pending_sum).toFixed(2))}
                />
                <DashBoardCard
                  background={"/img/save_card3.svg"}
                  title={"Flex Savings"}
                  Loading={Loading}
                  LoadingIcon={<LoadingIcons.Oval fill="#fff" />}
                  balance={numberWithCommas(parseInt(balance).toFixed(2))}
                />
                <DashBoardCard
                  background={"/img/save_card4.svg"}
                  title={"Ledger Balance"}
                  Loading={Loading}
                  LoadingIcon={<LoadingIcons.Oval fill="#fff" />}
                  balance={numberWithCommas(parseInt(ledger).toFixed(2))}
                />

                {/* ))} */}
              </Carousel>


              </div>
              {/* [===================] */}
              {/* [===================] */}
              {/* [===================] */}
            </div>
            <div className="cust_area2">
              <div className="dashboard_account_page_area">
                <div className="account_toggle_heading">
                  <span
                    id="accounts"
                    onClick={changeBg}
                    className={
                      activeBg == "accounts"
                        ? "account_toggle account_toggle_active"
                        : "account_toggle"
                    }
                  >
                    Accounts
                  </span>
                  <span
                    id="kin"
                    onClick={changeBg}
                    className={
                      activeBg == "kin"
                        ? "account_toggle account_toggle_active"
                        : "account_toggle"
                    }
                  >
                    Next of Kin
                  </span>
                  <span
                    id="security"
                    onClick={changeBg}
                    className={
                      activeBg == "security"
                        ? "account_toggle account_toggle_active"
                        : "account_toggle"
                    }
                  >
                    Security
                  </span>
                </div>
                {/* [[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]] */}
                <div className="account_toggle_body_area">
                  {activeBg == "accounts" ? (
                    <div className="account_toggle_body_area1">
                      <div className="account_toggle_body_area1_title">
                        Personalize
                      </div>
                      <div className="account_toggle_body_area1_txts_input">
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}

                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          {CustImage === null ? (
                            <div className="toggle_body_area1_cont1_txts">
                              Change Profile Picture{" "}
                              <span className="toggle_body_area1_cont1_sub_txts">
                                {" "}
                                Choose a new avatar to be used across Egoras
                              </span>
                            </div>
                          ) : (
                            <div className="toggle_body_area1_cont1_txts">
                              My Profile Picture{" "}
                              <span className="toggle_body_area1_cont1_sub_txts">
                                {" "}
                                {/* Choose a new avatar to be used across Egoras */}
                              </span>
                            </div>
                          )}
                          <div className="toggle_body_area1_cont1_input">
                            {" "}
                            <img
                              src={image}
                              alt=""
                              className="user_upload_img"
                            />
                            {CustImage === null ? (
                              <AddCircleIcon
                                className="add_icon"
                                onClick={openModal}
                              />
                            ) : null}
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts">
                            Full Name
                            <span className="toggle_body_area1_cont1_sub_txts">
                              {" "}
                              Customize your account name
                            </span>
                          </div>
                          <div className="toggle_body_area1_cont1_input">
                            <TextField
                              className="name_input1"
                              id="outlined-basic"
                              label="First Name"
                              variant="outlined"
                              value={CustFirstName}
                            />
                            <TextField
                              className="name_input1"
                              id="outlined-basic"
                              label="Last Name"
                              variant="outlined"
                              value={CustLastName}
                            />
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts">
                            Gender
                            <span className="toggle_body_area1_cont1_sub_txts">
                              {" "}
                              How you would like to be identified
                            </span>
                          </div>
                          <div className="toggle_body_area1_cont1_input">
                            {Custgender === null ? (
                              <div className="d-flex">
                                <div className="radio_group pr-4">
                                  <input
                                    type="radio"
                                    name="gender1"
                                    id="male"
                                    value="Male"
                                    onChange={onChangeFor}
                                  />
                                  <label for="male" class="radio">
                                    Male
                                  </label>
                                </div>
                                <div className="radio_group">
                                  <input
                                    type="radio"
                                    name="gender1"
                                    id="female"
                                    value="Female"
                                    onChange={onChangeFor}
                                  />
                                  <label for="female" class="radio">
                                    Female
                                  </label>
                                </div>
                              </div>
                            ) : (
                              Custgender
                            )}
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts">
                            Date of birth
                            <span className="toggle_body_area1_cont1_sub_txts">
                              {" "}
                              For your birthday :
                            </span>
                          </div>
                          <div className="toggle_body_area1_cont1_input">
                            {CustDateOfBirth === null ? (
                              <input
                                type="date"
                                name="dateOfBirth"
                                id=""
                                value={dateOfBirth}
                                className="name_input1 date_input"
                                onChange={onChangeFor}
                              />
                            ) : (
                              CustDateOfBirth
                            )}
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {CustDateOfBirth === null ? (
                          <div className="toggle_body_area1_cont1">
                            <div className="toggle_body_area1_cont1_txts"></div>
                            <div className="toggle_body_area1_cont1_input">
                              <button
                                className="save_changes_btn"
                                onClick={submitGender}
                              >
                                Save Changes
                              </button>
                            </div>
                          </div>
                        ) : null}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                      </div>
                    </div>
                  ) : null}
                  {/* ================= */}
                  {/* ================= */}
                  {/* ================= */}
                  {/* ================= */}
                  {activeBg == "kin" ? (
                    <div className="account_toggle_body_area1">
                      <div className="account_toggle_body_area1_title">
                        Personal Details
                      </div>
                      <div className="account_toggle_body_area1_txts_input">
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts">
                            Full Name
                            <span className="toggle_body_area1_cont1_sub_txts"></span>
                          </div>
                          <div className="toggle_body_area1_cont1_input">
                            <TextField
                              className="name_input1"
                              id="outlined-basic"
                              label="First Name"
                              variant="outlined"
                              name="firstname"
                              value={firstname}
                              onChange={onChangeFor2}
                            />
                            <TextField
                              className="name_input1"
                              id="outlined-basic"
                              label="Last Name"
                              variant="outlined"
                              name="lastname"
                              value={lastname}
                              onChange={onChangeFor2}
                            />
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts">
                            Email Address
                            <span className="toggle_body_area1_cont1_sub_txts"></span>
                          </div>
                          <div className="toggle_body_area1_cont1_input">
                            <TextField
                              className="name_input1a"
                              id="outlined-basic"
                              label="Email Address"
                              variant="outlined"
                              name="email"
                              value={email}
                              onChange={onChangeFor2}
                            />
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts">
                            Phone number
                            <span className="toggle_body_area1_cont1_sub_txts"></span>
                          </div>
                          <div className="toggle_body_area1_cont1_input">
                            <TextField
                              className="name_input1a"
                              id="outlined-basic"
                              label="Phone number"
                              variant="outlined"
                              name="phoneNumber"
                              value={phoneNumber}
                              onChange={onChangeFor2}
                            />
                          </div>
                        </div>
                        {/* '''''''''''''''''''''∂∂ */}
                        {/* '''''''''''''''''''''∂∂ */}
                        {/* '''''''''''''''''''''∂∂ */}
                        {/* <div className="account_toggle_body_area1_title">
                      Bank Details
                    </div> */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}

                        {/* '''''''''''''''''''''∂∂ */}
                        {/* '''''''''''''''''''''∂∂ */}
                        {/* '''''''''''''''''''''∂∂ */}
                        <div className="account_toggle_body_area1_title">
                          Other Details
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts">
                            Relationship{" "}
                            <span className="toggle_body_area1_cont1_sub_txts">
                              Father, Mother, Sister ...
                            </span>
                          </div>
                          <div className="toggle_body_area1_cont1_input">
                            <div className="name_input1a">
                              <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                  Select Relationship
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  name="relationship"
                                  value={relationship}
                                  label="Age"
                                  // onChange={handleChange}
                                  onChange={onChangeFor2}
                                  // onSelect={onChangeFor2}
                                >
                                  <MenuItem name="relationship" value="Mother">
                                    Mother
                                  </MenuItem>
                                  <MenuItem value="Father">Father</MenuItem>
                                  <MenuItem value="Sister">Sister</MenuItem>
                                  <MenuItem value="Uncle">Uncle</MenuItem>
                                  <MenuItem value="Aunt">Aunt</MenuItem>
                                  <MenuItem value="Brother">Brother</MenuItem>
                                  <MenuItem value="Inlaw">Inlaw</MenuItem>
                                </Select>
                              </FormControl>
                            </div>
                          </div>
                        </div>

                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts">
                            Gender
                            <span className="toggle_body_area1_cont1_sub_txts">
                              {" "}
                              How you would like to be identified
                            </span>
                          </div>
                          <div className="toggle_body_area1_cont1_input">
                            <div className="radio_group">
                              <input
                                type="radio"
                                name="gender"
                                id="male"
                                // value={Male}
                                value="Male"
                                onChange={onChangeFor2}
                              />
                              <label for="male" class="radio" value={gender}>
                                Male
                              </label>
                            </div>
                            <div className="radio_group">
                              <input
                                type="radio"
                                name="gender"
                                id="female"
                                // value="female"
                                value="Female"
                                onChange={onChangeFor2}
                              />
                              <label for="female" class="radio" value={gender}>
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}

                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts"></div>
                          <div className="toggle_body_area1_cont1_input">
                            <button
                              className="save_changes_btn"
                              onClick={submitNextOfKin}
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                      </div>
                    </div>
                  ) : null}
                  {/* ================= */}
                  {/* ================= */}
                  {/* ================= */}
                  {/* ================= */}
                  {activeBg == "security" ? (
                    <div className="account_toggle_body_area1">
                      <div className="account_toggle_body_area1_title">
                        Verified Information
                      </div>
                      <div className="account_toggle_body_area1_txts_input">
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts">
                            Email Address
                            <span className="toggle_body_area1_cont1_sub_txts"></span>
                          </div>
                          <div className="toggle_body_area1_cont1_input">
                            {Custemail}
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts">
                            Phone Number
                            <span className="toggle_body_area1_cont1_sub_txts"></span>
                          </div>
                          <div className="toggle_body_area1_cont1_input">
                            {CustphoneNumber} {phone_no2}
                            <AddCircleIcon
                              className="edit_icon"
                              onClick={openModal2}
                            />
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts">
                            Bank Verification Number (BVN)
                            <span className="toggle_body_area1_cont1_sub_txts">
                              {" "}
                            </span>
                          </div>
                          <div className="toggle_body_area1_cont1_input">
                            <div className="bvn_btn">{CustBvn}</div>
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="account_toggle_body_area1_title">
                          Password
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts">
                            Update Password
                            <span className="toggle_body_area1_cont1_sub_txts">
                              Change your old password to a new one
                            </span>
                          </div>
                          <div className="toggle_body_area1_cont1_input">
                            <div className="bvn_btn" onClick={openModal3}>
                              Change Password
                            </div>
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="account_toggle_body_area1_title">
                          Address
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts">
                            Add Address
                            <span className="toggle_body_area1_cont1_sub_txts">
                              input your address for easy shipping
                            </span>
                          </div>
                          <div className="toggle_body_area1_cont1_input">
                            <div className="input_btn_grouped_div">
                              <TextField
                                className="name_input1a"
                                id="outlined-basic"
                                label="Address"
                                variant="outlined"
                                name="customerAddress"
                                value={customerAddress}
                                onChange={onChangeaddress}
                              />
                              <button
                                className="add_photo"
                                style={{ width: "25%" }}
                                onClick={submitAddress}
                              >
                                Submit Address
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Update PIN
                        <span className="toggle_body_area1_cont1_sub_txts">
                          Change or reset your Egoras PIN
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <div className="bvn_btn">Change PIN</div>
                      </div>
                    </div> */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                        {/* ================= */}
                      </div>
                    </div>
                  ) : null}
                  <div className="account_toggle_body_area2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======modal area======= */}
      {/* ======modal area======= */}
      {/* ======modal area======= */}
      {/* ======modal area======= */}
      {/* ======modal area======= */}
      {modal == true ? (
        <div className="profile_modal_div">
          <div className="container">
            <div className="profile_modal_area">
              <div className="profile_modal_area1">
                <div className="profile_modal_area1_img">
                  <img
                    // src={value}
                    src={image}
                    // src="/img/profile_img.jpeg"
                    alt=""
                    className="user_upload_img"
                    style={{ width: "250px", height: "250px" }}
                  />
                  <label
                    for="customer_image"
                    className="custom-file-upload33"
                    onChange={onImageChange}
                  >
                    <AddCircleIcon
                      className="add_icon33"
                      onChange={onImageChange}
                    />{" "}
                  </label>
                  <input
                    type="file"
                    id="customer_image"
                    name="customer_image"
                    onChange={onImageChange}
                    className="filetype"
                  />
                </div>{" "}
              </div>
              <div className="profile_modal_area2">
                <button className="add_photo" onClick={AddUserPhoto}>
                  <AddAPhotoIcon className="photo_icon" /> Add Photo
                </button>
                <button className="cancel_photo" onClick={closeModal}>
                  <DoDisturbIcon className="cancel_icon" /> Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {modal2 == true ? (
        <div className="profile_modal_div">
          <div className="container">
            <div className="profile_modal_area_phone_no">
              <div className="profile_modal_area1">
                <TextField
                  className="name_input1ab"
                  id="outlined-basic"
                  label="Phone No:"
                  variant="outlined"
                  name="secondaryPhoneNumber"
                  value={secondaryPhoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="profile_modal_area2">
                <button className="add_photo" onClick={submitPhoneNumber2}>
                  {" "}
                  <LocalPhoneIcon className="cancel_icon" />
                  Add Number
                </button>
                <button className="cancel_photo" onClick={closeModal2}>
                  {" "}
                  <DoDisturbIcon className="cancel_icon" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {modal3 == true ? (
        <div className="profile_modal_div">
          <div className="container">
            <div className="profile_modal_area_phone_no">
              <div className="profile_modal_area1">
                <div className="password_divs">
                  <TextField
                    className="name_input1ab"
                    id="outlined-basic"
                    label="Change Password"
                    variant="outlined"
                    name="changePassword"
                    type="password"
                    // value={oldpassword}
                    // onChange={onChangeFor4}
                  />
                  <TextField
                    className="name_input1ab"
                    id="outlined-basic"
                    label="Re-Enter Password"
                    variant="outlined"
                    name="changePassword"
                    type="password"
                    // value={newpassword}
                    // onChange={onChangeFor4}
                  />
                </div>
              </div>
              <div className="profile_modal_area2">
                <button
                  className="add_photo"
                  // onClick={sumitChangePassword}
                >
                  <LockIcon className="cancel_icon" />
                  Change Password
                </button>
                <button className="cancel_photo" onClick={closeModal3}>
                  <DoDisturbIcon className="cancel_icon" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   id: state.customerId,
// });
export default AdminSavingsOverview;
// export default connect(mapStateToProps, { nextOfKING })(AdminSavingsOverview);
