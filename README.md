# Trend Bite MVP

## 1) Requirements
- Node.js 20+
- npm 10+

## 2) Setup
```bash
cp .env.example .env.local
npm install
npm run dev
```

## 3) Scripts
- `npm run dev`: start development server
- `npm run build`: production build
- `npm run start`: run production server
- `npm run lint`: lint check
- `npm run typecheck`: typescript check

## 4) Next steps
- Supabase schema migration 작성
- Public/User API 구현
- Admin 인증 및 후보 승인/반려 구현
- Cron 수집 파이프라인 구현
