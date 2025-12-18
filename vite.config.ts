import { defineConfig } from "vite";

const repoName = "effective-broccoli";

export default defineConfig({
    base: `/${repoName}/`,
    build: {
        outDir: "docs", // так удобно публиковать на Pages без GitHub Actions
    },
});
