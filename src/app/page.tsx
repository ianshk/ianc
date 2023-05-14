import React from "react";
import IntroDetails from "@/components/IntroDetails";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl px-4 lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-200" />
        </div>
      </div>
      <div className="relative">
        <div className="container mx-auto max-w-2xl lg:max-w-4xl px-12">
          <IntroDetails />
        </div>
      </div>
    </>
  );
}
