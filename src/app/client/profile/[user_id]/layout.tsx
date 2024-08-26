"use client"
import Navbar from '@/app/components/Navbar/Navbar'
import { darkTheme } from '@/theme/DarkTheme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Divider } from '@mui/material'
import React from 'react'
import ProfileNav from './components/ProfileNav'

// @ts-ignore
export default function layout({ children, params }) {
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Navbar />

            <div className="lg:flex justify-between">

                <div className="sticky h-[80vh] lg:w-[15%]">
                    <ProfileNav params={params}></ProfileNav>
                </div>

                <Divider orientation="vertical" flexItem />

                <div className="lg:w-[85%]">
                    {children}
                </div>
            </div>

            </ThemeProvider>
        </div>
    )
}
