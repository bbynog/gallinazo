import { Analytics } from 'firebase/analytics';
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import initializeFirebase from '../setup/firebase';
import GlobalStyle from '../styles/GlobalStyle';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3'
  }
};

export const { firebaseApp, auth, firestore } = initializeFirebase();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
