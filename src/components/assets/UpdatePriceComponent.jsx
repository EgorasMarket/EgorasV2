import React, { useState, useEffect } from 'react';
import '../../css/success_error_component_style.css';
const UpdatePriceComponent = ({ onclick, closeModal, price }) => {
  const [newPrice, setNewPrice] = useState(price);
  return (
    <div className="processing_transac_div insufficient">
      <div className="success_container">
        <input
          type={'number'}
          name={'price'}
          placeholder={'new price'}
        />
        <button
          onclick={() => {
            console.log(newPrice);
          }}
        >
          {' '}
          update
        </button>
        <button onclick={closeModal}> cancel</button>
      </div>
    </div>
  );
};

export default UpdatePriceComponent;
