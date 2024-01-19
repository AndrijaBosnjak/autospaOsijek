import classes from "./ContactForm.module.css";

function Input({ label, id, error, ...props }) {
    return (
      <>
        <div>
          <label htmlFor={id}>{label}</label>
          <input type="text" id={id} {...props} />
        </div>
        <div>
          {error && <p className={classes.error_text}>{error}</p>}
        </div>
      </>
    );
  }
  
  export default Input;