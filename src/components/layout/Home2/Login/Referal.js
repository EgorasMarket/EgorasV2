import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
// import { useCookies } from "react-cookie";

export const Referal = ({ match }) => {
  //   const [ref, setRef] = useState("");

  useEffect(() => {
    //console.log(match.params);

    localStorage.setItem("referer", match.params.ref);
  }, []);

  if (typeof localStorage.referer !== undefined) {
    return <Redirect to="/register" />;
    // console.log("okkkk");
  }

  return (
    <Fragment>
      <div></div>
    </Fragment>
  );
};

export default Referal;
