import { MdOutlineEmail } from "react-icons/md";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="content-footer">
        <div className="top-footer">
          <div className="logo-details">
            <h4>Kun Blog ...</h4>
          </div>
          <div className="contact-icons">
            <a href="#" target="_blank">
              <IconContext.Provider value={{ className: "footer-icons email" }}>
                <MdOutlineEmail />
              </IconContext.Provider>
            </a>
            <a
              href="https://www.linkedin.com/in/kun-aldi-indarto-241622174/"
              target="_blank"
            >
              <IconContext.Provider
                value={{ className: "footer-icons linkedin" }}
              >
                <FaLinkedinIn />
              </IconContext.Provider>
            </a>
            <a href="#" target="_blank">
              <IconContext.Provider value={{ className: "footer-icons wa" }}>
                <FaWhatsapp />
              </IconContext.Provider>
            </a>
            <a href="https://www.facebook.com/KunAldiIndarto" target="_blank">
              <IconContext.Provider value={{ className: "footer-icons fb" }}>
                <FaFacebookF />
              </IconContext.Provider>
            </a>
            <a href="https://github.com/kunaldiindarto" target="_blank">
              <IconContext.Provider
                value={{ className: "footer-icons github" }}
              >
                <FaGithub />
              </IconContext.Provider>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-detail">
        <span className="copyright">
          Copyright &#169; 2022 <a href="#">Kun Aldi Indarto.</a> All rights
          reserved
        </span>
        <span className="policy">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
