import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircleNotch, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import draftToHtml from 'draftjs-to-html';
import { connect } from "react-redux";
import axios from "axios";
import { API_URL as api_url } from "../../../actions/types";
import htmlToDraft from 'html-to-draftjs';
import {addUploader, initContract,unluckToken, setPythiaImpl,updateTickerPricesImpl,addLiquidityImpl, checkAllowance}  from "../../../web3/index"
import { parseEther } from "@ethersproject/units";
import { Authenticate } from '../../auth/Authenticate';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import classnames from 'classnames';
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";
import { loan, messenger, image } from "../../../actions/loans";
import Alert from '../Alert';


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

const AddUploader = props => {
  const [stage, setStage] = useState(1);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isLoading, setIsLoading] = useState(false);
  const [btnText, setBtnText] = useState("Save & deploy");
  const [isSuccess, setIsSuccess] = useState(false);
  const [hash, setHash] = useState("");
  const [value, setValue] = React.useState(0);
  const [formData, setFormData] = useState({
    address: "",
    reward_address: ""
    
    
  });
  
  
  const [initconstruct, setInitconstruct] = useState({
    priceOracle: "",
    baseAddress: "",
    tokenAddress: "",
    price: ""
  });

  const [updateTickerPrices, setUpdateTickerPrices] = useState({
    prices: "",
    tickers: ""
  });
  const [amount, setAmount] = useState("");
  const [pythia, setPythia] = useState("");
  const [pythia2, setPythia2] = useState("");


  const context = useWeb3React();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error
  } = context;


  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onChange2 = e => setInitconstruct({ ...initconstruct, [e.target.name]: e.target.value });
  const onChange6 = e => setUpdateTickerPrices({ ...updateTickerPrices, [e.target.name]: e.target.value });
  const { address, reward_address } = formData;
  const { prices, tickers } = updateTickerPrices;
  const { 
    priceOracle,
    baseAddress,
    tokenAddress,
    price
   } = initconstruct;

  const [activeTab, setActiveTab] = useState('1');


const submit = async (e) => { 
   e.preventDefault();
  setBtnText("Saving....");
  setIsLoading(true);
  // const promise = await props.loan(loan_tile, cover_image, loan_duration, loan_category, loan_fees, story, loan_amount, context.account);

     
     let ret = await addUploader(address,reward_address,
     library.getSigner());
        if(ret.status == true){
          setIsLoading(false);
          
          setHash(ret.message);
          setBtnText("Save & Deploy");
          setIsSuccess(true);
          setIsLoading(false);
        }else{
          alert(ret.message);
          setIsLoading(false);
          setBtnText("Save & Deploy");
          props.messenger("Did not complete successfully", "danger");
        }
    
          //document.getElementById('output').removeAttribute('src');
  
};

// For Init Construct
const submit2 = async (e) => { 
  e.preventDefault();
  setBtnText("Saving....");
  setIsLoading(true);
  
     let ret = await initContract(baseAddress,tokenAddress, price,
     library.getSigner());
        if(ret.status == true){
          setIsLoading(false);
          
          setHash(ret.message);
          setBtnText("Save & Deploy");
          setIsSuccess(true);
          setIsLoading(false);
        }else{
          alert(ret.message);
          setIsLoading(false);
          setBtnText("Save & Deploy");
          props.messenger("Did not complete successfully", "danger");
        }

//  setBtnText("Saving....");
//  setIsLoading(true);
 // const promise = await props.loan(loan_tile, cover_image, loan_duration, loan_category, loan_fees, story, loan_amount, context.account);

    
    // let ret = await addUploader(address,reward_address,
    // library.getSigner());
    //    if(ret.status == true){
    //      setIsLoading(false);
         
    //      setHash(ret.message);
    //      setBtnText("Save & Deploy");
    //      setIsSuccess(true);
    //      setIsLoading(false);
    //    }else{
    //      setIsLoading(false);
    //      setBtnText("Save & Deploy");
    //      props.messenger("Did not complete successfully", "danger");
    //    }
   
         //document.getElementById('output').removeAttribute('src');
 
};

const onChange3 = (e) => {
  setAmount(e.target.value)
}

// For Init Construct
const submit3 = async (e) => { 
  e.preventDefault();
 setBtnText("Saving....");
 setIsLoading(true);

    
    let ret = await addLiquidityImpl(parseEther(amount.toString(), "wei").toString(),
    library.getSigner());
       if(ret.status == true){
         setIsLoading(false);
         
         setHash(ret.message);
         setBtnText("Save & Deploy");
         setIsSuccess(true);
         setIsLoading(false);
       }else{
         alert(ret.message);
         setIsLoading(false);
         setBtnText("Save & Deploy");
         props.messenger("Did not complete successfully", "danger");
       }
   
         //document.getElementById('output').removeAttribute('src');
 
};


