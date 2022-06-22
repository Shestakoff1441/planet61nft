import React from 'react'
import LinkComponent from '../../LinkComponent'
import styles from './HeaderMobile.module.scss'

const navigationLinks = [
  { text: 'WOW' },
  { text: 'PROVENANCE' },
  { text: 'ABOUT US' },
  { text: 'WIKI' },
  { text: 'ANALYTICS' },
]
const iconList = [
  { text: 'discord' },
  { text: 'twitter' },
  { text: 'instagram' },
  { text: 'facebook' },
  { text: 'bred' },
]

const HeaderMobile = () => {
  return (
    <div className={styles.mobileHeaderContainer}>
      <div className={styles.mobileHeaderNav}>
        {navigationLinks.map((link) => (
          <LinkComponent text={link.text} href="/" key={link.text} classes={[styles.iconLink]}/>
        ))}
      </div>
      <div className={styles.mobileSocialBlock}>
        {iconList.map((icon) => (
          <LinkComponent
            {...icon}
            key={icon.text}
            classes={[styles.iconLink]}
          />
        ))}
      </div>
    </div>
  )
}

export default HeaderMobile
