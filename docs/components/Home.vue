<script setup lang="ts">
defineProps<{
    name?: string
    tagline?: string
    actionText?: string
    text?: string
}>()
</script>

<template>
    <div class="home">
        <img class="background-image" src="/home/home_test_2.webp" />
        <div class="home-content">
            <p class="title">{{ name }}</p>
            <p class="tagline">{{ tagline }}</p>
            <a href="./guide/getting-started.html">{{ actionText }}</a>
        </div>
    </div>
</template>

<style scoped>
.background-image {
    position: absolute;
    left: 0;
    top: calc(var(--vp-nav-height) * -1);
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    filter: brightness(70%);
}

.home-content {
    position: relative;
    margin-left: 5rem;
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
    }
}

.home-content .title {
    font-size: 4rem;
    color: #00ffaa;
    font-weight: 500;
}

.home-content p {
    font-size: 2rem;
}

@media (max-width: 960px) {
    .home-content .title {
        font-size: 3rem;
        color: #00ffaa;
    }

    .home-content p {
        font-size: 2rem;
    }
}

@media (max-width: 830px) {
    .home-content .title {
        font-size: 3rem;
        color: #00ffaa;
    }

    .home-content p {
        font-size: 1.8rem;
    }

    .tagline {
        max-width: 60vw;
    }
}

.home-content a {
    font-size: 1.5rem;
    margin-top: 1rem;
    padding: 1rem;
    background-color: #00ffaa;

    display: inline-block;
    border: 1px solid transparent;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
    transition: color 0.25s, border-color 0.25s, background-color 0.25s;

    border-radius: 24px;
    padding: 0 24px;
    line-height: 46px;
    font-size: 16px;

    border-color: var(--vp-button-brand-border);
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);

    transition: color 0.1s, border-color 0.1s, background-color 0.1s;
}

.home-content a:hover {
    border-color: var(--vp-button-brand-hover-border);
    color: var(--vp-button-brand-hover-text);
    background-color: var(--vp-button-brand-hover-bg);
}

.home-content a:active {
    border-color: var(--vp-button-brand-active-border);
    color: var(--vp-button-brand-active-text);
    background-color: var(--vp-button-brand-active-bg);
}
</style>