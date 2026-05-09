'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar"
import Projucts from "./components/Projucts";
import Service from "./components/service";

export default function Home() {

  const [isDarkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    setIsMounted(true);
  }, [])

  useEffect(() => {
    if (isMounted) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    }
  }, [isDarkMode, isMounted])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Service isDarkMode={isDarkMode} />
      <Projucts isDarkMode={isDarkMode} />
      <Contacts isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
