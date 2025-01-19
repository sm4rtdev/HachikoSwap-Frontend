// "use client";

import { useEffect, useState } from 'react';
import Header from "../trade/header";
import Footer from "../trade/footer";

export default function DefaultLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

  // const isDarkMode = typeof window !== "undefined" && document.documentElement.classList.contains('dark');

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const updateTheme = () => {
      const darkModeActive = document.documentElement.classList.contains('dark');
      setIsDarkMode(darkModeActive);
    };

    // Initial theme check
    updateTheme();

    // Listen for changes to the classList
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);
  return (
    <div  
      style={{
        backgroundImage: isDarkMode
          ? `` // Dark mode background
          : `url('./assets/image/trade_background.png')`, // Light mode background
        backgroundSize: 'cover',
        height: '100vh', // Ensure the div takes full height
      }}
    >
       <Header />
       <div className="min-h-[69vh]">
       {children}
       </div>
       <Footer />
    </div>
  );
}
