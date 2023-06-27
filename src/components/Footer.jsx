import { TfiAngleDoubleLeft, TfiImport } from "react-icons/tfi";
import "./Footer.css";
import Menu from "../assets/brochure.pdf";

const Footer = () => {
  let top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
              <a href="tel: +234(0)9053747912">+2349053747912</a>
            </div>
            <div className="mail">
              <a href="mailto:info@handwenergy.com">info@handwenergy.com</a>
            </div>
            <div className="download ">
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

          <div className="footer-3">
            <div className="top" onClick={top}>
              <TfiAngleDoubleLeft />
              <span>Back To Top</span>
            </div>
          </div>
        </div>
        <div className="final-footer">
          <div className="copy">Copyright © H&W 2023 </div>
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
