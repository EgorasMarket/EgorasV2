import React, { useState, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
const DashBoardCard = ({
  title,
  balance,
  background,
  Loading,
  LoadingIcon,
}) => {
  const [balance1, setBalance] = useState("0.00");

  return (
    <div className="card_cont1">
      <div className="card_cont_txtxs">
        <div className="save_card_cont_txt1">
          <span className="savings_caption">{title}</span>
          {Loading == true ? (
            <div className="loading_money_icon">{LoadingIcon}</div>
          ) : (
            <div className="card_cont_txt_tittle">₦{balance}</div>
          )}
        </div>
        <a href="/dashboard/savings" className="to_save_btn">
          <LogoutIcon className="to_save_area_icon" /> Start saving
        </a>
      </div>
      <img src={background} alt="" className="savings_card" />
    </div>
  );
};

export default DashBoardCard;
