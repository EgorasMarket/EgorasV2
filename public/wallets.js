const { validationResult } = require("express-validator");
const accounts = require("../models/accounts");
const user = require("../models/registration");
const Wallet = require("../models/wallets");
const BlockWatch= require("../models/blockWatch");
const request = require('request');
// let bscscan = "http://localhost:7977";
let bscscan = "https://coffee.egoras.com";
const Token = require("../models/tokens");
const Transaction = require('../models/transaction')
const bcrypt = require("bcryptjs");
const Sequelize = require("sequelize");
const uuid = require("uuid").v4;
const db = require('../config/db');
const { Op } = require("sequelize");
var cron = require('node-cron');

cron.schedule('* * * * *', async (req, res) => {
  console.log('running a task every minute');
  try {

    const fetchBlockData = await BlockWatch.findAll({
      order: [
        ['counter', 'ASC']
      ]
    });
    
    // console.log(fetchBlockData);
    
    fetchBlockData.forEach( async function(c) {
      // console.log(c);
      let address = c.wallet;
      let block = c.blockNumber;
      let contract = c.contractAddr;
      let customer_id = c.customer_id;
      let counter = c.counter;
      
      // const walletExist = await Wallet.findOne({
      //   where: { customer_id },
      // });

      // const { balance } = walletExist;

      console.log(counter);

      if (counter >= 30) {
        console.log('dddsss');
        const query = await BlockWatch.destroy({
          where: { counter: {
            [Op.gte]: 30 
            }
          },
        });
      }

      request(
        bscscan +
          "/api/transactions/watch/token/"+contract+"/"+address+"/"+block,
        async function (error, response, body) {
          // console.log(body, 'error');
          if (!error && response.statusCode == 200) {
            data = JSON.parse(response.body);
            console.log(data.returned_event, 'wallet');
            // console.log(address);

            if(data.returned_event.length < 1 || data.returned_event == undefined){
              console.log('empty');
              
              const [results2, metadata2] = await db.sequelize.query("UPDATE block_watch SET counter=counter+1 WHERE wallet='"+address+"'");
            } else {
              let total = [];
              data.returned_event.forEach( async function(kk) {
  
                const checkTrans = await Transaction.findOne({
                  where: {transaction_hash:kk.transactionHash}
                });
  
                if (checkTrans === null) {
                    console.log(parseFloat(kk.value));
                    // total += parseFloat(kk.value);

                    // const array = [10, 20, 30, 40];
                    total.push(parseFloat(kk.value));
                    const mSum = (a, b) => a + b
                    const result = total.reduce(mSum);
                    console.log(result);
                    const createWallet = await Transaction.create({
                          customer_id: customer_id,
                          channel: 2,
                          transaction_type: 'CREDIT',
                          amount: parseFloat(kk.value),
                          transaction_hash: kk.transactionHash,
                    });

                    // await Wallet.update(
                    //   {
                    //     balance: balance+result,
                    //   },
                    //   {
                    //     where: {
                    //       customer_id,
                    //     },
                    //   }
                    // );

                    const [results2, metadata2] = await db.sequelize.query("UPDATE wallets SET balance=balance+"+parseFloat(kk.value)+" WHERE customer_id='"+customer_id+"'");
                
                  } 
               
              });

              console.log(total, 'total');
          }
     
          
          } else {
            const [results2, metadata2] = await db.sequelize.query("UPDATE block_watch SET counter=counter+1 WHERE wallet='"+address+"'");
            // console.log(error, 'bodybody');
            // console.log(response.body.status, 'bodybody');
           
          }
    
          // res.status(200).send(returned_event);
        }
      );
    });
    


  } catch (error) {
    console.error(error.message);
    res.status(500).send({ errors: [{ msg: "Internal error" }] });
  }
});



exports.checkIfExist = async (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({
  //     error: errors.array(),
  //   });
  // }
  const { customer_id } = req.params;
  console.log(req.params);
  const wallet_id = uuid();
  let accountExists = null
  let message = ''
  try {
      const walletExist = await Wallet.findOne({
        where: { customer_id },
      });

      console.log(walletExist);

    if (walletExist) {
        accountExists = true;
        message = 'Account Exist';
      } else {
        accountExists = false;
        message = 'Account does not Exist';
      }

    
      return res.status(200).json({
        success: true,
        accountExists: accountExists,
        message: message,
      });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ errors: [{ msg: "Internal error" }] });
  }
};

exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array(),
    });
  }
  const { customer_id, tokenSymbol } = req.body;
  // console.log(req.body);
  const wallet_id = uuid();
  const block_id = uuid();
  
  try {

    const walletExist = await Wallet.findOne({
      where: { id: customer_id },
    });
    const getToken = await Token.findOne({
      where: { tokenSymbol },
    });

    const { contractAddress } = getToken

      // const salt = await bcrypt.genSalt(10);
      // const salted_walletAddress = await bcrypt.hash(walletAddress, salt);
      // const salted_secKey = await bcrypt.hash(secKey, salt);
      // const salted_mnemonic = await bcrypt.hash(mnemonic, salt);

  if (walletExist) {
      return res.status(400).json({
        success: false,
        message: "This user already have a wallet ",
      });
    }
  
    request(
      bscscan +
        "/api/transactions/get/block/number",
      async function (error, response, body) {
        if (!error && response.statusCode == 200) {
          data = JSON.parse(body);
          console.log(data.number);
          const bNumber = data.number;

          request(
            bscscan +
              "/api/transactions/create/wallet",
            async function (error, response, body) {
              if (!error && response.statusCode == 200) {
                data = JSON.parse(body);
                console.log(data);

                const addBlockNum = await BlockWatch.create({
                  id: block_id,
                  customer_id,
                  blockNumber: bNumber,
                  wallet: data.address,
                  contractAddr: contractAddress,
                  symbol: tokenSymbol
                })
                
                const createWallet = await Wallet.create({
                      id: wallet_id,
                      customer_id,
                      walletAddress: data.address,
                      secKey: data.key,
                      mnemonic: data.mnemonic,
                });

                if (createWallet) {
                  return res.status(200).json({
                    success: true,
                    message: "Account created successfully",
                    address: data.address
                  });
                }

                // console.log('createWallet', createWallet);

              } else {
                console.log(error, response, body);
              }
        
              // res.status(200).send(returned_event);
            }
          );
         
        } else {
          console.log(error, response, body);
        }
  
        // res.status(200).send(returned_event);
      }
    );
 

  } catch (error) {
    console.error(error.message);
    res.status(500).send({ errors: [{ msg: "Internal error" }] });
  }
};

exports.deposit = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array(),
    });
  }
  const { customer_id, tokenSymbol } = req.body;
  // console.log(req.body);
  const wallet_id = uuid();
  const block_id = uuid();
  
  try {

    const walletExist = await Wallet.findOne({
      where: { customer_id },
    });
    const getToken = await Token.findOne({
      where: { tokenSymbol },
    });

    const { contractAddress } = getToken
    
    // const salt = await bcrypt.genSalt(10);
    // const salted_walletAddress = await bcrypt.hash(walletAddress, salt);
    // const salted_secKey = await bcrypt.hash(secKey, salt);
    // const salted_mnemonic = await bcrypt.hash(mnemonic, salt);
    
    if (!walletExist) {
      return res.status(400).json({
        success: false,
        message: "This user does not have a wallet ",
      });
    }

    const { walletAddress } = walletExist;
  
    request(
      bscscan +
        "/api/transactions/get/block/number",
      async function (error, response, body) {
        if (!error && response.statusCode == 200) {
          data = JSON.parse(body);
          console.log(data.number);
          const bNumber = data.number;

          const addBlockNum = await BlockWatch.create({
            id: block_id,
            customer_id,
            blockNumber: bNumber,
            wallet: walletAddress,
            contractAddr: contractAddress,
            symbol: tokenSymbol
          })

          if (addBlockNum) {
            return res.status(200).json({
              success: true,
              message: "Deposit have been initiated.",
              address: walletAddress
            });
          }          
         
        } else {
          console.log(error, response, body);
        }
  
        // res.status(200).send(returned_event);
      }
    );
 

  } catch (error) {
    console.error(error.message);
    res.status(500).send({ errors: [{ msg: "Internal error" }] });
  }
};


