import React from 'react';
import ProjectCard from './ProjectCard';

const cardItems = [
  {
    id: 1,
    title: 'Movie Time',
    description:
      'A Movie suggestion site made with Next 13 (React) and Tailwind CSS. Uses features of Next 13 such as server components and fetching API data from the server.',
    link: 'https://github.com/ianshk/newmovies',
  },
  {
    id: 2,
    title: 'Personal website',
    description: 'This site made with Next 13 (React) and Tailwind CSS.',
    link: 'https://github.com/ianshk/ianc',
  },
  {
    id: 3,
    title: 'Varia',
    description: 'Create a headless design system using React Aria, Tailwind CSS, and cva for variants.',
    link: 'https://github.com/ianshk/varia',
  },
  {
    id: 4,
    title: 'MantineTW',
    description:
      'An example repro shoing how to use the Mantine component library with TailwindCSS for styling and utilities.',
    link: 'https://github.com/ianshk/MantineTW',
  },
];

export default function OpenSource() {
  return (
    <div className="pb-16">
      <hr className="border-t-1 mx-auto mb-10 w-80 border-t-slate-300" />
      <h2 className="pb-8 text-center text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-50 md:text-4xl">
        Open Source Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {cardItems.map((item) => (
          <ProjectCard key={item.id} title={item.title} description={item.description} link={item.link} />
        ))}
      </div>
    </div>
  );
}
