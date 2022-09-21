// import React, { useState, useEffect, useRef } from "react";
import LinkComponent from "../LinkComponent";
import styles from "./Navigation.module.scss";
// import ArrowDown from "../../../../assets/images/icons/arrow-234.svg";
// import ArrowUp from "../../../../assets/images/icons/north-arrow-235.svg";
import { navigationLinks } from "./navigationLinks.js";
import classNames from "classnames";

// const ExpandedMenu = ({ link }) => {
//   const [extendedMenu, setExtendedMenu] = useState(false);

//   const node = useRef();
//   const clickOutside = (e) => {
//     if (node.current.contains(e.target)) {
//       return;
//     }
//     setExtendedMenu(false);
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", clickOutside);
//     return () => {
//       document.removeEventListener("mousedown", clickOutside);
//     };
//   }, [extendedMenu]);
//   return (
//     <div
//       ref={node}
//       className={classNames(styles.navigationElement, styles.expandedContainer)}
//       onClick={() => setExtendedMenu((menu) => !menu)}
//     >
//       <span>{link.title}</span>
//       {extendedMenu ? (
//         <img src={ArrowUp.src} alt="" className={styles.iconExpandedArrow} />
//       ) : (
//         <img src={ArrowDown.src} alt="" className={styles.iconExpandedArrow} />
//       )}

//       {/* <ArrowDown /> */}
//       {extendedMenu && (
//         <div className={styles.extendedMenu}>
//           {link.subTitles.map((subTitle) => (
//             <LinkComponent
//               text={subTitle.title}
//               href={subTitle.href}
//               key={subTitle.title}
//               classes={classNames(styles.subNavigationElement)}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

const Navigation = ({ containerStyles, linkStyles, onClick, mobile }) => (
  <nav className={classNames(styles.navigation, containerStyles)}>
    {navigationLinks.map((link) => (
      <LinkComponent
        mobile={mobile}
        onClick={onClick}
        text={link.title}
        href={link.href}
        key={link.title}
        id={link.href}
        classes={classNames(styles.navigationElement, linkStyles)}
      />
    ))}
  </nav>
);

export default Navigation;
