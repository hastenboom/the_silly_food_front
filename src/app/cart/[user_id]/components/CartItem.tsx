import { Chip, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


//FIXME: use the real data from the backend
export default function CartItem() {
    return (
        <div className="px-5">
            <div className="lg:flex items-center lg:space-x-5">

                <div>
                    <img className="w-[5rem] h-[5rem] object-cover" src="
                    https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg
                    " alt='' />
                </div>

                <div className="flex items-center justify-between lg:w-[70%]">
                    <div className="space-y-1 lg:space-y-3 w-full">
                        <p>biryani</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1">

                                <IconButton>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>

                                {/* quantity */}
                                <div className="w-5 h-5 text-xs flex items-center justify-center">45</div>

                                <IconButton>
                                    <AddCircleOutlineIcon />
                                </IconButton>

                            </div>
                        </div>
                    </div>
                    {/* total price */}
                    <p>$123.99</p>
                </div>

            </div>

            {/* ingredient list */}
            <div className="pt-3 space-x-2">
                {[1, 1, 1].map((item) => <Chip label="bread" />)}
            </div>

        </div>
    )
}
