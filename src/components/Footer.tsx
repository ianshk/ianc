import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[85rem] px-12">
      <hr className="border-t-1 border-t-slate-300 mt-24 mx-auto w-80" />
      <div className="text-center">
        <p className="text-slate-500 text-sm mt-8">
          © 2023 Ian Callaghan. Made with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
