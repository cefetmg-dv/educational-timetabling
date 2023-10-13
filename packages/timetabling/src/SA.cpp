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
    int lastClassID = 0;
    int finalValue = 0;

    //pegar último id de turma para dividir o schedules por turmas (classes)
    for(size_t i = 0; i < schedules.size(); ++i){
        for(size_t j = 0; j < data["events"].size(); ++j){
            if(data["events"][j]["id"] == i){
                lastClassID = data["events"][j]["class"];
            }
        }
    }

    //RESTRIÇÕES RÍGIDAS

    
    //Uma sala não pode ser usada por duas disciplinas em um mesmo horário (independente da classe)
    for(size_t i = 0; i < schedules.size(); ++i){
        for(size_t j = 0; j < schedules.size(); ++j){
            if(schedules[i].timeslot == schedules[j].timeslot && schedules[i].room == schedules[j].room && i != j){
                finalValue += rigidWeigth;
            }
        }
    }
    
    //Eventos de uma mesma classe devem estar em timeslots diferentes
    int class1 = 0;
    int class2 = 0;
    for(size_t i = 0; i < schedules.size(); ++i){
        //pega id da classe do 
        for(size_t k = 0; k < data["events"].size(); ++k){
            if(data["events"][k]["id"] == i){
                class1 = data["events"][k]["class"];
            }
        }
        for(size_t j = 0; j < schedules.size(); ++j){
            for(size_t k = 0; k < data["events"].size(); ++k){
                if(data["events"][k]["id"] == j){
                    class2 = data["events"][k]["class"];
                }
            }
            if(schedules[i].timeslot == schedules[j].timeslot && i != j && class1 == class2){
                //divide por 2, pois sempre contabiliza o dobro
                finalValue += rigidWeigth/2;
            }
        }
    }

    //Um professor deve ser alocado em uma única disciplina e em uma única sala em determinado horário
    

    //Professores não podem dar aula em turnos alternados(manhã e noite), deve ser manhã e tarde ou tarde e noite

    //Não deve haver espaço entre aulas maior que 2 horários (Se possı́vel apenas 1)
    for(size_t i = 0; i < schedules.size(); ++i){

    }

    //Matérias optativas para certo curso não podem colidir horários com as aulas do semestre em que se é ofertada

    //RESTRIÇÕES SUAVES

    //Em um mesmo dia, aulas de laboratório de determinada disciplina devem vir depois das aulas de teoria (sem dados suficientes para esse)

    //Evitar espaços entre horários

    //Evitar aulas de eixos parecidos de forma consecutiva para uma mesma turma (sem dados suficientes para esse)

    //Evitar dias sem aulas para determinadas turmas
    
        /*   
        for(size_t i = 0; i <= lastClassID; ++i){
            for(size_t j = 0; j < data["events"].size(); ++j){
                if(data["eventos"][j]["class"] == i){
                    for()
                }
            }
        }
        */
        
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
    float temperature = T0;     //define temperatura
    float alfa = 0.3;           //taxa de resfriamento
    int iterT = 0;              //número de iterações na temperatura T
    int delta = 0;             //variação do valor da função objetivo
    float x = 0;                //número aleatório entre 0 e 1
    time_t t = time(NULL);
    srand(t);

    while(temperature>0.1){
        while(iterT < SAmax){
            iterT++;
            auxSchedules = shuffleSchedule(schedules, problem);
            delta = OF(auxSchedules, raw_data) - OF(schedules, raw_data);
            std::cout<<"DELTA: "<<delta<<std::endl;
            if(delta <= 0){
                std::cout<<"MELHOROU"<<std::endl;
                schedules = auxSchedules;
            }else{ 
                x = static_cast<float>(rand()) / RAND_MAX;   //gera número aleatório de 0 a 1
                //std::cout<<x<<" <  "<<exp(delta,temperature)<<std::endl;
                if(x < exp(delta,temperature)){
                    std::cout<<"PIOROU"<<std::endl;
                    schedules = auxSchedules;
                }
            }
            std::cout<<"OF: "<<OF(schedules, raw_data)<<std::endl;
        }
        temperature = alfa * temperature;   //muda temperatura por taxa
        iterT = 0;                          //zera contador de iterações
    }
    

    return schedules;
}
