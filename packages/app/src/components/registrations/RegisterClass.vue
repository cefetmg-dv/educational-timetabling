<script>
import Multiselect from 'vue-multiselect';


    export default {
    data() {
        return {
            classesInstance : [],
            data: {},
        };
    },
    components: { Multiselect },

    methods:{
            HandleSubmit(e){
                e.preventDefault()

                //verifica id
                classesInstance = JSON.parse(window.buscarArquivo()).classes

                this.data = {
                    id: this.classesInstance.length++,
                    name: this.name,
                    subjects: []
                }

                window.AtualizarListaDeMaterias(this.data)
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

