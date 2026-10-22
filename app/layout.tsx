import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { profile } from '@/config/profile';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://liaoziqi-gzfls.github.io'),
  title: {
    default: 'Liao Ziqi — Systems, HPC, LLM Agents',
    template: '%s | Liao Ziqi',
  },
  description:
    'Liao Ziqi 的个人主页：LA32R 乱序处理器核、WRF HPC 性能优化、代码生成的音乐短片，以及能操作桌面的 LLM Agent。',
  icons: {
    icon: profile.avatar,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: '/',
    siteName: 'Liao Ziqi',
    title: 'Liao Ziqi — Systems, HPC, LLM Agents',
    description:
      '处理器微架构、HPC 性能优化、创意编程与桌面智能体。把系统做到能测量，再把测量变成设计。',
    images: [{ url: profile.avatar }],
  },
  twitter: {
    card: 'summary',
    title: 'Liao Ziqi — Systems, HPC, LLM Agents',
    description: '处理器微架构、HPC 性能优化、创意编程与桌面智能体。',
    images: [profile.avatar],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s||(d?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
