import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { initializeFirebase } from '@setup';
import GlobalStyle from '../styles/GlobalStyle';
import { QueryClientProvider } from '@tanstack/react-query';
import { reactQueryService } from '@services';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3'
  }
};

initializeFirebase();

const queryClient = reactQueryService.getQueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
