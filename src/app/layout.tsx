import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

const outfitSans = Outfit({
  variable: '--font-outfit-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AI Job Prep App',
  description: 'Created by Shubham Mishra',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfitSans.variable} antialiased font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableColorScheme
          disableTransitionOnChange
        >
          <Navbar />
          <main className='min-h-screen'>{children}</main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}