import { TfiAngleDoubleLeft } from "react-icons/tfi";
import "./Footer.css";
// import Menu from "../assets/brochure.pdf";

const Footer = () => {
	const top = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const currentYear = new Date().getFullYear();
	return (
		<div className="footer">
			<footer>
				<div className="main">
					<div className="footer-1">
						<div className="location">
							<span>
								Plot 392 Trans Amadi Industrial Layout <br /> Port Harcourt,
								Rivers State, Nigeria.
							</span>
						</div>
						<div className="phone">
							<a href="tel: +234(0)8063415446">+2348063415446 </a>
						</div>
            <div className="phone">
							<a href="tel: +234(0)7062321354">+2347062321354</a>
						</div>
						<div className="mail">
							<a href="mailto:info@handwenergy.com">info@handwenergy.com</a>
						</div>
						{/* <div className="download ">
							<a
								href={Menu}
								download="Brochure"
								className="custom-btn btn-13 btn-3"
							>
								{" "}
								<TfiImport />
								DOWNLOAD BROCHURE
							</a>
						</div> */}
					</div>

					<div className="footer-3">
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<div className="top" onClick={top}>
							<TfiAngleDoubleLeft />
							<span>Back To Top</span>
						</div>
					</div>
				</div>
				<div className="final-footer">
					<div className="copy">Copyright © H&W {currentYear} </div>
					<div className="us">
						WEBSITE BY{" "}
						<a href="https://www.instagram.com/ausdauer_co/"> AUSDAEUR.CO</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
