'use client';

import { useTheme } from 'next-themes';
import { useState, useRef, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themes = [
    { value: 'light' as const, label: 'Light', icon: '☀️' },
    { value: 'dark' as const, label: 'Dark', icon: '🌙' },
    { value: 'system' as const, label: 'System', icon: '💻' },
  ];

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className='flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground bg-background border border-border rounded-lg'>
        <span className='text-lg'>💻</span>
        <span className='hidden sm:flex min-w-[60px] items-center justify-center'>
          <svg
            className='w-4 h-4 animate-spin'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
            />
          </svg>
        </span>
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>
    );
  }

  const currentTheme = themes.find((t) => t.value === theme) || themes[2];

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground bg-background border border-border rounded-lg hover:bg-background-alt transition-colors'
        aria-label='Toggle theme'
      >
        <span className='text-lg'>{currentTheme.icon}</span>
        <span className='hidden sm:inline min-w-[60px]'>
          {currentTheme.label}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-lg z-50'>
          {themes.map((themeOption) => (
            <button
              key={themeOption.value}
              onClick={() => {
                setTheme(themeOption.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-background-alt transition-colors ${
                theme === themeOption.value
                  ? 'text-primary bg-primary-light/10'
                  : 'text-foreground'
              }`}
            >
              <span className='text-lg'>{themeOption.icon}</span>
              <span>{themeOption.label}</span>
              {theme === themeOption.value && (
                <svg
                  className='w-4 h-4 ml-auto'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
