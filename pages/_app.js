import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        document.documentElement.style.backgroundColor = "#ffffff";
        document.documentElement.style.color = "#000000";
        document.documentElement.setAttribute("data-theme", "light");
    }, []);

  return (

      <Layout>
          <Head>
              <meta charSet="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="description"
                    content="Author: In World Student Campus, In World Student Campus for information world all university"/>
              <title>In World Student Campus</title>
              {/*<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"*/}
              {/*      as="style"/>*/}
              {/*<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"/>*/}
          </Head>

          <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
