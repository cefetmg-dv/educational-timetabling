<script>
import Multiselect from 'vue-multiselect';


    export default {
    data() {
        return {
            formData: {
                name: '',
                abbreviation: ''
            }
        };
    },
    components: { Multiselect }
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
                <label class="typo_label">Disciplinas</label>
                <multiselect v-model="value" :options="options" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
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

