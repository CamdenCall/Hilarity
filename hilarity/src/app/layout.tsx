"use client"
import type { Metadata } from "next";
import React, { useState, useEffect } from "react";

import Navigation from "@/components/Nav/Nav";
import "@/styles/global.scss";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const [fadeIn, setFadeIn] = useState(false);
  console.log(children)
  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <html lang="en">
      <body className={fadeIn ? "fade-in" : ""}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
