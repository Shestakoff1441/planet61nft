import LinkComponent from "../../LinkComponent";
import facebook from "../../../../assets/images/icons/Facebooko-Black-Logo.svg";
import twitter from "../../../../assets/images/icons/Twitter-Logo.svg";
import instagram from "../../../../assets/images/icons/Instagram-Black-Logo.svg";
import discord from "../../../../assets/images/icons/Discord_Black-Logo.svg";

import styles from "./SocialSection.module.scss";

const SocialSection = () => {
  const iconList = [
    {
      image: twitter,
      text: "twitter",
      href: "https://twitter.com/Planet61NFT"
    },
    {
      image: instagram,
      text: "instagram",
      href: "https://www.instagram.com/planet61nft/"
    },
    {
      image: facebook,
      text: "facebook",
      href: "https://www.facebook.com/Planet61-110635601604045"
    },
    {
      image: discord,
      text: "discord",
      href: "https://www.facebook.com/Planet61-110635601604045"
    }
  ];

  return (
    <div className={styles.socialContainer}>
      {iconList.map((icon) => (
        <LinkComponent {...icon} key={icon.text} classes={[styles.iconLink]} />
      ))}
    </div>
  );
};
export default SocialSection;
