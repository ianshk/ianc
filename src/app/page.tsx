import React from 'react';
import Intro from '@/components/Intro';
import Footer from '@/components/Footer';
import Image from 'next/image';
import OpenSource from '@/components/OpenSource';

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl px-4 lg:px-8">
          <div className="w-full bg-white ring-1 ring-slate-200" />
        </div>
      </div>
      <div className="relative">
        <div className="container mx-auto max-w-2xl lg:max-w-4xl px-12">
          <Image src="/images/Logo.svg" width={150} height={31} alt="Ian Callaghan" className="mt-4" />
          <Intro />
          <OpenSource />
        </div>
        <Footer />
      </div>
    </>
  );
}
