import Nav from "../components/Nav";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import image from "../img/img.jpg";
import Footer from "../components/Footer";
const Home = () => {
  let Projects = [
    {
      image: image,
      name: "Lorem1",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem2",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem3",
      id: crypto.randomUUID(),
    },
  ];
  return (
    <div className="home">
      <div className="hero">
        <Nav />
        <div className="main-hero">
          <h2>H & W Energy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            laboriosam praesentium illum corporis minima repudiandae, dicta
            doloremque, similique eaque officia non deleniti cum nemo.{" "}
          </p>
          <div className="hero-btn">
            <div className="custom-btn btn-13">
              <a href="">
                <span>Download Brochure</span>
              </a>
            </div>
            <div className="custom-btn btn-13">
              <Link to="/about">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      <section className="section-1">
        <div className="section-1-header">Who We Are</div>
        <div className="section-1-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet unde,
          doloremque dolorem nihil deserunt non quaerat tempora similique,
          debitis exercitationem rerum praesentium officiis saepe laudantium
          voluptas eum at temporibus. Vero pariatur possimus non rerum, itaque
          laborum commodi maxime. Odio, laborum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusamus enim facere quia sit tempore
          vero nemo laudantium natus dolores error!
        </div>
        <div className="custom-btn btn-13 btn-3">
          <Link to="/about">Learn More</Link>
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
      <section className="section-3">
        <div className="section-3-a">
          <div className="section-title">Our Service</div>
          <div className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptate sit quae? Asperiores ullam atque provident suscipit
            exercitationem itaque consectetur inventore maxime ea et corrupti,
            tenetur deleniti numquam ab a officiis, quaerat nostrum magnam fuga
            libero qui consequatur. Odit, laborum itaque? Excepturi Lorem ipsum.
          </div>
          <div className="section-list">
            <ul>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          <div className="custom-btn btn-13 btn-3">
            <Link to="/service">See More</Link>
          </div>
        </div>
        <div className="section-3-b">
          <img src={image} alt="service" />
        </div>
      </section>
      <section className="section-4">
        <div className="section-4-a">
          <div className="section-header">Our Projects</div>
          <div className="section-4-p">
            {" "}
            Lorem ipsum dolor sit amet adipisicing elit. Molestiae nobis,
            tempore eligendi ex modi necessitatibus cumque quasi sapiente dolore
            ab vel repellat voluptate minima ut adipisci facilis consequatur est
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, culpa.
          </div>
        </div>
        <div className="section-4-b">
          {Projects.map((project) => (
            <div className="box" key={project.id}>
              <div className="box-img">
                <img src={project.image} alt="" />
              </div>
              <div className="box-name">{project.name}</div>
            </div>
          ))}
        </div>
        <Link to="/projects">
          <button className="custom-btn btn-13 btn-3">
            <span>See More</span>
          </button>
        </Link>
      </section>
      <section className="section-5">
        <div className="section-header">Get In Touch</div>
        <div className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          optio, non voluptates, totam voluptatibus ad dolores quaerat porro
          consectetur iusto eveniet et est. Maiores aliquam ipsum recusandae eos
          libero rerum.
        </div>
        <a href="mailto:info@handwenergy.com">
          <button className="custom-btn btn-13 btn-3">
            <span>Contact Us!</span>
          </button>
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
