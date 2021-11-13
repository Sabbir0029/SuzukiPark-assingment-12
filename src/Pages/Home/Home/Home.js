import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../TourPackage/TourPackage";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <About></About>
    </div>
  );
};

export default Home;
