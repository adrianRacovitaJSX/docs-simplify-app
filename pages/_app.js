import "../globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gaId="G-BZ5MT3FJ0B" />
      <Component {...pageProps} />
    </>
  );
}
