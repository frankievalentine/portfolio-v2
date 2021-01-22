import Head from 'next/head';
import {Global, css, ThemeProvider} from '@emotion/react';
// import styled from '@emotion/styled';

import '@/styles/normalize.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const GlobalStyle = ({children}) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
            background-color: #edf2f7;
            font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI',
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const MyApp = ({Component, pageProps}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
