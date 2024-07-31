/* eslint-disable @next/next/no-img-element */

import Slider from "react-slick";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestaurantItem from "./RestaurantItem";



const restaurantUrl = [
    "https://cdn.pixabay.com/photo/2018/09/10/05/10/traditional-chinese-3666268_1280.jpg",

    "https://cdn.pixabay.com/photo/2017/02/25/15/08/dimsum-2097953_1280.jpg",

    "https://cdn.pixabay.com/photo/2017/03/30/05/20/chinese-homes-2187267_1280.jpg"]


export default function RestaurantCarousel() {
    const settings = {
        className: "center",
        // centerMode: true,
        // infinite: true,
        centerPadding: "160px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>

                {restaurantUrl.map((url) =>
                    <RestaurantItem key={url} imgUrl={url} />)}

            </Slider>
        </div>
    );
}

