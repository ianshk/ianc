import React from 'react';
import Image from 'next/image';
import IconList from './IconList';

export default function Intro() {
  return (
    <div className="pt-14 pb-10">
      <div className="flex flex-row gap-12 flex-wrap">
        <div className=" mx-auto md:mx-0">
          <Image
            src="/images/avatar.jpg"
            width={300}
            height={300}
            alt="Ian"
            className="aspect-square rotate-3 rounded-2xl object-cover shadow-lg shadow-slate-400"
          />
          <div className="hidden md:block md:pt-10 pt-0">
            <IconList />
          </div>
        </div>
        <div className="max-w-md">
          <span className="inline-flex items-center rounded-full bg-teal-50 px-2 py-1 text-base font-medium text-teal-900 ring-1 ring-inset ring-teal-600/20 mb-2">
            Hi there 👋
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 pb-4">
            I'm Ian, a Front-end web developer based in Hong Kong
          </h1>
          <p>
            I'm a front-end React developer with a passion for simplifying complex problems and staying up to
            date with the latest web technologies. My focus is on creating responsive, efficient, and dynamic
            websites and applications.
          </p>
          <p>
            I specialize in using React, and React frameworks like
            <a href="https://nextjs.org/"> Next.js</a> and
            <a href="https://remix.run/"> Remix</a>. I also love working with the
            <a href="https://tailwindcss.com/"> Tailwind CSS</a> library, These tools enable me to build
            powerful websites that provide a seamless user experience. I also have a strong sense of design
            and can create visually appealing interfaces that not only look great but also function
            flawlessly.
          </p>
          <p>
            I possess the necessary skills to transform Figma designs into React components that accurately
            reflect the original design. I prioritize meticulous attention to detail and strive to provide a
            visually cohesive end product.
          </p>
          <p>
            Over the years I have honed my skills in both front-end javascript frameworks and back-end
            frameworks, allowing me to develop robust and seamlessly integrated web applications.
          </p>
          <p>
            I'm always looking for new ways to grow and learn. If you have any work opportunities that you
            think might be a good fit for me, please don't hesitate to reach out.
          </p>
          <div className="md:hidden block">
            <IconList />
          </div>
        </div>
      </div>
    </div>
  );
}
