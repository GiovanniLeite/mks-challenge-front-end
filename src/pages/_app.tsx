import '@fontsource/montserrat';

import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';

import Header from '../components/Header';
import Footer from '../components/Footer';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
