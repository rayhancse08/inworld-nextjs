import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (

      <Layout>
          <Head>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="description" content="Author: In World Student Campus, In World Student Campus for information world all university" />
              <title>In World Student Campus</title>
          </Head>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
