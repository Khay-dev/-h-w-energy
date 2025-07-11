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
import image25 from "../img/hwa.jpg";
import image26 from "../img/hwb.jpg";
import image27 from "../img/hwc.jpg";
import image28 from "../img/hwd.jpg";
import image29 from "../img/new1.jpg";
import image30 from "../img/new2.jpg";
import image31 from "../img/new3.jpg";
import image32 from "../img/new4.jpg";
import image33 from "../img/new5.jpg";
import image34 from "../img/new6.jpg";
import image35 from "../img/shell1.jpg";
import image36 from "../img/shell2.jpg";
import image37 from "../img/shell3.jpg";
import image38 from "../img/shell4.jpg";
import image39 from "../img/shell5.jpg";
import image40 from "../img/shell6.jpg";
import image41 from "../img/seplat.jpg";
import image42 from "../img/seplat2.jpg";
import image43 from "../img/seplat3.jpg";
import image44 from "../img/seplat4.jpg";
import image45 from "../img/seplat5.jpg";
import image46 from "../img/seplat6.jpg";
import image47 from "../img/akaso1.jpg";
import image48 from "../img/akaso2.jpg";
import image49 from "../img/akaso3.jpg";
import image50 from "../img/akaso4.jpg";
import image51 from "../img/akaso5.jpg";
import image52 from "../img/akaso6.jpg";
import image53 from "../img/final1.jpg";
import image54 from "../img/final2.jpg";
import image55 from "../img/final3.jpg";
import image56 from "../img/final4.jpg";
import image57 from "../img/final5.jpg";
import image58 from "../img/final6.jpg";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
const Projects = () => {
	const slides = [
		{
			title: "Heritage Operational Energy Service Limited",
			description: "Job: Relocation Of Afieseri Gas Generator ",
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
		{
			title: "Project",
			description:
				"Job: Waukesha pump shelter and overhead crane installation at UPS OML 30",
			image1: image25,
			image2: image26,
			image3: image27,
			image4: image28,

			id: crypto.randomUUID(),
		},
		{
			title: "Heritage Energy Operationall Services Limited",
			description:
				"Job: Olomoro C700/C800 Gas Compressor Installation project.",
			image1: image29,
			image2: image30,
			image3: image31,
			image4: image32,
			image5: image33,
			image6: image34,

			id: crypto.randomUUID(),
		},
		{
			title: "Shell Nigeria Gas",
			description: "Job: Construction of ilogbo access road to SNG PRMS",
			image1: image35,
			image2: image36,
			image3: image37,
			image4: image38,
			image5: image39,
			image6: image40,

			id: crypto.randomUUID(),
		},
		{
			title: "Seplat Petroleum Development Company",
			description:
				"Job: Total replacement of 6 x 11.6km for sapele 17T, 18T, 19T and 20T",
			image1: image41,
			image2: image42,
			image3: image43,
			image4: image44,
			image5: image45,
			image6: image46,

			id: crypto.randomUUID(),
		},
		{
			title: "NEPL",
			description: "Job: Construction of AKASO WELL 7L AND 9S PROJECT",
			image1: image47,
			image2: image48,
			image3: image49,
			image4: image50,
			image5: image51,
			image6: image52,

			id: crypto.randomUUID(),
		},
		{
			title: "SERVICE FOR WESTERN ASSET LOCATIONS",
			description: "Job: PROVISION OF CONSTRUCTION OF BULKLINES/MANIFOLDS & GAS PIPELINES (CALL OFF SERVICES)",
			image1: image53,
			image2: image54,
			image3: image55,
			image4: image56,
			image5: image57,
			image6: image58,

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
				<title>H&W|Project </title>
			</Helmet>

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
								{[
									slide.image1,
									slide.image2,
									slide.image3,
									slide.image4,
									slide.image5,
									slide.image6,
								]
									.filter(Boolean)
									.map((img, idx) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										<img src={img} alt="" key={idx} />
									))}
							</div>
						</div>
					))}
				</section>
				<Footer />
			</div>
		</>
	);
};

export default Projects;
