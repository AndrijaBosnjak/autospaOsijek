import { useState } from "react";

import classes from "./ContactForm.module.css";

function ContactForm() {
  
  const onSubmitForm = (event) => {
    event.preventDefault();
    
    const [formStatus, setFormStatus] = useState('');

    const { name, lastname, email, phoneNumber, message } = event.target.elements;
    let conForm = {
      name: name.value,
      email: email.value,
      lastname: lastname.value,
      phoneNumber: phoneNumber.value,
      message: message.value
    }

    console.log(conForm);
    console.log("form submitted");
  };

  const onInputChange = () => {
    
  }

    return (
    <div>
    <form className={classes.input} onSubmit={onSubmitForm}>
      <label htmlFor="name">Ime</label>
      <input id="name" type="text" onChange={onInputChange}/>
      <label htmlFor="lastname">Prezime</label>
      <input id="lastname" type="text" onChange={onInputChange} />
      <label htmlFor="email">E-mail</label>
      <input id="email" type="text" onChange={onInputChange}/>
      <label htmlFor="phoneNumber" >Broj telefona</label>
      <input id="phoneNumber" type="number"onChange={onInputChange} />
      <label htmlFor="message">Vaša poruka</label>
      <textarea id="message" type="text" onChange={onInputChange}/>
      <button className={classes.button} type="submit">Pošaljite</button>
    </form>
    </div>
  );
}

export default ContactForm;
