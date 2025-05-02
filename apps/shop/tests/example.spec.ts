import { test, expect } from "@playwright/test";

// 예시 테스트
test("test", async ({ page }) => {
    await page.goto("http://localhost:3000/");
});
