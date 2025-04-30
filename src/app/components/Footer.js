import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ 
      py: 3,
      backgroundColor: "hsla(277, 61.40%, 77.60%, 0.60)",
    }}>

      <Grid container sx={{ mx: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body2" color="text.secondary">
            Social Media
          </Typography>

          <Box maxWidth={100} sx={{ 
            display: "flex",
            justifyContent: "space-around",
            mt: 1,
          }}>
              <Email fontSize="small" />
              <LinkedIn fontSize="small" />
              <GitHub fontSize="small" />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}  sx={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              &copy; {new Date().getFullYear()} Sagar Karki Portfolio. All Right Reserved.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}