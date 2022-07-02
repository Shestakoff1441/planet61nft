import Link from 'next/link'

import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <>
          <span className={styles.text}>PLANET 611</span>
        </>
      </Link>
    </div>
  )
}

export default Logo
