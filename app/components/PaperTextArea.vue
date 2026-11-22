<template>
    <div>
        <FormLabel
            :label-text="labelText"
            :has-error="hasError"
        />

        <div class="torn-paper-container">

            <!-- Tape -->
            <div class="tape tape-top-left"></div>
            <div class="tape tape-top-right"></div>

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
  padding: 0;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.15));
}

.torn-paper-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Keep only the solid base color here so only the shape is distorted */
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
    padding: 0; /* Removing internal padding helps text align with the lines perfectly */

    /* Move the notebook lines to the textarea */
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

.tape {
  position: absolute;
  width: 50px;
  height: 20px;
  /* Semi-transparent white to mimic frosted tape */
  background-color: rgba(255, 255, 255, 0.2);
  /* Adds a slight frosted glass effect (works in modern browsers) */
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  /* A subtle shadow to lift the tape off the page */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  /* Ensures the tape sits on top of the paper and text */
  z-index: 10;
}

/* Position and rotate the top-left tape */
.tape-top-left {
  top: 0px;
  left: -20px;
  transform: rotate(-45deg);
}

/* Position and rotate the top-right tape */
.tape-top-right {
  top: -5px;
  right: -20px;
  transform: rotate(45deg);
}
</style>
