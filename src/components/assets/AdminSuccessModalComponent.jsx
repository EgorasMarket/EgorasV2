import React, { useState, useEffect } from 'react';
import '../../css/success_error_component_style.css';
const AdminSuccessModalComponent = ({
  remove_success_div,
  btn_txt,
  msg,
  errorMsgDiv,
  link_btn,
  src,
  removeTransDiv,
  onclick,
  print,
}) => {
  return (
    <div className="processing_transac_div insufficient">
      <div className="success_container">
        <div className="success_heading">
          {errorMsgDiv == true ? (
            <img
              style={{ width: '100%' }}
              src="/img/error_div_heading_icon.svg"
              alt=""
              onClick={onclick}
            />
          ) : errorMsgDiv == false ? (
            <img
              style={{ width: '100%' }}
              src="/img/succees_div_heading_icon.svg"
              alt=""
              onClick={onclick}
            />
          ) : null}
        </div>
        <div className="success_title">
          {errorMsgDiv == true ? (
            <span>Error</span>
          ) : errorMsgDiv == false ? (
            <span>Success</span>
          ) : null}
        </div>
        <div className="success_para">{msg}</div>
        <div className="success_btn_div">
          {link_btn == true ? (
            <a href={src} style={{ display: 'flex' }}>
              <button
                style={
                  errorMsgDiv == true
                    ? {
                        backgroundColor: '#ff575a',
                        boxShadow: '#ffc2c3 0px 4px 10px',
                      }
                    : errorMsgDiv == false
                    ? {
                        backgroundColor: '#3fa96b',
                        boxShadow: '0px 4px 10px #5fa97e',
                      }
                    : null
                }
                className="success_btn"
                onClick={remove_success_div}
              >
                {btn_txt}
              </button>
            </a>
          ) : (
            <button
              style={
                errorMsgDiv == true
                  ? {
                      backgroundColor: '#ff575a',
                      boxShadow: '#ffc2c3 0px 4px 10px',
                    }
                  : errorMsgDiv == false
                  ? {
                      backgroundColor: '#3fa96b',
                      boxShadow: '0px 4px 10px #5fa97e',
                    }
                  : null
              }
              className="success_btn"
              onClick={remove_success_div}
            >
              {btn_txt}
            </button>
          )}
          {errorMsgDiv == true ? (
            <button
              className="cancel_success_btn"
              onClick={removeTransDiv}
            >
              Cancel
            </button>
          ) : errorMsgDiv == false ?      <button
          className="cancel_success_btn"
          onClick={print}
        >
         Print
        </button> : null}
        </div>
      </div>
    </div>
  );
};

export default AdminSuccessModalComponent;
