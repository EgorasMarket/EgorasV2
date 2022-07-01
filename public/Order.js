let init = require("../email/config/init");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Products = require("../models/products");
const Cart = require("../models/cart");
const CustomerOrder = require("../models/customerOrder");
const Ledger = require("../models/ledger");
const { validationResult } = require("express-validator");
const user = require("../models/registration");
const { Sequelize, sequelize } = require("../config/db");
const generateRnd = require("../helper/Helper");
const customerItems = require("../models/customerItems");
const customerOrder = require("../models/customerOrder");
const customer_address = require("../models/customerAddress");
const accounts = require("../models/accounts");
const cart = require("../models/cart");
const products = require("../models/products");
const transaction = require('../models/transaction')
var cron = require('node-cron');
const {format, parseISO} = require('date-fns');

// const { default: axios } = require("axios");
const { default: axios } = require("axios");



// cron.schedule('0 1 * * *', async (req, res) => {
cron.schedule('* * * * *', async (req, res) => {
  console.log('Checking for all orders');

  try {



    const today = format(new Date(),'yyyy-MM-dd')

    const order = await customerOrder.findAll({
      where: {startDate: today}
    })

    if (order.length === 0 ){
      console.log('no data ')
      return;
    }

    order.forEach( async response => {

      const { order_id, customer_id, token, tx_ref } = response;
      console.log(customer_id)


      //get user info 
      const getInfo = await user.findOne({
        where:{id:customer_id}
      })

      if (!getInfo){
        console.log("could not get the user data ")
        return;
      }

      // const userInfo = await registration.findOne({
      //   where: {customer_id}
      // })

     

      // const {email, phonenumber} = findUser; 

      console.log(order_id);

      // //call the 
      const fetchData = await customerItems.findOne({
        where : {order_id}
      })

      if (!fetchData){
        return; 
      }

      const {payment_plan} = fetchData; 
      console.log(payment_plan)
      const secKey = 'FLWSECK-26a59517b4cd2e97b661af9868a2e9ab-X';
      const body = {
        token, 
        email:"121ebrinix@gmail.com", 
        currency: "NGN", 
        amount:"1",
        tx_ref, 
        payment_plan,
      }

      const recurrent =  await  axios.post("https://api.flutterwave.com/v3/tokenized-charges", body, {
        headers: {
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${secKey}`,
        }
      }).then(
        response => {
          console.log(response.data)

        }
      ).catch(err => {
        console.log(err.response)
      })

      console.log('ooopop')




    
      
    })



  }catch (err){
    console.log(err)
  }
   
});


exports.addOrderOld = async (req, res) => {

  const errors = validationResult(req);

  //initialize variables
  let errMsg = [];
  let total_sum = 0; //default total sum value
  const order_id = generateRnd(6).toString();
  console.log(`order_id ${order_id}`);

  const customer_id = req.user.id; // uncomment for production
  console.log(customer_id);
  // const customer_id = "813599ed-9c9f-4f98-9522-58f4d88789f5"; // PLEASE COMMENT FOR PRODUCTION
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const searchCart = await Cart.findAll({
    where: { customer_id },
  });

  // console.log(searchCart);

  if (searchCart.length === 0) {
    errMsg.push("You haven't added an item to cart yet");
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "You haven't added an item to cart yet",
    });
  }

  searchCart.forEach(async (data) => {
    let {
      product_id,
      quantity,
      sub_total,
      image,
      product_name,
      product_category_code,
    } = data;
    let id = product_id;
    if (quantity === 0) {
      errMsg.push(`The item (${product_name}) have already been locked`);
      // console.log(`item is already locked`);
      return res.status(300).json({
        success: false,
        message: `The item (${product_name}) have already been locked, Remove and try again`,
      });
    }

    try {
      //update the total price
      total_sum = parseInt(total_sum) + parseInt(sub_total);

      //push to the customerItem table

      quantity--; //decrease the quantity by 1
      const findfirst = await Products.findOne({ where: { id } });
      if (!findfirst) {
        errMsg.push(`can't find this product ${product_name}`);
        return;
      }
      const update = await Products.update(
        {
          unitCount: quantity,
          updatedAt: Sequelize.DATE,
        },
        { where: { id } }
      );

      if (update === 0) {
        errMsg.push(`can't update data `);
        return;
      }
      console.log("update successful");

      const verify = await customerItems.findOne({
        where: { product_id, customer_id },
      });
      if (verify) {
        return;
      }

      const pushToItems = await customerItems.create({
        id: generateRnd(6),
        customer_id: customer_id,
        sum: sub_total,
        product_img: image,
        product_id,
        product_name,
        product_category_code: product_category_code,
      });

      if (!pushToItems) {
        errMsg.push(`An error occured cant save to item`);
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "an error occured cant save to items ",
        });
      }

      console.log("successfully saved items ");
    } catch (err) {
      console.log(err.message);
      // return res.status(500).json({
      //   error: err.message,
      // });
    }
  });

  if (errMsg.length >= 1) {
    console.log(errMsg);
    return res.status(400).json({
      status: false,
      errors: errMsg,
    });
  } else {
    try {
      let order_id = req.user.id;
      let order_item = JSON.stringify(searchCart);
      let order_status_code = "pending";
      let order_shipping_charge = "500";
      let other_shipping_details = "lorem ipsum automatically generated text";

      const { spread } = req.body;
      //check if the order is already existing in the database

      const check = await CustomerOrder.findOne({
        where: { customer_id },
      });

      if (check) {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: " You already have a pending transaction",
        });
      }

      const query = await CustomerOrder.create({
        order_id,
        customer_id,
        order_item,
        order_status_code,
        order_shipping_charge,
        other_shipping_details,
        total_sum,
        spread,
      });

      if (query && errMsg.length == 0) {
        return res.status(200).json({
          success: true,
          statusCode: 200,
          message: "Order have been created successfully",
        });
      }
    } catch (err) {
      res.status(500).json({
        errors: err.message,
      });
    }
  }
};

