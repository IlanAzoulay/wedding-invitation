<template>
  <div class="page">
      <welcome-page/>
      <img class="transition-flowers" src="./assets/Flower_pattern_2.png">

      <timeline/>
      <img class="transition-flowers" src="./assets/Flower_pattern_2.png">

      <schedule/>
      <img class="transition-flowers" src="./assets/Flower_pattern_2.png">

      <guest-form/>
      <img class="transition-flowers" src="./assets/Flower_pattern_2.png">
    </div>
</template>

<script>
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

.page {
  padding-top: 1rem;
  min-height: 100vh;

  background-image: url('@/assets/PaperTex.png');
  background-size: cover;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: center;

  mix-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
}

.transition-flowers {
  mix-blend-mode: multiply;
  opacity: 50%;
  width: 100%;
}
</style>
