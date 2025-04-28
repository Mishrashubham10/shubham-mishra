import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Person Portfolio',
  description: 'Person Portfolio Created By Shubham Mishra',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* ========== NAVBAR ========== */}
        <Navbar />

        <main className="min-h-screen p-6">{children}</main>

        {/* ============= FOOTER ============= */}
        <Footer />
      </body>
    </html>
  );
}