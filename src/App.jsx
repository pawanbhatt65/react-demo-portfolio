import { Fragment } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <Fragment>
      <main className="main">
        <Header />
        <Home />
        <Services />
        <Skills />
        <Portfolio />
        <Resume />
        <Testimonial />
        <Pricing />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </Fragment>
  );
}

export default App;
