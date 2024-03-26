import NavBar from '@/src/components/NavBar/NavBar'
import type { AppProps } from 'next/app'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return(
      <>
        <NavBar />
        <Component {...pageProps} />
      </>

  )
  
}