/*!
 * Start Bootstrap - Agency v5.2.1 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */

import React from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Team from "./components/Team";
import Py5 from "./components/Py5";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";

import portfolioGIF from "./assets/img/portfolio-animation-min-size.gif";
import matrixGIF from "./assets/img/matrix-animation-min-size.gif";
import sortGIF from "./assets/img/bubble-sort-animation-min.gif";

import WICTSLogo from "./assets/img/about/WICTS-Logo.png";

function App() {
  const navbarLinks = [
    {
      title: "Portfolio",
      link: "#portfolio",
    },
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ];

  const portfolioLinks = [
    {
      title: "Portfolio Website",
      caption: "Web Development",
      clickLink: "https://github.com/MattBunch/portfolio-website",
      photoLink: portfolioGIF,
    },

    {
      title: "Digital Rain",
      caption: "Animation",
      clickLink: "https://github.com/MattBunch/Digital-Rain-Project",
      photoLink: matrixGIF,
    },

    {
      title: "Sorting Visualization",
      caption: "Data Structures",
      clickLink: "https://github.com/MattBunch/Sorting-Visualization",
      photoLink: sortGIF,
    },
  ];

  const aboutLinks = [
    {
      date: "July 2020 - June 2021",
      imageLink: WICTSLogo,
      subheading: "Master of Software Development",
      bodytext:
        "At the Wellington ICT School, I learned core competencies of programming including Java, version control, networking, databases, security, web systems, Agile, development methodologies, & design patterns.",
    },
  ];

  const linkedinLink = "https://nz.linkedin.com/in/matthew-bunch-b5bab71b9";
  const linkedinLogo = "fa fa-linkedin";

  const githubLink = "https://github.com/MattBunch/";
  const githubLogo = "fa fa-github";

  // const twitterLogo = "fa fa-twitter";
  // const facebookLogo = "fa fa-facebook-f";

  const footerLinks = [
    {
      link: linkedinLink,
      icon: linkedinLogo,
    },
    {
      link: githubLink,
      icon: githubLogo,
    },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}></Navbar>

      <Header></Header>

      {/* <Services></Services> */}

      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

      <About aboutLinks={aboutLinks}></About>

      {/* <About2></About2> */}

      {/* <Team></Team> */}

      <Py5></Py5>

      <Contact></Contact>

      <Footer footerLinks={footerLinks}></Footer>
    </div>
  );
}

export default App;
