<script>

    import Swal from 'sweetalert2';

    export default{


        mounted(){
            const selectBtn2 = document.querySelector(".multiselect-rooms-btn");

            selectBtn2.addEventListener("click", ()=>{
                selectBtn2.classList.toggle("open")
            })

            this.options = JSON.parse(window.searchFile()).rooms
        },

        data() {
            return {
                subjectsInstance : [],
                options: [],
                chosenRooms : [],
                optionsChosenRooms: [],
                isRegistered : false
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

                    this.chosenRooms = []

                    //verifica id da disciplina
                    this.subjectsInstance = JSON.parse(window.searchFile()).classes[this.classID].subjects
                    
                    for(var i = 0; i < this.optionsChosenRooms.length; ++i){
                        if(this.optionsChosenRooms[i] == true){
                            this.chosenRooms.push(i)
                        }
                    }

                    var id;
                    console.log(this.subjectsInstance)
                    console.log(this.subjectsInstance.length)
                    if(this.subjectsInstance.length>0){
                        var id = this.subjectsInstance[parseInt(this.subjectsInstance.length)-1]['id']+1
                    }else{
                        console.log("é 0")
                        var id = 0
                    }


                    this.data = {
                        id: id,
                        name: this.name,
                        acronym: this.acronym,
                        events: parseInt(this.events),
                        divided: JSON.parse(this.divided),
                        subgroups: parseInt(this.subgroups),
                        rooms: this.chosenRooms,
                        teachers: []
                    }

                    console.log(this.data)
                    this.isRegistered = window.registerSubjects(JSON.stringify(this.data), this.classID.toString());

                    if(this.isRegistered){
                        Swal.fire({
                            text: 'Matéria já cadastrada anteriormente!',
                            icon: 'error',
                            confirmButtonText: 'Ok',
                        })
                    }
                    else{

                        this.$router.push('/Disciplinas')

                        Swal.fire({
                            text: 'Matéria cadastrada com sucesso!',
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

        <div class="registerClassSubject-title">
            Cadastro de Disciplina:
        </div>

        <hr>

        <form class="registerClass-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome da Matéria</label>
                <input required v-model="name" type="text" class="form-control" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
                <label class="form-label">Acrônimo</label>
                <input required v-model="acronym" type="text" class="form-control" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
                <label class="form-label">Eventos</label>
                <input pattern="[1-3]" required v-model="events" type="text" class="form-control" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
                <label class="form-label">Dividida</label>
                <select v-model="divided" required class="form-select">
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                </select>            
            </div>

            <div class="mb-3">
                <label class="form-label">Subgrupos</label>
                <input pattern="[1-3]" required v-model="subgroups" type="text" class="form-control" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
                <label class="form-label">Salas</label>
            </div>

            <div class="multiselect-container">
                <div class="multiselect-rooms-btn">
                    <span class="multiselect-btn-text">Selecione as Salas</span>
                    <img src="../../assets/down-arrow.png">

                </div>
            
                <ul class="multiselect-list-items">
                    <li class="multiselect-item" v-for="item in this.options" :key="item.id">
                        <input v-model = optionsChosenRooms[item.id] value={{item.id}} type="checkbox"/>
                        <span class="multiselect-item-text">{{item.name}}</span>
                    </li>
                </ul>
            </div>
            
            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
    </div>
</template>

<style>

    .registerClassSubject-title{
        padding-top: 20px;
        font-size: 20px;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
        display: flex;
        font-weight: bold;
    }

    .multiselect-rooms-btn>img{
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


    .multiselect-rooms-btn.open ~ .multiselect-list-items{
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


    .multiselect-rooms-btn .multiselect-btn-text{
        font-size: 17px;
        font-weight: 400;
        color: #333;
    }

    .multiselect-rooms-btn{
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
    .registerClass-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }
</style>

