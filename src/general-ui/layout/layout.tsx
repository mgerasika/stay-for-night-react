import { Footer } from '@/general-ui/layout/footer.component';
import { Header } from '@/general-ui/layout/header.component';
import { Navigation } from '@/general-ui/layout/navigation.component';
import Head from 'next/head';
import React from 'react';

interface IProps {
    content: JSX.Element;
}
export const Layout = ({ content }: IProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>Залишись на ніч</title>
                <meta name="google-site-verification" content="uwS1qsfu1Y54Is3jYQxmketNGTIVP__ZO-fHEUw1emY" />
                <meta
                    name="description"
                    content="TypeScript starter for Next.js that includes all you need to build amazing apps"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <Header title="Залишись на ніч" subTitle="" />

            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">{content}</div>
                </div>
			</div>
			
            <Footer />
        </>
    );
};
