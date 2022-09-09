import type { AppProps } from 'next/app';

import { NextUIProvider } from '@nextui-org/react';

import { lightTheme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={ lightTheme }>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
