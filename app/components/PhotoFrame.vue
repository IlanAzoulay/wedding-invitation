<template>
    <div class="frame-white" :style="`width: ${sizePx}px; height: ${sizePx}px; rotate: ${rotation}deg;`">
        <div class="tape tape-top-left" :style="tapeStyle"></div>
        <div class="tape tape-top-right" :style="tapeStyle"></div>
        <div class="tape tape-bottom-left" :style="tapeStyle"></div>
        <div class="tape tape-bottom-right" :style="tapeStyle"></div>
        <img :src=imgSrc :style="`width: ${sizePx * 0.85}px;`">
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {type: String, required: true},
        sizePx: {type: Number, required: true},
        rotation: {type: Number, default: 0}
    },
    data() {
        return {
            tapeWidth: 0.3,
            tapeHeight: 0.1,
            tapeStyle: ""
        }
    },
    mounted() {
        this.tapeStyle = `width: ${this.sizePx * this.tapeWidth}px; height: ${this.sizePx * this.tapeHeight}px;`
    }
}
</script>

<style scoped>
.frame-white {
    display: block;
    position: relative;
    box-shadow: 2px 2px 6px #00000073;
    background-color: #f2f2f2;
}
img {
    border-color: black;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: 1px solid rgb(223, 223, 223);
}

</style>
