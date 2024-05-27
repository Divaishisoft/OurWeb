/* eslint-disable no-undef */
import { Box } from "@mui/material";
import "../../styles/Hero.css";
import banner from "../../assets/banner.gif"
export default function HeroComponent() {
  return (
    <>
      <Box className="dark-section hero-banner offer" sx={{ backgroundImage:{banner} }} >
        <div id='#' className="container px-3" style={{ padding: '250px 0' }}>
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-white text-uppercase fw-bold">We think <span style={{ color: '#84c020' }}>Future</span></h4>
              <h2 className="text-white fw-bold">DIVAISHISOFT DEVELOPMENT SOLUTIONS</h2>
              <h2 className="fw-bold" style={{ color: '#0593d4' }}>SOFTWARE DEVELOPMENT COMPANY</h2>
              <h6 className="text-white">We are an enterprise software development</h6>
              <h6 className="text-white">company that is inspired by the future</h6>
            </div>
          </div>
        </div>
      </Box>
 
      </>
  );
}
