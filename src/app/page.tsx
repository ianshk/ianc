import React from "react";
import IntroDetails from "@/components/IntroDetails";

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
          <IntroDetails />
        </div>
        <footer className="mx-auto w-full max-w-[85rem] px-12">
          <hr className="border-t-1 border-t-slate-300 mt-24 mx-auto w-80" />
          <div className="text-center">
            <p className="text-slate-500 text-sm mt-8">
              © 2023 Ian Callaghan. Made with Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
