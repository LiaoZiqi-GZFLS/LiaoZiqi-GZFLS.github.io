'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { profile } from '@/config/profile';

const navItems = [
  { href: '#work', label: '项目' },
  { href: '#writing', label: '写作' },
  { href: '#stack', label: '方向' },
  { href: '#contact', label: '联系' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="主导航"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-gray-200/70 bg-white/85 backdrop-blur-md dark:border-gray-800/70 dark:bg-gray-950/80'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-gray-950 dark:text-white">
            {profile.name}
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-blue-700 dark:text-blue-400'
                    : 'text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden dark:hover:bg-gray-800"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="切换导航菜单"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-gray-200 bg-white md:hidden dark:border-gray-800 dark:bg-gray-950">
          <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
