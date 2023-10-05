<script>

    import Swal from 'sweetalert2';

    export default{

        computed:{
            classID() {
                return this.$route.params.classID;
            },
            itemID(){
                return this.$route.params.itemID;
            }
        },

        mounted(){
            
            //define the length of events
            for(var i = 0; i < JSON.parse(window.searchFile()).classes.length; ++i){
                if(JSON.parse(window.searchFile()).classes[i].id == this.classID){
                    for(var j = 0; j < JSON.parse(window.searchFile()).classes[i].subjects.length; ++j){
                        if(JSON.parse(window.searchFile()).classes[i].subjects[j].id == this.itemID){
                            this.lengthEvents = JSON.parse(window.searchFile()).classes[i].subjects[j].events
                            //set inputs ids
                            console.log("id dos inputs")
                            for(var k = 0; k < JSON.parse(window.searchFile()).classes[i].subjects[j].teachers.length; ++k){
                                this.initialTeachersID.push(JSON.parse(window.searchFile()).classes[i].subjects[j].teachers[k])
                                console.log(this.initialTeachersID)
                            }
                        }
                    }
                }
            }
            for(var i = 0; i < JSON.parse(window.searchFile()).teachers.length; ++i){
                this.instanceTeachers.push(JSON.parse(window.searchFile()).teachers[i].name)
            }
            
            //set inputs

            for(var i = 0; i < this.initialTeachersID.length; ++i){
                for(var j = 0; j < JSON.parse(window.searchFile()).teachers.length; ++j){
                    if(JSON.parse(window.searchFile()).teachers[j].id == this.initialTeachersID[i]){
                        this.chosenTeachers[i] = JSON.parse(window.searchFile()).teachers[j].name
                    }
                }
            }
            /*
            for(var i = 0; i < JSON.parse(window.searchFile()).teachers.length; ++i){
                for(var j = 0; j < this.initialTeachersID.length; ++j){
                    if(JSON.parse(window.searchFile()).teachers[i].id == this.initialTeachersID[j]){
                        console.log("DEU")
                        console.log("O J" + j)
                        console.log(JSON.parse(window.searchFile()).teachers[j].name)
                        this.chosenTeachers[j] = JSON.parse(window.searchFile()).teachers[j].name
                    }
                }
                
            }*/

            console.log("CHOSEN TEACHERS" +this.chosenTeachers)

        },

        data(){
            return{
                lengthEvents : 0,
                chosenTeachers : [],
                instanceTeachers : [],
                initialTeachersID : []
            }
        },
    
        methods:{

            HandleSubmit(e){
                e.preventDefault()
                console.log(this.chosenTeachers)
                
                window.registerSubjectTeacher(Array.from(this.chosenTeachers), this.classID, this.itemID)
                Swal.fire({
                    text: 'Registro de professor em disciplinas feito com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                })
                this.$router.push('/Classes')
            }
        },

    }
</script>


<template>

    <div class="register-subject-teacher-header">Cadastro de Professor em Aulas</div><hr>
    <div class="register-subject-teacher-title">Você cadastrou {{ this.lengthEvents }} eventos (aulas)</div>

    <form class="register-subject-teacher-form" @submit="HandleSubmit">
        <div class="register-subject-teacher-for" v-for="i in lengthEvents">
            <div class="mb-3">
                    <label class="form-label">Categoria</label>
                    <select v-model="chosenTeachers[i-1]" required class="form-select" aria-label="Default select example">
                        <option v-for="item in this.instanceTeachers" :key="item.id">{{item}}</option>
                    </select>
                </div>
        </div>

        <button type="submit" class="btn btn-primary">Cadastrar</button>

    </form>
</template>


<style>

    .register-subject-teacher-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }

    .register-subject-teacher-title{
        display: flex;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        padding-top: 10px;
    }

    .register-subject-teacher-header{
        padding-top: 20px;
        font-size: 20px;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
        display: flex;
        font-weight: bold;
    }

</style>


