import React from "react";
import Image from "next/image";
import Icons from "./Icons";

export default function IntroDetails() {
  return (
    <div className="pt-20">
      <div className="flex flex-row gap-12 flex-wrap">
        <div className="">
          <Image
            src="/images/avatar.jpg"
            width={300}
            height={300}
            alt="Ian"
            className="aspect-square rotate-3 rounded-2xl object-cover shadow-lg shadow-slate-400"
          />
        </div>
        <div className="max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 pb-4">
            Hi, I'm Ian, a Front-end web developer based in Hong Kong
          </h1>
          <p>
            I'm a front-end React developer with a passion for simplifying
            complex problems and staying up to date with the latest web
            technologies. My focus is on creating responsive, efficient, and
            dynamic websites that meet your specific needs.
          </p>

          <p>
            I specialize in using Tailwind CSS, React, and React frameworks like
            Next.js and Remix. These tools enable me to build powerful websites
            that provide a seamless user experience. I also have a strong sense
            of design and can create visually appealing interfaces that not only
            look great but also function flawlessly.
          </p>

          <p>
            If you have Figma design files, I can convert them into precise
            React components that match the original design. Attention to detail
            is important to me, and I strive to deliver a visually consistent
            final product.
          </p>

          <p>
            With two years of experience in modern web frameworks, I have honed
            my skills in both front-end and back-end development. I am
            proficient in REST APIs and GraphQL, allowing me to develop robust
            and seamlessly integrated web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
