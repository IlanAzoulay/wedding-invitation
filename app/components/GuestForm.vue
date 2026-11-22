<template>
    <div class="form-container">
        <PaperTextArea
            labelText="Your name"
            :has-error="textAnswer.error"
            v-model="textAnswer.response"
        />
        <RadioChoices
            labelText="Question?"
            :radio-options="['Yes', 'No']"
            :has-error="radioAnswer.error"
            v-model="radioAnswer.response"
        />
        <HandDrawnButton
            button-text="Submit"
            @click="onSubmit"
        />
    </div>
</template>

<script>
class Answer {
  constructor(required) {
    this.response = undefined;
    this.error = false;
    this.required = required;
  }
  setError(error) {
    this.error = error
  }
}

export default {
    data() {
      return {
        answers: [],
        textAnswer: new Answer(true),
        radioAnswer: new Answer(true),
      }
    },
    beforeMount() {
        this.answers = [
            this.textAnswer,
            this.radioAnswer
        ]
    },
    methods: {
        onSubmit() {
            let has_error = false
            console.log("SUBMITTING")
            for (let _answer of this.answers) {
                if (_answer.required && !_answer.response) {
                    _answer.setError(true)
                    has_error = true
                }
                else {
                    console.log("> ", _answer.response)
                    _answer.setError(false)
                }
            }
            if (has_error) {return}
        }
    }
  }
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>