<script>
    import GreenButton from '../GreenButton.vue'

    export default {
        components: {
            GreenButton
        },

        data(){
            return{
                instanceRooms: []
            }
        },

        mounted(){
            this.instanceRooms = JSON.parse(window.searchFile()).rooms
            console.log(this.instanceRooms)
        }
    }  
</script>

<template>

    <div class="rooms-container">
        <div class="rooms-button-container">
            <GreenButton link="/Cadastrar-Sala">Cadastrar Sala</GreenButton>
            <GreenButton link="/Cadastrar-Categoria-de-Sala">Cadastrar Categoria</GreenButton>
        </div>
        <hr>
        <div class="rooms-title">Salas cadastradas:</div>
        <div class="rooms-for" v-for="item in this.instanceRooms" :key="item.id">
            <p>{{ item.name }}</p>
        </div>
    </div>


</template>

<style>

    .rooms-button-container {
        display: flex; 
        gap: 5px; 
    }
    .rooms-title{
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding-bottom: 20px;
    }

    .rooms-for{
        display: flex;
        justify-content: center;
        margin: 0 auto;        
    }

    .rooms-container{
        margin-top: 50px;
        font-family: Poppins, sans-serif;
    }

    .rooms-links{
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

    .rooms-links:hover{
        background-color: #72BA75;
        color: white;
    }
</style>