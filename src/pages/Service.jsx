import Nav from "../components/Nav";
import "../styles/Service.css";
import image from "../img/img.jpg";
import image1 from "../img/compress.jpeg";
import image2 from "../img/civilconst.jpeg";
import image3 from "../img/mechanical.png";
import image4 from "../img/onshore.jpeg";
import image5 from "../img/project21.jpg";
import Footer from "../components/Footer";

const Service = () => {
  let Services = [
    {
      image: image1,
      name: "COMPRESSOR SYSTEM",
      text: "We provide industry standard compressor systems and services by combining our product excellence with dedicated installation and expertise from our designated staff and OEM partners. We design, engineer,assemble and test each compressor package,every project is custom designed for its specific environment and duties. We sell install and provide after sale support services for: Gas booster compressors,Gas engine generators,CNG systems & virtual pipelines Air cooled heat exchangers.",
      class: "left",
      id: crypto.randomUUID(),
    },
    {
      image: image2,
      name: "CIVIL CONSTRUCTION",
      text: "Our service is process-centered from design to implementationas well as general maintenance; we provide innovative solutions for our clients through excellence and service in all aspect of the civil construction. Our civil worksinclude but not limited to: Front-End Engineering Design, Building And Structural Construction, Road & Bridge Constructions, Post/pre Site Preparation Activities (Oil & Gas) etc..",
      class: "right",
      id: crypto.randomUUID(),
    },
    {
      image: image3,
      name: "MECHANICAL CONSTRUCTION",
      text: "H&W Energy provides both industrial and commercial mechanical construction. Our competency in these areas has been unrivalved since our inception. We understand the dynamics of fast-track schedules and rigorous construction standards, and we know what it takes to integrate real components into design-build-details. Our job is to help ensure constructability, maintainability and sustainability. We do that with an optimal blend of technical expertise, delievry services & structured stability. Our mechanical capabilities include but not limited to: Fabrication/Prefabrication, Customized Duct Work, Industrial & Process Piping, BOP (Balance Of Plant),Pipeline Pre-Commisioning etc.",
      class: "left",
      id: crypto.randomUUID(),
    },
    {
      image: image4,
      name: "ONSHORE PIPELINES & STORAGE FACILITY MAINTENANCE",
      text: "H&W Energy also possesses required expertise to provide a complete spectruem of field services. This includes Inspection & maintenance of pipeline & storage facilities, Pipeline pigging & inspection, surveying, mapping, right-of-way acquistion, GIS, environmental permitting, inspection/ construction management and pipeline integrity management, delievery services & structured stability.",
      class: "right",
      id: crypto.randomUUID(),
    },
    {
      image: image5,
      name: "MARINE SERVICE",
      text: "Our capability in marine services is, but not limited to design, contruction, maintenance & procurement; Accomodation Barges, Ocean Vessels, Pipeline Maintenance(Flow Lines), Hydro-Testing, Dams and Canals design and constreuction, Dredging Services, Rig Move, Self-Propelled Spud & Jack-Up-Barges, Installation and upgrade of onshore/onshore production facilities.",
      class: "left",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "ELECTRICAL INSTRUMENTATION",
      text: "Our thorough knowledge in Electrical and instrumentation services is demonstrated in our ability to provide cutting-edge expertise in Power and ICSS for 2 & 3 phase systems,Gas handling Equipment and Fiscal systems. Oue expertise in E&I include: Process Safety, F&G/PAGA Systems, Calibration Services, Control Room Design and Installation, Transmitters/Control Valves and PSV Integration, Start-Up & Commissioning.",
      class: "right",
      id: crypto.randomUUID(),
    },
  ];

  return (
    <div className="service">
      <div className="service-hero">
        <Nav />
        <div className="ser-main-hero">
          <h2>OUR SERVICES</h2>
          <p>
            We have built our business from the ground up with local
            leadership.We know the field, the well, the challenges and how to
            solve them. Our dedicated team of pros is passionate about providing
            high quality solutions to clients worldwide.
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
            <div className="b">
              <img src={service.image} alt="" />
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Service;
