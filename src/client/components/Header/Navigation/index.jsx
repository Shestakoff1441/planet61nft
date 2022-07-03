import React from "react";
import LinkComponent from "../../LinkComponent";
import styles from "./Navigation.module.scss";

const navigationLinks = [
  { text: "1000 AMC", href: "/amc" },
  { text: "LOST IN UNIVERSE", href: "/liu" },
  { text: "DAMN WENCHES", href: "/dw" },
  { text: "ROADMAP", href: "/rm" }
];

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {navigationLinks.map((link) => (
        <LinkComponent
          text={link.text}
          href={link.href}
          key={link.text}
          classes={[styles.navigationElement]}
        />
      ))}
    </nav>
  );
};

export default Navigation;
