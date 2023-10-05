<script>

    import GreenButton from '../GreenButton.vue'
    import EditButton from '../EditButton.vue'
    import RemoveButton from '../RemoveButton.vue';
    import Swal from 'sweetalert2';

    export default {
        components: {
            GreenButton,
            EditButton,
            RemoveButton
        },

        data(){
            return{
                instanceTeachers: []
            }
        },

        mounted(){
            this.instanceTeachers = JSON.parse(window.searchFile()).teachers
            console.log(this.instanceTeachers)
        },

        methods:{
            removeTeacher(item){
                Swal.fire({
                    text: 'Deseja mesmo apagar esse professor?',
                    icon: 'warning',
                 // Mostrar botão de Cancelar
                    confirmButtonText: 'Confirmar',
                }).then((result)=>{
                    if(result.isConfirmed){
                        window.removeTeacher(item)
                        this.$router.push('/')
                    }
                })
                
            }
   
        }

    }  


</script>

<template>

    <div class="teachers-container">
        <GreenButton link="/Cadastrar-Professor">Cadastrar Professor</GreenButton>
        <hr>
        <div class="teachers-title">Professores Cadastrados:</div>
        <div class="teachers-for" v-for="item in this.instanceTeachers" :key="item.id">
            <div class="teachers-left">
                
                <p class="description">{{ item.name }}  </p>
            
            </div>

            <div class="teachers-right">
                <div class="teachers-buttons">
                    <EditButton class="teachers-buttons-edit" :to="'/Atualizar-Professor/' + item.id">Editar</EditButton>
                    <RemoveButton @click="removeTeacher(item.id)">Apagar</RemoveButton>
                </div>
            </div>
        
        </div>
    </div>
    
</template>

<style>

    .teachers-for {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .teachers-left {
        flex: 1;
        margin-left: 20%;
    }


    .description {
        display: inline;
        margin-right: 5px; 
    }


    .teachers-right {
        display: flex;
        align-items: center;
        gap: 10px; 
        margin-right: 20%;
    }


    .teachers-title{
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding-bottom: 20px;
    }


    
    .teachers-buttons{
        margin-left: 50px;
        color: blue;
        float: right;
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
        margin-top: 10px;
    }

    .teachers-buttons-edit{
        margin-right: 20px;
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