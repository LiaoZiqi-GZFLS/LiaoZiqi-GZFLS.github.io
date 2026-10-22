import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/config/projects';
import { profile } from '@/config/profile';

export function Projects() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-gray-200 py-20 dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
              Selected Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
              精选项目
            </h2>
            <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
              从处理器核到 HPC、创意编程和桌面智能体。每个项目都尽量给出可验证的结果指标，而不只是技术栈。
            </p>
          </div>
          <a
            href={`${profile.social.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
          >
            更多项目
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-gray-400 dark:text-gray-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight className="h-4 w-4 text-gray-300 transition-colors group-hover:text-blue-600 dark:text-gray-600 dark:group-hover:text-blue-400" />
              </div>

              <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-2.5 py-1 font-mono text-[11px] text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 border-t border-gray-100 pt-4 font-mono text-xs text-blue-700 dark:border-gray-800 dark:text-blue-400">
                {project.metric}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
