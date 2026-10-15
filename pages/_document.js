
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="/favicon.png" rel="icon" />
          <link href="/favicon.png" rel="apple-touch-icon" />
          {/* Fonts are self-hosted (styles/fonts.css). Preload the body font. */}
          <link
            rel="preload"
            href="/fonts/inter-latin-var-v1.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          {/* Same on every page, so set once here. Pages must not repeat them. */}
          <meta property="og:locale" content="en_GB" />
          <meta property="og:site_name" content="Dynamics Square UK" />
          <meta name="twitter:site" content="@dsquare_uk" />
          <meta name="msvalidate.01" content="EE56DA95B952D734B4521A0EFA1F0E8B" />
          <meta
            name="google-site-verification"
            content="uAsN7nCfnYQszC3rCTid53T7TSRjV1aotOCInjwu6lI"
          />
          {/* Microsoft Clarity is loaded from _app.js with strategy="lazyOnload" */}
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5G8CCP6W"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument