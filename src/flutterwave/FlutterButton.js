import React from 'react';
import {
  useFlutterwave,
  closePaymentModal,
} from 'flutterwave-react-v3';
import LinkCard from './API/LinkCard';

export default function App({
  email,
  phonenumber,
  fullname,
  orderId,
}) {
  const config = {
    public_key: process.env.REACT_APP_FLUTTER_KEY,
    tx_ref: 'EGC-' + Date.now(),
    amount: 20, //change to #20 for production
    redirect_url: 'https://saul.egoras.com/v1/webhooks/all',
    currency: 'NGN',
    payment_options: 'card',
    customer: {
      email,
      phonenumber,
      name: fullname,
    },
    meta: {
      eventType: '2',
    },

    customizations: {
      title: 'Link a card for your order ' + orderId,
      description: 'we will charge you a token for this transaction',
      logo: 'https://egoras.com/img/egoras-logo.svg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: async (response) => {
              console.log(response);
              try {
                if (!response.transaction_id) {
                  alert(
                    "We couldn't return any information from this payment please try again."
                  );
                }
                const verification = await LinkCard(
                  response.transaction_id,
                  orderId
                );
                closePaymentModal();
              } catch (error) {
                //console.log(error.response);
              }
            },
            onClose: () => {
              console.log('modal closed');
            },
          });
        }}
        className="flutter_btn"
      >
        Relink card
      </button>
    </div>
  );
}
