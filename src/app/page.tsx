"use client";

import React from "react";
import Header from "@/components/home/header";
import HomePage from "@/components/home/home";
import About from "@/components/home/about";
import Works from "@/components/home/works";
import WhitePapper from "@/components/home/whitepapper";
import Footer from "@/components/home/footer";
import Team from "@/components/home/team";

export default function Home() {
  return (
    <div style={{
      backgroundImage: `url('./assets/image/background1.png')`,
      backgroundSize: 'cover',
      height: '100vh',
    }} className="relative">
      <Header />
      <div className="container mx-auto flex flex-col justify-center items-center">
        <HomePage />
        <About />
        <Works />
        <WhitePapper />
        <Team />
      </div>
      <Footer />
    </div>
  );
}
