import { PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import env from "vite-plugin-env-compatible";

const plugins = [...react()];

//// NOTE: npm run storybook では vite-plugin-env-compatible をimportできないらしく、「関数ではない」と言われるエラーになるため。
/// XXX: env.defaultについて 参考: https://github.com/UstymUkhman/vite-plugin-glsl/issues/1
if (typeof env?.default !== "undefined") {
  const plugin = env.default({
    prefix: "VITE_MY_ENV",
    mountedPath: "process.env",
  }) as PluginOption;
  plugins.push(plugin);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
});
