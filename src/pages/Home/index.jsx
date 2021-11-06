import React from "react";
import FooterHome from "../../components/FooterHome";
import Layout from "../../HOCs/Layout";
import HomeCarousel from "./Carousel";
import HomeCinema from "./HomeCinema";
import MovieList from "./MovieList";

const Home = () => {
  return (
    <Layout>
      <HomeCarousel></HomeCarousel>
      <MovieList></MovieList>
      <HomeCinema></HomeCinema>
      <FooterHome></FooterHome>
    </Layout>
  );
};

export default Home;
