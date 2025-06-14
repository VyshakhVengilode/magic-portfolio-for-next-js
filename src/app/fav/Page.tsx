import type { AppProps } from "next/app";
import Head from "next/head";
import "../components/PersonalFavorites.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Malayalam font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Malayalam:wght@700&display=swap"
          rel="stylesheet"
        />
        {/* Roboto font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;