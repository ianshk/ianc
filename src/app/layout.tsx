import Analytics from '@/components/Analytics';
import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Front-end web developer based in Hong Kong - Ian Callaghan',
  description: 'Personal website for Ian Callaghan a Hong Kong front-end developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
