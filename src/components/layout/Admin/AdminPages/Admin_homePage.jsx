import React, { useState, useEffect } from "react";
import Charty from "react-charty";

const Admin_homePage = () => {
  const MINIMAL_EXAMPLE_DATA = {
    type: "line",
    data: {
      x: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25,
      ],
      y0: [
        -20, 0, 20, 23, 25, 28, 40, 50, 33, 23, 14, 3, 15, 16, 18, 20, 34, 44,
        30, 31, 43, 22, 15, 27, 23,
      ],
    },
    colors: {
      y0: "#5FB641",
    },
    names: {
      x: "Registered, Users",
      y0: "Registered, Users",
    },
    startX: 1,
    endX: 25,
    xAxisStep: 2,
    showPreview: true,
    showRangeText: true,
    showLegendTitle: true,
    animated: true,
  };
  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <Charty title="Users" {...MINIMAL_EXAMPLE_DATA} />
        </div>
      </section>
    </div>
  );
};

export default Admin_homePage;
