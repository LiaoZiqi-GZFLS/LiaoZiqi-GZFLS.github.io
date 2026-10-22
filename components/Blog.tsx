import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog';
import { profile } from '@/config/profile';

export function Blog() {
  const posts = blogPosts.slice(0, 6);

  return (
    <section
      id="writing"
      className="scroll-mt-20 border-t border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-900/40"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
              Writing
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
              最近写的
            </h2>
            <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
              构建时从博客 API 同步，不再维护一份会过期的静态列表。
            </p>
          </div>
          <a
            href={profile.social.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
          >
            全部文章
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`${profile.social.blog}/blog/${post.slug}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-3 py-5 transition-colors hover:bg-white/60 md:grid-cols-[9.5rem_1fr_auto] md:items-start md:gap-6 md:px-3 dark:hover:bg-gray-900/60"
            >
              <div className="flex items-center gap-3 font-mono text-xs text-gray-500 md:flex-col md:items-start md:gap-1.5 dark:text-gray-400">
                <time dateTime={post.date}>{post.date.replaceAll('-', '.')}</time>
                {post.category ? <span className="text-gray-400 dark:text-gray-500">{post.category}</span> : null}
              </div>
              <div>
                <h3 className="text-base font-semibold leading-6 text-gray-950 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-400">
                  {post.title}
                </h3>
                {post.excerpt ? (
                  <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                ) : null}
              </div>
              <ArrowUpRight className="hidden h-4 w-4 text-gray-300 transition-colors group-hover:text-blue-600 md:mt-1 md:block dark:text-gray-600 dark:group-hover:text-blue-400" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
