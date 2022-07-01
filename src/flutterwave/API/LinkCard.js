import axios from 'axios';
import { API_URL2 } from '../../actions/types';

const LinkCard = async (transaction_id, order_id) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  //console.log(transaction_id)
  const body = {
    transaction_id,
  };

  const call = axios
    .get(
      `${API_URL2}/v1/flutter/payments/verify/${transaction_id}`,
      null,
      config
    )

    .then(async (response) => {
      const { success, card, amount, tx_ref } =
        response.data.data.data;
      let token = card.token;
      const orderBody = JSON.stringify({
        order_id,
        token,
        tx_ref,
      });

      console.log(orderBody);
      const res = await axios
        .post(
          API_URL2 + '/v1/flutter/payments/linkcard',
          orderBody,
          config
        )
        .then((response) => {
          console.log(
            response,
            ' response after order endpoint is called'
          );
        });
    })

    .catch((error) => {});

  // console.log(call.data.data, token, success)

  //console.log(res.data.data);
  return call;

  // axios.get(`${API_URL2}/v1/flutterwave/payments/verify`, body, config).then(response => {
  //     //console.log(response, 'response from script')
  // }).catch(err => {
  //     //console.log(err.message, "message from exception")
  // })
};

export default LinkCard;
