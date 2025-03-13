import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <link rel="icon" type="image/x-icon" href="/logo.png"/>
            <meta name="color-scheme" content="light only"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body className="antialiased">
        <Main/>
        <NextScript/>
        </body>
    </Html>
  );
}
