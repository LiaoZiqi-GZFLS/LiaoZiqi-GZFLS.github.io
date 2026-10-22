import { profile } from '@/config/profile';

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-20 border-t border-gray-200 py-20 dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
            Focus
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
            在做什么
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
            目前主要在推进：LA32R 四发射探索、WRF 跨任务迁移，以及 Agent-View 的 Windows 感知层。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {profile.focus.map((group) => (
            <div
              key={group.name}
              className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-gray-950 dark:text-white">
                {group.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {group.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-2.5 py-1 font-mono text-[11px] text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
