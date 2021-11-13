import React from "react";
import img from "../../../img/suzuki-bikes-in-nepal-gadgetsgaadi.jpg"
import "./Banner.css";

const Banner = () => {
  return (
    <div className='banner'>
        <img className='w-100' src={img} alt="" />
    </div>
  );
};

export default Banner;
