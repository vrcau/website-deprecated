import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { watchEffect } from "vue";
import "./theme.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx);
  },
  setup() {
    const { lang } = useData();
    watchEffect(() => {
      // if (window.location.pathname != '/') {
      //   localStorage.setItem('lang', lang.value);
      // }
    });
  },
};
