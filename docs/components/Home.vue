<script setup lang="ts">
import { VPButton } from 'vitepress/theme';

defineProps<{
    name?: string
    tagline?: string
    actionText?: string
    text?: string
}>()
</script>

<template>
    <div class="home">
        <img class="background-image" src="/home/home.webp" />
        <div class="home-content">
            <p class="title">{{ name }}</p>
            <p class="tagline">{{ tagline }}</p>
            <VPButton href="./guide/getting-started.html" :text="actionText" size="big" style="margin-top: 1rem;" />
        </div>
    </div>
</template>

<style scoped>
.dark .background-image {
    filter: brightness(70%);
}

.dark .background-image {
    filter: brightness(70%);
}

.background-image {
    position: absolute;
    left: 0;
    top: calc(var(--vp-nav-height) * -1);
    height: 100vh;
    width: 100vw;
    object-fit: cover;
}

.home-content {
    position: relative;
    margin-left: 3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-height: normal;
    align-items: start;
    text-align: start;
    padding: 0 1rem;
    word-wrap: normal;
    height: calc(100vh - var(--vp-nav-height) - 113px);
}

.tagline {
    max-width: 30vw;
    color: rgba(235, 235, 245, 0.9);
}

@media (min-width: 768px) {
    .home-content {
        height: calc(100vh - var(--vp-nav-height) - 241px);
        margin-left: 5rem;
    }
}

.home-content .title {
    font-size: 4rem;
    color: var(--vp-c-brand-1);
    font-weight: 500;
}

.home-content p {
    font-size: 2rem;
}

@media (max-width: 960px) {
    .home-content .title {
        font-size: 3rem;
        color: var(--vp-c-brand-1);
    }

    .home-content p {
        font-size: 2rem;
    }
}

@media (max-width: 830px) {
    .home-content .title {
        font-size: 3rem;
        color: var(--vp-c-brand-1);
    }

    .home-content p {
        font-size: 1.8rem;
    }

    .tagline {
        max-width: 60vw;
    }
}
</style>