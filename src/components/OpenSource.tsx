import React from 'react';
import ProjectCard from './ProjectCard';

export default function OpenSource() {
  return (
    <div className="pb-10">
      <hr className="border-t-1 border-t-slate-300 mx-auto w-80 mb-10" />
      <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-slate-800 pb-8">
        Open Source Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>
    </div>
  );
}
