import Nav from "../components/Nav";
import "../styles/Service.css";
import image1 from "../img/compress.jpeg";
import image2 from "../img/civilconst.jpeg";
import image3 from "../img/mechanical.png";
import image4 from "../img/onshore.jpeg";
import image5 from "../img/project21.jpg";
import image6 from "../img/image5.jpg";
import Footer from "../components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
const Service = () => {
  const Services = [
    {
      image: image1,
      name: "COMPRESSOR SYSTEM",
      text: "H&W Energy Ltd. provides custom-designed compressor systems, partnering with leading OEMs to deliver high-quality, efficient solutions. Our expert team designs, assembles, and tests each system to meet specific operational needs, ensuring reliability in demanding environments. We offer gas booster compressors for pipelines and CNG stations, gas engine generators for clean power in industrial or remote sites, CNG systems and virtual pipelines for cost-effective gas delivery, and air-cooled heat exchangers for water-free cooling. With professional installation and ongoing support, we ensure tailored, high-performance solutions.Contact us for a quote.",
      class: "left",
      id: crypto.randomUUID(),
      data: "zoom-in-left",
    },
    {
      image: image2,
      name: "CIVIL CONSTRUCTION",
      text: "H&W Energy Limited provides top-tier civil construction services, focusing on sustainability, quality, and strict adherence to Health, Safety, and Environmental (HSE) standards. Our expert team delivers end-to-end solutions, from design to maintenance, for oil & gas, infrastructure, commercial, residential, and industrial projects. We offer Front-End Engineering Design (FEED), building and structural construction, road and bridge construction, and site preparation, using eco-friendly materials, energy-efficient methods, and waste reduction strategies. Our commitment to HSE ensures safe, compliant, and durable projects. Contact us for a consultation or quote.",
      class: "right",
      id: crypto.randomUUID(),
      data: "zoom-in-right",
    },
    {
      image: image3,
      name: "MECHANICAL CONSTRUCTION",
      text: "H&W Energy Limited delivers expert mechanical construction services for industrial and commercial projects, focusing on precision, sustainability, and HSE compliance. Our experienced team provides end-to-end solutions, from design to maintenance, including off-site fabrication, customized ductwork, industrial piping, Balance of Plant (BOP) systems, pipeline pre-commissioning, and system integration. We prioritize energy-efficient, eco-friendly designs to reduce costs and environmental impact. Serving industries like oil & gas, energy, and manufacturing, we ensure quality, timely delivery, and safety. Contact us for a consultation or quote.",
      class: "left",
      id: crypto.randomUUID(),
      data: "zoom-in-left",
    },
    {
      image: image4,
      name: "ONSHORE PIPELINES & STORAGE FACILITY MAINTENANCE",
      text: "H&W Energy Limited provides expert mechanical construction services for industrial and commercial projects, emphasizing precision, sustainability, and HSE compliance. Our skilled team delivers tailored solutions, including off-site fabrication, customized ductwork, industrial piping, Balance of Plant (BOP) systems, pipeline pre-commissioning, and full system integration. We prioritize energy-efficient designs to reduce costs and environmental impact. Serving industries like oil & gas, energy, and manufacturing, we ensure quality, timely delivery, and ongoing maintenance. Contact us for a consultation or quote.",
      class: "right",
      id: crypto.randomUUID(),
      data: "zoom-in-right",
    },
    {
      image: image5,
      name: "PIPELINE CONTRUCTIONS & REPAIRS",
      text: "H&W Energy Ltd. delivers expert pipeline construction and repair services for onshore and offshore oil and gas applications. Our team provides turnkey solutions, including design, construction, inspection, and maintenance, ensuring safety, efficiency, and environmental compliance. Services encompass full EPC pipeline construction, integrity management with intelligent pigging and NDT, emergency and planned repairs, flowline upgrades, hydrostatic testing, corrosion control via cathodic protection, and right-of-way maintenance. We meet ASME, API, and ISO standards, offering tailored, high-quality solutions. Contact us for a consultation or quote.",
      class: "left",
      id: crypto.randomUUID(),
      data: "zoom-in-left",
    },
    {
      image: image6,
      name: "ELECTRICAL INSTRUMENTATION",
      text: "H&W Energy Ltd. delivers specialized Electrical & Instrumentation (E&I) services for energy, industrial, and commercial sectors, ensuring safety, efficiency, and compliance. Our expert team provides end-to-end solutions, including design, installation, and maintenance of 2- and 3-phase power systems, integrated control and safety systems (ICSS), gas handling equipment, fiscal metering, fire and gas (F&G) systems, public address and general alarm (PAGA) systems, calibration, control room design, transmitter/control valve/PSV integration, and start-up/commissioning. We prioritize cutting-edge technology, tailored solutions, and strict adherence to safety and regulatory standards. Contact us for a consultation or quote.",
      class: "right",
      id: crypto.randomUUID(),
      data: "zoom-in-right",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>H&W|Service </title>
      </Helmet>
      <div className="service">
        <div className="service-hero">
          <Nav />
          <div className="ser-main-hero">
            <h2
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              OUR SERVICES
            </h2>
            <p
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              We have built our business from the ground up with local
              leadership.We know the field, the well, the challenges and how to
              solve them. Our dedicated team of pros is passionate about
              providing high quality solutions to clients worldwide.
            </p>
          </div>
        </div>
        <section className="ser-section-1">
          {Services.map((service) => (
            <div className={service.class} key={service.id}>
              <div className="a">
                <div className="name">{service.name}</div>
                <div className="text">{service.text}</div>
              </div>
              <div
                className="b"
                data-aos={service.data}
                data-aos-duration="1000"
              >
                <img src={service.image} alt="" />
              </div>
            </div>
          ))}
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Service;
