import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { ThemeToggle } from '@/components/theme-toggle';

export default function ThemePage() {
  const t = useTranslations('HomePage');

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <header className='border-b border-border bg-surface/50 backdrop-blur-sm'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <h1 className='text-2xl font-bold text-primary'>{t('title')}</h1>
          <Link href='/'>Home</Link>
          <ThemeToggle />
        </div>
      </header>

      <main className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto space-y-6'>
          <div className='bg-surface rounded-lg p-6 shadow-lg'>
            <h2 className='text-xl font-semibold mb-4'>
              Welcome to your themed app!
            </h2>
            <p className='text-muted mb-4'>
              This page demonstrates the theme switching functionality. Try
              clicking the theme toggle in the header.
            </p>
            <div className='flex gap-4'>
              <Link
                href='/about'
                className='px-4 py-2 bg-primary text-on-primary rounded-lg hover:bg-primary-dark transition-colors'
              >
                {t('about')}
              </Link>
              <button className='px-4 py-2 bg-secondary text-on-secondary rounded-lg hover:bg-secondary-dark transition-colors'>
                Secondary Button
              </button>
              <button className='px-4 py-2 bg-accent text-foreground rounded-lg hover:opacity-90 transition-opacity'>
                Accent Button
              </button>
              {/* Disabled button */}
              <button className='px-4 py-2 bg-muted text-on-muted rounded-lg opacity-50 cursor-not-allowed'>
                Disabled Button
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-info/20 border border-info/30 rounded-lg p-4'>
              <h3 className='font-semibold text-info mb-2'>Info Card</h3>
              <p className='text-sm text-muted'>
                This is an info card with custom styling.
              </p>
            </div>
            <div className='bg-success/20 border border-success/30 rounded-lg p-4'>
              <h3 className='font-semibold text-success mb-2'>Success Card</h3>
              <p className='text-sm text-muted'>
                This is a success card with custom styling.
              </p>
            </div>
            <div className='bg-warning/20 border border-warning/30 rounded-lg p-4'>
              <h3 className='font-semibold text-warning mb-2'>Warning Card</h3>
              <p className='text-sm text-muted'>
                This is a warning card with custom styling.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
