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
int OF(){

    int finalValue = 0;

    //RESTRIÇÕES RÍGIDAS

    //Uma sala não pode ser usada por duas disciplinas em um mesmo horário

    //Um professor deve ser alocado em uma única disciplina e em uma única sala em determinado horário

    //Professores não podem dar aula em turnos alternados(manhã e noite), deve ser manhã e tarde ou tarde e noite

    //Não deve haver espaço entre aulas maior que 2 horários (Se possı́vel apenas 1)

    //Matérias optativas para certo curso não podem colidir horários com as aulas do semestre em que se é ofertada

    //RESTRIÇÕES SUAVES

    //Em um mesmo dia, aulas de laboratório de determinada disciplina devem vir depois das aulas de teoria

    //Evitar espaços entre horários

    //Evitar aulas de eixos parecidos de forma consecutiva para uma mesma turma

    //Evitar dias sem aulas para determinadas turmas

    return finalValue ;
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
    }

    //Simulated Annealing
    std::vector<EventSchedule> auxSchedules;
    float temperature = T0;     //define temperatura
    float alfa = 0.1;           //taxa de resfriamento
    int iterT = 0;              //número de iterações na temperatura T
    float delta = 0;            //variação do valor da função objetivo
    float x = 0;                //número aleatório entre 0 e 1
    time_t t = time(NULL);
    srand(t);

    while(temperature>0){
        while(iterT < SAmax){
            iterT++;
            //delta = OF(schedules) - OF(auxSchedules);
            if(delta < 0){
                //schedules = auxSchedules;
                //if(f(s') < f(s*)){ s* = s'; }
            }else{ 
                x = rand()%1;   //gera número aleatório de 0 a 1
                if(x < exp(delta,temperature)){
                    //s = s';
                }
            }
        }
        temperature = alfa * temperature;   //muda temperatura por taxa
        iterT = 0;                          //zera contador de iterações
    }
    //s = s*;


    return schedules;
}
