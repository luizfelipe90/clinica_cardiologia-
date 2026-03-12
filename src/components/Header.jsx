import React, { useState, useEffect } from 'react';
import { Menu, X, HeartPulse } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Corpo Clínico', href: '#equipe' },
    { name: 'Ambiente', href: '#ambiente' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-gold-gradient' : 'bg-white shadow-sm'}`}>
              <HeartPulse className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-primary-600'}`} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <span className="text-primary-600">Clínica</span> Cardiológica
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contato" className="btn-primary text-sm px-5 py-2.5">
              Agendar Consulta
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-primary-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="mt-4 block w-full text-center btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
