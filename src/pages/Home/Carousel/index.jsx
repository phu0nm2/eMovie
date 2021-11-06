import React, { useEffect } from "react";
import CarouselItem from "../../../components/CarouselItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarousels } from "../../../store/actions/carousel";

const Carousel = () => {
  const { carouselList } = useSelector((state) => state.carouselList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarousels());
  }, [dispatch]);

  return (
    <>
      <CarouselItem carouselList={carouselList} />
    </>
  );
};

export default Carousel;
