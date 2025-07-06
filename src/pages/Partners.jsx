/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/PartnersPage.css";
import { Helmet } from "react-helmet";
import image1 from "../img/Road.jpg";
import image2 from "../img/euro.jpg";
import image3 from "../img/kolink.webp";
import image4 from "../img/arnikon.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const partnersData = [
  {
    name: 'Arnikon Engineering',
    description: 'Arnikon Engineering proudly serves as a trusted Original Equipment Manufacturer (OEM) for H&W Energy Limited, delivering advanced industrial crane solutions designed for performance, durability, and innovation.',
    products: [
      'Overhead Crane Sets (1-40 tons, modular, high-performance)',
      'Crane Kits (electric hoists, end carriages, customizable)',
      'Crane Accessories & Spare Parts (remote controls, load cells)',
      'Disassemblable Lifting Groups (easy installation, aesthetic design)',
      'R&D-Driven Wheel Blocks (patented, adjustable, durable)',
      'KULEKON Tower Cranes (large-scale construction solutions)',
    ],
    capabilities: [
      'Engineering Excellence: Tailored crane system designs',
      'R&D Innovation: Proprietary components for enhanced functionality',
      'Strict Quality Control: ISO, FEM, DIN standards',
      'Support & Maintenance: Full technical support',
    ],
    reasons: [
      'Proven OEM reliability',
      'Modular, customizable systems',
      'Long-lasting equipment with low maintenance',
      'End-to-end support',
    ],
    website: "https://www.arnikon.com/",
    image: image4,
  },
  {
    name: 'Shanghai Kolink Valve Co. Ltd',
    description: 'Shanghai Kolink Valve Co., Ltd is a trusted OEM partner for H&W Energy Limited, delivering precision-engineered industrial valve solutions for oil & gas, petrochemicals, power generation, mining, and water treatment.',
    products: [
      'Knife Gate Valves (bi/uni-directional, pneumatic/electric)',
      'Gate Valves (API 600/603, high-cycle durability)',
      'Floating Ball Valves (fire-safe, lockable handles)',
      'Trunnion Ball Valves (full-port, high-temperature)',
      'Butterfly Valves (concentric, eccentric designs)',
      'Check Valves (swing, piston, pressure seal)',
      'Globe Valves (cast/forged steel, flanged ends)',
      'Plug Valves (PTFE/PFA-lined, high-pressure)',
      'Forged Steel Valves (Class 2500 ratings)',
      'Cast Iron Valves (DIN/BS for waterworks)',
    ],
    capabilities: [
      'Engineering Flexibility: Custom valve designs',
      'Certified Quality: API, ISO, ANSI, DIN compliance',
      'Performance in Harsh Conditions: High-pressure, corrosive environments',
      'OEM Commitment: Rapid support for projects',
    ],
    reasons: [
      'API & ISO certified products',
      'Customized engineering solutions',
      'Reliable valves for high-risk environments',
      'Strong technical & after-sales support',
    ],
    website: "https://www.kolinkvalves.com/",
    image: image3
  },
  {
    name: 'Euro Gas Systems SRL',
    description: 'Euro Gas Systems SRL (EGS) is a trusted OEM partner for H&W Energy Limited, specializing in high-quality gas compressor solutions for energy, oil, and gas industries.',
    products: [
      'Packaged Gas Compressors (30 KW to 5.0 MW)',
      'Packaging Service (custom or client-designed)',
      'Steel Fabrication (PED/ASME-certified pressure vessels)',
      'Re-Packaging of Existing Equipment (full support)',
      'Air Cooled Heat Exchangers (induced/forced draft)',
      'Centrifugal Products (gas turbines, turbomachinery)',
    ],
    capabilities: [
      'Engineering Excellence: Custom compressor designs',
      'Advanced Manufacturing: PED/ASME-certified products',
      'Customization & Packaging: Optimized system efficiency',
      'Aftermarket Support: Maintenance, commissioning, training',
      'Vibration Analysis & Diagnostics: Early issue detection',
      'NDT Services: Ensuring safety and reliability',
    ],
    reasons: [
      '30+ years of gas compression expertise',
      'Certified, high-efficiency systems',
      'Flexible packaging/re-packaging solutions',
      'Comprehensive aftermarket support',
    ],
    website: 'https://eurogassystems.com/',
    image: image2
  },
  {
    name: 'Gunnebo Safe Storage',
    description: 'Gunnebo Safe Storage partners with H&W Energy Limited as an OEM, delivering high-security storage solutions to protect assets from burglary, fire, and explosion.',
    products: [
      'Safe Deposit Box Systems (automated, mechanical)',
      'Access Control Solutions (biometric, RFID, SafeT)',
      'Strong Rooms and Vault Doors (burglary, fire-resistant)',
      'Safes and Security Cabinets (fire, burglary-resistant)',
      'High-Security Locks (Gunnebo Encry, encrypted)',
      'Software Solutions (Safe Control Manager, Gunnebo iQ)',
      'Secure Battery Storage (fire-resistant, suppression systems)',
    ],
    capabilities: [
      'High-Security Safes: Certified for cash/documents',
      'Vaults & Vault Doors: Modular, certified solutions',
      'Safe Deposit Lockers: Automated/manual systems',
      'Cash Management Solutions: Smart deposit/recycling',
      'Fire & Burglary Protection: Fireproof cabinets',
      'Digital Security: Biometric, remote monitoring',
      'Certified Compliance: EN, UL standards',
    ],
    reasons: [
      'Unmatched security with EN, UL certifications',
      'Operational reliability for high-risk sectors',
      'Customized security solutions',
      'Global expertise with local support',
      'Digital integration for facility management',
    ],
    website: "https://gunnebo.com.au/products/high-security-entry/security-doors/",
    image: image1
  },
];

const PartnerCard = ({ partner }) => (
  <div className="partner-container">
    <div className="partner-sticky-name">{partner.name}</div>
    <div className="partner-details">
      <img
        src={partner.image}
        alt={`${partner.name} visual`}
        className="partner-image"
      />
      <p className="partner-description">{partner.description}</p>
      <div className="partner-section">
        <h3>Product Portfolio</h3>
        <ul className="partner-list">
          {partner.products.map((item, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="partner-section">
        <h3>Core Capabilities</h3>
        <ul className="partner-list">
          {partner.capabilities.map((item, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="partner-section">
        <h3>Why H&W Energy Partners with {partner.name}</h3>
        <ul className="partner-list">
          {partner.reasons.map((item, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {partner.website && (
        <div className="partner-website">
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="partner-website-link"
          >
            Visit Website
          </a>
        </div>
      )}
    </div>
  </div>
);

const PartnersPage = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>H&W | Partners</title>
      </Helmet>
      <div className="partners-page">
        <div className="partners-hero">
        <Nav />
        <header className="page-header">
          <h1  data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000">Our Trusted OEM Partners</h1>
          <p     data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000">
            H&W Energy Limited collaborates with world-class Original Equipment Manufacturers (OEMs) to deliver cutting-edge solutions for energy, infrastructure, and industrial projects.
          </p>
        </header>
        </div>
        <div className="partners-grid">
          {partnersData.map((partner, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<PartnerCard key={index} partner={partner} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartnersPage;