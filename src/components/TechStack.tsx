import React from 'react';

export default function TechStack() {
  return (
    <div>
      <hr className="border-t-1 mx-auto mb-10 w-80 border-t-slate-300" />
      <h2 className="pb-4 text-center text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
        Tech Stack
      </h2>
      <div className="pb-2">
        <div className="block pb-2 text-base font-semibold">Languages</div>
        <div className="flex flex-row flex-wrap gap-3 pb-2">
          <div className="rounded bg-emerald-200 px-4 py-2 text-sm text-slate-800">JavaScript</div>
          <div className="rounded bg-emerald-200 px-4 py-2 text-sm text-slate-800">TypeScript</div>
        </div>
      </div>
      <div className="pb-2">
        <div className="block pb-2 text-base font-semibold">Front-end</div>
        <div className="flex flex-row flex-wrap gap-3 pb-2">
          <div className="rounded bg-cyan-200 px-4 py-2 text-sm text-slate-800">React</div>
          <div className="rounded bg-cyan-200 px-4 py-2 text-sm text-slate-800">Next.js</div>
          <div className="rounded bg-cyan-200 px-4 py-2 text-sm text-slate-800">Remix</div>
          <div className="rounded bg-cyan-200 px-4 py-2 text-sm text-slate-800">Vue | Nuxt</div>
          <div className="rounded bg-cyan-200 px-4 py-2 text-sm text-slate-800">Astro</div>
          <div className="rounded bg-cyan-200 px-4 py-2 text-sm text-slate-800">Tailwind CSS</div>
        </div>
      </div>
      <div className="pb-2">
        <div className="block pb-2 text-base font-semibold">Back-end | Database | ORM</div>
        <div className="flex flex-row flex-wrap gap-3 pb-2">
          <div className="rounded bg-lime-200 px-4 py-2 text-sm text-slate-800">Nest.js</div>
          <div className="rounded bg-lime-200 px-4 py-2 text-sm text-slate-800">Express.js</div>
          <div className="rounded bg-lime-200 px-4 py-2 text-sm text-slate-800">Prisma</div>
          <div className="rounded bg-lime-200 px-4 py-2 text-sm text-slate-800">Drizzle</div>
          <div className="rounded bg-lime-200 px-4 py-2 text-sm text-slate-800">Planetscale</div>
          <div className="rounded bg-lime-200 px-4 py-2 text-sm text-slate-800">Stripe</div>
        </div>
      </div>
      <div className="pb-2">
        <div className="block pb-2 text-base font-semibold">Tools | Hosting</div>
        <div className="flex flex-row flex-wrap gap-3 pb-2">
          <div className="rounded bg-amber-200 px-4 py-2 text-sm text-slate-800">Vercel</div>
          <div className="rounded bg-amber-200 px-4 py-2 text-sm text-slate-800">AWS (SST)</div>
          <div className="rounded bg-amber-200 px-4 py-2 text-sm text-slate-800">Railway</div>
          <div className="rounded bg-amber-200 px-4 py-2 text-sm text-slate-800">Cloudflare</div>
          <div className="rounded bg-amber-200 px-4 py-2 text-sm text-slate-800">Docker</div>
        </div>
      </div>
    </div>
  );
}
