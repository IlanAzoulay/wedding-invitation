<template>
    <div class="torn-paper-grandparent">
        <svg width="0" height="0" class="svg-filter">
            <filter id="torn-edge-container">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
            </filter>
        </svg>

        <div class="torn-paper-container">
            <div class="tape tape-top-left"></div>
            <div class="tape tape-top-right"></div>
            <div class="tape tape-bottom-left"></div>
            <div class="tape tape-bottom-right"></div>

            <div class="torn-paper-background"></div>
            <div class="notebook-red-line"></div>
            <div class="notebook-blue-lines"></div>

            <!-- Everything happens here -->
            <div class="torn-paper-content">
                <h1>INVITATION</h1>

                TODO: First Name <br>
                TODO: Last Name <br>
                TODO: Plus ones <br>
                <br>

                <radio-choices
                    labelText="I will be joining on..."
                    :radio-options="['July 8', 'July 9', 'July 10']"
                    :has-error="answers.answerArrivalDate.error"
                    v-model="answers.answerArrivalDate.response"
                />
                <radio-choices
                    labelText="I will be there for the party in Porto on July 8: "
                    :radio-options="['Yes', 'No']"
                    :has-error="answers.answerPortoBefore.error"
                    v-model="answers.answerPortoBefore.response"
                />

                <radio-choices
                    labelText="I will come to the Quinta..."
                    :radio-options="['with the bus', 'on my own']"
                    :has-error="answers.answerTransportIn.error"
                    v-model="answers.answerTransportIn.response"
                />

                <radio-choices
                    labelText="I will attend the dinner on July 10"
                    :radio-options="['Yes', 'No']"
                    :has-error="answers.answerDinner.error"
                    v-model="answers.answerDinner.response"
                />
                <radio-choices
                    labelText="I will attend the brunch on July 11"
                    :radio-options="['Yes', 'No']"
                    :has-error="answers.answerBrunch.error"
                    v-model="answers.answerBrunch.response"
                />

                <radio-choices
                    labelText="I will leave the Quinta..."
                    :radio-options="['with the bus', 'on my own']"
                    :has-error="answers.answerTransportOut.error"
                    v-model="answers.answerTransportOut.response"
                />

                <radio-choices
                    labelText="I will be in Porto on July 12"
                    :radio-options="['Yes', 'No']"
                    :has-error="answers.answerPortoAfter.error"
                    v-model="answers.answerPortoAfter.response"
                />

                TODO: Additional notes <br>

                <hand-drawn-button
                    :button-text="getButtonText()"
                    :loading="sending"
                    :disabled="sent && success"
                    @click="onSubmit"
                    style="margin: 1rem 0;"
                />
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser'
import HandDrawnButton from './HandDrawnButton.vue';
import PaperTextArea from './PaperTextArea.vue';
import RadioChoices from './RadioChoices.vue';

class Answer {
  constructor(required = true) {
    this.response = undefined;
    this.error = false;
    this.required = required;
  }
  setError(error) {
    this.error = error
  }
}

class FormAnswers {
    constructor() {
        this.answerFirstName = new Answer()
        this.answerLastName = new Answer()
        this.answerPlusOnes = new Answer()

        this.answerArrivalDate = new Answer()
        this.answerTransportIn = new Answer()
        this.answerTransportOut = new Answer()

        this.answerPortoBefore = new Answer()
        this.answerDinner = new Answer()
        this.answerBrunch = new Answer()
        this.answerPortoAfter = new Answer()

        this.additionalNotes = new Answer(false)
    }
}

export default {
    components: {
        HandDrawnButton,
        PaperTextArea,
        RadioChoices,
    },
    setup() {
        const config = useRuntimeConfig()
        return { config }
    },
    data() {
      return {
        answers: new FormAnswers(),

        sending: false,
        sent: false,
        success: undefined,
      }
    },
    beforeMount() {
    },
    methods: {
        getButtonText() {
            if (this.sent && this.success) { return "Thank you!"; }
            if (this.sending) { return "Submitting..."; }
            return "Submit";
        },
        async onSubmit() {

            let has_error = false
            for (let _answer of Object.values(this.answers)) {
                if (_answer.required && !_answer.response) {
                    _answer.setError(true)
                    has_error = true
                } else {
                    _answer.setError(false)
                }
            }
            if (has_error) { return }

            return;
            // TODO: Fix email sending with new values and template

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
.torn-paper-grandparent {
    display: inline-block;
    width: 100%;
}

.torn-paper-container {
    position: relative;
    padding: 0;
    margin: 0 2rem;
    line-height: calc(var(--notebook-line-height) + 1px);
}

.torn-paper-background {
    position: absolute;
    inset: -4px;
    background-color: #faf8ef;
    filter: url(#torn-edge-container) drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.15));
    z-index: 0;
}

.notebook-red-line {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to right, transparent 40px, var(--notebook-red) 40px, var(--notebook-red) 42px, transparent 42px);
    background-position: -25px 0;
    z-index: 1;
    pointer-events: none;
    mix-blend-mode: multiply;
}

.notebook-blue-lines {
    --lines-start-y: 40px;
    position: absolute;
    inset: 0;
    background-image: linear-gradient(transparent var(--notebook-line-height), var(--notebook-blue) var(--notebook-line-height));
    background-size: 100% calc(var(--notebook-line-height) + 1px);
    background-repeat: repeat;
    background-position: 0 var(--notebook-line-height);
    mask-image: linear-gradient(to bottom, transparent var(--lines-start-y), black var(--lines-start-y));
    -webkit-mask-image: linear-gradient(to bottom, transparent var(--lines-start-y), black var(--lines-start-y));
    z-index: 1;
    pointer-events: none;
    mix-blend-mode: multiply;
}

.torn-paper-content {
    position: relative;
    z-index: 2;
    padding: 0px 10px 10px 20px;
    mix-blend-mode: multiply;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;

    font-family: "Quicksand";
    font-weight: 400;
    gap: calc(var(--notebook-line-height) + 1px);
}

.svg-filter {
    position: absolute;
    pointer-events: none;
}

h1 {
    font-family: 'Quicksand';
    font-weight: 700;
    font-size: x-large;
    padding-top: calc(var(--notebook-line-height) + 1px);
    padding-bottom: 32px;
}
</style>
