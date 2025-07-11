import Nav from "../components/Nav";
import { TfiImport } from "react-icons/tfi";
import Menu from "../assets/brochure.pdf";
import "../styles/Contact.css";
import { Helmet } from "react-helmet";
const Contact = () => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>H&W|Contact </title>
			</Helmet>
			<div className="contact">
				<div className="contact-hero">
					<Nav />
				</div>
				<section className="section-main">
					<div className="section-a">
						<p>Get In</p>
						<span>Touch</span>
						<p>With Us</p>
					</div>
					<div className="section-b">
						<div className=" part part1">
							<span>
								Plot 392 Trans Amadi Industrial Layout <br /> Port Harcourt,
								Rivers State, Nigeria.
							</span>
						</div>
						<div className="part part2">
							<a href="tel: +234(0)8063415446">+2348063415446   </a>
						</div>
						<div className="part part2">
            <a href="tel: +234(0)7062321354">+2347062321354   </a>
            </div>
						<div className="part part3">
							<a href="mailto:info@handwenergy.com">info@handwenergy.com</a>
						</div>
						<div className="part part4 ">
							<a
								href={Menu}
								download="Brochure"
								className="custom-btn btn-13 btn-3"
							>
								{" "}
								<TfiImport />
								DOWNLOAD BROCHURE
							</a>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Contact;
