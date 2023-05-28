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
            I'm Ian, a{' '}
            <span className="bg-gradient-to-tl from-teal-600 to-teal-500 bg-clip-text text-transparent dark:to-teal-400">
              Front-end web developer
            </span>{' '}
            based in Hong Kong
          </h1>
          <p>
            I'm a React developer who enjoys simplifying complex problems and staying updated with the latest
            web technologies. My main focus is on creating responsive, efficient, and dynamic websites and
            applications.
          </p>
          <p>
            I specialize in using React and its frameworks like <a href="https://nextjs.org/"> Next.js</a> and{' '}
            <a href="https://remix.run/"> Remix</a>. Additionally, I love working with the{' '}
            <a href="https://tailwindcss.com/"> Tailwind CSS</a> library. These tools allow me to build web
            applications that provide a smooth user experience. I also have a keen eye for design and can
            create visually appealing interfaces that not only look great but also function flawlessly.
          </p>
          <p>
            I have the necessary skills to convert design files from platforms such as Figma, Sketch, and
            Adobe XD into React components that accurately represent the original design.
          </p>
          <p>
            Throughout my professional career, I have acquired expertise in both front-end and back-end
            frameworks. This has provided me with a strong understanding of REST and GraphQL, enabling
            seamless integration with backend servers for optimal functionality.
          </p>
          <p>
            I am eager to learn and grow, and I enjoy working on fresh and exciting projects. If you're
            interested in collaborating, please feel free to <a href="mailto:ianshk@gmail.com"> reach out</a>.
          </p>
          <div className="block md:hidden">
            <IconList />
          </div>
        </div>
      </div>
    </div>
  );
}
