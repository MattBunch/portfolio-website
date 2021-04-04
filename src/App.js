/*!
 * Start Bootstrap - Agency v5.2.1 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 * 
  <p>
 * @author      Matt Bunch
 * @version     1.0
 * @since       2020-11-20
  <p>
 */

import React from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
// import Team from "./components/Team";
import Py5 from "./components/Py5";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";

import portfolioLinks from "./components/data/portfolio-links";
import navbarLinks from "./components/data/navbar-links";
import aboutLinks from "./components/data/about-links";
import footerLinks from "./components/data/footer-links";

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}></Navbar>

      <Header></Header>

      {/* <Services></Services> */}

      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

      <About aboutLinks={aboutLinks}></About>

      {/* <Team></Team> */}

      <Py5></Py5>

      <Contact></Contact>

      <Footer footerLinks={footerLinks}></Footer>
    </div>
  );
}

export default App;
