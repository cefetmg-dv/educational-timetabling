<script>


    import Swal from 'sweetalert2';

    export default {
    data() {
        return {
            classesInstance : [],
            data: {},
        };
    },

    methods:{
            HandleSubmit(e){
                e.preventDefault()

                //verifica id
                this.classesInstance = JSON.parse(window.searchFile()).classes

                this.data = {
                    id: this.classesInstance[parseInt(this.classesInstance.length)-1]['id']+1,
                    name: this.name,
                    subjects: []
                }

                console.log(this.data)
                window.registerClasses(JSON.stringify(this.data))

                Swal.fire({
                    text: 'Classe cadastrada com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                })

            }
        }
}

</script>

<template>
    <div class="registerClass-container">

        <div class="registerClass-title">
            Cadastro de Classe:
        </div>

        <hr>

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

    .registerClass-title{
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

