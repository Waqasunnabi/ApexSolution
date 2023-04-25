import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import Layout from '/workspaces/ApexSolution/components/Layout';

type Props = {
  children: ReactNode;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
