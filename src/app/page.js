'use client';
// This is a client component, for interactivity and denotes that it will be rendered on the client side.

// import Image from "next/image";
// import styles from "./page.module.css";

import { Avatar, Button, Typography } from "@mui/material";
import { Box, Container, Grid } from "@mui/system";
import Link from "next/link";
import profilePicture from '../../public/profile.png';

export default function Home() {
  // return (
  //   <div className={styles.page}>
  //     <main className={styles.main}>
  //       <Image
  //         className={styles.logo}
  //         src="/next.svg"
  //         alt="Next.js logo"
  //         width={180}
  //         height={38}
  //         priority
  //       />
  //       <ol>
  //         <li>
  //           Get started by editing <code>src/app/page.js</code>.
  //         </li>
  //         <li>Save and see your changes instantly.</li>
  //       </ol>

  //       <div className={styles.ctas}>
  //         <a
  //           className={styles.primary}
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             className={styles.logo}
  //             src="/vercel.svg"
  //             alt="Vercel logomark"
  //             width={20}
  //             height={20}
  //           />
  //           Deploy now
  //         </a>
  //         <a
  //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className={styles.secondary}
  //         >
  //           Read our docs
  //         </a>
  //       </div>
  //     </main>
  //     <footer className={styles.footer}>
  //       <a
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/file.svg"
  //           alt="File icon"
  //           width={16}
  //           height={16}
  //         />
  //         Learn
  //       </a>
  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/window.svg"
  //           alt="Window icon"
  //           width={16}
  //           height={16}
  //         />
  //         Examples
  //       </a>
  //       <a
  //         href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/globe.svg"
  //           alt="Globe icon"
  //           width={16}
  //           height={16}
  //         />
  //         Go to nextjs.org →
  //       </a>
  //     </footer>
  //   </div>
  // );

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container alignItems="center" justifyContent={'center'} spacing={4}>
        
        {/* left column: text */}
        <Grid size={{ xs: 12, md: 6}} >
          <Typography variant="h4"  gutterBottom>
            Hi, I am <span style={{ color: "#9C27B0" }}><i>Sagar Karki</i></span>.
          </Typography>

          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            I'm a software engineer with a passion for building web applications using various technologies and frameworks like MERN, Next.js.
          </Typography>

          <Box sx={{ mt: 4}}>
            <Link href={'/projects'} passHref>
              <Button variant="contained" size="large" sx={{ bgcolor: "#9C27B0" }}>
                View My Projects
              </Button>
            </Link>
          </Box>
        </Grid>

        {/* right column: profile picture */}
        <Grid size={{ xs: 12, md: 6 }} textAlign={"center"}>
          <Avatar
            variant="rounded"
            alt="Sagar Karki"
            src="/profile-picture.jpeg"
            sx={{ width: 250, height: 250, margin: '0 auto', boxShadow: 3 }}
          />
        </Grid>

      </Grid>
      
    </Container>
  );
}
