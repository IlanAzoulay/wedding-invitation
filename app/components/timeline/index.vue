<template>

    <h1>
        <img class="header-img" src="../../assets/Icon_Calendar.png">
        SUMMARY
    </h1>

    <div class="timeline-grid">

        <img class="icon-img" :src=iconPorto>
        <div class="rectangle-handdrawn">
            <img class="step-img step-circle" :src=circleImg>
            <h2>8 July</h2>
            Welcome party in Porto
        </div>

        <img class="icon-img" :src=iconBus style="opacity: 65%;">
        <div class="rectangle-handdrawn">
            <img class="step-img step-circle" :src=circleImg>
            <h2>9 July</h2>
            Road to the Quinta
        </div>

        <img class="icon-img" :src=iconRings>
        <div class="rectangle-handdrawn" style="box-shadow: 0px 0px 6px #ffcf00a8;">
            <img class="step-img step-star" :src=starImg>
            <h2>10 July</h2>
            The ceremony!
        </div>

        <img class="icon-img" :src=iconQuinta>
        <div class="rectangle-handdrawn">
            <img class="step-img step-circle" :src=circleImg>
            <h2>11 July</h2>
            Brunch at the Quinta, then back to Porto
        </div>

        <img class="icon-img" :src=iconPorto>
        <div class="rectangle-handdrawn">
            <img class="step-img step-circle" :src=circleImg>
            <h2>12 July</h2>
            Resting day in Porto
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            circleImg: "_nuxt/assets/Handdrawn_Circle_Filled.png",
            circleSize: 30,
            starImg: "_nuxt/assets/Handdrawn_Star.png",
            starSize: 50,
            iconPorto: "_nuxt/assets/Icon_Porto.png",
            iconBus: "_nuxt/assets/Icon_Bus.png",
            iconRings: "_nuxt/assets/Icon_Rings.png",
            iconQuinta: "_nuxt/assets/Icon_Quinta.png",
        }
    }
}
</script>

<style scoped>
.timeline-grid {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: center;
    position: relative;
    padding: 1rem;
}
.rectangle-handdrawn {
    --rectangle-color: #333333d1;
    color: var(--rectangle-color);
    border: 3px solid var(--rectangle-color);
    box-sizing: border-box;
    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
    text-align: center;
    padding: 4px 8px;
    mix-blend-mode: multiply;
    position: relative;
}
.step-img {
    display: block;
    margin: auto;
    z-index: 10;
    position: absolute;
    left: 0%;
    top: 0%;
    transform: translateX(-50%) translateY(-50%);
}
.step-circle {
    width: var(--size-timeline-circle)
}
.step-star {
    width: var(--size-timeline-star);
}
.icon-img {
    --size-timeline-icon: 80px;
    width: var(--size-timeline-icon);
    mix-blend-mode: multiply;
}
h1 {
    font-weight: bold;
    font-size: x-large;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
}
.header-img {
    mix-blend-mode: multiply;
    width: var(--size-timeline-star);
}
</style>
