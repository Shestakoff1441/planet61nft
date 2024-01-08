import ReactGA from "react-ga4";


import "../styles/globals.scss";
ReactGA.initialize("G-R6GH2KD393");
ReactGA.send({ hitType: "pageview", page: "/", title: "Main Title" });

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
