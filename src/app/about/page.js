'use client';
import { Container, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";

 // denotes client side rendering

export default function About() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>
        About me
      </Typography>

      <Typography variant="body1" sx={{ borderBottom: "1px solid hsl(0, 0%, 90.00%)", borderRight: "1px solid hsl(0, 0%, 90%)", borderRadius: "6px", pb: "2%" }} gutterBottom>
        Hello! I'm a self taught front-end developer passionate about building clean, user friendly web applications. I specialise in using React and Material UI to develop responsive and visually appealing interfaces.
      </Typography>

      <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>
        Skills & Tools
      </Typography>

      <List sx={{ borderBottom: "1px solid hsl(0, 0%, 90.00%)", borderRight: "1px solid hsl(0, 0%, 90%)", borderRadius: "6px", mb: 3 }}>
        <ListItem>
          <ListItemText primary='Languages' secondary='HTML, CSS, JavaScript, TypeScript' />
        </ListItem>
        <ListItem>
          <ListItemText primary='Frameworks & Libraries' secondary='React, Material UI, Redux, Express, Nextjs' />
        </ListItem>
        <ListItem>
          <ListItemText primary='Tools' secondary='Git, Github, Postman, VS Code' />
        </ListItem>
        <ListItem>
          <ListItemText primary='Database' secondary='Oracle, MySQL, MongoDB' />
        </ListItem>
      </List>

      {/* <Divider /> */}

      <Typography variant="body1" sx={{ borderBottom: "1px solid hsl(0, 0%, 90.00%)", borderRight: "1px solid hsl(0, 0%, 90%)", borderRadius: "6px", pb: "4%" }}>
        I enjoy learning new technologies and solving real-world problems with code. My goal is to become a full-stack developer and contribute to impactful projects.
      </Typography>
    </Container>
  );
}