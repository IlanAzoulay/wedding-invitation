<template>
    <div class="step-container">

        <div class="img-container">
            <img class="step-img" :src="imgSrc" :style="`width: ${imgSizePx}px`">
        </div>

        <img src="../assets/Handdrawn_Arrow.png" class="multiply" style="width: 40px">
        <div class="rectangle-handdrawn">
            <h1 style="white-space: nowrap;">{{ dateText }}</h1>
            Texte à l'intérieur du rectangle
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {type: String, required: true},
        imgSizePx: {type: Number, required: true},
        dateText: {type: String, required: true},
    }
}
</script>

<style scoped>
.step-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    z-index: 10;
}
.img-container {
    height: var(--size-timeline-star);
    width: var(--size-timeline-star);
    position: relative;
}
.step-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
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
}
</style>
