import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Blog } from '@/components/Blog';
import { Stack } from '@/components/Stack';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { profile } from '@/config/profile';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Blog />
        <Stack />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8 dark:border-gray-800">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-xs text-gray-500 sm:flex-row dark:text-gray-400">
          <p>© 2026 {profile.name}. Built with Next.js and Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a className="transition-colors hover:text-gray-900 dark:hover:text-white" href={profile.social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="transition-colors hover:text-gray-900 dark:hover:text-white" href={profile.social.blog} target="_blank" rel="noopener noreferrer">
              Blog
            </a>
            <a className="transition-colors hover:text-gray-900 dark:hover:text-white" href={profile.social.bilibili} target="_blank" rel="noopener noreferrer">
              Bilibili
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
