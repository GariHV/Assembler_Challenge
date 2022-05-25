import type { AppProps } from 'next/app';

import { NextUIProvider } from '@nextui-org/react';
import { UserProvider } from '../context/userContext';

import '../styles/globals.css';
import { darkTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </NextUIProvider>
  );
}

export default MyApp;
