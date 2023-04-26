import { PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import env from "vite-plugin-env-compatible";

const plugins = [...react()];
if (typeof env === "function") {
  //// NOTE: npm run storybook では vite-plugin-env-compatible をimportできないらしく、「関数ではない」と言われるエラーになるため。
  const plugin = env({
    prefix: "VITE_MY_ENV",
    mountedPath: "process.env",
  }) as PluginOption;
  plugins.push(plugin);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
});
