<script>
    import GreenButton from '../GreenButton.vue'

    export default {
        components: {
            GreenButton
        }
    }  


</script>

<template>

    <div class="teachers-container">
        <GreenButton link="/Cadastrar-Professor">Cadastrar Professor</GreenButton>
    </div>
    
</template>

<style>
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