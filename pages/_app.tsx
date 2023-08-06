import '../styles/globals.css';
// eslint-disable-next-line no-unused-vars
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store'; // Import your Redux store

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
