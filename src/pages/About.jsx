import Footer from "../components/Footer";
import Nav from "../components/Nav";
import image1 from "../img/abouta.png";
import image2 from "../img/safety.jpeg";
import grid1 from "../img/Agip.png";
import grid2 from "../img/agpc.png";
import grid3 from "../img/Daewoo.jpeg";
import grid4 from "../img/wagpco.jpeg";
import grid5 from "../img/heritage.svg";
import grid6 from "../img/NLNG.jpeg";
import grid7 from "../img/npdc.png";
import grid8 from "../img/Seplat.jpeg";
import grid9 from "../img/Total.jpeg";
import "../styles/About.css";
import Menu from "../assets/brochure.pdf";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about">
      <div className="about-hero">
        <Nav />
        <div className="abt-main-hero">
          <h2
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            {" "}
            Our Major Goal Is Getting The Work Done Always.{" "}
          </h2>
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            With a wealth of experience and a commitment to exellence, We are a
            leading player in the industry. Our dedicated team of professionals
            is passionate about delievering quality services and solutions to
            clients.
          </p>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="custom-btn btn-13"
          >
            <a href={Menu} download="Brochure">
              <span>Download Brochure</span>
            </a>
          </div>
        </div>
      </div>
      <section className="section-1-abt">
        <div className="section-1-a">
          <div className="section-title">
            At H&W we strive to fulfill our missions commitment by getting the
            job done.
          </div>
          <div className="section-text">
            That means completing our work efficiently to industry and client
            standards without injury to people, damage to propertyor adverse
            impact to the environment. Our comprehensive solutions are designed
            to meet the unique challengesof working in harsh offshore
            environments.
          </div>
        </div>
        <div
          className="section-1-b"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
        >
          <img src={image1} alt="service" />
        </div>
      </section>
      <section className="section-2">
        <div className="section-2-main">
          <div className="section-2-a">
            <div className="section-2-p">
              <p>
                The management of H&W is made up of key professionals with vast
                experience in all our key service areas, having worked within
                and outside the shores of Nigeria..
              </p>
            </div>
          </div>
          <div className="section-2-b">
            <p>
              At H&W Energy we are committed to being a leader in the service we
              provide eg Providing services which exceed our clients
              expectations,Maintaining a work environment that is satisfaying to
              our employees and generating a financial return to our
              shareholders that continued investment in the company .
            </p>
          </div>
        </div>
      </section>
      <section className="section-4-about">
        <div className="section-4-a">
          <div className="section-title">Our Clients</div>
          <div className="section-text">
            At H&W, we take pride in our strong partnerships and collaborations
            with a diverse range of exceptional clients. With their trust and
            support, we have been able to achieve remarkable success together.
            Here are just a few of the esteemed organizations we have had the
            privilege to work with:.
          </div>
        </div>
        <div className="section-4-b">
          <div className="b-imgs">
            <img src={grid1} alt="" />
            <img src={grid2} alt="" /> <img src={grid6} alt="" />{" "}
            <img src={grid3} alt="" /> <img src={grid7} alt="" />{" "}
            <img src={grid4} alt="" /> <img src={grid8} alt="" />{" "}
            <img src={grid5} alt="" /> <img src={grid9} alt="" />{" "}
          </div>
        </div>
      </section>
      <section className="section-3-abt">
        <div
          className="section-3-b"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          <img src={image2} alt="service" />
        </div>
        <div className="section-3-a">
          <div className="section-title">
            We make Safety an integral part of our mission and our daily work.
          </div>
          <div className="section-text">
            Safety and quality are our top priorities. We adhere to the highest
            international standards and best practices to ensure the well being
            of our employees, the protection of the environment,and the
            satisfaction of our clients. Our deicated safety team continiuosly
            monitors and implements safety protocolsto mitigate risks and
            mantain a safe environment at all times.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
