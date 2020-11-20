import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import About2 from "./components/About2";
import Team from "./components/Team";
import Py5 from "./components/Py5";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const portfolioLinks = [
    {
      title: "Threads",
      caption: "Illustration",
    },
    {
      title: "Explore",
      caption: "Graphic Design",
    },
    {
      title: "Finish",
      caption: "Identity",
    },
    {
      title: "Lines",
      caption: "Branding",
    },
    {
      title: "Southwest",
      caption: "Website Design",
    },
    {
      title: "Window",
      caption: "Photography",
    },
    {
      title: "Pizza",
      caption: "I love pizza!",
    },
    {
      title: "doggie",
      caption: "i love my doggie!",
    },
  ];

  return (
    <div className="App">
      <Navbar></Navbar>

      <Header></Header>

      {/* <Services></Services> */}

      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

      {/* <About></About> */}

      {/* <About2></About2> */}

      {/* <Team></Team> */}

      <Py5></Py5>

      <Contact></Contact>

      <Footer></Footer>
    </div>
  );
}

export default App;
