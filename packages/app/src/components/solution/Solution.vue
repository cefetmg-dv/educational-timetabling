<script>

   
    import Swal from 'sweetalert2';
    import  html2pdf  from 'html2pdf.js';


    export default {

        data(){
            return{
                solution: [],
                classLength: 0,
                className: [],
                classID: []
            };
        },
        mounted(){

            this.testeContent = 'sei la'
            this.solution = window.generateSolutionSA()
            if(this.solution == 'disciplineWithoutProfessor'){
                this.$router.push('/')
                Swal.fire({
                    text: 'Verifique se existem disciplinas sem professores associados antes de gerar!',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                })
            }else if(this.solution == 'disciplineWithoutRoom'){
                Swal.fire({
                    text: 'Verifique se existem disciplinas sem salas associadas antes de gerar!',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                })
            }else{
                this.solution = JSON.parse(this.solution)
            }
            
            this.classLength = JSON.parse(window.searchFile()).classes.length
            for(var i = 0; i < JSON.parse(window.searchFile()).classes.length; ++i){
                this.className.push(JSON.parse(window.searchFile()).classes[i].name)
                this.classID.push(JSON.parse(window.searchFile()).classes[i].id)
            }

            this.$nextTick(()=>{


                //são 41 posições pra cada classe
                //esse for maior representa a iteração pra uma classe
                for(var j = 1; j < this.classLength+1; ++j){
                    
                    var tds = []
                    //a cada vez que esse for é executado, a lista de <tds> é reinicializada com uma classe diferente
                    for(var i = 0 ; i <= 41; ++i){
                        tds[i] = document.getElementsByClassName(`${i}-${j}`)
                    }

                    //itero pelas aulas da solution
                    for(var k = 0; k < this.solution.length; ++k){
                        //para cada aula eu verifico todas as posições para aquela classe
                        for(var l = 0; l <= 41; ++l){
                            //se a posição for igual ao valor do timeslot
                            if(l == this.solution[k].timeslot){
                                
                                //procuro pelo events qual classe se trata
                                for(var m = 0; m < JSON.parse(window.searchFile()).events.length; ++m){
                                    if(JSON.parse(window.searchFile()).events[m].id == this.solution[k].event){
                                        
                                        //pego dados do evento atual
                                        var actualClass = JSON.parse(window.searchFile()).events[m].class
                                        var actualSubject = JSON.parse(window.searchFile()).events[m].subject
                                        console.log(actualSubject)

                                        //verifico se aquele evento é dessa classe
                                  
                                        if(actualClass == (j-1)){
                                            
                                            //sabendo qual evento, consigo colocar a cor de fundo
                                            for(var p = 0; p < tds[l].length; ++p){
                                                tds[l][p].style.backgroundColor = 'lightBlue'
                                            }

                                            //sabendo qual evento, consigo pegar os dados como professor
                                            for(var n = 0 ; n < JSON.parse(window.searchFile()).teachers.length; ++n){
                                                //pego id professor
                                                if(JSON.parse(window.searchFile()).teachers[n].id == JSON.parse(window.searchFile()).events[m].teacher){
                                                    //procuro nome de professor
                                                    for(var o = 0; o < JSON.parse(window.searchFile()).teachers.length; ++o){
                                                        if(JSON.parse(window.searchFile()).teachers[o].id == JSON.parse(window.searchFile()).teachers[n].id){
                                                            //insiro nome do professor no <td>
                                                            for(var p = 0; p < tds[l].length; ++p){
                                                                tds[l][p].innerText += JSON.parse(window.searchFile()).teachers[o].name
                                                                tds[l][p].innerHTML += "<br>"   
                                                            }

                                                        }
                                                    }
                                                }
                                            }
                                            
                                            
                                            //sabendo qual evento, consigo pegar os dados da matéria
                                            for(var n = 0; n < JSON.parse(window.searchFile()).classes.length; ++n){
                                                for(var o = 0; o < JSON.parse(window.searchFile()).classes[n].subjects.length; ++o){
                                                    if(JSON.parse(window.searchFile()).classes[n].id == actualClass){
                                                        if(JSON.parse(window.searchFile()).classes[n].subjects[o].id == actualSubject){
                                                            for(var p = 0; p < tds[l].length; ++p){
                                                                tds[l][p].innerText += JSON.parse(window.searchFile()).classes[n].subjects[o].name
                                                                tds[l][p].innerHTML += "<br>"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            
                                    
                                            //sabendo qual event, consigo pegar os dados da sala
                                            for(var n = 0; n < JSON.parse(window.searchFile()).rooms.length; ++n){
                                                if(JSON.parse(window.searchFile()).rooms[n].id == this.solution[k].room){
                                                    for(var p = 0; p < tds[l].length; ++p){
                                                        tds[l][p].innerText += JSON.parse(window.searchFile()).rooms[n].name
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                        
                }
                


                

            })
            

            
          
          
        },

        methods:{
            
            downloadAsPDF() {
                
                this.$nextTick(()=>{

                    const content = document.querySelector("#content")

                    const options = {
                        margin: [10,10,10,10],
                        filename: "newtime.pdf",
                        html2canvas: { scale: 2},
                        jsPDF: {unit:"mm", format: "a4", orientation: "portrait"}
                    };

                    html2pdf().set(options).from(content).save()
                })
                    
            }
        }
    };
        
    

</script>

<template>

    <div class = "solution-download-container">
        <button class = "solution-download" @click="downloadAsPDF">Baixar PDF</button>
    </div>

    <hr>
    
    <div id="content">
        <div  class="solution-container" v-for="i in this.classLength">
            <h1 class="solution-classTitle">{{className[i-1]}}</h1>
            <table border="1">
                <tr class="solution-tableHead">
                    <th class="solution-tableTime">HORÁRIO</th>
                    <th>SEG</th>
                    <th>TER</th>
                    <th>QUA</th>
                    <th>QUI</th>
                    <th>SEX</th>
                    <th>SÁB</th>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        7h00<br>
                        7h50
                    </td>
                    <td :class = "'0-'+i"></td>
                    <td :class = "'7-'+i"></td>
                    <td :class = "'14-'+i"></td>
                    <td :class = "'21-'+i"></td>
                    <td :class = "'28-'+i"></td>
                    <td :class = "'35-'+i"></td>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        7h50<br>
                        8h40
                    </td>
                    <td :class = "'0-'+i"></td>
                    <td :class = "'7-'+i"></td>
                    <td :class = "'14-'+i"></td>
                    <td :class = "'21-'+i"></td>
                    <td :class = "'28-'+i"></td>
                    <td :class = "'35-'+i"></td>
                </tr>
                <tr>
                    <td colspan="7" class="solution-tableBreak">Intervalo, 8h40 às 8h55 (15 min.)</td>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        8h55<br>
                        9h45
                    </td>
                    <td :class = "'1-'+i"></td>
                    <td :class = "'8-'+i"></td>
                    <td :class = "'15-'+i"></td>
                    <td :class = "'22-'+i"></td>
                    <td :class = "'29-'+i"></td>
                    <td :class = "'36-'+i"></td>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        9h45<br>
                        10h35
                    </td>
                    <td :class = "'1-'+i"></td>
                    <td :class = "'8-'+i"></td>
                    <td :class = "'15-'+i"></td>
                    <td :class = "'22-'+i"></td>
                    <td :class = "'29-'+i"></td>
                    <td :class = "'36-'+i"></td>
                </tr>
                <tr>
                    <td colspan="7" class="solution-tableBreak">Intervalo, 10h35 às 10h50 (15 min.)</td>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        10h50<br>
                        11h40
                    </td>
                    <td :class = "'2-'+i"></td>
                    <td :class = "'9-'+i"></td>
                    <td :class = "'16-'+i"></td>
                    <td :class = "'23-'+i"></td>
                    <td :class = "'30-'+i"></td>
                    <td :class = "'37-'+i"></td>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        11h40<br>
                        12h30
                    </td>
                    <td :class = "'2-'+i"></td>
                    <td :class = "'9-'+i"></td>
                    <td :class = "'16-'+i"></td>
                    <td :class = "'23-'+i"></td>
                    <td :class = "'30-'+i"></td>
                    <td :class = "'37-'+i"></td>
                </tr>
                <tr>
                    <td colspan="7" class="solution-tableEat">Almoço, 12h30 às 13h50 (1h e 20 min.)</td>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        13h50<br>
                        14h40
                    </td>
                    <td :class = "'3-'+i"></td>
                    <td :class = "'10-'+i"></td>
                    <td :class = "'17-'+i"></td>
                    <td :class = "'24-'+i"></td>
                    <td :class = "'31-'+i"></td>
                    <td :class = "'38-'+i"></td>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        14h40<br>
                        15h30
                    </td>
                    <td :class = "'3-'+i"></td>
                    <td :class = "'10-'+i"></td>
                    <td :class = "'17-'+i"></td>
                    <td :class = "'24-'+i"></td>
                    <td :class = "'31-'+i"></td>
                    <td :class = "'38-'+i"></td>
                </tr>
                <tr>
                    <td colspan="7" class="solution-tableBreak">Intervalo, 15h30 às 15h50 (20 min.)</td>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        15h50<br>
                        16h40
                    </td>
                    <td :class = "'4-'+i"></td>
                    <td :class = "'11-'+i"></td>
                    <td :class = "'18-'+i"></td>
                    <td :class = "'25-'+i"></td>
                    <td :class = "'32-'+i"></td>
                    <td :class = "'39-'+i"></td>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        16h40<br>
                        17h30
                    </td>
                    <td :class = "'4-'+i"></td>
                    <td :class = "'11-'+i"></td>
                    <td :class = "'18-'+i"></td>
                    <td :class = "'25-'+i"></td>
                    <td :class = "'32-'+i"></td>
                    <td :class = "'39-'+i"></td>
                </tr>
                <tr>
                    <td colspan="7" class="solution-tableEat">Jantar, 17h30 às 19h00 (1h e 30 min.)</td>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        19h00<br>
                        19h50
                    </td>
                    <td :class = "'5-'+i"></td>
                    <td :class = "'12-'+i"></td>
                    <td :class = "'19-'+i"></td>
                    <td :class = "'26-'+i"></td>
                    <td :class = "'33-'+i"></td>
                    <td :class = "'40-'+i"></td>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        19h50<br>
                        20h40
                    </td>
                    <td :class = "'5-'+i"></td>
                    <td :class = "'12-'+i"></td>
                    <td :class = "'19-'+i"></td>
                    <td :class = "'26-'+i"></td>
                    <td :class = "'33-'+i"></td>
                    <td :class = "'40-'+i"></td>
                </tr>
                <tr>
                    <td colspan="7" class="solution-tableBreak">Intervalo, 20h40 às 20h55 (15 min.)</td>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        20h55<br>
                        21h45
                    </td>
                    <td :class = "'6-'+i"></td>
                    <td :class = "'13-'+i"></td>
                    <td :class = "'20-'+i"></td>
                    <td :class = "'27-'+i"></td>
                    <td :class = "'34-'+i"></td>
                    <td :class = "'41-'+i"></td>
                </tr>
                <tr>
                    <td class="solution-tableTime">
                        21h45<br>
                        22h35
                    </td>
                    <td :class = "'6-'+i"></td>
                    <td :class = "'13-'+i"></td>
                    <td :class = "'20-'+i"></td>
                    <td :class = "'27-'+i"></td>
                    <td :class = "'34-'+i"></td>
                    <td :class = "'41-'+i"></td>
                </tr>
            </table>

            <hr>
        </div>
    </div>

</template>

<style>

    .solution-download-container{
        padding-top: 50px;
    }

    .solution-download{
        height: 60px;
        font-family: Poppins, sans-serif;
        width: 200px;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        border-color: #72BA75;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color:white;
        font-weight: 400;
        background-color: #72BA75;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .solution-download:hover{
        background-color: whitesmoke;
        color: black;
        transform: translateY(-2px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }

    .solution-tableEat{
        height: 10px;
        background-color: black;
        color: white;
    }

    .solution-tableBreak{
        height: 10px;
        background-color: lightgrey;
    }

    .solution-tableTime{
        width: 25px;
    }

    .solution-tableHead{
        height: 10px;
        background-color: grey;
        color: white;
        margin-top: 20px;
    }

    .solution-classTitle{
        display: flex;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
        font-size: 30px;
        
    }

    table {
        border-collapse: collapse; 
        width: 100%;
    }

    th, td {
        border: 1px solid black; 
        padding: 8px; 
        text-align: center; 
        font-size: 12px;
    }

    td {
        width: 100px;
        height: 80px;
     }




</style>