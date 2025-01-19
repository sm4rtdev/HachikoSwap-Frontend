"use client";

import React from "react";
import Footer from "@/components/trade/footer";
import Sticky_Header from "@/components/trade/sticky_header";
import DefaultLayout from "@/components/layout/DefaultLayout";
export default function Home() {
  return (
    <DefaultLayout>
    <div style={{backgroundImage: `url('./assets/image/trade_background.png')`, backgroundSize: 'cover', height: '100vh'}}>
        <Sticky_Header />
        <div className="h-[80vh]"></div>
        <Footer />
    </div>
    </DefaultLayout>
  );
}
