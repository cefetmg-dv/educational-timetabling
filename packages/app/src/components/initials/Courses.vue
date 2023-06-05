<script>
    import GreenButton from '../GreenButton.vue'

    export default {
        components: {
            GreenButton
        }
    }

</script>

<template>

    <div class="courses-container">
        <GreenButton link="/Cadastrar-Curso">Cadastrar Curso</GreenButton>
    </div>

</template>


<style>
    .courses-container{
        margin-top: 50px;
        font-family: Poppins, sans-serif;
    }

    .courses-links{
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

    .courses-links:hover{
        background-color: #72BA75;
        color: white;
    }
</style>
