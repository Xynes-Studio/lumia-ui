import dts from "vite-plugin-dts";
import path from "path";
import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react";
import { defineConfig, PluginOption, UserConfig } from "vite";
const plugins = [dts({ rollupTypes: true }), react()];
plugins.unshift(MillionLint.vite() as PluginOption[]);
export default defineConfig({
  base: "./",
  plugins: plugins,
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@elements": path.resolve(__dirname, "src/elements"),
      "@icons": path.resolve(__dirname, "src/icons"),
      "@texts": path.resolve(__dirname, "src/texts"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@app": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    exclude: [
      "node_modules",
      "src/assets",
      "src/components/DND",
      "src/components/MDXParse",
      "src/utils/MDXUtils",
      "src/utils/StringToJsx",
      "node_modules",
      ".storybook",
      ".vscode",
      "documentationBuilder",
      "website",
      "public",
      "mod.ts",
      "src/**/*.stories.ts",
      "src/**/*.stories.tsx",
    ],
  },
  build: {
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "lumia-ui",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        extend: true,
      },
    },
  },
} satisfies UserConfig);
