<template>
    <h1>SUMMARY</h1>
    <div class="timeline-container">
        <div class="timeline-line"></div>
        <TimelineStep
            :imgSrc=circleImg
            :imgSizePx=circleSize
            dateText="8 July"
        />
        <TimelineStep
            :imgSrc=circleImg
            :imgSizePx=circleSize
            dateText="9 July"
        />
        <TimelineStep
            :imgSrc=starImg
            :imgSizePx=starSize
            dateText="10 July"
        />
        <TimelineStep
            :imgSrc=circleImg
            :imgSizePx=circleSize
            dateText="11 July"
        />
        <TimelineStep
            :imgSrc=circleImg
            :imgSizePx=circleSize
            dateText="12 July"
        />
    </div>

</template>

<script>
    import TimelineStep from './TimelineStep.vue';
    export default {
        data() {
            return {
                circleImg: "_nuxt/assets/Handdrawn_Circle_Filled.png",
                circleSize: 30,
                starImg: "_nuxt/assets/Handdrawn_Star.png",
                starSize: 50
            }
        }
    }
</script>

<style scoped>
.timeline-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    margin: 0 1rem;
}
.timeline-line {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 2px;
    left: calc(var(--size-timeline-star) / 2);

    top: calc(var(--size-timeline-star) / 2);
    bottom: calc(var(--size-timeline-star) / 2);
    height: auto;
}
</style>
