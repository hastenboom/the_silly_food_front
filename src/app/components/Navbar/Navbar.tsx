"use client"
import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
    return (
        <div className="px-5 z-50 py-[.8rem] bg-[#e91e64] lg:px-20 flex justify-between">

            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <span className="pl-4 logo font-semibold text-gray-300 text-2xl">
                    The Food
                </span >
            </div>

            <div className="flex items-center space-x-4">

                <div className=''>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>

                <div className="">
                    <Avatar sx={{ bgcolor: "white", color: pink.A400 }}></Avatar>
                </div>


                <div className=''>
                    <IconButton>

                        <Badge badgeContent={"X"} color='secondary'>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />

                        </Badge>

                    </IconButton>
                </div>

            </div>

        </div>
    )
}
