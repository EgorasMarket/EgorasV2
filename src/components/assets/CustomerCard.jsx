import React from 'react';

const CustomerCard = ({ customerName, object, onClick }) => {
  const { phoneNumber, email, branch } = object.customer_details;

  return (
    <>
      <div className="customer-card" onClick={onClick}>
        <div>
          <h4>{object.customer_details.fullname}</h4>
          <h4>{phoneNumber}</h4>
        </div>
        <div>
          <h3>
            Outright Orders:{' '}
            {object.outright ? object.outright.length : 0}
          </h3>

          <h3>
            Installment Orders:{' '}
            {object.outright ? object.installment.length : 0}
          </h3>
        </div>
      </div>
    </>
  );
};

export default CustomerCard;
