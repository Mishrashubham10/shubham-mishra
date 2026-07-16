import { navigation } from '@/data/navigation';
import { NavItem } from './NavItem';

export function DesktopNav() {
  return (
    <nav className='hidden item-center gap:8 md:flex'>
      {navigation.map((item) => (
        <NavItem key={item.id} {...item} />
      ))}
    </nav>
  );
}