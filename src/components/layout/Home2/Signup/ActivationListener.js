import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
// import { setAlert } from "../../../../actions/alert";
import DatePicker from 'react-date-picker';
import '../../../../css/signup.css';
import { CustomAlert } from '../../../../CustomAlert';
import { adminAddCustomer } from '../../../../actions/adminAuth';

const ActivationListener = ({}) => {
  return (
    <div>
      <p> Listening for confirmation </p>
    </div>
  );
};

export default connect(null, { adminAddCustomer })(
  ActivationListener
);
