/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import ProfileNav from './components/ProfileNav'
import { Button, ThemeProvider } from '@mui/material'
import { darkTheme } from '@/theme/DarkTheme'


export interface ProfileDetailsPageParam {
    user_id: string
}


export default function ProfileDetailsPage({ params }: { params: ProfileDetailsPageParam }) {
    return (
        // <ThemeProvider theme={darkTheme}>

            <div className=" h-full w-full self-center flex flex-col justify-center items-center space-y-5">

                <img className=" rounded-full h-[300px] w-[300px] "
                    src="https://cdn.pixabay.com/photo/2020/09/04/20/09/cartoon-5544856_1280.jpg" alt="" />

                <div className="text-5xl">John Hasten</div>

                <div className="text-3xl">jojo@gmail.com</div>

                <Button variant="outlined">Logout</Button>

            </div>

        // </ThemeProvider >
    )
}
