import Nav from "../components/Nav";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import image1 from "../img/civilconst.jpeg";
import image2 from "../img/project20.jpg";
import image3 from "../img/onshore.jpeg";
import about from "../img/habout.jpeg";
import Footer from "../components/Footer";
import Menu from "../assets/brochure.pdf";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
const Home = () => {
    const Projects = [
        {
            image: image1,
            id: crypto.randomUUID(),
        },
        {
            image: image2,
            id: crypto.randomUUID(),
        },
        {
            image: image3,
            id: crypto.randomUUID(),
        },
    ];

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title> H&W </title>
            </Helmet>
            <div className="home">
                <div className="hero">
                    <Nav />
                    <div className="main-hero">
                        <h2
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >
                            H&W Energy
                        </h2>
                        <p
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >
                            Energized and engaged in moving foward as a team to
                            get the job done right, every time,providing
                            outstanding client support,operating excellence and
                            industry knowledge to ensure reliable and consistent
                            performance.
                        </p>
                        <div
                            className="hero-btn"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >
                            <div className="custom-btn btn-13">
                                <a href={Menu} download="Brochure">
                                    <span>Download Brochure</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section-1">
                    <div className="section-1-header">Who We Are</div>
                    <div className="section-1-text">
                        From Multinational to locally based companies, H&W
                        Energy limited provides outstanding expertise and
                        infrastructure to support the most diverse range of
                        services from well service ,mechanical & civil
                        construction etc. Whatever we operate we stand by our
                        clients, and the work we do.
                    </div>
                    <div className="custom-btn btn-13 btn-3">
                        <Link to="/about">Learn More</Link>
                    </div>
                </section>
                <section className="section-3">
                    <div className="section-3-a">
                        <div className="section-title">Our Service</div>
                        <div className="section-text">
                            At H&W Energy Limited our services and solutions are
                            scalable to match each of our clients unique
                            demands. W e back these with ancillary services that
                            deliver added value and support our offerings with
                            some of the most experienced professionals in the
                            industry.
                        </div>
                        <div className="custom-btn btn-13 btn-3">
                            <Link to="/service">See More</Link>
                        </div>
                    </div>
                    <div
                        className="section-3-b"
                        data-aos="zoom-in-left"
                        data-aos-duration="1000"
                    >
                        <img src={about} alt="service" />
                    </div>
                </section>
                <section className="section-4">
                    <div className="section-4-a">
                        <div className="section-header">Our Projects</div>
                        <div className="section-4-p">
                            {" "}
                            Explore our portfolio of successful projects that
                            showcases our expertise and commitment to
                            delievering exceptional results. From offshore
                            installations to complex engineering projects, we
                            have a proven track record of executing projects
                            with Precision, Innovation, and Safety at the
                            forefront.Below are some of our featured projects.
                        </div>
                    </div>
                    <div className="section-4-b">
                        {Projects.map((project) => (
                            <div
                                className="box"
                                key={project.id}
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="900"
                            >
                                <div className="box-img">
                                    <img src={project.image} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link to="/projects">
                        <button
                            type="button"
                            className="custom-btn btn-13 btn-3"
                        >
                            <span>See All</span>
                        </button>
                    </Link>
                </section>
                <section className="section-5">
                    <div className="section-header">Get In Touch</div>
                    <div className="text">
                        H&W is your reliable partner. We are committed to
                        delievering excellence ,ensuring safety, and providing
                        cost effective solutions. Partner with us and experience
                        the highest standards of professionalism and quality in
                        this industry.
                    </div>
                    <Link to="/contact">
                        <button
                            type="button"
                            className="custom-btn btn-13 btn-3"
                        >
                            <span>Contact Us!</span>
                        </button>
                    </Link>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default Home;
