/* eslint-disable @next/next/no-img-element */
"use client"
import {Chip, IconButton} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {CartItemType} from "@/app/cart/CartType";
import {myServerAxios} from "@/axios/axiosConfig";
import {FoodType} from "@/app/restaurant/RestaurantType";

const defaultFoodSrc = "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg"

export default function OrderItemDetails(
    {cartItem}: { cartItem: CartItemType }
) {

    const [foodData, setFoodData] =
        useState<FoodType>({
            id: -1,
            restaurantId: -1,
            name: "name",
            desc: "description",
            images: "",
            price: -1,
            type: "",
            category: "",
            isAvailable: 1,
        });

    useEffect(() => {
        async function fetchFoodData() {
            console.log("cartItem.foodId: " + cartItem.foodId)
            const response: Result<FoodType> = await myServerAxios.get(`food/${cartItem.foodId}`);
            if (response.data !== undefined) {
                setFoodData(response.data);
            }
        }

        fetchFoodData()
    },[])
    return (
        <>
            <div className="py-2 flex space-x-10">

                <img className="w-[5rem] h-[5rem] object-cover"
                     src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg" alt=''/>

                <div className="flex-col">
                    <div className="font-bold">{foodData.name}</div>
                    <div>Quantity: {cartItem.quantity}</div>
                    <div>Total Price: ${(foodData.price * cartItem.quantity).toFixed(2)}</div>
                </div>

                {/*ingredient, removed*/}
                {/*                <div className="pt-3 space-x-2">
                    {[1, 1, 1].map((item) => <Chip label="bread"/>)}
                </div>*/}
            </div>

        </>
    )
}

