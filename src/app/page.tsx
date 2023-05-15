import React from "react";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import Image from "next/image";

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
          <Image
            src="/images/Head.png"
            width={50}
            height={50}
            alt="Ian"
            className="mx-auto border-solid border-2 border-teal-400 rounded-full mt-4"
          />
          <Intro />
        </div>
        <Footer />
      </div>
    </>
  );
}
