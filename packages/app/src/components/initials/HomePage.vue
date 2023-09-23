<script>
import GreenButton from '@/components/GreenButton.vue';

export default {
    components: {
        GreenButton
    }
};
</script>


<template>
    <div class="homepage-container">
        <img class="homepage-image" src="@/assets/icone.png" alt="background" />
        Bem vindo(a) ao gerador de horários do CEFET-MG Campus V
    </div>
    <br>
    <div class="homePage-tutorialButton">
        <GreenButton link="/Tutorial">Tutorial</GreenButton>
    </div>
</template>


<style>
.homePage-tutorialButton {
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

.homepage-container {
    margin: 0 auto;
    margin-top: 10%;
    text-align: center;
    font-size: 25px;
    font-weight: 400;
    color: black;
    min-height: 100%;
}

.homepage-image {
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 200px;
    z-index: -1;

}

.homepage-image:hover {
    transform: translateY(-5px);
}
</style>