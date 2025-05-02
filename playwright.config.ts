import { defineConfig } from "@playwright/test";

export default defineConfig({
    timeout: 30 * 1000,
    retries: 1,
    expect: {
        timeout: 5 * 1000,
    },
    fullyParallel: true,
    reporter: [
        ["list"],
        ["html", { outputFolder: "playwright-report", open: "never" }],
    ],
    projects: [
        {
            name: "shop",
            testDir: "apps/shop/tests",
            use: {
                headless: false,
                baseURL: "http://localhost:3000",
            },
        },
        {
            name: "admin",
            testDir: "apps/admin/tests",
            use: {
                headless: false,
                baseURL: "http://localhost:5173",
            },
        },
    ],
});
