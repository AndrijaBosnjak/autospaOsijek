import { useRef, useState } from "react";

import classes from "./ContactForm.module.css";

const isEmpty = (value) => value.trim() === "";

function ContactForm() {
    
  const [formInputValidity, setFormInputValidity] = useState({
    firstname: true,
    lastname: true,
    email: true,
    phoneNumber: true,
    message: true,
  });

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const messageInputRef = useRef();

  const onSubmitForm = (event) => {
    event.preventDefault();
    
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
    const enteredLastNameIsValid = !isEmpty(enteredLastName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredPhoneNumberIsValid = !isEmpty(enteredPhoneNumber);
    const enteredMessageIsValid = !isEmpty(enteredMessage);

    setFormInputValidity({
      firstname: enteredFirstNameIsValid,
      lastname: enteredLastNameIsValid,
      email: enteredEmailIsValid,
      phoneNumber: enteredPhoneNumberIsValid,
      message: enteredMessageIsValid,
    });

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredEmailIsValid &&
      enteredPhoneNumberIsValid &&
      enteredMessageIsValid;

    if (!formIsValid) {
      return;
    }

    onClearForm();
  };

  const onClearForm = () => {
    firstNameInputRef.current.value = "";
    lastNameInputRef.current.value = "";
    emailInputRef.current.value = "";
    phoneNumberInputRef.current.value = "";
    messageInputRef.current.value = "";
    
    setFormInputValidity({
      firstname: true,
      lastname: true,
      email: true,
      phoneNumber: true,
      message: true,
    });
  }

  return (
    <div>
      <form className={classes.input} onSubmit={onSubmitForm}>
        <label htmlFor="firstname">Ime</label>
        <input
          id="firstname"
          type="text"
          ref={firstNameInputRef}
        />
        {!formInputValidity.firstname && <p>Molim upišite ispravno ime!</p>}

        <label htmlFor="lastname">Prezime</label>
        <input
          id="lastname"
          type="text"
          ref={lastNameInputRef}
        />
        {!formInputValidity.lastname && <p>Molim upišite ispravno prezime!</p>}
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="text"
          ref={emailInputRef}
        />
        {!formInputValidity.email && (
          <p>Molim upišite ispravnu e-mail adresu!</p>
        )}
        <label htmlFor="phoneNumber">Broj telefona</label>
        <input
          id="phoneNumber"
          type="text"
          ref={phoneNumberInputRef}
        />
        {!formInputValidity.phoneNumber && (
          <p>Molim upišite ispravni broj telefona!</p>
        )}
        <label htmlFor="message">Vaša poruka</label>
        <textarea
          id="message"
          type="text"
          ref={messageInputRef}
        />
        {!formInputValidity.message && <p>Molim upišite ispravnu poruku!</p>}
        <button className={classes.button} type="button" onClick={onClearForm} >
          Očisti
        </button>
        <button className={classes.button} type="submit" >
          Pošaljite
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
