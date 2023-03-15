import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "ui/components/Navbar";
import BaseLayout from "ui/components/layout/BaseLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  );
}

export default MyApp;
