import BaseLayout from '@/components/styling/BaseLayout';
import '@/styles/globals.css';
import { ThemeProvider } from '@material-tailwind/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
}
