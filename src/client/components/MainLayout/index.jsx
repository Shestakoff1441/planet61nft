
import Header from '../Header';
import FirstSection from '../FirstSection';
import SecondSection from '../SecondSection';
import ThirdSection from '../ThirdSection';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <main className={styles.main}>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  )
}
export default MainLayout
