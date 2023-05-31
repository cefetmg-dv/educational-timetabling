<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="navbar-container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">

                <button class="navbar-toggler me-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    
                        <div class="navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link" aria-current="page" to="/">
                                    <div class="navbar-textAndImage">
                                        <img src = "../assets/inicio.png" style = "width: 50px" alt="novo-horario"/>
                                        <p>Início</p>
                                    </div>
                                </router-link>
                            </li>
                        </div>
                        <div class="navbar-nav ms-auto">
                        <ul class="navbar-nav">
                            <li class='nav-item'>
                                <router-link class="nav-link" to="/Horarios">
                                    <div class="navbar-textAndImage">
                                        <img src = "../assets/novo-horario.png" style = "width: 50px" alt="novo-horario"/>
                                        <p>Horários</p>
                                    </div>
                                </router-link>

                            </li>
                            
                            <li class='nav-item'>
                                <router-link class ="nav-link" to="/Professores">
                                    <div class="navbar-textAndImage">
                                        <img src = "../assets/professor.png" style = "width: 50px" alt="novo-horario"/>
                                        <p>Professores</p>
                                    </div>
                                </router-link>
                            </li>

                            <li class='nav-item'>
                                <router-link class="nav-link" to="/Disciplinas">
                                    <div class="navbar-textAndImage">
                                        <img src = "../assets/disciplina.png" style = "width: 50px" alt="novo-horario"/>
                                        <p>Disciplinas</p>
                                    </div>
                                </router-link>
                            </li>

                            <li class='nav-item'>
                                <router-link class="nav-link" to="/Cursos">
                                    <div class="navbar-textAndImage">
                                        <img src = "../assets/curso.png" style = "width: 50px" alt="novo-horario"/>
                                        <p>Cursos</p>
                                    </div>
                                </router-link>
                            </li>

                            <li class='nav-item'>
                                <router-link class="nav-link" to="/Salas">
                                    <div class="navbar-textAndImage">
                                        <img src = "../assets/sala.png" style = "width: 50px" alt="novo-horario"/>
                                        <p>Salas</p>
                                    </div>
                                </router-link>
                            </li>

                            <li class='nav-item'>
                                <router-link class="nav-link" to="/Turmas">
                                    <div class="navbar-textAndImage">
                                        <img src = "../assets/turma.png" style = "width: 50px" alt="novo-horario"/>
                                        <p>Turmas</p>
                                    </div>
                                </router-link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>

.navbar-container{
    background-color: #72BA75;
    min-height: 100px;
    font-family: Poppins, sans-serif;    
}

.navbar-textAndImage{
    text-align: center;
}

.navbar-textAndImage>p{
    color: white;
}

.navbar-textAndImage>p:hover{
    color: black;
}

.navbar-textAndImage:hover>p{
    color: black;
}

.navbar-textAndImage:hover{
    transform: translateY(-5px);
}

</style>

