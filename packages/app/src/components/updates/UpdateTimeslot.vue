<script>

export default {

  //pega dados passados pela url
  computed: {
    timeslotID() {
      return this.$route.params.id;
    }
  }
};
</script>

<template>
  
  <div class="updateTimeslot-container">
        <form class="registerTimeslot-form" @submit="HandleSubmit">
            
            <div class="mb-3">
                <label class="form-label">Dia</label>
                <select v-model="dia" required class="form-select" aria-label="Default select example">
                    <option selected>Escolha um dia da semana</option>
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
                <select v-model="turno" required class="form-select" aria-label="Default select example">
                    <option selected>Escolha um turno</option>
                    <option value="0">Matutino</option>
                    <option value="1">Vespertino</option>
                    <option value="2">Noturno</option>
                </select>
            </div>

            <div class="mb-3">
                <label class="form-label">Intervalo</label>
                <select v-model="intervalo" required class="form-select" aria-label="Default select example">
                    <option selected>Escolha um intervalo</option>
                    <option value="1">Primeiro horário</option>
                    <option value="2">Segundo horário</option>
                    <option value="3">Terceiro horário</option>
                </select>
            </div>
            
            <button type="submit" class="btn btn-primary">Cadastrar</button>
        
        </form>
    </div>


</template>

<style>

    .updateTimeslot-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }

</style>
