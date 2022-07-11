import HeaderComponent from "../src/client/components/common/Header";
import "../styles/globals.scss";

const Layout = ({ children }) => (
  <>
    <HeaderComponent />
    {children}
  </>
);

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
