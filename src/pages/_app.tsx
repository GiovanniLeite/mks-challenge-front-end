import '@fontsource/montserrat';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '../redux/app/store';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';

import Header from '../components/Header';
import Footer from '../components/Footer';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <GlobalStyles />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
