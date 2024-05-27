/* eslint-disable no-undef */
import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import "../../styles/Hero.css";
import banner from "../../assets/banner.gif"
export default function HeroComponent() {
  return (
    <>
      <Navbar/>
    <Box className="dark-section hero-banner offer" sx={{backgroundImage:{banner}}} >
        <Box className="hero-container">
          <Box className="hero-title">
            <Box className="breadcrumbs ">
              {/* <BreadcrumbsIndex breadcrumbData={breadcrumbData} /> */}
            </Box>
            <Stack>
              <h3 className="offer-hero-subheading">
              We think 
                <span style={{ color: 'red' }}>
                  &nbsp;Future
                </span>
              </h3>
              <h1>DivaishiSoft Development Solutions</h1>
       <h1 style={{color:"yellow"}}>software development company</h1>

              <Typography>
                <p className="hero-subheading">
                  We are an enterprise software development company that is inspired by the future
                </p>
                <Button
                  className="btn"
                  variant="contained"
                  sx={{
                    padding: '.75em 1em',
                    fontWeight: '600',
                    fontFamily: 'Museosans, sans-serif !important',
                  }}
                >
                 Lets Talk
                </Button>
              </Typography>
            </Stack>
          </Box>
          {/* <div className="hero-cover"></div> */}
        </Box>

      </Box>
 
      </>
  );
}
