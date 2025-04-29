// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
'use client';

import Navbar from "@/components/Navbar";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const metadata = {
  title: "My Portfolio  ",
  description: "Created with Next.js and Material UI",
};

export default function RootLayout({ children }) {
  const [mode, setMode] = useState('light'); // state management for theme

  // function to toggle between light and dark
  const toggleTheme = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  // create theme
  const theme = useMemo(() => createTheme({
    palete: {
      mode,
    },  
  }), [mode]);

  return (
    // <html lang="en">
    //   <body className={`${geistSans.variable} ${geistMono.variable}`}>
    //     {children}
    //   </body>
    // </html>
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar toggleTheme={toggleTheme} mode={mode} />
          <Container sx={{ mt: 4, p: 2 }}>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
