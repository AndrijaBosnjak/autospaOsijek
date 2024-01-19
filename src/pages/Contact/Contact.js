import ContactForm from "components/ContactForm/ContactForm";
import ContactData from "components/ContactData/ContactData";
import classes from "./Contact.module.css";

function Contact() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.hero}>
          <div>
            <h1 className={classes.heroText}>Imate pitanja? Slobodno se javite!</h1>
          </div>
        </div>
        <div className={classes.main}>
          <div className={classes.contact}> 
            <h3 className={classes.h3}>Kontaktirajte nas</h3>
            <ContactData />
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
