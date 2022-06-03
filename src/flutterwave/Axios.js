import axios from 'axios'
import { API_URL2 } from '../actions/types'


const config = {
  headers: {
    "Content-Type": "application/json",
  },
};



const instance = axios.create({
  baseURL: "https://api.flutterwave.com/v3/",
  headers: {
    "Content-Type": "application/json",
  }

})

export default instance; 
