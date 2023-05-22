import React from 'react';
import DarkSwitch from './DarkSwitch';

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between">
      <p className="text-1xl mt-4 font-extrabold text-slate-700 dark:text-slate-50 md:text-2xl">
        Ian Callaghan
      </p>
      <div className="mt-5">
        <DarkSwitch />
      </div>
    </div>
  );
}
