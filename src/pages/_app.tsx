import '@/styles/global.css';
import { AppProps } from 'next/app';
import Script from 'next/script';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { StickyContainer } from 'react-sticky';
import '../scss/styles.scss';

const queryClient = new QueryClient();
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Script id="scripts.js" src="scripts.js" />
            <StickyContainer>
                <Component {...pageProps} />
            </StickyContainer>
            <Script id="bootstrap.js" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
            {/* The rest of your application */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
