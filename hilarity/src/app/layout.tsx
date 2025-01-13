import React from "react";
import Head from "next/head";

import Navigation from "@/components/Nav/Nav";
import "@/styles/global.scss";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en">
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
