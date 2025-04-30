'use client';
import { Box, Button, Container, Icon, IconButton, Stack, Typography } from "@mui/material";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';

 // represents client side rendering

export default function Contact() {
  return (
    <Container maxWidth='md' sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>
        Contact Me
      </Typography>

      <Typography variant="body1">
        I'm always open to discussing projects or new opportuinity. Feel free to reach out!
      </Typography>

      <Box spacing={2} mt={4} sx={{ 
        display: "flex", 
        justifyContent: "center", 
        mt: "60vh", 
        border: "1px solid hsla(290, 20.50%, 54.10%, 0.4)", 
        maxWidth: "40%", mx: "auto", 
        borderRadius: "6px" 

      }}>
        <IconButton
         href="mailto:swaggerkarki@gmail.com"
         color="secondary"
        >
          <Email fontSize="small" />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/in/sagar-karky/"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
        >
          <LinkedIn fontSize="small" />
        </IconButton>

        <IconButton
          href="https://github.com/SWAGGERKARKI/"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
        >
          <GitHub fontSize="small" />
        </IconButton>
      </Box>
    </Container>
  );
}