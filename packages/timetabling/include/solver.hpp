#ifndef TIMETABLING_SOLVER_HPP__
#define TIMETABLING_SOLVER_HPP__

#include "./timetabling.hpp"

/**
 * Defines the interface for a solver.
 */
class Solver {
public:

    /**
     * Solves the given problem.
     * @param problem The problem to be solved.
     * @return A vector of event schedules.
     */
    virtual std::vector<EventSchedule> solve(const Problem& problem) = 0;
    
};

#endif // TIMETABLING_SOLVER_HPP__
