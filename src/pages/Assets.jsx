import Nav from "../components/Nav";
import "../styles/Assets.css";
import image1 from "../img/assets1.jpg";
import image2 from "../img/assets2.jpg";
import image3 from "../img/assets3.jpg";
import image4 from "../img/assets4.jpg";
import image5 from "../img/assets5.jpg";
import image6 from "../img/assets6.jpg";
import image7 from "../img/assets7.jpg";
import image8 from "../img/assets8.jpg";
import image9 from "../img/assets9.jpg";
import image10 from "../img/assets10.jpg";
import image11 from "../img/assets11.jpg";
import image12 from "../img/assets12.jpg";
import Footer from "../components/Footer";

const Assets = () => {
  let Equipments = [
    {
      image: image1,
      name: "HIGH CAPACITY 72” OD 3 PHASE SEPARATORS ",
      id: crypto.randomUUID(),
    },
    {
      image: image3,
      name: "PROCESS EQUIPMENT (LINE HEATER)",
      id: crypto.randomUUID(),
    },
    {
      image: image4,
      name: "CONTROL VALVES ",
      id: crypto.randomUUID(),
    },
    {
      image: image5,
      name: "H&W CAPACITY RESPONSE AND STRATEGY OUTLAY",
      id: crypto.randomUUID(),
    },
    {
      image: image6,
      name: " CAPACITY RESPONSE AND STRATEGY OUTLAY",
      id: crypto.randomUUID(),
    },
    {
      image: image10,
      name: "VERTICAL FLARE KO VESSEL",
      id: crypto.randomUUID(),
    },
    {
      image: image7,
      name: "CONTAINER STORAGE: VALVES, SWITCHES, FITTINGS ",
      id: crypto.randomUUID(),
    },
    {
      image: image9,
      name: "OEM VALVES, SWITCHES, FITTINGS, BOLTS, NUTS, GASKETS, ACCESSORIES",
      id: crypto.randomUUID(),
    },
    {
      image: image2,
      name: "HIGH CAPACITY 72” OD 3 PHASE SEPARATORS ",
      id: crypto.randomUUID(),
    },
    {
      image: image12,
      name: "CAPACITY RESPONSE AND STRATEGY OUTLAY",
      id: crypto.randomUUID(),
    },
    {
      image: image11,
      name: "EQUIPMENT & STORAGE FACILITY / YARD",
      id: crypto.randomUUID(),
    },
    {
      image: image8,
      name: "CONTAINER STORAGE",
      id: crypto.randomUUID(),
    },
  ];

  return (
    <div className="assets">
      <div className="assets-hero">
        <Nav />
        <div className="ass-main-hero">
          <h2>ASSETS & EQUIPMENTS</h2>
          <p>
            At H&W, we pride ourselves on our state of the art assets and
            equipment that enables us to deliver high quality solutions to our
            clients. We continually invest in our assets to stay at the
            forefront of the industry.Our extensive range of assests and
            equipment allows us to efficiently execute projects across various
            sectors.{" "}
          </p>
        </div>
      </div>
      <section className="ass-section-1">
        {Equipments.map((eqipment) => (
          <div className="box" key={eqipment.id}>
            <div className="box-img">
              <img src={eqipment.image} alt="" />
            </div>
            <div className="box-name">{eqipment.name}</div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Assets;
