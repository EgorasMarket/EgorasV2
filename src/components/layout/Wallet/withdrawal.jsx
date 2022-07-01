import React, { useState } from "react";
import "./withdrawal.css";
// import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import classnames from 'classnames';

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import InfoIcon from "@mui/icons-material/Info";
import StarRateIcon from "@mui/icons-material/StarRate";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const form_Kings2 = () => {
  document.getElementById("formKing").style.display = "block";
  document.getElementById("formKing1").style.display = "none";
  document.getElementById("formKing2").style.display = "none";
};

const Withdrawal = () => {
  //       const [age, setAge] = React.useState('NIgeria(+234)');

  //    const handleChange1 = (event) => {
  //     setAge(event.target.value);
  //  };
  const [age, setAge] = React.useState("EGORAS EUSD");

  const handleChange4 = (event) => {
    let wave = document.getElementById("egorasChange");
    let wave1 = document.getElementById("justMe");
    setAge(event.target.value);
    wave.innerHTML = event.target.value;
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const changeColor = () => {
    let color = document.getElementById("sabi");
    let color1 = document.getElementById("sabi2");

    color1.style.border = "1px solid #e7e7e8";
    color.style.border = "1px solid #229e54";
    document.getElementById("Numb").textContent = 4.5 + " ";
    document.getElementById("Numb1").textContent = 4.5 + " ";
    document.getElementById("Numb2").textContent = 4.5 + " ";
  };

  const changeColor1 = () => {
    let color = document.getElementById("sabi");
    let color1 = document.getElementById("sabi2");

    color1.style.border = "1px solid #229e54";
    color.style.border = "1px solid #e7e7e8";
    document.getElementById("Numb").textContent = 20.5 + " ";
    document.getElementById("Numb1").textContent = 20.5 + " ";
    document.getElementById("Numb2").textContent = 20.5 + " ";
  };

  const hide4 = () => {
    document.getElementById("fullwithDiv").style.display = "none";
    document.body.classList.remove("adding");
  };
  const hide5 = () => {
    document.getElementById("fullwithDiv").style.display = "block";
    document.body.classList.add("adding");
  };
  const show7 = (event) => {
    document.getElementById("fullwithDiv").style.display = "none";
    document.body.classList.remove("adding");
  };

  const form_Kings = () => {
    document.getElementById("formKing").style.display = "none";
    document.getElementById("formKing1").style.display = "block";
    document.getElementById("formKing2").style.display = "none";
  };
  const form_Kings1 = () => {
    document.getElementById("formKing").style.display = "none";
    document.getElementById("formKing1").style.display = "none";
    document.getElementById("formKing2").style.display = "block";
  };

  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container" style={{display:'flex',justifyContent:'center'}}>
          <div className="parentDiv">
            <Link to="/dashboard/wallet" style={{ color: "black" }}>
              {" "}
              <div className="back">
                <ChevronLeftIcon />
                Back
              </div>
            </Link>
            <div className="withdrawalEGORAS">
              <span id="win">
                Withdraw <span id="egorasChange">EGORAS EUSD</span>
              </span>{" "}
              <BorderColorIcon className="borderColorIcon" onClick={hide5} />
            </div>
            <div className="formKing" id="formKing">
              <Box sx={{ width: "100%" }} style={{ backgroundColor: "#fff" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    style={{ paddingTop: "15px" }}
                  >
                    <Tab
                      label="Coin Wallet"
                      {...a11yProps(0)}
                      style={{ fontSize: "12px", cursor: "pointer" }}
                    />
                    <Tab
                      label="Username"
                      {...a11yProps(1)}
                      style={{ fontSize: "12px", cursor: "pointer" }}
                    />
                    <Tab
                      label="Phone number"
                      {...a11yProps(2)}
                      style={{ fontSize: "12px", cursor: "pointer" }}
                    />
                  </Tabs>
                </Box>
                <TabPanel
                  value={value}
                  index={0}
                  style={{
                    padding: "4px 10px 25px 15px",
                    marginBottom: "20px",
                  }}
                >
                  <form>
                    <div className="addressFormat">Address format:</div>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      <div className="TRCN add" onClick={changeColor} id="sabi">
                        TRC20
                      </div>
                      <div className="TRCN" id="sabi2" onClick={changeColor1}>
                        ERC20
                      </div>
                    </div>
                    <div className="ESUD_Address">EUSD Address:</div>
                    <div className="inputHolderText">
                      <input
                        type="text"
                        placeholder="ESUD  Address"
                        className="inputText"
                        required
                      />
                      <QrCode2Icon className="Code21" />
                    </div>
                    <p
                      className="withdrawalPage"
                      style={{ letterSpacing: "0.02857em" }}
                    >
                      Withdrawal fee <span className="Aba">EUSD</span>:{" "}
                      <span className="Aba1" id="Numb">
                        1.00{" "}
                      </span>
                      <span style={{ fontWeight: "bold", color: "#229e54" }}>
                        EUSD{" "}
                      </span>
                    </p>
                    <div className="EgorasAmount12">
                      {" "}
                      <span className="upDOWN">EGORAS</span> EUSD Amount:
                    </div>
                    <div className="inputHolderText">
                      <input
                        type="number"
                        placeholder="00.00"
                        className="inputText2"
                      />{" "}
                      <div>
                        <span className="Uping">EUSD</span>{" "}
                        <button className="maxButton">Max</button>
                      </div>
                    </div>
                    <div
                      className="maximumEUSDA"
                      style={{ letterSpacing: "0.02857em" }}
                    >
                      Maximum <span className="Aba">EUSD</span> Available:{" "}
                      <span className="Aba1">0.00</span>
                      <span style={{ fontWeight: "bold", color: "#229e54" }}>
                        {" "}
                        EUSD
                      </span>
                    </div>
                    <div className="theAbove">
                      {" "}
                      <InfoIcon
                        style={{ color: "#229e54", marginRight: "5px" }}
                      />
                      <div className="para_Change">
                        The above fees are not fixed,it can vary depending on
                        the state of the blockchain networks.
                      </div>
                    </div>
                    <div className="theAbove">
                      {" "}
                      <InfoIcon
                        style={{ color: "#229e54", marginRight: "5px" }}
                      />
                      <div className="para_Change">
                        {" "}
                        Estimated time to complete: 6 minutes
                      </div>
                    </div>
                    <div className="submitAbove">Submit</div>
                  </form>
                </TabPanel>
                <TabPanel
                  value={value}
                  index={1}
                  style={{
                    padding: "4px 10px 25px 15px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <form>
                      <div className="secondTab">Username:</div>
                      <div className="divFam">
                        <input
                          type="text"
                          placeholder="Egoras username"
                          className="seconD_TagInput"
                        />
                      </div>
                      <div className="secondTabng1">
                        EGORAS EUSD Amount:{" "}
                        <InfoIcon
                          style={{ color: "#229e54", marginRight: "5px" }}
                        />
                      </div>
                      <div className="guide_M">
                        <input
                          type="number"
                          placeholder="00.00"
                          className="num_Num"
                        />
                        <span className="num_Num1">EUSD</span>
                      </div>
                      <div className="maximumEUSDA">
                        Maximum <span className="Aba"> EUSD</span> Available:{" "}
                        <span className="Aba1">0.00</span>
                        <span className="Aba"> EUSD</span>
                      </div>
                      <div className="Yon_can">
                        You can <span className="Aba1">buy</span> or{" "}
                        <span className="Aba1">deposit</span>{" "}
                        <span className="Aba">EUSD</span>
                      </div>
                      <div className="Message">Message</div>
                      <div>
                        <textarea
                          placeholder="Text to Egoras"
                          className="textArea"
                        ></textarea>
                      </div>
                      <div className="submitAbove">Submit</div>
                    </form>
                  </div>
                </TabPanel>
                <TabPanel
                  value={value}
                  index={2}
                  style={{
                    padding: "4px 10px 25px 15px",
                    marginBottom: "20px",
                  }}
                >
                  <form>
                    <div className="donateCoin">
                      You can donate coin to your friends via phone numbers,
                      even when your friends have not added their phone number
                      to Egoras.
                    </div>
                    <label className="phoneNumber">Phone number:</label>
                    {/* sx={{ m: 1, minWidth: 80 }} */}
                    <div></div>
                    <div>
                      <input
                        type="number"
                        placeholder="Phone number"
                        className="nameClass"
                      />
                    </div>
                    <div>
                      {" "}
                      <label className="Part2">EGORAS EUSD Amount:</label>
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="nameClass "
                      />
                    </div>
                    <div className="maximumEUSDA">
                      Maximum <span className="Aba">EUSD</span> Available:{" "}
                      <span className="Aba1">0.00</span>{" "}
                      <span className="Aba"> EUSD</span>
                    </div>
                    <div className="maximumEUSDA1">
                      You can <span className="Aba1">buy</span> or{" "}
                      <span className="Aba1">deposit</span>{" "}
                      <span className="Aba">EUSD</span>
                    </div>
                    <div className="sage">Message:</div>
                    <div>
                      <textarea
                        placeholder="Welcome to Egoras"
                        className="welcomeTo"
                      ></textarea>
                    </div>
                    <div className="submitAbove">Submit</div>
                  </form>
                </TabPanel>
              </Box>
              {/* <div> 
      
    </div> */}
            </div>

            <div
              className="formKing1"
              id="formKing1"
              style={{ boxShadow: "0px 2px 10px #e9e3e3bf" }}
            >
              <Box sx={{ width: "100%" }} style={{ backgroundColor: "#fff" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    style={{ paddingTop: "15px" }}
                  >
                    <Tab
                      label="Coin Wallet"
                      {...a11yProps(0)}
                      style={{ fontSize: "12px", cursor: "pointer" }}
                    />
                    <Tab
                      label="Username"
                      {...a11yProps(1)}
                      style={{ fontSize: "12px", cursor: "pointer" }}
                    />
                    <Tab
                      label="Phone number"
                      {...a11yProps(2)}
                      style={{ fontSize: "12px", cursor: "pointer" }}
                    />
                  </Tabs>
                </Box>
                <TabPanel
                  value={value}
                  index={0}
                  style={{
                    padding: "4px 10px 25px 15px",
                    marginBottom: "20px",
                  }}
                >
                  <form>
                    <div className="addressFormat">Address format:</div>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      <div className="TRCN add" onClick={changeColor} id="sabi">
                        TRC20
                      </div>
                      <div className="TRCN" id="sabi2" onClick={changeColor1}>
                        ERC20
                      </div>
                    </div>
                    <div className="ESUD_Address">EGR Address:</div>
                    <div className="inputHolderText">
                      <input
                        type="text"
                        placeholder="EGR  Address"
                        className="inputText"
                        required
                      />
                      <QrCode2Icon className="Code21" />
                    </div>
                    <p
                      className="withdrawalPage"
                      style={{ letterSpacing: "0.02857em" }}
                    >
                      Withdrawal fee <span className="Aba">EGR</span>:{" "}
                      <span className="Aba1" id="Numb1">
                        1.00{" "}
                      </span>
                      <span style={{ fontWeight: "bold", color: "#229e54" }}>
                        EGR{" "}
                      </span>
                    </p>
                    <div className="EgorasAmount12">
                      {" "}
                      <span>EGORAS EGR</span> Amount:
                    </div>
                    <div className="inputHolderText">
                      <input
                        type="number"
                        placeholder="00.00"
                        className="inputText2"
                      />{" "}
                      <div>
                        <span className="Uping">EGR</span>{" "}
                        <button className="maxButton">Max</button>
                      </div>
                    </div>
                    <div
                      className="maximumEUSDA"
                      style={{ letterSpacing: "0.02857em" }}
                    >
                      Maximum <span className="Aba">EGR</span> Available:{" "}
                      <span className="Aba1">0.00</span>
                      <span style={{ fontWeight: "bold", color: "#229e54" }}>
                        {" "}
                        EGR
                      </span>
                    </div>
                    <div className="theAbove">
                      {" "}
                      <InfoIcon
                        style={{ color: "#229e54", marginRight: "5px" }}
                      />
                      <div className="para_Change">
                        The above fees are not fixed,it can vary depending on
                        the state of the blockchain networks.
                      </div>
                    </div>
                    <div className="theAbove">
                      {" "}
                      <InfoIcon
                        style={{ color: "#229e54", marginRight: "5px" }}
                      />
                      <div className="para_Change">
                        {" "}
                        Estimated time to complete: 6 minutes
                      </div>
                    </div>
                    <div className="submitAbove">Submit</div>
                  </form>
                </TabPanel>
                <TabPanel
                  value={value}
                  index={1}
                  style={{
                    padding: "4px 10px 25px 15px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <form>
                      <div className="secondTab">Username:</div>
                      <div className="divFam">
                        <input
                          type="text"
                          placeholder="Egoras username"
                          className="seconD_TagInput"
                        />
                      </div>
                      <div className="secondTabng1">
                        EGORAS EGR Amount:{" "}
                        <InfoIcon
                          style={{ color: "#229e54", marginRight: "5px" }}
                        />
                      </div>
                      <div className="guide_M">
                        <input
                          type="number"
                          placeholder="00.00"
                          className="num_Num"
                        />
                        <span className="num_Num1">EGR</span>
                      </div>
                      <div className="maximumEUSDA">
                        Maximum <span className="Aba"> EGORAS EGR</span>{" "}
                        Available: <span className="Aba1">0.00</span>{" "}
                        <span className="Aba">EGR</span>
                      </div>
                      <div className="Yon_can">
                        You can <span className="Aba1">buy</span> or{" "}
                        <span className="Aba1">deposit</span>{" "}
                        <span className="Aba"> EGR</span>
                      </div>
                      <div className="Message">Message</div>
                      <div>
                        <textarea
                          placeholder="Text to Egoras"
                          className="textArea"
                        ></textarea>
                      </div>
                      <div className="submitAbove">Submit</div>
                    </form>
                  </div>
                </TabPanel>
                <TabPanel
                  value={value}
                  index={2}
                  style={{
                    padding: "4px 10px 25px 15px",
                    marginBottom: "20px",
                  }}
                >
                  <form>
                    <div className="donateCoin">
                      You can donate coin to your friends via phone numbers,
                      even when your friends have not added their phone number
                      to Egoras.
                    </div>
                    <label className="phoneNumber">Phone number:</label>
                    {/* sx={{ m: 1, minWidth: 80 }} */}
                    <div></div>
                    <div>
                      <input
                        type="number"
                        placeholder="Phone number"
                        className="nameClass"
                      />
                    </div>
                    <div>
                      {" "}
                      <label className="Part2">EGORAS EGR Amount:</label>
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="nameClass "
                      />
                    </div>
                    <div className="maximumEUSDA">
                      Maximum <span className="Aba">EGR</span> Available:{" "}
                      <span className="Aba1">0.00</span>
                      <span className="Aba"> EGR</span>
                    </div>
                    <div className="maximumEUSDA1">
                      You can <span className="Aba1">buy</span> or{" "}
                      <span className="Aba1">deposit</span>{" "}
                      <span className="Aba">EGR</span>
                    </div>
                    <div className="sage">Message:</div>
                    <div>
                      <textarea
                        placeholder="Welcome to Egoras"
                        className="welcomeTo"
                      ></textarea>
                    </div>
                    <div className="submitAbove">Submit</div>
                  </form>
                </TabPanel>
              </Box>
              {/* <div> 
      
    </div> */}
            </div>

            <div
              className="formKing2"
              id="formKing2"
              style={{ boxShadow: "0px 2px 10px #e9e3e3bf" }}
            >
              <Box sx={{ width: "100%" }} style={{ backgroundColor: "#fff" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    style={{ paddingTop: "15px" }}
                  >
                    <Tab
                      label="Coin Wallet"
                      {...a11yProps(0)}
                      style={{ fontSize: "12px", cursor: "pointer" }}
                    />
                    <Tab
                      label="Username"
                      {...a11yProps(1)}
                      style={{ fontSize: "12px", cursor: "pointer" }}
                    />
                    <Tab
                      label="Phone number"
                      {...a11yProps(2)}
                      style={{ fontSize: "12px", cursor: "pointer" }}
                    />
                  </Tabs>
                </Box>
                <TabPanel
                  value={value}
                  index={0}
                  style={{
                    padding: "4px 10px 25px 15px",
                    marginBottom: "20px",
                  }}
                >
                  <form>
                    <div className="addressFormat">Address format:</div>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      <div className="TRCN add" onClick={changeColor} id="sabi">
                        TRC20
                      </div>
                      <div className="TRCN" id="sabi2" onClick={changeColor1}>
                        ERC20
                      </div>
                    </div>
                    <div className="ESUD_Address">NIGERIA Naira Address:</div>
                    <div className="inputHolderText">
                      <input
                        type="text"
                        placeholder="Naira  Address"
                        className="inputText"
                        required
                      />
                      <QrCode2Icon className="Code21" />
                    </div>
                    <p
                      className="withdrawalPage"
                      style={{ letterSpacing: "0.02857em" }}
                    >
                      Withdrawal fee{" "}
                      <span style={{ fontWeight: "700" }}>NIGERIA</span> Naira:{" "}
                      <span className="Aba1" id="Numb2">
                        1.00{" "}
                      </span>
                      <span> Naira </span>
                    </p>
                    <div className="EgorasAmount12">
                      {" "}
                      <span className="upDOWN">NIGERIA</span> Naira Amount:
                    </div>
                    <div className="inputHolderText">
                      <input
                        type="number"
                        placeholder="00.00"
                        className="inputText2"
                      />{" "}
                      <div>
                        <span className="Uping">Naira</span>{" "}
                        <button className="maxButton">Max</button>
                      </div>
                    </div>
                    <div
                      className="maximumEUSDA"
                      style={{ letterSpacing: "0.02857em" }}
                    >
                      Maximum <span style={{ fontWeight: "700" }}>NIGERIA</span>{" "}
                      Naira Available: <span className="Aba1">0.00</span>
                      <span> Naira</span>
                    </div>
                    <div className="theAbove">
                      {" "}
                      <InfoIcon
                        style={{ color: "#229e54", marginRight: "5px" }}
                      />
                      <div className="para_Change">
                        The above fees are not fixed,it can vary depending on
                        the state of the blockchain networks.
                      </div>
                    </div>
                    <div className="theAbove">
                      {" "}
                      <InfoIcon
                        style={{ color: "#229e54", marginRight: "5px" }}
                      />
                      <div className="para_Change">
                        {" "}
                        Estimated time to complete: 6 minutes
                      </div>
                    </div>
                    <div className="submitAbove">Submit</div>
                  </form>
                </TabPanel>
                <TabPanel
                  value={value}
                  index={1}
                  style={{
                    padding: "4px 10px 25px 15px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <form>
                      <div className="secondTab">Username:</div>
                      <div className="divFam">
                        <input
                          type="text"
                          placeholder="Egoras username"
                          className="seconD_TagInput"
                        />
                      </div>
                      <div className="secondTabng1">
                        NIGERIA Naira Amount:{" "}
                        <InfoIcon
                          style={{ color: "#229e54", marginRight: "5px" }}
                        />
                      </div>
                      <div className="guide_M">
                        <input
                          type="number"
                          placeholder="00.00"
                          className="num_Num"
                        />
                        <span className="num_Num1">Naira</span>
                      </div>
                      <div className="maximumEUSDA">
                        Maximum{" "}
                        <span style={{ fontWeight: "700" }}>NIGERIA</span> Naira
                        Available: <span className="Aba1">0.00</span> Naira
                      </div>
                      <div className="Yon_can">
                        You can{" "}
                        <span style={{ color: "#229e54", fontWeight: "500" }}>
                          buy
                        </span>{" "}
                        or{" "}
                        <span style={{ color: "#229e54", fontWeight: "500" }}>
                          deposit
                        </span>{" "}
                        <span style={{ fontWeight: "700" }}>NIGERIA</span> Naira
                      </div>
                      <div className="Message">Message</div>
                      <div>
                        <textarea
                          placeholder="Text to Egoras"
                          className="textArea"
                        ></textarea>
                      </div>
                      <div className="submitAbove">Submit</div>
                    </form>
                  </div>
                </TabPanel>
                <TabPanel
                  value={value}
                  index={2}
                  style={{
                    padding: "4px 10px 25px 15px",
                    marginBottom: "20px",
                  }}
                >
                  <form>
                    <div className="donateCoin">
                      You can donate coin to your friends via phone numbers,
                      even when your friends have not added their phone number
                      to Egoras.
                    </div>
                    <label className="phoneNumber">Phone number:</label>
                    {/* sx={{ m: 1, minWidth: 80 }} */}
                    <div></div>
                    <div>
                      <input
                        type="number"
                        placeholder="Phone number"
                        className="nameClass"
                      />
                    </div>
                    <div>
                      {" "}
                      <label className="Part2">NIGERIA Naira Amount:</label>
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="nameClass "
                      />
                    </div>
                    <div className="maximumEUSDA">
                      Maximum{" "}
                      <span style={{ fontWeight: "700" }}> NIGERIA</span> Naira
                      Available: <span className="Aba1">0.00</span> Naira
                    </div>
                    <div className="maximumEUSDA1">
                      You can{" "}
                      <span style={{ color: "#229e54", fontWeight: "500" }}>
                        buy
                      </span>{" "}
                      or{" "}
                      <span style={{ color: "#229e54", fontWeight: "500" }}>
                        deposit
                      </span>{" "}
                      <span className="Aba1">Naira</span>
                    </div>
                    <div className="sage">Message:</div>
                    <div>
                      <textarea
                        placeholder="Welcome to Egoras"
                        className="welcomeTo"
                      ></textarea>
                    </div>
                    <div className="submitAbove">Submit</div>
                  </form>
                </TabPanel>
              </Box>
              {/* <div> 
      
    </div> */}
            </div>
          </div>

          <div className="fullwithDiv" id="fullwithDiv">
            <div className="fullwithDivChild">
              <div className="chooseCurrency">Choose a crytocurrency</div>
              <div>
                {" "}
                <FormControl sx={{ m: 1, minWidth: 420 }} className="gas">
                  <Select
                    value={age}
                    onChange={handleChange4}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    onClick={show7}
                    id="justMe"
                  >
                    <MenuItem value="EGORAS EUSD" onClick={form_Kings2}>
                      <img
                        src="token-right.svg"
                        width="30"
                        style={{ marginRight: "10px" }}
                      />
                      <span style={{ fontWeight: "800" }}>EGORAS EUSD</span>
                    </MenuItem>
                    <MenuItem value="NIGERIA Naira" onClick={form_Kings1}>
                      {" "}
                      <StarRateIcon className="starRateIcon" />
                      <span style={{ fontWeight: "800" }}>NIGERIA Niara</span>
                    </MenuItem>
                    <MenuItem value="EGORAS EGR" onClick={form_Kings}>
                      <img
                        src="egoras-favicon.svg"
                        width="28"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      <span style={{ fontWeight: "800" }}>EGORAS EGR</span>
                    </MenuItem>
                  </Select>
                </FormControl>
                <CloseIcon className="topboy" onClick={hide4} on />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Withdrawal;
