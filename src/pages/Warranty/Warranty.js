import TextComponent from "components/layout/TextComponent/TextComponent";
import classes from "./Warranty.module.css";

const motiveServiceText =
  "Motive Service Europe jedan je od najvećih pružatelja usluga koordinacije jamstva za rabljena vozila u Hrvatskoj. Na hrvatskom smo tržištu prisutni od 2012. godine, a na europskom već više od 20 godina. Budući da imamo dvadeset godina iskustva u području pomoći na cesti, rezervnih dijelova i savjetovanja, a nudimo kvalitetna i inovativna rješenja na području koordinacije jamstva, Vaš je automobil u našim, najboljim rukama.";

function Warranty() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.hero}>
          <div>
            <h1 className={classes.heroText}>Jamstvo</h1>
          </div>
        </div>
        <div className={classes.main}>
          <p className={classes.faq}>FAQ</p>
          <h3 className={classes.h3}>Često postavljana pitanja</h3>
          <TextComponent />
          <h3 className={classes.h3}>MOTIVE SERVICE EUROPE</h3>
          <p className={classes.textMotive}>{motiveServiceText}</p>
          <p className={classes.faq}>ŽELITE ZNATI VIŠE?</p>
          <p className={classes.p}>
            Na stranici Moto Service Europe možete pronaći više informacija o
            jamstvu vašeg automobila:
          </p>
          <a
            className={classes.a}
            href="https://hr.motiveservice.eu/"
            target="_blank"
            rel="noreferrer"
          >
            <button className={classes.button}>MOTIVE SERVICE</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Warranty;
