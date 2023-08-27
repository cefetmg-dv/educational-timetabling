<script>

    import Multiselect from 'vue-multiselect'
    //import 'vue-multiselect/dist/vue-multiselect.min.css'

    export default{

        build: {
            rollupOptions: {
                external: ['vue-multiselect/dist/vue-multiselect.min.css'],
            },
        },

        components:{
            Multiselect
        },

        data(){
            return{
                instanceRoomsCategories : [],
                instanceRooms : [],
                dados : {},
                optionValue : 0,
                value: [
                    { name: '07h00 - 08h40, Segunda-feira', code: '0' }
                ],
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

                    { name: '07h00 - 08h40, Sábado', code: '35' },
                    { name: '08h55 - 10h35, Sábado', code: '36' },
                    { name: '10h50 - 12h30, Sábado', code: '37' },
                    { name: '13h50 - 15h30, Sábado', code: '38' },
                    { name: '15h50 - 17h30, Sábado', code: '39' },
                    { name: '19h00 - 20h40, Sábado', code: '40' },
                    { name: '20h55 - 22h35, Sábado', code: '41' },
                ],          
            }
        },

        mounted(){
            this.instanceRoomsCategories = JSON.parse(window.buscarArquivo()).rooms_category
            console.log(this.instanceRoomsCategories)
        },

        methods: {
            HandleSubmit(e){

                //verifica qual o id atual
                this.instanceRooms = JSON.parse(window.buscarArquivo()).rooms
                
                e.preventDefault()
                this.dados = {
                    id: this.instanceRooms.length++,
                    name: this.number,
                    category: this.category,
                    unavaibility: []
                }
                console.log(this.dados)
                atualizarListaDeSalas(JSON.stringify(this.dados))
            },
            addTag (newTag) {
                const tag = {
                    name: newTag,
                    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                }
                this.options.push(tag)
                this.value.push(tag)
            }
        }
    }

</script>



<template>
    <div class="registerRoom-container">
        <form class="registerRoom-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Número da Sala</label>
                <input required v-model="number" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div class="mb-3">
                <label class="form-label">Categoria</label>
                <select v-model="category" required class="form-select" aria-label="Default select example">
                    <option v-for="item in this.instanceRoomsCategories" :key="item.id">{{item}}</option>
                </select>
            </div>

            <div class="mb-3">
                <label class="typo__label">Indisponibilidades</label>
                <multiselect v-model="value" :options="options" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            </div>

            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
        
    </div>

</template>


<style>
    .registerRoom-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }
</style>