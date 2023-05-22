import React from 'react';
import ProjectCard from './ProjectCard';

export default function OpenSource() {
  return (
    <div className="pb-10">
      <hr className="border-t-1 mx-auto mb-10 w-80 border-t-slate-300" />
      <h2 className="pb-8 text-center text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
        Open Source Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ProjectCard
          title="Movie Time"
          description="A Movie suggestion site made with Next 13 (React) and Tailwind CSS. Uses features of Next 13 such as server components and fetching API data from the server."
          link="https://github.com/ianshk/newmovies"
        />
        <ProjectCard
          title="Personal website"
          description="This site made with Next 13 (React) and Tailwind CSS."
          link="https://github.com/ianshk/ianc"
        />
        <ProjectCard
          title="Varia"
          description="Create a headless design system using React Aria, Tailwind CSS, and cva for variants."
          link="https://github.com/ianshk/varia"
        />
        <ProjectCard
          title="MantineTW"
          description="An example repro shoing how to use the Mantine component library with TailwindCSS for styling and utilities."
          link="https://github.com/ianshk/MantineTW"
        />
      </div>
    </div>
  );
}
