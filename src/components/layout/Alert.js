import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBug } from '@fortawesome/free-solid-svg-icons';
const Alert = (alerts) => {


//     return alerts.alerts !== null && alerts.alerts.length > 0 && alerts.alerts.map(alert => (
//    <div  key={alert.id} className={"alert alert-" + alert.alertType} role="alert">
// {alert.msg}
// </div>
//     ));

return (
    <div className="main_style" style={{zIndex: '100', backgroundColor: 'black', position: 'absolute', top: '0'}}>
      {alerts.alerts !== null && alerts.alerts.length > 0 && alerts.alerts.map(alert => (
        <div  key={alert.id} className={"alert alert-" + alert.alertType} role="alert">
        {alert.msg}
        </div>
        ))}
    </div>
  );

}

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
}
const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);