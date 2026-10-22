export interface Project {
  name: string;
  repo: string;
  summary: string;
  metric: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: 'LA32R 乱序处理器核',
    repo: 'https://github.com/LiaoZiqi-GZFLS/nscscc2026-loongarch-cpu',
    summary:
      '在 NOP-Core 基座上完成 S3v2 前端时序重构，把 105 MHz 下唯一不收敛的跨阶段组合桥斩断，并用逐拍等价性验证守住功能。',
    metric: '105.887 MHz · setup WNS +0.035 ns',
    tags: ['SpinalHDL', 'LA32R', 'FPGA'],
  },
  {
    name: 'WRF HPC Optimizer',
    repo: 'https://github.com/LiaoZiqi-GZFLS/wrf-hpc-optimizer',
    summary:
      '把 WRF 从 443 秒压到 37 秒的端到端优化流程：配置体检、依赖构建、MPI/OpenMP 参数扫描、LTO/PGO 与 IO 调优。',
    metric: '443s → 37s（12×）',
    tags: ['MPI', 'OpenMP', 'Intel oneAPI'],
  },
  {
    name: 'MikuDisappear',
    repo: 'https://github.com/LiaoZiqi-GZFLS/MikuDisappear',
    summary:
      '完全由代码逐帧生成的初音未来 MV：WebGL2 + Canvas2D，render(t) 确定性渲染，18 章、94 行歌词、无脸剪影。',
    metric: '18 章 · 94 行歌词 · 4:52',
    tags: ['WebGL2', 'Canvas2D', 'Creative Coding'],
  },
  {
    name: 'Agent-View',
    repo: 'https://github.com/LiaoZiqi-GZFLS/Agent-View',
    summary:
      '把屏幕像素翻译成纯文本 LLM 能读的标记：OCR + UI 元素检测 + UIA + Mixture-of-Grounding，视觉模型只在必要时介入。',
    metric: '四层 SDK · 7 位 Grounding 专家',
    tags: ['Python', 'OCR', 'Grounding'],
  },
  {
    name: 'remote-skill',
    repo: 'https://github.com/LiaoZiqi-GZFLS/remote-skill',
    summary:
      '给 Agent 和脚本用的 SSH 远程工作区：常驻守护进程、持久终端会话、文件原语与端口转发，支持 Windows。',
    metric: '持久会话 · 端口转发 · Windows',
    tags: ['Go', 'SSH', 'Agent'],
  },
  {
    name: 'CVE-2026-42945',
    repo: 'https://github.com/LiaoZiqi-GZFLS/CVE-2026-42945',
    summary:
      'Nginx rewrite 模块堆溢出漏洞的根因分析与复现工具包：两次 pass 的长度计算不一致，如何从配置语义走到内存破坏。',
    metric: 'CVSS 9.2 · 根因复现',
    tags: ['Security', 'Nginx', 'C'],
  },
];
