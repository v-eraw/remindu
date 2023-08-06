import  '../styles/globals.css';
// eslint-disable-next-line no-unused-vars
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
