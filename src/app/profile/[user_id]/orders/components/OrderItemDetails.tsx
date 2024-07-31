/* eslint-disable @next/next/no-img-element */
import { Chip, IconButton } from '@mui/material'
import React from 'react'

export default function OrderItemDetails() {
    return (
        <>
            <div className="py-2 flex space-x-10">

                <img className="w-[5rem] h-[5rem] object-cover" src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg" alt='' />

                <div className="flex-col">
                    <div className="font-bold">biryani</div>
                    <div>Quantity: 45</div>
                    <div>Price: $123.99</div>
                </div>
 <div className="pt-3 space-x-2">
                {[1, 1, 1].map((item) => <Chip label="bread" />)}
            </div>
            </div>
           
        </>
    )
}

/* 

<div className="px-5">
< className="lg:flex items-center juslg:space-x-[30px]

        <img className="w-[5rem] h-[5rem] object-cover" src="
https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg
" alt='' />
    </>
div
    <div className=" flex items-center justify-between lg:w-[70%]">

        <div className="space-y-1 lg:space-y-3">
            <p>biryani</p>
            <div className="flex justify-between items-center">
                <di className="flex items-center space-x-1">
                    <div className=" text-xs flex items-center justify-center">
                        quantity: 45w-5 h-5
                    </div>
                </di    v>

            </div>
        </div>

        <p>$123.99</p>
    </div>

</div>

<div className="pt-3 space-x-2">
    {[1, 1, 1].map((item) => <Chip label="bread" />)}
</div>

)div


 */
