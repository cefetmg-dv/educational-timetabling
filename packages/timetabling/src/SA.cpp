#include "../include/SA.hpp"
#include "../libs/json.hpp"

using json = nlohmann::json;

#include <math.h>
#include <ctime>
#include <iostream>
#define T0 50                   //temperatura inicial
#define SAmax 100               //número de iterações por temperatura
#define e 2.718281828           //número de euler aproximado
#define rigidWeigth 10          //peso das restrições rígidas
#define softWeigth 1            //peso das restrições suaves

float exp(float delta, float temperature){
    return pow(e,(-delta/temperature));
}

//calculates the objective function for each solution 
int OF(const std::vector<EventSchedule>& schedules, const std::string& raw_data){

    json data = json::parse(raw_data);
    

    //aux variables
    int finalValue = 0;
    int class1 = 0;
    int class2 = 0;
    int class3 = 0;
    int subject1 = 0;
    int subject2 = 0;
    bool isDivided1 = false;
    bool isDivided2 = false;
    int professor1 = 0;
    int professor2 = 0;
    int timeslot1 = 0;
    int timeslot2 = 0;
    int classesQuantity = 0;
    std::vector<bool> daysWithEventPerClass(7);
    int contDaysWithEventPerClass = 0;
    bool rightShift = true;

    //RESTRIÇÕES RÍGIDAS

    //Respeitar turnos de determinadas disciplinas
    for(size_t i = 0; i < schedules.size(); ++i){
        rightShift = true;
        for(size_t j = 0; j < data["timeslots"].size(); ++j){
            if(schedules[i].timeslot == data["timeslots"][j]["id"]){
                //se for aquele timeslot, tenho que verificar se aquele shift está contido nos permitidos
                for(size_t k = 0; k < data["events"].size; ++k){
                    if(schedules[i].event == data["events"][k]["id"]){
                        for(size_t l = 0; l < data["classes"].size(); ++l){
                            if(data["events"][k]["class"] == data["classes"][l]){
                                for(size_t m = 0; m < data["classes"][l]["subjects"].size(); ++m){
                                    if(data["classes"][l]["subjects"][m]["id"] == data["events"][k]["subject"]){
                                        for(size_t n = 0; n < data["classes"][l]["subjects"][m]["shifts"].size; n++){
                                            if(schedules[i].timeslot != data["classes"][l]["subjects"][m]["shifts"][n]){
                                                rightShift == false;
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
        if(rightShift == false){
            finalValue += rigidWeigth;
        }
    }

    //Se disciplina for divided = true pode numa mesma classe alocação no mesmo timeslot

    //Uma sala não pode ser usada por duas disciplinas em um mesmo horário (independente da classe) 
    for(size_t i = 0; i < schedules.size(); ++i){
        for(size_t j = 0; j < schedules.size(); ++j){
            if(schedules[i].timeslot == schedules[j].timeslot && schedules[i].room == schedules[j].room && i != j){
                finalValue += rigidWeigth;
            }
        }
    }

    //Eventos de uma mesma classe devem estar em timeslots diferentes
    for(size_t i = 0; i < schedules.size(); ++i){
        //pega id da class1 e verifico se matéria é dividida
        for(size_t k = 0; k < data["events"].size(); ++k){
            if(data["events"][k]["id"] == i){
                class1 = data["events"][k]["class"];
                subject1 = data["events"][k]["subject"];
                for(size_t l = 0; l < data["classes"].size(); ++l){
                    if(data["classes"][l]["id"] == class1){
                        for(size_t m = 0; m < data["classes"][l]["subjects"].size(); ++m){
                            if(data["classes"][l]["subjects"][m]["id"] == subject1){
                                isDivided1 = data["classes"][l]["subjects"][m]["divided"];
                            }
                        }
                    }
                }
            }
        }
        for(size_t j = 0; j < schedules.size(); ++j){
            //pega id da class2 e verifico se matéria é dividida
            for(size_t k = 0; k < data["events"].size(); ++k){
                if(data["events"][k]["id"] == j){
                    class2 = data["events"][k]["class"];
                    subject2 = data["events"][k]["subject"];
                    for(size_t l = 0; l < data["classes"].size(); ++l){
                        if(data["classes"][l]["id"] == class2){
                            for(size_t m = 0; m < data["classes"][l]["subjects"].size(); ++m){
                                if(data["classes"][l]["subjects"][m]["id"] == subject2){
                                    isDivided2 = data["classes"][l]["subjects"][m]["divided"];
                                }
                            }
                        }
                    }
                }
            }
            if(schedules[i].timeslot == schedules[j].timeslot && i != j && class1 == class2 && !isDivided1 && !isDivided2){
                //divide por 2, pois sempre contabiliza o dobro
                finalValue += rigidWeigth/2;
            }else if(schedules[i].timeslot == schedules[j].timeslot && i != j && class1 == class2 && isDivided1 && isDivided2){
                //agora que sei que é a mesma turma e mesmo horário, verifico se são duas apenas 
                for(size_t k = 0; k < schedules.size(); ++k){
                    for(size_t l = 0; l < data["events"].size(); ++l){
                        if(data["events"][l]["id"] == k){
                            //significa que tem mais de 2 no mesmo horário
                            if(data["events"][l]["class"] == class1 && schedules[k].timeslot == schedules[i].timeslot){
                                finalValue += rigidWeigth;
                            }
                        }
                    }
                }
            }
        }
    }

    //Um professor deve ser alocado em uma única disciplina e em uma única sala em determinado horário
    for(size_t i = 0; i < schedules.size(); ++i){
        for(size_t j = 0; j < schedules.size(); ++j){
            //se o timeslot for igual e não tiver comparando com ele mesmo, verificar se o professor é o mesmo
            if(schedules[i].timeslot == schedules[j].timeslot && i != j){
                for(size_t k = 0; k < data["events"].size(); ++k){
                    if(data["events"][k]["id"] == i){
                        professor1 = data["events"][k]["teacher"];
                    }else if(data["events"][k]["id"] == j){
                        professor2 = data["events"][k]["teacher"];
                    }
                }
                if(professor1 == professor2){
                    finalValue += rigidWeigth;
                }
            }
        }
    }

    //Professores não podem dar aula em turnos alternados(manhã e noite), deve ser manhã e tarde ou tarde e noite
    for(size_t i = 0; i < schedules.size(); ++i){
        for(size_t j = 0; j < schedules.size(); ++j){
            //verifico se estas duas aulas tem o mesmo professor
            for(size_t k = 0; k < data["events"].size(); ++k){
                if(data["events"][k]["id"] == i && i!=j){
                    professor1 = data["events"][k]["teacher"];
                }else if(data["events"][k]["id"] == j && i!=j){
                    professor2 = data["events"][k]["teacher"];
                }
            }
            if(professor1 == professor2){
                //para cada aula pego o timeslot dela
                for(size_t k = 0; k < data["timeslots"].size(); ++k){
                    if(schedules[i].timeslot == data["timeslots"][k]["id"]){
                            timeslot1 = data["timeslots"][k]["id"];
                    }else if(schedules[j].timeslot == data["timeslots"][k]["id"]){
                            timeslot2 = data["timeslots"][k]["id"];
                    }
                }
                //verifico se timeslot está no mesmo dia e se for, verifico se está em timeslots diferentes
                for(size_t k = 0; k < data["timeslots"].size(); ++k){
                    if(data["timeslots"][timeslot1]["day"] == data["timeslots"][timeslot2]["day"]){
                        if(data["timeslots"][timeslot1]["shift"] == 0 && data["timeslots"][timeslot1]["shift"] == 2 ||
                           data["timeslots"][timeslot1]["shift"] == 1 && data["timeslots"][timeslot1]["shift"] == 0
                        ){
                            finalValue += rigidWeigth;
                        }
                    }   
                }
            }
            
        }
    }


    //Matérias optativas para certo curso não podem colidir horários com as aulas do semestre em que se é ofertada (desnecessária? se é pra uma classe vai ser alocada corretamente nela)

    //RESTRIÇÕES SUAVES

    //Em um mesmo dia, aulas de laboratório de determinada disciplina devem vir depois das aulas de teoria (sem dados suficientes para esse)

    //Não deve haver espaço entre aulas maior que 2 horários na mesma classe em qualquer dia(Se possı́vel apenas 1) 

    for(size_t i = 0; i < schedules.size(); ++i){
        //pega id da class1
        for(size_t k = 0; k < data["events"].size(); ++k){
            if(data["events"][k]["id"] == i){
                class1 = data["events"][k]["class"];
            }
        }
        for(size_t j = 0; j < schedules.size(); ++j){
            //pega id da class2
            for(size_t k = 0; k < data["events"].size(); ++k){
                if(data["events"][k]["id"] == j){
                    class2 = data["events"][k]["class"];
                }
            }
            //verifico se estou tratando da mesma classe e não do mesmo schedule
            if(class1 == class2 && i != j){
                //para cada aula pego o timeslot dela
                for(size_t k = 0; k < data["timeslots"].size(); ++k){
                    if(schedules[i].timeslot == data["timeslots"][k]["id"]){
                            timeslot1 = data["timeslots"][k]["id"];
                    }else if(schedules[j].timeslot == data["timeslots"][k]["id"]){
                            timeslot2 = data["timeslots"][k]["id"];
                    }
                }
                //verifico se está em turnos diferentes e penalizo para ficarem em turnos iguais (diminuir espaços)
                if(data["timeslots"][timeslot1]["day"] == data["timeslots"][timeslot2]["day"]     && (
                   data["timeslots"][timeslot1]["shift"] != data["timeslots"][timeslot2]["shift"] )
                ){
                    finalValue += softWeigth;
                }
            }
        }
    }

    //Evitar aulas de eixos parecidos de forma consecutiva para uma mesma turma (sem dados suficientes para esse)
    for(size_t i = 0; i < schedules.size(); ++i){
        for(size_t j = 0; j < data["events"].size(); ++j){
            if(data["events"][j]["id"] == i){
                for(size_t k = 0; k < data["classes"].size(); ++k){
                    if(data["classes"][k]["id"] == data["events"][j]["class"]){
                        for(size_t l = 0; l < data["classes"][k]["subjects"].size(); ++l){
                            if(data["classes"][k]["subjects"][l] == data["events"][j]["subject"]){
                                for(size_t m = 0; m < data["classes"][k]["subjects"][l]["antiSubjects"].size(); ++m){
                                    //a partir daqui falta verificar se para aqueles antiSubjects tenho um depois dessa aula
                                    for(size_t n = 0; n < data["events"].size(); ++n){
                                        if(data["events"][n]["id"] == i+1 && i+1 != schedules.size()){
                                            if(data["events"][n]["subject"] == data["classes"][k]["subjects"][l]["antiSubjects"][m]){
                                                finalValue += softWeigth;
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
    }


    //Evitar dias sem aulas para determinadas turmas

    for(size_t i = 0; i < schedules.size(); ++i){
        for(size_t j = 0; j < data["events"].size(); ++j){
            if(data["events"][j]["id"] == i){
                if(data["events"][j]["class"] > classesQuantity){
                    classesQuantity = data["events"][j]["class"];
                }
            }
        }
    }
    for(size_t i = 0; i < classesQuantity; ++i){
        for(size_t j = 0; j < daysWithEventPerClass.size(); ++j){
            daysWithEventPerClass[j] = false;
        }
        contDaysWithEventPerClass = 0;
        for(size_t j = 0; j < schedules.size(); ++j){
            for(size_t k = 0; k < data["events"].size(); ++k){
                if(data["events"][k]["id"] == j && data["events"][k]["class"] == i){
                    for(size_t l = 0; l < data["timeslots"].size(); ++l){
                        if(data["timeslots"][l]["id"] == data["events"][k]["timeslots"]){
                            if(data["timeslots"][l]["day"] == 0){
                                daysWithEventPerClass[0] = true;
                            }else if(data["timeslots"][l]["day"] == 1){
                                daysWithEventPerClass[1] = true;
                            }else if(data["timeslots"][l]["day"] == 2){
                                daysWithEventPerClass[2] = true;
                            }else if(data["timeslots"][l]["day"] == 3){
                                daysWithEventPerClass[3] = true;
                            }else if(data["timeslots"][l]["day"] == 4){
                                daysWithEventPerClass[4] = true;
                            }else if(data["timeslots"][l]["day"] == 5){
                                daysWithEventPerClass[5] = true;
                            }else if(data["timeslots"][l]["day"] == 6){
                                daysWithEventPerClass[6] = true;
                            }
                        }
                    }
                }
            }
        }
        for(size_t j = 0; j < daysWithEventPerClass.size(); ++j){
            if(daysWithEventPerClass[j] == true){
                contDaysWithEventPerClass ++;
            }
        }
        if(contDaysWithEventPerClass < 6){
            finalValue += softWeigth;
        }
    }
       
    
  

    //preferencias de professores (olhar esse peso)
    for(size_t i = 0; i < schedules.size(); ++i){
        for(size_t j = 0; j < data["events"].size(); ++j){
            if(data["events"][j]["id"] == i){
                for(size_t k = 0; k < data["teachers"].size(); ++k){
                    if(data["teachers"][k]["id"] == data["events"][j]["teacher"]){
                        if(data["teachers"][k]["preferences"].size() != 0){
                            for(size_t l = 0; l < data["teachers"][k]["preferences"].size(); ++l){
                                if(schedules[i].timeslot != data["teachers"][k]["preferences"][l]){
                                    finalValue += softWeigth;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //indisponibilidades de professores
    for(size_t i = 0; i < schedules.size(); ++i){
        for(size_t j = 0; j < data["events"].size(); ++j){
            if(data["events"][j]["id"] == i){
                for(size_t k = 0; k < data["teachers"].size(); ++k){
                    if(data["teachers"][k]["id"] == data["events"][j]["teacher"]){
                        if(data["teachers"][k]["unavailability"].size() != 0){
                            for(size_t l = 0; l < data["teachers"][k]["unavailability"].size(); ++l){
                                if(schedules[i].timeslot == data["teachers"][k]["unavailability"][l]){
                                    finalValue += softWeigth;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //indisponibilidades de salas
    for(size_t i = 0; i < schedules.size(); ++i){
        for(size_t j = 0; j < data["rooms"].size(); ++j){
            if(data["rooms"][j]["id"] == schedules[i].room){
                for(size_t k = 0; k < data["rooms"][j]["unavailability"].size(); ++k){
                    if(schedules[i].room == data["rooms"][j]["unavailability"][k]){
                        finalValue += softWeigth;
                    }
                }
            }
        }
    }
        
    return finalValue;
}

//função para caminhar na vizinhança da solução atual
//troco um horário e uma sala aleatórios (poderia trocar pra uma para cada classe)
std::vector<EventSchedule> shuffleSchedule(const std::vector<EventSchedule>& schedules, const Problem& problem){

    std::vector<EventSchedule> modifiedSchedules = schedules;

    int randEvent = std::rand()%schedules.size();
    int randTimeslot = std::rand()%problem.n_timeslots;
    int randRoom = std::rand()%problem.n_rooms;

    modifiedSchedules[randEvent].timeslot = randTimeslot;
    modifiedSchedules[randEvent].room = randRoom;

    return modifiedSchedules;
}

std::vector<EventSchedule> SA::solve(const Problem& problem, const std::string& raw_data) {

    std::cout<<"SIMULATED ANNEALING"<<std::endl;

    json data = json::parse(raw_data);

    //create initial solution
    std::vector<EventSchedule> schedules;
    std::vector<bool> isTimeslotUsed(problem.n_timeslots);
    int randTimeslot = 0;
    int randRoom = 0;

    for(size_t i = 0; i < problem.n_events; ++i){
       randTimeslot = std::rand()%problem.n_timeslots;
       randRoom = std::rand()%problem.n_rooms;
       EventSchedule initialSchedules(i, randTimeslot, randRoom);
       schedules.emplace_back(initialSchedules);

       //verificar se tem timeslot e turma repetidos
    }
    
    std::cout<<"Solução inicial (não necessariamente válida)"<<std::endl;
    for(size_t i = 0; i < schedules.size(); ++i){
        for(size_t j = 0; j < data["events"].size(); ++j){
            if(data["events"][j]["id"] == i){
                std::cout<<"classe: "<<data["events"][j]["class"]<<"  ";
            }
        }
        std::cout<<schedules[i].event<< "  ";
        std::cout<<schedules[i].timeslot<< "  ";
        std::cout<<schedules[i].room<<std::endl;
    }
    std::cout<<"função objetivo da inicial:"<<std::endl;
    std::cout<<OF(schedules,raw_data)<<std::endl;


    
    //Simulated Annealing
    std::vector<EventSchedule> auxSchedules;
    std::vector<EventSchedule> bestSchedules = schedules;
    float temperature = T0;     //define temperatura
    float alfa = 0.1;           //taxa de resfriamento
    int iterT = 0;              //número de iterações na temperatura T
    int valueAux = 0;
    int valueBestSchedule = OF(bestSchedules, raw_data);
    int delta = 0;             //variação do valor da função objetivo
    float x = 0;                //número aleatório entre 0 e 1
    time_t t = time(NULL);
    srand(t);

    while(temperature>0.1){
        while(iterT < SAmax){
            iterT++;
            auxSchedules = shuffleSchedule(schedules, problem);
            valueAux = OF(auxSchedules, raw_data);
            delta = valueAux - OF(schedules, raw_data);
            if(delta <= 0){
                schedules = auxSchedules;
                if(valueAux < valueBestSchedule){
                    bestSchedules = auxSchedules;
                    valueBestSchedule = OF(bestSchedules, raw_data);
                }
            }else{ 
                x = static_cast<float>(rand()) / RAND_MAX;   //gera número aleatório de 0 a 1
                if(x < exp(delta,temperature)){
                    schedules = auxSchedules;
                }
            }
            //std::cout<<"OF: "<<OF(schedules, raw_data)<<std::endl;
            std::cout<<temperature<<std::endl;
        }
        temperature = alfa * temperature;   //muda temperatura por taxa
        iterT = 0;                          //zera contador de iterações
    }
    
    std::cout<<"OF:" <<OF(schedules, raw_data)<<std::endl;
    
    return bestSchedules;
}
