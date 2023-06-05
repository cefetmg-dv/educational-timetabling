<script>
    export default{
        methods: {
            HandleSubmit(e){
                e.preventDefault()
            }
        }
    }
</script>

<template>

    <div class="registerTeacher-container">
        <form class="registerTeacher-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome completo</label>
                <input required v-model="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div class="mb-3">
                <label class="form-label">Abreviatura</label>
                <input required v-model="abbreviation" type="text" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input required v-model="email" type="email" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Telefone</label>
                <input required v-model="cellphone" type="text" class="form-control" id="exampleInputPassword1"/>
            </div>

            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
    </div>

</template>

<style>
    .registerTeacher-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }
</style>