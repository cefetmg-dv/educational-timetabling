<script>
    import GreenButton from '../GreenButton.vue'

    export default {
        components: {
            GreenButton
        },
    
    
        data(){
            return{
                instanceClasses : []    
            }
        },       

        mounted(){
            this.instanceClasses = JSON.parse(window.buscarArquivo()).classes
            console.log(this.instanceClasses)
        },


        methods:{
            HandleSubmit(e){
                e.preventDefault()

            }
        }

    }
</script>

<template>

    <div class="classes-container">
        <div class="classes-button-container">
            <GreenButton link="/Cadastrar-Turma">Cadastrar Turma</GreenButton>
            <GreenButton link="/Disciplinas">Disciplinas</GreenButton>
        </div>
        <hr>
        <div class="classes-title">Classes Cadastradas:</div>
        <div class="classes-for" v-for="item in this.instanceClasses" :key="item.id">
            <p>{{ item.name }}</p>
        </div>

    </div>

</template>

<style>

    .classes-title{
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding-bottom: 20px;
    }

    .classes-for{
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    .classes-button-container{
        display: flex;
        gap: 5px;
    }

    .classes-container{
        margin-top: 50px;
        font-family: Poppins, sans-serif;
    }

    .classes-links{
        width: 200px;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        border-color: #72BA75;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color:black;
        font-weight: 400;
    }

    .classes-links:hover{
        background-color: #72BA75;
        color: white;
    }
</style>