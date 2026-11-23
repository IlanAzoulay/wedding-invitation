<template>
    <div class="timeline-container">
        <div class="timeline-line" :style="`left: ${circleSize / 2}px`"></div>
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
    width: 100%;
    position: relative;
    margin: 2rem;
}
.timeline-line {
    background-color: black;
    position: absolute;
    width: 2px;
    height: 100%;
}
</style>
