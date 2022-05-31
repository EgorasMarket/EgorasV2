import React, { useState, useEffect, useCallback } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const ProductImageCarousel = (props) => {
  return (
    <div>
      {" "}
      <Carousel showArrows={true} showIndicators={false}>
        <div>
          <img src={props.img} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={props.img} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={props.img} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};