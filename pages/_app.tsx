import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;

// import { Router } from "next/dist/client/router";
// import { useEffect, useRef } from "react";
// useEffect(() => {
//   Router.events.on("routeChangeComplete", () => {
//     if (!contentDiv.current) return;
//     contentDiv.current.scroll({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//   });
// }, []);
