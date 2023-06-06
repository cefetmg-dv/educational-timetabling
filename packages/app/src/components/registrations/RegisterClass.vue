<script>

    export default {
        methods: {
            HandleSubmit(e) {
                e.preventDefault();
                //console.log(this.name)
                //console.log(this.abbreviation)
                //data = {
                //    name : this.name,
                //    abbreviation : this.abbreviation
                //}

                window.salvarPalavra(this.name) 
            }
        }
    }

</script>

<template>
    <div class="registerClass-container">
        <form class="registerClass-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome da turma</label>
                <input required v-model="name" type="text" class="form-control" aria-describedby="emailHelp"/>
                
            </div>
            <div class="mb-3">
                <label className="form-label">Abreviatura</label>
                <input required v-model="abbreviation" type="text" class="form-control"/>
            </div>

            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
    </div>
</template>

<style>
    .registerClass-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }
</style>

