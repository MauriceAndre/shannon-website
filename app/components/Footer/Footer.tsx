import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <p className="text-white mb-4">
          Contact: shannon@example.com | (123) 456-7890
        </p>
        <div className="flex space-x-4 mb-4">
          <a
            href="https://www.instagram.com/shannon.ding/"
            className="text-white text-xl hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} />
          </a>
        </div>
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://shannonding.com"
            className="hover:text-green-500 transition duration-300 ease-in-out"
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
