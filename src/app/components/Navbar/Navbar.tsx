"use client"
import { Avatar, Badge, IconButton, Input } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="px-5 z-50 py-[.8rem] bg-[#e91e64] lg:px-20 flex justify-between">

            <Link href="/" className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <span className="pl-4 logo font-semibold text-gray-300 text-2xl">
                    The Food
                </span >

            </Link>

            <div className="flex items-center space-x-4">

                <div className=''>
                    {/* <IconButton > */}
                    <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    {/* </IconButton> */}
                    <Input id="search-input" placeholder='Search Restaurants ...' >
                    </Input>

                </div>

                {/* fixme: the main page should /login, while the rest show /profile */}
                <Link href="/login" className="cursor-pointer">
                    <Avatar sx={{ bgcolor: "white", color: pink.A400 }}></Avatar>
                </Link>


                {/* fixme: the main page should /login, while the rest show /cart/[user_id] */}
                <Link className='' href={'/login'}>
                    <IconButton>

                        <Badge badgeContent={"X"} color='secondary'>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />

                        </Badge>

                    </IconButton>
                </Link>

            </div>

        </div>
    )
}
