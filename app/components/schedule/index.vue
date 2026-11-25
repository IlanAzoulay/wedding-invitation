<template>
    <div class="schedule-container">

        <div id="july8">
            <day-header
                title="July 8th"
                subtitle="Welcome to Porto!"
                :photo1=imgPorto3
                :photo2=imgPorto4
                :optional=true
            />
            <span>
                Un verre au bord de l'eau ça vous dit ?
                Que ce soit au bord de la mer, ou du Douro,
                pour ceux qui arriveront un peu plus tôt,
                nous vous accueilleront jeudi en fin d'après midi pour un verre de bienvenue !
            </span>
        </div>
        <img class="between-days" :src="flowersImg">

        <div id="july9">
            <day-header
                title="July 9th"
                subtitle="Arrival in Lugar da Pedra Alta"
                :photo1=imgPedraAlta1
                :photo2=imgPedraAlta8
                :optional=true
                :flip-rotation=true
            />
            <span>
                Après une matinée de repos, nous vous proposons de partir tous ensemble en transport privatif.
                Nous comptons une route d'1h30. Information importante :
                Si vous ne pouvez pas venir le vendredi,
                nous vous recommandons de louer une voiture ou de covoiturer entre vous afin de garder un maximum d'autonomie.
                Si vous ne pouvez pas, pas de souci : nous organisons un bus pour vous emmener
                (il faudra simplement être sur place le vendredi en début d'après-midi).
            </span>
        </div>
        <img class="between-days" :src="flowersImg">

        <div id="july10">
            <day-header
                title="July 10th"
                subtitle="The Ceremony"
                :photo1=imgPedraAlta6
                :photo2=imgPedraAlta7
            />
            <span>
                Le jour J, le moment tant attendu, le climax de ce weekend.
                Bref, le moment ou nous allons nous dire oui.
                nous vous donnons rendez-vous dans l'après midi pour notre cérémonie.
                S'en suivra un vin d'honneur, un diner, et une soirée !
            </span>
        </div>
        <img class="between-days" :src="flowersImg">

        <div id="july11">
            <day-header
                title="July 11th"
                subtitle="The Day After"
                :photo1=imgPedraAlta2
                :photo2=imgPedraAlta3
                :flip-rotation=true
            />
            <span>
                Quoi de mieux qu'un bon brunch pour clôturer ce week-end et se dire au revoir ?
                rendez-vous en fin de matinée pour partager les derniers moments de ce week-end tous ensemble !
                Prenons la route tous en ensemble dans l'après midi pour rejoindre Porto !
                <br>
                PS: nous serons sur Porto vers 18h
            </span>
        </div>
        <img class="between-days" :src="flowersImg">

        <div id="july12">
            <day-header
                title="July 12th"
                subtitle="Chill day back in Porto"
                :photo1=imgPorto1
                :photo2=imgPorto2
                :optional=true
            />
            <span>blabla</span>
        </div>
    </div>
</template>

<script>
import dayHeader from './dayHeader.vue'
import flowersImg from '../../assets/Flower_pattern_1.png'

import imgPedraAlta1 from '../../assets/PedraAlta1.png'
import imgPedraAlta2 from '../../assets/PedraAlta2.png'
import imgPedraAlta3 from '../../assets/PedraAlta3.png'
import imgPedraAlta6 from '../../assets/PedraAlta6.png'
import imgPedraAlta7 from '../../assets/PedraAlta7.png'
import imgPedraAlta8 from '../../assets/PedraAlta8.png'

import imgPorto1 from '../../assets/Porto1.png'
import imgPorto2 from '../../assets/Porto2.png'
import imgPorto3 from '../../assets/Porto3.png'
import imgPorto4 from '../../assets/Porto4.png'

export default {
    components: {
        dayHeader
    },
    data() {
        return {
            flowersImg,
            imgPedraAlta1,
            imgPedraAlta2,
            imgPedraAlta3,
            imgPedraAlta6,
            imgPedraAlta7,
            imgPedraAlta8,
            imgPorto1,
            imgPorto2,
            imgPorto3,
            imgPorto4,
        }
    }
}
</script>

<style scoped>
.schedule-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
    padding: 1rem;
}
.between-days {
    width: 90%;
    mix-blend-mode: multiply;
    opacity: 40%;
    padding: 1rem 0;
}
span {
    display: block;
    font-family: 'Quicksand';
    font-weight: 300;
    font-size: small;
    padding: 0 2rem;
    text-align: justify;
    mix-blend-mode: multiply;
}
</style>