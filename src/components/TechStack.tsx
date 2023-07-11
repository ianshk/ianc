import React from 'react';

export default function TechStack() {
  return (
    <div className="pb-10">
      <hr className="border-t-1 mx-auto mb-10 w-80 border-t-slate-300" />
      <h2 className="pb-4 text-center text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-50 md:text-4xl">
        Tech Stack
      </h2>
      <div className="pb-2">
        <div className="block pb-2 text-base font-semibold text-slate-800 dark:text-slate-50">Languages</div>
        <div className="flex flex-row flex-wrap gap-3 pb-2">
          <div className="tech-pill">JavaScript</div>
          <div className="tech-pill">TypeScript</div>
        </div>
      </div>
      <div className="pb-2">
        <div className="block pb-2 text-base font-semibold text-slate-800 dark:text-slate-50">Front-end</div>
        <div className="flex flex-row flex-wrap gap-3 pb-2">
          <div className="tech-pill">React</div>
          <div className="tech-pill">Next.js</div>
          <div className="tech-pill">Remix</div>
          <div className="tech-pill">Vue | Nuxt</div>
          <div className="tech-pill">Astro</div>
          <div className="tech-pill">Tailwind CSS</div>
        </div>
      </div>
      <div className="pb-2">
        <div className="block pb-2 text-base font-semibold text-slate-800 dark:text-slate-50">Back-end | Database | ORM</div>
        <div className="flex flex-row flex-wrap gap-3 pb-2">
          <div className="tech-pill">Nest.js</div>
          <div className="tech-pill">Express.js</div>
          <div className="tech-pill">Prisma</div>
          <div className="tech-pill">Drizzle</div>
          <div className="tech-pill">Planetscale</div>
          <div className="tech-pill">Stripe</div>
        </div>
      </div>
      <div className="pb-2">
        <div className="block pb-2 text-base font-semibold text-slate-800 dark:text-slate-50">Tools | Hosting</div>
        <div className="flex flex-row flex-wrap gap-3 pb-2">
          <div className="tech-pill">Vercel</div>
          <div className="tech-pill">AWS (SST)</div>
          <div className="tech-pill">Railway</div>
          <div className="tech-pill">Cloudflare</div>
          <div className="tech-pill">Docker</div>
        </div>
      </div>
    </div>
  );
}
