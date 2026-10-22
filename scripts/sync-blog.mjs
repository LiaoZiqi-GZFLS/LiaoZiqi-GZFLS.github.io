import { mkdir, readFile, writeFile } from 'node:fs/promises';

const API = process.env.BLOG_API || 'https://www.sustlzq.cn/api/posts/?page_size=8';
const OUT = new URL('../data/posts.json', import.meta.url);
const DATA_DIR = new URL('../data/', import.meta.url);

const fallback = [
  {
    title: '关于我 · 欢迎来到 Controller Log',
    slug: 'about-me-and-welcome',
    excerpt: '欢迎来到 Controller Log。这里记录我的技术思考与实践——写下踩过的坑、总结的经验，也分享一些自己做的小工具。',
    date: '2026-09-19',
    category: '关于与公告',
  },
  {
    title: 'Uptime Kuma 自托管监控体系搭建指南：HTTP、TCP 与 Push 监控',
    slug: 'uptime-kuma-monitoring',
    excerpt: '用 Uptime Kuma 搭建 HTTP、TCP 与 Push 监控，覆盖完整链路并统一告警。',
    date: '2026-09-07',
    category: '运维与监控',
  },
  {
    title: '自托管服务备份体系设计：每日自动备份与恢复演练',
    slug: 'backup-and-restore',
    excerpt: '讲清每日自动备份脚本设计、备份范围取舍与恢复演练中常见的三类问题。',
    date: '2026-09-07',
    category: '运维与监控',
  },
  {
    title: '自托管服务器的五层纵深防御：从 SSH 加固到统一认证门户',
    slug: 'security-hardening',
    excerpt: '用 SSH 密钥、fail2ban、端口收敛、Authelia 统一认证与路由隔离，构建五层纵深防御。',
    date: '2026-09-07',
    category: '运维与监控',
  },
  {
    title: '用三个 Bash 脚本收敛日常运维：状态总览、健康检查与依赖顺序重建',
    slug: 'ops-scripts-toolchain',
    excerpt: '用服务注册表驱动的三个 Bash 脚本统一状态查看、健康检查与依赖顺序重建。',
    date: '2026-09-07',
    category: '运维与监控',
  },
  {
    title: '自托管避坑清单：15 个常见问题的现象、根因与解法',
    slug: 'self-hosting-pitfalls',
    excerpt: '汇总自托管常见 15 类问题，按现象、根因、解法与可复用经验组织。',
    date: '2026-09-05',
    category: '经验总结',
  },
];

let existing = null;
try {
  existing = JSON.parse(await readFile(OUT, 'utf8'));
} catch {
  // 首次构建或文件被删除时，下面会写入 fallback。
}

try {
  const res = await fetch(API, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data = await res.json();
  const items = Array.isArray(data) ? data : data.results || [];
  const posts = items
    .filter((post) => post.status !== 'draft')
    .map((post) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || '',
      date: (post.published_at || post.created_at || '').slice(0, 10),
      category: post.category?.name || '',
    }))
    .filter((post) => post.title && post.slug)
    .sort((a, b) => b.date.localeCompare(a.date) || (b.id || 0) - (a.id || 0))
    .slice(0, 8);

  if (posts.length === 0) throw new Error('empty response');

  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(OUT, `${JSON.stringify(posts, null, 2)}\n`, 'utf8');
  console.log(`[blog] synced ${posts.length} posts from ${API}`);
} catch (error) {
  if (!existing) {
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(OUT, `${JSON.stringify(fallback, null, 2)}\n`, 'utf8');
  }
  console.warn(`[blog] sync failed, using ${existing ? 'existing' : 'fallback'} data: ${error.message}`);
}
