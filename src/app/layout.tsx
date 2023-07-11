import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './theme-provider';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Front-end web developer based in Hong Kong - Ian Callaghan',
  description: 'Personal website for Ian Callaghan a Hong Kong front-end developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex h-screen w-full max-w-7xl px-4 lg:px-8">
            <div className="h-screen w-full bg-white ring-1 ring-slate-200 dark:bg-gray-900 dark:ring-gray-800"></div>
          </div>
        </div>
        <div className="relative">
          <div className="container mx-auto max-w-2xl px-12 lg:max-w-4xl">
            <Providers>{children}</Providers>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
