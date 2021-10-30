import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Box, Container } from '@material-ui/core'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { SnackbarProvider } from 'notistack'
import { ApolloProvider } from '@apollo/client'

import Navbar from '../components/navbar'
import { client } from '../lib/api-client'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssServerTypes = document.querySelector('#jss-server-side')
    jssServerTypes?.parentElement?.removeChild(jssServerTypes)
  }, [])

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <Head>
            <title>Kuip - Short and easy</title>
          </Head>
          <Navbar />
          <Container>
            <Box marginY={2}>
              <CssBaseline />
              <Component {...pageProps} />
            </Box>
          </Container>
        </SnackbarProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
