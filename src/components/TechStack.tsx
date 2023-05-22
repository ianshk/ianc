import React from 'react';

export default function TechStack() {
  return (
    <div className="pb-10">
      <hr className="border-t-1 mx-auto mb-10 w-80 border-t-slate-300" />
      <h2 className="pb-4 text-center text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-50 md:text-4xl">
        Tech Stack
      </h2>
      <div className="pb-2">
        <div className="block pb-2 text-base font-semibold">Languages</div>
        <div className="flex flex-row flex-wrap gap-3 pb-2">
          <div className="rounded bg-emerald-200 px-4 py-2 text-sm text-slate-800 dark:bg-emerald-300">
            JavaScript
          </div>
          <div className="rounded bg-emerald-200 px-4  py-2 text-sm text-slate-800 dark:bg-emerald-300">
            TypeScript
          </div>
        </div>
      </div>
      <div className="pb-2">
        <div className="block pb-2 text-base font-semibold">Front-end</div>
        <div className="flex flex-row flex-wrap gap-3 pb-2">
          <div className="rounded bg-cyan-200 px-4 py-2 text-sm text-slate-800 dark:bg-cyan-300">React</div>
          <div className="rounded bg-cyan-200 px-4 py-2 text-sm text-slate-800 dark:bg-cyan-300">Next.js</div>
          <div className="rounded bg-cyan-200 px-4 py-2 text-sm text-slate-800 dark:bg-cyan-300">Remix</div>
          <div className="rounded bg-cyan-200 px-4 py-2 text-sm text-slate-800 dark:bg-cyan-300">
            Vue | Nuxt
          </div>
          <div className="rounded bg-cyan-200 px-4 py-2 text-sm text-slate-800 dark:bg-cyan-300">Astro</div>
          <div className="rounded bg-cyan-200 px-4 py-2 text-sm text-slate-800 dark:bg-cyan-300">
            Tailwind CSS
          </div>
        </div>
      </div>
      <div className="pb-2">
        <div className="block pb-2 text-base font-semibold">Back-end | Database | ORM</div>
        <div className="flex flex-row flex-wrap gap-3 pb-2">
          <div className="rounded bg-lime-200 px-4 py-2 text-sm text-slate-800 dark:bg-lime-300">Nest.js</div>
          <div className="rounded bg-lime-200 px-4 py-2 text-sm text-slate-800 dark:bg-lime-300">
            Express.js
          </div>
          <div className="rounded bg-lime-200 px-4 py-2 text-sm text-slate-800 dark:bg-lime-300">Prisma</div>
          <div className="rounded bg-lime-200 px-4 py-2 text-sm text-slate-800 dark:bg-lime-300">Drizzle</div>
          <div className="rounded bg-lime-200 px-4 py-2 text-sm text-slate-800 dark:bg-lime-300">
            Planetscale
          </div>
          <div className="rounded bg-lime-200 px-4 py-2 text-sm text-slate-800 dark:bg-lime-300">Stripe</div>
        </div>
      </div>
      <div className="pb-2">
        <div className="block pb-2 text-base font-semibold">Tools | Hosting</div>
        <div className="flex flex-row flex-wrap gap-3 pb-2">
          <div className="rounded bg-amber-200 px-4 py-2 text-sm text-slate-800 dark:dark:bg-amber-300">
            Vercel
          </div>
          <div className="rounded bg-amber-200 px-4 py-2 text-sm text-slate-800 dark:dark:bg-amber-300">
            AWS (SST)
          </div>
          <div className="rounded bg-amber-200 px-4 py-2 text-sm text-slate-800 dark:dark:bg-amber-300">
            Railway
          </div>
          <div className="rounded bg-amber-200 px-4 py-2 text-sm text-slate-800 dark:dark:bg-amber-300">
            Cloudflare
          </div>
          <div className="rounded bg-amber-200 px-4 py-2 text-sm text-slate-800 dark:dark:bg-amber-300">
            Docker
          </div>
        </div>
      </div>
    </div>
  );
}
