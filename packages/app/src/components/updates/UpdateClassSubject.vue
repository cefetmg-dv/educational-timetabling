<script>

    import Swal from 'sweetalert2';

    export default {

        //pega dados passados pela url
        computed: {
            classID() {
                return this.$route.params.classID;
            },
            itemID(){
                return this.$route.params.itemID;
            }
        },

        mounted(){
            const selectBtn2 = document.querySelector(".multiselect-rooms-btn")

            selectBtn2.addEventListener("click", ()=>{
                selectBtn2.classList.toggle("open")
            })

            const selectBtn = document.querySelector(".multiselect-subjects-btn")

            selectBtn.addEventListener("click", ()=>{
                selectBtn.classList.toggle("open")
            })

            this.options = JSON.parse(window.searchFile()).rooms
            this.options = JSON.parse(window.searchFile()).rooms
            for(var i = 0; i < JSON.parse(window.searchFile()).classes.length; ++i){
                if(JSON.parse(window.searchFile()).classes[i].id == this.classID){
                    this.subjects = JSON.parse(window.searchFile()).classes[i].subjects
                }
            }

            //preenche inputs
            for(var i = 0; i < JSON.parse(window.searchFile()).classes.length; ++i){
                if(this.classID == JSON.parse(window.searchFile()).classes[i].id){
                    console.log("entrou")
                    for(var j = 0; j < JSON.parse(window.searchFile()).classes[i].subjects.length; ++j){
                        if(this.itemID == JSON.parse(window.searchFile()).classes[i].subjects[j].id){
                            console.log("entrou2")
                            this.nameSubject = JSON.parse(window.searchFile()).classes[i].subjects[j].name;
                            this.acronym = JSON.parse(window.searchFile()).classes[i].subjects[j].acronym;
                            this.events = JSON.parse(window.searchFile()).classes[i].subjects[j].events;
                            this.subgroups = JSON.parse(window.searchFile()).classes[i].subjects[j].subgroups;
                            this.divided = JSON.parse(window.searchFile()).classes[i].subjects[j].divided;
                            for(var k = 0; k < JSON.parse(window.searchFile()).classes[i].subjects[j].rooms.length; ++k){
                                this.optionsChosenRooms[JSON.parse(window.searchFile()).classes[i].subjects[j].rooms[k]] = true
                            }
                            for(var k = 0; k < JSON.parse(window.searchFile()).classes[i].subjects[j].antiSubjects.length; ++k){
                                this.optionsChosenSubjects[JSON.parse(window.searchFile()).classes[i].subjects[j].antiSubjects[k]] = true
                            }
                        }
                    }
                }
            }
            console.log("teste")
            
        },

    
        data() {
            return {
                subjectsInstance : [],
                options: [],
                chosenRooms : [],
                optionsChosenRooms: [],
                subjects: [],
                chosenSubjects: [],
                optionsChosenSubjects: [],
                nameSubject: '',
                acronym: '',
                events: '',
                divided: '',
                subgroups: '',
                isRegistered : false
            };
        },
           

        methods:{
                HandleSubmit(e){
                    e.preventDefault()

                    for(var i = 0; i < this.optionsChosenRooms.length; ++i){
                        if(this.optionsChosenRooms[i] == true){
                            this.chosenRooms.push(i)
                        }
                    }

                    for(var i = 0; i < this.optionsChosenSubjects.length; ++i){
                        if(this.optionsChosenSubjects[i] == true){
                            this.chosenSubjects.push(i)
                        }
                    }

                    this.data = {
                        id: parseInt(this.itemID),
                        name: this.nameSubject,
                        acronym: this.acronym,
                        events: parseInt(this.events),
                        divided: this.divided,
                        subgroups: parseInt(this.subgroups),
                        rooms: this.chosenRooms,
                        antiSubjects: this.chosenSubjects,
                    }

                    console.log(this.data)
                    this.isRegistered = window.updateSubjects(JSON.stringify(this.data), this.classID.toString());

                    if(this.isRegistered){
                        Swal.fire({
                            text: 'Matéria já cadastrada anteriormente!',
                            icon: 'error',
                            confirmButtonText: 'Ok',
                        })

                        //preenche inputs
                        this.optionsChosenRooms = []
                        this.chosenRooms = []
                        this.chosenSubjects = []
                        this.optionsChosenSubjects = []
                        for(var i = 0; i < JSON.parse(window.searchFile()).classes.length; ++i){
                            if(this.classID == JSON.parse(window.searchFile()).classes[i].id){
                                for(var j = 0; j < JSON.parse(window.searchFile()).classes[i].subjects.length; ++j){
                                    if(this.itemID == JSON.parse(window.searchFile()).classes[i].subjects[j].id){
                                        for(var k = 0; k < JSON.parse(window.searchFile()).classes[i].subjects[j].rooms.length; ++k){
                                            this.optionsChosenRooms[JSON.parse(window.searchFile()).classes[i].subjects[j].rooms[k]] = true
                                        }
                                        for(var k = 0; k < JSON.parse(window.searchFile()).classes[i].subjects[j].antiSubjects.length; ++k){
                                            this.optionsChosenSubjects[JSON.parse(window.searchFile()).classes[i].subjects[j].antiSubjects[k]] = true
                                        }
                                    }
                                }
                            }
                        }
                    }else{

                        this.$router.push('/Classes')

                        Swal.fire({
                            text: 'Matéria atualizada com sucesso!',
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


        <div class="updateClassSubject-title">
            Atualização de Matéria de Classe:
        </div>

        <hr>

        <form class="registerClass-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome da Matéria</label>
                <input required v-model="nameSubject" type="text" class="form-control" aria-describedby="emailHelp"/>
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
                    <img src="../../assets/down-arrow.png"> 

                </div>
            
                <ul class="multiselect-list-items">
                    <li class="multiselect-item" v-for="item in this.options" :key="item.id">
                        <input v-model = optionsChosenRooms[item.id] value={{item.id}} type="checkbox"/>
                        <span class="multiselect-item-text">{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <br>

            <div class="mb-3">
                <label class="form-label">Prefiro que não seja no mesmo dia que</label>
            </div>

            <div class="multiselect-container">
                <div class="multiselect-subjects-btn">
                    <img src="../../assets/down-arrow.png">
                </div>

                <ul class="multiselect-list-items">
                    <li class="multiselect-item" v-for="item in this.subjects" :key="item.id">
                        <input v-model = optionsChosenSubjects[item.id] value={{item.id}} type="checkbox"/>
                        <span class="multiselect-item-text">{{item.name}}</span>
                    </li>
                </ul>
            </div>

            <br>

            
            <button type="submit" class="btn btn-primary">Atualizar</button>
            <br>
        </form>
    </div>
</template>

<style>

    .updateClassSubject-title{
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
        margin-left: auto; 
    }

    .multiselect-subjects-btn>img{
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


    .multiselect-rooms-btn.open ~ .multiselect-list-items{
        display: block;
    }

    .multiselect-subjects-btn.open ~ .multiselect-list-items{
        display: block;
    }

    .multiselect-subjects-btn{
        width: 100%;
        display: flex;
        height: 40px;
        align-items: center;
        padding: 0 16px;
        border-radius: 8px;
        cursor: pointer;
        border: 1.4px solid #dfe3e7;
    }

    .multiselect-subjects-btn .multiselect-btn-text{
        font-size: 17px;
        font-weight: 400;
        color: #333;
    }


    .multiselect-rooms-btn.open ~ .multiselect-list-items{
        display: block;
    }

    .multiselect-list-items .multiselect-item{
        list-style: none;
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
        border: 1.4px solid #dfe3e7;
    
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

