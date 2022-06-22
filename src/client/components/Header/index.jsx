import { useState } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import SocialSection from './SocialSection'
import styles from './Header.module.scss'
import ButtonContainer from './ButtonContainer'
import ExpandElement from './ExpandElement'
import HeaderMobile from './HeaderMobile'

const HeaderComponent = () => {
  const [isExpanded, setExpanded] = useState(false)
  const changeExpand = () => setExpanded(() => !isExpanded)
  return (
    <>
      <header className={styles.header}>
        <Logo />
        <Navigation />
        <div className={styles.socialBtnBlock}>
          <SocialSection />
          {/* <ButtonContainer /> */}
          <ExpandElement onClick={changeExpand} isExpanded={isExpanded} />
        </div>
      </header>
      {isExpanded && <HeaderMobile />}
    </>
  )
}

export default HeaderComponent
