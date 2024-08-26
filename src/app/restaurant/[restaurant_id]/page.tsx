/* eslint-disable @next/next/no-img-element */
"use client"

import {
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Rating,
    ThemeProvider,
    Typography
} from '@mui/material'
import React, {useEffect, useState} from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FoodCard from './components/FoodCard';
import RestaurantCarousel from './components/RestaurantCarousel';
import {getRestaurantFoodByTypeAndCategory, getRestaurantPageMainData} from "@/app/restaurant/restaurantPageRequest";
import {FoodType, RestaurantPageType} from "@/app/restaurant/RestaurantType";


const foodTypes = [
    {label: "All", value: "All"},
    {label: "Vegetarian only", value: "Veg"},
    {label: "Non-vegetarian", value: "Non-veg"},
    {label: "Seasonal", value: "Seasonal"}
]


// @ts-ignore
export default function RestaurantDetailsPage({params}) {


    const [foodType, setFoodType] = useState("All");
    const [foodCategory, setFoodCategory] = useState("All");
    const [foodList, setFoodList] = useState<FoodType[]>([]);

    // const [ratingValue, setRatingValue] = React.useState<number>(5);

    const [restaurantInfo, setRestaurantInfo] =
        useState<RestaurantPageType>({
            id: params.restaurant_id,
            openingHours: "10:00am - 10:00pm",
            images: " ",
            name: "Restaurant Name",
            desc: "Restaurant Description",
            avgRating: 4.5,
            address: "Restaurant Address",
            foodCategories: " "
        });


    useEffect(() => {
        async function fetchMainData() {
            const data = await getRestaurantPageMainData(params.restaurant_id);
            if (data !== undefined) {
                setRestaurantInfo(data);
            }
        }

        fetchMainData();

    }, []);

    useEffect(() => {
        async function fetchFood() {
            const data = await getRestaurantFoodByTypeAndCategory(params.restaurant_id, foodType, foodCategory);
            if (data != undefined) {
                setFoodList(data);
            }
        }

        fetchFood();

    }, [params.restaurant_id, foodType, foodCategory])


    return (

        // <ThemeProvider theme={darkTheme}>
        < div>

            <section>
                {/* Home/{`${params.restaurant_id} xxxxxxxxx`}*/}
                <h3 className="text-gray-500 py-2 mt-2"></h3>
                <RestaurantCarousel/>

                {/* restaurant: name, desc, address, opening hours */}
                <div className="pt-3 pb-5">

                    {/* name */}
                    <h1 className="text-4xl font-semibold">{restaurantInfo?.name}</h1>


                    <Typography component="legend">Rating</Typography>
                    <Rating name="read-only" value={Math.floor(restaurantInfo!.avgRating)} readOnly/>


                    {/* desc */}
                    <p className='text-gray-500 mt-1'>
                        {restaurantInfo?.desc}
                    </p>
                    <div className="space-y-3 mt-3">

                        {/* address */}
                        <p className='text-gray-500 flex items-center gap-3'>
                            <FmdGoodIcon/>
                            <span> {restaurantInfo?.address}</span>
                        </p>

                        {/* opening hours */}
                        <p className='text-gray-500 flex items-center gap-3'>
                            <CalendarMonthIcon/>
                            <span className='text-pink-500'> {restaurantInfo?.openingHours}</span>
                        </p>
                    </div>
                </div>

            </section>

            <Divider/>


            {/* ----------------------------------------------- */}

            {/*food type*/}
            <section className="pt-[2rem] lg:flex relative">

                <div className="space-y-10 lg:w-[15%] filter ">
                    < div className="box space-y-5 lg:sticky top-28 ">
                        <div>

                            <Typography variant='h5' sx={{paddingBottom: "1rem"}}>
                                Food Type
                            </Typography>

                            <FormControl className="py-10 space-y-5 " component={"fieldset"}>

                                {/* value here is the default value and the changing value, it's corresponding to the radio button that is selected by default */}
                                <RadioGroup onChange={(e) => setFoodType(e.target.value)} name="food_type"
                                            value={foodType}>

                                    {foodTypes.map((item) =>
                                        <FormControlLabel value={item.value} key={item.value} control={<Radio/>}
                                                          label={item.label}/>
                                    )}

                                </RadioGroup>

                            </FormControl>


                        </div>


                        <Divider/>

                        {/*food categories*/}
                        <div>

                            <Typography variant='h5' sx={{paddingBottom: "1rem"}}>
                                Food Categories
                            </Typography>


                            {/*
   const foodCategories = [
        "All",
        "Pizza",
        "Biryani",
        "Burger",
        "Chicken",
        "Rice"
    ]

                               */}
                            <FormControl className="py-10 space-y-5 " component={"fieldset"}>

                                {/* value here is the default value and the changing value, it's corresponding to the radio button that is selected by default */}
                                <RadioGroup onChange={(e) => setFoodCategory(e.target.value)} name="food_type"
                                            value={foodCategory}>

                                    <FormControlLabel value={"All"} control={<Radio/>} label={"All"}/>

                                    {restaurantInfo.foodCategories !== undefined && restaurantInfo.foodCategories.split(",")
                                        .map((item) =>
                                            <FormControlLabel value={item} key={item} control={<Radio/>} label={item}/>
                                        )}

                                </RadioGroup>

                            </FormControl>


                        </div>

                    </div>

                </div>


                {/* -------------------------- */}
                <div className="space-y-5 lg:w-[85%] lg:pl-[300px]">
                    {foodList.map((item) => <FoodCard
                        key={item.id} foodItem={item}/>)}

                </div>

            </section>

        </div>

        // </ThemeProvider>
    )
}
