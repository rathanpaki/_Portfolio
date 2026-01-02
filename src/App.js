import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Button from "./button";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const useInView = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

const SectionWrapper = ({ children, className }) => {
  const [ref, isVisible] = useInView();
  return (
    <section
      ref={ref}
      className={`${className} section ${isVisible ? "visible" : "blurred"}`}
      data-aos="fade-up"
    >
      {children}
    </section>
  );
};

const Hero = () => (
  <SectionWrapper className="hero-section" id="hero">
    <h1 className="hero-title">Hey, I'm Paki </h1>
    <p className="hero-subtitle">React Developer & Future Software Engineer</p>
    <div className="hero-icons">
      <a
        href="https://github.com/rathanpaki"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/pakirathan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="mailto:pakipakirathan68@gmail.com">
        <FaEnvelope />
      </a>
    </div>
    <a href="https://github.com/rathanpaki" className="button-link">
      <Button />
    </a>
  </SectionWrapper>
);

const About = () => (
  <SectionWrapper className="about-section" id="about">
    <h2 className="section-title">About Me</h2>
    <p className="section-description">
      I'm Paki, an aspiring software engineer passionate about building digital
      solutions. My projects, We Care and EcoGifts, focus on tech for healthcare
      and sustainability. Always exploring new technologies!
    </p>
  </SectionWrapper>
);

const ProjectCard = ({ title, description, link }) => (
  <div className="project-card" onClick={() => window.open(link, "_blank")}>
    <h3 className="project-title">{title}</h3>
    <p className="project-description">{description}</p>
  </div>
);

const Projects = () => (
  <SectionWrapper className="projects-section" id="projects">
    <h2 className="section-title">My Projects</h2>
    <div className="projects-grid">
      <ProjectCard
        title="We Care"
        description="A platform connecting patients with caregivers, featuring verified reviews and an intuitive UI."
        link="https://github.com/rathanpaki/we-_care"
      />
      <ProjectCard
        title="EcoGifts"
        description="Sustainable gifting platform with Web AR experiences, promoting eco-friendly products and practices."
        link="https://github.com/rathanpaki/eco"
      />
    </div>
  </SectionWrapper>
);

const Contact = () => (
  <SectionWrapper className="contact-section" id="contact">
    <h2 className="section-title">Let's Connect</h2>
    <p className="section-description">
      Drop me a message and let's build something awesome together!
    </p>
    <a href="mailto:pakipakirathan68@gmail.com" className="contact-button">
      Say Hi 👋
    </a>
  </SectionWrapper>
);

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
