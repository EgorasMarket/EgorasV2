import React from 'react';
import {
  FlutterWaveButton,
  closePaymentModal,
} from 'flutterwave-react-v3';

export const relink_card = ({ phone_no, email, order_id, name }) => {
  const config = {
    public_key: process.env.REACT_APP_FLUTTER_KEY,
    tx_ref: 'EGC-' + Date.now(),
    amount: 1,

    currency: 'NGN',
    // redirect_url: "https://a3dc-197-210-85-62.ngrok.io/v1/webhooks/all",
    payment_options: 'card',
    // payment_plan:63558,
    customer: {
      phone_number: '0816',
      // phonenumber: phone_no,
      email: 'a@email.com',
      name: 'lorem ipsum',
    },
    meta: {
      //   customer_id: customer_data.customer_id,
      eventType: '1',
    },
    customizations: {
      title: 'Payment from Egoras savings',
      description: 'Relink a card for payment',
      logo: 'https://egoras.com/img/egoras-logo.svg',
    },
  };

  const flutterConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div>
      <FlutterWaveButton {...flutterConfig} />
    </div>
  );
};

export default relink_card;
