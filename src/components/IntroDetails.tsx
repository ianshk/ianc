import React from "react";
import Image from "next/image";

export default function IntroDetails() {
  return (
    <div className="pt-20">
      <div className="flex flex-row gap-10 flex-wrap">
        <div className="">
          <Image
            src="/images/avatar.jpg"
            width={300}
            height={300}
            alt="Ian"
            className="grayscale aspect-square rotate-2 rounded-2xl bg-zinc-100 object-cover"
          />
        </div>
        <div className="pt-4 max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 pb-4">
            Hi, I'm Ian, a Front-end web developer based in Hong Kong
          </h1>
          <p>
            Welcome to my website! I'm a front-end React developer who is
            passionate about simplifying complex problems and keeping up with
            the latest web technologies.
          </p>

          <p>
            I absolutely love working with Tailwind CSS, React, and React
            frameworks like Next.js and Remix. These powerful tools allow me to
            create responsive, efficient, and dynamic websites that cater to
            your unique requirements.
          </p>

          <p>
            With a solid grasp of server-side and client-side rendering, I
            ensure that your website delivers a seamless user experience. I also
            have a keen eye for design, enabling me to craft visually appealing
            interfaces that not only look fantastic but also function
            flawlessly.
          </p>

          <p>
            If you have Figma design files, I can take them and turn them into
            pixel-perfect React components. Every detail matters, and I strive
            to deliver a visually consistent and precise final product.
          </p>

          <p>
            With two years of experience working with modern web frameworks,
            I've honed my skills in both front-end and back-end development. I'm
            well-versed in REST APIs and GraphQL, allowing me to create robust
            and seamlessly integrated web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
