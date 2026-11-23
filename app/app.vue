<template>
  <div class="page">
    <Timeline/>
    <GuestForm/>
  </div>
</template>

<script>
import Timeline from "./components/Timeline.vue";
import GuestForm from "./components/GuestForm.vue";
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

.page {
    padding-top: 1rem;

    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    background-image: url('@/assets/PaperTex.png');
    background-size: cover;
    background-repeat: repeat;
    background-attachment: scroll;
    background-position: center;
}
</style>
