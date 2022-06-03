import React, { useState, useEffect, Fragment } from 'react';

export const CustomAlert = (props) => {
  return (
    <div className="alert_cont">
      <div
        className={
          props.alertType === 'danger'
            ? 'setAlertErr'
            : 'setAlertSuccess'
        }
      >
        {props.alert}
      </div>
    </div>
  );
};
