import React from 'react';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <Link href={link}>
      <div className="block h-full items-stretch rounded-lg border border-slate-200 bg-white p-6 transition-transform ease-out hover:scale-105 dark:border-slate-700 dark:bg-slate-800">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-700 dark:text-slate-50">{title}</h5>
        <p className="font-normal text-slate-500 dark:text-slate-400">{description}</p>
      </div>
    </Link>
  );
}
