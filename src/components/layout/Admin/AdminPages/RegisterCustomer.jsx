import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "../AdminStyles/registerCustomer.css";
import SignupComp from "../../Home2/Signup/SignupComp";
import LoginComp from "../../Home2/Login/LoginComp";
import axios from "axios";
import {API_URL2 as api_url2,
}
 from "../../../../actions/types";


const RegisterCustomer = () => {
  
const [info,setInfo]=useState({rolesMap:""})
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const {rolesMap}=info;

  useEffect(() => {
  
    axios.get(
        api_url2 + "/v1/admin/info",
        null,
        config
    ).then((data) => {
       
        //console.log(data.data.user, "line_ful");
        setInfo({
          rolesMap:data.data.user.role,
        })
       
    
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      }); 
  }, []);

  
  const currentPage = window.location.pathname;
  return (
    <>
     {/* { (rolesMap === "BUSINESS_ADMIN") || "/super_admin/register_user" ? */}
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <SignupComp />
        </div>
      </section>
    </div>
    {/* :null} */}
    </>
  );
};

export default RegisterCustomer;
