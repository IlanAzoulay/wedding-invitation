<template>
    <div>
        <FormLabel
            :label-text="labelText"
            :has-error="hasError"
        />

        <div class="torn-paper-container">
            <!-- The background div receives the torn effect so the text isn't distorted -->
            <div class="torn-paper-background"></div>
                <textarea v-model="userText" placeholder="Start typing on this torn piece of paper..."></textarea>
            </div>

            <!-- Invisible SVG Filter defining the torn edge -->
            <svg width="0" height="0" class="svg-filter">
                <filter id="torn-edge">
                    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>
        </div>
</template>

<script>
export default {
    data() {
      return {
        userText: ''
      }
    },
    props: {
        labelText: {type: String, required: true},
        hasError: {type: Boolean, default: false}
    },
    emits: ['update:modelValue'],
    watch: {
        userText(val) { this.$emit('update:modelValue', val) }
    }
}
</script>

<style scoped>
.torn-paper-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  filter: drop-shadow(3px 4px 6px rgba(0, 0, 0, 0.05));
}

.torn-paper-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #faf8ef; /* Off-white paper color */
  /* Apply the SVG turbulence filter to warp the straight edges */
  filter: url(#torn-edge);
  z-index: -1;
}

textarea {
  width: 100%;
  height: 250px;
  background: transparent;
  border: none;
  outline: none;
  resize: vertical;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #333;
}

.svg-filter {
  position: absolute;
  pointer-events: none;
}
</style>
