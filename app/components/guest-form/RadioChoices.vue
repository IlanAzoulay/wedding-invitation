<template>
    <div class="radio-container">
        <form-label
            :label-text="labelText"
            :has-error="hasError"
        />
        <div class="choices-list">
            <div v-for="option in radioOptions" class="radio-choice">
                <input type="radio" :id="option" :value="option" v-model="picked" />
                <label :for="option">{{option}}</label>
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
        picked: ''
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
}

input[type="radio"] {
    display: none;
}

label {
    cursor: pointer;
    padding: 2px 10px;
    border-radius: 3px;
    transition: background-color 0.15s;
}

input[type="radio"]:checked + label {
    background-color: rgba(0, 0, 0, 0.1);
    font-weight: 600;
}
.radio-choice {
    cursor: pointer;
}
</style>