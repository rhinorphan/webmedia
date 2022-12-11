import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    const use = async () => {
      (await require('tw-elements')).default;
        };
        use();
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp
