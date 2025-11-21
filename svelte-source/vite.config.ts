import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { minify } from "html-minifier";
import { resolve } from "path";
import obfuscator from "rollup-plugin-obfuscator";
function minifyHtml() {
  return {
    name: "html-transform",
    transformIndexHtml(html: any) {
      return minify(html, {
        collapseWhitespace: true,
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [svelte(), isProduction && minifyHtml()],
    base: "./",
    resolve: {
      alias: {
        "@assets": resolve("./src/assets"),
        "@components": resolve("./src/components"),
        "@providers": resolve("./src/providers"),
        "@store": resolve("./src/store"),
        "@utils": resolve("./src/utils"),
        "@base": resolve("./src/components/base"),
        "@shared": resolve("./src/components/shared"),
      },
    },
    build: {
      minify: isProduction,
      emptyOutDir: true,
      outDir: "../dist",
      assetsDir: "./",
      rollupOptions: {
        plugins: [
          obfuscator({
            options: {
              compact: true,
              controlFlowFlattening: true,
              deadCodeInjection: true,
              debugProtection: true
            },
          }),
        ],
        output: {
          entryFileNames: `js/[name]-[hash].js`,
          chunkFileNames: `js/[name]-[hash].js`,
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".css")) {
              return "style/[name]-[hash].[ext]";
            }
            return "assets/[name]-[hash].[ext]";
          },
        },
      },
    },
  };
});