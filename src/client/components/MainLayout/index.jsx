import Header from '../Header'
import FirstSection from '../FirstSection'
import SecondSection from '../SecondSection'
import ThirdSection from '../ThirdSection'
import styles from './MainLayout.module.scss'
import Head from 'next/head'

const MainLayout = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>Planet 61</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  )
}
export default MainLayout
