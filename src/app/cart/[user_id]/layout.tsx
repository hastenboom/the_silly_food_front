"use client"
import Navbar from '@/app/components/Navbar/Navbar'
import {CssBaseline, ThemeProvider} from '@mui/material'
import React, {ReactElement} from 'react'
import {darkTheme} from "@/theme/DarkTheme";

export default function layout({ children }:{children:ReactElement}) {
    return (
        <div>
             <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Navbar />
            <div className="px-10 ">
                {children}
            </div>

             </ThemeProvider>
        </div>
    )
}
