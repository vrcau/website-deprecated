import { defineConfig } from "vitepress";
import { sharedConfig } from "./sharedConfig";
import { zhConfig } from "./zh";
import { enConfig } from "./en";

export default defineConfig({
  ...sharedConfig,
  locales: {
    zh: { label: "简体中文", lang: "zh", ...zhConfig },
    en: { label: "English", lang: "en", ...enConfig },
  },
});
