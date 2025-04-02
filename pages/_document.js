// import { Html, Head, Main, NextScript } from "next/document";
//
// export default function Document() {
//   return (
//     <Html lang="en">
//         <Head>
//             <link rel="icon" type="image/x-icon" href="/logo.png"/>
//             <meta name="color-scheme" content="light only"/>
//             <meta name="theme-color" content="#ffffff"/>
//         </Head>
//         <body className="antialiased">
//         <Main/>
//         <NextScript/>
//         </body>
//     </Html>
//   );
// }


import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/*<link*/}
                {/*    rel="preload"*/}
                {/*    href="/fonts/MyFont.woff2"*/}
                {/*    as="font"*/}
                {/*    type="font/woff2"*/}
                {/*    crossOrigin="anonymous"*/}
                {/*/>*/}
                <link rel="preconnect" href="https://inworldstudentcampus.com" />
                <link rel="dns-prefetch" href="https://inworldstudentcampus.com" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
