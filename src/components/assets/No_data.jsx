import React, { useState, useEffect } from 'react';
import '../../css/success_error_component_style.css';
const NoData = ({ message }) => {
  return (
    <div className="processing_transac_div insufficient">
      <h3>{message}</h3>
    </div>
  );
};

export default NoData;
