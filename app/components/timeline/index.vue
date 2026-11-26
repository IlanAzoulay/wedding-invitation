<template>
    <h1 style="opacity: 90%;" id="timeline">
        <img class="header-img" src="../../assets/Icon_Calendar.png">
        SUMMARY
    </h1>

    <div class="timeline-grid">

        <img class="icon-img" :src=iconPorto>
        <span class="rectangle-handdrawn" v-on:click="scrollTo('july8')">
            <img class="step-img step-circle" :src=circleImg>
            <h3>8 July</h3>
            Welcome party in Porto
        </span>

        <img class="icon-img" :src=iconBus>
        <span class="rectangle-handdrawn" v-on:click="scrollTo('july9')">
            <img class="step-img step-circle" :src=circleImg>
            <h3>9 July</h3>
            Road to the Quinta
        </span>

        <img class="icon-img" :src=iconRings>
        <span class="rectangle-handdrawn main-rectangle" v-on:click="scrollTo('july10')">
            <img class="step-img step-star" :src=starImg>
            <h3>10 July</h3>
            The ceremony!
        </span>

        <img class="icon-img" :src=iconQuinta>
        <span class="rectangle-handdrawn" v-on:click="scrollTo('july11')">
            <img class="step-img step-circle" :src=circleImg>
            <h3>11 July</h3>
            Brunch at the Quinta,<br>
            then back to Porto
        </span>

        <img class="icon-img" :src=iconPorto>
        <span class="rectangle-handdrawn" v-on:click="scrollTo('july12')">
            <img class="step-img step-circle" :src=circleImg>
            <h3>12 July</h3>
            Resting day in Porto
        </span>
    </div>

</template>

<script>
import circleImg from '../../assets/Handdrawn_Circle_Filled.png'
import starImg from '../../assets/Handdrawn_Star.png'
import iconPorto from '../../assets/Icon_Porto.png'
import iconBus from '../../assets/Icon_Bus.png'
import iconRings from '../../assets/Icon_Rings.png'
import iconQuinta from '../../assets/Icon_Quinta.png'

export default {
    data() {
        return {
            circleImg,
            circleSize: 30,
            starImg,
            starSize: 50,
            iconPorto,
            iconBus,
            iconRings,
            iconQuinta,
        }
    },
    methods: {
        scrollTo(id) {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
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
    width: calc(100% - 2rem);
    padding-bottom: 2rem;
}
.rectangle-handdrawn {
    --rectangle-color: #1772b872;
    color: var(--rectangle-color);
    border: 3px solid var(--rectangle-color);
    box-sizing: border-box;
    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
    text-align: center;
    padding: 12px 8px;
    mix-blend-mode: multiply;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
}
.main-rectangle {
    font-weight: 700;
    box-shadow: 0px 0px 6px #ffcf00a8;
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
    opacity: 50%;
}
h1 {
    font-family: 'Quicksand';
    font-weight: 700;
    font-size: x-large;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
}
.header-img {
    mix-blend-mode: multiply;
    width: var(--size-timeline-star);
    opacity: 50%;
}
h3 {
    margin: 0;
    padding: 0;
    font-weight: 700;
}
span {
    font-family: 'Quicksand';
    font-weight: 400;
}
</style>
