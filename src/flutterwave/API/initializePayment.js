// import axios from '../Axios'
import { WindowSharp } from '@mui/icons-material';
import axios from 'axios';
import { API_URL2 } from '../../actions/types';
const initializePayment = async (amount, customer_data) => {
  const security = process.env.REACT_APP_FLUTTER_KEY;
  const { email, phonenumber, name } = customer_data;
  const body = {
    amount,
    email,
    phonenumber,
    name,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const call = await axios.post(
      `${API_URL2}/v1/flutter/payments/initialize`,
      body,
      config
    );

    if (!call) {
      return;
    }
    //console.log(call, "from the anonymous")
    const { link } = call.data.data.data;
    console.log(link, 'from me ');
    window.open(link, '_self');
    return call;
  } catch (err) {
    //console.log(err.response)
    return err.response;

    //just checking
  }
};

export default initializePayment;
