'use client';
// This is a client component, for interactivity and denotes that it will be rendered on the client side.

// import Image from "next/image";
// import styles from "./page.module.css";

import { Avatar, Button, Typography } from "@mui/material";
import { Box, Container, Grid } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

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
    // <Box
    //   sx={{
    //     minHeight: "100vh",
    //     background: "linear-gradient(to right,rgba(162, 127, 169, 0.5), #ffffff)",
    //     display: "flex",
    //     borderRadius: 2,
    //   }}
    // >
      <Container maxWidth="lg" sx={{ mt: 3, minHeight:"80vh" }}>
        <Grid container spacing={2}>
          
          {/* left column: text */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ minWidth: "30vw" }}>
            <Typography variant="h3" fontWeight={700} sx={{ mt: '20%' }} gutterBottom>
              Hi, I am Sagar Karki <br /> A <span style={{ color: "#9C27B0" }}>MERN Stack Developer.</span>
            </Typography>

            <Typography variant="h6" fontWeight={700}>
              A guy who loves to develop web applications.
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
              sx={{ 
                width: 500, 
                height: 500, 
                margin: '0 auto', 
                boxShadow: 3, 
                maxWidth: '100%',
              }}
            />
          </Grid>

        </Grid>
        
      </Container>
    // </Box>
  );
}
