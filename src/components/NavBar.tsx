import React from 'react';
import DarkSwitch from './DarkSwitch';

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between">
      <p className="mt-4 text-2xl font-extrabold text-slate-800 dark:text-slate-50 md:text-3xl">
        Ian Callaghan
      </p>
      <div className="mt-5">
        <DarkSwitch />
      </div>
    </div>
  );
}
