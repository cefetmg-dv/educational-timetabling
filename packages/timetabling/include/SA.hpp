#ifndef TIMETABLING_SA_HPP__
#define TIMETABLING_SA_HPP__


#include "./solver.hpp"
#include "./timetabling.hpp"


/**
 * Solves the timetabling problem using the simulated annealing algorithm.
*/
class SA: public Solver{
public:

    /**
     * Solves the given problem.
     * @param problem The problem to be solved.
     * @return A vector of event schedules.
     */
    std::vector<EventSchedule> solve(const Problem& problem) override;
};


#endif //TIMETABLING_SA_HPP__s