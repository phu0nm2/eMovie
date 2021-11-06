import React from "react";
import { Carousel } from "antd";
import ButtonPlay from "../../components/ButtonPlay";

const CarouselItem = ({ carouselList }) => {
  const contentStyle = {
    height: "450px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Carousel autoplay> 
      {carouselList.map((item) => {
        return (
          <Carousel key={item.maPhim} className="w-full" effect="fade">
            <div>
              <h3 style={contentStyle}>
                <img src={item.hinhAnh} className="w-full h-full" alt="" />
              </h3>
              <ButtonPlay></ButtonPlay>
            </div>
          </Carousel>
        );
      })}
    </Carousel>
  );
};

export default CarouselItem;
