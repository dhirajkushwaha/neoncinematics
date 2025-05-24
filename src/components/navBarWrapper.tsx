'use client'

import { usePathname } from 'next/navigation'
import Navbar from './navBar'

const pathToLabelMap: Record<string, string> = {
  '/': 'HOME',
  '/events': 'EVENTS',
  '/team': 'TEAM',
  '/goal': 'GOAL',
  '/blog': 'BLOG',
  '/shots': 'SHOTS',
  '/about': 'ABOUT',
}

export default function NavbarWrapper() {
  const pathname = usePathname()
  const activeLabel = pathToLabelMap[pathname] || ''

  return <Navbar active={activeLabel} />
}
