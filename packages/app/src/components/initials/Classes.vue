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
                instanceClasses : [],    
            }
        },       

        mounted(){
            this.instanceClasses = JSON.parse(window.searchFile()).classes
            console.log(this.instanceClasses)
        },

        methods:{
            removeClass(item){
                console.log(item)
            }
        }


    }
</script>

<template>

    <div class="classes-container">
  
        <GreenButton link="/Cadastrar-Turma">Cadastrar Classe</GreenButton>
    
        <hr>
        <div class="classes-title">Classes Cadastradas:</div>
        <div class="classes-for" v-for="item in this.instanceClasses" :key="item.id">
            <div class="classes-left">
                <p class="description">{{ item.name }}  </p>
            </div>

            <div class="classes-right">
                <div class="classes-buttons">
                    <EditButton class="classes-buttons-edit" :to="'/Atualizar-Classe/' + item.id">Editar</EditButton>
                    <RemoveButton @click="removeClass(item.id)">Apagar</RemoveButton>
                </div>
            </div>
        
        </div>

    </div>

</template>

<style>

    .classes-for {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .classes-left {
        flex: 1;
        margin-left: 20%;
    }


    .description {
        display: inline;
        margin-right: 5px; 
    }


    .classes-right {
        display: flex;
        align-items: center;
        gap: 10px; 
        margin-right: 20%;
    }


    .classes-title{
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding-bottom: 20px;
    }

    .classes-buttons{
        margin-left: 50px;
        color: blue;
        float: right;
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
        margin-top: 10px;
    }

    .classes-buttons-edit{
        margin-right: 20px;
    }

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