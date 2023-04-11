import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === '/pokemon') {
        router.push('/pokemon');
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;