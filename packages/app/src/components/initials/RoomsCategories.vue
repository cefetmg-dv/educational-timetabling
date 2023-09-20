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
                instanceCategories: []
            }
        },

        mounted(){
            this.instanceCategories = JSON.parse(window.searchFile()).rooms_category
            console.log(this.instanceRooms)
        },

        methods:{
            removeRoomCategory(item){
                console.log(item)
                window.removeRoomCategory(item)
            }
        }
    }  

</script>

<template>


    <div class="roomsCategories-container">
        <div class="roomsCategories-button-container">
            <GreenButton link="/Cadastrar-Categoria-de-Sala">Cadastrar Categoria</GreenButton>
        </div>
        <hr>
        <div class="roomsCategories-title">Categorias cadastradas:</div>
        <div class="roomsCategories-for" v-for="item in this.instanceCategories" :key="item">
            <div class="roomsCategories-left">
                
                <p class="description">{{ item }}  </p>
            
            </div>

            <div class="roomsCategories-right">
                <div class="roomsCategories-buttons">
                    <EditButton class="roomsCategories-buttons-edit" :to="'/Atualizar-Categoria-de-Sala/' + item">Editar</EditButton>
                    <RemoveButton @click="removeRoomCategory(item)">Apagar</RemoveButton>
                </div>
            </div>
        
        </div>
    </div>

</template>


<style>

    .roomsCategories-for {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .roomsCategories-left {
        flex: 1;
        margin-left: 20%;
    }


    .roomsCategories {
        display: inline;
        margin-right: 5px; 
    }


    .roomsCategories-right {
        display: flex;
        align-items: center;
        gap: 10px; 
        margin-right: 20%;
    }


    .roomsCategories-title{
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding-bottom: 20px;
    }

    .roomsCategories-buttons{
        margin-left: 50px;
        color: blue;
        float: right;
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
        margin-top: 10px;
    }

    .roomsCategories-buttons-edit{
        margin-right: 20px;
    }

    .roomsCategories-button-container {
        display: flex; 
        gap: 5px; 
    }
    .roomsCategories-title{
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding-bottom: 20px;
    }

    .roomsCategories-for{
        display: flex;
        justify-content: center;
        margin: 0 auto;        
    }

    .roomsCategories-container{
        margin-top: 50px;
        font-family: Poppins, sans-serif;
    }

    .roomsCategories-links{
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

    .roomsCategories-links:hover{
        background-color: #72BA75;
        color: white;
    }



</style>