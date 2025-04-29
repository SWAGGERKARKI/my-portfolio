// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

import Navbar from "@/components/Navbar";
import { Container, CssBaseline } from "@mui/material";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "My Portfolio  ",
  description: "Created with Next.js and Material UI",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className={`${geistSans.variable} ${geistMono.variable}`}>
    //     {children}
    //   </body>
    // </html>
    <html>
      <body>
        <CssBaseline />
        <Navbar />
        <Container sx={{ mt: 4, border: 1, borderColor: "grey.300", p: 2 }}>
          {children}
        </Container>
      </body>
    </html>
  );
}
