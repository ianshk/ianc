import React from 'react';
import Image from 'next/image';
import IconList from './IconList';

export default function Intro() {
  return (
    <div className="pb-10 pt-14">
      <div className="flex flex-row flex-wrap gap-12">
        <div className=" mx-auto md:mx-0">
          <Image
            src="/images/avatar.jpg"
            width={300}
            height={300}
            alt="Ian"
            className="aspect-square rotate-3 rounded-2xl object-cover shadow-lg shadow-slate-400 dark:shadow-slate-950"
          />
          <div className="hidden pt-0 md:block md:pt-10">
            <IconList />
          </div>
        </div>
        <div className="max-w-md">
          <h1 className="pb-4 text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-50 md:text-4xl">
            I'm Ian, a Senior{' '}
            <span className="bg-gradient-to-tl from-teal-600 to-teal-500 bg-clip-text text-transparent dark:to-teal-400">
              Web developer
            </span>{' '}
            based in Hong Kong
          </h1>
          <p>
            I'm a passionate web developer who enjoys simplifying complex problems and staying updated with
            the latest web technologies. My main focus is on creating responsive, speed optimized, dynamic
            websites and applications.
          </p>
          <p>
            I specialize in using <a href="https://react.dev/">React</a> and modern frameworks such as{' '}
            <a href="https://nextjs.org/">Next.js</a> and
            <a href="https://remix.run/"> Remix</a> and<a href="https://astro.build/"> Astro</a>.
            Additionally, I love working with
            <a href="https://tailwindcss.com/"> Tailwind CSS.</a> These tools allow me to build web
            applications that provide an enjoyable user experience.
          </p>
          <p>
            I have a strong sense of design and can create visually appealing interfaces that are both
            beautiful and highly functional.
          </p>
          <p>
            Throughout my professional career, I have had the opportunity to work in various roles within
            software development, including front-end, back-end, and full-stack positions. This diverse
            experience has allowed me to gain comprehensive knowledge and expertise in different aspects of
            web development.
          </p>
          <p>
            I enjoy working on new and exciting projects and I'm available for consultation, contract work,
            and full-time remote positions.
          </p>
          <div className="block md:hidden">
            <IconList />
          </div>
        </div>
      </div>
    </div>
  );
}
