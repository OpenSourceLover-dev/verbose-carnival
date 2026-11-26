import { defineConfig } from "vite";

export default defineConfig({
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
