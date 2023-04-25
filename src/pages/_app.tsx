import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../../components/navbar';
import Footer from '../../components/footer';


export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Layout/>
    <Component {...pageProps} />
    <Footer/>

  </>
}
