"use client"
import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { darkTheme } from '@/theme/DarkTheme'

export default function AuthLayout({ children }) {
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