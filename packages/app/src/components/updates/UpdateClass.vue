<script>

    import GreenButton from '../GreenButton.vue'
    import EditButton from '../EditButton.vue'
    import RemoveButton from '../RemoveButton.vue';
    import Swal from 'sweetalert2';


    export default {
        components:{
            GreenButton,
            EditButton,
            RemoveButton
        },

        data(){
            return{
                instanceClasses: [],
                instanceSubjects: [],
            }
        },

        //pega dados passados pela url
        computed: {
            classID() {
                return this.$route.params.id;
            }
        },

        mounted(){
            this.instanceClasses = JSON.parse(window.searchFile()).classes
            this.instanceSubjects = JSON.parse(window.searchFile()).classes[this.classID].subjects
        },

        methods:{
            removeClassSubject(itemID){
                Swal.fire({
                    text: 'Deseja mesmo apagar essa matéria?',
                    icon: 'warning',
                 // Mostrar botão de Cancelar
                    confirmButtonText: 'Confirmar',
                }).then((result)=>{
                    if(result.isConfirmed){
                        window.removeSubjects(itemID.toString(), this.classID.toString())
                    }
                })
                
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
            <GreenButton :to="'/Atualizar-Nome-Classe/' + this.classID">Editar Nome</GreenButton>
            <GreenButton :to="'/Cadastrar-Materia-Classe/' + this.classID">Adicionar Matéria</GreenButton>
        </div>
        <hr>

        <div class="updateClass-subjects-title">
            Matérias cadastradas na Classe:
        </div>

        <div class="updateClass-for" v-for="item in this.instanceSubjects" :key="item.id">
            <div class="updateClass-left">
                <p class="description">{{ item.name }} </p>
            </div>

            <div class="updateClass-right">
                <div class="updateClass-buttons">
                    <EditButton class="updateClass-buttons-edit" :to="'/Atualizar-Materia-Classe/' + item.id + '/' + this.classID">Editar</EditButton>
                    <RemoveButton @click="removeClassSubject(item.id)">Apagar</RemoveButton>
                </div>
            </div>
        
        </div>

    </div>

</template>

<style>

 
    .updateClass-for {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .updateClass-left {
        flex: 1;
        margin-left: 20%;
    }


    .description {
        display: inline;
        margin-right: 5px; 
    }


    .updateClass-right {
        display: flex;
        align-items: center;
        gap: 10px; 
        margin-right: 20%;
    }

    .updateClass-buttons{
        margin-left: 50px;
        color: blue;
        float: right;
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
        margin-top: 10px;
    }

    .updateClass-buttons-edit{
        margin-right: 20px;
    }

    .updateClass-subjects-title{
        font-family: Poppins, sans-serif;
        font-weight: bold;
        margin: 0;
        display: flex;
        justify-content: center;
    }

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