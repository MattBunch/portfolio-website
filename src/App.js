import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Team from "./components/Team";
import Py5 from "./components/Py5";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

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
      photoLink:
        "https://c8.alamy.com/comp/GWRJ0F/portfolio-written-by-hand-3d-illustration-realistic-hand-writing-on-GWRJ0F.jpg",
    },

    {
      title: "Digital Rain",
      caption: "Animation",
      clickLink: "https://github.com/MattBunch/Digital-Rain-Project",
      photoLink: "https://i.ibb.co/Fn9V3GM/matriximage.png",
    },
  ];

  const aboutLinks = [
    {
      date: "1996-2020",
      imageLink: "",
      subheading: "My life!",
      bodytext: "hey",
    },
    {
      date: "2020-2096",
      imageLink: "",
      subheading: "My life ends! Oh no",
      bodytext: "bye",
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

      <Footer></Footer>
    </div>
  );
}

export default App;
