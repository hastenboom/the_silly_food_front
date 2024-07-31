import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//ts specific bug
import Slider from "react-slick";

import { MealItem, topMeal } from './data/topMealList';
import MealCarouselItem from './MealCarouselItem';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrow: false
};

export default function MealCarousel() {


    return (
        <div>
            <Slider {...settings}>
                {topMeal.map((item: MealItem) => {
                    return <MealCarouselItem key={item.image} image={item.image} title={item.title} />
                })}

            </Slider>

        </div>
    )
}
