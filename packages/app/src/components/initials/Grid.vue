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
            return {
                instanceGrids: []
            };
        },

        mounted(){
            this.instanceGrids = JSON.parse(window.searchFile()).timeslots
            console.log(this.instanceGrids)
        },

        computed: {
            sortedInstanceGrids() {
            // Cria uma cópia ordenada da lista de instâncias
            return [...this.instanceGrids].sort((a, b) => a.id - b.id);
            }
        },

        methods:{
            removeTimeslot(item){
                Swal.fire({
                    text: 'Deseja mesmo apagar esse intervalo?',
                    icon: 'warning',
                 // Mostrar botão de Cancelar
                    confirmButtonText: 'Confirmar',
                }).then((result)=>{
                    if(result.isConfirmed){
                        window.removeGrid(item)
                        
                        this.$router.push('/')
                    }
                })
                
            }
        }
    }
</script>

<template>

    <div class="grid-container">
        <GreenButton link="/Cadastrar-Timeslot">Cadastrar Tempo</GreenButton>
        <hr>

        <div class="grid-title">Intervalos Cadastrados:</div>
        <div class="grid-for" v-for="item in this.sortedInstanceGrids" :key="item.id">
            <div class="grid-left">
                <div class="description-and-day">
                    <p class="description">{{ item.description }},</p>
                    <p class="day" v-if="item.day == 1">Segunda-feira</p>
                    <p class="day" v-if="item.day == 2">Terça-feira</p>
                    <p class="day" v-if="item.day == 3">Quarta-feira</p>
                    <p class="day" v-if="item.day == 4">Quinta-feira</p>
                    <p class="day" v-if="item.day == 5">Sexta-feira</p>
                    <p class="day" v-if="item.day == 6">Sábado</p>
                </div>
            </div>

            <div class="grid-right">
                <div class="grid-buttons">
                    <RemoveButton @click="removeTimeslot(item.id)">Apagar</RemoveButton>
                </div>
            </div>
        </div>
    </div>

</template>

<style>

    .grid-for {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .grid-left {
        flex: 1;
        margin-left: 20%;
    }

    .description-and-day {
        display: flex;
        align-items: baseline; 
    }

    .description {
        display: inline;
        margin-right: 5px; 
    }

    .day {
        display: inline;
    }

    .grid-right {
        display: flex;
        align-items: center;
        gap: 10px; 
        margin-right: 20%;
    }

    .grid-buttons{
        margin-left: 50px;
        color: blue;
        float: right;
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
    }

    .grid-buttons-edit{
        margin-right: 20px;
    }

    .grid-container{
        margin-top: 50px;
        font-family: Poppins, sans-serif;
    }

    .grid-links{
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

    .grid-links:hover{
        background-color: #72BA75;
        color: white;
    }

    .grid-for{
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    .grid-title{
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding-bottom: 20px;
    }
</style>