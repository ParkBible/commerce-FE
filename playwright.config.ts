import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    timeout: 30 * 1000,
    expect: {
        timeout: 5 * 1000,
    },
    fullyParallel: true,
    reporter: "html",
    use: {
        headless: false,
        actionTimeout: 0,
        baseURL: "http://localhost:3000",
    },
    retries: 0,
    workers: 1,
});
