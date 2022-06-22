import axios from 'axios';
import { API_URL2, CRYPTO, FIAT } from '../../actions/types';

const SubscribeMembership = async ({ channel, transaction_id }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  //console.log(transaction_id)

  try {
    if (channel === FIAT && transaction_id) {
      const call = await axios.get(
        `${API_URL2}/v1/flutter/payments/verify/${transaction_id}`,
        null,
        config
      );
      const { success, card, amount, tx_ref } = call.data.data.data;

      // console.log(call.data.data, token, success)
      const body = JSON.stringify({
        channel: channel,
        transaction_id,
      });

      console.log(body);
      const res = await axios
        .post(
          API_URL2 + '/v1/user/membership/subscribe',
          body,
          config
        )
        .then((response) => {
          console.log(
            response,
            ' You have successfully registered as a member of the Co-operative'
          );
        })
        .catch((err) => {
          console.log(err.message, 'unsuccessful');
        });
    } else if (channel === CRYPTO) {
      const body = JSON.stringify({
        channel: channel,
      });
      console.log(body);
      const res = await axios
        .post(
          API_URL2 + '/v1/user/membership/subscribe',
          body,
          config
        )
        .then((response) => {
          console.log(
            response,
            ' You have successfully registered as a member of the Co-operative'
          );

          return 'success';
        })

        .catch((err) => {
          return 'failure';
          console.log(err.message, 'unsuccessful');
        });
    }
  } catch (err) {
    console.log(err.message);
    return 'process-failure';
  }
};

export default SubscribeMembership;
