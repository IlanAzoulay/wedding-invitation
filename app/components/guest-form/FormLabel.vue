<template>
    <div :class="hasError? 'error' : '' ">{{labelText}}{{ hasError? "*" : "" }}</div>
</template>

<script>
export default {
    props: {
        labelText: {type: String, required: true},
        hasError: {type: Boolean, default: false}
    }
}
</script>

<style scoped>
.error {
    color: red;
}
</style>
