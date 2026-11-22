<template>
    <div class="radio-list">
        <FormLabel
            :label-text="labelText"
            :has-error="hasError"
        />
        <div v-for="option in radioOptions" class="radio-choice">
            <input type="radio" :id="option" :value="option" v-model="picked" />
            <label :for="option">{{option}}</label>
        </div>
    </div>
</template>

<script>
export default {
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
input {
    cursor: inherit;
}
label {
    cursor: inherit;
    padding-left: 3px;
}
.radio-list {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
.radio-choice {
    cursor: pointer;
}
</style>