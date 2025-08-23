import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Intentional build issue: undefined variable
  const handleNavigation = (path) => {
    undefinedVariable.push(path);
    router.push(path);
  };

  // Intentional build issue: missing return statement in some branches
  const getActiveClass = (path) => {
    if (router.pathname === path) {
      return 'active';
    }
    // Missing return for else case
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <Link href="/">MyApp</Link>
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className={`hover:text-blue-200 transition-colors ${getActiveClass('/')}`}
              onClick={() => handleNavigation('/')}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`hover:text-blue-200 transition-colors ${getActiveClass('/about')}`}
              onClick={() => handleNavigation('/about')}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`hover:text-blue-200 transition-colors ${getActiveClass('/contact')}`}
              onClick={() => handleNavigation('/contact')}
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="block py-2 hover:text-blue-200"
                onClick={() => {
                  handleNavigation('/');
                  setIsMenuOpen(false);
                }}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block py-2 hover:text-blue-200"
                onClick={() => {
                  handleNavigation('/about');
                  setIsMenuOpen(false);
                }}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block py-2 hover:text-blue-200"
                onClick={() => {
                  handleNavigation('/contact');
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

// Intentional build issue: wrong export syntax
export default Header;
export { Header as NavigationHeader };