// For Init Construct
const submit13 = async (e) => { 
e.preventDefault();


 let amount = 900;

let ret = await unluckToken(parseEther(amount.toString(), "wei").toString(),
    library.getSigner(), "egc");
       if(ret.status == true){
       
         setHash(ret.message);
      
         setIsSuccess(true);
         setIsLoading(false);
       }else{
        alert(ret.message);
         setIsLoading(false);
      
         props.messenger("Did not complete successfully", "danger");
       }
   
         //document.getElementById('output').removeAttribute('src');
 
};

const onChange4 = (e) => {
  setPythia(e.target.value)
}

// For Init Construct
const submit4 = async (e) => { 
  e.preventDefault();



    
    let ret = await setPythiaImpl(pythia,
    library.getSigner());
    console.log("ret"); 
    console.log(pythia); 
       if(ret.status == true){
         setIsLoading(false);
         
         setHash(ret.message);
         setBtnText("Save & Deploy");
         setIsSuccess(true);
         setIsLoading(false);
       }else{
         setIsLoading(false);
         setBtnText("Save & Deploy");
         props.messenger("Did not complete successfully", "danger");
       }
   
         //document.getElementById('output').removeAttribute('src');
 
};
const onChange5 = (e) => {
  setPythia2(e.target.value)
}

// For Init Construct
const submit5 = async (e) => { 
  e.preventDefault();


  console.log(pythia2);
//  setBtnText("Saving....");
//  setIsLoading(true);
 // const promise = await props.loan(loan_tile, cover_image, loan_duration, loan_category, loan_fees, story, loan_amount, context.account);

    
    // let ret = await addUploader(address,reward_address,
    // library.getSigner());
    //    if(ret.status == true){
    //      setIsLoading(false);
         
    //      setHash(ret.message);
    //      setBtnText("Save & Deploy");
    //      setIsSuccess(true);
    //      setIsLoading(false);
    //    }else{
    //      setIsLoading(false);
    //      setBtnText("Save & Deploy");
    //      props.messenger("Did not complete successfully", "danger");
    //    }
   
         //document.getElementById('output').removeAttribute('src');
 
};

const submit6 = async (e) => { 
  e.preventDefault();
  setBtnText("Saving....");
  setIsLoading(true);
  let _price = [parseEther(prices.toString(), "wei").toString()];
  let _ticker = [tickers];

    
    let ret = await updateTickerPricesImpl(_price, _ticker,
    library.getSigner());
       if(ret.status == true){
         setIsLoading(false);
         
         setHash(ret.message);
         setBtnText("Save & Deploy");
         setIsSuccess(true);
         setIsLoading(false);
       }else{
         setIsLoading(false);
         setBtnText("Save & Deploy");
         props.messenger("Did not complete successfully", "danger");
       }
   
         //document.getElementById('output').removeAttribute('src');
 
};


