import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { watchEffect } from "vue";
import "./theme.css";

export default {
  ...DefaultTheme,
  setup() {
    const { lang } = useData();
    watchEffect(() => {
      // to avoid build warning
      if (typeof window !== "undefined") {
        if (window.location.pathname != "/") {
          localStorage.setItem("lang", lang.value);
        }
      }
    });
  },
};
