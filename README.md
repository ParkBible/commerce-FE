# Commerce-FE

Inner Circle MVP 프로젝트 - 커머스 팀 (801 베이스)

## 실행 방법

```bash
npm run dev
```

## 패키지

### [Next.js](https://nextjs.org/) v15.3.1

---

### [Biome.js](https://biome.dev/)

```bash
# lint 검사하기
npm run lint

# 자동 포맷팅하기
npm run format
```

❗ VSCode 사용시 Biome 익스텐션 설치하면 저장할 때 자동으로 포맷팅됩니다. (참고: `/.vscode/settings.json`)

---

### [Tailwind CSS](https://tailwindcss.com/) v4

관련 패키지 ([shadcn/ui](https://ui.shadcn.com/)에 필요)

- `class-variance-authority`
- `clsx`
- `lucide-react`

shadcn : `/src/shared/shadcn.ts`에 있는 `cn()` 사용

---

### [Ky](https://github.com/sindresorhus/ky#readme)

공통 인스턴스 사용하기 : `/src/shared/kyInstance.ts`

```ts
import { api } from "@/src/shared/utils/kyInstance";

await api.get("/user");
await api.post("/login", { json: { username, password } });
```

---

### [TanStack Query](https://tanstack.com/query/latest)

---

### [Zustand](https://zustand-demo.pmnd.rs/)
/src의 각 feature별 stores 디렉토리 내에 store 파일을 생성하여 사용하시면 됩니다.

---

### [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

### [Playwright](https://playwright.dev/)

```bash
# 브라우저 설치
npx playwright install

# 특정 브라우저만 설치 (chromium, firefox, webkit)
npx playwright install chromium

# E2E 테스트 실행 (--ui 옵션을 사용하면 UI 환경에서 테스트 가능)
npx playwright test

# 테스트 코드 자동 생성 (Codegen)
npx playwright codegen http://localhost:3000
```