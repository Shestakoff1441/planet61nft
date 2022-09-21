import LinkComponent from "../../LinkComponent";
import opensea from "../../../../assets/images/icons/OpenSea-icon.svg";
import twitter from "../../../../assets/images/icons/Twitter-Logo.svg";
// import instagram from "../../../../assets/images/icons/Instagram-Black-Logo.svg";
import discord from "../../../../assets/images/icons/Discord_Black-Logo.svg";
import styles from "./SocialSection.module.scss";
import classnames from "classnames";

const SocialSection = ({ classes }) => {
  const iconList = [
    {
      image: twitter,
      text: "twitter",
      href: "https://twitter.com/Planet61NFT"
    },
    // {
    //   image: instagram,
    //   text: "instagram",
    //   href: "https://www.instagram.com/planet61nft/"
    // },
    {
      image: opensea,
      text: "opensea",
      href: "https://opensea.io/Planet61"
    },
    {
      image: discord,
      text: "discord",
      href: "https://www.facebook.com/Planet61-110635601604045"
    }
  ];

  return (
    <div className={classnames(styles.socialContainer, classes)}>
      {iconList.map((icon) => (
        <LinkComponent {...icon} key={icon.text} classes={[styles.iconLink]} blank/>
      ))}
    </div>
  );
};
export default SocialSection;
