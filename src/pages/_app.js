
import { ThemeProvider } from 'react-ui'
import '@client/ui/global.css'
import theme from '@client/ui/theme/bytes'
import LoadFont from '@client/ui/font'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider {...theme}>
      <LoadFont />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
