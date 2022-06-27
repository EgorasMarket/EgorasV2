import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL2 as api_url2 } from '../../../../../actions/types';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DatePicker from 'react-date-picker';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LockIcon from '@mui/icons-material/Lock';
import { useLocalStorage } from '../../Activation/useLocalStorage';
// import jwt from "jsonwebtoken";
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import '../DashboardStyles/dashboard_home.css';
import '../DashboardStyles/dashboard_account.css';

import { connect } from 'react-redux';
import {
  sumitGenderAndDate,
  submitPhone,
  nextOfKING,
  changePassword,
  addAddress,
} from '../../../../../actions/auth';
import { useParams } from 'react-router-dom';
import './accF.css';
import { setAlert } from '../../../../../actions/alert';
import validator from 'validator';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {getNaame} from "../../../Signup/signup"

function DashboardAccountPage({
  sumitGenderAndDate,
  setAlert,
  submitPhone,
  nextOfKING,
  auth,
  changePassword,
  addAddress,
}) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const [image, setImage] = useState('');
  const [nxtOfKinA, setNxtOfKinA] = useState(false);
  // const [getNxtOfKin, setGetNxtOfKin] = useState([]);
  const [nextOfKinData, setNextOfKinData] = useState({
    nxtcustomer_id: '',
    nxtemail: '',
    nxtfirstname: '',
    nxtgender: '',
    nxtlastname: '',
    nxtphoneNumber: '',
    nxtrelationship: '',
  });
  const [tokens, setTokens] = useState({
    firstnameQ: '',
    lastnameQ: '',
    // phoneNumberQ: "",
    gender: '',
    // dateOfBirth: "",
  });

  const [dateOfBirth, setDateOfBirth] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [hasValue, setHasValue] = useState(false);

  const [customer_image, setcustomer_image] = useState('');
  const [customerBvn1, setCustomerBvn1] = useState('');
  const [disable, setDisable] = React.useState(false);
  const [disable2, setDisable2] = React.useState(false);
  const [disableKin, setDisableKin] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoadingKin, setIsLoadingKin] = useState(false);
  const [genderEmpty, setGenderEmpty] = useState(false);

  const [disabled3, setDisabled3] = useState(false);

  const [fold, setFold] = useState('save_changes_btn');
  const [fold1, setFold1] = useState('save_changes_btn');
  const [fold2, setFold2] = useState('add_photo');
  const [emailError, setEmailError] = useState('Email Address');

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :');
    } else {
      setEmailError(label4);
    }
  };

  const [nextKin, setNextKin] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    relationship: '',
    gender1: '',
  });

  const [changePassword1, setChangePassword1] = useState({
    oldpassword: '',
    newpassword: '',
  });

  const [changePhone1, setChangePhone1] = useState({
    primaryPhoneNumber: '',
    secondaryPhoneNumber: '',
  });

  const [userInfo, setUserInfo] = useState({
    Userfirstname: '',
    Userlastname: '',
    Useremail: '',
    UserphoneNumber: '',
    UserOldNumber: '',
    UseruserImage: '',
    Userrelationship: '',
    Usergender: '',
    Userbvn: '',
    UserdateOfBirth: '',
  });

  const {
    Userfirstname,
    Userlastname,
    Useremail,
    Usergender,
    Userrelationship,
    UseruserImage,
    UserOldNumber,
    UserphoneNumber,
    Userbvn,
    UserdateOfBirth,
  } = userInfo;

  const {
    nxtcustomer_id,
    nxtemail,
    nxtfirstname,
    nxtgender,
    nxtlastname,
    nxtphoneNumber,
    nxtrelationship,
  } = nextOfKinData;
  const { oldpassword, newpassword } = changePassword1;
  const { primaryPhoneNumber, secondaryPhoneNumber } = changePhone1;
  const [idSet, setIdSet] = useState({ idNum: '' });
  const { idNum } = idSet;

  useEffect(() => {
    setIdSet({
      idNum: auth.user.user.id,
    });
  }, [auth]);

  useEffect(() => {
    // fetchDepositLinks();
    // console.log(auth);
    if (auth.user !== null) {
      // let dataa = 'stackabuse.com';
      // //console.log( new Buffer(dataa));
      var todecoded = auth.user;
      var todecodedn = todecoded.user.userImage;
      var todecodedm = todecoded.user.primaryPhoneNumber;

      // console.log('========================');
      // console.log(todecoded.user);
      // console.log('========================');

      const getName = todecoded.user.fullname;
      let splitName;
      let fName;
      let lName;

      if (getName != null) {
        splitName = getName.split(' ');
        fName = splitName[0];
        lName = splitName[1];
      } else {
        fName = '';
        lName = '';
      }

      setUserInfo({
        Userfirstname: fName,
        Userlastname: lName,
        Useremail: todecoded.user.email,
        UseruserImage: todecoded.user.userImage,
        UserphoneNumber: todecoded.user.phoneNumber,
        UserOldNumber: todecoded.user.secondaryPhoneNumber,
        Userrelationship: todecoded.user.relationship,
        Usergender: todecoded.user.gender,
        Userbvn: todecoded.user.BVN,
        UserdateOfBirth: todecoded.user.dateOfBirth,
      });
      setTokens({
        dateOfBirth: todecoded.user.dateOfBirth,
        gender: '',
      });

      if (todecoded.user.gender == null) {
        setGenderEmpty(true);
      }

      if (todecoded.user.userImage !== null) {
        setImage(api_url2 + '/' + todecoded.user.userImage);
      } else {
        setImage('../../img/profile_img.jpeg');
      }
    }
  }, [auth]);

  useEffect(() => {
    axios
      .get(api_url2 + '/v1/user/nextOfKin/info', null, config)
      .then((data) => {
        //console.log('eeeeee');
        console.log(data.data.nxtOfKin, 'king');

        if (data.data.status == true) {
          setNxtOfKinA(true);
        }

        setNextOfKinData({
          // nxtcustomer_id: customer_id,
          nxtemail: data.data.nxtOfKin.email,
          nxtfirstname: data.data.nxtOfKin.firstname,
          nxtgender: data.data.nxtOfKin.gender,
          nxtlastname: data.data.nxtOfKin.lastname,
          nxtphoneNumber: data.data.nxtOfKin.phoneNumber,
          nxtrelationship: data.data.nxtOfKin.relationship,
        });
        // setGoods(data.data.data)
      })
      .catch((err) => {
        //console.log(err.response); // "oh, no!"
      });
  }, []);

  const [userName, setUserName] = useState({ user: '' });
  // const [nameUpdate, setNameUpdate] = useState('');

  const { user } = userName;

  let birthDate = dateOfBirth ? dateOfBirth.toLocaleDateString() : '';

  const {
    firstname,
    lastname,
    email,
    phoneNumber,
    relationship,
    gender1,
  } = nextKin;

  const { firstnameQ, lastnameQ, gender } = tokens;

  const onChangeFor = (e) => {
    setTokens({ ...tokens, [e.target.name]: e.target.value });
    setDisable2(false);
  };

  const onChangeKin = (e) => {
    setNextKin({ ...nextKin, [e.target.name]: e.target.value });

    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :');
    } else {
      setEmailError(label4);
    }
    if (
      firstname == '' ||
      lastname == '' ||
      email == '' ||
      phoneNumber == '' ||
      // gender == "" ||
      relationship == ''
    ) {
      setDisableKin(true);
    } else {
      setDisableKin(false);
    }
    //console.log(nextKin);
  };

  // useEffect(()=>{

  // },[phoneNumber])

  const onChangeFor4 = (e) => {
    setChangePassword1({
      ...changePassword1,
      [e.target.name]: e.target.value,
    });
  };

  const onChange2 = (e) => {
    setChangePhone1({
      ...changePhone1,
      [e.target.name]: e.target.value,
    });
  };

  // const updateUser =()=>{
  //   setUserName()
  // }

  // const [value, setValue] = useState("1997-02-09");
  // const [email, setEmail] = useState("samuelify225@gmail.com");
  // const [bvnNum, setBvnNum] = useState("23745672845");
  // const [phoneNo, setPhoneNo] = useState("+2348164020234");
  const [phone_no2, setPhone_no2] = useState('');
  const [phone_no3, setPhone_no3] = useState('');
  //   const [value, setValue] = useState(new Date("2014-02-09"));
  const [age, setAge] = React.useState({ relationship });
  const [activeBg, setActiveBg] = useState('accounts');
  // const immmg = localStorage.getItem("imageDef");
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [trig, setTrig] = useState(false);

  // const [bvnId,setBvnId]= useState("")
  // const [image2, setImage2] = useState("../../img/profile_img.jpeg");
  const [error4, setError4] = useState('First Name');
  const [error5, setError5] = useState('Last Name');
  const [error6, setError6] = useState('Phone Number');
  const [error7, setError7] = useState('Address');
  const [error8, setError8] = useState('BVN');
  const [error9, setError9] = useState('Select Relationship');
  const $disableMe = document.getElementById('fadat');
  const [empty, setEmpty] = useState(true);

  const label3 = (
    <span style={{ color: 'red' }}>First Name Required</span>
  );
  const label4 = (
    <span style={{ color: 'red' }}>Enter Valid Email</span>
  );
  const label14 = (
    <span style={{ color: 'red' }}>last Name Required</span>
  );
  const label5 = (
    <span style={{ color: 'red' }}>Enter Phone Number</span>
  );
  const label6 = <span style={{ color: 'red' }}>Enter Address</span>;
  const label7 = <span style={{ color: 'red' }}>Enter BVN</span>;
  const label8 = (
    <span style={{ color: 'red' }}>Relationship Required</span>
  );

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));

      const types = ['jpg', 'png', 'jpeg'];

      if (event.currentTarget.id == 'customer_image') {
        if (event.currentTarget.files.length == 0) {
          // setUserInfo({ ...userInfo, applicantImg: "" });
          // document.getElementById("output1").src = "";
        } else {
          let passportFile =
            document.getElementById('customer_image').files[0];

          let fileExtension = passportFile.name.split('.').pop();
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

  const onChangeAddress = (e) => {
    setCustomerAddress(e.target.value);
  };

  const onChangeBvn = (event) => {
    setCustomerBvn1(event.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
    setPhone_no2(event.target.value);
    setPhone_no3(event.target.value);
  };
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const openModal2 = () => {
    setModal2(true);
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
  // const onChangePicture = (e) => {
  //   setPicture(URL.createObjectURL(e.target.files[0]));
  // };
  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  const sends = async (e) => {
    console.log(firstnameQ, lastnameQ, gender, birthDate);

    let res = await sumitGenderAndDate(
      firstnameQ,
      lastnameQ,
      // phoneNumberQ,
      gender,
      birthDate
      // dateOfBirth
    );

    if (isLoading2 == true) {
      setDisable2(true);
    } else if (isLoading2 == false) {
      setDisable2(false);
    }
    setIsLoading2(true);
    setDisable2(true);

    console.log(res);

    if (res.success == true) {
      setIsLoading2(false);
      console.log('okay Good Server');
      window.location.replace('/dashboard/accounts');
    } else {
      setIsLoading2(false);
      setDisable2(false);
    }
  };

  // const updateInfo = async (e) => {
  //   let res = await userInfo(firstname1,lastname1,phoneNumber1,email1,BVN1);

  //   //console.log(res);

  //   if (res.data.data.success == true) {
  //     //console.log("okay Good Server");
  //   } else {
  //     setAlert(res.data.data.errors[0].msg, "danger");
  //   }
  // };

  useEffect(() => {
    if (relationship.length > 1) {
      setError9('Select Relationship');
    }
  }, [relationship]);
  useEffect(() => {
    if (
      firstname == '' ||
      lastname == '' ||
      email == '' ||
      phoneNumber == '' ||
      relationship == ''
    ) {
      setDisableKin(true);
    } else {
      setDisableKin(false);
    }
  }, []);

  const nextOfKINGS = async (e) => {
    // $disableMe.setAttribute('diasbled','diasbled')
    setDisableKin(true);
    setIsLoadingKin(true);
    if (
      firstname == '' ||
      lastname == '' ||
      email == '' ||
      phoneNumber == '' ||
      relationship == ''
    ) {
      //  console.log('fil in')
      if (firstname == '') {
        setError4(label3);
        setDisableKin(true);
      }
      if (lastname == '') {
        setError5(label14);
        setDisableKin(true);
      }
      if (phoneNumber == '') {
        setError6(label5);
        setDisableKin(true);
      }
      if (relationship == '') {
        setError9(label8);
        setDisableKin(true);
      }
      if (email == null) {
        setEmailError(label4);
        setDisableKin(true);
      }
      if (phoneNumber.length < 11 || phoneNumber.length > 11) {
        setError6(label5);
        // setDisableKin(true);
      } else {
        setError6('Phone Number');
        setDisableKin(true);
      }
      setDisableKin(true);
    } else {
      let res = await nextOfKING(
        firstname,
        lastname,
        email,
        phoneNumber,
        relationship,
        gender1
      );

      // setTimeout(() => {
      //   setDisabled1(false);
      //   setFold("save_changes_btn");
      // }, 5000);

      // if(firstname == "" || firstname.length == 0 ){
      //   setError4(label3)
      // }else{
      //   setError4('First Name')
      // }

      if (res.data.success == true) {
        setDisableKin(false);
        setIsLoadingKin(false);
        window.location.reload();
        console.log(res.data.success);
        console.log('okay Good Server');
      } else {
        setAlert(res.data.data.errors[0].msg, 'danger');
        setDisableKin(false);
        setIsLoadingKin(false);
        console.log(res.data.data.errors[0].msg);
      }
    }
  };

  const sumitChangePassword = async (e) => {
    let res = await changePassword(oldpassword, newpassword);

    console.log(res);

    if (res.data.success == true) {
      console.log(res.data.success);
      // window.location.reload();
      //console.log("okay Good Server");
    } else {
      setAlert(res.data.data.errors[0].msg, 'danger');
    }
  };
  useEffect(() => {
    // setDisable2(true);
    if (customer_image == '') {
      setDisable(true);
    }
    if (gender == '') {
      setDisable2(true);
    }
  });

  const ChanePhoneNumber = async (e) => {
    let res = await submitPhone(
      primaryPhoneNumber,
      secondaryPhoneNumber
    );
    console.log(res);

    if (res.data.success == true) {
      console.log(res.data.success);
      window.location.reload();
      //console.log("okay Good Server");
    } else if (res.data.success === false) {
      alert(res.data.data.message);
      setAlert(res.data.data.message, 'danger');
    }

    // setPhone_no3(event.target.value)
  };

  const AddUserPhoto = async (e) => {
    e.preventDefault();
    if (isLoading == true) {
      setDisable(true);
    } else if (isLoading == false) {
      setDisable(false);
    }
    setIsLoading(true);
    setDisable(true);
    const formData = new FormData();

    if (gender == '') {
      setDisable(true);
      //console.log("empty passport");
      // setAlert('Please provide a passport photo', 'danger');
    } else {
      const element = document.getElementById('customer_image');
      const file = element.files[0];
      formData.append('customer_image', file, file.name);
      setDisable(false);
      //console.log(formData, "hhhh");

      try {
        const res = await axios.put(
          api_url2 + '/v1/user/add/customer/image',
          formData
        );
        //console.log(res.data, "undefined");

        if (res.data.statusCode == 200) {
          // setIsSuccessful(true);/
          setIsLoading(false);
          window.location.reload();
          // setPassportUpload(true)
        } else {
          // setAlert('Something went wrong, please try again later', 'danger');
        }
      } catch (err) {
        setIsLoading(false);
        setDisable(false);
        //console.log(err.response);
        // setAlert('Check your internet connection', 'danger');
      }
    }
  };

  const submitAddress = async (e) => {
    let res = await addAddress(customerAddress);

    if (res.data.success == true) {
      // setDisableKin(false);
      // setIsLoadingKin(false);
      // window.location.reload();
      setHasValue(!hasValue);
      console.log(res.data.success);
      console.log('okay Good Server');
    } else {
      setAlert(res.data.data.errors[0].msg, 'danger');
      // setDisableKin(false);
      // setIsLoadingKin(false);
      console.log(res.data.data.errors[0].msg);
    }
  };

  useEffect(() => {
    axios
      .get(api_url2 + '/v1/user/address/info', null, config)
      .then((data) => {
        console.log(data.data.cusAddress);
        setCustomerAddress(data.data.cusAddress.address);
        setHasValue(true);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div
      className="other2 account_body"
      style={{ paddingBottom: '0em' }}
    >
      <section
        className="no-bg account_mobi_section"
        style={{ paddingBottom: '0em' }}
      >
        <div className="container">
          <div className="dashboard_account_page_area">
            <div className="account_toggle_heading">
              <span
                id="accounts"
                onClick={changeBg}
                className={
                  activeBg == 'accounts'
                    ? 'account_toggle account_toggle_active'
                    : 'account_toggle'
                }
              >
                Accounts
              </span>
              <span
                id="kin"
                onClick={changeBg}
                className={
                  activeBg == 'kin'
                    ? 'account_toggle account_toggle_active'
                    : 'account_toggle'
                }
              >
                Next of Kin
              </span>
              <span
                id="security"
                onClick={changeBg}
                className={
                  activeBg == 'security'
                    ? 'account_toggle account_toggle_active'
                    : 'account_toggle'
                }
              >
                Security
              </span>
            </div>
            {/* [[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]] */}
            <div className="account_toggle_body_area">
              {activeBg == 'accounts' ? (
                <div className="account_toggle_body_area1">
                  <div className="account_toggle_body_area1_title">
                    Personalize
                  </div>
                  <div className="account_toggle_body_area1_txts_input">
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    <div className="toggle_body_area1_cont1">
                      {UseruserImage == null ? (
                        <div className="toggle_body_area1_cont1_txts">
                          Change Profile Picture{' '}
                          <span className="toggle_body_area1_cont1_sub_txts">
                            {' '}
                            Choose a new avatar to be used across
                            Egoras
                          </span>
                        </div>
                      ) : (
                        <div className="toggle_body_area1_cont1_txts">
                          My Profile Picture{' '}
                          <span className="toggle_body_area1_cont1_sub_txts">
                            {' '}
                            {/* Choose a new avatar to be used across Egoras */}
                          </span>
                        </div>
                      )}
                      <div className="toggle_body_area1_cont1_input">
                        {' '}
                        <img
                          src={image}
                          alt=""
                          className="user_upload_img"
                        />
                        {UseruserImage == null ? (
                          <AddCircleIcon
                            className="add_icon"
                            onClick={openModal}
                          />
                        ) : null}
                      </div>
                    </div>
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Full Name
                        <span className="toggle_body_area1_cont1_sub_txts">
                          {' '}
                          Customize your account name
                        </span>
                      </div>
                      {Userfirstname == '' ? (
                        <div className="toggle_body_area1_cont1_input">
                          <TextField
                            className="name_input1"
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            name="firstnameQ"
                            value={firstnameQ}
                            onChange={onChangeFor}
                          />
                          <TextField
                            className="name_input1"
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            name="lastnameQ"
                            value={lastnameQ}
                            onChange={onChangeFor}
                          />
                        </div>
                      ) : (
                        <div className="toggle_body_area1_cont1_input">
                          <TextField
                            className="name_input1"
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            // name="firstnameQ"
                            value={Userfirstname}
                            // onChange={onChangeFor}
                          />
                          <TextField
                            className="name_input1"
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            // name="lastnameQ"
                            value={Userlastname}
                            // onChange={onChangeFor}
                          />
                        </div>
                      )}
                    </div>
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}

                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Gender
                        <span className="toggle_body_area1_cont1_sub_txts">
                          {' '}
                          How you would like to be identified
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        {Userfirstname == '' ? (
                          <div className="d-flex">
                            <div className="radio_group pr-4">
                              <input
                                type="radio"
                                name="gender"
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
                                name="gender"
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
                          <span>{Usergender}</span>
                        )}
                      </div>
                    </div>
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Date of birth
                        <span className="toggle_body_area1_cont1_sub_txts">
                          {' '}
                          For your birthday :
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        {/* {UserdateOfBirth} */}

                        {Userfirstname == '' ? (
                          <div className="text-left">
                            <span className="input_title">
                              Date Of Birth
                            </span>
                            <DatePicker
                              onChange={setDateOfBirth}
                              value={dateOfBirth}
                              format="yyyy-MM-dd"
                            />
                          </div>
                        ) : (
                          <div className="text-left">
                            <TextField
                              style={{ width: '100%' }}
                              // className="name_input1"
                              id="outlined-basic"
                              label="Date Of Birth"
                              variant="outlined"
                              // name="lastnameQ"
                              value={UserdateOfBirth}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {genderEmpty == true ? (
                      <div className="toggle_body_area1_cont1">
                        <div className="toggle_body_area1_cont1_txts"></div>
                        <div className="toggle_body_area1_cont1_input">
                          <button
                            className={fold1}
                            onClick={sends}
                            disabled={disable2}
                          >
                            {isLoading2 ? (
                              <span>
                                Saving
                                <FontAwesomeIcon
                                  className="ml-2"
                                  icon={faSpinner}
                                  spin
                                />
                              </span>
                            ) : (
                              <span> Save Changes</span>
                            )}
                          </button>
                        </div>
                      </div>
                    ) : null}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                  </div>
                </div>
              ) : null}
              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              {activeBg == 'kin' ? (
                <div className="account_toggle_body_area1">
                  <div className="account_toggle_body_area1_title">
                    Personal Details
                  </div>
                  {nxtOfKinA == true ? (
                    <div className="account_toggle_body_area1_txts_input">
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      <div className="toggle_body_area1_cont1">
                        <div className="toggle_body_area1_cont1_txts">
                          Full Name
                          <span className="toggle_body_area1_cont1_sub_txts"></span>
                        </div>
                        <div className="toggle_body_area1_cont1_input">
                          <TextField
                            className="name_input1"
                            id="outlined-basic"
                            // label="First Name"
                            label="First Name"
                            variant="outlined"
                            name="firstname"
                            value={nxtfirstname}

                            // onChange={onChangeFor2}
                          />
                          <TextField
                            className="name_input1"
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            name="lastname"
                            value={nxtlastname}
                            // onChange={onChangeFor2}
                          />
                        </div>
                      </div>
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
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
                            value={nxtemail}
                            // onChange={onChangeFor2}
                          />
                        </div>
                      </div>
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
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
                            value={nxtphoneNumber}
                            // onChange={onChangeFor2}
                          />
                        </div>
                      </div>
                      {/* '''''''''''''''''''''∂∂ */}
                      {/* '''''''''''''''''''''∂∂ */}
                      {/* '''''''''''''''''''''∂∂ */}
                      {/* <div className="account_toggle_body_area1_title">
                          Bank Details
                        </div> */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}

                      {/* '''''''''''''''''''''∂∂ */}
                      {/* '''''''''''''''''''''∂∂ */}
                      {/* '''''''''''''''''''''∂∂ */}
                      <div className="account_toggle_body_area1_title">
                        Other Details
                      </div>
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      <div className="toggle_body_area1_cont1">
                        <div className="toggle_body_area1_cont1_txts">
                          Relationship{' '}
                          <span className="toggle_body_area1_cont1_sub_txts">
                            Father, Mother, Sister ...
                          </span>
                        </div>
                        <div className="toggle_body_area1_cont1_input">
                          <TextField
                            className="name_input1a"
                            id="outlined-basic"
                            label="Relationship"
                            variant="outlined"
                            // name="phoneNumber"
                            value={nxtrelationship}
                            // onChange={onChangeFor2}
                          />
                        </div>
                      </div>

                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      <div className="toggle_body_area1_cont1">
                        <div className="toggle_body_area1_cont1_txts">
                          Gender
                          <span className="toggle_body_area1_cont1_sub_txts">
                            {' '}
                            How you would like to be identified
                          </span>
                        </div>
                        {/* <div className="toggle_body_area1_cont1_input">
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
                          </div> */}
                        {nxtgender}
                      </div>
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}

                      {/* <div className="toggle_body_area1_cont1">
                          <div className="toggle_body_area1_cont1_txts"></div>
                          <div className="toggle_body_area1_cont1_input">
                            <button
                              className="save_changes_btn"
                              onClick={nextOfKINGS}
                            >
                              Save Changes
                            </button>
                          </div>
                        </div> */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                    </div>
                  ) : (
                    <div className="account_toggle_body_area1_txts_input">
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      <div className="toggle_body_area1_cont1">
                        <div className="toggle_body_area1_cont1_txts">
                          Full Name
                          <span className="toggle_body_area1_cont1_sub_txts"></span>
                        </div>
                        <div className="toggle_body_area1_cont1_input">
                          <TextField
                            className="name_input1"
                            id="outlined-basic"
                            label={error4}
                            variant="outlined"
                            name="firstname"
                            value={firstname}
                            onChange={onChangeKin}
                          />
                          <TextField
                            className="name_input1"
                            id="outlined-basic"
                            label={error5}
                            variant="outlined"
                            name="lastname"
                            value={lastname}
                            onChange={onChangeKin}
                          />
                        </div>
                      </div>
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      <div className="toggle_body_area1_cont1">
                        <div className="toggle_body_area1_cont1_txts">
                          Email Address
                          <span className="toggle_body_area1_cont1_sub_txts"></span>
                        </div>
                        <div className="toggle_body_area1_cont1_input">
                          <TextField
                            className="name_input1a"
                            id="outlined-basic"
                            label={emailError}
                            variant="outlined"
                            name="email"
                            value={email}
                            onChange={onChangeKin}
                          />
                        </div>
                      </div>
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      <div className="toggle_body_area1_cont1">
                        <div className="toggle_body_area1_cont1_txts">
                          Phone number
                          <span className="toggle_body_area1_cont1_sub_txts"></span>
                        </div>
                        <div className="toggle_body_area1_cont1_input">
                          <TextField
                            className="name_input1a"
                            id="outlined-basic"
                            label={error6}
                            variant="outlined"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={onChangeKin}
                          />
                        </div>
                      </div>
                      {/* '''''''''''''''''''''∂∂ */}
                      {/* '''''''''''''''''''''∂∂ */}
                      {/* '''''''''''''''''''''∂∂ */}
                      {/* <div className="account_toggle_body_area1_title">
                          Bank Details
                        </div> */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}

                      {/* '''''''''''''''''''''∂∂ */}
                      {/* '''''''''''''''''''''∂∂ */}
                      {/* '''''''''''''''''''''∂∂ */}
                      <div className="account_toggle_body_area1_title">
                        Other Details
                      </div>
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      <div className="toggle_body_area1_cont1">
                        <div className="toggle_body_area1_cont1_txts">
                          Relationship{' '}
                          <span className="toggle_body_area1_cont1_sub_txts">
                            Father, Mother, Sister ...
                          </span>
                        </div>
                        <div className="toggle_body_area1_cont1_input">
                          <div className="name_input1a">
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                {error9}
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="relationship"
                                value={relationship}
                                label="Age"
                                // onChange={handleChange}
                                onChange={onChangeKin}
                                // onSelect={onChangeFor2}
                              >
                                <MenuItem value="Mother">
                                  Mother
                                </MenuItem>
                                <MenuItem value="Father">
                                  Father
                                </MenuItem>
                                <MenuItem value="Sister">
                                  Sister
                                </MenuItem>
                                <MenuItem value="Uncle">
                                  Uncle
                                </MenuItem>
                                <MenuItem value="Aunt">Aunt</MenuItem>
                                <MenuItem value="Brother">
                                  Brother
                                </MenuItem>
                                <MenuItem value="Inlaw">
                                  Inlaw
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </div>
                      </div>

                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      <div className="toggle_body_area1_cont1">
                        <div className="toggle_body_area1_cont1_txts">
                          Gender
                          <span className="toggle_body_area1_cont1_sub_txts">
                            {' '}
                            How you would like to be identified
                          </span>
                        </div>
                        <div className="toggle_body_area1_cont1_input">
                          <div className="radio_group">
                            <input
                              type="radio"
                              name="gender1"
                              id="male"
                              value="Male"
                              // value="Male"
                              onChange={onChangeKin}
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
                              // value="female"
                              onChange={onChangeKin}
                            />
                            <label for="female" class="radio">
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}

                      <div className="toggle_body_area1_cont1">
                        <div className="toggle_body_area1_cont1_txts"></div>
                        <div className="toggle_body_area1_cont1_input">
                          <button
                            // className={disabled1 ? "save_changes_btn" :"disBtn"}
                            className={fold}
                            onClick={nextOfKINGS}
                            disabled={disableKin}
                            id="school"
                          >
                            {isLoadingKin ? (
                              <span>
                                Saving
                                <FontAwesomeIcon
                                  className="ml-2"
                                  icon={faSpinner}
                                  spin
                                />
                              </span>
                            ) : (
                              <span> Save Changes</span>
                            )}
                          </button>
                        </div>
                      </div>
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                      {/* ============ */}
                    </div>
                  )}
                </div>
              ) : null}
              {activeBg == 'security' ? (
                <div className="account_toggle_body_area1">
                  <div className="account_toggle_body_area1_title">
                    Verified Information
                  </div>
                  <div className="account_toggle_body_area1_txts_input">
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Email Address
                        <span className="toggle_body_area1_cont1_sub_txts"></span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        {Useremail}
                      </div>
                    </div>
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    <div className="toggle_body_area1_cont1">
                      <div
                        className="toggle_body_area1_cont1_txts"
                        onClick={openModal2}
                      >
                        Phone Numbers
                        <span className="toggle_body_area1_cont1_sub_txts"></span>
                      </div>
                      {UserphoneNumber === null ? (
                        <div className="toggle_body_area1_cont1_input">
                          <AddCircleIcon
                            className="edit_icon"
                            onClick={openModal2}
                          />
                        </div>
                      ) : (
                        <div
                          className="toggle_body_area1_cont1_input"
                          onClick={openModal2}
                        >
                          {UserphoneNumber} {UserOldNumber}
                        </div>
                      )}
                    </div>
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Bank Verification Number (BVN)
                        <span className="toggle_body_area1_cont1_sub_txts">
                          {' '}
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        <div className="bvn_btn">{Userbvn}</div>
                      </div>
                    </div>
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    <div className="account_toggle_body_area1_title">
                      Password
                    </div>
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
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
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    <div className="account_toggle_body_area1_title">
                      Address
                    </div>
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    <div className="toggle_body_area1_cont1">
                      <div className="toggle_body_area1_cont1_txts">
                        Add Address
                        <span className="toggle_body_area1_cont1_sub_txts">
                          input your address for easy shipping
                        </span>
                      </div>
                      <div className="toggle_body_area1_cont1_input">
                        {!hasValue ? (
                          <div className="input_btn_grouped_div">
                            <TextField
                              className="name_input1a"
                              id="outlined-basic"
                              label={error7}
                              variant="outlined"
                              name="customerAddress"
                              value={customerAddress}
                              onChange={onChangeAddress}
                            />
                            <button
                              className={fold2}
                              style={{ width: '25%' }}
                              onClick={submitAddress}
                              disabled={disabled3}
                            >
                              Submit Address
                            </button>
                          </div>
                        ) : (
                          <span
                            onClick={() => {
                              setHasValue(!hasValue);
                            }}
                          >
                            {customerAddress}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
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
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                    {/* ============ */}
                  </div>
                </div>
              ) : null}
              <div className="account_toggle_body_area2"></div>
            </div>
          </div>
        </div>
      </section>

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
                    style={{ width: '250px', height: '250px' }}
                  />
                  <label
                    for="customer_image"
                    className="custom-file-upload33"
                    onChange={onImageChange}
                  >
                    <AddCircleIcon
                      className="add_icon33"
                      onChange={onImageChange}
                    />{' '}
                  </label>
                  <input
                    type="file"
                    id="customer_image"
                    name="customer_image"
                    onChange={onImageChange}
                    className="filetype"
                  />
                </div>{' '}
              </div>
              <div className="profile_modal_area2">
                <button
                  className="add_photo"
                  onClick={AddUserPhoto}
                  disabled={disable}
                >
                  <AddAPhotoIcon className="photo_icon" />{' '}
                  {isLoading ? (
                    <span>
                      Submitting
                      <FontAwesomeIcon
                        className="ml-2"
                        icon={faSpinner}
                        spin
                      />
                    </span>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
                <button className="cancel_photo" onClick={closeModal}>
                  <DoDisturbIcon className="cancel_icon" /> Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {modal2 == true && (
        <div className="profile_modal_div">
          <div className="container">
            <div className="profile_modal_area_phone_no">
              <div className="profile_modal_area1">
                <TextField
                  className="name_input1ab"
                  id="outlined-basic"
                  label="Phone No:"
                  variant="outlined"
                  name="primaryPhoneNumber"
                  value={primaryPhoneNumber}
                  onChange={onChange2}
                />
                {/* <TextField
                  className="name_input1ab"
                  id="outlined-basic"
                  label="Phone No:"
                  variant="outlined"
                  name="phone no"
                  value={phone_no2}
                  onChange={handleChange}
                />
                 */}
              </div>
              <TextField
                className="name_input1ab"
                id="outlined-basic"
                label="Change Phone No:"
                variant="outlined"
                name="secondaryPhoneNumber"
                value={secondaryPhoneNumber}
                onChange={onChange2}
              />

              <div className="profile_modal_area2">
                <button
                  className="add_photo"
                  onClick={ChanePhoneNumber}
                >
                  {' '}
                  <LocalPhoneIcon className="cancel_icon" />
                  Add Number
                </button>
                <button
                  className="cancel_photo"
                  onClick={() => {
                    setModal2(!modal2);
                  }}
                >
                  {' '}
                  <DoDisturbIcon className="cancel_icon" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal3 == true ? (
        <div className="profile_modal_div">
          <div className="container">
            <div className="profile_modal_area_phone_no">
              <div className="profile_modal_area1">
                <div className="password_divs">
                  <TextField
                    className="name_input1ab"
                    id="outlined-basic"
                    label="Old Password"
                    variant="outlined"
                    name="oldpassword"
                    type="password"
                    value={oldpassword}
                    onChange={onChangeFor4}
                  />
                  <TextField
                    className="name_input1ab"
                    id="outlined-basic"
                    label="New Password"
                    variant="outlined"
                    name="newpassword"
                    type="password"
                    value={newpassword}
                    onChange={onChangeFor4}
                  />
                </div>
              </div>
              <div className="profile_modal_area2">
                <button
                  className="add_photo"
                  onClick={sumitChangePassword}
                >
                  <LockIcon className="cancel_icon" />
                  Change Password
                </button>
                <button
                  className="cancel_photo"
                  onClick={closeModal3}
                >
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
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

// let  res = await getLogin2(
export default connect(mapStateToProps, {
  sumitGenderAndDate,
  setAlert,
  nextOfKING,
  changePassword,
  submitPhone,
  addAddress,
})(DashboardAccountPage);
