'use client';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Container, Grid, minHeight } from "@mui/system";
import Link from "next/link";
import { easeInOut, motion } from "motion/react";

 // denotes client side rendering

const projects = [
  {
    title: 'Porfolio Website',
    description: 'A persnal website built with Next.js and Material UI.',
    image: '/Portfolio-Website.png',
    link: '#',
  },
  {
    title: 'Wheather Dashboard',
    description: 'A React app using OpenWeather API with real-time data.',
    image: '',
    link: '#',
  },
  {
    title: 'Task Manger App',
    description: 'A full-stack MERN application for managing tasks.',
    image: '',
    link: '#',
  },
  {
    title: 'Task Manger App',
    description: 'A full-stack MERN application for managing tasks.',
    image: '',
    link: '#',
  },
  {
    title: 'Task Manger App',
    description: 'A full-stack MERN application for managing tasks.',
    image: '',
    link: '#',
  },
  {
    title: 'Task Manger App',
    description: 'A full-stack MERN application for managing tasks.',
    image: '',
    link: '#',
  },
  {
    title: 'Task Manger App',
    description: 'A full-stack MERN application for managing tasks.',
    image: '',
    link: '#',
  },
  {
    title: 'Task Manger App',
    description: 'A full-stack MERN application for managing tasks.',
    image: '',
    link: '#',
  },
];

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ my: 4, minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        My projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 , delay: index * 0.2 } }}
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
            >
              <Card sx={{ 
                display: "flex", 
                flexDirection: "column", 
                height: '100%',
                boxShadow: 3, 
                cursor: "pointer",           
              }}>
                <CardMedia 
                  component={"img"}
                  height={180}
                  image={project.image || "/Portfolio-Website.png" }
                  alt="Portfolio Website"
                />
                <CardContent>
                  <Typography variant="h5" component={"div"} gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions> 
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    component={Link}
                    href="/Portfolio-Website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}