import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import additional icons
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Link } from "@remix-run/react"; // Import Remix Link
config.autoAddCss = false;

const quickLinks = [
  { name: "About Me", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const additionalInfo = [
  { icon: faMapMarkerAlt, value: "Calgary, Canada" },
  { icon: faEnvelope, value: "shannon@example.com" },
  // { icon: faPhone, value: "(123) 456-7890" },
];

const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        {additionalInfo.map((info, index) => (
          <p key={index} className="text-white mb-4">
            <FontAwesomeIcon icon={info.icon} className="mr-2" />
            {info.value}
          </p>
        ))}
        <div className="flex space-x-4 mb-4">
          <a
            href="https://www.instagram.com/shannon.ding/"
            className="text-white text-xl hover:underline transition duration-300 ease-in-out transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} />
          </a>
        </div>
        <div className="flex flex-col items-center mb-5">
          <div className="flex space-x-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-white hover:underline transition duration-300 ease-in-out"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://shannonding.com"
            className="hover:underline transition duration-300 ease-in-out"
          >
            Shannon Ding
          </a>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
