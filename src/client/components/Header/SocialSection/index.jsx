import LinkComponent from '../../LinkComponent';
import facebook from '../../../assets/images/facebook.png';
import twitter from '../../../assets/images/twitter.png';
import instagram from '../../../assets/images/instagram.png';
import telegram from '../../../assets/images/telegram.png';

import styles from './SocialSection.module.scss'

const SocialSection = () => {
  const iconList = [
    { image: twitter, text: 'twitter', href:'https://twitter.com/Planet61NFT' },
    { image: instagram, text: 'instagram', href:'https://www.instagram.com/planet61nft/' },
    { image: facebook, text: 'facebook', href:'https://www.facebook.com/Planet61-110635601604045' },
    { image: telegram, text: 'telegram', href:'/' },
  ]

  return (
    <div className={styles.socialContainer}>
      {iconList.map((icon) => (
        <LinkComponent
          {...icon}
          key={icon.text}
          classes={[styles.iconLink]}
        />
      ))}
    </div>
  )
}
export default SocialSection
