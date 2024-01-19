import classes from "./TextComponent.module.css";
import { titleText } from "./titleTextData";

const warrantyPageContent = titleText;

function TextComponent() {
  return (
    <div className={classes.wrap}>
      {warrantyPageContent.map((titleText, index) => {
        return (
          <div key={index} className={classes.body}>
            <p className={classes.title}>{titleText.title}</p>
            <p className={classes.text}>{titleText.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TextComponent;
