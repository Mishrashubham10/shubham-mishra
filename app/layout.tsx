import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/providers'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Person Portfolio',
  description: 'Person Portfolio Created By Shubham Mishra'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen w-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Navbar />
          <main className='xxl:px-16 grow px-6 md:px-8 lg:px-12'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}