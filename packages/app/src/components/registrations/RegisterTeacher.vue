<script>
 
    import Swal from 'sweetalert2';

    export default{


        mounted(){
            const selectBtn = document.querySelector(".multiselect-preferences-btn");

            selectBtn.addEventListener("click", ()=>{
                selectBtn.classList.toggle("open")
            })

            const selectBtn2 = document.querySelector(".multiselect-indisponibilities-btn");

            selectBtn2.addEventListener("click", ()=>{
                selectBtn2.classList.toggle("open")
            })

            this.options = JSON.parse(window.searchFile()).timeslots
    
        },

        methods: {

            HandleSubmit(e){
                e.preventDefault()

                console.log(this.optionsChosenPreferences)
                console.log(this.optionsChosenIndisponibilities)
                for(var i = 0; i < this.optionsChosenPreferences.length; ++i){
                    if(this.optionsChosenPreferences[i] == true){
                        this.preferences.push(i)
                    }
                }

                for(var i = 0; i < this.optionsChosenIndisponibilities.length; ++i){
                    if(this.optionsChosenIndisponibilities[i] == true){
                        this.indisponibilities.push(i)
                    }
                }

                console.log(this.preferences)

                //verifica qual o id atual
                this.instanceTeachers = JSON.parse(window.searchFile()).teachers

                var id;
                if(this.subjectsInstance.length>0){
                    var id = this.subjectsInstance[parseInt(this.instanceTeachers.length)-1]['id']+1
                }else{
                    var id = 0
                }
               
                
                this.dados = {
                    id : id,
                    name : this.name,
                    unavailability : this.indisponibilities,
                    preferences: this.preferences
                }

                this.isRegistered = window.registerTeachers(JSON.stringify(this.dados))

                if(this.isRegistered){
                    Swal.fire({
                        text: 'Nome de professor(a) já cadastrado(a) anteriormente!',
                        icon: 'error',
                        confirmButtonText: 'Ok',
                    }) 
                }else{

                    this.$router.push('/Professores')
                    Swal.fire({
                        text: 'Professor(a) cadastrado(a) com sucesso!',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    })
                }
                
            },

        },
        data(){
            return{
                value: null,
                instanceTeachers : [],
                options:[],
                optionsChosenPreferences: [],
                preferences: [],
                optionsChosenIndisponibilities: [],               
                indisponibilities: [],
                isRegistered : false
            }
        }
    }
</script>

<template>
    <div class="registerTeacher-container">

        <div class="registerTeacher-title">
            Cadastro de Professor:
        </div>
        <hr>
        
        <form class="registerTeacher-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome completo</label>
                <input required v-model="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Preferências</label>
            </div>

            <div class="multiselect-container">
                <div class="multiselect-preferences-btn">
                    
                    <img src="../../assets/down-arrow.png">

                </div>
            
                <ul class="multiselect-list-items">
                    <li class="multiselect-item" v-for="item in this.options" :key="item.id">
                        <input v-model=optionsChosenPreferences[item.id] value={{item.id}} type="checkbox"/>
                        <span class="multiselect-item-text">{{item.description}}</span>
                        <p v-if="item.day == 1">Segunda-feira</p>
                        <p v-if="item.day == 2">Terça-feira</p>
                        <p v-if="item.day == 3">Quarta-feira</p>
                        <p v-if="item.day == 4">Quinta-feira</p>
                        <p v-if="item.day == 5">Sexta-feira</p>
                        <p v-if="item.day == 6">Sábado</p>
                    </li>
                </ul>
            </div>
            <br>
            
            <div class="mb-3">
                <label class="form-label">Indisponibilidades</label>
                
            </div>

            <div class="multiselect-container">
                <div class="multiselect-indisponibilities-btn">
                    
                    <img src="../../assets/down-arrow.png">

                </div>
            
                <ul class="multiselect-list-items">
                    <li class="multiselect-item" v-for="item in this.options" :key="item.id">
                        <input v-model = optionsChosenIndisponibilities[item.id] value={{item.id}} type="checkbox"/>
                        <span class="multiselect-item-text">{{item.description}}</span>
                        <p v-if="item.day == 1">Segunda-feira</p>
                        <p v-if="item.day == 2">Terça-feira</p>
                        <p v-if="item.day == 3">Quarta-feira</p>
                        <p v-if="item.day == 4">Quinta-feira</p>
                        <p v-if="item.day == 5">Sexta-feira</p>
                        <p v-if="item.day == 6">Sábado</p>
                    </li>
                </ul>
            </div>
            <br>

            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
    </div>
</template>



<style>

    .registerTeacher-title{
        padding-top: 20px;
        font-size: 20px;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
        display: flex;
        font-weight: bold;
       
    }

    .multiselect-preferences-btn>img{
        width: 20px;
        margin-left: auto;
    }

    .multiselect-indisponibilities-btn>img{
        width: 20px;
        margin-left: auto; 
    }

    .multiselect-list-items{
        position: relative;
        background-color: #fff;
        margin-top: 15px;
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        display: none;
        text-align: left;
    }

    .multiselect-preferences-btn.open ~ .multiselect-list-items{
        display: block;
    }

    .multiselect-indisponibilities-btn.open ~ .multiselect-list-items{
        display: block;
    }

    .multiselect-list-items .multiselect-item{
        list-style: none;
    }

    .multiselect-item .multiselect-item-text{
        font-size: 16px;
        font-weight: 400;
        color: #333;
    }

    .multiselect-item .checkbox{
        height: 16px;
        widows: 16px;
        border: 1.5px solid #c0c0c0;
        border-radius: 4px;   
        margin-right: 12px;
        display: flex;
        align-items: center;
    }

    .multiselect-item-text{
        margin-left: 10px;
    }

    .multiselect-preferences-btn .multiselect-btn-text{
        font-size: 17px;
        font-weight: 400;
        color: #333;
    }

    .multiselect-indisponibilities-btn .multiselect-btn-text{
        font-size: 17px;
        font-weight: 400;
        color: #333;
    }

    .multiselect-preferences-btn{
        width: 100%;
        display: flex;
        height: 40px;
        align-items: center;
        padding: 0 16px;
        border-radius: 8px;
        cursor: pointer;
        border: 1.4px solid #dfe3e7;
    
    }

    .multiselect-indisponibilities-btn{
        width: 100%;
        display: flex;
        height: 40px;
        align-items: center;
        padding: 0 16px;
        border-radius: 8px;
        cursor: pointer;
        border: 1.4px solid #dfe3e7;
    
    }

    .multiselect-container{
        position: relative;
        widows: 100%;
        background-color: #fff;
        border-radius: 8px;
        margin-top: -20px
    }

    .registerTeacher-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }
</style>

