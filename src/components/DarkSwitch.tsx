'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const DarkSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let currentTheme = theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <SunIcon
          className="h-6 w-6 cursor-pointer text-amber-400"
          onClick={() => {
            setTheme('light');
          }}
        />
      ) : (
        <MoonIcon
          className="h-6 w-6 cursor-pointer text-teal-900"
          onClick={() => {
            setTheme('dark');
          }}
        />
      )}
    </div>
  );
};
export default DarkSwitch;
