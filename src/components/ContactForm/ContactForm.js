import { useRef, useState } from "react";

import classes from "./ContactForm.module.css";

const isEmpty = (value) => value.trim() === "";

function ContactForm() {
  // const [state, setState] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   phoneNumber: "",
  //   message: "",
  // });

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
    // console.log(state);

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
      firstname: enteredEmailIsValid,
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

    console.log(
      enteredFirstName,
      enteredLastName,
      enteredEmail,
      enteredPhoneNumber,
      enteredMessage
    );
  };

  // const onInputChange = (event) => {
  //   const { id, value } = event.target;
  //   setState((prevState) => ({
  //     ...prevState,
  //     [id]: value,
  //   }));
  // };

  return (
    <div>
      <form className={classes.input} onSubmit={onSubmitForm}>
        <label htmlFor="firstname">Ime</label>
        <input
          id="firstname"
          type="text"
          // onChange={onInputChange}
          ref={firstNameInputRef}
        />
        {!formInputValidity.firstname && <p>Molim upišite ispravno ime!</p>}

        <label htmlFor="lastname">Prezime</label>
        <input
          id="lastname"
          type="text"
          // onChange={onInputChange}
          ref={lastNameInputRef}
        />
        {!formInputValidity.lastname && <p>Molim upišite ispravno prezime!</p>}
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="text"
          // onChange={onInputChange}
          ref={emailInputRef}
        />
        {!formInputValidity.email && (
          <p>Molim upišite ispravnu e-mail adresu!</p>
        )}
        <label htmlFor="phoneNumber">Broj telefona</label>
        <input
          id="phoneNumber"
          type="text"
          // onChange={onInputChange}
          ref={phoneNumberInputRef}
        />
        {!formInputValidity.phoneNumber && (
          <p>Molim upišite ispravni broj telefona!</p>
        )}
        <label htmlFor="message">Vaša poruka</label>
        <textarea
          id="message"
          type="text"
          // onChange={onInputChange}
          ref={messageInputRef}
        />
        {!formInputValidity.message && <p>Molim upišite ispravnu poruku!</p>}
        <button className={classes.button} type="button" >
          Očisti
        </button>
        <button className={classes.button} type="submit">
          Pošaljite
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
