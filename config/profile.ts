export const profile = {
  name: 'Liao Ziqi',
  title: 'Systems · HPC · LLM Agents',
  tagline: '把系统做到能测量，再把测量变成设计。',
  bio: '南方科技大学 · 计算机系统方向。做过 LA32R 三发射乱序处理器核的时序收敛、WRF 在 128 核集群上的性能优化，也在构建能操作桌面的 LLM Agent。相信 benchmark first, implement second.',
  avatar: 'https://avatars.githubusercontent.com/u/108562065?v=4',
  social: {
    github: 'https://github.com/LiaoZiqi-GZFLS',
    blog: 'https://www.sustlzq.cn',
    csdn: 'https://blog.csdn.net/LiaoZiqi2006',
    bilibili: 'https://space.bilibili.com/3461564195670711',
  },
  metrics: [
    { value: '105.9 MHz', label: 'LA32R OoO core' },
    { value: '12×', label: 'WRF speedup' },
    { value: '4:52', label: 'code-generated film' },
  ],
  focus: [
    {
      name: 'Systems & Architecture',
      description: '乱序处理器核、FPGA 时序收敛、总线适配与等价性验证。',
      skills: ['C', 'C++', 'Rust', 'Verilog', 'SpinalHDL'],
    },
    {
      name: 'HPC & Performance',
      description: 'WRF 部署与调优、并行参数扫描、编译器与 IO 瓶颈分析。',
      skills: ['MPI', 'OpenMP', 'WRF', 'Intel oneAPI', 'perf'],
    },
    {
      name: 'AI & Agents',
      description: '桌面智能体、屏幕表示、工具调用、Grounding 与记忆。',
      skills: ['Python', 'PyTorch', 'LLM', 'OCR', 'Grounding'],
    },
    {
      name: 'Web & Infra',
      description: '自托管服务、前后端开发与可复现的部署流程。',
      skills: ['TypeScript', 'Next.js', 'Django', 'Docker', 'Linux'],
    },
  ],
};

export type Profile = typeof profile;
