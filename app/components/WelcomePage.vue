<template>
    <div class="welcome-container">
        <div class="photo-container">
            <photo-frame
                :imgSrc=couple1
                :sizePx=imageSizePx
                :rotation=-imageRotation
            />
            <photo-frame
                :imgSrc=couple2
                :sizePx=imageSizePx
                :rotation=imageRotation
            />
            <photo-frame
                :imgSrc=couple3
                :sizePx=imageSizePx
                :rotation=-imageRotation
            />
        </div>

        <h1>April & Ilan</h1>

        <div class="photo-container">
            <photo-frame
                :imgSrc=couple4
                :sizePx=imageSizePx
                :rotation=imageRotation
            />
            <photo-frame
                :imgSrc=couple5
                :sizePx=imageSizePx
                :rotation=-imageRotation
            />
            <photo-frame
                :imgSrc=couple6
                :sizePx=imageSizePx
                :rotation=imageRotation
            />
        </div>

    </div>
</template>

<script>
import PhotoFrame from './PhotoFrame.vue';
import couple1 from '../assets/Couple1.JPG'
import couple2 from '../assets/Couple2.JPG'
import couple3 from '../assets/Couple3.jpeg'
import couple4 from '../assets/Couple4.png'
import couple5 from '../assets/Couple5.png'
import couple6 from '../assets/Couple6.png'

export default {
    components: {
        PhotoFrame
    },
    data() {
        return {
            imageSizePx: 85,
            imageRotation: 5,
            couple1,
            couple2,
            couple3,
            couple4,
            couple5,
            couple6,
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
    padding-bottom: 2rem;
    padding-top: 1rem;
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
    opacity: 70%;
}
</style>
