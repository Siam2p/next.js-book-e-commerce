'use client';

import { StoreContext } from '@/app/context';
import { HomeIcon, BookOpenIcon, RectangleStackIcon, ShoppingCartIcon, TruckIcon, UserGroupIcon, CogIcon, Squares2X2Icon, CubeTransparentIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useContext } from 'react';

const links: {name: string, href: string, icon: React.ComponentType}[] = [
  {name: 'Home', href: '/', icon: HomeIcon},
  {name: 'Books', href: '/store', icon: BookOpenIcon},
  {name: 'Sell or Lend', href: '/store/sell-lend', icon: RectangleStackIcon},
  {name: 'Cart', href: '/store/cart', icon: ShoppingCartIcon},
  {name: 'Track Order', href: '/store/track-order', icon: TruckIcon},
  {name: 'Community', href: '/store/community', icon: UserGroupIcon},
  {name: 'Settings', href: '/store/settings', icon: CogIcon},
  {name: 'About', href: '/store/about', icon: Squares2X2Icon},
  {name: 'Admin', href: '/store/admin', icon: CubeTransparentIcon},
]


export default function NavLinks() {

  const {cartData} = useContext(StoreContext)!;

  const totalItem = cartData.reduce(
  (total, item) => total + (item.quantity ?? 0),
  0
);


  return (
    <>
      {links.map((link:{name: string, href: string, icon: React.ComponentType<React.SVGProps<SVGSVGElement>>}) => {
        const Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> = link.icon;
        return(
          <Link key={link.name} href={link.href} className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3 ${link.name === 'Cart' && totalItem <= 0 && 'hidden'}`}>
            <Icon className={`h-6 w-6 ${link.name === 'Cart' && totalItem > 0 && 'text-purple-600'}`} />
            {
              link.name === 'Cart' && totalItem > 0 ? (
                <span className='text-purple-600'><span className=' max-md:hidden'>{link.name} </span>({totalItem})</span>
              ) : (
                <span className=' max-md:hidden'>{link.name}</span>
              )
            }
          </Link>
        )
      })}
    </>
  )
}
