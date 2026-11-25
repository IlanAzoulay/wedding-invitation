<template>
    <div class="day-header">
        <div class="slot">
            <photo-frame
                :imgSrc=photo1
                :sizePx=imageSizePx
                :rotation="flipRotation? imageRotation : -imageRotation"
            />
        </div>

        <div class="slot text-slot">
            <h1>{{ title }}</h1>
            <h3 v-show="optional">(optional)</h3>
            <h2>{{ subtitle }}</h2>
        </div>

        <div class="slot">
            <photo-frame
                :imgSrc=photo2
                :sizePx=imageSizePx
                :rotation="flipRotation? -imageRotation : imageRotation"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {type: String, required: true},
        subtitle: {type: String, required: true},
        photo1: {type: String, required: true},
        photo2: {type: String, required: true},
        optional: {type: Boolean, default: false},
        flipRotation: {type: Boolean, default: false}
    },
    data() {
        return {
            imageSizePx: 80,
            imageRotation: 5
        }
    }
}
</script>

<style scoped>
.day-header {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    width: 100%;
    padding-bottom: 1rem;
}
.slot {
    display: flex;
    justify-content: center;
    align-items: center;
}
.text-slot {
    flex: 1;
    flex-direction: column;
    padding: 0 0.25rem;
}
h1, h2, h3 {
    font-family: 'Quicksand';
    mix-blend-mode: multiply;
}
h1 {
    font-weight: 700;
    font-size: large;
}
h2 {
    font-weight: 400;
    font-size: medium;
    padding-top: 0.25rem;
}
h3 {
    font-weight: 300;
    font-size: x-small;
    opacity: 60%;
}
</style>
