<script>
    import Swal from 'sweetalert2';

    export default {

    data() {
        return {
            classesInstance : [],
            data: {},
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

                this.data = {
                    id: this.classID,
                    name: this.name,
                }

                console.log(this.data)
                window.updateClassName(JSON.stringify(this.data));

                Swal.fire({
                    text: 'Classe atualizada com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                })

            }
        }
}

</script>

<template>
    <div class="registerClass-container">


        <div class="updateClass-title">
            Atualização de Classe:
        </div>

        <hr>

        <form class="registerClass-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome da classe</label>
                <input required v-model="name" type="text" class="form-control" aria-describedby="emailHelp"/>
            </div>

            <button type="submit" class="btn btn-primary">Atualizar</button>
        </form>
    </div>
</template>

<style>



    .updateClass-title{
        padding-top: 20px;
        font-size: 20px;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
        display: flex;
        font-weight: bold;
    }

    .registerClass-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }
</style>

