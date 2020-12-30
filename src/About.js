import React from "react";
import web from "../src/images/contact.jpg";
// import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact now"
      ></Common>
    </>
  );
};

export default About;
