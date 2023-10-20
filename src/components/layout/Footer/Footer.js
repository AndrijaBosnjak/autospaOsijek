import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrap">
      <div className="footer-distributed">
        <div className="footer-left">
          <h3>Auto Spa Osijek</h3>

          <p className="footer-links">
            <Link to="">Početna</Link> |<Link to="ponuda">Ponuda</Link>|
            <Link to="narucivozilo">Naruči</Link>|<Link to="otkupvozila">Otkup</Link>|<Link to="jamstvo">Jamstvo</Link>
            |<Link to="njegavozila">Njega auta</Link>|<Link to="kontakt">Kontakt</Link>
          </p>

          <p className="footer-company-name">© 2023. Auto Spa Osijek d.o.o.</p>
        </div>

        <div className="footer-center">
          <div>
            <FontAwesomeIcon
              className="awesome-icons"
              icon={faLocationDot}
              size="lg"
              style={{ color: "#daa520" }}
            />
            <p>Vojlovica 44 Brijest, Osijek</p>
          </div>
          <div>
            <FontAwesomeIcon
              className="awesome-icons"
              icon={faPhone}
              size="lg"
              style={{ color: "#daa520" }}
            />
            <p>098 194 9250 Hrvoje Šoš</p>
            <br />
            <FontAwesomeIcon
              className="awesome-icons"
              icon={faPhone}
              size="lg"
              style={{ color: "#daa520" }}
            />
            <p>098 194 9250 Tihomir Šoš</p>
          </div>
          <div>
            <FontAwesomeIcon
              className="awesome-icons"
              icon={faEnvelope}
              size="xl"
              style={{ color: "#ffffff" }}
            />
            <p>
              <a href="mailto:autospaosijek@gmail.com">
                autospaosijek@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>Prodaja rabljenih vozila</span>
            Svako naše vozilo je pregledano u servisu te je spremno za tehnički
            pregled. <br></br>Za svako vozilo izdajemo jamstvo.
          </p>
          <div className="footer-icons">
            <a
              href="https://www.facebook.com/p/Auto-Spa-rabljena-vozila-100063674256957/"
              target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                size="lg"
                style={{ color: "#ffffff" }}
              />
            </a>
            <a href="https://www.instagram.com/explore/tags/autospaosijek/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ color: "#ffffff" }}
                target="_blank"
              />
            </a>
            <a href="https://www.njuskalo.hr/trgovina/autospa" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faDog}
                size="lg"
                style={{ color: "#ffffff" }}
                target="_blank"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
