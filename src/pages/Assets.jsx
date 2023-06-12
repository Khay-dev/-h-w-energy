import Nav from "../components/Nav";
import "../styles/Assets.css";
import image from "../img/img.jpg";

const Assets = () => {
  let Equipments = [
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
    {
      image: image,
      name: "Lorem4",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem5",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem6",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem7",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem8",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem9",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem10",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem11",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem12",
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            laboriosam praesentium illum corporis minima repudiandae, dicta
            doloremque, similique eaque officia non deleniti cum nemo.{" "}
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
    </div>
  );
};

export default Assets;
