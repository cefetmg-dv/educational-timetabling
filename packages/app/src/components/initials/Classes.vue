<script>
    import GreenButton from '../GreenButton.vue'

    export default {
        components: {
            GreenButton
        }
    }
</script>

<template>

    <div class="classes-container">
        <GreenButton link="/Cadastrar-Turma">Cadastrar Turma</GreenButton>
    </div>

</template>

<style>
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