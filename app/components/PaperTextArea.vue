<template>
    <div>
        <FormLabel
            :label-text="labelText"
            :has-error="hasError"
        />
        <div class="torn-wrapper">
            <textarea v-model="userText"></textarea>
        </div>
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
.torn-wrapper {
  display: inline-block;
  background-color: #f5f0e8;
  clip-path: polygon(
    0%    3%,
    2%    0%,
    5%    2%,
    8%    0%,
    12%   3%,
    16%   1%,
    20%   3%,
    25%   0%,
    30%   2%,
    35%   0%,
    40%   3%,
    45%   1%,
    50%   3%,
    55%   0%,
    60%   2%,
    65%   0%,
    70%   3%,
    75%   1%,
    80%   3%,
    85%   0%,
    90%   2%,
    95%   0%,
    98%   2%,
    100%  0%,
    100%  97%,
    98%   100%,
    94%   98%,
    90%   100%,
    85%   97%,
    80%   100%,
    75%   98%,
    70%   100%,
    64%   97%,
    58%   100%,
    52%   98%,
    46%   100%,
    40%   97%,
    34%   100%,
    28%   98%,
    22%   100%,
    16%   97%,
    10%   100%,
    5%    98%,
    0%    100%
  );
}

textarea {
  display: block;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  padding: 1.2rem 1.4rem;
  font-size: 1rem;
  width: 320px;
  min-height: 120px;
  box-sizing: border-box;
}
</style>
