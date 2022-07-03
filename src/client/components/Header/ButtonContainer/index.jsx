import classnames from "classnames";
import styles from "./ButtonContainer.module.scss";
import Button from "../../ButtonComponent";
const ButtonContainer = () => {
  return (
    <div className={classnames([styles.btnContainet])}>
      <Button text="CONNECT YOUR WALLET" />
    </div>
  );
};

export default ButtonContainer;
