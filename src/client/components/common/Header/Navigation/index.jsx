import React from "react";
import LinkComponent from "../../LinkComponent";
import styles from "./Navigation.module.scss";
import { navigationLinks } from "../navigationLinks.js";
import classNames from "classnames";

const Navigation = ({ containerStyles, linkStyles }) => (
  <nav className={classNames(styles.navigation, containerStyles)}>
    {navigationLinks.map((link) => (
      <LinkComponent
        text={link.text}
        href={link.href}
        key={link.text}
        classes={classNames(styles.navigationElement, linkStyles)}
      />
    ))}
  </nav>
);

export default Navigation;
