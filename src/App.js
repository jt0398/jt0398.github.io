import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="container-fluid p-0">
      <Nav />
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default App;
