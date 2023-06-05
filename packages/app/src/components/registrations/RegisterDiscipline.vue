<script>
    export default{
        methods: {
            HandleSubmit(e){
                e.preventDefault()
            }
        }
    }

</script>

<template>
    <div class="registerDiscipline-container">
        <form class="registerDiscipline-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome da disciplina</label>
                <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div class="mb-3">
                <label class="form-label">Abreviatura</label>
                <input v-model="abbreviation" type="text" class="form-control" id="exampleInputPassword1"/>
            </div>

            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
    </div>
</template>


<style>
    .registerDiscipline-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }
</style>