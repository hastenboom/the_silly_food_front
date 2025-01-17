"use client"
import React, {useEffect, useState} from 'react'
import "./Home.css"
import MealCarousel from './MealCarousel'
import RestaurantCard from './RestaurantCard'
import {RestaurantCardType} from "@/app/MainPageType";
import {getRestaurantCards} from "@/app/mainPageRequest";


export default function HomePage() {

    const [restaurantList, setRestaurantList]
        = useState<RestaurantCardType[]>([{
        id: -1,
        name: "Loading...",
        openingHours: " ",
        images: " ",
        desc: " ",
        avgRating: 0,
        address: "",
    }]);

    useEffect(() => {
        const fetchRestaurantList = async () => {
            try {
                const restCardList = await getRestaurantCards();
                //@ts-ignore
                // setRestaurantList([...restaurantList, ...restCardList!]);
                if (restCardList !== undefined)
                    setRestaurantList(restCardList!);
            } catch (error) {
                console.error('Error fetching restaurant list:', error);
            }
        };

        fetchRestaurantList()

    }, []);

    return (

        <div className='pb-10'>

            <section className="banner  relative flex flex-col justify-center items-center">

                <div className="w-[50vw] z-10 text-center">

                    <p className="text-2xl lg:text-6xl font-bold z-10 py-5">The Food</p>

                    <p className="z-10 text-gray-300 text-xl lg:text-4xl">Taste Your Convenience : Food, Fast and
                        Delivered.</p>
                </div>

                {/* background image, don't remove it */}
                <div className="cover absolute top-0 left-0 right-0"></div>

            </section>

            <section className="p-10 lg:py-10 lg:px-20">
                <p className="text-2xl font-semibold text-gray-400 py-3 pd-10">Top Meals</p>
                <MealCarousel></MealCarousel>
            </section>


            <section className="px-5 lg:px20 pt-10">
                <h1 className="text-2xl font-semibold text-gray-400 py-5">Our Favorite Restaurants</h1>
                <div className="flex flex-wrap items-center justify-around gap-5">


                    {
                        restaurantList.map((restaurantCardInfo, index) =>
                            <RestaurantCard key={index} restaurantCardInfo={restaurantCardInfo}/>
                        )
                    }
                </div>
            </section>
        </div>
    )
}
