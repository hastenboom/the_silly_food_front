/* eslint-disable @next/next/no-img-element */
"use client"

import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './components/MenuCard';
import { darkTheme } from '@/theme/DarkTheme';
import RestaurantCarousel from './components/RestaurantCarousel';


//TODO: remove me
const foodCategories = [
  "All",
  "Pizza",
  "Biryani",
  "Burger",
  "Chicken",
  "Rice"
]

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian only", value: "vegetarian" },
  { label: "Non-vegetarian", value: "non-vegetarian" },
  { label: "Seasonal", value: "seasonal" }
]

const menu = [1, 1, 1, 1, 1, 1, 1, 1]

//FIXME: use the real data from the backend
export default function RestaurantDetailsPage({ params }) {


  //FIXME
  const [foodType, setFoodType] = useState("all");
  const [foodCategory, setFoodCategory] = useState("");

  return (

    <ThemeProvider theme={darkTheme}>
      < div >

        <section>
          <h3 className="text-gray-500 py-2 mt-10">Home/{`${params.restaurant_id} xxxxxxxxx`}</h3>
          <RestaurantCarousel />

          {/* restaurant: name, desc, address, opening hours */}
          <div className="pt-3 pb-5">
            {/* name */}
            <h1 className="text-4xl font-semibold">RestaurantNameXXXXXX</h1>

            {/* desc */}
            <p className='text-gray-500 mt-1'>

              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, vitae culpa. Deserunt accusantium laboriosam doloribus eaque omnis alias sapiente excepturi? Quod sint tenetur et accusamus ducimus vel debitis ipsa distinctio!

            </p>
            <div className="space-y-3 mt-3">


              {/* address */}
              <p className='text-gray-500 flex items-center gap-3'>
                <FmdGoodIcon />

                <span>
                  LA, balabal Street

                </span>

              </p>

              {/* opening hours */}
              <p className='text-gray-500 flex items-center gap-3'>
                <CalendarMonthIcon />
                <span className='text-pink-500'>
                  Mon-Sun: 9:00 AM - 9:00 PM
                </span>
                
              </p>
            </div>
          </div>

        </section>

        <Divider />


        {/* ----------------------------------------------- */}

        <section className="pt-[2rem] lg:flex relative">

          <div className="space-y-10 lg:w-[15%] filter ">
            < div className="box space-y-5 lg:sticky top-28 ">
              <div>

                <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                  Food Type
                </Typography>

                <FormControl className="py-10 space-y-5 " component={"fieldset"}>

                  {/* value here is the default value and the changing value, it's corresponding to the radio button that is selected by default */}
                  <RadioGroup onChange={(e) => setFoodType(e.target.value)} name="food_type" value={foodType}>

                    {foodTypes.map((item) =>
                      <FormControlLabel value={item.value} key={item.value} control={<Radio />} label={item.label} />
                    )}

                  </RadioGroup>

                </FormControl>


              </div>


              <Divider />

              <div>

                <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                  Food Categories
                </Typography>

                <FormControl className="py-10 space-y-5 " component={"fieldset"}>

                  {/* value here is the default value and the changing value, it's corresponding to the radio button that is selected by default */}
                  <RadioGroup onChange={(e) => setFoodCategory(e.target.value)} name="food_type" value={foodCategory}>

                    {foodCategories.map((item) =>
                      <FormControlLabel value={item} key={item} control={<Radio />} label={item} />
                    )}

                  </RadioGroup>

                </FormControl>


              </div>

            </div>

          </div>


          {/* -------------------------- */}
          <div className="space-y-5 lg:w-[85%] lg:pl-10">
            {menu.map((item) => <MenuCard />)}

          </div>

        </section>

      </div >

    </ThemeProvider>
  )
}
