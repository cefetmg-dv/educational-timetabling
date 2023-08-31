<script>

    import GreenButton from '../GreenButton.vue'

    export default {
        components:{GreenButton},

        data(){
            return{
                instanceClasses: []
            }
        },

        mounted(){
            this.instanceClasses = JSON.parse(window.searchFile()).classes
            console.log(this.instanceClasses)
        },

        //pega dados passados pela url
        computed: {
            classID() {
                return this.$route.params.id;
            }
        }
    }

</script>

<template>
    <div class="updateClass-container">

        <div class="updateClass-name" v-for="item in this.instanceClasses" :key="item.id">
            <p v-if="item.id == classID">{{item.name}}</p>
        </div>

        <div class="updateClass-button-container">
            <GreenButton link="/Atualizar">Editar Nome</GreenButton>
            <GreenButton link="/Cadastrar-Categoria-de-Sala">Adicionar Matéria</GreenButton>
        </div>
        <hr>
    </div>

</template>

<style>

    .updateClass-name>p{
        margin: 0;
        display: flex;
        justify-content: center;
        font-weight: bold;
    }

    .updateClass-container{
        margin-top: 50px;
        font-family: Poppins, sans-serif;
    }

    .updateClass-button-container{
        display: flex; 
        gap: 5px; 
    }

</style>