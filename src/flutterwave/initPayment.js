import React from 'react';
import {
  useFlutterwave,
  closePaymentModal,
} from 'flutterwave-react-v3';
import verify from './API/Verify';

const initPayment = (
  amount,
  customer,
  payment_title,
  payment_options,
  payment_plan,
  userPayload,
  user_id
) => {
  const flutterConfig = {
    public_key: process.env.REACT_APP_FLUTTER_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: 'NGN',
    // redirect_url: "https://a3dc-197-210-85-62.ngrok.io/v1/webhooks/all",
    payment_options: 'card',
    payment_plan,
    customer: customer,
    customizations: {
      title: payment_title,
      description: 'Payment for items in cart',
      logo: 'https://egoras.com/img/egoras-logo.svg',
    },
  };
};

export default initPayment;
