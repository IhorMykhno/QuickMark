import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            usePolling: true,
        },
        host: true, // needed for the Docker Container port mapping to work
        strictPort: true,
        port: 8080,
    },
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, "./src/App.jsx"),
            "@pages": path.resolve(__dirname, "./src/views/pages"),
            "@components": path.resolve(__dirname, "./src/views/components"),
            "@axios": path.resolve(__dirname, "./src/services/axios"),
            "@network": path.resolve(__dirname, "./src/services/network"),
            "@router": path.resolve(__dirname, "./src/services/router"),
            "@assets": path.resolve(__dirname, "./src/assets"),
        },
    },
});
