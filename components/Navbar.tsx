import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="p-4 flex justify-between">
      <div className="text-xl font-bold">My Website</div>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}