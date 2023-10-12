#include "../include/SA.hpp"

#include <math.h>
#include <ctime>
#define T0 50                   //temperatura inicial
#define SAmax 100               //número de iterações por temperatura
#define e 2.718281828           //número de euler aproximado

float exp(float delta, float temperature){
    return pow(e,(-delta/temperature));
}

std::vector<EventSchedule> SA::solve(const Problem& problem) {

    std::vector<EventSchedule> schedules;

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
            //delta = f(s') - f(s);
            if(delta < 0){
                //s = s';
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
