<script>

    import GreenButton from '../GreenButton.vue'

    export default {
        components: {
            GreenButton
        },

        data(){
            return{
                instanceTeachers: []
            }
        },

        mounted(){
            this.instanceTeachers = JSON.parse(window.buscarArquivo()).teachers
            console.log(this.instanceTeachers)
        }
    }  


</script>

<template>

    <div class="teachers-container">
        <GreenButton link="/Cadastrar-Professor">Cadastrar Professor</GreenButton>
        <hr>
        <div class="teachers-title">Professores Cadastrados:</div>
        <div class="teachers-for" v-for="item in this.instanceTeachers" :key="item.id">
            <p>{{ item.name }}</p>
        </div>
    </div>
    
</template>

<style>

    .teachers-title{
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding-bottom: 20px;
    }

    .teachers-for{
        display: flex;
        justify-content: center;
        margin: 0 auto;        
    }

    .teachers-container{
        margin-top: 50px;
        font-family: Poppins, sans-serif;
    }

    .teachers-links{
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

    .teachers-links:hover{
        background-color: #72BA75;
        color: white;
    }
</style>