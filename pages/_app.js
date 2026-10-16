// pages/_app.js

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/fonts.css";
import "../styles/globals.css";

import Layouts from "../components/Layouts";
import HeaderWork from "../components/HeaderWork";
import CookieConsentBanner from "../components/CookieConsentBanner";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  // ✅ FIXED router events (no memory leak)
  useEffect(() => {
    const handleStart = () => setProgress(40);
    const handleComplete = () => setProgress(100);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  // ✅ ALL YOUR ROUTES (OPTIMIZED)
  const pathname = router.pathname;

  const landingRoutes = [
    "/",
    "/contact-us",
    "/contact-test",
    "/thank-you",
    "/thanks-webinar-registration",
    "/thank-you/email-subscriber",
    "/subscribe-updates",
    "/guides/download/Pdf-dynamics-crm",
    "/guides/download/Pdf-guide-finance",
    "/guides/download/Pdf-d365-supply-chain-management",
    "/guides/download/power-guide-pdf",
    "/guides/download/pdf-business-central-guide",
    "/thank-you-for-registration",
    "/not-for-profit-fundrasing-engagenment",
    "/schedule-a-demo",
    "/products/microsoft-dynamics-365-finance-old",
    "/test-form",
    "/erp-implementation-cost-calculator",
        "/tools/microsoft-dynamics-licensing-calculator",
  ];

  const isLandingPage = landingRoutes.includes(pathname);

  return (
    <>
      {/* ========================= */}
      {/* ✅ VIEWPORT + GLOBAL SCHEMA */}
      {/* ========================= */}
      <Head>
        {/* Viewport lives here, not in _document.js: next/head replaces its
            built-in viewport tag with this one, so pages get exactly one. */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.dynamicssquare.co.uk/#organization",
                  "name": "Dynamics Square UK Ltd.",
                  "url": "https://www.dynamicssquare.co.uk/",
                  "sameAs": [
                    "https://www.facebook.com/dynamicssquareuk/",
                    "https://x.com/dsquare_uk",
                    "https://www.linkedin.com/showcase/dynamics-square-uk/",
                    "https://www.youtube.com/c/DynamicsSquare"
                  ],
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.dynamicssquare.co.uk/#logo",
                    "inLanguage": "en-GB",
                    "url": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                    "contentUrl": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                    "width": "1024",
                    "height": "1024",
                    "caption": "Dynamics Square UK"
                  },
                  "image": { "@id": "https://www.dynamicssquare.co.uk/#logo" },
                  "description": "Dynamics Square™ is a trusted Dynamics 365 Partner in London, UK, offering expert Dynamics 365 solutions for Business Central, CRM, ERP & more. Contact us today!",
                  "alternateName": "Dynamics Square software company in London, United Kingdom",
                  "telephone": "+ 44 203 769 7689, +44 161 394 0487",
                  "email": "info@dynamicssquare.co.uk",
                  "brand": {
                    "@type": "Brand",
                    "name": "Dynamics Square UK Ltd.",
                    "logo": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.dynamicssquare.co.uk/#website",
                  "url": "https://www.dynamicssquare.co.uk/",
                  "name": "Dynamics Square UK Ltd.",
                  "alternateName": "Dynamics Square Microsoft Solutions Partner company in London, UK",
                  "description": "Dynamics Square™ is a trusted Dynamics 365 Partner in London, UK, offering expert Dynamics 365 solutions for Business Central, CRM, ERP & more. Contact us today!",
                  "publisher": { "@id": "https://www.dynamicssquare.co.uk/#organization" },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://www.dynamicssquare.co.uk/?s={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  "inLanguage": "en-GB"
                },
                {
                  "@type": "LocalBusiness",
                  "name": "Dynamics Square UK Ltd. - London Office",
                  "description": "Dynamics Square is Dynamics 365 partner in the London, UK who help your business succeed by deploying the finest CRM, ERP, and Microsoft cloud solutions for your unique needs.",
                  "image": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                  "alternateName": "Dynamics Square Software company in London, UK",
                  "priceRange": "£££-£££",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Kemp House, 152-160 City Road",
                    "addressLocality": "London",
                    "addressRegion": "London",
                    "addressCountry": "United Kingdom",
                    "postalCode": "EC1V 2NX",
                    "telephone": "+ 44 203 769 7689",
                    "email": "info@dynamicssquare.co.uk"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 51.52706865727293,
                    "longitude": -0.08876773400079006
                  },
                  "brand": {
                    "@type": "Brand",
                    "name": "Dynamics Square UK Ltd.",
                    "logo": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "08:00",
                      "closes": "17:00"
                    }
                  ],
                  "url": "https://www.dynamicssquare.co.uk/",
                  "sameAs": [
                    "https://www.facebook.com/dynamicssquareuk/",
                    "https://x.com/dsquare_uk",
                    "https://www.linkedin.com/showcase/dynamics-square-uk/",
                    "https://www.youtube.com/c/DynamicsSquare"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "name": "Dynamics Square UK Ltd. - Manchester Office",
                  "description": "Dynamics Square: Leading Dynamics 365 Business Central partner in Manchester, UK. Transform your business with tailored ERP, CRM solutions and expert support.",
                  "image": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                  "alternateName": "Dynamics Square Software company in Manchester, UK",
                  "priceRange": "£££-£££",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "International House 61 Mosley Street",
                    "addressLocality": "Manchester",
                    "addressRegion": "UK",
                    "addressCountry": "United Kingdom",
                    "postalCode": "M2 3HZ",
                    "telephone": "+44 161 394 0487",
                    "email": "info@dynamicssquare.co.uk"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 53.47866198452941,
                    "longitude": -2.2374762932529038
                  },
                  "brand": {
                    "@type": "Brand",
                    "name": "Dynamics Square UK Ltd.",
                    "logo": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "08:00",
                      "closes": "17:00"
                    }
                  ],
                  "url": "https://www.dynamicssquare.co.uk/",
                  "sameAs": [
                    "https://www.facebook.com/dynamicssquareuk/",
                    "https://x.com/dsquare_uk",
                    "https://www.linkedin.com/showcase/dynamics-square-uk/",
                    "https://www.youtube.com/c/DynamicsSquare"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "name": "Dynamics Square UK Ltd. - Birmingham Office",
                  "description": "Dynamics Square is your trusted Dynamics 365 ERP & CRM partner in Birmingham, UK, helping businesses streamline operations and boost growth with expert solutions.",
                  "image": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                  "alternateName": "Dynamics Square Software company in Birmingham, UK",
                  "priceRange": "£££-£££",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Izabella House, 24 - 26 Regents Place, City Centre",
                    "addressLocality": "Birmingham",
                    "addressRegion": "Birmingham, UK",
                    "addressCountry": "United Kingdom",
                    "postalCode": "B1 3NJ",
                    "telephone": "+44 121 790 0574",
                    "email": "info@dynamicssquare.co.uk"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 52.486175934043345,
                    "longitude": -1.9099113644176346
                  },
                  "brand": {
                    "@type": "Brand",
                    "name": "Dynamics Square UK Ltd.",
                    "logo": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "08:00",
                      "closes": "17:00"
                    }
                  ],
                  "url": "https://www.dynamicssquare.co.uk/",
                  "sameAs": [
                    "https://www.facebook.com/dynamicssquareuk/",
                    "https://x.com/dsquare_uk",
                    "https://www.linkedin.com/showcase/dynamics-square-uk/",
                    "https://www.youtube.com/c/DynamicsSquare"
                  ]
                }
              ]
            }),
          }}
        />
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-G7DMKRQVGJ" strategy="lazyOnload" />
      <Script id="ga" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G7DMKRQVGJ');
        `}
      </Script>

      {/* ✅ GTM */}
      <Script id="gtm" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id=GTM-5G8CCP6W';
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5G8CCP6W');
        `}
      </Script>
          

      {/* ✅ MICROSOFT CLARITY (deferred so it does not block first render) */}
      <Script id="ms-clarity-loader" strategy="lazyOnload">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tib4o2otj4");
        `}
      </Script>

      {/* ========================= */}
      {/* ✅ APOLLO TRACKER */}
      {/* ========================= */}
      <Script id="apollo" strategy="lazyOnload">
        {`
          (function(){
            var n=Math.random().toString(36).substring(7);
            var s=document.createElement("script");
            s.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
            s.async=true;
            s.onload=function(){
              window.trackingFunctions &&
              window.trackingFunctions.onLoad({
                appId:"66322a5ecb3cc6056bd458d4"
              });
            };
            document.head.appendChild(s);
          })();
        `}
      </Script>

      {/* ========================= */}
      {/* ✅ ZOHO CHAT */}
      {/* ========================= */}
      <Script id="zoho" strategy="lazyOnload">
        {`
          var $zoho=$zoho || {};
          $zoho.salesiq = $zoho.salesiq || {
            widgetcode: "siq2c0a7348126da1eec1533d7b2fe81669a9a9454a36812c4485ee1ce065e0a657e9757eecc59243ed2c9ad7fb7bda1383",
            values:{},
            ready:function(){}
          };
          var d=document;
          var s=d.createElement("script");
          s.type="text/javascript";
          s.defer=true;
          s.src="https://salesiq.zohopublic.in/widget";
          var t=d.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(s,t);
        `}
      </Script>

      {/* ========================= */}
      {/* ✅ BOOTSTRAP JS */}
      {/* ========================= */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      />

      {/* ========================= */}
      {/* ✅ PAGE RENDER */}
      {/* ========================= */}
      {isLandingPage ? (
        <>
          <HeaderWork />
          <main>
            <Component {...pageProps} />
          </main>
          <CookieConsentBanner />
        </>
      ) : (
        <>
          <Layouts>
            <main>
              <Component {...pageProps} />
            </main>
          </Layouts>
          <CookieConsentBanner />
        </>
      )}
    </>
  );
}

export default MyApp;