exports.watchBlockNumber = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array(),
    });
  }
  // const { customer_id, tokenSymbol } = req.body;
  // console.log(req.body);
  const wallet_id = uuid();
  // const transId = uuid();
  
  try {

    const fetchBlockData = await BlockWatch.findAll({
      order: [
        ['counter', 'ASC']
      ]
    });

    // console.log(fetchBlockData);
    
    fetchBlockData.forEach( async function(c) {
      // console.log(c);
      let address = c.wallet;
      let block = c.blockNumber;
      let contract = c.contractAddr;
      let customer_id = c.customer_id;
      let counter = c.counter;

      console.log(counter);

      if (counter >= 30) {
        console.log('dddsss');
        const query = await BlockWatch.destroy({
          where: { counter: 30 },
        });
      }

      request(
        bscscan +
          "/api/transactions/watch/token/"+contract+"/"+address+"/"+block,
        async function (error, response, body) {
          // console.log(body, 'error');
          if (!error && response.statusCode == 200) {
            data = JSON.parse(response.body);
            console.log(data.returned_event, 'wallet');
            console.log(address);

            if(data.returned_event.length < 1 || data.returned_event == undefined){
              console.log('empty');
              
              const [results2, metadata2] = await db.sequelize.query("UPDATE block_watch SET counter=counter+1 WHERE wallet='"+address+"'");
            } else {
              let total = [];
              data.returned_event.forEach( async function(kk) {
  
                const checkTrans = await Transaction.findOne({
                  where: {transaction_hash:kk.transactionHash}
                });
  
                if (checkTrans === null) {
                    console.log(parseFloat(kk.value));
                    // total = total + 4;
                    total.push(parseFloat(kk.value));
                    const createWallet = await Transaction.create({
                          customer_id: customer_id,
                          channel: 2,
                          transaction_type: 'CREDIT',
                          amount: parseFloat(kk.value),
                          transaction_hash: kk.transactionHash,
                    });
                
                  } 
               
              });

              console.log(total, 'total');
          }
     
          
          } else {
            const [results2, metadata2] = await db.sequelize.query("UPDATE block_watch SET counter=counter+1 WHERE wallet='"+address+"'");
            // console.log(error, 'bodybody');
            // console.log(response.body.status, 'bodybody');
           
          }
    
          // res.status(200).send(returned_event);
        }
      );
    });
    


  } catch (error) {
    console.error(error.message);
    res.status(500).send({ errors: [{ msg: "Internal error" }] });
  }
};

exports.fetchWalletInfo = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: error.array(),
    });
  }
  const { customer_id } = req.params;

  console.log(customer_id);

  try {
    const walletInfo = await Wallet.findOne({
      where: { customer_id },
    });

    if (!walletInfo) {
      return res.status(400).json({
        success: false,
        message: "Couldn't fetch data, please try again",
        data: walletInfo,
      });
    }
    // console.log(walletInfo);

    const {
        id,
        walletAddress,
        balance,
        secKey,
        mnemonic
    } = walletInfo;

    const walletData ={
        id,
        walletAddress,
        balance,
        customer_id
    }

    // const isMatch = await bcrypt.compare('string', mnemonic);

    return res.status(200).json({
      success: true,
      message: "Fetch successful",
      data: walletData,
    });
  } catch (error) {
    console.log();
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

exports.fetchWalletDeposits = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: error.array(),
    });
  }
  const { customer_id } = req.params;

  console.log(customer_id);

  try {
    const trnsDeposits = await Transaction.findAll({
      where: { customer_id },
    });

    // console.log(trnsDeposits);
    // if (!trnsDeposits) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Couldn't fetch data, please try again",
    //     // data: walletInfo,
    //   });
    // }
    // console.log(walletInfo);

    // const isMatch = await bcrypt.compare('string', mnemonic);

    return res.status(200).json({
      success: true,
      message: "Fetch successful",
      data: trnsDeposits,
    });
  } catch (error) {
    console.log('lllll');
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

exports.fetchAllTokens = async (req, res) => {
  //   const error = validationResult(req);
  
  //   if (!error.isEmpty()) {
  //     return res.status(400).json({
  //       success: false,
  //       error: error.array(),
  //     });
  //   }
  //   const { customer_id } = req.params;
  
  //   console.log(customer_id);
  
    try {
      const fetch = await Token.findAll();
  
     
      console.log(fetch);
  
  
      return res.status(200).json({
        success: true,
        message: "Fetch successful",
        data: fetch,
      });
    } catch (error) {
      console.log();
      return res.status(500).json({
        success: false,
        error,
      });
    }
};

