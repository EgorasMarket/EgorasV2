import React from 'react';
import {
  useFlutterwave,
  closePaymentModal,
} from 'flutterwave-react-v3';

const FlutterButton = ({
  amount,
  customer,
  payment_title,
  payment_options,
}) => {
  const flutterConfig = {
    public_key: process.env.REACT_APP_FLUTTER_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: 'NGN',
    payment_options,
    customer: customer,
    customizations: {
      title: payment_title,
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(flutterConfig);

  return (
    <div className="cart_area2_select">
      <div
        className="wit_card"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              //console.log(response )
              closePaymentModal();
            },
            onClose: (response) => {
              //console.log(response, "response from onclose ")
            },
          });
        }}
      >
        Pay via Flutterwave{' '}
      </div>
    </div>
  );
};

export default FlutterButton;
