import React from "react";
import "./nodatafoundStyle.css";

export const NoDataFoundComponent = ({ nodataTxt, text }) => {
  return (
    <div className="nodata_found_div">
      <img src="/img/no-data-found.svg" alt="" className="nodataImage" />
      <span className="nodata_txt">{nodataTxt}</span>
      <span className="nodata_txt">{text}</span>
    </div>
  );
};
