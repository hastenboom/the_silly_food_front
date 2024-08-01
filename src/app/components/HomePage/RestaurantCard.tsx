import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

/* FIXME: replace the data with the actual data from the backend */
export default function RestaurantCard() {
    return (

        <Card className=" w-[18rem]">

            <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`} >

                <img className="w-full h-[10rem] rounded-t-md object-cover" src="https://cdn.pixabay.com/photo/2019/02/21/19/00/restaurant-4011989_640.jpg" alt="" />

                <Chip
                    size="small"
                    className="absolute top-2 left-2"
                    color={true ? "success" : "error"}
                    label={true ? "Open" : "Closed"}

                />
            </div>

            <div className='p-4 lg:flex w-full justify-between'>

                <div className="space-y-1">
                    <p className="font-semibold text-lg">Fast Food</p>
                    <p className='text-gray-500 text-sm'>Try our new fried chicken sandwich</p>
                </div>

                <div className="flex-col">
                    <div>
                        <IconButton>
                            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                    </div>

                    {/* rating */}
                    <div className="pl-2">
                        x/5
                    </div>
                </div>

            </div>

        </Card >
    )
}
