"use client"

import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import { darkTheme } from "@/theme/DarkTheme";
import HomePage from "./components/HomePage/HomePage";


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />

        <HomePage />
      </ThemeProvider>
    </main>
  );
}
