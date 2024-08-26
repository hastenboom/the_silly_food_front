"use client"
import {Card, Chip, IconButton} from '@mui/material'
import React, {useEffect, useState} from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {RestaurantCardType} from "@/app/MainPageType";
import {useRouter} from "next/navigation";

/* FIXME: replace the data with the actual data from the backend */
export default function RestaurantCard(
    {restaurantCardInfo}: { restaurantCardInfo: RestaurantCardType }) {

    const [isOpenOrNot, setIsOpenOrNot] = useState(true);

    let router = useRouter();


    function leadToRestaurantDetails() {
        router.push("/restaurant/" + restaurantCardInfo.id);
    }

    return (

        <Card onClick={leadToRestaurantDetails} className=" w-[18rem]">

            {/*opening hours*/}
            <div
                className={`{${isOpenOrNot} ? cursor-pointer : cursor-not-allowed} relative`}>

                {/*images*/}
                {restaurantCardInfo.images == " " ?
                    <img className="w-full h-[10rem] rounded-t-md object-cover"
                         src="https://cdn.pixabay.com/photo/2019/02/21/19/00/restaurant-4011989_640.jpg" alt=""/>
                    :
                    <img className="w-full h-[10rem] rounded-t-md object-cover"
                         src={restaurantCardInfo.images} alt=""/>
                }

                {/*opening hours*/}
                <Chip
                    size="small"
                    className="absolute top-2 left-2"
                    color={isOpenOrNot ? "success" : "error"}
                    label={isOpenOrNot ? "Open" : "Closed"}
                />
            </div>

            <div className='p-4 lg:flex w-full justify-between'>

                <div className="space-y-1">
                    {/*restaurant name*/}
                    <p className="font-semibold text-lg">{restaurantCardInfo.name}</p>
                    {/*restaurant desc*/}
                    <p className='text-gray-500 text-sm'>{restaurantCardInfo.desc.slice(0, 100) + " ..."}</p>
                </div>

                <div className="flex-col">
                    <div>
                        <IconButton>
                            {/*TODO: isLiked*/}
                            {true ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                        </IconButton>
                    </div>

                    {/* rating */}
                    <div className="pl-2">
                        {restaurantCardInfo.avgRating}/5
                    </div>
                </div>

            </div>

        </Card>
    )
}
