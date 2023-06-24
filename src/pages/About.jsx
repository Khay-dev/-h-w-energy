import Footer from "../components/Footer";
import Nav from "../components/Nav";
import image1 from "../img/abouta.png";
import image2 from "../img/safety.jpeg";
import "../styles/About.css";
import image from "../img/img.jpg";

import Menu from "../assets/brochure.pdf";

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <Nav />
        <div className="abt-main-hero">
          <h2> Our Major Goal Is Getting The Work Done Always. </h2>
          <p>
            With a wealth of experience and a commitment to exellence, We are a
            leading player in the industry. Our dedicated team of professionals
            is passionate about delievering quality services and solutions to
            clients.
          </p>
          <div className="custom-btn btn-13">
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
        <div className="section-1-b">
          <img src={image1} alt="service" />
        </div>
      </section>
      <section className="section-2">
        <div className="section-2-header">Our Client</div>
        <div className="section-2-content">
          <div className="slider-items">
            <div className="logos">
              <img src={image} alt="partner-1" />
              <img src={image} alt="partner-1" />
              <img src={image} alt="partner-1" />
              <img src={image} alt="partner-1" />
              <img src={image} alt="partner-1" />
              <img src={image} alt="partner-1" />
              <img src={image} alt="partner-1" />
              <div className="logos">
                <img src={image} alt="partner-1" />
                <img src={image} alt="partner-1" />
                <img src={image} alt="partner-1" />
                <img src={image} alt="partner-1" />
                <img src={image} alt="partner-1" />
                <img src={image} alt="partner-1" />
                <img src={image} alt="partner-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="section-2-main">
          <div className="section-2-a">
            <div className="section-2-p">
              <p>
                The management of H & W is made up of key professionals with
                vast experience in all our key service areas, having worked
                within and outside the shores of Nigeria..
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
      <section className="section-3-abt">
        <div className="section-3-b">
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
