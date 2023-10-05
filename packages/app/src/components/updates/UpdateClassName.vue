<script>
    import Swal from 'sweetalert2';

    export default {

    data() {
        return {
            classesInstance : [],
            name: '',
            data: {},
            isRegistered : false
        };
    },
    
    //pega dados passados pela url
    computed: {
        classID() {
            return this.$route.params.id;
        }
    },

    mounted(){

        //preenche input
        for(var i = 0; i < JSON.parse(window.searchFile()).classes.length; ++i){
            if(this.classID == JSON.parse(window.searchFile()).classes[i].id){
                this.name = JSON.parse(window.searchFile()).classes[i].name
            }
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
                this.isRegistered = window.updateClassName(JSON.stringify(this.data));

                if(this.isRegistered){
                    Swal.fire({
                    text: 'Nome de classe já cadastrado anteriormente!',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                })  
                }else{

                    this.$router.push('/Classes')

                    Swal.fire({
                    text: 'Classe atualizada com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                })
                }
                

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

