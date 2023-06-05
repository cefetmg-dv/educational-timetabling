<script>

    export default {
        props: {
            link: {
                type: String,
                required: true
            }
        }
    }

</script>


<template>

    <router-link :to="link" class="greenButton-links">
        <slot></slot>
    </router-link>

</template>


<style>
    .greenButton-links{
        height: 60px;
        font-family: Poppins, sans-serif;
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
        color:white;
        font-weight: 400;
        background-color: #72BA75;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .greenButton-links:hover{
        background-color: whitesmoke;
        color: black;
        transform: translateY(-2px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }
</style>