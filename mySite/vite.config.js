import { defineConfig } from "vite";

export default defineConfig({
    // Relative URLs
    base: "./",

    server: {
        port: 8080,
        open: true,
    },

    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                charlo: "charlo/index.html",
            },
        },
    },
});
