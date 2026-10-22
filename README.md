# Liao Ziqi — Personal Site

Personal homepage for [Liao Ziqi](https://github.com/LiaoZiqi-GZFLS), built with Next.js and Tailwind CSS, exported as a static site and deployed to GitHub Pages.

Live: <https://liaoziqi-gzfls.github.io/>

## Local development

```bash
npm ci
npm run dev
```

## Content

- `config/profile.ts` — identity, links, focus areas, headline metrics.
- `config/projects.ts` — curated project list. Edit this instead of relying on "latest updated" repos.
- `scripts/sync-blog.mjs` — pulls the latest posts from `https://www.sustlzq.cn/api/posts/` and writes `data/posts.json`.
- `data/posts.json` — committed snapshot, also the fallback when the API is unreachable.

`npm run build` runs the blog sync first, then `next build`. The sync script never fails the build: if the API is down, it keeps the existing snapshot.

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the static export and publishes it with GitHub Pages.
