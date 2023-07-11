import React from 'react';
import Intro from '@/components/Intro';
import Footer from '@/components/Footer';
import OpenSource from '@/components/OpenSource';
import TechStack from '@/components/TechStack';
import NavBar from '@/components/NavBar';
import { Clients } from '@/components/Clients';

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <OpenSource />
      <Clients />
      <TechStack />
    </>
  );
}
