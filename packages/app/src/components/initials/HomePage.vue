<script>
    
    import GreenButton from '@/components/GreenButton.vue';
    import GreenButton2 from '@/components/GreenButton2.vue';
    import Swal from 'sweetalert2';

export default {
    components: {
        GreenButton,
        GreenButton2
    },

    methods:{
        showTutorial(){
            Swal.fire({
                text: 'Cadastre os dados do CEFET por meio da barra de navegação acima e depois clique em Gerar Horário na página inicial. Não se esqueça de associar a cada matéria cadastrada os seus professores e suas salas.',
                icon: 'info',
                confirmButtonText: 'Ok',
            })
        }
    }
};
</script>


<template>
    <div class="homepage-container">
        <img class="homepage-image" src="@/assets/icone.png" alt="background" />
        Bem vindo(a) ao gerador de horários do CEFET-MG Campus V
    </div>
    <br>
    <div class="homePage-buttonsContainer">
        
            <GreenButton2 @click="showTutorial">Tutorial</GreenButton2>
        
            <GreenButton link="/Solucao">Gerar Horário</GreenButton>
            </div>
</template>


<style>

    .homePage-buttonsContainer{
        display: flex; 
        gap: 5px; 
    }

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