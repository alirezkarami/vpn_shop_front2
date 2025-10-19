import React, { useState } from 'react';
import Logo from './ui/Logo';
import Button from './ui/Button';

const NavLinks = [
  { name: 'ویژگی‌ها', href: '#features' },
  { name: 'قیمت‌ها', href: '#pricing' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a192f]/80 backdrop-blur-lg border-b border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Logo className="h-12 w-auto text-cyan-400" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-lg">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="primary" size="md">شروع کنید</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="باز کردن منوی اصلی"
            >
              <span className="sr-only">باز کردن منوی اصلی</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NavLinks.map((link) => (
              <a key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">
                {link.name}
              </a>
            ))}
          </div>
           <div className="p-4">
              <Button variant="primary" size="md" className="w-full">شروع کنید</Button>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;