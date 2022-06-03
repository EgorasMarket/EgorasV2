import React, { Fragment, useState } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

// import { setAlert } from '../../../actions/alert';
// import { customerLoanApplication } from '../../../actions/loans';

export const AdminLogout = ({}) => {
  const triggerLogout = (event) => {
    // setBusinessDuration(event.target.value);
    // //console.log('okkkk');
    localStorage.removeItem("token");
    window.location.href = "/login/super_admin";
  };

  return (
    // <div className='d-inline-block'>
    //     <button className="nav-link btn btn-header py-1 px-3" onClick={triggerLogout} href="#">Log Out</button>
    // </div>
    <div className="logout_icon " id="logout" onClick={triggerLogout}>
      <span className="logout_icon_span">
        <PowerSettingsNewIcon className="logout_icon_span_svg" />
        Logout
      </span>
    </div>
  );
};

// export default Logout;
AdminLogout.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(AdminLogout);
