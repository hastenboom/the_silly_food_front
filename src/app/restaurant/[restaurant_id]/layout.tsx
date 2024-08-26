"use client"
import Navbar from '@/app/components/Navbar/Navbar'
import {CssBaseline, ThemeProvider} from '@mui/material'
import React from 'react'
import {darkTheme} from "@/theme/DarkTheme";

// @ts-ignore
export default function layout({children}) {
    return (
        <div>
             <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Navbar/>
            <div className="px-10 ">
                {children}
            </div>

             </ThemeProvider>
        </div>
    )
}
