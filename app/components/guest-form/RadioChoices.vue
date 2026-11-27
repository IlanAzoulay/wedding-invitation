<template>
    <div class="radio-container">

        <h3>
            <form-label
                :label-text="labelText"
                :has-error="hasError"
            />
        </h3>

        <!-- Inspi
        https://www.getpapercss.com/docs/components/forms/
        https://wiredjs.com/
        -->

        <div class="choices-list">
            <div v-for="option in radioOptions" class="radio-choice">
                <input type="radio" :id="`${uid}-${option}`" :value="option" v-model="picked" />
                <label :for="`${uid}-${option}`">{{option}}</label>
            </div>
        </div>
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
        picked: '',
        uid: Math.random().toString(36).slice(2)
      }
    },
    props: {
        labelText: {type: String, required: true},
        radioOptions: {type: Array, required: true},
        hasError: {type: Boolean, default: false}
    },
    emits: ['update:modelValue'],
    watch: {
        picked(val) { this.$emit('update:modelValue', val) }
    }
  }
</script>

<style scoped>
.radio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.choices-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
}

input[type="radio"] {
    display: none;
}

label {
    cursor: pointer;
    padding: 2px 10px;
    opacity: 80%;
    position: relative;
}

input[type="radio"]:checked + label {
    text-shadow: 0 0 0.6px currentColor;
    opacity: 100%;
}

input[type="radio"]:checked + label::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 10px;
    right: 10px;
    height: 2px;
    background-color: rgba(255, 0, 0, 0.25);
}
.radio-choice {
    cursor: pointer;
}
h3 {
    font-weight: 400;
    font-size: large;
}
</style>