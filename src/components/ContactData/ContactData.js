import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./ContactData.module.css";

function ContactData() {
  return (
    <>
      <div className={classes.container}>
        <div>
          <FontAwesomeIcon
            className={classes.awesomeIcons}
            icon={faLocationDot}
            size="lg"
            style={{ color: "#daa520" }}
          />
          <p className={classes.p}>Vojlovica 44 Brijest, Osijek</p>
        </div>
        <div>
          <FontAwesomeIcon
            className={classes.awesomeIcons}
            icon={faPhone}
            size="lg"
            style={{ color: "#daa520" }}
          />
          <p className={classes.p}>098 194 9250 Hrvoje Šoš</p>
        </div> 
        <div>
          <FontAwesomeIcon
            className={classes.awesomeIcons}
            icon={faPhone}
            size="lg"
            style={{ color: "#daa520" }}
          />
          <p className={classes.p}>098 194 9250 Tihomir Šoš</p>
        </div>
        <div>
          <FontAwesomeIcon
            className={classes.awesomeIcons}
            icon={faEnvelope}
            size="xl"
            style={{ color: "#ffffff" }}
          />
          <p className={classes.p}>
            <a href="mailto:autospaosijek@gmail.com" className={classes.a}>autospaosijek@gmail.com</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactData;
