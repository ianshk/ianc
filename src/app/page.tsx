import React from 'react';
import Intro from '@/components/Intro';
import Footer from '@/components/Footer';
import OpenSource from '@/components/OpenSource';
import TechStack from '@/components/TechStack';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex h-screen w-full max-w-7xl px-4 lg:px-8">
          <div className="h-screen w-full bg-white ring-1 ring-slate-200 dark:bg-gray-900 dark:ring-gray-800" />
        </div>
      </div>
      <div className="relative">
        <div className="container mx-auto max-w-2xl px-12 lg:max-w-4xl">
          <NavBar />
          <Intro />
          <OpenSource />
          <TechStack />
        </div>
        <Footer />
      </div>
    </>
  );
}
