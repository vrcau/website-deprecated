<script setup lang="ts">
defineProps<{
    name?: string
    tagline?: string
    actionText?: string
}>()
</script>

<template>
    <div class="home">
        <video class="background-video" src="/home.webm" muted autoplay loop disablepictureinpicture disableRemotePlayback
            x-webkit-airplay="deny"></video>
        <div class="home-content">
            <img src="/VAU.svg" />
            <p class="title">{{ name }}</p>
            <p>{{ tagline }}</p>
            <a href="./guide/getting-started.html">{{ actionText }}</a>
        </div>
    </div>
</template>

<style scoped>
.background-video {
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-height: normal;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    word-wrap: normal;
    height: calc(100vh - var(--vp-nav-height) - 113px);
}

@media (min-width: 768px) {
    .home-content {
        height: calc(100vh - var(--vp-nav-height) - 241px);
    }
}

.home-content .title {
    font-size: 4rem;
    color: #00ffaa;
}

.home-content p {
    font-size: 2rem;
    color: rgba(255, 255, 245, 0.86);
}

.home-content img {
    width: 20rem;
    margin: 1.5rem auto;
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
        font-size: 2rem;
        color: #00ffaa;
    }

    .home-content p {
        font-size: 1rem;
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