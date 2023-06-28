import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/Project.css";
import Menu from "../assets/brochure.pdf";

import image1 from "../img/abouta.png";
import image2 from "../img/project15.jpg";
import image3 from "../img/project1.jpg";
import image4 from "../img/project2.jpg";
import image5 from "../img/project3.jpg";
import image6 from "../img/project4.jpg";
import image7 from "../img/project5.jpg";
import image8 from "../img/project6.jpg";
import image9 from "../img/project7.jpg";
import image10 from "../img/project8.jpg";
import image11 from "../img/project9.jpg";
import image12 from "../img/project10.jpg";
import image13 from "../img/project11.jpg";
import image14 from "../img/project12.jpg";
import image15 from "../img/project13.jpg";
import image16 from "../img/project14.jpg";
import image17 from "../img/project23.jpg";
import image18 from "../img/project16.jpg";
import image19 from "../img/project17.jpg";
import image20 from "../img/project18.jpg";
import image21 from "../img/project19.jpg";
import image22 from "../img/project20.jpg";
import image23 from "../img/project21.jpg";
import image24 from "../img/project22.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  const slides = [
    {
      title: "Heritage Operational Energy Service Limited",
      description: "Job:Relocation Of Afieseri Gas Generator ",
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,

      id: crypto.randomUUID(),
    },
    {
      title: "Seplat Petroleum Development Company",
      description:
        "Job: Fabrication And Installation Of 4 Pig Traps (4 Receivers) At Oben  ",
      image1: image5,
      image2: image6,
      image3: image15,
      image4: image16,

      id: crypto.randomUUID(),
    },
    {
      title: "Seplat Petroleum Development Company",
      description: "Job: Okporhuru-Orogho Gas Liquid Cylindrical Clone Glcc ",
      image1: image11,
      image2: image12,
      image3: image9,
      image4: image10,

      id: crypto.randomUUID(),
    },
    {
      title: "Seplat Petroleum Development Company",
      description:
        "Job: Sapele Gas Plant Decommissioning And Electrical Modification Works",
      image1: image7,
      image2: image8,
      image3: image13,
      image4: image14,

      id: crypto.randomUUID(),
    },
    {
      title: "Seplat Petroleum Development Company",
      description: "Job: Epc Of Ohaji South Remote Oil Manifold Expansion",
      image1: image18,
      image2: image19,
      image3: image20,
      image4: image21,

      id: crypto.randomUUID(),
    },
    {
      title: "Seplat Petroleum Development Company",
      description:
        "Job: Struction Of Flowlines And Gas-Liquid-Cylindrical-Cyclone (GLCC) Seperator At Ohaji ",
      image1: image17,
      image2: image22,
      image3: image23,
      image4: image24,

      id: crypto.randomUUID(),
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="projects">
      <div className="proj-hero">
        <Nav />
        <div className="proj-main-hero">
          <h2
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            PROJECTS
          </h2>
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Here we showcase some of our remarkable endeavors we have
            undertaken. At H&W we take pride in our diverse portfolio of
            projects across various industries. From concept to completion, We
            are dedicated to delievering innovative and sustainable solutions
            that exceed clients expectations.{" "}
          </p>
          <div
            className="custom-btn btn-13"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <a href={Menu} download="Brochure">
              <span>Download Brochure</span>
            </a>
          </div>
        </div>
      </div>
      <section className="section-project">
        {slides.map((slide) => (
          <div className="box" key={slide.id}>
            <div className="text-contain">
              <div className="title">{slide.title}</div>
              <div className="text">{slide.description}</div>
            </div>
            <div className="box-img">
              <img src={slide.image1} alt="" />
              <img src={slide.image2} alt="" />
              <img src={slide.image3} alt="" />
              <img src={slide.image4} alt="" />
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
