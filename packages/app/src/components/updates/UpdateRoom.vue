<script>


    export default{

      

        data(){
            return{
                instanceRoomsCategories : [],
                instanceRooms : [],
                dados : {},
                optionsChosenIndisponibilities: [],
                options:[],     
                indisponibilities: [],     
            }
        },

        //pega dados passados pela url
        computed: {
            roomID() {
                return this.$route.params.id;
            }
        },

        
        mounted(){
            this.instanceRoomsCategories = JSON.parse(window.searchFile()).rooms_category
            console.log(this.instanceRoomsCategories)

            const selectBtn2 = document.querySelector(".multiselect-indisponibilities-btn");

            selectBtn2.addEventListener("click", ()=>{
                selectBtn2.classList.toggle("open")
            })

            this.options = JSON.parse(window.searchFile()).timeslots
            console.log(this.options)
        },
        

        methods: {
            HandleSubmit(e){
                e.preventDefault()

                for(var i = 0; i < this.optionsChosenIndisponibilities.length; ++i){
                    if(this.optionsChosenIndisponibilities[i] == true){
                        this.indisponibilities.push(i)
                    }
                }

                this.dados = {
                    id: this.roomID,
                    name: this.number,
                    category: this.category,
                    unavailability: this.indisponibilities
                }
                console.log(this.dados)
                window.updateRoom(JSON.stringify(this.dados))
            },
            
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
                <label class="typo_label">Indisponibilidades</label>
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

            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
        
    </div>

</template>


<style>

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


    .multiselect-indisponibilities-btn .multiselect-btn-text{
        font-size: 17px;
        font-weight: 400;
        color: #333;
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
    .registerRoom-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }
</style>