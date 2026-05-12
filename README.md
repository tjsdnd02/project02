# Trend Bite MVP

## 1) Requirements
- Node.js 20+
- npm 10+

## 2) Local setup
```bash
cp .env.example .env.local
npm install
npm run dev
```

## 3) Scripts
- `npm run dev`: start development server
- `npm run build`: production/static build
- `npm run start`: run production server
- `npm run lint`: lint check
- `npm run typecheck`: typescript check

## 4) Deploy to GitHub Pages
1. Push this repository to GitHub.
2. Set default branch to `main`.
3. In **Settings → Pages**, set Source to **GitHub Actions**.
4. Push to `main` (or run workflow manually).
5. After deploy, access:
   - `https://<github-username>.github.io/<repository-name>/`

Workflow file: `.github/workflows/deploy-gh-pages.yml`

## 5) Next steps
- Supabase schema migration 작성
- Public/User API 구현
- Admin 인증 및 후보 승인/반려 구현
- Cron 수집 파이프라인 구현
