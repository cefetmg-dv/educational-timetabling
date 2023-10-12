#ifndef TIMETABLING_MIP_HPP__
#define TIMETABLING_MIP_HPP__

#include "./timetabling.hpp"
#include "./solver.hpp"

/**
 * Solves the timetabling problem using a MIP solver.
*/
class MIP : public Solver {
public:

    /**
     * Solves the given problem.
     * @param problem The problem to be solved.
     * @return A vector of event schedules.
     */
    std::vector<EventSchedule> solve(const Problem& problem) override;

};

#endif // TIMETABLING_MIP_HPP__
