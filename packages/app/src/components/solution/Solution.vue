<script>

    import Swal from 'sweetalert2';

    export default {

        data(){
            return{
                solution: [],
                classLength: 0,
                className: [],
            };
        },
        mounted(){

            this.testeContent = 'sei la'
            this.solution = window.generateSolution()
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
            console.log("quantidade de classes: " + this.classLength)
            for(var i = 0; i < JSON.parse(window.searchFile()).classes.length; ++i){
                this.className.push(JSON.parse(window.searchFile()).classes[i].name)
            }

            this.$nextTick(()=>{
                var elements = document.getElementsByClassName('0-1')
                for(var i = 0; i < elements.length; ++i){
                    elements[i].innerText = "PASKDJKOASDKJSAD"
                }
            })
            

            
          
          
        },

        methods:{
            
        }
    }

</script>

<template>


    <div class="solution-container" v-for="i in this.classLength">
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
                <td id = '7'></td>
                <td id = '14'></td>
                <td id = '21'></td>
                <td id = '28'></td>
                <td id = '35'></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    7h50<br>
                    8h40
                </td>
                <td :class = "'0-'+i"></td>
                <td id = '7'></td>
                <td id = '14'></td>
                <td id = '21'></td>
                <td id = '28'></td>
                <td id = '35'></td>
            </tr>
            <tr>
                <td colspan="7" class="solution-tableBreak">Intervalo, 8h40 às 8h55 (15 min.)</td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    8h55<br>
                    9h45
                </td>
                <td id = '1'></td>
                <td id = '8'></td>
                <td id = '15'></td>
                <td id = '22'></td>
                <td id = '29'></td>
                <td id = '36'></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    9h45<br>
                    10h35
                </td>
                <td id = '1'></td>
                <td id = '8'></td>
                <td id = '15'></td>
                <td id = '22'></td>
                <td id = '29'></td>
                <td id = '36'></td>
            </tr>
            <tr>
                <td colspan="7" class="solution-tableBreak">Intervalo, 10h35 às 10h50 (15 min.)</td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    10h50<br>
                    11h40
                </td>
                <td id = '2'></td>
                <td id = '9'></td>
                <td id = '16'></td>
                <td id = '23'></td>
                <td id = '30'></td>
                <td id = '37'></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    11h40<br>
                    12h30
                </td>
                <td id = '2'></td>
                <td id = '9'></td>
                <td id = '16'></td>
                <td id = '23'></td>
                <td id = '30'></td>
                <td id = '37'></td>
            </tr>
            <tr>
                <td colspan="7" class="solution-tableEat">Almoço, 12h30 às 13h50 (1h e 20 min.)</td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    13h50<br>
                    14h40
                </td>
                <td id = '3'></td>
                <td id = '10'></td>
                <td id = '17'></td>
                <td id = '24'></td>
                <td id = '31'></td>
                <td id = '38'></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    14h40<br>
                    15h30
                </td>
                <td id = '3'></td>
                <td id = '10'></td>
                <td id = '17'></td>
                <td id = '24'></td>
                <td id = '31'></td>
                <td id = '38'></td>
            </tr>
            <tr>
                <td colspan="7" class="solution-tableBreak">Intervalo, 15h30 às 15h50 (20 min.)</td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    15h50<br>
                    16h40
                </td>
                <td id = '4'></td>
                <td id = '11'></td>
                <td id = '18'></td>
                <td id = '25'></td>
                <td id = '32'></td>
                <td id = '39'></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    16h40<br>
                    17h30
                </td>
                <td id = '4'></td>
                <td id = '11'></td>
                <td id = '18'></td>
                <td id = '25'></td>
                <td id = '32'></td>
                <td id = '39'></td>
            </tr>
            <tr>
                <td colspan="7" class="solution-tableEat">Jantar, 17h30 às 19h00 (1h e 30 min.)</td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    19h00<br>
                    19h50
                </td>
                <td id = '5'></td>
                <td id = '12'></td>
                <td id = '19'></td>
                <td id = '26'></td>
                <td id = '33'></td>
                <td id = '40'></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    19h50<br>
                    20h40
                </td>
                <td id = '5'></td>
                <td id = '12'></td>
                <td id = '19'></td>
                <td id = '26'></td>
                <td id = '33'></td>
                <td id = '40'></td>
            </tr>
            <tr>
                <td colspan="7" class="solution-tableBreak">Intervalo, 20h40 às 20h55 (15 min.)</td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    20h55<br>
                    21h45
                </td>
                <td id = '6'></td>
                <td id = '13'></td>
                <td id = '20'></td>
                <td id = '27'></td>
                <td id = '34'></td>
                <td id = '41'></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    21h45<br>
                    22h35
                </td>
                <td id = '6'></td>
                <td id = '13'></td>
                <td id = '20'></td>
                <td id = '27'></td>
                <td id = '34'></td>
                <td id = '41'></td>
            </tr>
        </table>

        <hr>
    </div>

</template>

<style>

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
    }

    .solution-classTitle{
        display: flex;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
    }

    table {
        border-collapse: collapse; 
        width: 100%;
    }

    th, td {
        border: 1px solid black; 
        padding: 8px; 
        text-align: center; 
    }


</style>