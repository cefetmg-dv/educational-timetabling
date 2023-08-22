<script>
    import GreenButton from '../GreenButton.vue'
    import EditButton from '../EditButton.vue'

    export default {
        components: {
            GreenButton,
            EditButton
        },

        data(){
            return {
                instanceGrids: []
            };
        },

        mounted(){
            this.instanceGrids = JSON.parse(window.buscarArquivo()).timeslots
            console.log(this.instanceGrids)
        },

        methods:{
            removeTimeslot(item){
                console.log(item)
            }
        }
    }
</script>

<template>

    <div class="grid-container">
        <GreenButton link="/Cadastrar-Timeslot">Cadastrar Tempo</GreenButton>
        <hr>

        <div class="grid-title">Intervalos Cadastrados:</div>
        <div class="grid-for" v-for="item in this.instanceGrids" :key="item.id">
            <p>{{item.description}}, </p>
            <p v-if="item.day == 1">  Segunda-feira</p>
            <p v-if="item.day == 2">  Terça-feira</p>
            <p v-if="item.day == 3">  Quarta-feira</p>
            <p v-if="item.day == 4">  Quinta-feira</p>
            <p v-if="item.day == 5">  Sexta-feira</p>
            <p v-if="item.day == 6">  Sábado</p>
        </div> 
    </div>

</template>


<style>

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