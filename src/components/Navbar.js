'use client'; // This is a client component, for interactivity and denotes that it will be rendered on the client side.

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Box sx={{ display: "flex", gap: 2}}>
          <Link href={'/'} passHref><Button sx={{ color: "#fff" }}>Home</Button></Link>
          <Link href={'/about'} passHref><Button sx={{ color: "#fff" }}>About</Button></Link>
          <Link href={'/projects'} passHref><Button sx={{ color: "#fff" }}>Projects</Button></Link>
          <Link href={'/contact'} passHref><Button sx={{ color: "#fff" }}>Contact</Button></Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}