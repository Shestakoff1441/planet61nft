import classnames from "classnames";
import Link from "next/link";
import styles from "./ViewButton.module.scss";

const ViewButton = ({ text = "/", href = "/", classes = "" }) => (
  <div
    className={classnames([styles.viewButtonContainer, classes ? classes : []])}
  >
    <Link href={href}>{text}</Link>
  </div>
);

export default ViewButton;
