import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

import Providers from './provider';

import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Shubham Mishra',
  description:
    'Software Engineer specializing in building modern web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-foreground`}
      >
        <Providers>
          <ScrollProgress />

          <Navbar />

          <main className="relative min-h-screen overflow-x-hidden">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}