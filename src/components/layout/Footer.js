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
    <div class="footer-wrap">
      <div class="footer-distributed">
        <div class="footer-left">
          <h3>Auto Spa Osijek</h3>

          <p class="footer-links">
            <a href="#">Početna</a>|<a href="#">Ponuda</a>|
            <a href="#">Naruči</a>|<a href="#">Otkup</a>|<a href="#">Jamstvo</a>
            |<a href="#">Njega auta</a>|<a href="#">Kontakt</a>
          </p>

          <p class="footer-company-name">© 2023. Auto Spa Osijek d.o.o.</p>
        </div>

        <div class="footer-center">
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
        <div class="footer-right">
          <p class="footer-company-about">
            <span>Prodaja rabljenih vozila</span>
            Svako naše vozilo je pregledano u servisu te je spremno za tehnički
            pregled. <br></br>Za svako vozilo izdajemo jamstvo.
          </p>
          <div class="footer-icons">
            <a
              href="https://www.facebook.com/p/Auto-Spa-rabljena-vozila-100063674256957/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                size="lg"
                style={{ color: "#ffffff" }}
              />
            </a>
            <a href="https://www.instagram.com/auto_spa_osijek/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ color: "#ffffff" }}
                target="_blank"
              />
            </a>
            <a href="https://www.njuskalo.hr/trgovina/autospa" target="_blank">
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
