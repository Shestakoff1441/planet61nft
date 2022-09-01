import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true.toString()}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true.toString()}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Risque&family=Rubik+Mono+One&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true.toString()}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@200&display=swap"
          rel="stylesheet"
        />
        <link
          href="http://fonts.cdnfonts.com/css/montserrat"
          rel="stylesheet"
        />
        <script src="/metamask-onboarding.bundle.js" async />
        <script src="/web3.min.js" async />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
