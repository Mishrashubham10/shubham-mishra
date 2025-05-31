import Link from 'next/link'
import ThemeToggle from './theme-toggle'

export default function Navbar() {
  return (
    <header className='bg-background/75 fixed inset-x-0 top-0 z-50 py-6 backdrop-blur-sm px-6 md:px-8 lg:px-12 xxl:px-16'>
      <nav className='container flex items-center justify-between max-w-screen'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            SM
          </Link>
        </div>

        <ul className='text-muted-foreground flex items-center gap-6 text-sm font-light sm:gap-10'>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}