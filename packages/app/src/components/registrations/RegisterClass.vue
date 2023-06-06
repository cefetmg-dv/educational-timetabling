<script>

    export default {
        data(){
            return{
                formData: {
                    name: '',
                    abbreviation: ''
                }
            };
        },

        methods: {
            HandleSubmit(e) {
                e.preventDefault();
                var data = JSON.stringify(this.formData)
                console.log(data)
                
                window.salvarArquivo(data)
            }
        }
    }

</script>

<template>
    <div class="registerClass-container">
        <form class="registerClass-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome da turma</label>
                <input required v-model="formData.name" type="text" class="form-control" aria-describedby="emailHelp"/>
                
            </div>
            <div class="mb-3">
                <label className="form-label">Abreviatura</label>
                <input required v-model="formData.abbreviation" type="text" class="form-control"/>
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

