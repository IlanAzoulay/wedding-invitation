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
            :button-text="getButtonText()"
            :loading="sending"
            :disabled="sent && success"
            @click="onSubmit"
        />
    </div>
</template>

<script>
import emailjs from '@emailjs/browser'

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
    setup() {
        const config = useRuntimeConfig()
        return { config }
    },
    data() {
      return {
        answers: [],
        textAnswer: new Answer(true),
        radioAnswer: new Answer(true),
        sending: false,
        sent: false,
        success: undefined
      }
    },
    beforeMount() {
        this.answers = [
            this.textAnswer,
            this.radioAnswer
        ]
    },
    methods: {
        getButtonText() {
            if (this.sent && this.success) { return "Thank you!"; }
            if (this.sending) { return "Submitting..."; }
            return "Submit";
        },
        async onSubmit() {
            let has_error = false
            for (let _answer of this.answers) {
                if (_answer.required && !_answer.response) {
                    _answer.setError(true)
                    has_error = true
                } else {
                    _answer.setError(false)
                }
            }
            if (has_error) { return }

            this.sending = true;
            emailjs.send(
                this.config.public.emailjsServiceId,
                this.config.public.emailjsTemplateId,
                {
                    subject: "WEDDING",
                    from_name: this.textAnswer.response,
                    from_email: "Test email",
                    message: "Radio answer: " + this.radioAnswer.response
                },
                this.config.public.emailjsPublicKey
            ).then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                this.sending = false;
                this.sent = true;
                this.success = true;
            })
            .catch((error) => {
                console.error('FAILED...', error);
                this.sending = false;
                this.sent = true;
                this.success = false;
            });
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