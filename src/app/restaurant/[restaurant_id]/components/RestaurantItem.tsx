/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function RestaurantItem({imgUrl}:{imgUrl:string}) {
    return (
        <div className="mx-5">

            <img
                className="h-[40vh] object-cover rounded-md"
                src={imgUrl} alt="" />
        </div>
    )
}