// Add Order By Admin

exports.addOrderAdmin = async (req, res) => {
  const errors = validationResult(req);

  //initialize variables
  let total_sum = 0; //default total sum value
  const order_id = generateRnd(6).toString();
  // console.log(`order_id ${order_id}`);


  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }



  try {

    const officer_id = req.user.id; // uncomment for production
    const { product_id, token, initial_pay, tx_ref, customer_id } = req.body;
    console.log(token, 'this is the token ')

    const product = await products.findOne({
      where: { id: product_id }
    })

    const getAddress = await customer_address.findOne({
      where: { customer_id }
    })


    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Invalid item Please try again"
      })
    }

    const {
      id,
      product_name,
      product_category_code,
      product_category_desc,
      product_duration,
      percentage,
      product_image,
      payment_type,
      product_specifications,
      product_details,
      unitCount,
      amount,
      product_brand,
      approval,
      status,
    } = product;

    const order_status_code = "PENDING";

    if (payment_type === "OUTRIGHT") {
      spread = 0

    } else if (payment_type === "INSTALLMENT") {
      spread = product_duration;
    }
    const order_shipping_charge = 0;


    const query = await CustomerOrder.create({
      order_id,
      officer_id,
      customer_id,
      order_status_code,
      order_shipping_charge,
      other_shipping_details: product_details,
      total_sum: amount,
      token,
      tx_ref,
      spread,
    });

    if (query) {
      const post = await customerItems.create({
        id: order_id,
        customer_id,
        order_id,
        sum: amount,
        paidSum: initial_pay,
        product_category_code,
        product_id,
        product_img: product_image,
        product_name
      })
      const log = await transaction.create({
        customer_id,
        transaction_type: 'CREDIT',
        amount: initial_pay,
        transaction_hash: generateRnd(8),
        channel: 1,
      })
      return res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Order have been created successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      errors: err.message,
    });
  }
};

