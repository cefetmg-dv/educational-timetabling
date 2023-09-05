<script>
import Multiselect from 'vue-multiselect';


    export default {

    components: { Multiselect },

    data() {
        return {
            subjectsInstance : [],
        };
    },
    

    //pega dados passados pela url
    computed: {
        classID() {
            return this.$route.params.id;
        }
    },

    methods:{
            HandleSubmit(e){
                e.preventDefault()

                //verifica id da disciplina
                this.subjectsInstance = JSON.parse(window.searchFile()).classes[classID].subjects
                
                this.data = {
                    id: this.subjectsInstance.length++,
                    name: this.name,
                    acronym: this.acronym,
                    events: this.events,
                    divided: this.divided,
                    subgroups: this.subgroups,
                    rooms: []   //aqui vai multiselect
                }

                console.log(this.data)
                window.updateClassSubjects(JSON.stringify(this.data), this.ClassID.toString());

            }
        }
}

</script>

<template>
    <div class="registerClass-container">
        <form class="registerClass-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome da Matéria</label>
                <input required v-model="name" type="text" class="form-control" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
                <label class="form-label">Acrônimo</label>
                <input required v-model="acronym" type="text" class="form-control" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
                <label class="form-label">Eventos</label>
                <input required v-model="events" type="text" class="form-control" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
                <label class="form-label">Dividida</label>
                <select v-model="divided" required class="form-select">
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                </select>            
            </div>

            <div class="mb-3">
                <label class="form-label">Subgrupos</label>
                <input required v-model="subgroups" type="text" class="form-control" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
                <label class="form-label">Salas</label>
                <input required v-model="rooms" type="text" class="form-control" aria-describedby="emailHelp"/>
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

