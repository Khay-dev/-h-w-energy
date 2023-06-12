import Nav from "../components/Nav";
import "../styles/Service.css";
import image from "../img/img.jpg";
import Footer from "../components/Footer";

const Service = () => {
  let Services = [
    {
      image: image,
      name: "Lorem1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?",
      class: "left",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?",
      class: "right",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?",
      class: "left",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?",
      class: "right",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?",
      class: "left",
      id: crypto.randomUUID(),
    },
    {
      image: image,
      name: "Lorem1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum libero nihil veritatis minima quibusdam enim repellat nostrum! Atque, illum?",
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            laboriosam praesentium illum corporis minima repudiandae, dicta
            doloremque, similique eaque officia non deleniti cum nemo.{" "}
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
      <Footer/>
    </div>
  );
};

export default Service;
