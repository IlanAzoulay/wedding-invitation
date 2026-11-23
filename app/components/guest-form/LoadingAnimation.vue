<template>
    <span class="loader"></span>
</template>

<style scoped>
.loader {
    --color-1: #2c2c2c;
    --size: 1px;

    display: block;
    width: 100%;
    height: 100%;
    position: relative;

    animation:
        rotate 1.5s steps(12) infinite,
        jitter 0.4s steps(4) infinite;
}

.loader::before,
.loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0;

    border-radius: 48% 53% 51% 49% / 52% 48% 50% 54%;
    border: calc(4 * var(--size)) solid var(--color-1);

    animation: prixClipFix 2s steps(16) infinite;
    filter: drop-shadow(1px 1px 0px rgba(0,0,0,0.1));
}

.loader::after {
    border-width: calc(2 * var(--size));
    opacity: 0.5;
    transform: rotate(15deg) scale(0.96);
    border-radius: 53% 48% 49% 52% / 49% 52% 48% 51%;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

/* Reduced jitter using independent properties for a subtle, conflict-free wobble */
@keyframes jitter {
    0%, 100% { translate: 0 0; rotate: 0deg; }
    33% { translate: 0.5px -0.5px; rotate: 0.5deg; }
    66% { translate: -0.5px 0.5px; rotate: -0.5deg; }
}

@keyframes prixClipFix {
    0% {
        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
}
</style>