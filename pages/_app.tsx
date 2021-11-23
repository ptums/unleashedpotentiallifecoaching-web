import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from 'components/shared/Header';
import GlobalStyles from 'styles/global-styles'
import theme from 'styles/theme'

const SiteHead = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="msvalidate.01" content="D568BE2730F6C27E33061E84F8DE58B1" />
    <link rel="icon" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/site-icon-apple.png" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SiteHead />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="fade-in">
          <Header />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
