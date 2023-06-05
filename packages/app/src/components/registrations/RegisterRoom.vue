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
    <div class="registerRoom-container">
        <form class="registerRoom-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Número da Sala</label>
                <input required v-model="number" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div class="mb-3">
                <label class="form-label">Utilidade</label>
                <input required v-model="utility" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
        
    </div>

</template>


<style>
    .registerRoom-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }
</style>