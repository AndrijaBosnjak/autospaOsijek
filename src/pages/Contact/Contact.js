import ContactForm from "components/ContactForm/ContactForm";
import classes from "./Contact.module.css";

function Contact() {
  return (
    <>
      <div className={classes.hero}>
        <div>
          <h1 className={classes.text}>Kontaktirajte nas</h1>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
