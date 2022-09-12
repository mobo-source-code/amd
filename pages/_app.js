import '../styles/globals.css'
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
import dynamic from 'next/dynamic';
import nextSeoConfig from '../next-seo.config';
import {DefaultSeo} from 'next-seo'



function MyApp({ Component, pageProps }) {

  return (
    <>
        <DefaultSeo {...nextSeoConfig} />
        <Component {...pageProps} />
    </>
  
  )
}

export default MyApp
