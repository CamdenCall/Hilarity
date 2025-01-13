import React from "react";
import Head from "next/head";
import Navigation from "@/components/Nav/Nav";
import "@/styles/global.scss";
import { Raleway, Montserrat } from 'next/font/google';



type RootLayoutProps = {
  children: React.ReactNode;
};

const raleway = Raleway({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-raleway',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-montserrat',
});

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en" className={`${raleway.variable} ${montserrat.variable}`}>
      <Head>
        <title>My App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
