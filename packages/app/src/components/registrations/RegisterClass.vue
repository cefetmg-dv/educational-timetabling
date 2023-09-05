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
                this.classesInstance = JSON.parse(window.searchFile()).classes

                this.data = {
                    id: this.classesInstance.length++,
                    name: this.name,
                    subjects: []
                }

                console.log(this.data)
                window.registerClasses(JSON.stringify(this.data));

            }
        }
}

</script>

<template>
    <div class="registerClass-container">
        <form class="registerClass-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome da classe</label>
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

