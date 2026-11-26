<template>
    <div class="arrows-container" v-on:click="scrollTo('timeline')" :style="`opacity: ${opacity};`" >
        <h3>
            scroll down
        </h3>
        <div class="arrows">
            <img v-for="i in 2" :key="i" :src="arrow">
        </div>
    </div>
</template>

<script>
import arrow from "../../assets/Arrow.png"

export default {
    data() {
        return {
            arrow,
            maxOpacity: 0.5,
            opacity: 0.5,
            maxScroll: 500
        }
    },
    beforeMount() {
        window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        scrollTo(id) {
            document.getElementById(id).scrollIntoView({behavior: 'smooth'});
        },
        onScroll(e) {
            this.scrollVar = window.scrollY; /* or: e.target.documentElement.scrollTop */
            this.updateOpacity();
        },
        updateOpacity(){
            if (this.scrollVar > this.maxScroll){
                this.opacity = 0;
            }
            else {
                var newOpacity = (this.scrollVar) / this.maxScroll;  // Pourcentage du scroll
                newOpacity = (1 - newOpacity);  // Inverser le pourcentage
                newOpacity = this.maxOpacity * newOpacity
                this.opacity = newOpacity;
            }
        },
    }
}
</script>

<style scoped>
.arrows-container {
    cursor: pointer;
    mix-blend-mode: multiply;
    padding-top: 1rem;
}
.arrows {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
}
h3 {
    font-family: "Quicksand";
    font-weight: 400;
    font-size: x-small;
    text-align: center;
    padding-bottom: 5px;
}
img {
    height: 20px;
    animation: bounce 1s infinite;
}
@keyframes bounce {
    0%, 100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }}
</style>
