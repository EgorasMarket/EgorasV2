import React, { useState, useEffect, Fragment } from 'react';

export const CustomAlert = (props) => {
  // const [timeOut, setTimeOuut] = useState(true);
  //console.log(props.alertType);
  // const timer = () => {
  //   if (timeOut == false) {
  //     setTimeout(() => {
  //       setTimeOuut(false);
  //     }, 1000);
  //   } else {
  //     setTimeOuut(true);
  //   }
  // };

  // const timer = () =>
  //   setTimeout(function () {
  //     props.closeAlert();
  //     console.log("66");
  //   }, 10000);
  useEffect(() => {
    setTimeout(function () {
      // closeAlert();
      props.closeAlert();
    }, 5000);
  }, [props.closeAlert]);
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

// export default CustomAlert
