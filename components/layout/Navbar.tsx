'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { SBC_CONFIG } from '@/lib/config'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'SBC Academy', href: '/academy' },
    { name: 'Tokenomics', href: '/tokenomics' },
    { name: 'Whitepaper', href: '/whitepaper' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ]

  const aboutLinks = [
    { name: 'Our Team', href: '/about/team' },
    { name: 'Quick Overview', href: '/about/overview' },
    { name: 'Audit Result', href: '/about/audit' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#050a0e]/92 backdrop-blur-lg border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-48 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="https://surinamebitcoin.finance/wp-content/uploads/2024/02/cropped-Logo-transparent.png" 
                alt="Suriname Bitcoin" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button 
                onMouseEnter={() => setAboutOpen(true)}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${pathname.startsWith('/about') ? 'text-primary' : 'text-muted'}`}
              >
                <span>About Us</span>
                <ChevronDown size={14} />
              </button>
              
              <div 
                onMouseLeave={() => setAboutOpen(false)}
                className={`absolute top-full left-0 w-48 bg-bg2 border border-primary/20 rounded-xl py-2 mt-2 transition-all duration-200 ${aboutOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              >
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors ${isActive(link.href) ? 'text-primary bg-primary/5' : 'text-muted'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.href) ? 'text-primary' : 'text-muted'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:block">
            <a 
              href={SBC_CONFIG.links.buy} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(235,6,249,0.3)] hover:shadow-[0_0_30px_rgba(235,6,249,0.5)] transition-all hover:-translate-y-0.5"
            >
              Buy SBC
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted hover:text-white transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-t border-primary/10' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-8 space-y-4 bg-bg">
          <div className="space-y-2">
            <p className="text-xs font-bold text-primary/50 uppercase tracking-widest px-2">About</p>
            {aboutLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-2 py-2 text-lg font-medium ${isActive(link.href) ? 'text-primary' : 'text-muted'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="space-y-2 pt-4 border-t border-white/5">
            <p className="text-xs font-bold text-primary/50 uppercase tracking-widest px-2">Menu</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-2 py-2 text-lg font-medium ${isActive(link.href) ? 'text-primary' : 'text-muted'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-6">
            <a 
              href={SBC_CONFIG.links.buy}
              className="block w-full text-center bg-primary text-white py-4 rounded-xl font-bold"
            >
              Buy SBC
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
