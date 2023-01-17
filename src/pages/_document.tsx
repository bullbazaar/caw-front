import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react'

import { APP_DESCRIPTION } from 'src/utils/constants'
import theme from '../theme';

export default class MyDocument extends Document {

    // static async getInitialProps(ctx: any) {
    //     return await Document.getInitialProps(ctx)
    // }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                    {/* <meta name="theme-color" content={palette.light.primary.main} /> */}
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <meta
                        name="description"
                        content={APP_DESCRIPTION}
                    />
                    <meta name="keywords" content="social,community,decentralized,ethereum,blockchain,web3,rewards" />
                    <meta name="author" content="Teh CAWMmunity" />
                </Head>
                <body>
                    {/* 👇 Here's the script */}
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
