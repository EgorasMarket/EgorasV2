import axios from 'axios'
import { API_URL2 } from '../../actions/types'

const adminVerify = async (customer_id, transaction_id, product_id, startDate, endDate, days_left) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    // console.log(transaction_id)
    const body = {
        transaction_id

    }


    try {
        const call = await axios.get(`${API_URL2}/v1/flutter/payments/verify/${transaction_id}`, null, config);
        const { success, card, amount, tx_ref } = call.data.data.data;
        let token = card.token

        console.log(call.data.data, token, success)
        const orderBody = JSON.stringify({
            customer_id,
            product_id,
            token,
            tx_ref,
            initial_pay: amount,
            startDate, 
            endDate,
            days_left, 
            transaction_type:"FIAT"

        });
        const res = await axios.post(API_URL2 + "/v1/order/add/order/admin", orderBody, config);
        console.log(res.data.data);
        return call
    } catch (err) {

        console.log(err.response)
    }



    // axios.get(`${API_URL2}/v1/flutterwave/payments/verify`, body, config).then(response => {
    //     console.log(response, 'response from script')
    // }).catch(err => {
    //     console.log(err.message, "message from exception")
    // })

}

export default adminVerify;