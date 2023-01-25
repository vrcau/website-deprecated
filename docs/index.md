---
layout: false

title: VRChat Aerospace University
titleTemplate: Flying & Developing
---

<script>
    const supportLanguage = ['zh', 'en'];

    var lang = localStorage.getItem('lang');
    if (supportLanguage.includes(lang)) {
        window.location.replace(lang + '/');
    } else {
        const userLang = navigator.language || navigator.userLanguage;
        for (const language of supportLanguage) {
            if (userLang.startsWith(language)) {
                window.location.replace('${language}/');
                break;
            }
        }

        window.location.replace('zh/');
    }
</script>