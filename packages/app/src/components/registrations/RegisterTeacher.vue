<script>
    import Multiselect from 'vue-multiselect'
    export default{

        components:{
            Multiselect
        },

        methods: {
            HandleSubmit(e){
                e.preventDefault()
            }
        },
        data(){
            return{
                options:[
                    { name: '07h00 - 08h40, Segunda-feira', code: '0' },
                    { name: '08h55 - 10h35, Segunda-feira', code: '1' },
                    { name: '10h50 - 12h30, Segunda-feira', code: '2' },
                    { name: '13h50 - 15h30, Segunda-feira', code: '3' },
                    { name: '15h50 - 17h30, Segunda-feira', code: '4' },
                    { name: '19h00 - 20h40, Segunda-feira', code: '5' },
                    { name: '20h55 - 22h35, Segunda-feira', code: '6' },

                    { name: '07h00 - 08h40, Terça-feira', code: '7' },
                    { name: '08h55 - 10h35, Terça-feira', code: '8' },
                    { name: '10h50 - 12h30, Terça-feira', code: '9' },
                    { name: '13h50 - 15h30, Terça-feira', code: '10' },
                    { name: '15h50 - 17h30, Quarta-feira', code: '11' },
                    { name: '19h00 - 20h40, Quinta-feira', code: '12' },
                    { name: '20h55 - 22h35, Sexta-feira', code: '13' },

                    { name: '07h00 - 08h40, Quarta-feira', code: '14' },
                    { name: '08h55 - 10h35, Quarta-feira', code: '15' },
                    { name: '10h50 - 12h30, Quarta-feira', code: '16' },
                    { name: '13h50 - 15h30, Quarta-feira', code: '17' },
                    { name: '15h50 - 17h30, Quarta-feira', code: '18' },
                    { name: '19h00 - 20h40, Quarta-feira', code: '19' },
                    { name: '20h55 - 22h35, Quarta-feira', code: '20' },

                    { name: '07h00 - 08h40, Quinta-feira', code: '21' },
                    { name: '08h55 - 10h35, Quinta-feira', code: '22' },
                    { name: '10h50 - 12h30, Quinta-feira', code: '23' },
                    { name: '13h50 - 15h30, Quinta-feira', code: '24' },
                    { name: '15h50 - 17h30, Quinta-feira', code: '25' },
                    { name: '19h00 - 20h40, Quinta-feira', code: '26' },
                    { name: '20h55 - 22h35, Quinta-feira', code: '27' },

                    { name: '07h00 - 08h40, Sexta-feira', code: '28' },
                    { name: '08h55 - 10h35, Sexta-feira', code: '29' },
                    { name: '10h50 - 12h30, Sexta-feira', code: '30' },
                    { name: '13h50 - 15h30, Sexta-feira', code: '31' },
                    { name: '15h50 - 17h30, Sexta-feira', code: '32' },
                    { name: '19h00 - 20h40, Sexta-feira', code: '33' },
                    { name: '20h55 - 22h35, Sexta-feira', code: '34' },

                    { name: '07h00 - 08h40, Sábado', code: '0' },
                    { name: '08h55 - 10h35, Sábado', code: '1' },
                    { name: '10h50 - 12h30, Sábado', code: '2' },
                    { name: '13h50 - 15h30, Sábado', code: '3' },
                    { name: '15h50 - 17h30, Sábado', code: '4' },
                    { name: '19h00 - 20h40, Sábado', code: '5' },
                    { name: '20h55 - 22h35, Sábado', code: '6' },
                ],               
            }
        }
    }
</script>

<template>

    <div class="registerTeacher-container">
        <form class="registerTeacher-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome completo</label>
                <input required v-model="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Preferências</label>
                <multiselect :options="options" :multiple="true"></multiselect>
            </div>
            <div class="mb-3">
                <label class="form-label">Indisponibilidades</label>
                <multiselect :options="options" :multiple="true"></multiselect>
            </div>



            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
    </div>

</template>

<style>
    .registerTeacher-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }
</style>