exports.addOrder = async (req, res) => {
  const errors = validationResult(req);

  //initialize variables
  let total_sum = 0; //default total sum value
  const order_id = generateRnd(6).toString();
  console.log(`order_id ${order_id}`);


  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }





  try {

    const customer_id = req.user.id; // uncomment for production
    const { product_id, token, initial_pay, tx_ref, startDate, endDate } = req.body;
    console.log(token, 'this is the token ')
  

    const product = await products.findOne({
      where: { id: product_id }
    })

    const getAddress = await customer_address.findOne({
      where: { customer_id }
    })




    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Invalid item Please try again"
      })
    }

    const {
      id,
      product_name,
      product_category_code,
      product_category_desc,
      product_duration,
      percentage,
      product_image,
      payment_type,
      product_specifications,
      product_details,
      unitCount,
      amount,
      product_brand,
      approval,
      status,
      paymentPerDay
    } = product;

    if (product.status === 2){
      
    }

   
    const order_status_code = "PENDING";

    if (payment_type === "OUTRIGHT") {
      spread = 0

    } else if (payment_type === "INSTALLMENT") {
      spread = product_duration;
    }
    const order_shipping_charge = 0;


    const query = await CustomerOrder.create({  //creates a customer order record in the table 
      order_id,
      customer_id,
      order_status_code,
      order_shipping_charge,
      other_shipping_details: product_details,
      total_sum: amount,
      token,
      tx_ref,
      spread,
      startDate, 
      endDate, 
    });

    if (query) {
      const post = await customerItems.create({   //creates a record for the product in the locked table 
        id: order_id,
        customer_id,
        order_id,
        sum: amount,
        product_duration,
        paidSum: initial_pay,
        product_category_code,
        product_id,
        product_img: product_image,
        product_name, 
        payment_plan:100,
      })
      const log = await transaction.create({ // creates a record in the transaction table 
        customer_id,
        transaction_type: 'CREDIT',
        amount: initial_pay,
        transaction_hash: generateRnd(8),
        channel: 1,
      })
      const findAccount = await accounts.findOne({ //fetch customer previous records
        where: { customer_id },
      });

      if (!findAccount ){
        return res.status(500).json({
          message: "There seems to be an internal error, contact support"
        })
      }
      const {total_sum,paid_sum,  pending_sum, ledger} = findAccount; 

      let value = parseInt(amount)- parseInt(initial_pay)
      const initAccount = await accounts.update({
        paid_sum: parseInt(paid_sum) + parseInt(initial_pay),
        total_sum: parseInt(total_sum) + parseInt(amount), 
        pending_sum: parseInt(pending_sum) + value
        // pending_sum: pending_sum + 
      }, {where: {customer_id}})
      

    //update the product status to locked
    let locked = 2;
    const updateProduct = await products.update(
      // {product_name:"Goodluck centralized", 
      {
       status:2}, 
      {where: {id:product_id}
    })
    if (updateProduct === 0){
      return res.status(400).json({
        message: "This operation was not successful", 
      })
    }

      return res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Order have been created successfully",
        product_id, 
        
      });
    }

  } catch (err) {
    res.status(500).json({
      errors: err.message,
    });
  }
};

exports.removeOrder = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { order_id } = req.body;

  //remove the order using the orderid

  const query = await CustomerOrder.destroy({
    where: { order_id },
  });

  console.log(query);
  if (query === 0) {
    return res.status(400).json({
      success: 0,
      statusCode: 400,
      message: "INVALID PARAMETER",
    });
  } else {
    console.log("record found");
    return res.status(200).json({
      success: 1,
      statusCode: 200,
      message: "Order deleted successfully",
    });
  }
};

exports.showOne = async (req, res) => {
  // const customer_id = req.user.id; // uncomment for production
  const customer_id = "GOODLUCK-S20S"; // PLEASE COMMENT FOR PRODUCTION

  console.log(req.user);

  const query = await CustomerOrder.findAll({
    where: { customer_id },
  });

  if (query.length === 0) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Order not found",
    });
  }

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Successful",
    data: query,
  });
};

exports.showAll = async (req, res) => {
  const query = CustomerOrder.findAll();

  if (query.length === 0) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Record count(0)",
    });
  }

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Retrieved successfully",
    data: query,
  });
};

