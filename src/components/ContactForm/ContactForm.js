import { useState, useMemo } from "react";

import {
  isLettersOnly,
  isInputFieldEmpty,
  isNumbersOnly,
} from "./validation.js";
import Input from "./Input.js";

import classes from "./ContactForm.module.css";

const InputFormNew = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [didEdit, setDidEdit] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const isEnteredNameIsValid = useMemo(
    () => isLettersOnly(formInputs.name),
    [formInputs.name]
  );
  const isEnteredEmailIsValid = useMemo(
    () => isInputFieldEmpty(formInputs.email),
    [formInputs.email]
  );
  const isEnteredPhoneIsValid = useMemo(
    () => isNumbersOnly(formInputs.phone),
    [formInputs.phone]
  );
  const isEnteredMessageIsValid = useMemo(
    () => isLettersOnly(formInputs.message),
    [formInputs.message]
  );

  const isNameIsInvalid = useMemo(
    () => didEdit.name && !isEnteredNameIsValid,
    [didEdit.name, isEnteredNameIsValid]
  );
  const isEmailIsInvalid = useMemo(
    () => didEdit.email && !isEnteredEmailIsValid,
    [didEdit.email, isEnteredEmailIsValid]
  );
  const isPhoneIsInvalid = useMemo(
    () => didEdit.phone && !isEnteredPhoneIsValid,
    [didEdit.phone, isEnteredPhoneIsValid]
  );
  const isMessageIsInvalid = useMemo(
    () => didEdit.message && !isEnteredMessageIsValid,
    [didEdit.message, isEnteredMessageIsValid]
  );

  let formIsValid = false;

  if (
    isEnteredNameIsValid &&
    isEnteredEmailIsValid &&
    isEnteredPhoneIsValid &&
    isEnteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const formReset = () => {
    setFormInputs({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setDidEdit({
      name: false,
      email: false,
      phone: false,
      message: false,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    
    setFormIsSubmitted(true);

    formReset();
  };

  const onChangeInput = (event) => {
    const { id, value } = event.target;
    setFormInputs((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [id]: false,
    }));
  };

  const onBlurInput = (id) => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [id]: true,
    }));
  };

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <h3 className={classes.h3}>Pošaljite upit</h3>
      <div className={classes.input}>
        <Input
          label="Ime i prezime"
          id="name"
          type="text"
          name="name"
          placeholder="Upišite ovdje"
          onBlur={() => onBlurInput("name")}
          onChange={onChangeInput}
          value={formInputs.name}
          error={isNameIsInvalid && "Molim vas upišite Vaše ime i prezime."}
        />
        <Input
          label="Email adresa"
          id="email"
          type="text"
          name="email"
          placeholder="primjer@email.com"
          onBlur={() => onBlurInput("email")}
          onChange={onChangeInput}
          value={formInputs.email}
          error={isEmailIsInvalid && "Molim Vas upišite Vašu e-mail adresu."}
        />
        <Input
          label="Broj telefona"
          id="phone"
          type="text"
          name="phone"
          placeholder="Upišite ovdje"
          onBlur={() => onBlurInput("phone")}
          onChange={onChangeInput}
          value={formInputs.phone}
          error={isPhoneIsInvalid && "Molim Vas upišite Vaš broj telefona."}
        />
        <Input
          label="Upit"
          id="message"
          type="text"
          name="message"
          placeholder="Upišite ovdje"
          onBlur={() => onBlurInput("message")}
          onChange={onChangeInput}
          value={formInputs.message}
          error={isMessageIsInvalid && "Molim Vas upišite Vašu poruku."}
          style={{ height: "6rem" }}
        />
        <div>
          <button type="submit" className={classes.button}>
            Pošalji upit
          </button>
          <p className={classes.p}>Sva polja moraju biti ispunjena</p>

          {formIsSubmitted && <p className={classes.submitMessage}>Zahvaljujemo se na poslanom upitu.</p>}
        </div>
      </div>
    </form>
  );
};

export default InputFormNew;
