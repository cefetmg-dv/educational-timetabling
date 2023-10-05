<script>

    export default {
        mounted(){
            window.generateSolution();
        }
    }

</script>

<template>

    <div class="solution-container">

        <h1 class="solution-classTitle">Nome Classe</h1>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    7h50<br>
                    8h40
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="7" class="solution-tableBreak">Intervalo, 8h40 às 8h55 (15 min.)</td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    8h55<br>
                    9h45
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    9h45<br>
                    10h35
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="7" class="solution-tableBreak">Intervalo, 10h35 às 10h50 (15 min.)</td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    10h50<br>
                    11h40
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    11h40<br>
                    12h30
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="7" class="solution-tableEat">Almoço, 12h30 às 13h50 (1h e 20 min.)</td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    13h50<br>
                    14h40
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    14h40<br>
                    15h30
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="7" class="solution-tableBreak">Intervalo, 15h30 às 15h50 (20 min.)</td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    15h50<br>
                    16h40
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    16h40<br>
                    17h30
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="7" class="solution-tableEat">Jantar, 17h30 às 19h00 (1h e 30 min.)</td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    19h00<br>
                    19h50
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    19h50<br>
                    20h40
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="7" class="solution-tableBreak">Intervalo, 20h40 às 20h55 (15 min.)</td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    20h55<br>
                    21h45
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="solution-tableTime">
                    21h45<br>
                    22h35
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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