import React from 'react';
import Image from 'next/image';

const LogoList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 pb-16 md:grid-cols-4">
      <div className="logo-pill flex justify-center">
        <Image src="/images/kobotix-logo.png" width={130} height={30} alt="Kobotix logo" />
      </div>
      <div className="logo-pill flex justify-center">
        <Image src="/images/wowwee-logo.png" width={100} height={30} alt="WowWee logo" />
      </div>
      <div className="logo-pill flex justify-center">
        <Image src="/images/dreamwriters-logo.png" width={200} height={30} alt="Dreamwriters logo" />
      </div>
      <div className="logo-pill flex justify-center">
        <Image src="/images/easyonlineads-logo.png" width={200} height={30} alt="Easyonlineads logo" />
      </div>
    </div>
  );
};

export const Clients = () => {
  return (
    <>
      <hr className="border-t-1 mx-auto mb-10 w-80 border-t-slate-300" />
      <h2 className="pb-8 text-center text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-50 md:text-4xl">
        Proudly Worked With
      </h2>
      <LogoList />
    </>
  );
};
