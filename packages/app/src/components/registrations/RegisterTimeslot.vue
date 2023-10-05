<script>

    import Swal from 'sweetalert2';

    export default{

        data(){
            return{
                data: {},
                idTime: '',
                descriptionTime: '',
                isIdUsed: false,
                error: false,
            }
        },

        methods: {
            HandleSubmit(e){
                e.preventDefault()

                console.log(this.day)
                console.log(this.slot)
                console.log(this.shift)

                //busca instancia de grade
                this.instanceGrids = JSON.parse(window.searchFile()).timeslots

                //lógica para definir id (já que os horários são pré-definidos)
                //shift = turno, slot = espaço do turno
                if(this.day == 1 && this.slot == 0 && this.shift == 0){
                    this.idTime = 0
                    this.descriptionTime = "07h00 - 08h40"
                }else if(this.day == 1 && this.slot == 1 && this.shift == 0){
                    this.idTime = 1
                    this.descriptionTime = "8h55 - 10h35"
                }else if(this.day == 1 && this.slot == 2 && this.shift == 0){
                    this.idTime = 2
                    this.descriptionTime = "10h50 - 12h30"
                }else if(this.day == 1 && this.slot == 0 && this.shift == 1){
                    this.idTime = 3
                    this.descriptionTime = "13h50 - 15h30"
                }else if(this.day == 1 && this.slot == 1 && this.shift == 1){
                    this.idTime = 4
                    this.descriptionTime = "15h50 - 17h30"
                }else if(this.day == 1 && this.slot == 0 && this.shift == 2){
                    this.idTime = 5
                    this.descriptionTime = "19h00 - 20h40"
                }else if(this.day == 1 && this.slot == 1 && this.shift == 2){
                    this.idTime = 6
                    this.descriptionTime = "20h55 - 22h40"
                }
                
                
                else if(this.day == 2 && this.slot == 0 && this.shift == 0){
                    this.idTime = 7
                    this.descriptionTime = "07h00 - 08h40"
                }else if(this.day == 2 && this.slot == 1 && this.shift == 0){
                    this.idTime = 8
                    this.descriptionTime = "8h55 - 10h35"
                }else if(this.day == 2 && this.slot == 2 && this.shift == 0){
                    this.idTime = 9
                    this.descriptionTime = "10h50 - 12h30"
                }else if(this.day == 2 && this.slot == 0 && this.shift == 1){
                    this.idTime = 10
                    this.descriptionTime = "13h50 - 15h30"
                }else if(this.day == 2 && this.slot == 1 && this.shift == 1){
                    this.idTime = 11
                    this.descriptionTime = "15h50 - 17h30"
                }else if(this.day == 2 && this.slot == 0 && this.shift == 2){
                    this.idTime = 12
                    this.descriptionTime = "19h00 - 20h40"
                }else if(this.day == 2 && this.slot == 1 && this.shift == 2){
                    this.idTime = 13
                    this.descriptionTime = "20h55 - 22h40"
                }

                
                else if(this.day == 3 && this.slot == 0 && this.shift == 0){
                    this.idTime = 14
                    this.descriptionTime = "07h00 - 08h40"
                }else if(this.day == 3 && this.slot == 1 && this.shift == 0){
                    this.idTime = 15
                    this.descriptionTime = "8h55 - 10h35"
                }else if(this.day == 3 && this.slot == 2 && this.shift == 0){
                    this.idTime = 16
                    this.descriptionTime = "10h50 - 12h30"
                }else if(this.day == 3 && this.slot == 0 && this.shift == 1){
                    this.idTime = 17
                    this.descriptionTime = "13h50 - 15h30"
                }else if(this.day == 3 && this.slot == 1 && this.shift == 1){
                    this.idTime = 18
                    this.descriptionTime = "15h50 - 17h30"
                }else if(this.day == 3 && this.slot == 0 && this.shift == 2){
                    this.idTime = 19
                    this.descriptionTime = "19h00 - 20h40"
                }else if(this.day == 3 && this.slot == 1 && this.shift == 2){
                    this.idTime = 20
                    this.descriptionTime = "20h55 - 22h40"
                }

                
                else if(this.day == 4 && this.slot == 0 && this.shift == 0){
                    this.idTime = 21
                    this.descriptionTime = "07h00 - 08h40"
                }else if(this.day == 4 && this.slot == 1 && this.shift == 0){
                    this.idTime = 22
                    this.descriptionTime = "8h55 - 10h35"
                }else if(this.day == 4 && this.slot == 2 && this.shift == 0){
                    this.idTime = 23
                    this.descriptionTime = "10h50 - 12h30"
                }else if(this.day == 4 && this.slot == 0 && this.shift == 1){
                    this.idTime = 24
                    this.descriptionTime = "13h50 - 15h30"
                }else if(this.day == 4 && this.slot == 1 && this.shift == 1){
                    this.idTime = 25
                    this.descriptionTime = "15h50 - 17h30"
                }else if(this.day == 4 && this.slot == 0 && this.shift == 2){
                    this.idTime = 26
                    this.descriptionTime = "19h00 - 20h40"
                }else if(this.day == 4 && this.slot == 1 && this.shift == 2){
                    this.idTime = 27
                    this.descriptionTime = "20h55 - 22h40"
                }

                
                else if(this.day == 5 && this.slot == 0 && this.shift == 0){
                    this.idTime = 28
                    this.descriptionTime = "07h00 - 08h40"
                }else if(this.day == 5 && this.slot == 1 && this.shift == 0){
                    this.idTime = 29
                    this.descriptionTime = "8h55 - 10h35"
                }else if(this.day == 5 && this.slot == 2 && this.shift == 0){
                    this.idTime = 30
                    this.descriptionTime = "10h50 - 12h30"
                }else if(this.day == 5 && this.slot == 0 && this.shift == 1){
                    this.idTime = 31
                    this.descriptionTime = "13h50 - 15h30"
                }else if(this.day == 5 && this.slot == 1 && this.shift == 1){
                    this.idTime = 32
                    this.descriptionTime = "15h50 - 17h30"
                }else if(this.day == 5 && this.slot == 0 && this.shift == 2){
                    this.idTime = 33
                    this.descriptionTime = "19h00 - 20h40"
                }else if(this.day == 5 && this.slot == 1 && this.shift == 2){
                    this.idTime = 34
                    this.descriptionTime = "20h55 - 22h40"
                }

                
                else if(this.day == 6 && this.slot == 0 && this.shift == 0){
                    this.idTime = 35
                    this.descriptionTime = "07h00 - 08h40"
                }else if(this.day == 6 && this.slot == 1 && this.shift == 0){
                    this.idTime = 36
                    this.descriptionTime = "8h55 - 10h35"
                }else if(this.day == 6 && this.slot == 2 && this.shift == 0){
                    this.idTime = 37
                    this.descriptionTime = "10h50 - 12h30"
                }else if(this.day == 6 && this.slot == 0 && this.shift == 1){
                    this.idTime = 38
                    this.descriptionTime = "13h50 - 15h30"
                }else if(this.day == 6 && this.slot == 1 && this.shift == 1){
                    this.idTime = 39
                    this.descriptionTime = "15h50 - 17h30"
                }else if(this.day == 6 && this.slot == 0 && this.shift == 2){
                    this.idTime = 40
                    this.descriptionTime = "19h00 - 20h40"
                }else if(this.day == 6 && this.slot == 1 && this.shift == 2){
                    this.idTime = 41
                    this.descriptionTime = "20h55 - 22h40"
                
                }
                //verifica se horário é válido
                else{
                    this.error = true;
                    console.log("inválido")
                    Swal.fire({
                        text: 'Intervalo inválido!',
                        icon: 'error',
                        confirmButtonText: 'Ok',
                    })
                    return
                }

                //verifica se id já está cadastrado
                for(var item in this.instanceGrids){
                    console.log(item)
                    if(this.instanceGrids[item].id   == this.idTime){
                        this.isIdUsed = true
                        //mostra alert
                        Swal.fire({
                            text: 'Intervalo já cadastrado anteriormente',
                            icon: 'error',
                            confirmButtonText: 'Ok',
                        })
                        console.log("já cadastrado")
                        return
                    }
                }

                this.data = {
                    id: this.idTime,
                    day: this.day,
                    shift: this.shift,
                    slot: this.slot,
                    description: this.descriptionTime,
                }

                window.registerTimeslot(JSON.stringify(this.data))

                this.$router.push('/Grade')
                Swal.fire({
                    text: 'Intervalo cadastrado com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                })
            },
        },
    }
</script>

<template>
    <div class="registerTimeslot-container">


        <div class="registerTimeslot-title">
            Cadastro de Intervalo de Tempo:
        </div>
        <hr>
        <form class="registerTimeslot-form" @submit="HandleSubmit">
            
            <div class="mb-3">
                <label class="form-label">Dia</label>
                <select placeholder="Escolha um dia da semana" v-model="day" required class="form-select" aria-label="Default select example">
                    <option value="1">Segunda-feira</option>
                    <option value="2">Terça-feira</option>
                    <option value="3">Quarta-feira</option>
                    <option value="4">Quinta-feira</option>
                    <option value="5">Sexta-feira</option>
                    <option value="6">Sábado</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Turno</label>
                <select placeholder="Escolha um dia da semana" v-model="shift" required class="form-select" aria-label="Default select example">
                    <option value="0">Matutino</option>
                    <option value="1">Vespertino</option>
                    <option value="2">Noturno</option>
                </select>
            </div>

            <div class="mb-3">
                <label class="form-label">Intervalo</label>
                <select placeholder="Escolha um dia da semana" v-model="slot" required class="form-select" aria-label="Default select example">
                    <option value="0">Primeiro horário</option>
                    <option value="1">Segundo horário</option>
                    <option value="2">Terceiro horário</option>
                </select>
            </div>
            
            <button type="submit" class="btn btn-primary">Cadastrar</button>
        
        </form>
    </div>

</template>

<style>


    .registerTimeslot-title{
        padding-top: 20px;
        font-size: 20px;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
        display: flex;
        font-weight: bold;
       
    }

    .registerTimeslot-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }
</style>