const isStageTwoIsValid = address.length > 9;
const isStageThreeIsValid =   address.length > 9 && !isLoading;
  return (
    <div className='mt-6'>
  
      <div className='container py-5'>
        <div className='row'>
          <div style={{marginTop: '140px'}} className='col-md-8 offset-md-2'>
           
           {!isSuccess ? ( 
            <>
              <Tabs
                value={value}
                // onChange={handleChange1}
                aria-label="basic tabs example"
              >
                <Tab label="Add Uploader" {...a11yProps(0)} onClick={(e) => setValue(0)} />
                <Tab label="Init Constuct" {...a11yProps(1)} onClick={(e) => setValue(1)} />
                <Tab label="Add Liquidity" {...a11yProps(1)} onClick={(e) => setValue(2)} />
                <Tab label="Set Pythia" {...a11yProps(1)} onClick={(e) => setValue(3)} />
                <Tab label="Suspend Pythia" {...a11yProps(1)} onClick={(e) => setValue(4)} />
                <Tab label="Update Price" {...a11yProps(1)} onClick={(e) => setValue(5)} />
              </Tabs>
              <TabPanel value={value} index={0} className="col-md-9">
                <Row>
                  <Col sm='12'>
                    <Card body className=''>
                      <div className='row'>
                        <div className='col-md-7'>
                  
                      <h1>Add Loan Uploader</h1>

                        

                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Enter Address:</Label>
                            <Input type='text' name="address" placeholder='Enter address...' value={address} onChange={e => onChange(e)} />
                          </FormGroup>
                          
                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Enter Reward Address:</Label>
                            <Input type='text' name="reward_address" placeholder='Enter reward address...' value={reward_address} onChange={e => onChange(e)} />
                          </FormGroup>
                      
                
                          <button className='btn btn-success'  disabled={!isStageThreeIsValid} onClick={e => submit(e)}>
                          {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : null}{" "}
                          {btnText}
                          </button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel value={value} index={1} className="col-md-9">
                <Row>
                  <Col sm='12'>
                    <Card body className=''>
                      <div className='row'>
                        <div className='col-md-7'>
                        <h1>Init Constuct</h1>
                       
                       
                          
                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Base Address:</Label>
                            <Input type='text' name="baseAddress" placeholder='eNGN Address...' value={baseAddress} onChange={e => onChange2(e)} />
                          </FormGroup>
                          
                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Token Address:</Label>
                            <Input type='text' name="tokenAddress" placeholder='EGC Address...' value={tokenAddress} onChange={e => onChange2(e)} />
                          </FormGroup>
                          
                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Price Ticker:</Label>
                            <Input type='text' name="price" placeholder='eg EGC-eNGN' value={price} onChange={e => onChange2(e)} />
                          </FormGroup>
                      
                
                          <button className='btn btn-success' onClick={e => submit2(e)}>
                          {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : null}{" "}
                          {btnText}
                          </button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel value={value} index={2} className="col-md-9">
                <Row>
                  <Col sm='12'>
                    <Card body className=''>
                      <div className='row'>
                        <div className='col-md-7'>
                  
                      <h1>Add Liquidity</h1>
    
                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Enter Amount:</Label>
                            <Input type='text' name="amount" placeholder='Enter Amount...' value={amount} onChange={e => onChange3(e)} />
                          </FormGroup>
                          
                          <button className='btn btn-success' onClick={e => submit3(e)}>
                          {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : null}{" "}
                          {btnText}
                          </button>

                          <br />
                          <br />
                          <br />
                          <br />
                          <h5>Unlock Wallet</h5>
                          <button className='btn btn-danger' onClick={e => submit13(e)}>
                        
                          Unlock Wallet
                          </button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel value={value} index={3} className="col-md-9">
                <Row>
                  <Col sm='12'>
                    <Card body className=''>
                      <div className='row'>
                        <div className='col-md-7'>
                  
                      <h1>Set Pythia</h1>

                     
                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Pythia:</Label>
                            <Input type='text' name="pythia" placeholder='Enter pythia...' value={pythia} onChange={e => onChange4(e)} />
                          </FormGroup>
                
                          <button className='btn btn-success' onClick={e => submit4(e)}>
                          {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : null}{" "}
                          {btnText}
                          </button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel value={value} index={4} className="col-md-9">
                <Row>
                  <Col sm='12'>
                    <Card body className=''>
                      <div className='row'>
                        <div className='col-md-7'>
                  
                      <h1>Suspend Pythia</h1>
                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Enter Pythia:</Label>
                            <Input type='text' name="pythia2" placeholder='Enter Pythia...' value={pythia2} onChange={e => onChange5(e)} />
                          </FormGroup>
                
                          <button className='btn btn-success' onClick={e => submit5(e)}>
                          {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : null}{" "}
                          {btnText}
                          </button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel value={value} index={5} className="col-md-9">
                <Row>
                  <Col sm='12'>
                    <Card body className=''>
                      <div className='row'>
                        <div className='col-md-7'>
                  
                      <h1>Update Price</h1>

                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Enter Price:</Label>
                            <Input type='text' name="prices" placeholder='Enter Price...' value={prices} onChange={e => onChange6(e)} />
                          </FormGroup>
                          
                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Enter Ticker:</Label>
                            <Input type='text' name="tickers" placeholder='Enter Tickers...' value={tickers} onChange={e => onChange6(e)} />
                          </FormGroup>
                      
                
                          <button className='btn btn-success' onClick={e => submit6(e)}>
                          {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : null}{" "}
                          {btnText}
                          </button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPanel>
            </>
            ) : (
               
               
              <div className="col-md-12 mt-4">
                <h1 className="text-center">
                  <FontAwesomeIcon icon={faCheckCircle} /> <br />
                  Success
                  </h1>
                  <p className="text-center">Transaction was successful.
                  <br />
               
            <a
            className="btn btn-link text-success"
          href={"https://bscscan.com//tx/" + hash}
          target="_blank"
        >
          View on bscscan.com
        </a>
        <br></br>
        <br></br>
                  <a href="/"  className="btn btn-success">Continue</a>
                  </p>
                  
              </div>
            
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(null, {
  loan, messenger
  })(AddUploader);