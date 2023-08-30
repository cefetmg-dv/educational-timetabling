<script>

</script>


<template>

    <button class="removeButton-links">
        <slot></slot>
    </button>

</template>

<style>
    .removeButton-links{
        height: 30px;
        font-family: Poppins, sans-serif;
        width: 100px;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        border-color: red;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color:white;
        font-weight: 400;
        background-color: red;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .removeButton-links:hover{
        background-color: whitesmoke;
        color: black;
        transform: translateY(-2px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }
</style>