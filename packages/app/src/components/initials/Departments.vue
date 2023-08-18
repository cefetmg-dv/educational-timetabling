<script>
    import GreenButton from '../GreenButton.vue'
    export default {
        components: {
            GreenButton
        }
    }
</script>


<template>

    <div class="departments-container">
        <GreenButton link="/Cadastrar-Departamento">Cadastrar Departamento</GreenButton>
    </div>

</template>


<style>
    .departments-links{
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

    .departments-links:hover{
        background-color: #72BA75;
        color: white;
        
    }

    .departments-container{
        margin-top: 50px;
        font-family: Poppins, sans-serif;
    }

    .departments-infos-title{
        font-size: 20px;
        
        text-align: center;
    }
</style>