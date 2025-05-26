'use client'

import { useLayoutEffect, useState, useRef} from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

interface NavbarProps {
  active?: string
}

export default function Navbar({ active }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/events', label: 'EVENTS' },
    { href: '/team', label: 'TEAM' },
    { href: '/goal', label: 'GOAL' },
    { href: '/blog', label: 'BLOG' },
    { href: '/shots', label: 'SHOTS' },
    { href: '/about', label: 'ABOUT' },
  ]
  const navRef =  useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      navRef.current,
      {
          opacity:0,
      },
      {
        duration: 0.5, delay:0.5, opacity:1,
        y: 0,
      }
    )
  }, [])

  return (
    <nav ref={navRef} className=" opacity-0  bg-black text-white relative z-50 polysans">
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-center items-center space-x-20 tracking-wide py-9 font-bold text-white">
        {links.map(link => (
          <Link key={link.href} href={link.href}>
            <span
              className={`transition-transform duration-200 hover:scale-105 ${
                active === link.label ? 'text-orange-400' : 'hover:text-orange-400'
              }`}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden justify-between items-center px-4 py-6">
        <div className="text-lg font-bold text-white"> <Link href={"./"}> Neon Cinematics </Link> </div>
        <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center z-50 polysans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            <div className="space-y-6 font-bold text-white text-xl">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={link.href}>
                    <span
                      onClick={() => setIsOpen(false)}
                      className={`transition-transform duration-200 hover:scale-105 ${
                        active === link.label ? 'text-orange-400' : 'hover:text-orange-400'
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