exports.update = async (req, res) => {
  const valerror = validationResult(req);

  // const customer_id = req.user.id; // uncomment for production
  const customer_id = "GOODLUCK-S20S"; // PLEASE COMMENT FOR PRODUCTION

  const { order_status_code, other_shipping_details, order_shipping_charge } =
    req.body;

  const query = await CustomerOrder.findOne({
    where: { customer_id },
  });

  if (!query) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Couldn't find order",
    });
  }

  const update = await CustomerOrder.update(
    {
      order_status_code,
      other_shipping_details,
      order_shipping_charge,
    },
    {
      where: {
        customer_id,
      },
    }
  );

  if (update === 0) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Please try again, update failed",
    });
  }

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Update successful",
  });
};

exports.remitOld = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({
      error: errors.array(),
    });
  }

  let { customer_id, order_id, amount } = req.body;
  // console.log("continue ");

  let mAmount = amount;

  const t = await sequelize.transaction();

  try {
    const orders = await customerOrder.findOne({
      where: { customer_id },
    });

    if (!orders) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: "cant find orders, please contact administrator",
      });
    }

    const { total_sum, spread, order_status_code } = orders;
    const query = await customerItems.findAll({
      //check for the orders using the customer id
      where: { customer_id },
      order: [["sum", "ASC"]],
    });

    if (!query) {
      return res.json({
        error: `couldn't find record `,
      });
    }

    let noOfItems = query.length;
    let newValue = 0;
    let toledger = 0;

    query.forEach(async (item) => {
      let eachItem = amount / noOfItems + toledger;
      if (eachItem % 1 !== 0) {
        try {
          eachItem.toString();
          eachItem = Math.round(eachItem) - 1;
        } catch (err) {
          console.log(err.message);
        }
        // eachItem = Math.round(eachItem) - 1;
      }
      let { paidSum, sum, id } = item;
      if (paidSum === sum) {
        //move to ledger
        toledger = toledger + eachItem;
        console.log(
          `item ${item.product_name} of items ${noOfItems} and ledger = ${toledger} each item is ${eachItem}`
        );
        newValue = paidSum;
        // noOfItems--;

        console.log(
          `This item ${item.product_name} have been successfully paid for `
        );
      } else {
        if (eachItem + paidSum > sum) {
          // 250 + 3800 >= 4000
          newValue = sum - paidSum;
          toledger = toledger + (eachItem - newValue);
          console.log(
            `now ${item.product_name} of items ${noOfItems} and ledger = ${toledger} each item is ${eachItem}`
          );
        } else {
          newValue = eachItem;
          console.log(
            `null ${item.product_name} of items ${noOfItems} and ledger = ${toledger} each item is ${eachItem}`
          );
        }

        const update = await customerItems.update(
          {
            paidSum: paidSum + newValue,
          },
          { where: { customer_id, id } }
        );

        console.log(`item ${item.product_name} updated : value -> ${newValue}`);
      }
    });

    console.log(`this amount ${toledger} have been updated to the ledger`);

    // console.log(query);

    //update to the customerItems folder

    await t.commit();

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Money paid successfully, proceed to payment api",
    });
  } catch (err) {
    t.rollback();
    console.log(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
}; // delete when the below is successful

exports.remit = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({
      error: errors.array(),
    });
  }

  let { customer_id, order_id, amount } = req.body;

  const t = await sequelize.transaction();

  try {
    const loadLedger = await Ledger.update(
      {
        balance: amount,
      },
      { where: { customer_id } }
    );

    if (loadLedger === 0) {
      return res.status({
        message: "update did not work ",
      });
    }

    const orders = await customerOrder.findOne({
      where: { customer_id },
    });

    if (!orders) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: "cant find orders, please contact administrator",
      });
    }

    const { total_sum, spread, order_status_code } = orders;
    const query = await customerItems.findAll({
      //check for the orders using the customer id
      where: { customer_id },
      order: [["sum", "ASC"]],
    });

    if (!query) {
      return res.json({
        error: `couldn't find record `,
      });
    }
    let newValue = 0;
    // console.log(query);
    balance = parseInt(amount);
    // balance = 0;
    let count = [];

    query.forEach(async (item) => {
      let { paidSum, sum, id } = item;

      if (balance === 0) {
        return console.log("cant continue");
      } else {
        if (paidSum === sum) {
          newValue = paidSum;
          count.push("item added");

          console.log(`item with id ${id} has already been completed`);
        } else {
          if (balance + paidSum >= sum) {
            let temp = sum - paidSum;
            newValue = temp + paidSum;
            console.log(newValue, " is new value");
            // balance = newValue;
            balance = balance - newValue;
            const update = await customerItems.update(
              {
                paidSum: newValue,
              },
              { where: { customer_id, id } }
            );
          } else {
            if (balance + paidSum !== sum) {
              let temp = parseInt(balance) + parseInt(paidSum);

              balance = 0;

              const update = await customerItems.update(
                {
                  paidSum: temp,
                },
                { where: { customer_id, id } }
              );
              console.log("event carried ");
              // balance = balance - newValue;
            }
          }
        }
      }
    });

    await t.commit();

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Money paid successfully, proceed to payment api",
    });
  } catch (err) {
    t.rollback();
    console.log(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};


exports.checkout = async (req, res) => {
  const error = validationResult(req)

  let total_amount = 0;
  let installment = 0;

  if (!error.isEmpty()) {
    return res.status(400).json({
      errors: error.array()
    })
  }

  const { customer_id } = req.body;

  // loop through the items in the cart and determine the highest spread ##
  const highestItem = await cart.findAll({
    where: { customer_id },
    order: [
      ["spread", 'DESC']
    ]

  })

  if (highestItem.length === 0) {
    return res.status(400).json({
      success: false,
      message: "You dont have any item in the cart "
    })
  }



  highestItem.forEach(item => {
    const { item_amount } = item;
    total_amount += parseInt(item_amount)

  })

  installment = 0.40 * total_amount;
  const { spread } = highestItem[0];
  let spread_balance = total_amount - installment;
  let amount_per_day = spread_balance / spread;
  let rounded = amount_per_day.toFixed()


  console.log(highestItem[0]);
  const summary = {
    spread,
    total_amount,
    installment,
    spread_balance,
    // amount_per_day, 
    rounded
  }

  return res.status(200).json({
    success: true,
    message: "Data returned successfully",
    details: summary,
    items: highestItem,
  })

}

exports.checkout_alternate = async (req, res) => {
  const error = validationResult(req)

  let total_amount = 0;
  let installment = 0;

  if (!error.isEmpty()) {
    return res.status(400).json({
      errors: error.array()
    })
  }

  const { customer_id } = req.body;

  // loop through the items in the cart and determine the highest spread ##
  const highestItem = await cart.findAll({
    where: { customer_id },
    order: [
      ["spread", 'DESC']
    ]

  })

  if (highestItem.length === 0) {
    return res.status(400).json({
      success: false,
      message: "You dont have any item in the cart "
    })
  }


  let payloads = []
  highestItem.forEach(item => {
    const { item_amount, user_spread, product_name, product_details, product_type } = item;
    total_amount += parseInt(item_amount);
    let divided = parseInt(user_spread) * 30
    let dailyAmount = item_amount / divided
    let main = parseInt(dailyAmount.toFixed()) + 1; // round up to the  nearest whole number 
    let max_spread = item.spread
    let payload = {
      product_name,
      product_details,
      product_type,
      item_amount,
      user_spread,
      max_spread,
      dailyAmount: main,
      unfiltered: dailyAmount

    }

    payloads.push(payload)

  })

  installment = 0.50 * total_amount;
  const { spread } = highestItem[0];
  let spread_balance = total_amount - installment;
  let amount_per_day = spread_balance / spread;
  let rounded = amount_per_day.toFixed();


  console.log(highestItem[0]);
  const summary = {
    spread,
    total_amount,
    installment,
    spread_balance,
    // amount_per_day, 
    rounded,
    payloads,

  }

  return res.status(200).json({
    success: true,
    message: "Data returned successfully",
    details: summary,
    items: highestItem,
  })

}