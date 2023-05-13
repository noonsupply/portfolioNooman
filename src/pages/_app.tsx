import { useEffect, useRef } from 'react'
import Script from 'next/script';
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';


import '@/styles/tailwind.css'
import 'focus-visible'

interface MyAppProps extends AppProps {
  Component: NextPage;
  pageProps: any;
  router: any;
  previousPathname: string | null;
  url: String;
}

interface CustomWindow extends Window {
  dataLayer: any[];
  gtag?: Function;
}

function usePrevious<T>(value: T) {
  const ref = useRef<T>(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }: MyAppProps) {
  
  const previousPathname = usePrevious(router.pathname);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const customWindow = window as unknown as CustomWindow;
      if (!customWindow.dataLayer) {
        customWindow.dataLayer = [];
      }
      customWindow.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      });
      customWindow.gtag?.('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    
    router.events.on("routeChangeComplete", handleRouteChange);
  
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const GtagScript = () => (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </>
  );

  return (
    <>
      <DefaultSeo
        title="Nooman Miled, Developpeur Freelance"
        description="Nooman Miled, Freelance Développeur web & mobile à Lyon"
        openGraph={{
          type: 'website',
          locale: 'fr_FR',
          url: 'https://noomanmiled.com/',
          site_name: 'Nooman Miled',
        }}
        twitter={{
          handle: '@handle',
          cardType: 'summary_large_image',
        }}
      />
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-9xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} /> 
        </main>
        <Footer />
      </div>
      <GtagScript />
    </>
  )
}
