<template>
    <div>
        <form-label
            :label-text="labelText"
            :has-error="hasError"/>

        <div class="torn-paper-container">
            <!-- Tape -->
            <div class="tape tape-top-left"></div>
            <div class="tape tape-top-right"></div>

            <!-- Main writing area -->
            <div class="torn-paper-background"></div>
                <textarea v-model="userText" placeholder="Start typing on this torn piece of paper..."></textarea>
            </div>

            <!-- Torn paper effect on the edges -->
            <svg width="0" height="0" class="svg-filter">
                <filter id="torn-edge">
                    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>
        </div>
</template>

<script>
import FormLabel from './FormLabel.vue';

export default {
    components: {
        FormLabel
    },
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
  padding: 0;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.15));
}

.torn-paper-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #faf8ef;
  filter: url(#torn-edge);
  z-index: -1;
}

textarea {
    width: 100%;
    height: 250px;
    border: none;
    outline: none;
    resize: vertical;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.1rem;
    line-height: 28px;
    color: #333;
    padding: 0;

    background-color: transparent;
    background-image:
        /* Red vertical line */
        linear-gradient(to right, transparent 40px, var(--notebook-red) 40px, var(--notebook-red) 42px, transparent 42px),
        /* Repeating horizontal blue lines */
        repeating-linear-gradient(transparent, transparent 27px, var(--notebook-blue) 27px, var(--notebook-blue) 28px);

    background-attachment: local;
    background-position: -25px 3px;
    padding: 10px 10px 10px 20px;
}

.svg-filter {
  position: absolute;
  pointer-events: none;
}
</style>
