<template>
    <div class="timeline-container">
        <div class="handdrawn-shape rectangle"></div>

        <div class="handdrawn-shape circle" style="top: 0%"></div>
        <div class="handdrawn-shape circle" style="top: 25%"></div>
        <div class="handdrawn-shape circle" style="top: 75%"></div>
        <div class="handdrawn-shape circle" style="top: 100%"></div>
    </div>

</template>

<style scoped>
.timeline-container {
    position: relative;
}

.handdrawn-shape {
    border: 3px solid #333;
    box-sizing: border-box;
}

.rectangle {
    width: 1rem;
    height: 30rem;
    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
    background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 5px,
        rgba(50, 50, 50, 0.7) 5px,
        rgba(50, 50, 50, 0.7) 7px
    );
}

.circle {
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50% 48% 52% 49% / 49% 51% 48% 52%;
    background: repeating-linear-gradient(
        -45deg,
        white,
        white 6px,
        rgba(50, 50, 50, 0.65) 6px,
        rgba(50, 50, 50, 0.65) 8px
    );
}

.star-svg {
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    width: 150px;
    height: 150px;
    overflow: visible;
    filter: drop-shadow(0 0 8px rgba(218, 165, 32, 0.8)) drop-shadow(0 0 20px rgba(218, 165, 32, 0.4));
}
</style>