import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import LanguageSelector from '@/components/language-selector';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <header className='border-b border-border bg-surface/50 backdrop-blur-sm'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <h1 className='text-2xl font-bold text-primary'>{t('title')}</h1>
          <Link href='/theme'>Theme</Link>
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </header>

      <main className='container mx-auto px-4 py-8'>
        <h1>Home</h1>
      </main>
    </div>
  );
}
