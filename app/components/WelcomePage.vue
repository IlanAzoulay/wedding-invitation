<template>
    <div class="welcome-container">
        <div class="photo-container">
            <photo-frame
                imgSrc="_nuxt/assets/Couple1.JPG"
                :sizePx=imageSizePx
                :rotation=-imageRotation
            />
            <photo-frame
                imgSrc="_nuxt/assets/Couple2.JPG"
                :sizePx=imageSizePx
                :rotation=imageRotation
            />
            <photo-frame
                imgSrc="_nuxt/assets/Couple3.jpeg"
                :sizePx=imageSizePx
                :rotation=-imageRotation
            />
        </div>

        <h1>April & Ilan</h1>

        <div class="photo-container">
            <photo-frame
                imgSrc="_nuxt/assets/Couple4.png"
                :sizePx=imageSizePx
                :rotation=imageRotation
            />
            <photo-frame
                imgSrc="_nuxt/assets/Couple5.png"
                :sizePx=imageSizePx
                :rotation=-imageRotation
            />
            <photo-frame
                imgSrc="_nuxt/assets/Couple6.png"
                :sizePx=imageSizePx
                :rotation=imageRotation
            />
        </div>

    </div>
</template>

<script>
import PhotoFrame from './PhotoFrame.vue';

export default {
    components: {
        PhotoFrame
    },
    data() {
        return {
            imageSizePx: 85,
            imageRotation: 5
        }
    }
}
</script>

<style scoped>
.welcome-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.photo-container {
    display: flex;
    flex-direction: row;
    gap: 2rem;
}
h1 {
    font-family: var(--script-font);
    text-align: center;
    font-size: 5rem;
}
</style>
