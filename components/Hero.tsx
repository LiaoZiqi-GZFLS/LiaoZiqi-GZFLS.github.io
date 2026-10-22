import Image from 'next/image';
import { ArrowUpRight, BookOpen, Github } from 'lucide-react';
import { profile } from '@/config/profile';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_65%,transparent_100%)]"
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">
              {profile.title}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-950 dark:text-white md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl text-gray-700 dark:text-gray-200 md:text-2xl">
              {profile.tagline}
            </p>
            <p className="mt-6 max-w-2xl leading-8 text-gray-600 dark:text-gray-400">
              {profile.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={profile.social.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                <BookOpen className="h-4 w-4" />
                博客
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
              >
                看项目
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-gray-200 pt-6 dark:border-gray-800">
              {profile.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="font-mono text-lg font-semibold text-gray-950 dark:text-white md:text-xl">
                    {metric.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-52 md:w-full md:max-w-[280px]">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/15 via-transparent to-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={320}
                height={320}
                className="h-auto w-full rounded-[1.35rem] object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 left-4 rounded-full border border-gray-200 bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
              SUSTech · Systems
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
