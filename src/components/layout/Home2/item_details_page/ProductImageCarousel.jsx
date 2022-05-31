import React, { useState, useEffect, useCallback } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const ProductImageCarousel = (props) => {
  return (
    <div>
      {/* <img src={props.img_not} />{" "} */}
      <Carousel showArrows={true} showIndicators={false}>
        {/* {data_img.map((data) => (
          <div>
            <img src={data} />
            <p className="legend">Legend 1</p>
          </div>
        ))} */}
        <div>
          <img src={props.img} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={props.img2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={props.img3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};
