'use client';

import React from 'react';
import { useLocale } from 'next-intl';

import { useRouter, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function LanguageSelector() {
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (locale: string) => {
    startTransition(() => {
      router.replace({ pathname }, { locale: locale });
    });
  };

  return (
    <div className='flex items-center bg-muted rounded-lg p-1 shadow-sm border border-border'>
      <Button
        variant='ghost'
        size='sm'
        className={cn(
          'relative transition-all duration-200 cursor-pointer',
          'text-xs px-2 py-1 sm:text-sm sm:px-3 sm:py-2',
          locale === 'fi'
            ? 'bg-background text-foreground shadow-sm hover:bg-muted'
            : 'hover:bg-[var(--accent-light)]/50'
        )}
        onClick={() => handleLanguageChange('fi')}
        disabled={isPending}
        aria-label='Switch to Finnish'
      >
        Suomi
        {locale === 'fi' && (
          <div className='absolute inset-0 rounded-md ring-2 ring-primary/20 pointer-events-none' />
        )}
      </Button>

      <div className='w-px h-4 bg-border mx-1' />

      <Button
        variant='ghost'
        size='sm'
        className={cn(
          'relative transition-all duration-200 cursor-pointer',
          'text-xs px-2 py-1 sm:text-sm sm:px-3 sm:py-2',
          locale === 'en'
            ? 'bg-background text-foreground shadow-sm hover:bg-muted'
            : 'hover:bg-[var(--accent-light)]/50'
        )}
        onClick={() => handleLanguageChange('en')}
        disabled={isPending}
        aria-label='Switch to English'
      >
        English
        {locale === 'en' && (
          <div className='absolute inset-0 rounded-md ring-2 ring-primary/20 pointer-events-none' />
        )}
      </Button>
    </div>
  );
}
