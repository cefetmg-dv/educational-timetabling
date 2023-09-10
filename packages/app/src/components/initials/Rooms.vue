<script>
    import GreenButton from '../GreenButton.vue'
    import EditButton from '../EditButton.vue'
    import RemoveButton from '../RemoveButton.vue';

    export default {
        components: {
            GreenButton,
            EditButton,
            RemoveButton
        },

        data(){
            return{
                instanceRooms: []
            }
        },

        mounted(){
            this.instanceRooms = JSON.parse(window.searchFile()).rooms
            console.log(this.instanceRooms)
        },

        methods:{
            removeRoom(item){
                window.removeRoom(item)
            }
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
            <div class="rooms-left">
                
                <p class="description">{{ item.name }}  </p>
            
            </div>

            <div class="rooms-right">
                <div class="rooms-buttons">
                    <EditButton class="rooms-buttons-edit" :to="'/Atualizar-Sala/' + item.id">Editar</EditButton>
                    <RemoveButton @click="removeRoom(item.id)">Apagar</RemoveButton>
                </div>
            </div>
        
        </div>
    </div>


</template>

<style>

    .rooms-for {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .rooms-left {
        flex: 1;
        margin-left: 20%;
    }


    .rooms {
        display: inline;
        margin-right: 5px; 
    }


    .rooms-right {
        display: flex;
        align-items: center;
        gap: 10px; 
        margin-right: 20%;
    }


    .rooms-title{
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding-bottom: 20px;
    }

    .rooms-buttons{
        margin-left: 50px;
        color: blue;
        float: right;
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
        margin-top: 10px;
    }

    .rooms-buttons-edit{
        margin-right: 20px;
    }

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