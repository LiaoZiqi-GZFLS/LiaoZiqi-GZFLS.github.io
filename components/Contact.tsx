import { ArrowUpRight, BookOpen, Code, Github, Tv } from 'lucide-react';
import { profile } from '@/config/profile';

const links = [
  { label: 'GitHub', href: profile.social.github, icon: Github, note: '代码与项目' },
  { label: '博客', href: profile.social.blog, icon: BookOpen, note: 'Controller Log' },
  { label: 'CSDN', href: profile.social.csdn, icon: Code, note: '技术笔记' },
  { label: 'bilibili', href: profile.social.bilibili, icon: Tv, note: '视频与演示' },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-900/40"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
              聊点具体的
            </h2>
            <p className="mt-3 max-w-md leading-7 text-gray-600 dark:text-gray-400">
              如果你对处理器微架构、HPC 性能优化或桌面智能体感兴趣，欢迎在 GitHub 或博客留言。比起泛泛的“交流一下”，我更愿意从具体问题和数据开始。
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-blue-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800"
                >
                  <span className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:text-gray-500 dark:group-hover:text-blue-400" />
                    <span>
                      <span className="block text-sm font-medium text-gray-950 dark:text-white">
                        {link.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-gray-500 dark:text-gray-400">
                        {link.note}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-blue-600 dark:text-gray-600 dark:group-hover:text-blue-400" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
