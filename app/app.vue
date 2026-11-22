<template>
  <div class="page">
    <GuestForm/>
  </div>
</template>

<script>
import GuestForm from "./components/GuestForm.vue";
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

.page {
  min-height: 100vh;
  background-image: url('@/assets/PaperTex.png');
  background-size: cover;
  background-repeat: repeat;
  background-attachment: scroll;
}
</style>
