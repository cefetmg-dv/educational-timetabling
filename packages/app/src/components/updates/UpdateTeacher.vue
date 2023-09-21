<script>

    import Swal from 'sweetalert2';

    export default{

        computed:{
            idTeacher(){
                return this.$route.params.id;
            }
        },

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

                this.data = {
                    id : this.idTeacher,
                    name : this.name,
                    unavailability : this.indisponibilities,
                    preferences: this.preferences
                }

                window.updateTeacher(JSON.stringify(this.data))

                Swal.fire({
                    text: 'Professor(a) atualizado(a) com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                })      
            }
        },
        data(){
            return{
                options:[],
                optionsChosenPreferences: [],
                preferences: [],
                optionsChosenIndisponibilities: [],               
                indisponibilities: []              
            }
        }
    }
</script>

<template>

    <div class="registerTeacher-container">


        <div class="registerTimeslot-title">
            Atualização de Professor:
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
                    <span class="multiselect-btn-text">Selecione as preferências</span>
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


            <div class="mb-3">
                <label class="form-label">Indisponibilidades</label>
            </div>

            <div class="multiselect-container">
                <div class="multiselect-indisponibilities-btn">
                    <span class="multiselect-btn-text">Selecione as Indisponibilidades</span>
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



            <button type="submit" class="btn btn-primary">Atualizar</button>
        </form>
    </div>

</template>

<style>

    .updateTeacher-title{
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
    }

    .multiselect-indisponibilities-btn>img{
        width: 20px;
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
        border: 1.5px solid #DCDCDC;
    
    }

    .multiselect-indisponibilities-btn{
        width: 100%;
        display: flex;
        height: 40px;
        align-items: center;
        padding: 0 16px;
        border-radius: 8px;
        cursor: pointer;
        border: 1.5px solid #DCDCDC;
    
    }

    .multiselect-container{
        position: relative;
        widows: 100%;
        background-color: #fff;
        
        border-radius: 8px;
    }
    .registerTeacher-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }
</style>